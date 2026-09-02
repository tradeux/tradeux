import { getCurrentSearchText } from "../trade-dom";
import type {
  CharmDataPort,
  CorruptionDataPort,
  FlaskDataPort,
  GearDataPort,
  JewelDataPort,
  PresetStatOption,
  StylerPort,
  TabletDataPort,
  WaystoneDataPort
} from "../ports";
import { usesCompactPresetCatalog, type PresetState } from "../presets/state";
import type { StylerSettings } from "../settings/model";
import type { StatFiltersFeature } from "./contracts";
import { createPresetStatCatalogService, type ModifierStatDetails } from "./catalog";
import { createResultModifiersFeature } from "./result-modifiers";
import {
  filterFocusedStatOptions,
  restoreNativeStatFilters
} from "./visibility";
interface StatOptionDetails { key: string; label: string; type: string; }
export function createStatFiltersFeature({
  charmData,
  corruptionData,
  flaskData,
  gearData,
  isUniqueActive = () => false,
  jewelData,
  persistSettings,
  presetState,
  settings,
  styler,
  tabletData,
  waystoneData
}: {
  charmData: CharmDataPort;
  corruptionData: CorruptionDataPort;
  flaskData: FlaskDataPort;
  gearData: GearDataPort;
  isUniqueActive?: () => boolean;
  jewelData: JewelDataPort;
  persistSettings(): void;
  presetState: PresetState;
  settings: StylerSettings;
  styler: StylerPort;
  tabletData: TabletDataPort;
  waystoneData: WaystoneDataPort;
}): StatFiltersFeature {
  const presetCatalog = createPresetStatCatalogService({
    charmData, flaskData, gearData, jewelData,
    onChange: scheduleDecoration,
    styler,
    tabletData,
    waystoneData
  });
  const normalizeStatFilterText = (value: string) => value.replace(/\s+/g, " ").trim().toLowerCase();
  function getStatFilterDetails(option: Element): StatOptionDetails | null {
    const type = option.querySelector(".mutate-type")?.textContent || "";
    const labelContainer = option.querySelector("div");
    const label =
      labelContainer?.querySelector(":scope > span")?.textContent ||
      labelContainer?.textContent ||
      "";
    if (!label.trim()) {
      return null;
    }

    return {
      key: `${normalizeStatFilterText(type)}::${normalizeStatFilterText(label)}`,
      label: label.replace(/\s+/g, " ").trim(),
      type: normalizeStatFilterText(type)
    };
  }

  function canonicalStatFilterText(value: string): string {
    return normalizeStatFilterText(value)
      .replace(/\s*\(local\)\s*$/, "")
      .replace(/\breduced\b/g, "increased");
  }

  function scheduleDecoration(): void {
    requestAnimationFrame(decorateStatFilterOptions);
  }

  function getStatGroupType(statGroup: Element): string | null {
    const header = statGroup.querySelector(".filter-group-header");
    const renderedType = header?.querySelector(
      ".multiselect__single, .filter-group-type, .filter-group-type-select"
    );

    const type = styler.getStatGroupTypeFromText(
      renderedType?.textContent || header?.textContent || ""
    );

    if (type) {
      return type;
    }

    return normalizeStatFilterText(header?.textContent || "") ===
      "stat filters"
      ? "and"
      : null;
  }

  function getStatGroups(): HTMLElement[] {
    return [
      ...document.querySelectorAll<HTMLElement>("#trade > .top .filter-group")
    ].filter((group) =>
      group.querySelector('input[placeholder="+ Add Stat Filter"]')
    );
  }

  function statGroupHasFilters(statGroup: Element): boolean {
    return Boolean(
      statGroup.querySelector(
        ".filter.full-span, .fixture-selected-stat, " +
          ".filter-group-body > .filter:not(.filter-select-mutate)"
      )
    );
  }

  function findPositiveStatGroup(): HTMLElement | null {
    const positiveTypes = new Set(["and", "sum", "sum2"]);
    const candidates = getStatGroups()
      .map((group, index) => ({
        group,
        index,
        type: getStatGroupType(group),
        used: statGroupHasFilters(group)
      }))
      .filter(
        (candidate): candidate is typeof candidate & { type: string } =>
          candidate.type !== null && positiveTypes.has(candidate.type)
      );

    candidates.sort((left, right) => {
      if (left.used !== right.used) {
        return Number(right.used) - Number(left.used);
      }

      const typeRank: Record<string, number> = { and: 1, sum: 2, sum2: 3 };
      return typeRank[right.type] - typeRank[left.type] ||
        right.index - left.index;
    });

    return candidates[0]?.group || null;
  }

  function findStatGroupByType(type: string): HTMLElement | null {
    return (
      getStatGroups().find((group) => getStatGroupType(group) === type) ?? null
    );
  }
  function waitForElement<T>(
    findElement: () => T | null,
    attempts = 12
  ): Promise<T | null> {
    return new Promise<T | null>((resolve) => {
      let remaining = attempts;
      const check = () => {
        const element = findElement();

        if (element || remaining <= 0) {
          resolve(element || null);
          return;
        }

        remaining -= 1;
        setTimeout(check, 50);
      };

      check();
    });
  }

  async function createStatGroup(type: string, { requireNew = false }: { requireNew?: boolean } = {}): Promise<HTMLElement | null> {
    const groupSelect = document.querySelector<HTMLElement>(
      "#trade > .top .filter-group-select"
    );
    const groupInput = groupSelect?.querySelector<HTMLInputElement>(
      'input[placeholder="+ Add Stat Group"]'
    );
    const optionLabel = type === "not" ? "Not" : "And";

    if (!groupSelect || !groupInput) {
      return null;
    }

    const findGroupOption = () =>
      [...groupSelect.querySelectorAll<HTMLElement>(
        ".multiselect__option:not(.multiselect__option--disabled), li > span"
      )].find(
        (candidate) =>
          normalizeStatFilterText(candidate.textContent || "") ===
          normalizeStatFilterText(optionLabel)
      ) ?? null;

    groupInput.focus();
    groupInput.click();
    const option = findGroupOption() ||
      (await waitForElement(findGroupOption, 20));

    if (!option) {
      return null;
    }

    const previousGroups = new Set(getStatGroups());
    option.click();

    return waitForElement(() => {
      const matchingNewGroup = getStatGroups().find(
        (group) =>
          !previousGroups.has(group) && getStatGroupType(group) === type
      );
      return matchingNewGroup || (requireNew ? null : findStatGroupByType(type));
    });
  }

  function findModifierStatFilterOption(
    statGroup: Element,
    statDetails: ModifierStatDetails
  ): HTMLElement | null {
    const targetLabel = styler.normalizeModifierStatText(statDetails.label);
    const candidates = [...statGroup.querySelectorAll<HTMLElement>(
      ".multiselect__element:not(.poe-trade-styler-waystone-stat-option) " +
        ".multiselect__option:not(.multiselect__option--disabled)"
    )]
      .map((option) => ({
        option,
        details: getStatFilterDetails(option),
        id: getStatOptionId(option.closest(".multiselect__element"), option)
      }))
      .filter(
        ({ details }) =>
          details &&
          styler.normalizeModifierStatText(details.label) === targetLabel
      );
    const targetId = String(statDetails.id || "").replace(/^stat\./, "");
    const exactIdMatch = targetId && candidates.find(({ id }) => id === targetId);

    if (exactIdMatch) {
      return exactIdMatch.option;
    }

    const preferredTypes = [
      statDetails.type,
      "explicit",
      "pseudo",
      "implicit",
      "enchant"
    ].filter((type, index, types) => type && types.indexOf(type) === index);

    candidates.sort((left, right) => {
      const leftType = normalizeStatFilterText(
        left.option.querySelector(".mutate-type")?.textContent || ""
      );
      const rightType = normalizeStatFilterText(
        right.option.querySelector(".mutate-type")?.textContent || ""
      );
      const leftRank = preferredTypes.indexOf(leftType);
      const rightRank = preferredTypes.indexOf(rightType);
      return (leftRank < 0 ? preferredTypes.length : leftRank) -
        (rightRank < 0 ? preferredTypes.length : rightRank);
    });

    return candidates[0]?.option || null;
  }

  function statGroupContainsModifier(
    statGroup: Element,
    statDetails: ModifierStatDetails
  ): boolean {
    const targetLabel = styler.normalizeModifierStatText(statDetails.label);

    return [...statGroup.querySelectorAll(".filter.full-span")].some((row) =>
      styler.normalizeModifierStatText(row.textContent || "").includes(
        targetLabel
      )
    );
  }

  async function activateModifierStatFilter(
    statGroup: Element,
    statDetails: ModifierStatDetails,
    searchQuery = statDetails.label
  ): Promise<boolean> {
    const input = statGroup.querySelector<HTMLInputElement>(
      'input[placeholder="+ Add Stat Filter"]'
    );

    if (!input) {
      return false;
    }

    input.focus();
    input.value = searchQuery;
    input.dispatchEvent(new Event("input", { bubbles: true }));

    const option = await waitForElement(
      () => findModifierStatFilterOption(statGroup, statDetails),
      20
    );

    if (!option) {
      return false;
    }

    if (statGroupContainsModifier(statGroup, statDetails)) {
      return true;
    }

    option.click();

    const clickedFilter = await waitForElement(
      () =>
        statGroupContainsModifier(statGroup, statDetails) ? statGroup : null,
      8
    );

    if (clickedFilter) {
      return true;
    }

    input.focus();
    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        bubbles: true,
        cancelable: true
      })
    );

    return Boolean(
      await waitForElement(
        () =>
          statGroupContainsModifier(statGroup, statDetails) ? statGroup : null,
        8
      )
    );
  }

  function selectNativeStatFilter(
    statFilter: Element,
    label: string
  ): boolean {
    const targetLabel = canonicalStatFilterText(label);
    const candidates = [
      ...statFilter.querySelectorAll<HTMLElement>(
        ".multiselect__element:not(.poe-trade-styler-corruption-option) " +
          ".multiselect__option:not(.multiselect__option--disabled)"
      )
    ]
      .map((option) => ({ option, details: getStatFilterDetails(option) }))
      .filter(
        ({ details }) =>
          details && canonicalStatFilterText(details.label) === targetLabel
      );
    const preferredTypes = ["enchant", "implicit"];

    for (const preferredType of preferredTypes) {
      const candidate = candidates.find(
        ({ option }) =>
          normalizeStatFilterText(
            option.querySelector(".mutate-type")?.textContent || ""
          ) === preferredType
      );

      if (candidate) {
        candidate.option.click();
        return true;
      }
    }

    return false;
  }

  function activateCorruptionStatFilter(
    statFilter: Element,
    label: string
  ): void {
    const input = statFilter.querySelector<HTMLInputElement>(
      'input[placeholder="+ Add Stat Filter"]'
    );

    if (!input) {
      return;
    }

    input.focus();
    input.value = styler.getCorruptionStatSearchQuery(label);
    input.dispatchEvent(new Event("input", { bubbles: true }));

    let attempts = 0;
    const selectWhenRendered = () => {
      if (selectNativeStatFilter(statFilter, label) || attempts >= 5) {
        return;
      }

      attempts += 1;
      setTimeout(selectWhenRendered, 40);
    };

    requestAnimationFrame(selectWhenRendered);
  }

  function createCorruptionStatOption(
    statFilter: Element,
    label: string,
    selectedUnique: string
  ): HTMLLIElement {
    const element = document.createElement("li");
    element.className =
      "multiselect__element poe-trade-styler-corruption-option";
    element.dataset.poeTradeStylerWaystoneSearch =
      normalizeStatFilterText(label);

    const option = document.createElement("span");
    option.className = "multiselect__option";
    option.tabIndex = 0;
    option.setAttribute("role", "option");
    option.title = `Corruption enchantment for ${selectedUnique}`;

    const type = document.createElement("i");
    type.className =
      "mutate-type mutate-type-enchant " +
      "poe-trade-styler-corruption-type";
    type.textContent = "enchant";

    const labelContainer = document.createElement("div");
    const labelText = document.createElement("span");
    labelText.textContent = label;
    labelContainer.append(labelText);
    option.append(type, labelContainer);
    element.append(option);

    option.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    option.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      activateCorruptionStatFilter(statFilter, label);
    });
    option.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activateCorruptionStatFilter(statFilter, label);
      }
    });

    return element;
  }

  function syncCorruptionStatOptions(
    statFilter: Element,
    statList: HTMLElement,
    selectedUnique: string,
    corruptionImplicits: readonly string[]
  ): void {
    const signature = JSON.stringify([selectedUnique, corruptionImplicits]);
    const existing = statList.querySelectorAll(
      ".poe-trade-styler-corruption-option"
    );

    if (
      statList.dataset.poeTradeStylerCorruptionSignature === signature &&
      existing.length === corruptionImplicits.length
    ) {
      return;
    }

    existing.forEach((element) => element.remove());
    statList.dataset.poeTradeStylerCorruptionSignature = signature;

    const fragment = document.createDocumentFragment();
    corruptionImplicits.forEach((label) => {
      fragment.append(
        createCorruptionStatOption(statFilter, label, selectedUnique)
      );
    });
    statList.prepend(fragment);
  }

  function getStatOptionId(
    element: Element | null,
    option: Element
  ): string {
    const carriers = [
      element,
      option,
      ...(element?.querySelectorAll(
        "[data-id], [data-stat-id], [data-value]"
      ) ?? [])
    ].filter((carrier): carrier is Element => carrier !== null);

    for (const carrier of carriers) {
      for (const attribute of ["data-id", "data-stat-id", "data-value"]) {
        const value = carrier.getAttribute(attribute) || "";
        const match = value.match(
          /(?:stat\.)?([a-z]+\.stat_\d+)/i
        );

        if (match) {
          return match[1];
        }
      }
    }

    return "";
  }

  function createWaystoneStatGroupHeader(type: string): HTMLLIElement {
    const element = document.createElement("li");
    element.className =
      "multiselect__element poe-trade-styler-waystone-stat-group";
    element.dataset.poeTradeStylerWaystoneGroup = type;

    const option = document.createElement("span");
    option.className =
      "multiselect__option multiselect__option--group " +
      "multiselect__option--disabled";
    option.textContent = type;
    element.append(option);
    return element;
  }

  function createAffixBadge(
    affix: PresetStatOption["affix"],
    extraClass = ""
  ): HTMLSpanElement | null {
    if (affix !== "prefix" && affix !== "suffix") {
      return null;
    }

    const badge = document.createElement("span");
    badge.className = [
      "poe-trade-styler-affix",
      `poe-trade-styler-affix-${affix}`,
      extraClass
    ].filter(Boolean).join(" ");
    badge.textContent = affix === "prefix" ? "P" : "S";
    badge.title = affix === "prefix" ? "Prefix" : "Suffix";
    badge.setAttribute("aria-label", badge.title);
    badge.dataset.poeTradeStylerAffix = affix;
    return badge;
  }

  function createWaystoneStatOption(
    statFilter: Element,
    definition: PresetStatOption
  ): HTMLLIElement {
    const element = document.createElement("li");
    element.className =
      "multiselect__element poe-trade-styler-waystone-stat-option";
    element.dataset.statId = definition.id;
    element.dataset.poeTradeStylerWaystoneGroup =
      definition.group || definition.type;
    element.dataset.poeTradeStylerWaystoneSearch =
      normalizeStatFilterText(definition.text);

    const option = document.createElement("span");
    option.className = "multiselect__option";
    option.tabIndex = 0;
    option.setAttribute("role", "option");

    const type = document.createElement("i");
    type.className = `mutate-type mutate-type-${definition.type}`;
    type.textContent = definition.type;

    const labelContainer = document.createElement("div");
    const label = document.createElement("span");
    label.textContent = definition.text;
    labelContainer.append(label);
    option.append(type, labelContainer);

    if (definition.affix === "prefix" || definition.affix === "suffix") {
      element.classList.add("poe-trade-styler-preset-affix-stat-option");
      const badge = createAffixBadge(
        definition.affix,
        "poe-trade-styler-preset-affix"
      );
      if (badge) option.append(badge);
    }
    element.append(option);

    const activate = () => {
      const statGroup = statFilter.closest(".filter-group");

      if (statGroup) {
        activateModifierStatFilter(statGroup, {
          id: definition.id,
          label: definition.text,
          type: definition.type
        });
      }
    };

    option.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    option.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      activate();
    });
    option.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });

    return element;
  }

  function syncWaystonePresetStatOptions(
    statFilter: Element,
    statList: HTMLElement
  ): void {
    const existing = statList.querySelectorAll(
      ".poe-trade-styler-waystone-stat-option, " +
        ".poe-trade-styler-waystone-stat-group"
    );

    if (!presetState.activePreset) {
      existing.forEach((element) => element.remove());
      delete statList.dataset.poeTradeStylerWaystoneSignature;
      return;
    }

    if (presetState.activePreset === "waystones") {
      presetCatalog.requestWaystoneCatalog();
    } else if (
      presetState.activePreset === "charms" &&
      presetState.selectedCharmBaseKey
    ) {
      presetCatalog.requestCharmCatalog(presetState.selectedCharmBaseKey);
    } else if (
      presetState.activePreset === "flasks" &&
      presetState.selectedFlaskBaseKey
    ) {
      presetCatalog.requestFlaskCatalog(presetState.selectedFlaskBaseKey);
    } else if (presetState.activePreset === "gear" && presetState.selectedGearSlotKey) {
      presetCatalog.requestGearCatalog(
        presetState.selectedGearSlotKey,
        presetState.selectedGearBaseKey,
        presetState.selectedGearItemKey
      );
    } else if (presetState.activePreset === "jewels" && presetState.selectedJewelBaseKey) {
      presetCatalog.requestJewelCatalog(presetState.selectedJewelBaseKey);
    } else if (presetState.selectedTabletBaseKey) {
      presetCatalog.requestTabletCatalog(presetState.selectedTabletBaseKey);
    }
    const presetStatOptions = presetCatalog.getOptions(
      presetState.activePreset
    );
    const signature = JSON.stringify(
      [
        presetState.activePreset,
        presetState.selectedCharmBaseKey,
        presetState.selectedFlaskBaseKey,
        presetState.selectedGearSlotKey, presetState.selectedGearBaseKey,
        presetState.selectedGearItemKey,
        presetState.selectedJewelBaseKey,
        presetState.selectedTabletBaseKey,
        presetStatOptions.map(({ id, text, type, group, affix }) => [
          id,
          text,
          type,
          group,
          affix
        ])
      ]
    );

    if (
      statList.dataset.poeTradeStylerWaystoneSignature === signature &&
      existing.length > 0
    ) {
      return;
    }

    existing.forEach((element) => element.remove());
    statList.dataset.poeTradeStylerWaystoneSignature = signature;

    const fragment = document.createDocumentFragment();
    let renderedGroup: string | null = null;

    presetStatOptions.forEach((definition) => {
      const group = definition.group || definition.type;
      if (group !== renderedGroup) {
        renderedGroup = group;
        fragment.append(createWaystoneStatGroupHeader(renderedGroup));
      }

        fragment.append(createWaystoneStatOption(statFilter, definition));
    });
    statList.prepend(fragment);
  }

  function filterStatOptionsForPreset(): void {
    if (!settings.hideIrrelevantAffixes) {
      restoreNativeStatFilters(document);
      return;
    }

    filterFocusedStatOptions({
      document,
      hideIrrelevantAffixes: true,
      isFocusedFilterActive: Boolean(
        presetState.activePreset || isUniqueActive()
      ),
      normalizeText: normalizeStatFilterText,
      preset: presetState.activePreset
    });
  }

  function decorateStatFilterOptions(): void {
    const statFilters = [
      ...document.querySelectorAll<HTMLInputElement>(
        '#trade > .top input[placeholder="+ Add Stat Filter"]'
      )
    ]
      .map((input) => input.closest<HTMLElement>(".multiselect"))
      .filter((filter): filter is HTMLElement => filter !== null);

    if (statFilters.length === 0) {
      return;
    }

    if (!settings.hideIrrelevantAffixes) {
      restoreNativeStatFilters(document);
      return;
    }

    const favorites = new Set(settings.statFilterFavorites);
    const selectedUnique =
      styler.getTradeGameKey(location.pathname) === "poe2"
        ? getCurrentSearchText()
        : "";
    const corruptionImplicits = corruptionData.getCorruptionImplicits(
      selectedUnique
    );
    const sortForPreset = Boolean(presetState.activePreset);

    statFilters.forEach((statFilter) => {
      const statList = statFilter.querySelector<HTMLElement>(
        ".multiselect__content"
      );
      const statInput = statFilter.querySelector<HTMLInputElement>(
        'input[placeholder="+ Add Stat Filter"]'
      );

      if (
        statInput &&
        statFilter.dataset.poeTradeStylerPresetFilterBound !== "true"
      ) {
        statInput.addEventListener("input", filterStatOptionsForPreset);
        statFilter.dataset.poeTradeStylerPresetFilterBound = "true";
      }

      statList?.classList.toggle(
        "poe-trade-styler-stat-filter-list",
        sortForPreset
      );

      if (statList) {
        syncCorruptionStatOptions(
          statFilter,
          statList,
          selectedUnique,
          corruptionImplicits
        );
        syncWaystonePresetStatOptions(statFilter, statList);
      }

      const nativeOptions =
        usesCompactPresetCatalog(presetState.activePreset)
          ? []
          : [
              ...statFilter.querySelectorAll<HTMLElement>(
                ".multiselect__element:not(.poe-trade-styler-corruption-option)" +
                  ":not(.poe-trade-styler-waystone-stat-option)" +
                  ":not(.poe-trade-styler-waystone-stat-group)"
              )
            ];

      nativeOptions.forEach((element) => {
          const option = element.querySelector<HTMLElement>(
            ".multiselect__option:not(.multiselect__option--disabled)"
          );
          const details = option && getStatFilterDetails(option);

          if (!details) {
            return;
          }

          element.dataset.poeTradeStylerStatKey = details.key;
          let favoriteButton = option.querySelector<HTMLButtonElement>(
            ".poe-trade-styler-stat-favorite"
          );

          if (!favoriteButton) {
            favoriteButton = document.createElement("button");
            favoriteButton.className = "poe-trade-styler-stat-favorite";
            favoriteButton.type = "button";
            option.append(favoriteButton);

            favoriteButton.addEventListener("pointerdown", (event) => {
              event.preventDefault();
              event.stopPropagation();
            });
            favoriteButton.addEventListener("click", (event) => {
              event.preventDefault();
              event.stopPropagation();

              const key = element.dataset.poeTradeStylerStatKey;
              if (!key) return;
              const nextFavorites = new Set(settings.statFilterFavorites);

              if (nextFavorites.has(key)) {
                nextFavorites.delete(key);
              } else {
                nextFavorites.add(key);
              }

              settings.statFilterFavorites = [...nextFavorites];
              decorateStatFilterOptions();
              persistSettings();
            });
          }

          const isFavorite = favorites.has(details.key);
          element.classList.toggle(
            "poe-trade-styler-stat-option-favorite",
            isFavorite
          );
          const favoriteSymbol = isFavorite ? "★" : "☆";

          // Replacing an unchanged text node triggers our document observer,
          // which schedules another decoration pass. Besides wasting a frame
          // forever, that redraw loop can disrupt the native dropdown's scroll
          // anchoring while the user is browsing a long stat list.
          if (favoriteButton.textContent !== favoriteSymbol) {
            favoriteButton.textContent = favoriteSymbol;
          }
          favoriteButton.setAttribute("aria-pressed", String(isFavorite));
          favoriteButton.setAttribute(
            "aria-label",
            `${isFavorite ? "Remove" : "Add"} ${details.label} ${
              isFavorite ? "from" : "to"
            } favorites`
          );
          favoriteButton.title = isFavorite
            ? "Remove from favorites"
            : "Add to favorites";
      });

    });

    filterStatOptionsForPreset();
  }

  const resultModifiers = createResultModifiersFeature({
    catalog: presetCatalog,
    groups: {
      activate: activateModifierStatFilter,
      create: createStatGroup,
      findPositive: findPositiveStatGroup,
      findType: findStatGroupByType
    },
    styler
  });
  return {
    activateModifierStatFilter,
    createStatGroup,
    decorateOptions: decorateStatFilterOptions,
    decorateResultModifiers: resultModifiers.decorate,
    filterForPreset: filterStatOptionsForPreset,
    findStatGroupByType,
    getStatGroupType,
    normalizeText: normalizeStatFilterText,
    setCharmBase: presetCatalog.setCharmBase,
    setFlaskBase: presetCatalog.setFlaskBase,
    setGearSelection: presetCatalog.setGearSelection,
    setJewelBase: presetCatalog.setJewelBase,
    setTabletBase: presetCatalog.setTabletBase,
    waitForElement
  };
}

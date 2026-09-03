import type {
  CorruptionDataPort,
  StylerPort,
  UniqueDataPort,
  UniqueItemDefinition,
  UniqueRuneforgingDefinition
} from "../ports";
import { composeRuneforgedView } from "./composition";
import { getSafeItemImageUrl } from "../image-assets";
import { createModalFrame } from "../modal-frame";
import { isPresetAccountOverflow } from "../preset-navigation-overflow";
import {
  filterUniqueEntries,
  getEntryVariant,
  sortUniqueEntries,
  type UniqueResultEntry
} from "./catalogue";
import {
  createUniqueFavorites,
  UNIQUE_FAVORITES_TYPE,
  type UniqueFavoritesSettings
} from "./favorites";
import {
  appendImplicitText,
  appendModifierText,
  appendPropertyText,
  appendRequirementText,
  appendTextElement
} from "./item-text";

export interface UniqueHelperFeature {
  close(): boolean;
  createItemCard(key: string): HTMLElement | null;
  decorate(): void;
  destroy(): void;
}

const TYPE_ORDER = [
  "One Hand Swords",
  "Two Hand Swords",
  "One Hand Axes",
  "Two Hand Axes",
  "One Hand Maces",
  "Two Hand Maces",
  "Sceptres",
  "Spears",
  "Quarterstaves",
  "Staves",
  "Wands",
  "Bows",
  "Crossbows",
  "Claws",
  "Daggers",
  "Flails",
  "Traps",
  "Quivers",
  "Shields",
  "Bucklers",
  "Foci",
  "Helmets",
  "Body Armours",
  "Gloves",
  "Boots",
  "Amulets",
  "Rings",
  "Belts",
  "Talismans",
  "Jewels",
  "Life Flasks",
  "Mana Flasks",
  "Charms",
  "Relics",
  "Tablets",
  "Other"
] as const;

function sortTypes(types: readonly string[]): string[] {
  return [...types].sort((left, right) => {
    const leftIndex = TYPE_ORDER.indexOf(left as (typeof TYPE_ORDER)[number]);
    const rightIndex = TYPE_ORDER.indexOf(right as (typeof TYPE_ORDER)[number]);
    const normalizedLeft = leftIndex === -1 ? TYPE_ORDER.length : leftIndex;
    const normalizedRight = rightIndex === -1 ? TYPE_ORDER.length : rightIndex;
    return normalizedLeft - normalizedRight || left.localeCompare(right);
  });
}

export function createUniqueHelperFeature({
  corruptionData,
  document: doc = document,
  isActive = () => false,
  onDeactivate = async () => undefined,
  onBeforeOpen = async () => true,
  onSearchItem = async () => false,
  persistSettings = () => undefined,
  settings = { uniqueItemFavorites: [] },
  styler,
  uniqueData
}: {
  corruptionData: CorruptionDataPort;
  document?: Document;
  isActive?: () => boolean;
  onDeactivate?: () => Promise<void>;
  onBeforeOpen?: () => Promise<boolean>;
  onSearchItem?: (name: string) => Promise<boolean>;
  persistSettings?: () => void;
  settings?: UniqueFavoritesSettings;
  styler: StylerPort;
  uniqueData: UniqueDataPort;
}): UniqueHelperFeature {
  const types = sortTypes(uniqueData.UNIQUE_TYPES);
  const variantIndexes = new Map<string, number>();
  let selectedType = types[0] || "";
  let searchQuery = "";
  let minimumRequiredLevel: number | null = null;
  let maximumRequiredLevel: number | null = null;
  let listForgedSeparately = false;
  let tooltipSequence = 0;
  let itemSearchInProgress = false;
  let launcherToggleInProgress = false;
  let prepareSearchPromise: Promise<boolean> | null = null;
  let launcher: HTMLButtonElement | null = null;
  let modal: HTMLDivElement | null = null;
  let typeList: HTMLElement | null = null;
  let results: HTMLElement | null = null;
  const favorites = createUniqueFavorites({
    onChange: () => {
      renderTypes();
      renderResults();
    },
    persistSettings,
    settings
  });

  function isPoe2Page(): boolean {
    return (
      styler.getTradeGameKey(location.pathname) === "poe2" ||
      doc.body.dataset.fixtureGame === "poe2"
    );
  }

  function getFilteredEntries(type: string): UniqueResultEntry[] {
    return filterUniqueEntries(
      type === UNIQUE_FAVORITES_TYPE
        ? favorites.getItems(uniqueData.UNIQUE_ITEMS)
        : uniqueData.getItemsByType(type),
      listForgedSeparately,
      {
        maximumRequiredLevel,
        minimumRequiredLevel,
        searchQuery
      }
    );
  }

  function getVisibleTypes(): string[] {
    const visibleTypes = types.filter(
      (type) => getFilteredEntries(type).length > 0
    );
    return favorites.getItems(uniqueData.UNIQUE_ITEMS).length > 0
      ? [UNIQUE_FAVORITES_TYPE, ...visibleTypes]
      : visibleTypes;
  }

  function ensureSelectedType(): void {
    const visibleTypes = getVisibleTypes();
    if (!visibleTypes.includes(selectedType)) selectedType = visibleTypes[0] || "";
  }

  function getEntries(): UniqueResultEntry[] {
    return sortUniqueEntries(getFilteredEntries(selectedType));
  }

  function getVariantIndex(item: UniqueItemDefinition): number {
    return variantIndexes.get(item.key) ?? -1;
  }

  function getVariant(
    item: UniqueItemDefinition,
    variantIndex = getVariantIndex(item)
  ): UniqueRuneforgingDefinition | null {
    return variantIndex >= 0 ? item.runeforging[variantIndex] || null : null;
  }

  function appendLineGroup(
    parent: Element,
    title: string,
    lines: readonly string[],
    className: string,
    propertyStyles: readonly (number | null)[] = []
  ): void {
    if (lines.length === 0) return;
    const group = doc.createElement("section");
    group.className = `poe-trade-styler-unique-result-section ${className}`;
    group.setAttribute("aria-label", title);

    for (const [index, text] of lines.entries()) {
      const line = doc.createElement("div");
      line.className = "poe-trade-styler-unique-result-line";
      if (className.includes("result-properties")) {
        appendPropertyText(doc, line, text, propertyStyles[index] ?? null);
      } else if (className.includes("result-requirements")) {
        appendRequirementText(doc, line, text);
      } else if (className.includes("result-implicits")) {
        appendImplicitText(doc, line, text);
      } else if (className.includes("result-mods")) {
        appendModifierText(doc, line, text);
      } else {
        line.textContent = text;
      }
      group.append(line);
    }
    parent.append(group);
  }

  function createCorruptionInfo(
    corruptedImplicits: readonly string[]
  ): HTMLElement {
    const corruptionInfo = doc.createElement("div");
    corruptionInfo.className =
      "poe-trade-styler-unique-corruption-implicit-info";
    corruptionInfo.tabIndex = 0;
    corruptionInfo.setAttribute(
      "aria-label",
      `Possible corrupted implicits for ${selectedType}`
    );
    appendTextElement(
      doc,
      corruptionInfo,
      "span",
      "poe-trade-styler-unique-corruption-implicit-label",
      "Corrupted implicits"
    );
    const corruptionTooltip = doc.createElement("div");
    corruptionTooltip.className =
      "poe-trade-styler-unique-corruption-implicit-tooltip";
    corruptionTooltip.id =
      `poe-trade-styler-unique-corruption-tooltip-${++tooltipSequence}`;
    corruptionTooltip.setAttribute("role", "tooltip");
    corruptionInfo.setAttribute("aria-describedby", corruptionTooltip.id);
    appendLineGroup(
      corruptionTooltip,
      "Possible corrupted implicits",
      corruptedImplicits,
      "poe-trade-styler-unique-result-mods poe-trade-styler-unique-corruption-implicit-list"
    );
    corruptionInfo.append(corruptionTooltip);
    return corruptionInfo;
  }

  function getTypeCorruptionImplicits(): string[] {
    const implicits = new Set<string>();
    const items = selectedType === UNIQUE_FAVORITES_TYPE
      ? favorites.getItems(uniqueData.UNIQUE_ITEMS)
      : uniqueData.getItemsByType(selectedType);
    for (const item of items) {
      for (const implicit of corruptionData.getCorruptionImplicits(
        `${item.name} ${item.base}`
      )) {
        implicits.add(implicit);
      }
    }
    return [...implicits];
  }

  function createRuneforgeButton(
    item: UniqueItemDefinition,
    variantIndex?: number
  ): HTMLButtonElement {
    const variant = getVariant(item, variantIndex);
    const runeforgeCost = variant?.cost || item.runeforging[0]?.cost || "";
    const button = doc.createElement("button");
    button.className = "poe-trade-styler-unique-result-runeforge";
    button.type = "button";
    button.classList.toggle("is-active", Boolean(variant));
    button.setAttribute(
      "aria-label",
      variant
        ? `Showing ${variant.label}; switch version`
        : `Show Runeforged version of ${item.name}`
    );
    if (!runeforgeCost) {
      button.title = variant
        ? `${variant.label} (click to switch version)`
        : "Show Runeforged version";
    }

    const icon = doc.createElement("img");
    icon.src = getSafeItemImageUrl(uniqueData.RUNEFORGE_ICON);
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");
    appendTextElement(
      doc,
      button,
      "span",
      "poe-trade-styler-unique-result-runeforge-label",
      variant
        ? variant.tier === "runemastered"
          ? "Runemastered"
          : "Runeforged"
        : "Runeforge"
    );
    button.prepend(icon);
    if (runeforgeCost) {
      const costTooltip = doc.createElement("span");
      costTooltip.className =
        "poe-trade-styler-unique-result-runeforge-cost-tooltip";
      costTooltip.id =
        `poe-trade-styler-unique-runeforge-cost-${++tooltipSequence}`;
      costTooltip.setAttribute("role", "tooltip");
      costTooltip.textContent = runeforgeCost;
      button.setAttribute("aria-describedby", costTooltip.id);
      button.append(costTooltip);
    }
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const current = variantIndex ?? getVariantIndex(item);
      const next = current + 1 >= item.runeforging.length ? -1 : current + 1;
      if (variantIndex === undefined) variantIndexes.set(item.key, next);
      button
        .closest(".poe-trade-styler-unique-result")
        ?.replaceWith(createItemResult(item, variantIndex === undefined ? undefined : next));
    });
    return button;
  }

  function createItemResult(
    item: UniqueItemDefinition,
    variantIndex?: number
  ): HTMLElement {
    const variant = getVariant(item, variantIndex);
    const composedVariant = variant
      ? composeRuneforgedView(variant, item.mods)
      : null;
    const typeLine = variant?.label || item.base;
    const properties = composedVariant?.properties.length
      ? composedVariant.properties
      : item.baseProperties;
    const propertyStyles = composedVariant?.properties.length
      ? composedVariant.propertyStyles
      : item.basePropertyStyles;
    const normalItemClass = item.baseProperties.find(
      (property) => !property.includes(":")
    ) || item.type;
    const hasItemClassProperty = properties[0] && !properties[0].includes(":");
    const itemClass = hasItemClassProperty ? properties[0] : normalItemClass;
    const statProperties = hasItemClassProperty ? properties.slice(1) : properties;
    const statPropertyStyles = hasItemClassProperty
      ? propertyStyles.slice(1)
      : propertyStyles;
    const requirements = composedVariant?.requirements || item.requirements;
    const article = doc.createElement("article");
    article.className = "poe-trade-styler-unique-result";
    article.classList.toggle("is-forged", Boolean(variant));
    article.dataset.poeTradeStylerUniqueItem = item.key;
    if (variant) article.dataset.poeTradeStylerUniqueVariant = variant.key;
    article.setAttribute("aria-label", `${item.name}, ${typeLine}`);

    const heading = doc.createElement("h3");
    heading.className = "poe-trade-styler-unique-result-heading";
    const nameButton = doc.createElement("button");
    nameButton.className = "poe-trade-styler-unique-result-name-button";
    nameButton.type = "button";
    appendTextElement(
      doc,
      nameButton,
      "span",
      "poe-trade-styler-unique-result-name",
      item.name
    );
    appendTextElement(
      doc,
      nameButton,
      "span",
      "poe-trade-styler-unique-result-base",
      typeLine
    );
    const fullItemName = `${item.name} ${typeLine}`;
    nameButton.title = `Search trade for ${fullItemName}`;
    nameButton.setAttribute("aria-label", `Search trade for ${fullItemName}`);
    nameButton.addEventListener("click", async (event) => {
      event.preventDefault();
      if (itemSearchInProgress) return;
      itemSearchInProgress = true;
      try {
        const prepared = await (
          prepareSearchPromise ?? onBeforeOpen()
        ).catch(() => false);
        if (!prepared) return;
        close();
        await onSearchItem(fullItemName);
      } finally {
        itemSearchInProgress = false;
      }
    });
    heading.append(nameButton, favorites.createButton(doc, item));
    article.append(heading);

    const media = doc.createElement("div");
    media.className = "poe-trade-styler-unique-result-media";
    const artworkWrap = doc.createElement("div");
    artworkWrap.className = "poe-trade-styler-unique-result-art-wrap";
    artworkWrap.setAttribute("tabindex", "0");
    artworkWrap.setAttribute("aria-label", `${item.name} item details`);
    const artworkAnchor = doc.createElement("div");
    artworkAnchor.className = "poe-trade-styler-unique-result-art-anchor";
    const artwork = doc.createElement("img");
    artwork.className = "poe-trade-styler-unique-result-art";
    artwork.src = getSafeItemImageUrl(item.officialIcon);
    artwork.referrerPolicy = "no-referrer";
    artwork.loading = "lazy";
    artwork.alt = `${item.name} artwork`;
    artworkAnchor.append(artwork);
    artworkWrap.append(artworkAnchor);
    media.append(artworkWrap);

    const stats = doc.createElement("div");
    stats.className = "poe-trade-styler-unique-result-stats";
    appendLineGroup(
      stats,
      "Base properties",
      statProperties,
      "poe-trade-styler-unique-result-properties",
      statPropertyStyles
    );
    appendLineGroup(
      stats,
      "Requirements",
      [requirements],
      "poe-trade-styler-unique-result-requirements"
    );

    const actions = doc.createElement("div");
    actions.className = "poe-trade-styler-unique-result-actions";
    if (item.runeforging.length > 0) {
      actions.append(createRuneforgeButton(item, variantIndex));
    }
    const source = doc.createElement("a");
    source.className = "poe-trade-styler-unique-result-source";
    source.href = item.sourceUrl;
    source.target = "_blank";
    source.rel = "noreferrer";
    source.textContent = "More info";
    source.title = "Open the external information page";
    actions.append(source);
    media.append(actions);

    const modifiers = doc.createElement("div");
    modifiers.className = "poe-trade-styler-unique-result-affixes";
    appendLineGroup(
      modifiers,
      variant ? "Runeforged implicit modifiers" : "Base implicit modifiers",
      variant?.implicitMods || item.baseImplicitMods,
      "poe-trade-styler-unique-result-implicits"
    );
    appendLineGroup(
      modifiers,
      "Unique modifiers",
      item.mods,
      "poe-trade-styler-unique-result-mods"
    );
    const tooltip = doc.createElement("div");
    tooltip.className = "poe-trade-styler-unique-result-tooltip";
    tooltip.id = `poe-trade-styler-unique-tooltip-${++tooltipSequence}`;
    tooltip.setAttribute("role", "tooltip");
    artworkWrap.setAttribute("aria-describedby", tooltip.id);
    appendTextElement(
      doc,
      tooltip,
      "div",
      "poe-trade-styler-unique-tooltip-item-class",
      itemClass
    );
    appendLineGroup(
      tooltip,
      "Flavour text",
      item.flavourText,
      "poe-trade-styler-unique-result-flavour"
    );
    artworkAnchor.append(tooltip);

    article.append(media, stats, modifiers);
    return article;
  }

  function renderTypes(): void {
    if (!typeList) return;
    typeList.replaceChildren();
    ensureSelectedType();

    for (const type of getVisibleTypes()) {
      const typeEntries = sortUniqueEntries(getFilteredEntries(type));
      const count = typeEntries.length;
      const firstItem = typeEntries[0]?.item;
      const isFavorites = type === UNIQUE_FAVORITES_TYPE;
      const label = isFavorites ? "Favorites" : type;
      const tab = doc.createElement("button");
      tab.className = "poe-trade-styler-unique-type";
      tab.type = "button";
      tab.dataset.poeTradeStylerUniqueType = label;
      tab.classList.toggle("is-active", type === selectedType);
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", String(type === selectedType));
      if (isFavorites) {
        appendTextElement(
          doc,
          tab,
          "span",
          "poe-trade-styler-unique-type-favorite-icon",
          "★"
        ).setAttribute("aria-hidden", "true");
      } else if (firstItem) {
        const icon = doc.createElement("img");
        icon.className = "poe-trade-styler-unique-type-icon";
        icon.src = getSafeItemImageUrl(firstItem.officialIcon);
        icon.alt = "";
        icon.loading = "lazy";
        icon.referrerPolicy = "no-referrer";
        icon.setAttribute("aria-hidden", "true");
        tab.append(icon);
      }
      appendTextElement(
        doc,
        tab,
        "span",
        "poe-trade-styler-unique-type-name",
        label
      );
      appendTextElement(
        doc,
        tab,
        "span",
        "poe-trade-styler-unique-type-count",
        String(count)
      );
      tab.addEventListener("click", () => {
        if (selectedType === type) return;
        selectedType = type;
        renderTypes();
        renderResults();
      });
      typeList.append(tab);
    }
  }

  function applyFilters(): void {
    ensureSelectedType();
    renderTypes();
    renderResults();
  }

  function renderResults(): void {
    if (!results) return;
    results.replaceChildren();
    const entries = getEntries();
    const fragment = doc.createDocumentFragment();
    const summary = doc.createElement("header");
    summary.className = "poe-trade-styler-unique-results-summary";
    const corruptedImplicits = getTypeCorruptionImplicits();
    if (corruptedImplicits.length > 0) {
      summary.append(createCorruptionInfo(corruptedImplicits));
    }
    appendTextElement(
      doc,
      summary,
      "strong",
      "poe-trade-styler-unique-results-count",
      listForgedSeparately
        ? `Showing ${entries.length} ${entries.length === 1 ? "item" : "items"}`
        : `Showing ${entries.length} ${entries.length === 1 ? "unique" : "uniques"}`
    );
    appendTextElement(
      doc,
      summary,
      "span",
      "poe-trade-styler-unique-results-order",
      "Required level: low to high"
    );
    fragment.append(summary);

    if (entries.length === 0) {
      appendTextElement(
        doc,
        fragment,
        "p",
        "poe-trade-styler-unique-empty",
        "No uniques match the current filters."
      );
    } else {
      for (const entry of entries) {
        fragment.append(
          createItemResult(
            entry.item,
            listForgedSeparately ? entry.variantIndex : undefined
          )
        );
      }
    }

    results.append(fragment);
    results.scrollTop = 0;
  }

  function parseRequiredLevel(value: string): number | null {
    if (!value.trim()) return null;
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  function createFilters(): HTMLElement {
    const filters = doc.createElement("section");
    filters.className = "poe-trade-styler-unique-filters";
    filters.setAttribute("aria-label", "Unique quick filters");

    const searchField = doc.createElement("label");
    searchField.className =
      "poe-trade-styler-unique-filter poe-trade-styler-unique-filter-search";
    const searchInput = doc.createElement("input");
    searchInput.type = "search";
    searchInput.placeholder = "Search base or property";
    searchInput.setAttribute("aria-label", "Filter uniques");
    searchInput.addEventListener("input", () => {
      searchQuery = searchInput.value.trim().toLocaleLowerCase();
      applyFilters();
    });
    searchField.append(searchInput);

    const forgedToggle = doc.createElement("label");
    forgedToggle.className = "poe-trade-styler-unique-forged-toggle";
    const forgedCheckbox = doc.createElement("input");
    forgedCheckbox.type = "checkbox";
    forgedCheckbox.checked = false;
    forgedCheckbox.setAttribute(
      "aria-label",
      "List Runeforged uniques as separate items"
    );
    forgedCheckbox.addEventListener("change", () => {
      listForgedSeparately = forgedCheckbox.checked;
      variantIndexes.clear();
      applyFilters();
    });
    forgedToggle.append(forgedCheckbox);
    appendTextElement(
      doc,
      forgedToggle,
      "span",
      "poe-trade-styler-unique-forged-toggle-label",
      "Runeforged as items"
    );

    const levelGroup = doc.createElement("div");
    levelGroup.className = "poe-trade-styler-unique-level-filters";
    levelGroup.setAttribute("role", "group");
    levelGroup.setAttribute("aria-label", "Required level");
    appendTextElement(
      doc,
      levelGroup,
      "span",
      "poe-trade-styler-unique-filter-label",
      "Required level"
    );

    const createLevelInput = (
      labelText: string,
      ariaLabel: string,
      onInput: (value: number | null) => void
    ): HTMLInputElement => {
      const field = doc.createElement("label");
      field.className = "poe-trade-styler-unique-level-filter";
      const input = doc.createElement("input");
      input.type = "number";
      input.min = "1";
      input.max = "100";
      input.inputMode = "numeric";
      input.placeholder = labelText;
      input.setAttribute("aria-label", ariaLabel);
      input.addEventListener("input", () => {
        onInput(parseRequiredLevel(input.value));
        applyFilters();
      });
      field.append(input);
      levelGroup.append(field);
      return input;
    };

    const minimumInput = createLevelInput(
      "Min",
      "Minimum required level",
      (value) => {
        minimumRequiredLevel = value;
      }
    );
    const maximumInput = createLevelInput(
      "Max",
      "Maximum required level",
      (value) => {
        maximumRequiredLevel = value;
      }
    );

    const reset = doc.createElement("button");
    reset.className = "poe-trade-styler-unique-filter-reset";
    reset.type = "button";
    reset.textContent = "Reset";
    reset.addEventListener("click", () => {
      searchInput.value = "";
      minimumInput.value = "";
      maximumInput.value = "";
      searchQuery = "";
      minimumRequiredLevel = null;
      maximumRequiredLevel = null;
      applyFilters();
      searchInput.focus();
    });

    filters.append(searchField, forgedToggle, levelGroup, reset);
    return filters;
  }

  function createModal(): HTMLDivElement {
    const { overlay, dialog, closeButton } = createModalFrame(doc, {
      kind: "unique",
      overlayId: "poe-trade-styler-unique-modal",
      dialogClassName: "poe-trade-styler-unique-dialog",
      headerClassName: "poe-trade-styler-unique-top",
      titleClassName: "poe-trade-styler-unique-title",
      closeButtonClassName: "poe-trade-styler-unique-close",
      titleId: "poe-trade-styler-unique-title",
      titleText: "Unique Helper",
      closeLabel: "Close Unique Helper"
    });
    closeButton.addEventListener("click", close);

    const content = doc.createElement("div");
    content.className = "poe-trade-styler-unique-content";
    typeList = doc.createElement("nav");
    typeList.className = "poe-trade-styler-unique-types";
    typeList.setAttribute("role", "tablist");
    typeList.setAttribute("aria-label", "Unique item types");
    typeList.setAttribute("aria-orientation", "vertical");
    results = doc.createElement("section");
    results.className = "poe-trade-styler-unique-results";
    results.setAttribute("aria-label", "Uniques sorted by required level");
    content.append(typeList, results);
    dialog.append(createFilters(), content);
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) close();
    });
    doc.body.append(overlay);
    renderTypes();
    renderResults();
    return overlay;
  }

  function open(): void {
    if (!modal) modal = createModal();
    prepareSearchPromise = onBeforeOpen().catch(() => false);
    modal.hidden = false;
    doc.documentElement.classList.add("poe-trade-styler-unique-modal-open");
    launcher?.setAttribute("aria-expanded", "true");
    modal.querySelector<HTMLElement>(".poe-trade-styler-unique-close")?.focus();
  }

  function close(): boolean {
    if (!modal || modal.hidden) return false;
    modal.hidden = true;
    doc.documentElement.classList.remove("poe-trade-styler-unique-modal-open");
    launcher?.setAttribute("aria-expanded", "false");
    launcher?.focus();
    return true;
  }

  function createLauncher(): HTMLButtonElement {
    const button = doc.createElement("button");
    button.className =
      "poe-trade-styler-preset poe-trade-styler-unique-preset-button";
    button.type = "button";
    button.dataset.poeTradeStylerPreset = "uniques";
    button.setAttribute("aria-label", "Open Unique Helper");
    button.setAttribute("aria-haspopup", "dialog");
    button.setAttribute("aria-expanded", "false");
    button.title = "Open Unique Helper";

    const icon = doc.createElement("img");
    icon.className = "poe-trade-styler-unique-preset-icon";
    icon.src = getSafeItemImageUrl(uniqueData.UNIQUE_HELPER_ICON);
    icon.alt = "";
    icon.referrerPolicy = "no-referrer";
    icon.setAttribute("aria-hidden", "true");
    button.append(icon);
    button.addEventListener("click", async () => {
      if (launcherToggleInProgress) return;
      if (!isActive()) {
        open();
        return;
      }
      launcherToggleInProgress = true;
      close();
      try {
        await onDeactivate();
      } finally {
        launcherToggleInProgress = false;
        button.classList.remove("is-active");
        button.setAttribute("aria-pressed", "false");
      }
    });
    return button;
  }

  function removeLauncher(): void {
    launcher
      ?.closest(".poe-trade-styler-unique-navigation-item")
      ?.remove();
    launcher = null;
    close();
  }

  function decorate(): void {
    if (!isPoe2Page()) {
      removeLauncher();
      return;
    }

    const craftingPresetButton = doc.querySelector(
      '[data-poe-trade-styler-preset="gear"]'
    ) || doc.querySelector(
      '[data-poe-trade-styler-preset="flasks"]'
    ) || doc.querySelector(
      '[data-poe-trade-styler-preset="charms"]'
    ) || doc.querySelector('[data-poe-trade-styler-preset="tablets"]');
    const craftingPresetNavigationItem = craftingPresetButton?.closest(
      ".poe-trade-styler-preset-navigation-item"
    );
    if (!craftingPresetNavigationItem) return;

    launcher =
      doc.querySelector<HTMLButtonElement>(
        '[data-poe-trade-styler-preset="uniques"]'
      ) || launcher || createLauncher();
    const active = isActive();
    launcher.classList.toggle("is-active", active);
    launcher.setAttribute("aria-pressed", String(active));
    let navigationItem = launcher.closest(
      ".poe-trade-styler-unique-navigation-item"
    );

    if (!navigationItem) {
      navigationItem = doc.createElement(
        craftingPresetNavigationItem.tagName.toLowerCase() === "li" ? "li" : "span"
      );
      navigationItem.className =
        "poe-trade-styler-preset-navigation-item " +
        "poe-trade-styler-unique-navigation-item";
      navigationItem.append(launcher);
    }

    if (
      !isPresetAccountOverflow(navigationItem) &&
      craftingPresetNavigationItem.nextElementSibling !== navigationItem
    ) {
      craftingPresetNavigationItem.insertAdjacentElement("afterend", navigationItem);
    }

    if (!modal) modal = createModal();
  }

  return {
    close,
    createItemCard(key: string): HTMLElement | null {
      const item = uniqueData.getUniqueItem(key);
      return item ? createItemResult(item) : null;
    },
    decorate,
    destroy(): void {
      removeLauncher();
      modal?.remove();
      modal = null;
      typeList = null;
      results = null;
      doc.documentElement.classList.remove("poe-trade-styler-unique-modal-open");
    }
  };
}

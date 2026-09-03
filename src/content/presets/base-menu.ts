import { getSafeItemImageUrl } from "../image-assets";
import { decoratePopover, setPopoverOpen } from "../popover-transition";
import { positionHoverMenu } from "./hover-menu";

export type BasePresetMode = "charms" | "flasks" | "jewels" | "tablets";

export interface BaseMenuDefinition {
  baseStat?: string;
  displayName: string;
  icon: string;
  key: string;
  kind?: "life" | "mana";
  requiredLevel?: number;
  searchText?: string;
}

export interface UniqueMenuDefinition {
  base: string;
  displayName: string;
  icon: string;
  key: string;
  kind?: "life" | "mana";
  requiredLevel?: number;
  searchText: string;
}

export function createBaseMenu(
  preset: BasePresetMode,
  definitions: readonly BaseMenuDefinition[],
  selectBase: (key: string) => Promise<void>,
  {
    createUniqueItemCard,
    selectUnique,
    uniqueDefinitions = []
  }: {
    createUniqueItemCard?: (key: string) => HTMLElement | null;
    selectUnique?: (searchText: string) => Promise<void>;
    uniqueDefinitions?: readonly UniqueMenuDefinition[];
  } = {}
): HTMLDivElement {
  const singular = preset.replace(/s$/, "");
  const menu = document.createElement("div");
  menu.className = `poe-trade-styler-${singular}-base-menu`;
  decoratePopover(menu);
  menu.classList.add("poe-trade-styler-preset-popover");
  const menuContent = document.createElement("div");
  menuContent.className = "poe-trade-styler-preset-popover-content";
  menu.append(menuContent);
  menu.hidden = true;
  menu.setAttribute("role", "radiogroup");
  menu.setAttribute("aria-label", `${singular} base`);

  const uniquePreview = document.createElement("div");
  uniquePreview.className = "poe-trade-styler-base-unique-preview";
  uniquePreview.classList.toggle("is-compact", preset !== "jewels");
  decoratePopover(uniquePreview);
  uniquePreview.classList.add("poe-trade-styler-preset-popover");
  uniquePreview.hidden = true;
  uniquePreview.setAttribute("role", "region");
  uniquePreview.setAttribute("aria-label", "Unique item preview");

  function showUniquePreview(definition: UniqueMenuDefinition): void {
    const card = createUniqueItemCard?.(definition.key);
    if (!card) return;
    if (preset === "jewels" || preset === "tablets") {
      card
        .querySelector(".poe-trade-styler-unique-result-requirements")
        ?.remove();
    }
    const host = menu.parentElement;
    if (host) {
      if (uniquePreview.parentElement !== host) host.append(uniquePreview);
      uniquePreview.style.width = "480px";
    }
    uniquePreview.replaceChildren(card);
    setPopoverOpen(uniquePreview, true, { fadeIn: 300, fadeOut: 500 });
    positionHoverMenu(menu, uniquePreview);
  }

  function hideUniquePreview(): void {
    setPopoverOpen(uniquePreview, false, { fadeIn: 300, fadeOut: 500 });
  }

  uniquePreview.addEventListener("pointerenter", () => {
    if (!uniquePreview.hidden) {
      setPopoverOpen(uniquePreview, true, { fadeIn: 300, fadeOut: 500 });
    }
  });
  uniquePreview.addEventListener("pointerleave", hideUniquePreview);

  function appendHeadings(
    labels: readonly string[],
    fullWidth = false
  ): void {
    labels.forEach((text) => {
      const heading = document.createElement("div");
      heading.className = "poe-trade-styler-base-column-heading";
      heading.classList.toggle("is-full-width", fullWidth);
      heading.textContent = text;
      menuContent.append(heading);
    });
  }

  function appendPlaceholder(): void {
    const placeholder = document.createElement("span");
    placeholder.className = "poe-trade-styler-base-option-placeholder";
    placeholder.setAttribute("aria-hidden", "true");
    menuContent.append(placeholder);
  }

  function appendOption(
    definition: BaseMenuDefinition | UniqueMenuDefinition,
    isUnique = false
  ): void {
    const baseDefinition = definition as BaseMenuDefinition;
    const option = document.createElement("button");
    option.className =
      `poe-trade-styler-base-option poe-trade-styler-${singular}-base-option`;
    option.classList.toggle("is-unique", isUnique);
    option.type = "button";
    if (isUnique) {
      option.dataset.poeTradeStylerUniqueKey = definition.key;
      option.addEventListener("pointerenter", () => {
        showUniquePreview(definition as UniqueMenuDefinition);
      });
      option.addEventListener("pointerleave", hideUniquePreview);
      option.addEventListener("focus", () => {
        showUniquePreview(definition as UniqueMenuDefinition);
      });
      option.addEventListener("blur", hideUniquePreview);
    } else {
      option.dataset.poeTradeStylerBaseKey = definition.key;
      if (typeof definition.requiredLevel === "number") {
        option.dataset.poeTradeStylerRequiredLevel = String(
          definition.requiredLevel
        );
      }
    }
    option.dataset.poeTradeStylerBasePreset = preset;
    const requiredLevelDetail =
      preset !== "jewels" &&
      preset !== "tablets" &&
      definition.requiredLevel
      ? `Requires Level ${definition.requiredLevel}`
      : "";
    const detail = isUnique
      ? [
          (definition as UniqueMenuDefinition).base,
          requiredLevelDetail
        ].filter(Boolean).join(" · ")
      : baseDefinition.baseStat ||
        requiredLevelDetail;
    option.title = detail ? `${definition.displayName} — ${detail}` : definition.displayName;
    option.setAttribute(
      "aria-label",
      detail ? `${definition.displayName}. ${detail}` : definition.displayName
    );
    if (!isUnique) {
      option.setAttribute("role", "radio");
      option.setAttribute("aria-checked", "false");
    }

    const icon = document.createElement("img");
    icon.src = getSafeItemImageUrl(definition.icon);
    icon.referrerPolicy = "no-referrer";
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");
    const label = document.createElement("span");
    label.className = "poe-trade-styler-base-option-label";
    if (isUnique) {
      const name = document.createElement("span");
      name.className = "poe-trade-styler-unique-option-name";
      name.textContent = preset === "charms"
        ? `${definition.displayName} ${(definition as UniqueMenuDefinition).base}`
        : definition.displayName;
      label.append(name);
    } else {
      label.textContent = definition.displayName;
    }
    if (!isUnique && baseDefinition.baseStat) {
      label.dataset.poeTradeStylerBaseStat = baseDefinition.baseStat;
    }
    option.append(icon, label);
    if (
      requiredLevelDetail &&
      (preset === "flasks" || isUnique) &&
      definition.requiredLevel
    ) {
      const level = document.createElement("span");
      level.className = "poe-trade-styler-flask-base-level";
      level.textContent = String(definition.requiredLevel);
      option.append(level);
    }
    option.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (isUnique && selectUnique) {
        void selectUnique((definition as UniqueMenuDefinition).searchText);
      } else {
        void selectBase(definition.key);
      }
    });
    menuContent.append(option);
  }

  function appendPairedRows(
    left: readonly (BaseMenuDefinition | UniqueMenuDefinition)[],
    right: readonly (BaseMenuDefinition | UniqueMenuDefinition)[],
    isUnique = false
  ): void {
    const rowCount = Math.max(left.length, right.length);
    for (let index = 0; index < rowCount; index += 1) {
      if (left[index]) appendOption(left[index], isUnique);
      else appendPlaceholder();
      if (right[index]) appendOption(right[index], isUnique);
      else appendPlaceholder();
    }
  }

  if (preset === "flasks") {
    appendHeadings(["Life Flasks", "Mana Flasks"]);
    appendPairedRows(
      definitions.filter((definition) => definition.kind === "life"),
      definitions.filter((definition) => definition.kind === "mana")
    );
    appendPairedRows(
      uniqueDefinitions.filter((definition) => definition.kind === "life"),
      uniqueDefinitions.filter((definition) => definition.kind === "mana"),
      true
    );
  } else if (preset === "charms" && uniqueDefinitions.length > 0) {
    appendHeadings(["Charm Bases", "Unique Charms"]);
    const remainingUniques = [...uniqueDefinitions];
    const alignedUniques = definitions.map((definition) => {
      const matchIndex = remainingUniques.findIndex(
        (unique) => unique.base === (definition.searchText || definition.displayName)
      );
      return matchIndex >= 0 ? remainingUniques.splice(matchIndex, 1)[0] : null;
    });
    definitions.forEach((definition, index) => {
      appendOption(definition);
      const unique = alignedUniques[index];
      if (unique) appendOption(unique, true);
      else appendPlaceholder();
    });
    remainingUniques.forEach((unique) => {
      appendPlaceholder();
      appendOption(unique, true);
    });
  } else if (preset === "tablets" && uniqueDefinitions.length > 0) {
    appendHeadings(["Tablet Bases", "Unique Tablets"]);
    const remainingUniques = [...uniqueDefinitions];
    const matchingUniques = (definition: BaseMenuDefinition) => {
      const baseName = definition.searchText || definition.displayName;
      return uniqueDefinitions.filter((unique) => unique.base === baseName);
    };
    const pairedDefinitions = definitions.filter(
      (definition) => matchingUniques(definition).length === 1
    );
    const unpairedDefinitions = definitions.filter(
      (definition) => matchingUniques(definition).length !== 1
    );

    pairedDefinitions.forEach((definition) => {
      const unique = matchingUniques(definition)[0];
      remainingUniques.splice(remainingUniques.indexOf(unique), 1);
      appendOption(definition);
      appendOption(unique, true);
    });

    const unpairedRowCount = Math.max(
      unpairedDefinitions.length,
      remainingUniques.length
    );
    for (let index = 0; index < unpairedRowCount; index += 1) {
      if (unpairedDefinitions[index]) appendOption(unpairedDefinitions[index]);
      else appendPlaceholder();
      if (remainingUniques[index]) appendOption(remainingUniques[index], true);
      else appendPlaceholder();
    }
  } else if (preset === "jewels" && uniqueDefinitions.length > 0) {
    appendHeadings(["Jewel Bases"], true);
    const regularDefinitions = definitions.filter(
      (definition) => !definition.key.startsWith("time-lost-")
    );
    const timeLostDefinitions = definitions.filter(
      (definition) => definition.key.startsWith("time-lost-")
    );
    const timeLostByBaseKey = new Map(
      timeLostDefinitions.map((definition) => [
        definition.key.slice("time-lost-".length),
        definition
      ])
    );
    const alignedTimeLostDefinitions = regularDefinitions
      .map((definition) => timeLostByBaseKey.get(definition.key))
      .filter(
        (definition): definition is BaseMenuDefinition => Boolean(definition)
      );
    const unmatchedTimeLostDefinitions = timeLostDefinitions.filter(
      (definition) =>
        !regularDefinitions.some(
          (regularDefinition) =>
            definition.key === `time-lost-${regularDefinition.key}`
        )
    );
    const orderedDefinitions = [
      ...regularDefinitions,
      ...alignedTimeLostDefinitions,
      ...unmatchedTimeLostDefinitions
    ];
    orderedDefinitions.forEach((definition) => appendOption(definition));
    if (definitions.length % 2 !== 0) appendPlaceholder();
    appendHeadings(["Unique Jewels"], true);
    uniqueDefinitions.forEach((definition) => appendOption(definition, true));
    if (uniqueDefinitions.length % 2 !== 0) appendPlaceholder();
  } else {
    definitions.forEach((definition) => appendOption(definition));
  }

  if (createUniqueItemCard && uniqueDefinitions.length > 0) {
    menu.append(uniquePreview);
  }

  return menu;
}

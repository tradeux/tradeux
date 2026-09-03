import type {
  GearDataPort,
  GearItemDefinition,
  GearSlotDefinition,
  StylerPort
} from "../ports";
import type { PresetState } from "../presets/state";
import { getSafeItemImageUrl } from "../image-assets";
import { createModalFrame, isModalOpen, setModalOpen } from "../modal-frame";
import { isPresetAccountOverflow } from "../preset-navigation-overflow";

export interface GearHelperFeature {
  close(): boolean;
  decorate(): void;
  destroy(): void;
}

type GearSelectionHandler = (
  slotKey: string,
  baseKey: string | null,
  itemKey: string | null
) => Promise<boolean>;

const PROPERTY_LABELS: Readonly<Record<string, string>> = Object.freeze({
  armour: "Armour",
  attack_time: "APS",
  block: "Block",
  critical_strike_chance: "Crit",
  energyshield: "Energy Shield",
  evasion: "Evasion",
  increasedmovementspeed: "Move",
  physical_damage_max: "Physical Damage",
  range: "Range",
  ward: "Ward"
});

function appendText(
  doc: Document,
  parent: ParentNode,
  tag: string,
  className: string,
  text: string
): HTMLElement {
  const element = doc.createElement(tag);
  element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
}

const ATTRIBUTE_TONES: Readonly<Record<string, string>> = Object.freeze({
  STR: "strength",
  INT: "intelligence",
  DEX: "dexterity"
});

function appendGearBaseLabel(
  doc: Document,
  button: HTMLButtonElement,
  label: string
): void {
  const parts = label.split(/\b(STR|INT|DEX)\b/g);
  for (const part of parts) {
    const tone = ATTRIBUTE_TONES[part];
    if (!tone) {
      button.append(doc.createTextNode(part));
      continue;
    }
    appendText(
      doc,
      button,
      "span",
      `poe-trade-styler-gear-attribute-label is-${tone}`,
      part
    );
  }
}

function qualityValue(value: number): number {
  return Math.floor(value * 1.2);
}

function formatProperties(item: GearItemDefinition): string[] {
  const properties = item.properties;
  const lines: string[] = [];
  const physicalMin = Number(properties.physical_damage_min);
  const physicalMax = Number(properties.physical_damage_max);
  if (Number.isFinite(physicalMin) && Number.isFinite(physicalMax)) {
    lines.push(
      `Physical ${qualityValue(physicalMin)}–${qualityValue(physicalMax)}`
    );
  }

  for (const [key, rawValue] of Object.entries(properties)) {
    if (key === "physical_damage_min" || key === "physical_damage_max") continue;
    const value = Number(rawValue);
    if (!Number.isFinite(value) || !PROPERTY_LABELS[key]) continue;
    if (["armour", "evasion", "energyshield", "ward"].includes(key)) {
      lines.push(`${PROPERTY_LABELS[key]} ${qualityValue(value)}`);
    } else if (key === "attack_time") {
      lines.push(`APS ${(1000 / value).toFixed(2)}`);
    } else if (key === "critical_strike_chance") {
      lines.push(`Crit ${(value / 100).toFixed(1).replace(/\.0$/, "")}%`);
    } else if (key === "block") {
      lines.push(`Block ${value}%`);
    } else if (key === "range") {
      lines.push(`Range ${(value / 10).toFixed(1).replace(/\.0$/, "")}`);
    } else if (key === "increasedmovementspeed" && value) {
      lines.push(`Move ${value > 0 ? "+" : ""}${value / 100}%`);
    }
  }
  return lines;
}

function formatRequirements(item: GearItemDefinition): string {
  const attributes = Object.entries(item.requirements)
    .filter(([, value]) => Number(value) > 0)
    .map(([key, value]) => `${String(key).slice(0, 3).toUpperCase()} ${value}`);
  return [`Level ${item.requiredLevel}`, ...attributes].join(" · ");
}

function isRuneforgedBase(item: GearItemDefinition): boolean {
  return /^(?:Runeforged|Runemastered|Runefather's)\b/i.test(item.displayName);
}

export function createGearHelperFeature({
  document: doc = document,
  gearData,
  onDeactivate = async () => undefined,
  onSelect,
  presetState,
  styler
}: {
  document?: Document;
  gearData: GearDataPort;
  onDeactivate?: () => Promise<void>;
  onSelect: GearSelectionHandler;
  presetState: PresetState;
  styler: StylerPort;
}): GearHelperFeature {
  let launcher: HTMLButtonElement | null = null;
  let modal: HTMLDivElement | null = null;
  let slotList: HTMLElement | null = null;
  let baseList: HTMLElement | null = null;
  let itemList: HTMLElement | null = null;
  let itemSummary: HTMLElement | null = null;
  let showRuneforged = false;
  let selectedSlotKey =
    presetState.selectedGearSlotKey || gearData.GEAR_SLOTS[0]?.key || "";
  let selectedBaseKey = presetState.selectedGearBaseKey;
  let selectionInProgress = false;
  let launcherToggleInProgress = false;

  function isPoe2Page(): boolean {
    return (
      styler.getTradeGameKey(location.pathname) === "poe2" ||
      doc.body.dataset.fixtureGame === "poe2"
    );
  }

  function getSelectedSlot(): GearSlotDefinition | null {
    return gearData.getGearSlot(selectedSlotKey);
  }

  function selectSlot(slotKey: string): void {
    const slot = gearData.getGearSlot(slotKey);
    if (!slot) return;
    selectedSlotKey = slot.key;
    selectedBaseKey = slot.baseKeys.length === 1 ? slot.baseKeys[0] : null;
    render();
  }

  function renderSlots(): void {
    if (!slotList) return;
    slotList.replaceChildren();
    for (const slot of gearData.GEAR_SLOTS) {
      const button = doc.createElement("button");
      button.className = "poe-trade-styler-gear-slot";
      button.type = "button";
      button.classList.toggle("is-active", slot.key === selectedSlotKey);
      button.dataset.poeTradeStylerGearSlot = slot.key;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-selected", String(slot.key === selectedSlotKey));
      const icon = doc.createElement("img");
      icon.className = "poe-trade-styler-gear-slot-icon";
      icon.src = getSafeItemImageUrl(slot.icon);
      icon.alt = "";
      icon.loading = "lazy";
      icon.referrerPolicy = "no-referrer";
      icon.setAttribute("aria-hidden", "true");
      button.append(icon);
      appendText(doc, button, "span", "poe-trade-styler-gear-slot-name", slot.displayName);
      button.addEventListener("click", () => selectSlot(slot.key));
      slotList.append(button);
    }
  }

  function renderBases(): void {
    if (!baseList) return;
    const bases = gearData.getGearBases(selectedSlotKey);
    baseList.replaceChildren();
    baseList.closest<HTMLElement>(".poe-trade-styler-gear-base-filter")!.hidden =
      bases.length <= 1;
    if (bases.length <= 1) {
      selectedBaseKey = bases[0]?.key || null;
      return;
    }

    const definitions = [
      { key: null, displayName: "ANY" },
      ...bases.map((base) => ({ key: base.key, displayName: base.displayName }))
    ];
    for (const definition of definitions) {
      const button = doc.createElement("button");
      button.className = "poe-trade-styler-gear-base-filter-option";
      button.type = "button";
      button.classList.toggle("is-active", definition.key === selectedBaseKey);
      appendGearBaseLabel(doc, button, definition.displayName);
      button.setAttribute("aria-pressed", String(definition.key === selectedBaseKey));
      button.addEventListener("click", () => {
        selectedBaseKey = definition.key;
        renderBases();
        renderItems();
      });
      baseList.append(button);
    }
  }

  async function chooseItem(item: GearItemDefinition | null): Promise<void> {
    if (selectionInProgress) return;
    selectionInProgress = true;
    try {
      const accepted = await onSelect(
        selectedSlotKey,
        item?.baseKey || selectedBaseKey,
        item?.key || null
      );
      if (accepted) close();
    } finally {
      selectionInProgress = false;
    }
  }

  function createAnyItem(): HTMLButtonElement {
    const button = doc.createElement("button");
    button.className =
      "poe-trade-styler-gear-item poe-trade-styler-gear-item-any";
    button.type = "button";
    button.dataset.poeTradeStylerGearItem = "any";
    appendText(doc, button, "strong", "poe-trade-styler-gear-item-name", "ANY");
    appendText(
      doc,
      button,
      "span",
      "poe-trade-styler-gear-item-meta",
      selectedBaseKey ? "Any item of this base type" : "Any item in this slot"
    );
    button.addEventListener("click", () => void chooseItem(null));
    return button;
  }

  function createItem(item: GearItemDefinition): HTMLButtonElement {
    const button = doc.createElement("button");
    button.className = "poe-trade-styler-gear-item";
    button.type = "button";
    button.dataset.poeTradeStylerGearItem = item.key;
    button.title = `Choose ${item.displayName}`;
    const icon = doc.createElement("img");
    icon.className = "poe-trade-styler-gear-item-icon";
    icon.src = getSafeItemImageUrl(item.icon);
    icon.alt = "";
    icon.loading = "lazy";
    icon.referrerPolicy = "no-referrer";
    icon.setAttribute("aria-hidden", "true");
    const detail = doc.createElement("span");
    detail.className = "poe-trade-styler-gear-item-detail";
    appendText(doc, detail, "strong", "poe-trade-styler-gear-item-name", item.displayName);
    const properties = formatProperties(item);
    if (properties.length) {
      appendText(
        doc,
        detail,
        "span",
        "poe-trade-styler-gear-item-properties",
        `Quality 20% · ${properties.join(" · ")}`
      );
    }
    appendText(
      doc,
      detail,
      "span",
      "poe-trade-styler-gear-item-requirements",
      formatRequirements(item)
    );
    for (const implicit of item.implicits) {
      appendText(
        doc,
        detail,
        "span",
        "poe-trade-styler-gear-item-implicit",
        implicit
      );
    }
    button.append(icon, detail);
    button.addEventListener("click", () => void chooseItem(item));
    return button;
  }

  function renderItems(): void {
    if (!itemList || !itemSummary) return;
    const items = gearData
      .getGearItems(selectedSlotKey, selectedBaseKey)
      .filter(
        (item) =>
          item.tradeAvailable && (showRuneforged || !isRuneforgedBase(item))
      );
    itemSummary.textContent = `${items.length} bases · highest level first`;
    itemList.replaceChildren(createAnyItem(), ...items.map(createItem));
    itemList.scrollTop = 0;
  }

  function render(): void {
    renderSlots();
    renderBases();
    renderItems();
  }

  function createModal(): HTMLDivElement {
    const { overlay, dialog, closeButton } = createModalFrame(doc, {
      kind: "gear",
      overlayId: "poe-trade-styler-gear-modal",
      dialogClassName: "poe-trade-styler-gear-dialog",
      headerClassName: "poe-trade-styler-gear-top",
      titleClassName: "poe-trade-styler-gear-title",
      closeButtonClassName: "poe-trade-styler-gear-close",
      titleId: "poe-trade-styler-gear-title",
      titleText: "Gear Presets",
      closeLabel: "Close Gear Presets"
    });
    closeButton.addEventListener("click", close);

    const content = doc.createElement("div");
    content.className = "poe-trade-styler-gear-content";
    slotList = doc.createElement("nav");
    slotList.className = "poe-trade-styler-gear-slots";
    slotList.setAttribute("role", "tablist");
    slotList.setAttribute("aria-label", "Gear slot");
    slotList.setAttribute("aria-orientation", "vertical");
    const main = doc.createElement("section");
    main.className = "poe-trade-styler-gear-main";
    const filterBar = doc.createElement("section");
    filterBar.className = "poe-trade-styler-gear-filters";
    const baseFilter = doc.createElement("section");
    baseFilter.className = "poe-trade-styler-gear-base-filter";
    baseList = doc.createElement("div");
    baseList.className = "poe-trade-styler-gear-base-filter-list";
    baseFilter.append(baseList);
    const itemsHeader = doc.createElement("header");
    itemsHeader.className = "poe-trade-styler-gear-items-header";
    const itemControls = doc.createElement("div");
    itemControls.className = "poe-trade-styler-gear-items-controls";
    const runeforgedToggle = doc.createElement("label");
    runeforgedToggle.className = "poe-trade-styler-gear-runeforged-toggle";
    const runeforgedCheckbox = doc.createElement("input");
    runeforgedCheckbox.type = "checkbox";
    runeforgedCheckbox.checked = false;
    runeforgedCheckbox.setAttribute("aria-label", "Show Runeforged bases");
    runeforgedCheckbox.addEventListener("change", () => {
      showRuneforged = runeforgedCheckbox.checked;
      renderItems();
    });
    runeforgedToggle.append(runeforgedCheckbox);
    appendText(
      doc,
      runeforgedToggle,
      "span",
      "poe-trade-styler-gear-runeforged-toggle-label",
      "Runeforged"
    );
    itemSummary = appendText(
      doc,
      itemControls,
      "span",
      "poe-trade-styler-gear-items-summary",
      ""
    );
    itemControls.append(runeforgedToggle);
    itemsHeader.append(itemControls);
    itemList = doc.createElement("div");
    itemList.className = "poe-trade-styler-gear-items";
    filterBar.append(baseFilter, itemsHeader);
    main.append(itemList);
    content.append(slotList, main);
    dialog.append(filterBar, content);
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) close();
    });
    doc.body.append(overlay);
    render();
    return overlay;
  }

  function open(): void {
    if (!modal) modal = createModal();
    selectedSlotKey =
      presetState.selectedGearSlotKey || selectedSlotKey || gearData.GEAR_SLOTS[0]?.key || "";
    selectedBaseKey = presetState.selectedGearBaseKey ||
      (getSelectedSlot()?.baseKeys.length === 1 ? getSelectedSlot()!.baseKeys[0] : null);
    render();
    setModalOpen(modal, true);
    doc.documentElement.classList.add("poe-trade-styler-gear-modal-open");
    launcher?.setAttribute("aria-expanded", "true");
    modal.querySelector<HTMLElement>(".poe-trade-styler-gear-close")?.focus();
  }

  function close(): boolean {
    if (!modal || !isModalOpen(modal)) return false;
    setModalOpen(modal, false);
    doc.documentElement.classList.remove("poe-trade-styler-gear-modal-open");
    launcher?.setAttribute("aria-expanded", "false");
    launcher?.focus();
    return true;
  }

  function createLauncher(): HTMLButtonElement {
    const button = doc.createElement("button");
    button.className =
      "poe-trade-styler-preset poe-trade-styler-gear-preset-button";
    button.type = "button";
    button.dataset.poeTradeStylerPreset = "gear";
    button.setAttribute("aria-label", "Open Gear Presets");
    button.setAttribute("aria-haspopup", "dialog");
    button.setAttribute("aria-expanded", "false");
    button.title = "Open Gear Presets";
    const icon = doc.createElement("img");
    icon.className = "poe-trade-styler-gear-preset-icon";
    icon.src = getSafeItemImageUrl(gearData.GEAR_GENERAL_ICON);
    icon.alt = "";
    icon.referrerPolicy = "no-referrer";
    icon.setAttribute("aria-hidden", "true");
    button.append(icon);
    button.addEventListener("click", async () => {
      if (launcherToggleInProgress) return;
      if (presetState.activePreset !== "gear") {
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
    launcher?.closest(".poe-trade-styler-gear-navigation-item")?.remove();
    launcher = null;
    close();
  }

  function decorate(): void {
    if (!isPoe2Page()) {
      removeLauncher();
      return;
    }
    const previousButton =
      doc.querySelector('[data-poe-trade-styler-preset="gems"]') ||
      doc.querySelector('[data-poe-trade-styler-preset="jewels"]') ||
      doc.querySelector('[data-poe-trade-styler-preset="flasks"]');
    const previousItem = previousButton?.closest(".poe-trade-styler-preset-navigation-item");
    if (!previousItem) return;
    launcher =
      doc.querySelector<HTMLButtonElement>('[data-poe-trade-styler-preset="gear"]') ||
      launcher ||
      createLauncher();
    launcher.classList.toggle("is-active", presetState.activePreset === "gear");
    launcher.setAttribute("aria-pressed", String(presetState.activePreset === "gear"));
    let navigationItem = launcher.closest(".poe-trade-styler-gear-navigation-item");
    if (!navigationItem) {
      navigationItem = doc.createElement(
        previousItem.tagName.toLowerCase() === "li" ? "li" : "span"
      );
      navigationItem.className =
        "poe-trade-styler-preset-navigation-item poe-trade-styler-gear-navigation-item";
      navigationItem.append(launcher);
    }
    if (
      !isPresetAccountOverflow(navigationItem) &&
      previousItem.nextElementSibling !== navigationItem
    ) {
      previousItem.insertAdjacentElement("afterend", navigationItem);
    }
    if (!modal) modal = createModal();
  }

  return {
    close,
    decorate,
    destroy(): void {
      removeLauncher();
      modal?.remove();
      modal = null;
      slotList = null;
      baseList = null;
      itemList = null;
      itemSummary = null;
      doc.documentElement.classList.remove("poe-trade-styler-gear-modal-open");
    }
  };
}

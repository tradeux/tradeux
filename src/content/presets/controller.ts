import type {
  CharmDataPort,
  FlaskDataPort,
  GemDataPort,
  GearDataPort,
  JewelDataPort,
  StylerPort,
  TabletDataPort,
  UniqueDataPort,
  WaystoneDataPort
} from "../ports";
import type { StatFiltersFeature } from "../stat-filters/contracts";
import type { GroupPolicyMode } from "./group-policy";
import {
  createNativeTradeForm,
  type NativeTradeFormPort
} from "./native-form";
import { type PresetMode, type PresetState } from "./state";
import { createGearSelection } from "./gear-selection";
import { createGemSelection } from "./gem-selection";
import { createJewelSelection } from "./jewel-selection";
import {
  createBaseMenu,
  type BasePresetMode,
  type UniqueMenuDefinition
} from "./base-menu";
import { getSafeItemImageUrl } from "../image-assets";
import { createPresetGroupStateManager } from "./group-state-manager";
import { bindHoverMenu, positionHoverMenu } from "./hover-menu";
import { decoratePopover, setPopoverOpen } from "../popover-transition";
import type { StylerSettings } from "../settings/model";

type PresetVisibilitySettings = Pick<
  StylerSettings,
  "hideLowTierFlasks" | "hideLowTierWaystones"
>;

function toRomanNumeral(value: number): string {
  const numerals: ReadonlyArray<readonly [number, string]> = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];
  let remainder = Math.max(0, Math.floor(value));
  let result = "";

  for (const [amount, numeral] of numerals) {
    while (remainder >= amount) {
      result += numeral;
      remainder -= amount;
    }
  }

  return result;
}

export interface PresetsFeature {
  activateUniqueGroups(): Promise<void>;
  closeMenus(): boolean;
  deactivate(): Promise<void>;
  decorate(): void;
  selectGear(
    slotKey: string,
    baseKey: string | null,
    itemKey: string | null
  ): Promise<boolean>;
  selectGem(key: string): Promise<boolean>;
  selectJewel(baseKey: string): Promise<boolean>;
  selectUniqueItem(name: string): Promise<boolean>;
  searchUniqueItem(name: string): Promise<boolean>;
  prepareUniqueGroups(): Promise<boolean>;
  finalizeSearch(
    beforeSubmit?: () => Promise<boolean | void>
  ): Promise<boolean>;
  isUniqueActive(): boolean;
}

export function createPresetsFeature({
  charmData,
  createUniqueItemCard,
  flaskData,
  gemData,
  gearData,
  jewelData,
  persistSettings,
  presetState,
  settings: injectedSettings,
  stats,
  styler,
  tabletData,
  uniqueData,
  waystoneData,
  nativeForm: injectedNativeForm
}: {
  charmData: CharmDataPort;
  createUniqueItemCard?: (key: string) => HTMLElement | null;
  flaskData: FlaskDataPort;
  gemData: GemDataPort;
  gearData: GearDataPort;
  jewelData: JewelDataPort;
  persistSettings?: () => void;
  presetState: PresetState;
  settings?: PresetVisibilitySettings;
  stats: StatFiltersFeature;
  styler: StylerPort;
  tabletData: TabletDataPort;
  uniqueData?: UniqueDataPort;
  waystoneData: WaystoneDataPort;
  nativeForm?: NativeTradeFormPort;
}): PresetsFeature {
  const nativeForm =
    injectedNativeForm ??
    createNativeTradeForm({
      normalize: stats.normalizeText,
      waitForElement: stats.waitForElement
    });
  const visibilitySettings: PresetVisibilitySettings = injectedSettings ?? {
    hideLowTierFlasks: false,
    hideLowTierWaystones: false
  };
  let waystoneTierSelectionInProgress = false;
  let charmBaseSelectionInProgress = false;
  let flaskBaseSelectionInProgress = false;
  let tabletBaseSelectionInProgress = false;
  let uniqueItemSelectionInProgress = false;
  let uniqueGroupPolicyActive = false;
  let preparedGroupMode: GroupPolicyMode | null = null;

  function getActiveGroupPolicyMode(): GroupPolicyMode | null {
    return presetState.activePreset || (uniqueGroupPolicyActive ? "uniques" : null);
  }
  function isPoe2PresetPage(): boolean {
    return (
      styler.getTradeGameKey(location.pathname) === "poe2" ||
      document.body.dataset.fixtureGame === "poe2"
    );
  }

  function getPresetGroupTitle(group: Element): string {
    const title =
      group.querySelector(
        ":scope > .filter-group-header .filter-title, " +
          ":scope > .filter-group-header .filter-title-clickable"
      )?.textContent ||
      (group as HTMLElement).dataset.fixtureFilterGroup ||
      "";

    return stats.normalizeText(title);
  }

  function getWaystoneGroupKey(group: Element): string {
    const statGroupType = group.querySelector(
      'input[placeholder="+ Add Stat Filter"]'
    )
      ? stats.getStatGroupType(group)
      : null;

    if (statGroupType === "not") {
      return "not";
    }

    return getPresetGroupTitle(group);
  }

  const groupStateManager = createPresetGroupStateManager({
    getGearSlotKey: () => presetState.selectedGearSlotKey,
    getGroupKey: getWaystoneGroupKey
  });

  async function applyWaystoneGroupState(
    { restorePrevious = true }: { restorePrevious?: boolean } = {}
  ): Promise<void> {
    const activeMode = getActiveGroupPolicyMode();
    if (activeMode) await groupStateManager.apply(activeMode);
    else groupStateManager.restore(restorePrevious);
  }

  function setWaystoneTierMenuOpen(
    button: Element,
    shouldOpen: boolean
  ): void {
    const menu = button
      ?.closest(".poe-trade-styler-preset-navigation-item")
      ?.querySelector<HTMLElement>(".poe-trade-styler-waystone-tier-menu");

    if (!menu) {
      return;
    }

    setPopoverOpen(menu, shouldOpen);
    if (shouldOpen) positionHoverMenu(button, menu);
    button.setAttribute("aria-expanded", String(shouldOpen));
  }

  function closeWaystoneTierMenus(): boolean {
    let closed = false;

    document
      .querySelectorAll<HTMLElement>('[data-poe-trade-styler-preset="waystones"]')
      .forEach((button) => {
        const menu = button
          .closest(".poe-trade-styler-preset-navigation-item")
          ?.querySelector<HTMLElement>(".poe-trade-styler-waystone-tier-menu");

        if (menu && !menu.hidden) {
          closed = true;
        }

        setWaystoneTierMenuOpen(button, false);
      });

    return closed;
  }

  function syncWaystoneTierMenu(): void {
    document
      .querySelectorAll<HTMLElement>(".poe-trade-styler-waystone-tier-option")
      .forEach((option) => {
        const selected =
          Number(option.dataset.poeTradeStylerWaystoneTier) ===
          presetState.selectedWaystoneTier;
        option.classList.toggle("is-selected", selected);
        option.setAttribute("aria-checked", String(selected));
      });
  }

  function syncLowTierVisibility(): void {
    document
      .querySelectorAll<HTMLInputElement>(
        '[data-poe-trade-styler-hide-low-tier="waystones"]'
      )
      .forEach((checkbox) => {
        checkbox.checked = visibilitySettings.hideLowTierWaystones;
      });
    document
      .querySelectorAll<HTMLElement>(".poe-trade-styler-waystone-tier-option")
      .forEach((option) => {
        const tier = Number(option.dataset.poeTradeStylerWaystoneTier);
        option.hidden =
          visibilitySettings.hideLowTierWaystones && tier >= 1 && tier <= 14;
      });

    document
      .querySelectorAll<HTMLInputElement>(
        '[data-poe-trade-styler-hide-low-tier="flasks"]'
      )
      .forEach((checkbox) => {
        checkbox.checked = visibilitySettings.hideLowTierFlasks;
      });
    document
      .querySelectorAll<HTMLElement>(
        '.poe-trade-styler-flask-base-option:not(.is-unique)'
      )
      .forEach((option) => {
        const requiredLevel = Number(
          option.dataset.poeTradeStylerRequiredLevel
        );
        option.hidden =
          visibilitySettings.hideLowTierFlasks &&
          Number.isFinite(requiredLevel) &&
          requiredLevel >= 1 &&
          requiredLevel <= 50;
      });
  }

  function createLowTierToggle(
    preset: "flasks" | "waystones"
  ): HTMLLabelElement {
    const label = document.createElement("label");
    label.className = "poe-trade-styler-preset-low-tier-toggle";
    label.title =
      preset === "waystones"
        ? "Hide Waystone tiers 1–14"
        : "Hide non-unique flasks requiring levels 1–50";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.poeTradeStylerHideLowTier = preset;
    checkbox.checked =
      preset === "waystones"
        ? visibilitySettings.hideLowTierWaystones
        : visibilitySettings.hideLowTierFlasks;

    const text = document.createElement("span");
    text.textContent = "Hide low tier";
    label.append(checkbox, text);
    label.addEventListener("click", (event) => event.stopPropagation());
    checkbox.addEventListener("change", (event) => {
      event.stopPropagation();
      if (preset === "waystones") {
        visibilitySettings.hideLowTierWaystones = checkbox.checked;
      } else {
        visibilitySettings.hideLowTierFlasks = checkbox.checked;
      }
      syncLowTierVisibility();
      persistSettings?.();
    });
    return label;
  }

  function setBaseMenuOpen(
    button: Element,
    preset: BasePresetMode,
    shouldOpen: boolean
  ): void {
    const singular = preset.replace(/s$/, "");
    const menu = button
      ?.closest(".poe-trade-styler-preset-navigation-item")
      ?.querySelector<HTMLElement>(`.poe-trade-styler-${singular}-base-menu`);

    if (!menu) {
      return;
    }

    setPopoverOpen(menu, shouldOpen);
    if (shouldOpen) positionHoverMenu(button, menu);
    if (!shouldOpen) {
      const preview = button
        .closest(".poe-trade-styler-preset-navigation-item")
        ?.querySelector<HTMLElement>(".poe-trade-styler-base-unique-preview");
      if (preview) {
        setPopoverOpen(preview, false, { fadeIn: 300, fadeOut: 500 });
      }
    }
    button.setAttribute("aria-expanded", String(shouldOpen));
  }
  function closeBaseMenus(preset: BasePresetMode): boolean {
    let closed = false;
    const singular = preset.replace(/s$/, "");

    document
      .querySelectorAll<HTMLElement>(`[data-poe-trade-styler-preset="${preset}"]`)
      .forEach((button) => {
        const menu = button
          .closest(".poe-trade-styler-preset-navigation-item")
          ?.querySelector<HTMLElement>(`.poe-trade-styler-${singular}-base-menu`);

        if (menu && !menu.hidden) {
          closed = true;
        }

        setBaseMenuOpen(button, preset, false);
      });

    return closed;
  }

  function syncBaseMenu(preset: BasePresetMode, selectedKey: string | null): void {
    document
      .querySelectorAll<HTMLElement>(
        `.poe-trade-styler-base-option[data-poe-trade-styler-base-preset="${preset}"]` +
          `[data-poe-trade-styler-base-key]`
      )
      .forEach((option) => {
        const selected = option.dataset.poeTradeStylerBaseKey === selectedKey;
        option.classList.toggle("is-selected", selected);
        option.setAttribute("aria-checked", String(selected));
      });
  }
  function syncPresetControls(): void {
    const titles: Record<PresetMode, string> = {
      charms: "Choose a Charm base preset",
      flasks: "Choose a Flask base preset",
      gems: "Open Skill Gem Presets",
      gear: "Open Gear Presets",
      jewels: "Choose a Jewel base preset",
      tablets: "Choose a Tablet base preset",
      waystones: "Choose a Waystone tier preset"
    };
    (Object.keys(titles) as PresetMode[]).forEach((preset) => {
      document.querySelectorAll<HTMLElement>(
        `[data-poe-trade-styler-preset="${preset}"]`
      ).forEach((button) => {
        const active = presetState.activePreset === preset;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
        button.title = active
          ? `Disable the ${preset} preset and keep the selected form values`
          : titles[preset];
      });
    });

    syncWaystoneTierMenu();
    syncLowTierVisibility();
    syncBaseMenu("charms", presetState.selectedCharmBaseKey);
    syncBaseMenu("flasks", presetState.selectedFlaskBaseKey);
    syncBaseMenu("jewels", presetState.selectedJewelBaseKey);
    syncBaseMenu("tablets", presetState.selectedTabletBaseKey);
    syncActivePresetStatus();
  }

  function syncActivePresetStatus(): void {
    const activeMode = getActiveGroupPolicyMode();
    const labels: Record<GroupPolicyMode, string> = {
      charms: "Charms",
      flasks: "Flasks",
      gems: "Gems",
      gear: "Gear",
      jewels: "Jewels",
      tablets: "Tablets",
      uniques: "Uniques",
      waystones: "Waystones"
    };

    document
      .querySelectorAll<HTMLElement>("#trade .poe-trade-styler-quick-filters")
      .forEach((strip) => {
        let status = strip.querySelector<HTMLButtonElement>(
          ":scope > .poe-trade-styler-active-preset-status"
        );

        if (!activeMode) {
          status?.remove();
          return;
        }

        if (!status) {
          status = document.createElement("button");
          status.type = "button";
          status.className = "poe-trade-styler-active-preset-status";
          status.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            void deactivatePreset();
          });
        }

        const label = document.createElement("span");
        label.className = "poe-trade-styler-active-preset-status-label";
        label.textContent = "Preset:";
        const launcherIcon = document.querySelector<HTMLImageElement>(
          `[data-poe-trade-styler-preset="${activeMode}"] img`
        );
        const icon = document.createElement("img");
        icon.className = "poe-trade-styler-active-preset-status-icon";
        icon.src =
          launcherIcon?.getAttribute("src") || launcherIcon?.src || "";
        icon.alt = "";
        icon.referrerPolicy = "no-referrer";
        icon.setAttribute("aria-hidden", "true");

        status.dataset.poeTradeStylerActivePreset = activeMode;
        status.title = `Disable the ${labels[activeMode]} preset and restore stat filtering`;
        status.setAttribute(
          "aria-label",
          `${labels[activeMode]} preset active. Click to disable the preset and restore stat filtering.`
        );
        status.replaceChildren(label, icon);
        strip.append(status);
      });
  }

  async function setActivePreset(
    nextPreset: PresetMode | null,
    { preserveForm: _preserveForm = false }: { preserveForm?: boolean } = {}
  ): Promise<boolean> {
    if (
      nextPreset === presetState.activePreset &&
      !uniqueGroupPolicyActive &&
      !preparedGroupMode
    ) {
      return true;
    }

    if (nextPreset) {
      if (
        preparedGroupMode !== nextPreset &&
        !(await preparePresetActivation(nextPreset))
      ) return false;
      uniqueGroupPolicyActive = false;
      preparedGroupMode = null;
      presetState.activePreset = nextPreset;
      document.documentElement.classList.remove(
        "poe-trade-styler-charm-preset",
        "poe-trade-styler-flask-preset",
        "poe-trade-styler-gem-preset",
        "poe-trade-styler-gear-preset",
        "poe-trade-styler-jewel-preset",
        "poe-trade-styler-tablet-preset",
        "poe-trade-styler-waystone-preset"
      );
      document.documentElement.classList.add(
        `poe-trade-styler-${nextPreset.replace(/s$/, "")}-preset`
      );
      await applyWaystoneGroupState();

      stats.filterForPreset();
      stats.decorateOptions();
      syncPresetControls();

      return true;
    }

    presetState.activePreset = null;
    uniqueGroupPolicyActive = false;
    preparedGroupMode = null;
    document.documentElement.classList.remove(
      "poe-trade-styler-charm-preset",
      "poe-trade-styler-flask-preset",
      "poe-trade-styler-gem-preset",
      "poe-trade-styler-gear-preset",
      "poe-trade-styler-jewel-preset",
      "poe-trade-styler-tablet-preset",
      "poe-trade-styler-waystone-preset"
    );
    // Clear active launcher/status UI synchronously. Restoring the native
    // group state and stat catalogue may finish on the following microtask.
    syncPresetControls();
    // Group enablement/collapse is preset UI state and should always be
    // restored when the preset is disabled. preserveForm only means that the
    // native tier/category values remain populated.
    await applyWaystoneGroupState();
    stats.filterForPreset();
    stats.decorateOptions();
    syncPresetControls();
    return true;
  }

  async function preparePresetActivation(mode: GroupPolicyMode): Promise<boolean> {
    await setActivePreset(null, { preserveForm: false });
    if (!(await nativeForm.resetSearch())) return false;
    await groupStateManager.collapseEnabledGroups();
    preparedGroupMode = mode;
    return true;
  }

  async function finalizeSearch(
    beforeSubmit?: () => Promise<boolean | void>
  ): Promise<boolean> {
    // Native category/item updates may replace filter-group DOM once. Reapply
    // through current native controls before submitting; this is bounded and
    // has no polling or recurring timer.
    await applyWaystoneGroupState();
    stats.filterForPreset();
    stats.decorateOptions();
    if (beforeSubmit && (await beforeSubmit()) === false) return false;
    return nativeForm.submitSearch();
  }

  async function selectWaystoneTier(tier: number): Promise<void> {
    const definition = waystoneData.WAYSTONE_TIERS.find(
      (entry) => entry.tier === tier
    );

    if (!definition || waystoneTierSelectionInProgress) return;

    waystoneTierSelectionInProgress = true;

    try {
      presetState.selectedWaystoneTier = tier;
      closeWaystoneTierMenus();
      syncPresetControls();

      if (!(await preparePresetActivation("waystones"))) return;
      if (!(await setActivePreset("waystones"))) return;
      if (!(await nativeForm.setFilterValue("Item Category", "Waystone"))) return;
      if (!(await nativeForm.setSearchItem(definition.searchText))) return;
      await finalizeSearch();
    } finally {
      waystoneTierSelectionInProgress = false;
    }
  }

  function createWaystoneTierMenu(): HTMLDivElement {
    const menu = document.createElement("div");
    menu.className = "poe-trade-styler-waystone-tier-menu";
    decoratePopover(menu);
    menu.classList.add("poe-trade-styler-preset-popover");
    const menuContent = document.createElement("div");
    menuContent.className = "poe-trade-styler-preset-popover-content";
    menu.append(menuContent);
    menu.hidden = true;
    menu.setAttribute("role", "radiogroup");
    menu.setAttribute("aria-label", "Waystone tier");

    waystoneData.WAYSTONE_TIERS.forEach((definition) => {
      const option = document.createElement("button");
      option.className =
        "poe-trade-styler-waystone-tier-option " +
        `is-${definition.color}`;
      option.type = "button";
      option.dataset.poeTradeStylerWaystoneTier = String(definition.tier);
      option.dataset.poeTradeStylerWaystoneTierLabel = toRomanNumeral(
        definition.tier
      );
      option.title = definition.searchText;
      option.setAttribute("role", "radio");
      option.setAttribute("aria-label", definition.searchText);
      option.setAttribute("aria-checked", "false");

      const icon = document.createElement("img");
      icon.className = "poe-trade-styler-waystone-tier-icon";
      icon.src = getSafeItemImageUrl(definition.icon);
      icon.alt = "";
      icon.setAttribute("aria-hidden", "true");
      option.append(icon);

      option.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        selectWaystoneTier(definition.tier);
      });
      menuContent.append(option);
    });

    menu.append(createLowTierToggle("waystones"));

    return menu;
  }

  function createWaystonePresetButton() {
    const button = document.createElement("button");
    button.className =
      "poe-trade-styler-preset poe-trade-styler-waystone-preset-button";
    button.type = "button";
    button.dataset.poeTradeStylerPreset = "waystones";
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-label", "Waystones preset");
    button.setAttribute("aria-haspopup", "true");
    button.setAttribute("aria-expanded", "false");
    button.title = "Choose a Waystone tier preset";

    const icon = document.createElement("img");
    icon.className = "poe-trade-styler-waystone-preset-icon";
    icon.src = getSafeItemImageUrl(waystoneData.WAYSTONE_TIER_15_ICON);
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");

    button.append(icon);
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (presetState.activePreset === "waystones") {
        event.stopImmediatePropagation();
        void deactivatePreset();
      }
    });
    return button;
  }

  async function selectTabletBase(baseKey: string): Promise<void> {
    const definition = tabletData.getTabletBase(baseKey);

    if (!definition || tabletBaseSelectionInProgress) {
      return;
    }

    tabletBaseSelectionInProgress = true;

    try {
      presetState.selectedTabletBaseKey = definition.key;
      stats.setTabletBase(definition.key);
      closeWaystoneTierMenus();
      closeBaseMenus("tablets");
      syncPresetControls();

      if (!(await preparePresetActivation("tablets"))) return;
      if (!(await setActivePreset("tablets"))) return;
      if (!(await nativeForm.setFilterValue("Item Category", "Tablet"))) return;
      if (!(await nativeForm.setSearchItem(definition.searchText))) return;
      await finalizeSearch();
    } finally {
      tabletBaseSelectionInProgress = false;
    }
  }

  async function selectCharmBase(baseKey: string): Promise<void> {
    const definition = charmData.getCharmBase(baseKey);
    if (!definition || charmBaseSelectionInProgress) return;

    charmBaseSelectionInProgress = true;
    try {
      presetState.selectedCharmBaseKey = definition.key;
      stats.setCharmBase(definition.key);
      closeWaystoneTierMenus();
      closeBaseMenus("tablets");
      closeBaseMenus("charms");
      syncPresetControls();

      if (!(await preparePresetActivation("charms"))) return;
      if (!(await setActivePreset("charms"))) return;
      if (!(await nativeForm.setFilterValue("Item Category", "Charm"))) return;
      if (!(await nativeForm.setSearchItem(definition.searchText))) return;
      await finalizeSearch();
    } finally {
      charmBaseSelectionInProgress = false;
    }
  }
  async function selectFlaskBase(baseKey: string): Promise<void> {
    const definition = flaskData.getFlaskBase(baseKey);
    if (!definition || flaskBaseSelectionInProgress) return;
    flaskBaseSelectionInProgress = true;
    try {
      presetState.selectedFlaskBaseKey = definition.key;
      stats.setFlaskBase(definition.key);
      closeWaystoneTierMenus();
      (["tablets", "charms", "flasks"] as BasePresetMode[]).forEach(closeBaseMenus);
      syncPresetControls();
      if (!(await preparePresetActivation("flasks"))) return;
      if (!(await setActivePreset("flasks"))) return;
      const category = definition.kind === "life" ? "Life Flask" : "Mana Flask";
      if (!(await nativeForm.setFilterValue("Item Category", category))) return;
      if (!(await nativeForm.setSearchItem(definition.searchText))) return;
      await finalizeSearch();
    } finally {
      flaskBaseSelectionInProgress = false;
    }
  }

  async function selectUniqueItem(searchText: string): Promise<boolean> {
    if (!searchText || uniqueItemSelectionInProgress) return false;
    uniqueItemSelectionInProgress = true;
    try {
      closeWaystoneTierMenus();
      (["tablets", "charms", "flasks"] as BasePresetMode[]).forEach(closeBaseMenus);
      if (!(await preparePresetActivation("uniques"))) return false;
      return searchUniqueItem(searchText);
    } finally {
      uniqueItemSelectionInProgress = false;
    }
  }

  const selectGem = createGemSelection({
    activate: async () => { await setActivePreset("gems"); },
    closeMenus: () => {
      closeWaystoneTierMenus();
      (["tablets", "charms", "flasks"] as BasePresetMode[]).forEach(closeBaseMenus);
    },
    finalizeSearch,
    gemData,
    nativeForm,
    prepare: () => preparePresetActivation("gems"),
    presetState
  });

  const selectGear = createGearSelection({
    activate: async () => {
      await setActivePreset("gear");
      syncPresetControls();
    },
    closeMenus: () => {
      closeWaystoneTierMenus();
      (["tablets", "charms", "flasks"] as BasePresetMode[]).forEach(closeBaseMenus);
    },
    finalizeSearch,
    gearData,
    nativeForm,
    prepare: () => preparePresetActivation("gear"),
    presetState,
    stats
  });
  const selectJewel = createJewelSelection({
    activate: async () => {
      await setActivePreset("jewels");
      syncPresetControls();
    },
    closeMenus: () => {
      closeWaystoneTierMenus();
      (["tablets", "charms", "flasks"] as BasePresetMode[]).forEach(closeBaseMenus);
    },
    finalizeSearch,
    jewelData,
    nativeForm,
    prepare: () => preparePresetActivation("jewels"),
    presetState,
    stats
  });
  function createBasePresetButton(
    preset: BasePresetMode,
    label: string,
    iconSource: string
  ): HTMLButtonElement {
    const singular = preset.replace(/s$/, "");
    const button = document.createElement("button");
    button.className =
      `poe-trade-styler-preset poe-trade-styler-${singular}-preset-button`;
    button.type = "button";
    button.dataset.poeTradeStylerPreset = preset;
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-label", `${label} preset`);
    button.setAttribute("aria-haspopup", "true");
    button.setAttribute("aria-expanded", "false");
    button.title = `Choose a ${label} base preset`;

    const icon = document.createElement("img");
    icon.className = `poe-trade-styler-${singular}-preset-icon`;
    icon.src = getSafeItemImageUrl(iconSource);
    icon.referrerPolicy = "no-referrer";
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");

    button.append(icon);
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (presetState.activePreset === preset) {
        event.stopImmediatePropagation();
        void deactivatePreset();
      }
    });
    return button;
  }
  function getUniqueMenuDefinitions(
    type: "Charms" | "Life Flasks" | "Mana Flasks" | "Tablets"
  ): UniqueMenuDefinition[] {
    return (uniqueData?.getItemsByType(type) || []).map((item) => ({
      base: item.base,
      displayName: item.name,
      icon: item.officialIcon,
      key: item.key,
      kind: type === "Life Flasks" ? "life" : type === "Mana Flasks" ? "mana" : undefined,
      requiredLevel: item.level,
      searchText: `${item.name} ${item.base}`
    }));
  }

  const createTabletBaseMenu = () =>
    createBaseMenu("tablets", tabletData.TABLET_BASES, selectTabletBase, {
      createUniqueItemCard,
      selectUnique: async (searchText) => { await selectUniqueItem(searchText); },
      uniqueDefinitions: getUniqueMenuDefinitions("Tablets")
    });
  const createCharmBaseMenu = () =>
    createBaseMenu("charms", charmData.CHARM_BASES, selectCharmBase, {
      createUniqueItemCard,
      selectUnique: async (searchText) => { await selectUniqueItem(searchText); },
      uniqueDefinitions: getUniqueMenuDefinitions("Charms")
    });
  const createFlaskBaseMenu = () => {
    const menu = createBaseMenu(
      "flasks",
      flaskData.FLASK_BASES,
      selectFlaskBase,
      {
        createUniqueItemCard,
        selectUnique: async (searchText) => {
          await selectUniqueItem(searchText);
        },
        uniqueDefinitions: [
          ...getUniqueMenuDefinitions("Life Flasks"),
          ...getUniqueMenuDefinitions("Mana Flasks")
        ]
      }
    );
    menu.append(createLowTierToggle("flasks"));
    return menu;
  };
  const createTabletPresetButton = () =>
    createBasePresetButton("tablets", "Tablet", tabletData.TABLET_GENERAL_ICON);
  const createCharmPresetButton = () =>
    createBasePresetButton("charms", "Charm", charmData.CHARM_GENERAL_ICON);
  const createFlaskPresetButton = () => createBasePresetButton(
    "flasks", "Flask", flaskData.FLASK_GENERAL_ICON
  );

  function removeWaystonePresetButton(button: Element): void {
    const navigationItem = button.closest(
      ".poe-trade-styler-preset-navigation-item"
    );

    (navigationItem || button).remove();
  }

  function getBulkItemExchangeButton() {
    const exchangeLink = document.querySelector(
      'a[href*="/trade2/exchange/"], [role="button"][href*="/trade2/exchange/"]'
    );

    if (exchangeLink) {
      return exchangeLink;
    }

    // The trade mode navigation is rendered outside #trade on the live PoE 2
    // page. Keep a text fallback for fixture/markup changes where the route is
    // attached by the application rather than exposed as an href.
    const controls = [
      ...document.querySelectorAll(
        'a, button, [role="button"], .btn, .button'
      )
    ];

    return (
      controls.find((control) =>
        /\/trade2\/exchange(?:\/|$)/.test(
          control.getAttribute("href") || ""
        )
      ) ||
      controls.find(
        (control) =>
          stats.normalizeText(control.textContent || "") ===
          "bulk item exchange"
      ) ||
      null
    );
  }

  function mountBasePresetAfter(
    previousButton: Element,
    preset: BasePresetMode,
    useListItem: boolean,
    createButton: () => HTMLButtonElement,
    createMenu: () => HTMLDivElement
  ): Element {
    const singular = preset.replace(/s$/, "");
    let button = document.querySelector(
      `[data-poe-trade-styler-preset="${preset}"]`
    );
    if (!button) button = createButton();

    let navigationItem = button.closest(
      ".poe-trade-styler-preset-navigation-item"
    );
    if (!navigationItem) {
      navigationItem = document.createElement(useListItem ? "li" : "span");
      navigationItem.className = "poe-trade-styler-preset-navigation-item";
      navigationItem.append(button, createMenu());
    } else if (
      !navigationItem.querySelector(`.poe-trade-styler-${singular}-base-menu`)
    ) {
      navigationItem.append(createMenu());
    }

    const previousItem = previousButton.closest(
      ".poe-trade-styler-preset-navigation-item"
    );
    if (previousItem?.nextElementSibling !== navigationItem) {
      previousItem?.insertAdjacentElement("afterend", navigationItem);
    }
    return button;
  }

  function decoratePresets() {
    const bulkItemExchangeButton = getBulkItemExchangeButton();

    if (!bulkItemExchangeButton) {
      return;
    }

    if (!isPoe2PresetPage()) {
      document
        .querySelectorAll(
          '[data-poe-trade-styler-preset="waystones"], ' +
            '[data-poe-trade-styler-preset="tablets"], ' +
            '[data-poe-trade-styler-preset="charms"], ' +
            '[data-poe-trade-styler-preset="flasks"]'
        )
        .forEach(removeWaystonePresetButton);

      if (presetState.activePreset) {
        setActivePreset(null);
      }

      return;
    }

    document
      .querySelectorAll(".poe-trade-styler-presets")
      .forEach((presets) => presets.remove());

    let waystoneButton = document.querySelector(
      '[data-poe-trade-styler-preset="waystones"]'
    );

    if (!waystoneButton) {
      waystoneButton = createWaystonePresetButton();
    }

    const bulkNavigationItem = bulkItemExchangeButton.closest("li");

    if (bulkNavigationItem) {
      let presetNavigationItem = waystoneButton.closest(
        ".poe-trade-styler-preset-navigation-item"
      );

      if (!presetNavigationItem) {
        presetNavigationItem = document.createElement("li");
        presetNavigationItem.className =
          "poe-trade-styler-preset-navigation-item";
        presetNavigationItem.append(
          waystoneButton,
          createWaystoneTierMenu()
        );
      } else if (
        !presetNavigationItem.querySelector(
          ".poe-trade-styler-waystone-tier-menu"
        )
      ) {
        presetNavigationItem.append(createWaystoneTierMenu());
      }

      if (
        bulkNavigationItem.nextElementSibling !== presetNavigationItem
      ) {
        bulkNavigationItem.insertAdjacentElement(
          "afterend",
          presetNavigationItem
        );
      }
      bindHoverMenu({
        navigationItem: presetNavigationItem,
        button: waystoneButton,
        open: () => {
          (["tablets", "charms", "flasks"] as BasePresetMode[]).forEach(closeBaseMenus);
          setWaystoneTierMenuOpen(waystoneButton, true);
        },
        close: () => setWaystoneTierMenuOpen(waystoneButton, false)
      });
    } else {
      let presetNavigationItem = waystoneButton.closest(
        ".poe-trade-styler-preset-navigation-item"
      );

      if (!presetNavigationItem) {
        presetNavigationItem = document.createElement("span");
        presetNavigationItem.className =
          "poe-trade-styler-preset-navigation-item";
        presetNavigationItem.append(
          waystoneButton,
          createWaystoneTierMenu()
        );
      } else if (
        !presetNavigationItem.querySelector(
          ".poe-trade-styler-waystone-tier-menu"
        )
      ) {
        presetNavigationItem.append(createWaystoneTierMenu());
      }

      if (
        bulkItemExchangeButton.nextElementSibling !== presetNavigationItem
      ) {
        bulkItemExchangeButton.insertAdjacentElement(
          "afterend",
          presetNavigationItem
        );
      }
      bindHoverMenu({
        navigationItem: presetNavigationItem,
        button: waystoneButton,
        open: () => {
          (["tablets", "charms", "flasks"] as BasePresetMode[]).forEach(closeBaseMenus);
          setWaystoneTierMenuOpen(waystoneButton, true);
        },
        close: () => setWaystoneTierMenuOpen(waystoneButton, false)
      });
    }

    const tabletButton = mountBasePresetAfter(
      waystoneButton,
      "tablets",
      Boolean(bulkNavigationItem),
      createTabletPresetButton,
      createTabletBaseMenu
    );
    const charmButton = mountBasePresetAfter(
      tabletButton,
      "charms",
      Boolean(bulkNavigationItem),
      createCharmPresetButton,
      createCharmBaseMenu
    );
    // Jewel Helper owns the jewel launcher, but both features are decorated by
    // the same MutationObserver. Preserve its position between Charms and
    // Flasks when it is already mounted; otherwise the two decorators move
    // Jewel and Flask past each other on every frame.
    const jewelButton = document.querySelector(
      '[data-poe-trade-styler-preset="jewels"]'
    );
    const charmNavigationItem = charmButton.closest(
      ".poe-trade-styler-preset-navigation-item"
    );
    const jewelNavigationItem = jewelButton?.closest(
      ".poe-trade-styler-preset-navigation-item"
    );
    const flaskAnchor =
      jewelButton && jewelNavigationItem?.previousElementSibling === charmNavigationItem
        ? jewelButton
        : charmButton;
    const flaskButton = mountBasePresetAfter(
      flaskAnchor,
      "flasks",
      Boolean(bulkNavigationItem),
      createFlaskPresetButton, createFlaskBaseMenu);

    ([
      [tabletButton, "tablets"],
      [charmButton, "charms"],
      [flaskButton, "flasks"]
    ] as const).forEach(([button, preset]) => {
      const navigationItem = button.closest(
        ".poe-trade-styler-preset-navigation-item"
      );
      if (!navigationItem) return;
      bindHoverMenu({
        navigationItem,
        button,
        open: () => {
          closeWaystoneTierMenus();
          (["tablets", "charms", "flasks"] as BasePresetMode[])
            .filter((candidate) => candidate !== preset)
            .forEach(closeBaseMenus);
          setBaseMenuOpen(button, preset, true);
        },
        close: () => setBaseMenuOpen(button, preset, false)
      });
    });

    stats.filterForPreset();
    syncPresetControls();
  }

  async function activateUniqueGroups(): Promise<void> {
    if (
      preparedGroupMode !== "uniques" &&
      !(await preparePresetActivation("uniques"))
    ) return;
    preparedGroupMode = null;
    uniqueGroupPolicyActive = true;
    await applyWaystoneGroupState();
    stats.filterForPreset();
    stats.decorateOptions();
    syncPresetControls();
  }

  async function searchUniqueItem(name: string): Promise<boolean> {
    await activateUniqueGroups();
    if (!uniqueGroupPolicyActive) return false;
    if (!(await nativeForm.setSearchItem(name))) return false;
    return finalizeSearch();
  }

  async function deactivatePreset(): Promise<void> {
    closeWaystoneTierMenus();
    closeBaseMenus("tablets");
    closeBaseMenus("charms");
    closeBaseMenus("flasks");
    await setActivePreset(null);
  }

  return {
    activateUniqueGroups,
    closeMenus() {
      const closedWaystones = closeWaystoneTierMenus();
      const closedTablets = closeBaseMenus("tablets");
      const closedCharms = closeBaseMenus("charms");
      const closedFlasks = closeBaseMenus("flasks");
      return closedWaystones || closedTablets || closedCharms || closedFlasks;
    },
    deactivate: deactivatePreset,
    decorate: decoratePresets,
    finalizeSearch,
    isUniqueActive: () => uniqueGroupPolicyActive,
    prepareUniqueGroups: () => preparePresetActivation("uniques"),
    searchUniqueItem,
    selectGear,
    selectGem,
    selectJewel,
    selectUniqueItem
  };
}

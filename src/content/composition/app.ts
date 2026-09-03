import { createLayoutFeature } from "../layout/controller";
import type { ContentDependencies } from "../ports";
import { createPresetsFeature } from "../presets/controller";
import { createNativeTradeForm } from "../presets/native-form";
import { createPresetState } from "../presets/state";
import { createQuickFiltersFeature } from "../quick-filters";
import {
  QUICK_BOOLEAN_FILTERS,
  QUICK_NUMBER_FILTERS,
  QUICK_RARITY_FILTER
} from "../quick-filter-definitions";
import { createSettingsFeature } from "../settings/controller";
import { createStatFiltersFeature } from "../stat-filters/controller";
import { createUniqueHelperFeature } from "../unique-helper/controller";
import { createGearHelperFeature } from "../gear-helper/controller";
import { createGemHelperFeature } from "../gem-helper/controller";
import { createJewelHelperFeature } from "../jewel-helper/controller";
import { createSearchClearFeature } from "../search-clear/controller";
import { createSiteToolbarFeature } from "../site-toolbar/controller";
import { createDecorationScheduler } from "./decoration-scheduler";
import { TRADE_SELECTORS } from "../trade-dom";
import { isUserSearchFilterChange } from "./search-filter-change";

export interface ContentApp {
  destroy(): void;
}

export interface ContentAppEnvironment {
  document?: Document;
  window?: Window;
}

function asElement(target: EventTarget | null): Element | null {
  return target instanceof Element ? target : null;
}

export function createContentApp(
  dependencies: ContentDependencies,
  environment: ContentAppEnvironment = {}
): ContentApp {
  const doc = environment.document ?? document;
  const browserWindow = environment.window ?? window;
  const { charmData, corruptionData, flaskData, gemData, gearData, jewelData, styler, tabletData, uniqueData, waystoneData } =
    dependencies;

  const presetToggles = [
    { key: "waystones", label: "Waystones", icon: waystoneData.WAYSTONE_TIER_15_ICON },
    { key: "tablets", label: "Tablets", icon: tabletData.TABLET_GENERAL_ICON },
    { key: "charms", label: "Charms", icon: charmData.CHARM_GENERAL_ICON },
    { key: "flasks", label: "Flasks", icon: flaskData.FLASK_GENERAL_ICON },
    { key: "gems", label: "Gems", icon: gemData.GEM_GENERAL_ICON },
    { key: "jewels", label: "Jewels", icon: jewelData.JEWEL_GENERAL_ICON },
    { key: "gear", label: "Gear", icon: gearData.GEAR_GENERAL_ICON },
    { key: "uniques", label: "Uniques", icon: uniqueData.UNIQUE_HELPER_ICON }
  ];
  const quickFilterToggles = [
    ...styler.QUICK_BOUND_FILTERS,
    ...QUICK_BOOLEAN_FILTERS,
    ...QUICK_NUMBER_FILTERS,
    { ...QUICK_RARITY_FILTER, icon: "R" }
  ].map(({ key, label, icon }) => ({ key, label, icon }));

  let applyState = (): void => undefined;
  const settingsFeature = createSettingsFeature({
    document: doc,
    onApply: () => applyState(),
    presetToggles,
    quickFilterToggles
  });
  const settings = settingsFeature.state;
  const presetState = createPresetState();
  let isUniquePresetActive = (): boolean => false;
  const stats = createStatFiltersFeature({
    charmData,
    corruptionData,
    flaskData,
    gearData,
    isUniqueActive: () => isUniquePresetActive(),
    jewelData,
    persistSettings: settingsFeature.persist,
    presetState,
    settings,
    styler,
    tabletData,
    waystoneData
  });
  const quickFilters = createQuickFiltersFeature({
    gemData,
    normalizeText: stats.normalizeText,
    styler,
    waitForElement: stats.waitForElement
  });
  const nativeForm = createNativeTradeForm({
    document: doc,
    normalize: stats.normalizeText,
    waitForElement: stats.waitForElement
  });
  let createUniqueItemCard = (_key: string): HTMLElement | null => null;
  const presets = createPresetsFeature({
    charmData,
    createUniqueItemCard: (key) => createUniqueItemCard(key),
    flaskData,
    gemData,
    gearData,
    jewelData,
    nativeForm,
    persistSettings: settingsFeature.persist,
    presetState,
    settings,
    stats,
    styler,
    tabletData,
    uniqueData,
    waystoneData
  });
  isUniquePresetActive = presets.isUniqueActive;
  const gemHelper = createGemHelperFeature({
    document: doc,
    gemData,
    onDeactivate: presets.deactivate,
    onSelect: presets.selectGem,
    persistSettings: settingsFeature.persist,
    presetState,
    settings,
    styler
  });
  const jewelHelper = createJewelHelperFeature({
    createUniqueItemCard: (key) => createUniqueItemCard(key),
    document: doc,
    jewelData,
    onDeactivate: presets.deactivate,
    onSelect: presets.selectJewel,
    onSelectUnique: presets.selectUniqueItem,
    presetState,
    styler,
    uniqueData
  });
  const gearHelper = createGearHelperFeature({
    document: doc,
    gearData,
    onDeactivate: presets.deactivate,
    onSelect: presets.selectGear,
    presetState,
    styler
  });
  const uniqueHelper = createUniqueHelperFeature({
    corruptionData,
    document: doc,
    isActive: presets.isUniqueActive,
    onDeactivate: presets.deactivate,
    onBeforeOpen: async () => {
      return presets.prepareUniqueGroups();
    },
    onSearchItem: presets.searchUniqueItem,
    persistSettings: settingsFeature.persist,
    settings,
    styler,
    uniqueData
  });
  createUniqueItemCard = uniqueHelper.createItemCard;
  const layout = createLayoutFeature({
    document: doc,
    isStickySearchEnabled: () => settings.stickySearchPanel,
    isTwoColumnEnabled: () => settings.twoColumnLayout,
    styler,
    window: browserWindow
  });
  const siteToolbar = createSiteToolbarFeature({
    document: doc,
    isEnabled: () => settings.stickySearchPanel,
    window: browserWindow
  });
  const deactivatePresetForSearchChange = (): void => {
    void presets.deactivate();
  };
  const searchClear = createSearchClearFeature({
    document: doc,
    onClear: deactivatePresetForSearchChange
  });
  settingsFeature.mount();

  function syncFeatureAvailability(): void {
    const disabledPresets = new Set(settings.disabledPresets);
    const activePreset = presetState.activePreset ||
      (presets.isUniqueActive() ? "uniques" : null);

    if (activePreset && disabledPresets.has(activePreset)) {
      void presets.deactivate();
    }

    doc
      .querySelectorAll<HTMLButtonElement>("[data-poe-trade-styler-preset]")
      .forEach((button) => {
        const enabled = !disabledPresets.has(
          button.dataset.poeTradeStylerPreset || ""
        );
        const navigationItem = button.closest<HTMLElement>(
          ".poe-trade-styler-preset-navigation-item"
        );
        button.disabled = !enabled;
        if (navigationItem) {
          navigationItem.hidden = !enabled;
        } else {
          button.hidden = !enabled;
        }
      });

    const disabledQuickFilters = new Set(settings.disabledQuickFilters);
    const quickFilterStrip = doc.querySelector<HTMLElement>(
      "#trade > .top .poe-trade-styler-quick-filters"
    );
    let visibleQuickFilters = 0;
    quickFilterStrip
      ?.querySelectorAll<HTMLElement>("[data-quick-filter]")
      .forEach((control) => {
        const enabled = !disabledQuickFilters.has(
          control.dataset.quickFilter || ""
        );
        control.classList.toggle(
          "poe-trade-styler-feature-disabled",
          !enabled
        );
        if (enabled && !control.hidden) visibleQuickFilters += 1;
        if (!enabled && control.classList.contains("is-open")) {
          quickFilters.closeBoundPopovers();
        }
      });
    if (quickFilterStrip) {
      quickFilterStrip.hidden = visibleQuickFilters === 0;
    }
  }

  applyState = (): void => {
    styler.setBackgroundDisabled(doc, settings.disableBackground);
    styler.setFullWidthEnabled(doc, settings.fullWidthScreen);
    doc.documentElement.classList.toggle(
      "poe-trade-styler-hide-irrelevant-affixes",
      settings.hideIrrelevantAffixes
    );
    doc.documentElement.classList.toggle(
      "poe-trade-styler-hide-corner-decorators",
      settings.hideCornerDecorators
    );
    styler.setRightSpaceEnabled(doc, settings.rightSpaceForBetterTrading);
    styler.setStickySearchEnabled(doc, settings.stickySearchPanel);
    styler.setTwoColumnEnabled(doc, settings.twoColumnLayout);

    stats.decorateOptions();
    presets.decorate();
    gemHelper.decorate();
    jewelHelper.decorate();
    gearHelper.decorate();
    uniqueHelper.decorate();
    quickFilters.decorate();
    searchClear.decorate();
    siteToolbar.decorate();
    syncFeatureAvailability();
    layout.sync();
  };

  const onDocumentPointerDown = (event: Event): void => {
    const target = asElement(event.target);

    if (target?.closest("#trade .filter-body")) {
      setTimeout(quickFilters.requestSync, 0);
      setTimeout(quickFilters.requestSync, 80);
    }

    if (!target?.closest(".poe-trade-styler-preset-navigation-item")) {
      presets.closeMenus();
    }
    if (!target?.closest(".poe-trade-styler-jewel-navigation-item")) {
      jewelHelper.close();
    }

  };

  const onDocumentKeyDown = (event: KeyboardEvent): void => {
    if (quickFilters.handleKeyDown(event)) return;
    if (event.key === "Escape" && uniqueHelper.close()) return;
    if (event.key === "Escape" && gearHelper.close()) return;
    if (event.key === "Escape" && gemHelper.close()) return;
    if (event.key === "Escape" && jewelHelper.close()) return;
    if (event.key === "Escape" && presets.closeMenus()) return;
    if (event.key === "Escape" && quickFilters.closeBoundPopovers()) {
      quickFilters.requestSync();
      return;
    }
    if (event.key === "Escape" && settingsFeature.handleEscape()) return;
  };

  const onViewportChange = (): void => {
    layout.sync();
  };

  const onDocumentInput = (event: Event): void => {
    if (isUserSearchFilterChange(event, doc)) {
      deactivatePresetForSearchChange();
    }
    const target = asElement(event.target);
    if (
      target?.closest("#trade .filter-body") ||
      target?.matches(TRADE_SELECTORS.searchInput)
    ) {
      quickFilters.requestSync();
    }
  };

  const onDocumentChange = (event: Event): void => {
    if (isUserSearchFilterChange(event, doc)) {
      deactivatePresetForSearchChange();
    }
    if (asElement(event.target)?.closest("#trade .filter-body")) {
      quickFilters.requestSync();
    }
  };

  const onDocumentClick = (event: MouseEvent): void => {
    if (isUserSearchFilterChange(event, doc)) {
      deactivatePresetForSearchChange();
    }
    const target = asElement(event.target);
    if (
      !quickFilters.isGroupToggleInProgress() &&
      !target?.closest(".poe-trade-styler-quick-rarity-filter") &&
      !target?.closest(".poe-trade-styler-quick-number-filter") &&
      !target?.closest(".poe-trade-styler-quick-bound-filter")
    ) {
      quickFilters.closeBoundPopovers();
    }
    quickFilters.requestSync();
    browserWindow.requestAnimationFrame(layout.sync);
  };

  doc.addEventListener("pointerdown", onDocumentPointerDown);
  doc.addEventListener("keydown", onDocumentKeyDown);
  doc.addEventListener("input", onDocumentInput);
  doc.addEventListener("change", onDocumentChange);
  doc.addEventListener("click", onDocumentClick);
  browserWindow.addEventListener("resize", onViewportChange);
  browserWindow.addEventListener("scroll", onViewportChange, { passive: true });

  const decorationScheduler = createDecorationScheduler(
    [
      { name: "stat-filters", run: stats.decorateOptions },
      { name: "result-modifiers", run: stats.decorateResultModifiers },
      { name: "presets", run: presets.decorate },
      { name: "gem-helper", run: gemHelper.decorate },
      { name: "jewel-helper", run: jewelHelper.decorate },
      { name: "gear-helper", run: gearHelper.decorate },
      { name: "unique-helper", run: uniqueHelper.decorate },
      { name: "quick-filters", run: quickFilters.decorate },
      { name: "search-clear", run: searchClear.decorate },
      { name: "site-toolbar", run: siteToolbar.decorate },
      { name: "feature-availability", run: syncFeatureAvailability },
      { name: "layout", run: layout.sync }
    ],
    browserWindow.requestAnimationFrame.bind(browserWindow),
    browserWindow.cancelAnimationFrame.bind(browserWindow)
  );
  const observer = new MutationObserver(decorationScheduler.schedule);
  observer.observe(doc.body, { childList: true, subtree: true });
  settingsFeature.start();

  return {
    destroy(): void {
      observer.disconnect();
      decorationScheduler.destroy();
      doc.removeEventListener("pointerdown", onDocumentPointerDown);
      doc.removeEventListener("keydown", onDocumentKeyDown);
      doc.removeEventListener("input", onDocumentInput);
      doc.removeEventListener("change", onDocumentChange);
      doc.removeEventListener("click", onDocumentClick);
      browserWindow.removeEventListener("resize", onViewportChange);
      browserWindow.removeEventListener("scroll", onViewportChange);
      searchClear.destroy();
      siteToolbar.destroy();
      layout.destroy();
      settingsFeature.destroy();
      uniqueHelper.destroy();
      gearHelper.destroy();
      gemHelper.destroy();
      jewelHelper.destroy();
    }
  };
}

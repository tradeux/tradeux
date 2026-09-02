export interface StylerSettings {
  disableBackground: boolean;
  fullWidthScreen: boolean;
  gemItemFavorites: string[];
  hideCornerDecorators: boolean;
  hideIrrelevantAffixes: boolean;
  hideLowTierFlasks: boolean;
  hideLowTierWaystones: boolean;
  rightSpaceForBetterTrading: boolean;
  statFilterFavorites: string[];
  stickySearchPanel: boolean;
  twoColumnLayout: boolean;
  uniqueItemFavorites: string[];
}

export const DEFAULT_SETTINGS: Readonly<StylerSettings> = Object.freeze({
  disableBackground: true,
  fullWidthScreen: true,
  gemItemFavorites: [],
  hideCornerDecorators: false,
  hideIrrelevantAffixes: true,
  hideLowTierFlasks: false,
  hideLowTierWaystones: false,
  rightSpaceForBetterTrading: false,
  statFilterFavorites: [],
  stickySearchPanel: true,
  twoColumnLayout: true,
  uniqueItemFavorites: []
});

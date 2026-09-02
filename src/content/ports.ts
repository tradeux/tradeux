export interface QuickBoundFilterDefinition {
  bound: "max" | "min";
  icon: string;
  key: string;
  label: string;
  max?: number;
  min?: number;
  shortLabel: string;
  tone: string;
}

export type QuickBooleanState = "any" | "no" | "yes";

export interface TradeStatRecord {
  id: string;
  text: string;
  type?: string;
}

export type TradeStatCatalog = Record<string, TradeStatRecord>;

export interface StylerPort {
  readonly QUICK_BOUND_FILTERS: readonly QuickBoundFilterDefinition[];
  formatFilterDescription(
    label: string,
    value: { max?: string; min?: string; option?: string }
  ): string;
  getAvailableDropdownHeight(
    inputBottom: number,
    controlsTop: number,
    quickFiltersTop?: number
  ): number;
  getCorruptionStatSearchQuery(label: string): string;
  getItemModifierStatId(field?: string): string | null;
  getModifierStatTemplate(label: string): string;
  getNextQuickBooleanState(state?: string): QuickBooleanState;
  getStatGroupTypeFromText(text: string): string | null;
  getTradeGameKey(pathname: string): "poe2" | null;
  indexTradeStats(payload: unknown): TradeStatCatalog;
  isTradeSearchPath(pathname: string): boolean;
  normalizeModifierStatText(value: string): string;
  normalizeQuickBoundValue(
    definition: QuickBoundFilterDefinition,
    value: string | number
  ): string;
  setBackgroundDisabled(document: Document, enabled: boolean): void;
  setFullWidthEnabled(document: Document, enabled: boolean): void;
  setRightSpaceEnabled(document: Document, enabled: boolean): void;
  setStickySearchEnabled(document: Document, enabled: boolean): void;
  setTwoColumnEnabled(document: Document, enabled: boolean): void;
}

export interface PresetStatOption {
  affix?: "prefix" | "suffix";
  group?: string;
  id: string;
  text: string;
  type: string;
}

export interface GearSlotDefinition {
  baseKeys: readonly string[];
  category: string;
  displayName: string;
  icon: string;
  key: string;
}

export interface GearBaseDefinition {
  category: string;
  displayName: string;
  itemKeys: readonly string[];
  key: string;
}

export interface GearItemDefinition {
  baseKey: string;
  displayName: string;
  icon: string;
  implicits: readonly string[];
  key: string;
  properties: Readonly<Record<string, number | string>>;
  requiredLevel: number;
  requirements: Readonly<Record<string, number | string>>;
  sourceBaseKey?: string;
  tradeAvailable: boolean;
}

export interface GearDataPort {
  readonly GEAR_GENERAL_ICON: string;
  readonly GEAR_SLOTS: readonly GearSlotDefinition[];
  readonly GEAR_STAT_GROUP_ORDER: readonly string[];
  getGearBase(key: string): GearBaseDefinition | null;
  getGearBases(slotKey: string): GearBaseDefinition[];
  getGearItem(key: string): GearItemDefinition | null;
  getGearItems(slotKey: string, baseKey?: string | null): GearItemDefinition[];
  getGearSlot(key: string): GearSlotDefinition | null;
  getGearStatOptions(
    slotKey: string,
    baseKey?: string | null,
    itemKey?: string | null,
    catalogEntries?: readonly TradeStatRecord[]
  ): PresetStatOption[];
}

export interface CharmBaseDefinition {
  baseStat: string;
  displayName: string;
  icon: string;
  key: string;
  searchText: string;
}

export interface CharmDataPort {
  readonly CHARM_BASES: readonly CharmBaseDefinition[];
  readonly CHARM_GENERAL_ICON: string;
  readonly CHARM_STAT_GROUP_ORDER: readonly string[];
  getCharmBase(key: string): CharmBaseDefinition | null;
  getCharmStatOptions(
    baseKey: string,
    catalogEntries?: readonly TradeStatRecord[]
  ): PresetStatOption[];
}

export interface FlaskBaseDefinition {
  displayName: string;
  icon: string;
  key: string;
  kind: "life" | "mana";
  requiredLevel: number;
  searchText: string;
}

export interface FlaskDataPort {
  readonly FLASK_BASES: readonly FlaskBaseDefinition[];
  readonly FLASK_GENERAL_ICON: string;
  readonly FLASK_STAT_GROUP_ORDER: readonly string[];
  getFlaskBase(key: string): FlaskBaseDefinition | null;
  getFlaskStatOptions(
    baseKey: string,
    catalogEntries?: readonly TradeStatRecord[]
  ): PresetStatOption[];
}

export type GemAttribute = "strength" | "dexterity" | "intelligence";

export interface GemDefinition {
  attribute: GemAttribute;
  attributes: readonly GemAttribute[];
  icon: string;
  key: string;
  name: string;
  requiredLevel: number;
  searchText: string;
  tags: readonly string[];
  tier: number;
}

export interface GemDataPort {
  readonly GEM_ATTRIBUTES: readonly GemAttribute[];
  readonly GEM_DEFINITIONS: readonly GemDefinition[];
  readonly GEM_GENERAL_ICON: string;
  readonly GEM_TIERS: readonly number[];
  getGem(key: string): GemDefinition | null;
  getGems(filters?: {
    attribute?: GemAttribute | "all";
    query?: string;
    tier?: number | string | null;
  }): GemDefinition[];
}

export interface JewelBaseDefinition {
  displayName: string;
  hasCraftModifierPool: boolean;
  icon: string;
  key: string;
  searchText: string;
}

export interface JewelDataPort {
  readonly JEWEL_BASES: readonly JewelBaseDefinition[];
  readonly JEWEL_GENERAL_ICON: string;
  readonly JEWEL_STAT_GROUP_ORDER: readonly string[];
  getJewelBase(key: string): JewelBaseDefinition | null;
  getJewelStatOptions(
    baseKey: string,
    catalogEntries?: readonly TradeStatRecord[]
  ): PresetStatOption[];
}

export interface WaystoneTierDefinition {
  color: string;
  icon: string;
  searchText: string;
  tier: number;
}

export interface WaystoneDataPort {
  readonly WAYSTONE_STAT_GROUP_ORDER: readonly string[];
  readonly WAYSTONE_TIER_15_ICON: string;
  readonly WAYSTONE_TIERS: readonly WaystoneTierDefinition[];
  getWaystoneStatOptions(
    catalogEntries?: readonly TradeStatRecord[]
  ): PresetStatOption[];
}

export interface TabletBaseDefinition {
  displayName: string;
  icon: string;
  key: string;
  searchText: string;
}

export interface TabletDataPort {
  readonly TABLET_BASES: readonly TabletBaseDefinition[];
  readonly TABLET_GENERAL_ICON: string;
  readonly TABLET_STAT_GROUP_ORDER: readonly string[];
  getTabletBase(key: string): TabletBaseDefinition | null;
  getTabletStatOptions(
    baseKey: string,
    catalogEntries?: readonly TradeStatRecord[]
  ): PresetStatOption[];
}

export interface CorruptionDataPort {
  getCorruptionImplicits(itemName: string): string[];
}

export interface UniqueRuneforgingDefinition {
  cost: string;
  implicitMods: readonly string[];
  key: string;
  label: string;
  level: number | null;
  properties: readonly string[];
  propertyStyles: readonly (number | null)[];
  requirements: string;
  tier: "runeforged" | "runemastered";
}

export interface UniqueItemDefinition {
  base: string;
  baseImplicitMods: readonly string[];
  baseProperties: readonly string[];
  basePropertyStyles: readonly (number | null)[];
  flavourText: readonly string[];
  key: string;
  level: number;
  mods: readonly string[];
  name: string;
  officialIcon: string;
  requirements: string;
  runeforging: readonly UniqueRuneforgingDefinition[];
  section: string;
  sourceUrl: string;
  type: string;
}

export interface UniqueDataPort {
  readonly RUNEFORGE_ICON: string;
  readonly UNIQUE_HELPER_ICON: string;
  readonly UNIQUE_ITEMS: readonly UniqueItemDefinition[];
  readonly UNIQUE_TYPES: readonly string[];
  getItemsByType(type: string): UniqueItemDefinition[];
  getUniqueItem(key: string): UniqueItemDefinition | null;
}

export interface ContentDependencies {
  charmData: CharmDataPort;
  corruptionData: CorruptionDataPort;
  flaskData: FlaskDataPort;
  gemData: GemDataPort;
  gearData: GearDataPort;
  jewelData: JewelDataPort;
  styler: StylerPort;
  tabletData: TabletDataPort;
  uniqueData: UniqueDataPort;
  waystoneData: WaystoneDataPort;
}

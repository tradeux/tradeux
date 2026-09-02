export interface QuickBooleanFilterDefinition {
  key: string;
  label: string;
  icon: string;
}

export interface QuickNumberFilterDefinition
  extends QuickBooleanFilterDefinition {
  columns?: number;
  exact?: boolean;
  gemOnly?: boolean;
  shortLabel: string;
  values: readonly string[];
  max?: number;
  min?: number;
}

export interface QuickRarityFilterDefinition {
  key: string;
  label: string;
  values: readonly string[];
}

type BundledIconData = {
  fallbackPath?: string;
  mappings?: { quickFilters?: Record<string, string> };
};

const bundledIconData = (globalThis as typeof globalThis & {
  Poe2BundledIconData?: BundledIconData;
}).Poe2BundledIconData;
const quickFilterIcon = (key: string): string =>
  bundledIconData?.mappings?.quickFilters?.[key] ||
  bundledIconData?.fallbackPath ||
  "assets/item-icons/fallback.webp";

export const QUICK_RARITY_FILTER: QuickRarityFilterDefinition = {
  key: "rarity",
  label: "Item Rarity",
  values: [
    "Normal",
    "Magic",
    "Rare",
    "Unique",
    "Unique (Foil)",
    "Any Non-Unique"
  ]
};

export const QUICK_BOOLEAN_FILTERS: readonly QuickBooleanFilterDefinition[] = [
  {
    key: "corrupted",
    label: "Corrupted",
    icon: quickFilterIcon("corrupted")
  },
  {
    key: "fractured",
    label: "Fractured",
    icon: quickFilterIcon("fractured")
  },
  {
    key: "desecrated",
    label: "Desecrated",
    icon: quickFilterIcon("desecrated")
  },
  {
    key: "crafted",
    label: "Crafted",
    icon: quickFilterIcon("crafted")
  },
  {
    key: "mirrored",
    label: "Mirrored",
    icon: quickFilterIcon("mirrored")
  },
  {
    key: "sanctified",
    label: "Sanctified",
    icon: quickFilterIcon("sanctified")
  }
];
export const QUICK_NUMBER_FILTERS: readonly QuickNumberFilterDefinition[] = [
  {
    key: "augmentable-sockets",
    label: "Augmentable Sockets",
    shortLabel: "Minimum augmentable sockets",
    icon: quickFilterIcon("augmentable-sockets"),
    values: ["1", "2", "3", "4", "5", "6"]
  },
  {
    key: "item-quality",
    label: "Item Quality",
    shortLabel: "Minimum item quality",
    icon: quickFilterIcon("item-quality"),
    values: Array.from({ length: 30 }, (_, index) => String(index + 1)),
    min: 0,
    max: 100
  },
  {
    key: "gem-level",
    label: "Gem Level",
    shortLabel: "Exact gem level",
    icon: quickFilterIcon("gem-level"),
    values: Array.from({ length: 21 }, (_, index) => String(index + 1)),
    columns: 2,
    exact: true,
    gemOnly: true,
    min: 1,
    max: 21
  },
  {
    key: "gem-sockets",
    label: "Gem Sockets",
    shortLabel: "Minimum gem sockets",
    icon: quickFilterIcon("gem-sockets"),
    values: ["2", "3", "4", "5"],
    gemOnly: true
  }
];

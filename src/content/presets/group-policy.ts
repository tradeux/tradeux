import type { PresetMode } from "./state";

export type GroupPolicyMode = PresetMode | "uniques";

export const PRESET_ENABLED_GROUPS: Readonly<
  Record<PresetMode, ReadonlySet<string>>
> = Object.freeze({
  charms: new Set([
    "type filters",
    "requirements",
    "requirements filters",
    "miscellaneous",
    "stat filters",
    "not",
    "trade filters"
  ]),
  flasks: new Set([
    "type filters",
    "stat filters",
    "not",
    "trade filters"
  ]),
  gems: new Set([
    "type filters",
    "requirements",
    "requirements filters",
    "miscellaneous",
    "trade filters"
  ]),
  gear: new Set([
    "type filters",
    "equipment filters",
    "requirements",
    "requirements filters",
    "miscellaneous",
    "stat filters",
    "not",
    "trade filters"
  ]),
  jewels: new Set([
    "type filters",
    "miscellaneous",
    "stat filters",
    "not",
    "trade filters"
  ]),
  tablets: new Set([
    "type filters",
    "miscellaneous",
    "stat filters",
    "not",
    "trade filters"
  ]),
  waystones: new Set([
    "endgame filters",
    "miscellaneous",
    "stat filters",
    "not",
    "trade filters"
  ])
});

export interface PresetGroupPolicy {
  enabled: boolean;
  expanded?: boolean;
  hidden: boolean;
}

const ACCESSORY_GEAR_SLOTS = new Set(["amulets", "rings", "belts"]);
const ACCESSORY_GEAR_ENABLED_GROUPS = new Set([
  "type filters",
  "miscellaneous",
  "stat filters",
  "not",
  "trade filters"
]);
const UNIQUE_ENABLED_GROUPS = new Set([
  "type filters",
  "equipment filters",
  "miscellaneous",
  "stat filters",
  "not",
  "trade filters"
]);

export interface PresetGroupContext {
  gearSlotKey?: string | null;
}

export function getPresetGroupPolicy(
  preset: GroupPolicyMode,
  groupKey: string,
  { gearSlotKey = null }: PresetGroupContext = {}
): PresetGroupPolicy {
  if (preset === "uniques") {
    return { enabled: UNIQUE_ENABLED_GROUPS.has(groupKey), hidden: false };
  }

  if (preset === "jewels" && groupKey === "type filters") {
    return { enabled: true, expanded: false, hidden: false };
  }

  if (preset === "gear" && gearSlotKey && ACCESSORY_GEAR_SLOTS.has(gearSlotKey)) {
    // Amulets, Rings, and Belts use the compact item filter layout: their
    // useful base fields live in Type Filters, not Equipment/Requirements.
    return {
      enabled: ACCESSORY_GEAR_ENABLED_GROUPS.has(groupKey),
      hidden: false
    };
  }

  return {
    enabled: PRESET_ENABLED_GROUPS[preset].has(groupKey),
    hidden: false
  };
}

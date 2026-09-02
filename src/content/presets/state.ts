export type PresetMode = "charms" | "flasks" | "gems" | "gear" | "jewels" | "tablets" | "waystones";

// Keep item-specific presets off the native-row path: that path scans and
// mutates thousands of Vue catalogue entries on every observer pass and makes
// selecting a newly added preset look like a frozen browser tab.
export function usesCompactPresetCatalog(preset: PresetMode | null): boolean {
  return preset === "charms" || preset === "flasks" || preset === "gems" || preset === "gear" || preset === "jewels";
}

export interface PresetState {
  activePreset: PresetMode | null;
  selectedCharmBaseKey: string | null;
  selectedFlaskBaseKey: string | null;
  selectedGemKey: string | null;
  selectedGearBaseKey: string | null;
  selectedGearItemKey: string | null;
  selectedGearSlotKey: string | null;
  selectedJewelBaseKey: string | null;
  selectedTabletBaseKey: string | null;
  selectedWaystoneTier: number | null;
}

export function createPresetState(): PresetState {
  return {
    activePreset: null,
    selectedCharmBaseKey: null,
    selectedFlaskBaseKey: null,
    selectedGemKey: null,
    selectedGearBaseKey: null,
    selectedGearItemKey: null,
    selectedGearSlotKey: null,
    selectedJewelBaseKey: null,
    selectedTabletBaseKey: null,
    selectedWaystoneTier: null
  };
}

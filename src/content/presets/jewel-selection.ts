import type { JewelDataPort } from "../ports";
import type { StatFiltersFeature } from "../stat-filters/contracts";
import type { NativeTradeFormPort } from "./native-form";
import type { PresetState } from "./state";

export function createJewelSelection({
  activate,
  closeMenus,
  finalizeSearch,
  jewelData,
  nativeForm,
  prepare,
  presetState,
  stats
}: {
  activate(): Promise<void>;
  closeMenus(): void;
  finalizeSearch(): Promise<boolean>;
  jewelData: JewelDataPort;
  nativeForm: NativeTradeFormPort;
  prepare(): Promise<boolean>;
  presetState: PresetState;
  stats: StatFiltersFeature;
}): (baseKey: string) => Promise<boolean> {
  let selectionInProgress = false;

  return async (baseKey: string): Promise<boolean> => {
    const definition = jewelData.getJewelBase(baseKey);
    if (!definition || selectionInProgress) return false;
    selectionInProgress = true;
    try {
      presetState.selectedJewelBaseKey = definition.key;
      stats.setJewelBase(definition.key);
      closeMenus();
      if (!(await prepare())) return false;
      await activate();

      // Complete both native Vue autocomplete updates before enabling compact
      // decoration. Reacting to their intermediate mutations can repeatedly
      // rebuild the long stat catalogue and make the trade tab appear frozen.
      if (!(await nativeForm.setFilterValue("Item Category", "Any Jewel"))) {
        return false;
      }
      // Jewel labels must be exact: Emerald/Ruby/Sapphire are also prefixes of
      // Ring bases that can linger in Vue's autocomplete during category swap.
      if (!(await nativeForm.setSearchItem(definition.searchText, { match: "exact" }))) {
        return false;
      }
      return finalizeSearch();
    } finally {
      selectionInProgress = false;
    }
  };
}

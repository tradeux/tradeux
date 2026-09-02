import type { GearDataPort } from "../ports";
import type { StatFiltersFeature } from "../stat-filters/contracts";
import type { NativeTradeFormPort } from "./native-form";
import type { PresetState } from "./state";

export function createGearSelection({
  activate,
  closeMenus,
  finalizeSearch,
  gearData,
  nativeForm,
  prepare,
  presetState,
  stats
}: {
  activate(): Promise<void>;
  closeMenus(): void;
  finalizeSearch(): Promise<boolean>;
  gearData: GearDataPort;
  nativeForm: NativeTradeFormPort;
  prepare(): Promise<boolean>;
  presetState: PresetState;
  stats: StatFiltersFeature;
}) {
  let selectionInProgress = false;

  return async function selectGear(
    slotKey: string,
    baseKey: string | null,
    itemKey: string | null
  ): Promise<boolean> {
    const slot = gearData.getGearSlot(slotKey);
    const base = baseKey ? gearData.getGearBase(baseKey) : null;
    const item = itemKey ? gearData.getGearItem(itemKey) : null;
    if (!slot || selectionInProgress) return false;
    if (baseKey && (!base || !slot.baseKeys.includes(base.key))) return false;
    if (
      itemKey &&
      (!item || item.tradeAvailable === false || (baseKey && item.baseKey !== baseKey))
    ) return false;

    selectionInProgress = true;
    try {
      closeMenus();
      if (!(await prepare())) return false;
      presetState.selectedGearSlotKey = slot.key;
      presetState.selectedGearBaseKey = base?.key || null;
      presetState.selectedGearItemKey = item?.key || null;
      stats.setGearSelection(slot.key, base?.key || null, item?.key || null);
      await activate();
      if (
        !(await nativeForm.setFilterValue(
          "Item Category",
          base?.category || slot.category
        ))
      ) {
        return false;
      }
      if (item) {
        if (!(await nativeForm.setSearchItem(item.displayName))) return false;
      } else if (!(await nativeForm.clearSearchItem())) {
        return false;
      }

      return finalizeSearch();
    } finally {
      selectionInProgress = false;
    }
  };
}

import type { GemDataPort } from "../ports";
import type { NativeTradeFormPort } from "./native-form";
import type { PresetState } from "./state";

export function createGemSelection({
  activate,
  closeMenus,
  finalizeSearch,
  gemData,
  nativeForm,
  prepare,
  presetState
}: {
  activate(): Promise<void>;
  closeMenus(): void;
  finalizeSearch(): Promise<boolean>;
  gemData: GemDataPort;
  nativeForm: NativeTradeFormPort;
  prepare(): Promise<boolean>;
  presetState: PresetState;
}): (key: string) => Promise<boolean> {
  let selectionInProgress = false;

  return async (key): Promise<boolean> => {
    const definition = gemData.getGem(key);
    if (!definition || selectionInProgress) return false;
    selectionInProgress = true;
    try {
      closeMenus();
      if (!(await prepare())) return false;
      presetState.selectedGemKey = definition.key;
      await activate();
      if (!(await nativeForm.setFilterValue("Item Category", "Any Gem"))) {
        return false;
      }
      if (!(await nativeForm.setSearchItem(definition.searchText, { match: "exact" }))) {
        return false;
      }
      return finalizeSearch();
    } finally {
      selectionInProgress = false;
    }
  };
}

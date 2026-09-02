import {
  getFilterBodyByLabel,
  getRenderedSelectValue,
  getSearchInput
} from "../trade-dom";

export interface NativeTradeFormPort {
  clearSearchItem(): Promise<boolean>;
  resetSearch(): Promise<boolean>;
  setFilterBounds(
    label: string,
    bounds: { min?: number | null; max?: number | null }
  ): boolean;
  setFilterValue(label: string, value: string): Promise<boolean>;
  setSearchItem(
    label: string,
    options?: { match?: "exact" | "prefix" }
  ): Promise<boolean>;
  submitSearch(): boolean;
}

export interface NativeTradeFormDependencies {
  normalize(value: string): string;
  waitForElement<T extends Element>(
    findElement: () => T | null,
    attempts?: number
  ): Promise<T | null>;
  document?: Document;
}

export function createNativeTradeForm({
  document: doc = document,
  normalize,
  waitForElement
}: NativeTradeFormDependencies): NativeTradeFormPort {
  function isSearchItemReset(): boolean {
    const input = getSearchInput(doc);
    const selectedItem = input
      ?.closest(".multiselect")
      ?.querySelector(".multiselect__single");
    return Boolean(input && !input.value.trim() && !selectedItem);
  }

  async function resetSearch(): Promise<boolean> {
    const clearButton = doc.querySelector<HTMLButtonElement>(
      "#trade .controls .clear-btn"
    );
    if (!clearButton) return false;

    clearButton.click();
    // The native Clear action owns all filter cleanup. Only gate the next item
    // selection on its autocomplete model: persistent host defaults (for
    // example trade-status selections) are not evidence that Clear failed.
    await waitForNativeUpdatesToSettle();
    await waitForNativeUpdatesToSettle();
    const cleared = await waitForElement(
      () => (isSearchItemReset() ? clearButton : null),
      60
    );
    if (!cleared) return false;
    await waitForNativeUpdatesToSettle();
    await waitForNativeUpdatesToSettle();
    return isSearchItemReset();
  }

  function findSelectOption(
    container: Element,
    label: string
  ): HTMLElement | null {
    const target = normalize(label);
    return (
      [...container.querySelectorAll<HTMLElement>(
        ".multiselect__option:not(.multiselect__option--disabled)"
      )].find((option) => normalize(option.textContent ?? "") === target) ??
      null
    );
  }

  function waitForNativeUpdatesToSettle(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 0));
  }

  async function setFilterValue(
    label: string,
    value: string
  ): Promise<boolean> {
    const filterBody = getFilterBodyByLabel(label, normalize, doc);
    const input = filterBody?.querySelector<HTMLInputElement>(
      ".multiselect__input"
    );
    if (!filterBody || !input) return false;

    const currentValue =
      getRenderedSelectValue(filterBody) ||
      filterBody.querySelector(".multiselect__single")?.textContent?.trim() ||
      input.value.trim() ||
      "Any";
    if (normalize(currentValue) === normalize(value)) return true;

    input.focus();
    input.click();
    input.value = value === "Any" ? "" : value;
    input.dispatchEvent(new Event("input", { bubbles: true }));

    const option =
      findSelectOption(filterBody, value) ||
      (await waitForElement(() => findSelectOption(filterBody, value), 20));
    if (!option) return false;

    option.click();
    // PoE's Vue multiselect focuses its search input through nested nextTick
    // callbacks. Let that queue drain before another native multiselect opens,
    // otherwise two controls can continuously steal focus from each other.
    await waitForNativeUpdatesToSettle();
    return true;
  }

  function setFilterBounds(
    label: string,
    { min = null, max = null }: { min?: number | null; max?: number | null }
  ): boolean {
    const filterBody = getFilterBodyByLabel(label, normalize, doc);
    if (!filterBody) return false;

    const values: ReadonlyArray<["min" | "max", number | null]> = [
      ["min", min],
      ["max", max]
    ];
    let foundEveryRequestedInput = true;
    for (const [bound, value] of values) {
      if (value === null) continue;
      const input = filterBody.querySelector<HTMLInputElement>(
        `input[placeholder="${bound}"]`
      );
      if (!input) {
        foundEveryRequestedInput = false;
        continue;
      }
      const nextValue = String(value);
      if (input.value === nextValue) continue;
      input.value = nextValue;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }
    return foundEveryRequestedInput;
  }

  async function setSearchItem(
    label: string,
    { match = "prefix" }: { match?: "exact" | "prefix" } = {}
  ): Promise<boolean> {
    const input = getSearchInput(doc);
    const searchControl = input?.closest(".multiselect");
    if (!input || !searchControl) return false;

    input.focus();
    input.click();
    input.value = label;
    input.dispatchEvent(new Event("input", { bubbles: true }));

    const findOption = (): HTMLElement | null => {
      const target = normalize(label);
      const options = [...searchControl.querySelectorAll<HTMLElement>(
        ".multiselect__option:not(.multiselect__option--disabled)"
      )];
      // Category changes are asynchronous, so stale Ring results can remain
      // visible briefly after selecting Any Jewel. Strict matching must return
      // no candidate in that state and wait for the exact Jewel row; otherwise
      // the prefix fallback would immediately click "Emerald Ring".
      return options.find((option) => normalize(option.textContent ?? "") === target) ??
        (match === "prefix"
          ? options.find((option) =>
              normalize(option.textContent ?? "").startsWith(`${target} `)
            )
          : null) ?? null;
    };
    const option = findOption() || (await waitForElement(findOption, 60));

    if (option) {
      option.click();
      await waitForNativeUpdatesToSettle();
      return true;
    }

    // Keep the requested text if the host autocomplete is temporarily absent.
    input.dispatchEvent(new Event("change", { bubbles: true }));
    return false;
  }

  async function clearSearchItem(): Promise<boolean> {
    const input = getSearchInput(doc);
    const searchControl = input?.closest(".multiselect");
    if (!input || !searchControl) return false;

    const clearControl = searchControl.querySelector<HTMLElement>(
      ".multiselect__clear, .multiselect__tag-icon, " +
        "[aria-label='Clear selection'], [title='Clear selection']"
    );
    clearControl?.click();
    input.value = "";
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
    await waitForNativeUpdatesToSettle();
    return input.value === "";
  }

  function submitSearch(): boolean {
    const searchButton = doc.querySelector<HTMLButtonElement>(
      "#trade .controls .search-btn"
    );
    if (!searchButton || searchButton.disabled) return false;
    searchButton.click();
    return true;
  }

  return {
    clearSearchItem,
    resetSearch,
    setFilterBounds,
    setFilterValue,
    setSearchItem,
    submitSearch
  };
}

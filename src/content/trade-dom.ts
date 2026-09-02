export const TRADE_SELECTORS = Object.freeze({
  filterBody: "#trade .filter-body",
  searchInput: '#trade input[placeholder="Search Items..."]',
  searchResults: "#trade .results"
});

export function getSearchInput(
  root: ParentNode = document
): HTMLInputElement | null {
  return root.querySelector<HTMLInputElement>(TRADE_SELECTORS.searchInput);
}

export function getCurrentSearchText(root: ParentNode = document): string {
  const searchInput = getSearchInput(root);
  const selectedText = searchInput
    ?.closest(".multiselect")
    ?.querySelector(".multiselect__single")
    ?.textContent?.replace(/\s+/g, " ")
    .trim();

  return searchInput?.value.trim() || selectedText || "Advanced search";
}

export function getRenderedSelectValue(
  filterBody: Element | null | undefined
): string {
  if (!filterBody) {
    return "";
  }

  const input = filterBody.querySelector<HTMLInputElement>(
    ".multiselect__input"
  );
  const value = (
    filterBody.querySelector(".multiselect__single")?.textContent ||
    input?.value ||
    ""
  ).trim();
  const placeholder = (input?.placeholder || "").trim();

  return value && value !== placeholder ? value : "";
}

export function getFilterBodyByLabel(
  label: string,
  normalize: (value: string) => string,
  root: ParentNode = document
): Element | null {
  const targetLabel = normalize(label);

  return (
    [...root.querySelectorAll("#trade .filter-body")].find(
      (filterBody) =>
        normalize(
          filterBody.querySelector(":scope > .filter-title")?.textContent ?? ""
        ) === targetLabel
    ) ?? null
  );
}

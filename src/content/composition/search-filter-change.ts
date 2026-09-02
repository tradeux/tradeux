import { getSearchInput } from "../trade-dom";

const SEARCH_SELECTION_ACTION =
  ".multiselect__option:not(.multiselect__option--disabled), " +
  ".multiselect__clear, .multiselect__tag-icon, " +
  "[aria-label='Clear selection'], [title='Clear selection']";

export function isUserSearchFilterChange(
  event: Event,
  doc: Document = document
): boolean {
  if (!(event.target instanceof Element)) return false;

  const target = event.target;
  const searchInput = getSearchInput(doc);
  const isUserInput =
    event.isTrusted || event.constructor.name === "InputEvent";

  if (
    (event.type === "input" || event.type === "change") &&
    target === searchInput &&
    isUserInput
  ) {
    return true;
  }

  if (event.type !== "click") return false;

  // Preset setup clicks the host Clear button only after it has already
  // deactivated itself, so accepting this action also supports test/browser
  // automation surfaces whose click events are not marked as trusted.
  if (target.closest("#trade .controls .clear-btn")) return true;

  if (!event.isTrusted) return false;

  const searchControl = searchInput?.closest(".multiselect");
  return Boolean(
    searchControl?.contains(target) && target.closest(SEARCH_SELECTION_ACTION)
  );
}

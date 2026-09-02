import { getSearchInput } from "../trade-dom";

const BUTTON_CLASS = "poe-trade-styler-search-clear";

export interface SearchClearFeature {
  decorate(): void;
  destroy(): void;
}

export function createSearchClearFeature({
  document: doc = document,
  onClear = () => undefined
}: {
  document?: Document;
  onClear?: () => void;
} = {}): SearchClearFeature {
  let selectionClearTimer: number | null = null;

  function sync(input: HTMLInputElement): void {
    const searchControl = input.closest<HTMLElement>(".multiselect");
    if (!searchControl) return;

    let button = searchControl.querySelector<HTMLButtonElement>(
      `:scope > .${BUTTON_CLASS}`
    );

    if (!button) {
      button = doc.createElement("button");
      button.className = BUTTON_CLASS;
      button.type = "button";
      button.textContent = "×";
      button.title = "Clear search";
      button.setAttribute("aria-label", "Clear item search");
      button.addEventListener("pointerdown", blockHostPointerEvent);
      button.addEventListener("mousedown", blockHostPointerEvent);
      button.addEventListener("click", onDocumentClick);
      searchControl.append(button);
    }

    const hasSelection = Boolean(
      searchControl.querySelector(".multiselect__single, .multiselect__tag")
    );
    button.hidden = input.value.length === 0 && !hasSelection;
  }

  function decorate(): void {
    const input = getSearchInput(doc);
    if (input) sync(input);
  }

  function scheduleSelectionBackspace(attemptsRemaining = 2): void {
    if (selectionClearTimer !== null) clearTimeout(selectionClearTimer);

    selectionClearTimer = setTimeout(() => {
      selectionClearTimer = null;
      const input = getSearchInput(doc);
      const searchControl = input?.closest<HTMLElement>(".multiselect");
      const hasSelection = searchControl?.querySelector(
        ".multiselect__single, .multiselect__tag"
      );
      if (!input || !searchControl || !hasSelection) {
        if (input) sync(input);
        return;
      }

      input.focus();
      input.dispatchEvent(
        new KeyboardEvent("keydown", {
          bubbles: true,
          cancelable: true,
          code: "Backspace",
          key: "Backspace"
        })
      );
      sync(input);

      if (attemptsRemaining > 1) {
        scheduleSelectionBackspace(attemptsRemaining - 1);
      }
    }, 0);
  }

  function clearFromButton(button: HTMLButtonElement): void {
    const searchControl = button.closest<HTMLElement>(".multiselect");
    const input = searchControl ? getSearchInput(searchControl) : null;
    if (!searchControl || !input) return;

    const hasSelection = Boolean(
      searchControl.querySelector(".multiselect__single, .multiselect__tag")
    );
    const nativeClear = searchControl.querySelector<HTMLElement>(
      ".multiselect__clear, .multiselect__tag-icon, " +
        "[aria-label='Clear selection'], [title='Clear selection']"
    );
    onClear();
    nativeClear?.click();

    const currentInput = getSearchInput(doc) ?? input;
    currentInput.value = "";
    currentInput.dispatchEvent(new Event("input", { bubbles: true }));
    currentInput.dispatchEvent(new Event("change", { bubbles: true }));
    currentInput.focus();

    if (hasSelection && !nativeClear) {
      scheduleSelectionBackspace();
    }

    sync(currentInput);
  }

  function getEventButton(event: Event): HTMLButtonElement | null {
    return event.target instanceof Element
      ? event.target.closest<HTMLButtonElement>(`.${BUTTON_CLASS}`)
      : null;
  }

  function blockHostPointerEvent(event: Event): void {
    if (!getEventButton(event)) return;
    event.preventDefault();
    event.stopPropagation();
  }

  function onDocumentClick(event: Event): void {
    const button = getEventButton(event);
    if (!button) return;

    event.preventDefault();
    event.stopPropagation();
    clearFromButton(button);
  }

  function onDocumentInput(event: Event): void {
    const input = getSearchInput(doc);
    if (input && event.target === input) sync(input);
  }

  doc.addEventListener("input", onDocumentInput);
  doc.addEventListener("pointerdown", blockHostPointerEvent, true);
  doc.addEventListener("mousedown", blockHostPointerEvent, true);
  doc.addEventListener("click", onDocumentClick, true);

  return {
    decorate,
    destroy(): void {
      if (selectionClearTimer !== null) clearTimeout(selectionClearTimer);
      selectionClearTimer = null;
      doc.removeEventListener("input", onDocumentInput);
      doc.removeEventListener("pointerdown", blockHostPointerEvent, true);
      doc.removeEventListener("mousedown", blockHostPointerEvent, true);
      doc.removeEventListener("click", onDocumentClick, true);
      doc.querySelectorAll<HTMLButtonElement>(`.${BUTTON_CLASS}`).forEach(
        (button) => button.remove()
      );
    }
  };
}

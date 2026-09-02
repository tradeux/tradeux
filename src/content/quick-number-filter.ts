import type { GemDataPort, QuickBoundFilterDefinition } from "./ports";
import type { QuickNumberFilterDefinition } from "./quick-filter-definitions";
import { getCurrentSearchText } from "./trade-dom";
import { setPopoverOpen } from "./popover-transition";

export function applyNativeQuickNumberValue(
  filterBody: Element | null,
  definition: QuickNumberFilterDefinition | QuickBoundFilterDefinition,
  value: string,
  bound: "max" | "min",
  restoreFocusTo: HTMLElement | null
): boolean {
  const bounds: readonly ("max" | "min")[] =
    "exact" in definition && definition.exact ? ["min", "max"] : [bound];
  const inputs: HTMLInputElement[] = [];

  for (const targetBound of bounds) {
    const input = filterBody?.querySelector<HTMLInputElement>(
      `input[placeholder="${targetBound}"]`
    );
    if (!input) return false;
    inputs.push(input);
  }

  if (!restoreFocusTo) inputs[0].focus();
  for (const input of inputs) {
    input.value = value;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }
  if (!restoreFocusTo) inputs.at(-1)?.blur();
  return true;
}

export function configureQuickNumberGrid(
  popover: HTMLElement,
  definition: QuickNumberFilterDefinition
): void {
  const columnCount =
    definition.columns ??
    Math.min(5, Math.max(1, Math.ceil(definition.values.length / 10)));
  popover.style.setProperty(
    "--poe-trade-styler-quick-number-columns",
    String(columnCount)
  );
  popover.style.setProperty(
    "--poe-trade-styler-quick-number-rows",
    String(Math.ceil(definition.values.length / columnCount))
  );
}

export function hasSelectedGem(
  gemData: GemDataPort,
  normalizeText: (value: unknown) => string
): boolean {
  const searchText = normalizeText(getCurrentSearchText());

  return gemData.GEM_DEFINITIONS.some(
    (gem) =>
      normalizeText(gem.name) === searchText ||
      normalizeText(gem.searchText) === searchText
  );
}

export function readQuickNumberValue(
  filterBody: Element | null,
  definition: QuickNumberFilterDefinition
): string {
  const minimum = filterBody
    ?.querySelector<HTMLInputElement>('input[placeholder="min"]')
    ?.value.trim() || "";
  if (!definition.exact) return minimum;
  const maximum = filterBody
    ?.querySelector<HTMLInputElement>('input[placeholder="max"]')
    ?.value.trim() || "";
  return minimum && minimum === maximum ? minimum : "";
}

export function setQuickNumberControlVisibility(
  control: HTMLElement,
  definition: QuickNumberFilterDefinition,
  gemSelected: boolean
): void {
  const hidden = Boolean(definition.gemOnly && !gemSelected);
  control.hidden = hidden;

  if (!hidden || !control.classList.contains("is-open")) return;
  control.classList.remove("is-open");
  const popover = control.querySelector<HTMLElement>(
    ".poe-trade-styler-quick-number-popover"
  );
  const trigger = control.querySelector<HTMLElement>(
    ".poe-trade-styler-quick-number-trigger"
  );
  if (popover) setPopoverOpen(popover, false);
  trigger?.setAttribute("aria-expanded", "false");
}

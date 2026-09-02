export function createQuickValueBadge(doc: Document): HTMLSpanElement {
  const badge = doc.createElement("span");
  badge.className = "poe-trade-styler-quick-filter-value";
  badge.hidden = true;
  return badge;
}

export function syncQuickValueBadge(
  badge: HTMLElement,
  value: string
): void {
  if (badge.textContent !== value) badge.textContent = value;
  badge.dataset.valueWidth = value.length >= 4
    ? "extra-wide"
    : value.length >= 3
      ? "wide"
      : "normal";
  badge.hidden = !value;
}

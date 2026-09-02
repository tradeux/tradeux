interface LayoutStyler {
  getAvailableDropdownHeight(
    inputBottom: number,
    controlsTop: number,
    quickFiltersTop?: number
  ): number;
}

interface VerticalRect {
  bottom: number;
  height: number;
  top: number;
}

export function isDropdownRenderedAbove(
  inputRect: VerticalRect,
  dropdownRect: VerticalRect
): boolean {
  return dropdownRect.height > 0 && dropdownRect.bottom <= inputRect.top + 1;
}

export function getUpwardDropdownHeightLimit(
  inputTop: number,
  parentTop: number,
  gap = 8
): number {
  if (!Number.isFinite(inputTop) || !Number.isFinite(parentTop)) return 0;

  return Math.max(0, Math.floor(inputTop - Math.max(0, parentTop) - gap));
}

export function capDropdownHeightToContainer(
  height: number,
  containerHeight: number,
  reservedHeight = 200
): number {
  if (!Number.isFinite(height)) return 0;
  if (!Number.isFinite(containerHeight)) return Math.max(0, Math.floor(height));

  return Math.max(
    0,
    Math.floor(Math.min(height, containerHeight - reservedHeight))
  );
}

export interface LayoutFeature {
  destroy(): void;
  sync(): void;
}

export function createLayoutFeature({
  isStickySearchEnabled,
  isTwoColumnEnabled,
  styler,
  document: doc = document,
  window: browserWindow = window
}: {
  isStickySearchEnabled(): boolean;
  isTwoColumnEnabled(): boolean;
  styler: LayoutStyler;
  document?: Document;
  window?: Window;
}): LayoutFeature {
  let syncedFilterPane: HTMLElement | null = null;

  function sync(): void {
    const root = doc.documentElement;
    const filterPane = doc.querySelector<HTMLElement>("#trade > .top");
    const controls = filterPane?.querySelector<HTMLElement>(".controls");
    const quickFilters = filterPane?.querySelector<HTMLElement>(
      ".poe-trade-styler-quick-filters"
    );

    if (filterPane && filterPane !== syncedFilterPane) {
      syncedFilterPane?.removeEventListener("scroll", sync);
      filterPane.addEventListener("scroll", sync, { passive: true });
      syncedFilterPane = filterPane;
    }

    if (
      !isTwoColumnEnabled() ||
      !isStickySearchEnabled() ||
      !browserWindow.matchMedia("(min-width: 1200px)").matches ||
      !filterPane ||
      !controls
    ) {
      clearProperties(root);
      return;
    }

    const filterRect = filterPane.getBoundingClientRect();
    const controlsRect = controls.getBoundingClientRect();
    const quickFiltersRect = quickFilters?.getBoundingClientRect();
    const statFilterInput = filterPane.querySelector<HTMLInputElement>(
      'input[placeholder="+ Add Stat Filter"]'
    );
    root.style.setProperty(
      "--poe-trade-styler-controls-left",
      `${filterRect.left}px`
    );
    root.style.setProperty(
      "--poe-trade-styler-controls-width",
      `${filterRect.width}px`
    );
    root.style.setProperty(
      "--poe-trade-styler-controls-height",
      `${controlsRect.height}px`
    );
    root.style.setProperty(
      "--poe-trade-styler-quick-filters-height",
      `${quickFiltersRect?.height || 0}px`
    );

    if (statFilterInput) {
      const statFilterRect = statFilterInput.getBoundingClientRect();
      const statFilterDropdown = statFilterInput
        .closest(".filter-select-mutate")
        ?.querySelector<HTMLElement>(".multiselect__content-wrapper");
      const opensAbove =
        statFilterDropdown &&
        isDropdownRenderedAbove(
          statFilterRect,
          statFilterDropdown.getBoundingClientRect()
        );
      const availableHeight = opensAbove
        ? getUpwardDropdownHeightLimit(
            statFilterRect.top,
            filterRect.top
          )
        : styler.getAvailableDropdownHeight(
            statFilterRect.bottom,
            controlsRect.top,
            quickFiltersRect?.top
          );
      const heightLimit = capDropdownHeightToContainer(
        availableHeight,
        filterRect.height
      );
      root.style.setProperty(
        "--poe-trade-styler-stat-filter-height",
        `${heightLimit}px`
      );
    }
  }

  function clearProperties(root: HTMLElement): void {
    root.style.removeProperty("--poe-trade-styler-controls-left");
    root.style.removeProperty("--poe-trade-styler-controls-width");
    root.style.removeProperty("--poe-trade-styler-controls-height");
    root.style.removeProperty("--poe-trade-styler-quick-filters-height");
    root.style.removeProperty("--poe-trade-styler-stat-filter-height");
  }

  function destroy(): void {
    syncedFilterPane?.removeEventListener("scroll", sync);
    syncedFilterPane = null;
    clearProperties(doc.documentElement);
  }

  return { destroy, sync };
}

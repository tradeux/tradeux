const VIEWPORT_MARGIN = 12;
const POPOVER_GAP = 7;

type PopoverPlacement = "above" | "below" | "left" | "right" | "viewport";

export function positionViewportPopover(
  anchor: Element,
  popover: HTMLElement
): PopoverPlacement {
  const view = popover.ownerDocument.defaultView;
  if (!view) return "viewport";

  const anchorRect = anchor.getBoundingClientRect();
  const popoverWidth = popover.offsetWidth;
  const popoverHeight = popover.offsetHeight;
  const viewportWidth =
    view.innerWidth || popover.ownerDocument.documentElement.clientWidth;
  const viewportHeight =
    view.innerHeight || popover.ownerDocument.documentElement.clientHeight;
  const availableWidth = Math.max(0, viewportWidth - VIEWPORT_MARGIN * 2);
  const availableHeight = Math.max(0, viewportHeight - VIEWPORT_MARGIN * 2);
  const maxLeft = Math.max(
    VIEWPORT_MARGIN,
    viewportWidth - popoverWidth - VIEWPORT_MARGIN
  );
  const maxTop = Math.max(
    VIEWPORT_MARGIN,
    viewportHeight - popoverHeight - VIEWPORT_MARGIN
  );
  const centeredLeft =
    anchorRect.left + anchorRect.width / 2 - popoverWidth / 2;
  const centeredTop =
    anchorRect.top + anchorRect.height / 2 - popoverHeight / 2;
  const clampLeft = (value: number) =>
    Math.min(Math.max(VIEWPORT_MARGIN, value), maxLeft);
  const clampTop = (value: number) =>
    Math.min(Math.max(VIEWPORT_MARGIN, value), maxTop);
  const below = anchorRect.bottom + POPOVER_GAP;
  const above = anchorRect.top - popoverHeight - POPOVER_GAP;
  const right = anchorRect.right + POPOVER_GAP;
  const left = anchorRect.left - popoverWidth - POPOVER_GAP;
  const fitsVertically = popoverHeight <= availableHeight;
  const fitsHorizontally = popoverWidth <= availableWidth;
  const candidates = [
    {
      placement: "below",
      fits:
        fitsHorizontally &&
        below + popoverHeight <= viewportHeight - VIEWPORT_MARGIN,
      left: clampLeft(centeredLeft),
      top: below
    },
    {
      placement: "above",
      fits: fitsHorizontally && above >= VIEWPORT_MARGIN,
      left: clampLeft(centeredLeft),
      top: above
    },
    {
      placement: "right",
      fits:
        fitsVertically &&
        right + popoverWidth <= viewportWidth - VIEWPORT_MARGIN,
      left: right,
      top: clampTop(centeredTop)
    },
    {
      placement: "left",
      fits: fitsVertically && left >= VIEWPORT_MARGIN,
      left,
      top: clampTop(centeredTop)
    }
  ] as const;
  const candidate = candidates.find(({ fits }) => fits);
  const placement = candidate?.placement ?? "viewport";
  const positionedLeft = candidate?.left ?? clampLeft(centeredLeft);
  const positionedTop = candidate?.top ?? clampTop(below);

  popover.style.position = "fixed";
  popover.style.left = `${Math.round(positionedLeft)}px`;
  popover.style.top = `${Math.round(positionedTop)}px`;
  popover.style.right = "auto";
  popover.style.bottom = "auto";
  popover.style.transform = "none";
  popover.style.setProperty(
    "--poe-trade-styler-hover-gap",
    `${POPOVER_GAP}px`
  );
  for (const side of ["below", "above", "right", "left"] as const) {
    popover.classList.toggle(`is-positioned-${side}`, placement === side);
  }

  return placement;
}

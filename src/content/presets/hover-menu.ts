import { bindHoverPopover } from "../hover-popover";

export function positionHoverMenu(
  anchor: Element,
  menu: HTMLElement
): void {
  const view = menu.ownerDocument.defaultView;
  if (!view) return;

  const margin = 12;
  const gap = 7;
  const anchorRect = anchor.getBoundingClientRect();
  const menuWidth = menu.offsetWidth;
  const menuHeight = menu.offsetHeight;
  const viewportWidth = view.innerWidth || menu.ownerDocument.documentElement.clientWidth;
  const viewportHeight = view.innerHeight || menu.ownerDocument.documentElement.clientHeight;
  const maxLeft = Math.max(margin, viewportWidth - menuWidth - margin);
  const centeredLeft = anchorRect.left + anchorRect.width / 2 - menuWidth / 2;
  const left = Math.min(Math.max(margin, centeredLeft), maxLeft);
  const below = anchorRect.bottom + gap;
  const above = anchorRect.top - menuHeight - gap;
  const maxTop = Math.max(margin, viewportHeight - menuHeight - margin);
  const fitsBelow = below + menuHeight <= viewportHeight - margin;
  const fitsAbove = above >= margin;
  const placement = fitsBelow ? "below" : fitsAbove ? "above" : "viewport";
  const top = fitsBelow
    ? below
    : fitsAbove
      ? above
      : Math.min(Math.max(margin, below), maxTop);

  menu.style.position = "fixed";
  menu.style.left = `${Math.round(left)}px`;
  menu.style.top = `${Math.round(top)}px`;
  menu.style.right = "auto";
  menu.style.bottom = "auto";
  menu.style.setProperty("--poe-trade-styler-hover-gap", `${gap}px`);
  menu.classList.toggle("is-positioned-below", placement === "below");
  menu.classList.toggle("is-positioned-above", placement === "above");
}

export function bindHoverMenu({
  button,
  close,
  navigationItem,
  open
}: {
  button: Element;
  close(): void;
  navigationItem: Element;
  open(): void;
}): void {
  bindHoverPopover({ button, close, container: navigationItem, open });
}

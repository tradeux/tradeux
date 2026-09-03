import { bindHoverPopover } from "../hover-popover";
import { positionViewportPopover } from "../popover-position";

export function positionHoverMenu(
  anchor: Element,
  menu: HTMLElement
): void {
  positionViewportPopover(anchor, menu);
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

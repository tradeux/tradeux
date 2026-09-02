interface PopoverTransitionOptions {
  fadeIn?: number;
  fadeOut?: number;
}

const hideTimers = new WeakMap<HTMLElement, ReturnType<typeof setTimeout>>();

const POPOVER_CORNERS = ["tl", "tr", "bl", "br"] as const;

function getExtensionAssetUrl(path: string): string {
  try {
    return chrome.runtime.getURL(path);
  } catch {
    return path;
  }
}

export function decoratePopover(popover: HTMLElement): void {
  if (popover.classList.contains("poe-trade-styler-decorated-popover")) return;

  popover.classList.add("poe-trade-styler-decorated-popover");
  const corners = POPOVER_CORNERS.map((corner) => {
    const image = popover.ownerDocument.createElement("img");
    image.className =
      `poe-trade-styler-popover-ornament is-corner-${corner}`;
    image.alt = "";
    image.src = getExtensionAssetUrl(
      "assets/ui/frame/v2/corner-filigree-v2.png"
    );
    image.referrerPolicy = "no-referrer";
    image.setAttribute("aria-hidden", "true");
    return image;
  });
  popover.prepend(...corners);
}

export function setPopoverOpen(
  popover: HTMLElement,
  open: boolean,
  { fadeIn = 300, fadeOut = 300 }: PopoverTransitionOptions = {}
): void {
  const pendingHide = hideTimers.get(popover);
  if (pendingHide !== undefined) {
    clearTimeout(pendingHide);
    hideTimers.delete(popover);
  }

  popover.classList.add("poe-trade-styler-fade-popover");
  popover.style.setProperty("--poe-trade-styler-fade-in", `${fadeIn}ms`);
  popover.style.setProperty("--poe-trade-styler-fade-out", `${fadeOut}ms`);

  if (open) {
    if (popover.hidden) {
      popover.classList.remove("is-fade-visible");
      popover.hidden = false;
      void popover.offsetWidth;
    }
    popover.classList.add("is-fade-visible");
    return;
  }

  popover.classList.remove("is-fade-visible");
  if (popover.hidden) return;

  const timer = setTimeout(() => {
    hideTimers.delete(popover);
    if (!popover.classList.contains("is-fade-visible")) {
      popover.hidden = true;
    }
  }, fadeOut);
  hideTimers.set(popover, timer);
}

import { PRESET_ACCOUNT_OVERFLOW_CLASS } from "../preset-navigation-overflow";

interface OriginalLocation {
  nextSibling: ChildNode | null;
  parent: Node;
}

export interface SiteToolbarFeature {
  decorate(): void;
  destroy(): void;
  sync(): void;
}

export function createSiteToolbarFeature({
  document: doc = document,
  isEnabled = () => true,
  window: browserWindow = window
}: {
  document?: Document;
  isEnabled?(): boolean;
  window?: Window;
} = {}): SiteToolbarFeature {
  const originalLocations = new Map<Element, OriginalLocation>();
  const presetOrder = new Map<HTMLElement, number>();
  let nextPresetOrder = 0;
  const toolbar = doc.createElement("div");
  const footerSlot = doc.createElement("div");

  toolbar.className = "poe-trade-styler-site-toolbar";
  toolbar.setAttribute("aria-label", "Path of Exile site controls");
  footerSlot.className = "poe-trade-styler-site-toolbar-footer";
  toolbar.append(footerSlot);

  function findNativeFooter(): Element | null {
    const explicitFooter = [...doc.querySelectorAll("footer, #footer, .footer")].find(
      (candidate) =>
        !candidate.closest(
          '[id^="poe-trade-styler"], [class*="poe-trade-styler"]'
        )
    );
    if (explicitFooter) {
      return explicitFooter;
    }

    const legalLink = doc.querySelector(
      'a[href*="/legal/terms-of-use-and-privacy-policy"]'
    );
    let candidate = legalLink?.parentElement ?? null;

    while (candidate && candidate !== doc.body) {
      const text = candidate.textContent ?? "";
      if (/Grinding Gear Games/i.test(text) && /2010\s*-\s*20\d{2}/.test(text)) {
        return candidate;
      }
      candidate = candidate.parentElement;
    }

    return null;
  }

  function rememberAndMove(node: Element, destination: Element): void {
    if (!originalLocations.has(node) && node.parentNode) {
      originalLocations.set(node, {
        nextSibling: node.nextSibling,
        parent: node.parentNode
      });
    }

    if (node.parentElement !== destination) {
      destination.append(node);
    }
  }

  function pinAtCurrentPosition(node: Element, rect: DOMRect): void {
    if (node.classList.contains("poe-trade-styler-site-toolbar-native-item")) {
      return;
    }

    const element = node as HTMLElement;
    element.classList.add("poe-trade-styler-site-toolbar-native-item");
    element.style.setProperty(
      "--poe-trade-styler-native-item-left",
      `${rect.left}px`
    );
    element.style.setProperty(
      "--poe-trade-styler-native-item-top",
      `${rect.top}px`
    );

    if (rect.width > 0) {
      element.style.setProperty(
        "--poe-trade-styler-native-item-width",
        `${rect.width}px`
      );
    }
  }

  function pinAndMove(nodes: Array<Element | null>): void {
    const nativeItems = nodes.filter((node): node is Element => node !== null);
    const originalRects = new Map(
      nativeItems.map((node) => [node, node.getBoundingClientRect()])
    );

    for (const node of nativeItems) {
      const rect = originalRects.get(node);
      if (rect) pinAtCurrentPosition(node, rect);
      rememberAndMove(node, toolbar);
    }
  }

  function outerWidth(element: HTMLElement): number {
    const rect = element.getBoundingClientRect();
    const style = browserWindow.getComputedStyle(element);
    const marginLeft = Number.parseFloat(style.marginLeft) || 0;
    const marginRight = Number.parseFloat(style.marginRight) || 0;
    return Math.max(1, rect.width + marginLeft + marginRight);
  }

  function directPresetItems(container: Element): HTMLElement[] {
    return [...container.children].filter(
      (child): child is HTMLElement =>
        child.classList.contains("poe-trade-styler-preset-navigation-item")
    );
  }

  function placePresetItemsBefore(
    container: HTMLElement,
    items: HTMLElement[],
    before: ChildNode | null
  ): void {
    const current = directPresetItems(container);
    const alreadyPlaced =
      current.length === items.length &&
      current.every((item, index) => item === items[index]) &&
      (items.length === 0 || items[items.length - 1].nextSibling === before);

    if (alreadyPlaced) return;

    const fragment = doc.createDocumentFragment();
    items.forEach((item) => fragment.append(item));
    container.insertBefore(fragment, before);
  }

  function placePresetItemsAfter(
    container: HTMLElement,
    items: HTMLElement[],
    after: ChildNode | null
  ): void {
    const current = directPresetItems(container);
    const alreadyPlaced =
      current.length === items.length &&
      current.every((item, index) => item === items[index]) &&
      (items.length === 0 || items[0].previousSibling === after);

    if (alreadyPlaced) return;

    const fragment = doc.createDocumentFragment();
    items.forEach((item) => fragment.append(item));
    const before = after?.nextSibling ?? container.firstChild;
    container.insertBefore(fragment, before);
  }

  function syncPresetNavigationOverflow(): void {
    const main = doc.querySelector<HTMLElement>(".nav.nav-tabs.main");
    const account = doc.querySelector<HTMLElement>(".nav.nav-tabs.account");
    const logo = toolbar.querySelector<HTMLElement>(":scope > .logo");

    if (!main || !account || !logo) return;

    doc
      .querySelectorAll<HTMLElement>(".poe-trade-styler-preset-navigation-item")
      .forEach((item) => {
        if (!presetOrder.has(item)) presetOrder.set(item, nextPresetOrder++);
      });

    const items = [...presetOrder]
      .filter(([item]) => item.isConnected)
      .sort((leftEntry, rightEntry) => leftEntry[1] - rightEntry[1])
      .map(([item]) => item);
    if (items.length === 0) return;

    const mainRect = main.getBoundingClientRect();
    if (mainRect.width <= 0) return;

    const nativeMainItems = [...main.children].filter(
      (child) => !child.classList.contains("poe-trade-styler-preset-navigation-item")
    );
    const nativeRight = nativeMainItems.reduce(
      (right, item) => Math.max(right, item.getBoundingClientRect().right),
      mainRect.left
    );
    const logoRect = logo.getBoundingClientRect();
    const presetStart = nativeRight + 6;
    const presetEnd = logoRect.left - 6;
    const availableWidth = Math.max(0, presetEnd - presetStart);

    let usedWidth = 0;
    let visibleCount = 0;
    for (const item of items) {
      const width = outerWidth(item);
      if (usedWidth + width > availableWidth) break;
      usedWidth += width;
      visibleCount += 1;
    }

    const mainItems = items.slice(0, visibleCount);
    const accountItems = items.slice(visibleCount);

    items.forEach((item) =>
      item.style.removeProperty("--poe-trade-styler-preset-main-leading-space")
    );
    if (mainItems[0]) {
      mainItems[0].style.setProperty(
        "--poe-trade-styler-preset-main-leading-space",
        `${Math.max(6, presetStart - nativeRight)}px`
      );
    }

    mainItems.forEach((item) =>
      item.classList.remove(PRESET_ACCOUNT_OVERFLOW_CLASS)
    );
    accountItems.forEach((item) =>
      item.classList.add(PRESET_ACCOUNT_OVERFLOW_CLASS)
    );

    const firstNativeAccountItem = [...account.children].find(
      (child) => !child.classList.contains("poe-trade-styler-preset-navigation-item")
    ) ?? null;
    placePresetItemsBefore(account, accountItems, firstNativeAccountItem);

    const lastNativeMainItem = nativeMainItems[nativeMainItems.length - 1] ?? null;
    placePresetItemsAfter(main, mainItems, lastNativeMainItem);
  }

  function sync(): void {
    if (!isEnabled()) {
      restoreNativeLayout();
      return;
    }

    const trade = doc.querySelector<HTMLElement>("#trade");

    if (!trade) {
      toolbar.style.removeProperty("--poe-trade-styler-site-toolbar-left");
      toolbar.style.removeProperty("--poe-trade-styler-site-toolbar-width");
      return;
    }

    const tradeRect = trade.getBoundingClientRect();
    const leftEdge = Math.max(0, tradeRect.left);
    const availableWidth = Math.max(0, browserWindow.innerWidth - leftEdge);
    toolbar.style.setProperty(
      "--poe-trade-styler-site-toolbar-left",
      `${leftEdge}px`
    );
    toolbar.style.setProperty(
      "--poe-trade-styler-site-toolbar-width",
      `${Math.min(tradeRect.width, availableWidth)}px`
    );
    syncPresetNavigationOverflow();
  }

  function decorate(): void {
    if (!isEnabled()) {
      restoreNativeLayout();
      return;
    }

    if (!toolbar.isConnected) {
      doc.body.append(toolbar);
    }

    const statusBar = doc.querySelector("#statusBar");
    const linkBack = doc.querySelector(".linkBack");
    const logo = doc.querySelector(".logo");
    const languageSelect = doc.querySelector(".language-select");
    const nativeFooter = findNativeFooter();

    pinAndMove([statusBar, linkBack, languageSelect]);
    if (logo) rememberAndMove(logo, toolbar);
    if (nativeFooter) rememberAndMove(nativeFooter, footerSlot);
    sync();
  }

  function restoreNativeLayout(): void {
    const main = doc.querySelector<HTMLElement>(".nav.nav-tabs.main");
    const account = doc.querySelector<HTMLElement>(".nav.nav-tabs.account");
    if (main && account) {
      const items = [...presetOrder]
        .filter(([item]) => item.isConnected)
        .sort((leftEntry, rightEntry) => leftEntry[1] - rightEntry[1])
        .map(([item]) => item);
      items.forEach((item) => {
        item.classList.remove(PRESET_ACCOUNT_OVERFLOW_CLASS);
        item.style.removeProperty("--poe-trade-styler-preset-main-leading-space");
      });
      const lastNativeMainItem = [...main.children].filter(
        (child) => !child.classList.contains("poe-trade-styler-preset-navigation-item")
      ).at(-1);
      placePresetItemsAfter(main, items, lastNativeMainItem ?? null);
    }

    for (const [node, { nextSibling, parent }] of originalLocations) {
      if (!node.isConnected || !parent.isConnected) continue;

      if (node.classList.contains("poe-trade-styler-site-toolbar-native-item")) {
        const element = node as HTMLElement;
        element.classList.remove("poe-trade-styler-site-toolbar-native-item");
        element.style.removeProperty("--poe-trade-styler-native-item-left");
        element.style.removeProperty("--poe-trade-styler-native-item-top");
        element.style.removeProperty("--poe-trade-styler-native-item-width");
      }

      if (nextSibling?.parentNode === parent) {
        parent.insertBefore(node, nextSibling);
      } else {
        parent.appendChild(node);
      }
    }

    originalLocations.clear();
    toolbar.remove();
  }

  function destroy(): void {
    browserWindow.removeEventListener("resize", sync);
    restoreNativeLayout();
  }

  browserWindow.addEventListener("resize", sync, { passive: true });

  return { decorate, destroy, sync };
}

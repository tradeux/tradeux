import type { JewelDataPort, StylerPort, UniqueDataPort } from "../ports";
import {
  createBaseMenu,
  type UniqueMenuDefinition
} from "../presets/base-menu";
import type { PresetState } from "../presets/state";
import { getSafeItemImageUrl } from "../image-assets";
import { bindHoverMenu, positionHoverMenu } from "../presets/hover-menu";
import { setPopoverOpen } from "../popover-transition";

export interface JewelHelperFeature {
  close(): boolean;
  decorate(): void;
  destroy(): void;
}

export function createJewelHelperFeature({
  createUniqueItemCard,
  document: doc,
  jewelData,
  onDeactivate = async () => undefined,
  onSelect,
  onSelectUnique = async () => false,
  presetState,
  styler,
  uniqueData
}: {
  createUniqueItemCard?: (key: string) => HTMLElement | null;
  document: Document;
  jewelData: JewelDataPort;
  onDeactivate?: () => Promise<void>;
  onSelect(baseKey: string): Promise<boolean>;
  onSelectUnique?(name: string): Promise<boolean>;
  presetState: PresetState;
  styler: StylerPort;
  uniqueData?: UniqueDataPort;
}): JewelHelperFeature {
  let launcher: HTMLButtonElement | null = null;
  let menu: HTMLDivElement | null = null;
  let hoverBoundItem: Element | null = null;
  let launcherToggleInProgress = false;

  function isPoe2Page(): boolean {
    return (
      styler.getTradeGameKey(location.pathname) === "poe2" ||
      doc.body.dataset.fixtureGame === "poe2"
    );
  }

  function setOpen(open: boolean): void {
    if (!menu || !launcher) return;
    setPopoverOpen(menu, open);
    if (open) positionHoverMenu(launcher, menu);
    if (!open) {
      const preview = launcher
        .closest(".poe-trade-styler-jewel-navigation-item")
        ?.querySelector<HTMLElement>(".poe-trade-styler-base-unique-preview");
      if (preview) {
        setPopoverOpen(preview, false, { fadeIn: 300, fadeOut: 500 });
      }
    }
    launcher.setAttribute("aria-expanded", String(open));
  }

  function close(): boolean {
    if (!menu || menu.hidden) return false;
    setOpen(false);
    return true;
  }

  function createMenu(): HTMLDivElement {
    const uniqueDefinitions: UniqueMenuDefinition[] = (
      uniqueData?.getItemsByType("Jewels") || []
    ).map((item) => ({
      base: item.base,
      displayName: item.name,
      icon: item.officialIcon,
      key: item.key,
      requiredLevel: item.level,
      searchText: `${item.name} ${item.base}`
    }));
    return createBaseMenu(
      "jewels",
      jewelData.JEWEL_BASES,
      async (baseKey) => {
        if (await onSelect(baseKey)) close();
      },
      {
        createUniqueItemCard,
        selectUnique: async (name) => {
          if (await onSelectUnique(name)) close();
        },
        uniqueDefinitions
      }
    );
  }

  function createLauncher(): HTMLButtonElement {
    const button = doc.createElement("button");
    button.type = "button";
    button.className =
      "poe-trade-styler-preset poe-trade-styler-jewel-preset-button";
    button.dataset.poeTradeStylerPreset = "jewels";
    button.setAttribute("aria-label", "Jewel preset");
    button.setAttribute("aria-haspopup", "true");
    button.setAttribute("aria-expanded", "false");
    const icon = doc.createElement("img");
    icon.className = "poe-trade-styler-jewel-preset-icon";
    icon.src = getSafeItemImageUrl(jewelData.JEWEL_GENERAL_ICON);
    icon.alt = "";
    icon.referrerPolicy = "no-referrer";
    icon.setAttribute("aria-hidden", "true");
    button.append(icon);
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (presetState.activePreset !== "jewels") return;
      event.stopImmediatePropagation();
      if (launcherToggleInProgress) return;
      launcherToggleInProgress = true;
      close();
      try {
        await onDeactivate();
      } finally {
        launcherToggleInProgress = false;
        button.classList.remove("is-active");
        button.setAttribute("aria-pressed", "false");
      }
    });
    return button;
  }

  function removeLauncher(): void {
    launcher?.closest(".poe-trade-styler-jewel-navigation-item")?.remove();
    launcher = null;
    menu = null;
    hoverBoundItem = null;
  }

  function decorate(): void {
    if (!isPoe2Page()) {
      removeLauncher();
      return;
    }
    const flaskButton = doc.querySelector(
      '[data-poe-trade-styler-preset="flasks"]'
    );
    const anchorButton = flaskButton || doc.querySelector(
      '[data-poe-trade-styler-preset="gems"]'
    );
    const anchorItem = anchorButton?.closest(
      ".poe-trade-styler-preset-navigation-item"
    );
    if (!anchorItem) return;
    launcher = doc.querySelector('[data-poe-trade-styler-preset="jewels"]') ||
      launcher || createLauncher();
    launcher.classList.toggle("is-active", presetState.activePreset === "jewels");
    launcher.setAttribute("aria-pressed", String(presetState.activePreset === "jewels"));
    let item = launcher.closest(".poe-trade-styler-jewel-navigation-item");
    if (!item) {
      item = doc.createElement(anchorItem.tagName.toLowerCase() === "li" ? "li" : "span");
      item.className =
        "poe-trade-styler-preset-navigation-item poe-trade-styler-jewel-navigation-item";
      item.append(launcher);
    }
    if (!menu) {
      menu = createMenu();
      item.append(menu);
    }
    if (flaskButton) {
      if (anchorItem.previousElementSibling !== item) {
        anchorItem.insertAdjacentElement("beforebegin", item);
      }
    } else if (anchorItem.nextElementSibling !== item) {
      anchorItem.insertAdjacentElement("afterend", item);
    }
    if (hoverBoundItem !== item) {
      hoverBoundItem = item;
      bindHoverMenu({
        button: launcher,
        navigationItem: item,
        open: () => setOpen(true),
        close
      });
    }
  }

  return {
    close,
    decorate,
    destroy() {
      removeLauncher();
    }
  };
}

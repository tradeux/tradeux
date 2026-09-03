import { DEFAULT_SETTINGS, type StylerSettings } from "./model";
import { createModalFrame } from "../modal-frame";
import { getSafeItemImageUrl } from "../image-assets";
import manifest from "../../../manifest.json";

export type { StylerSettings } from "./model";

export interface SettingsFeature {
  readonly state: StylerSettings;
  close(): void;
  destroy(): void;
  handleEscape(): boolean;
  isOpen(): boolean;
  mount(): void;
  open(): void;
  persist(): void;
  start(): void;
}

export interface SettingsDependencies {
  onApply(settings: StylerSettings): void;
  document?: Document;
  presetToggles?: readonly SettingsToggleDefinition[];
  quickFilterToggles?: readonly SettingsToggleDefinition[];
  storage?: chrome.storage.StorageArea;
}

export interface SettingsToggleDefinition {
  icon?: string;
  key: string;
  label: string;
}

const SETTINGS_STORAGE_KEY = "poe-tradeux-settings";
const BRAND_NAME = "POE TradeUX";
const APP_VERSION = manifest.version;

export function createSettingsFeature(
  dependencies: SettingsDependencies
): SettingsFeature {
  const doc = dependencies.document ?? document;
  const storage = dependencies.storage ?? chrome.storage.local;
  const state: StylerSettings = {
    ...DEFAULT_SETTINGS,
    disabledPresets: [],
    disabledQuickFilters: [],
    gemItemFavorites: [],
    statFilterFavorites: [],
    uniqueItemFavorites: []
  };
  let mounted = false;

  const launcher = doc.createElement("button");
  launcher.id = "poe-trade-styler-open";
  launcher.type = "button";
  launcher.textContent = BRAND_NAME;
  launcher.setAttribute("aria-haspopup", "dialog");
  launcher.setAttribute("aria-controls", "poe-trade-styler-modal");
  launcher.setAttribute("aria-expanded", "false");

  const { overlay: modal, dialog, closeButton } = createModalFrame(doc, {
    kind: "settings",
    overlayId: "poe-trade-styler-modal",
    dialogClassName: "poe-trade-styler-dialog",
    closeButtonClassName: "poe-trade-styler-close",
    titleId: "poe-trade-styler-title",
    titleText: BRAND_NAME,
    closeLabel: "Close settings",
    dialogTag: "section",
    dialogTabIndex: -1
  });

  const optionsContainer = doc.createElement("div");
  optionsContainer.className = "poe-trade-styler-options";
  const options = {
    twoColumnLayout: createOption(
      "poe-trade-styler-two-column",
      "Filter and results in 2 columns",
      "Keep filters on the left and show results on the right."
    ),
    fullWidthScreen: createOption(
      "poe-trade-styler-full-width",
      "Full width screen",
      "Allow the trade layout to expand up to 1920px."
    ),
    disableBackground: createOption(
      "poe-trade-styler-disable-background",
      "Disable background",
      "Hide the trade page background image."
    ),
    hideCornerDecorators: createOption(
      "poe-trade-styler-hide-corner-decorators",
      "Hide corner decorators",
      "Hide ornamental corner artwork from modals and popovers."
    ),
    rightSpaceForBetterTrading: createOption(
      "poe-trade-styler-right-space",
      "Add right space for Better Trading extension",
      "Reserve a 400px-wide area on the right side of the page."
    ),
    stickySearchPanel: createOption(
      "poe-trade-styler-sticky-search",
      "Sticky search panel",
      "Keep filters visible and pin search controls to the screen bottom."
    ),
    hideIrrelevantAffixes: createOption(
      "poe-trade-styler-hide-irrelevant-affixes",
      "Show relevant preffixes and suffixes for preset base first",
      "Place stats relevant to the selected preset base before the native stat list."
    )
  } satisfies Record<
    Exclude<
      keyof StylerSettings,
      | "disabledPresets"
      | "disabledQuickFilters"
      | "gemItemFavorites"
      | "hideLowTierFlasks"
      | "hideLowTierWaystones"
      | "statFilterFavorites"
      | "uniqueItemFavorites"
    >,
    SettingsOption
  >;

  optionsContainer.append(
    options.twoColumnLayout.label,
    options.fullWidthScreen.label,
    options.disableBackground.label,
    options.stickySearchPanel.label,
    options.hideIrrelevantAffixes.label
  );

  const settingsLayout = doc.createElement("div");
  settingsLayout.className = "poe-trade-styler-settings-layout";
  const featureOptions = doc.createElement("aside");
  featureOptions.className = "poe-trade-styler-feature-options";
  featureOptions.append(
    options.hideCornerDecorators.label,
    options.rightSpaceForBetterTrading.label
  );
  const featureToggleButtons = [
    ...createToggleGroup(
      "Enabled presets:",
      "presets",
      dependencies.presetToggles || []
    ),
    ...createToggleGroup(
      "Quick filters:",
      "quick-filters",
      dependencies.quickFilterToggles || []
    )
  ];
  settingsLayout.append(optionsContainer, featureOptions);

  const footer = doc.createElement("footer");
  footer.className = "poe-trade-styler-about";
  const links = doc.createElement("nav");
  links.setAttribute("aria-label", `About ${BRAND_NAME}`);
  links.append(
    createExternalLink(
      "GitHub",
      "https://github.com/tradeux/tradeux"
    ),
    createExternalLink(
      "Privacy Policy",
      "https://tradeux.github.io/tradeux/privacy-policy.html"
    )
  );
  const disclaimer = doc.createElement("p");
  disclaimer.textContent =
    "This product isn't affiliated with or endorsed by Grinding Gear Games in any way.";
  const versionBadge = doc.createElement("small");
  versionBadge.className = "poe-trade-styler-about-version";
  versionBadge.textContent = `v${APP_VERSION}`;
  footer.append(links, disclaimer, versionBadge);

  dialog.append(settingsLayout, footer);

  function createExternalLink(label: string, href: string): HTMLAnchorElement {
    const link = doc.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = label;
    return link;
  }

  function createOption(
    id: string,
    labelText: string,
    description: string
  ): SettingsOption {
    const label = doc.createElement("label");
    label.className = "poe-trade-styler-option";
    const checkbox = doc.createElement("input");
    checkbox.id = id;
    checkbox.type = "checkbox";
    const copy = doc.createElement("span");
    const optionTitle = doc.createElement("strong");
    optionTitle.textContent = labelText;
    const optionDescription = doc.createElement("small");
    optionDescription.textContent = description;
    copy.append(optionTitle, optionDescription);
    label.append(checkbox, copy);
    return { checkbox, label };
  }

  function createToggleGroup(
    labelText: string,
    kind: SettingsToggleKind,
    definitions: readonly SettingsToggleDefinition[]
  ): HTMLButtonElement[] {
    const section = doc.createElement("section");
    section.className = "poe-trade-styler-feature-option-group";
    const label = doc.createElement("h3");
    label.textContent = labelText;
    const controls = doc.createElement("div");
    controls.className = "poe-trade-styler-feature-toggle-list";
    const buttons = definitions.map((definition) => {
      const button = doc.createElement("button");
      button.type = "button";
      button.className = "poe-trade-styler-feature-toggle";
      button.dataset.featureToggleKind = kind;
      button.dataset.featureToggleKey = definition.key;
      button.dataset.featureToggleLabel = definition.label;
      const tooltip = doc.createElement("span");
      tooltip.className = "poe-trade-styler-feature-toggle-tooltip";
      tooltip.id =
        `poe-trade-styler-${kind}-${definition.key}-tooltip`;
      tooltip.setAttribute("role", "tooltip");
      tooltip.textContent = definition.label;
      button.setAttribute("aria-describedby", tooltip.id);

      if (definition.icon?.startsWith("assets/")) {
        const icon = doc.createElement("img");
        icon.src = getSafeItemImageUrl(definition.icon);
        icon.alt = "";
        icon.setAttribute("aria-hidden", "true");
        button.append(icon);
      } else {
        const icon = doc.createElement("span");
        icon.textContent = definition.icon || definition.label.slice(0, 2);
        icon.setAttribute("aria-hidden", "true");
        button.append(icon);
      }

      button.append(tooltip);

      button.addEventListener("click", () => {
        const stateKey = getDisabledStateKey(kind);
        const disabled = new Set(state[stateKey]);
        if (disabled.has(definition.key)) {
          disabled.delete(definition.key);
        } else {
          disabled.add(definition.key);
        }
        state[stateKey] = [...disabled];
        apply();
        persist();
      });
      controls.append(button);
      return button;
    });

    section.append(label, controls);
    featureOptions.append(section);
    return buttons;
  }

  function getDisabledStateKey(
    kind: SettingsToggleKind
  ): "disabledPresets" | "disabledQuickFilters" {
    return kind === "presets" ? "disabledPresets" : "disabledQuickFilters";
  }

  function apply(): void {
    for (const [key, option] of Object.entries(options) as [
      keyof typeof options,
      SettingsOption
    ][]) {
      option.checkbox.checked = state[key];
    }

    featureToggleButtons.forEach((button) => {
      const kind = button.dataset.featureToggleKind as SettingsToggleKind;
      const key = button.dataset.featureToggleKey || "";
      const label = button.dataset.featureToggleLabel || key;
      const enabled = !state[getDisabledStateKey(kind)].includes(key);
      button.classList.toggle("is-disabled", !enabled);
      button.setAttribute("aria-pressed", String(enabled));
      button.setAttribute(
        "aria-label",
        `${label}: ${enabled ? "enabled" : "disabled"}. Click to ${
          enabled ? "disable" : "enable"
        }.`
      );
    });

    dependencies.onApply(state);
  }

  function persist(): void {
    try {
      void storage.set({
        [SETTINGS_STORAGE_KEY]: {
          ...state,
          disabledPresets: [...state.disabledPresets],
          disabledQuickFilters: [...state.disabledQuickFilters],
          gemItemFavorites: [...state.gemItemFavorites],
          statFilterFavorites: [...state.statFilterFavorites],
          uniqueItemFavorites: [...state.uniqueItemFavorites]
        }
      });
    } catch {
      // An unpacked extension reload can invalidate an existing content script.
    }
  }

  function loadStoredSettings(value: unknown): void {
    if (!value || typeof value !== "object") return;

    const stored = value as Partial<StylerSettings>;
    for (const key of [
      "disableBackground",
      "fullWidthScreen",
      "hideCornerDecorators",
      "hideIrrelevantAffixes",
      "hideLowTierFlasks",
      "hideLowTierWaystones",
      "rightSpaceForBetterTrading",
      "stickySearchPanel",
      "twoColumnLayout"
    ] as const) {
      if (typeof stored[key] === "boolean") {
        state[key] = stored[key];
      }
    }

    if (Array.isArray(stored.statFilterFavorites)) {
      state.statFilterFavorites = stored.statFilterFavorites.filter(
        (favorite): favorite is string => typeof favorite === "string"
      );
    }

    if (Array.isArray(stored.disabledPresets)) {
      state.disabledPresets = stored.disabledPresets.filter(
        (key): key is string => typeof key === "string"
      );
    }

    if (Array.isArray(stored.disabledQuickFilters)) {
      state.disabledQuickFilters = stored.disabledQuickFilters.filter(
        (key): key is string => typeof key === "string"
      );
    }

    if (Array.isArray(stored.gemItemFavorites)) {
      state.gemItemFavorites = stored.gemItemFavorites.filter(
        (favorite): favorite is string => typeof favorite === "string"
      );
    }

    if (Array.isArray(stored.uniqueItemFavorites)) {
      state.uniqueItemFavorites = stored.uniqueItemFavorites.filter(
        (favorite): favorite is string => typeof favorite === "string"
      );
    }
  }

  function open(): void {
    modal.hidden = false;
    launcher.setAttribute("aria-expanded", "true");
    doc.documentElement.classList.add("poe-trade-styler-modal-open");
    dialog.focus();
  }

  function close(): void {
    modal.hidden = true;
    launcher.setAttribute("aria-expanded", "false");
    doc.documentElement.classList.remove("poe-trade-styler-modal-open");
    launcher.focus();
  }

  function mount(): void {
    if (mounted) {
      return;
    }

    const staleLauncher = doc.getElementById(launcher.id);
    if (staleLauncher && staleLauncher !== launcher) {
      staleLauncher.remove();
    }
    const staleModal = doc.getElementById(modal.id);
    if (staleModal && staleModal !== modal) {
      staleModal.remove();
    }

    doc.body.append(launcher, modal);
    launcher.addEventListener("click", open);
    closeButton.addEventListener("click", close);
    modal.addEventListener("click", onModalClick);
    for (const [key, option] of Object.entries(options) as [
      keyof typeof options,
      SettingsOption
    ][]) {
      option.checkbox.addEventListener("change", () => {
        state[key] = option.checkbox.checked;
        apply();
        persist();
      });
    }
    mounted = true;
  }

  function start(): void {
    apply();
    try {
      storage.get({ [SETTINGS_STORAGE_KEY]: null }, (items) => {
        loadStoredSettings(items[SETTINGS_STORAGE_KEY]);
        apply();
      });
    } catch {
      // Keep defaults when the extension context was invalidated.
    }
  }

  function onModalClick(event: MouseEvent): void {
    if (event.target === modal) {
      close();
    }
  }

  function handleEscape(): boolean {
    if (modal.hidden) {
      return false;
    }

    close();
    return true;
  }

  function destroy(): void {
    launcher.removeEventListener("click", open);
    closeButton.removeEventListener("click", close);
    modal.removeEventListener("click", onModalClick);
    launcher.remove();
    modal.remove();
    mounted = false;
  }

  return {
    state,
    close,
    destroy,
    handleEscape,
    isOpen: () => !modal.hidden,
    mount,
    open,
    persist,
    start
  };
}

interface SettingsOption {
  checkbox: HTMLInputElement;
  label: HTMLLabelElement;
}

type SettingsToggleKind = "presets" | "quick-filters";

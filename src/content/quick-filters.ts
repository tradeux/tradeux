import {
  QUICK_BOOLEAN_FILTERS,
  QUICK_NUMBER_FILTERS,
  QUICK_RARITY_FILTER
} from "./quick-filter-definitions";
import { createQuickRarityFilterFeature } from "./quick-rarity-filter";
import { getFilterBodyByLabel, getRenderedSelectValue } from "./trade-dom";
import type {
  GemDataPort,
  QuickBooleanState,
  QuickBoundFilterDefinition,
  StylerPort
} from "./ports";
import type {
  QuickBooleanFilterDefinition,
  QuickNumberFilterDefinition
} from "./quick-filter-definitions";
import { getSafeItemImageUrl } from "./image-assets";
import { createQuickValueBadge, syncQuickValueBadge } from "./quick-filter-value";
import {
  applyNativeQuickNumberValue,
  configureQuickNumberGrid,
  hasSelectedGem,
  readQuickNumberBoundValue,
  readQuickNumberValue,
  setQuickNumberControlVisibility
} from "./quick-number-filter";
import { createHoverNumberInputController } from "./hover-number-input";
import {
  bindHoverPopover,
  type HoverPopoverBinding
} from "./hover-popover";
import { decoratePopover, setPopoverOpen } from "./popover-transition";
import { positionViewportPopover } from "./popover-position";

export interface QuickFiltersFeature {
  closeBoundPopovers(exceptControl?: Element | null): boolean;
  decorate(): void;
  handleKeyDown(event: KeyboardEvent): boolean;
  isGroupToggleInProgress(): boolean;
  requestSync(): void;
}
export interface QuickFiltersDependencies {
  gemData: GemDataPort;
  styler: StylerPort;
  normalizeText(value: unknown): string;
  waitForElement<T extends Element>(findElement: () => T | null, attempts?: number): Promise<T | null>;
}

export function createQuickFiltersFeature({
  gemData,
  styler,
  normalizeText,
  waitForElement
}: QuickFiltersDependencies): QuickFiltersFeature {
  const normalizeStatFilterText = normalizeText;
  const QUICK_BOUND_FILTERS = styler.QUICK_BOUND_FILTERS;
  let quickFilterSyncScheduled = false;
  let quickFilterGroupToggleInProgress = false;
  let quickFilterClearInProgress = false;
  const hoverNumberInput = createHoverNumberInputController();
  const pendingQuickFilterGroupEnables = new Map<string, Promise<void>>();
  function getQuickFilterBody(label: string): Element | null {
    return getFilterBodyByLabel(label, normalizeStatFilterText);
  }

  function getQuickFilterGroupToggle(
    filterBody: Element | null
  ): HTMLElement | null {
    return getQuickFilterGroup(filterBody)?.querySelector<HTMLElement>(
      ":scope > .filter-group-header .toggle-btn"
    ) ?? null;
  }

  function getQuickFilterGroup(filterBody: Element | null): Element | null {
    let group = filterBody?.closest(".filter-group") || null;

    while (group) {
      if (
        group.querySelector(
          ":scope > .filter-group-header .toggle-btn"
        )
      ) {
        return group;
      }

      group = group.parentElement?.closest(".filter-group") || null;
    }

    return null;
  }

  function isQuickFilterGroupEnabled(filterBody: Element | null): boolean {
    const toggle = getQuickFilterGroupToggle(filterBody);
    return !toggle || !toggle.classList.contains("off");
  }

  function setQuickFilterGroupEnabled(
    filterBody: Element | null,
    enabled: boolean
  ): void {
    const toggle = getQuickFilterGroupToggle(filterBody);

    if (toggle && toggle.classList.contains("off") === enabled) {
      quickFilterGroupToggleInProgress = true;

      try {
        toggle.click();
      } finally {
        quickFilterGroupToggleInProgress = false;
      }
    }
  }

  function setQuickFilterGroupExpanded(filterBody: Element | null): void {
    const group = getQuickFilterGroup(filterBody);

    if (group && !group.classList.contains("expanded")) {
      quickFilterGroupToggleInProgress = true;

      try {
        group
          .querySelector<HTMLElement>(
            ":scope > .filter-group-header .filter-title-clickable, " +
              ":scope > .filter-group-header .filter-title"
          )
          ?.click();
      } finally {
        quickFilterGroupToggleInProgress = false;
      }
    }
  }

  function getQuickFilterGroupKey(
    filterBody: Element | null,
    fallbackLabel: string
  ): string {
    const group = getQuickFilterGroup(filterBody);
    const title = group?.querySelector(
      ":scope > .filter-group-header .filter-title-clickable, " +
        ":scope > .filter-group-header .filter-title"
    )?.textContent;

    return normalizeStatFilterText(title || fallbackLabel);
  }

  async function ensureQuickFilterGroupEnabled(
    label: string
  ): Promise<Element | null> {
    const initialBody = getQuickFilterBody(label);

    if (!initialBody) {
      return null;
    }

    const groupKey = getQuickFilterGroupKey(initialBody, label);
    const pendingEnable = pendingQuickFilterGroupEnables.get(groupKey);

    if (pendingEnable) {
      await pendingEnable;
      const currentBody = getQuickFilterBody(label);
      return isQuickFilterGroupEnabled(currentBody) ? currentBody : null;
    }

    const enable = (async (): Promise<void> => {
      let currentBody = getQuickFilterBody(label) || initialBody;

      if (!isQuickFilterGroupEnabled(currentBody)) {
        setQuickFilterGroupEnabled(currentBody, true);
        currentBody =
          (await waitForElement(() => {
            const candidate = getQuickFilterBody(label);
            return isQuickFilterGroupEnabled(candidate) ? candidate : null;
          }, 20)) || currentBody;
      }

      if (!isQuickFilterGroupEnabled(currentBody)) {
        return;
      }

      setQuickFilterGroupExpanded(currentBody);
      const group = getQuickFilterGroup(currentBody);

      if (group && !group.classList.contains("expanded")) {
        await waitForElement(() => {
          const candidate = getQuickFilterBody(label);
          const candidateGroup = getQuickFilterGroup(candidate);
          return candidate &&
            isQuickFilterGroupEnabled(candidate) &&
            candidateGroup?.classList.contains("expanded")
            ? candidate
            : null;
        }, 20);
      }
    })();

    pendingQuickFilterGroupEnables.set(groupKey, enable);

    try {
      await enable;
    } finally {
      if (pendingQuickFilterGroupEnables.get(groupKey) === enable) {
        pendingQuickFilterGroupEnables.delete(groupKey);
      }
    }

    const currentBody = getQuickFilterBody(label);
    return isQuickFilterGroupEnabled(currentBody) ? currentBody : null;
  }

  function readQuickBooleanState(
    definition: QuickBooleanFilterDefinition
  ): QuickBooleanState {
    const filterBody = getQuickFilterBody(definition.label);

    if (!isQuickFilterGroupEnabled(filterBody)) {
      return "any";
    }

    const renderedValue = normalizeStatFilterText(
      getRenderedSelectValue(filterBody) ||
        filterBody?.querySelector<HTMLInputElement>(".multiselect__input")?.value ||
        filterBody?.querySelector<HTMLInputElement>(".multiselect__input")?.placeholder ||
        "any"
    );

    if (renderedValue === "yes" || renderedValue === "true") {
      return "yes";
    }

    if (renderedValue === "no" || renderedValue === "false") {
      return "no";
    }

    return "any";
  }

  function setQuickBooleanControlState(
    control: HTMLElement,
    definition: QuickBooleanFilterDefinition,
    state: QuickBooleanState
  ): void {
    const stateLabel = { any: "Any", yes: "Yes", no: "No" }[state];
    control.dataset.state = state;
    control.classList.toggle("is-any", state === "any");
    control.classList.toggle("is-yes", state === "yes");
    control.classList.toggle("is-no", state === "no");
    control.setAttribute(
      "aria-label",
      `${definition.label}: ${stateLabel}. Click to change.`
    );
  }

  async function applyQuickBooleanState(
    definition: QuickBooleanFilterDefinition,
    state: QuickBooleanState
  ): Promise<boolean> {
    let filterBody = getQuickFilterBody(definition.label);
    const targetText = { any: "Any", yes: "Yes", no: "No" }[state];

    if (state !== "any") {
      filterBody = await ensureQuickFilterGroupEnabled(definition.label);

      if (!filterBody) {
        return false;
      }
    }

    const findOption = () => {
      filterBody = getQuickFilterBody(definition.label) || filterBody;

      return [...(filterBody?.querySelectorAll<HTMLElement>(
        ".multiselect__option:not(.multiselect__option--disabled)"
      ) || [])].find(
        (candidate) =>
          normalizeStatFilterText(candidate.textContent || "") ===
          normalizeStatFilterText(targetText)
      ) ?? null;
    };
    const option = findOption() || (await waitForElement(findOption, 20));

    if (!option) {
      return false;
    }

    option.click();

    if (state !== "any") {
      await waitForElement(
        () =>
          readQuickBooleanState(definition) === state
            ? getQuickFilterBody(definition.label)
            : null,
        20
      );
    }

    return true;
  }

  function createQuickFilterIcon(
    definition: QuickBooleanFilterDefinition
  ): HTMLImageElement {
    const icon = document.createElement("img");
    icon.className = "poe-trade-styler-quick-filter-icon";
    icon.src = getSafeItemImageUrl(definition.icon);
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");
    return icon;
  }

  function createQuickBooleanControl(
    definition: QuickBooleanFilterDefinition
  ): HTMLButtonElement {
    const button = document.createElement("button");
    button.type = "button";
    button.className =
      "poe-trade-styler-quick-filter poe-trade-styler-quick-filter-boolean";
    button.dataset.quickFilter = definition.key;
    const tooltip = document.createElement("span");
    tooltip.className = "poe-trade-styler-quick-filter-tooltip";
    tooltip.id = `poe-trade-styler-quick-filter-${definition.key}-tooltip`;
    tooltip.setAttribute("role", "tooltip");
    tooltip.textContent = definition.label;
    button.setAttribute("aria-describedby", tooltip.id);
    button.append(createQuickFilterIcon(definition), tooltip);
    setQuickBooleanControlState(button, definition, "any");
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const nextState = styler.getNextQuickBooleanState(button.dataset.state);

      if (await applyQuickBooleanState(definition, nextState)) {
        setQuickBooleanControlState(button, definition, nextState);
        button.blur();
        requestQuickFilterSync();
        setTimeout(requestQuickFilterSync, 80);
      }
    });
    return button;
  }

  function setQuickNumberControlValue(
    control: HTMLElement,
    definition: QuickNumberFilterDefinition,
    value: string,
    maximumValue = ""
  ): void {
    const trigger = control.querySelector<HTMLButtonElement>(
      ".poe-trade-styler-quick-number-trigger"
    );
    const badge = control.querySelector<HTMLElement>(
      ".poe-trade-styler-quick-filter-value"
    );
    const resetButton = control.querySelector<HTMLButtonElement>(
      ".poe-trade-styler-quick-number-reset"
    );
    const minimumInput = control.querySelector<HTMLInputElement>(
      '.poe-trade-styler-quick-number-input[data-bound="min"]'
    );
    const maximumInput = control.querySelector<HTMLInputElement>(
      '.poe-trade-styler-quick-number-input[data-bound="max"]'
    );

    if (!trigger || !badge) return;

    control.dataset.value = value;
    control.dataset.maximumValue = maximumValue;
    const displayValue = value && maximumValue
      ? `${value}–${maximumValue}`
      : value || (maximumValue ? `≤${maximumValue}` : "");
    trigger.classList.toggle("is-empty", !displayValue);
    trigger.classList.toggle("is-enabled", Boolean(displayValue));

    control
      .querySelectorAll<HTMLElement>(".poe-trade-styler-quick-number-option")
      .forEach((option) => {
        const selected = option.dataset.value === value;
        option.classList.toggle("is-selected", selected);
        option.setAttribute("aria-selected", String(selected));
      });

    syncQuickValueBadge(badge, displayValue);

    if (
      minimumInput &&
      minimumInput !== document.activeElement &&
      minimumInput.value !== value
    ) {
      minimumInput.value = value;
    }
    if (
      maximumInput &&
      maximumInput !== document.activeElement &&
      maximumInput.value !== maximumValue
    ) {
      maximumInput.value = maximumValue;
    }

    if (resetButton) resetButton.disabled = !displayValue;
    trigger.title = displayValue
      ? `${definition.shortLabel}: ${displayValue}. Click to disable.`
      : `${definition.shortLabel}: disabled. Hover to choose.`;
    trigger.setAttribute(
      "aria-label",
      displayValue
        ? `${definition.shortLabel}: ${displayValue}. Click to disable.`
        : `${definition.shortLabel}: disabled`
    );
  }

  async function applyQuickNumberValue(
    definition: QuickNumberFilterDefinition | QuickBoundFilterDefinition,
    value: string,
    bound: "max" | "min" = "min",
    restoreFocusTo: HTMLElement | null = null
  ): Promise<boolean> {
    let filterBody = getQuickFilterBody(definition.label);

    if (value) {
      filterBody = await ensureQuickFilterGroupEnabled(definition.label);
    }

    return applyNativeQuickNumberValue(
      filterBody,
      definition,
      value,
      bound,
      restoreFocusTo
    );
  }

  function createQuickNumberControl(
    definition: QuickNumberFilterDefinition
  ): HTMLDivElement {
    const control = document.createElement("div");
    control.className = "poe-trade-styler-quick-number-filter";
    control.dataset.quickFilter = definition.key;
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className =
      "poe-trade-styler-quick-filter poe-trade-styler-quick-filter-number poe-trade-styler-quick-number-trigger is-empty";
    trigger.setAttribute("aria-haspopup", "dialog");
    trigger.setAttribute("aria-expanded", "false");
    trigger.append(createQuickFilterIcon(definition));
    trigger.append(createQuickValueBadge(document));
    const popover = document.createElement("div");
    const titleId = `poe-trade-styler-quick-number-title-${definition.key}`;
    popover.className = "poe-trade-styler-quick-number-popover";
    decoratePopover(popover);
    popover.hidden = true;
    popover.setAttribute("role", "dialog");
    popover.setAttribute("aria-labelledby", titleId);
    const title = document.createElement("strong");
    title.id = titleId;
    title.className = "poe-trade-styler-quick-number-title";
    title.textContent = definition.shortLabel;
    const close = (): void => {
      setPopoverOpen(popover, false);
      control.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    };
    const open = (): void => {
      closeQuickBoundPopovers(control);
      setPopoverOpen(popover, true);
      positionViewportPopover(trigger, popover);
      control.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    };
    let popoverBinding: HoverPopoverBinding | null = null;

    const commitValue = async (
      value: string,
      bound: "max" | "min" = "min",
      closePopover = false,
      restoreFocusTo: HTMLElement | null = null
    ): Promise<void> => {
      if (
        await applyQuickNumberValue(
          definition,
          value,
          bound,
          restoreFocusTo
        )
      ) {
        if (closePopover) {
          restoreFocusTo?.blur();
        }

        const filterBody = getQuickFilterBody(definition.label);
        setQuickNumberControlValue(
          control,
          definition,
          readQuickNumberValue(filterBody, definition),
          definition.hasMaximumInput
            ? readQuickNumberBoundValue(filterBody, "max")
            : ""
        );
        requestQuickFilterSync();
        setTimeout(requestQuickFilterSync, 80);

        if (closePopover) {
          trigger.focus({ preventScroll: true });
          popoverBinding?.dismiss();
        }
      }
    };

    let initialFocusTarget: HTMLElement | null = null;
    if (definition.min != null && definition.max != null) {
      const isValidInputValue = (value: string): boolean => {
        if (value === "") return true;

        const number = Number(value);
        return (
          Number.isInteger(number) &&
          number >= definition.min! &&
          number <= definition.max!
        );
      };
      const createInput = (
        bound: "max" | "min",
        ariaLabel: string,
        placeholder: string
      ): HTMLInputElement => {
        const input = document.createElement("input");
        input.className = "poe-trade-styler-quick-number-input";
        input.dataset.bound = bound;
        input.type = "number";
        input.inputMode = "numeric";
        input.step = "1";
        input.min = String(definition.min);
        input.max = String(definition.max);
        input.placeholder = placeholder;
        input.setAttribute("aria-label", ariaLabel);
        hoverNumberInput.enable(input);
        input.addEventListener("input", () => {
          if (isValidInputValue(input.value)) {
            void commitValue(input.value, bound, false, input);
          }
        });
        input.addEventListener("keydown", (event) => {
          if (event.key === "Enter" && isValidInputValue(input.value)) {
            event.preventDefault();
            event.stopPropagation();
            void commitValue(input.value, bound, true, input);
          }
        });
        return input;
      };
      const minimumInput = createInput(
        "min",
        definition.shortLabel,
        `${definition.min}–${definition.max}`
      );
      initialFocusTarget = minimumInput;
      popover.append(minimumInput);

      if (definition.hasMaximumInput) {
        popover.append(
          createInput("max", "Maximum item quality", "Max quality")
        );
      }
    }

    const options = document.createElement("div");
    options.className = "poe-trade-styler-quick-number-options";
    options.setAttribute("role", "listbox");
    options.setAttribute("aria-label", `${definition.shortLabel} values`);
    configureQuickNumberGrid(popover, definition);

    definition.values.forEach((value) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "poe-trade-styler-quick-number-option";
      option.dataset.value = value;
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", "false");
      option.textContent = value;
      option.addEventListener("click", async (event) => {
        event.preventDefault();
        event.stopPropagation();
        await commitValue(value, "min", true);
      });
      option.addEventListener("keydown", (event) => {
        const optionButtons = [
          ...options.querySelectorAll<HTMLButtonElement>(
            ".poe-trade-styler-quick-number-option"
          )
        ];
        const currentIndex = optionButtons.indexOf(option);
        let nextIndex = currentIndex;

        if (event.key === "ArrowDown") nextIndex++;
        if (event.key === "ArrowUp") nextIndex--;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = optionButtons.length - 1;

        if (nextIndex !== currentIndex) {
          event.preventDefault();
          optionButtons[
            Math.max(0, Math.min(optionButtons.length - 1, nextIndex))
          ]?.focus({ preventScroll: true });
        }
      });
      options.append(option);
    });

    initialFocusTarget ||= options.querySelector("button");
    popover.append(options);

    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.className = "poe-trade-styler-quick-number-reset";
    resetButton.textContent = "Reset";
    resetButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const reset = async (): Promise<void> => {
        await commitValue("", "min");
        if (definition.hasMaximumInput) {
          await commitValue("", "max");
        }
        trigger.focus({ preventScroll: true });
        popoverBinding?.dismiss();
      };
      void reset();
    });

    popover.prepend(title);
    popover.append(resetButton);
    popoverBinding = bindHoverPopover({
      button: trigger,
      close,
      container: control,
      open
    });
    trigger.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowDown") return;
      event.preventDefault();
      open();
      const selectedOption = options.querySelector<HTMLButtonElement>(
        '.poe-trade-styler-quick-number-option[aria-selected="true"]'
      );
      (initialFocusTarget || selectedOption)?.focus({ preventScroll: true });
    });
    control.append(trigger, popover);
    setQuickNumberControlValue(control, definition, "");
    return control;
  }

  function setQuickBoundControlValue(
    control: HTMLElement,
    definition: QuickBoundFilterDefinition,
    value: string
  ): void {
    const input = control.querySelector<HTMLInputElement>("input");
    const trigger = control.querySelector<HTMLElement>(
      ".poe-trade-styler-quick-bound-trigger"
    );
    const badge = control.querySelector<HTMLElement>(
      ".poe-trade-styler-quick-filter-value"
    );

    if (!input || !trigger || !badge) return;
    input.value = value;
    control.dataset.value = value;
    control.classList.toggle("is-empty", !value);
    control.classList.toggle("is-enabled", Boolean(value));
    trigger.classList.toggle("is-empty", !value);
    trigger.classList.toggle("is-enabled", Boolean(value));
    syncQuickValueBadge(badge, value);
    trigger.title = value
      ? `${definition.shortLabel}: ${value}. Click to disable.`
      : `${definition.shortLabel}: disabled. Hover to enter a value.`;
    trigger.setAttribute(
      "aria-label",
      value
        ? `${definition.shortLabel}: ${value}. Click to disable.`
        : `${definition.shortLabel}: disabled`
    );
    input.setAttribute(
      "aria-label",
      `${definition.shortLabel}: ${value || "empty"}`
    );
  }

  function closeQuickBoundPopovers(
    exceptControl: Element | null = null
  ): boolean {
    let closed = false;

    document
      .querySelectorAll(
        ".poe-trade-styler-quick-number-filter.is-open, " +
          ".poe-trade-styler-quick-bound-filter.is-open, " +
          ".poe-trade-styler-quick-rarity-filter.is-open"
      )
      .forEach((control) => {
        if (control === exceptControl) {
          return;
        }

        control.classList.remove("is-open");
        const popover = control.querySelector<HTMLElement>(
            ".poe-trade-styler-quick-number-popover, " +
              ".poe-trade-styler-quick-bound-popover, " +
              ".poe-trade-styler-quick-rarity-popover"
        );
        const trigger = control.querySelector<HTMLElement>(
            ".poe-trade-styler-quick-number-trigger, " +
              ".poe-trade-styler-quick-bound-trigger, " +
              ".poe-trade-styler-quick-rarity-trigger"
        );
        if (popover) setPopoverOpen(popover, false);
        trigger?.setAttribute("aria-expanded", "false");
        closed = true;
      });

    return closed;
  }

  function createQuickBoundControl(
    definition: QuickBoundFilterDefinition
  ): HTMLDivElement {
    const control = document.createElement("div");
    control.className = "poe-trade-styler-quick-bound-filter is-empty";
    control.dataset.quickFilter = definition.key;
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className =
      "poe-trade-styler-quick-filter poe-trade-styler-quick-bound-trigger is-empty";
    trigger.setAttribute("aria-haspopup", "dialog");
    trigger.setAttribute("aria-expanded", "false");
    const usesImageIcon = definition.icon.startsWith("assets/");
    const icon = document.createElement(usesImageIcon ? "img" : "span");
    icon.className =
      `poe-trade-styler-quick-bound-icon is-${definition.tone}`;
    if (usesImageIcon) {
      (icon as HTMLImageElement).src = getSafeItemImageUrl(definition.icon);
      (icon as HTMLImageElement).alt = "";
    } else {
      icon.textContent = definition.icon;
    }
    icon.setAttribute("aria-hidden", "true");
    trigger.append(icon, createQuickValueBadge(document));
    const popover = document.createElement("div");
    const titleId = `poe-trade-styler-quick-bound-title-${definition.key}`;
    popover.className = "poe-trade-styler-quick-bound-popover";
    decoratePopover(popover);
    popover.hidden = true;
    popover.setAttribute("role", "dialog");
    popover.setAttribute("aria-labelledby", titleId);
    const title = document.createElement("strong");
    title.id = titleId;
    title.className = "poe-trade-styler-quick-bound-title";
    title.textContent = definition.shortLabel;
    const close = (): void => {
      setPopoverOpen(popover, false);
      control.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    };
    const open = (): void => {
      closeQuickBoundPopovers(control);
      setPopoverOpen(popover, true);
      positionViewportPopover(trigger, popover);
      control.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      input.value = control.dataset.value || "";
    };
    let popoverBinding: HoverPopoverBinding | null = null;
    const input = document.createElement("input");
    input.type = "number";
    input.inputMode = "numeric";
    input.step = "1";
    input.min = String(definition.min ?? 0);
    if (definition.max != null) {
      input.max = String(definition.max);
    }
    input.placeholder = definition.bound;
    hoverNumberInput.enable(input);
    const commitValue = async (
      value: string,
      closePopover = false
    ): Promise<void> => {
      const normalizedValue = styler.normalizeQuickBoundValue(
        definition,
        value
      );
      input.value = normalizedValue;
      if (
        await applyQuickNumberValue(
          definition,
          normalizedValue,
          definition.bound,
          input
        )
      ) {
        setQuickBoundControlValue(control, definition, normalizedValue);
        requestQuickFilterSync();
        setTimeout(requestQuickFilterSync, 80);
        if (closePopover) {
          trigger.focus({ preventScroll: true });
          popoverBinding?.dismiss();
        }
      }
    };
    input.addEventListener("input", () => {
      void commitValue(input.value);
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
        void commitValue(input.value, true);
      }
    });
    const actions = document.createElement("div");
    actions.className = "poe-trade-styler-quick-bound-actions";
    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.className =
      "poe-trade-styler-quick-bound-action is-reset";
    resetButton.textContent = "×";
    resetButton.title = `Reset ${definition.shortLabel.toLowerCase()}`;
    resetButton.setAttribute(
      "aria-label",
      `Reset ${definition.shortLabel.toLowerCase()}`
    );
    resetButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      void commitValue("", true);
    });
    actions.append(input, resetButton);
    popover.append(title, actions);
    popoverBinding = bindHoverPopover({
      button: trigger,
      close,
      container: control,
      open
    });
    trigger.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowDown") return;
      event.preventDefault();
      open();
      input.focus({ preventScroll: true });
      input.select();
    });
    control.append(trigger, popover);
    setQuickBoundControlValue(control, definition, "");
    return control;
  }

  const rarityFilter = createQuickRarityFilterFeature({
    closePopovers: closeQuickBoundPopovers,
    definition: QUICK_RARITY_FILTER,
    ensureGroupEnabled: () =>
      ensureQuickFilterGroupEnabled(QUICK_RARITY_FILTER.label),
    getFilterBody: () => getQuickFilterBody(QUICK_RARITY_FILTER.label),
    isGroupEnabled: isQuickFilterGroupEnabled,
    normalizeText: normalizeStatFilterText,
    requestSync: requestQuickFilterSync,
    waitForElement
  });

  function hasActiveQuickFilters(): boolean {
    if (rarityFilter.hasValue()) return true;

    if (
      QUICK_BOOLEAN_FILTERS.some(
        (definition) => readQuickBooleanState(definition) !== "any"
      )
    ) {
      return true;
    }

    if (
      QUICK_NUMBER_FILTERS.some((definition) => {
        const filterBody = getQuickFilterBody(definition.label);
        const maximumValue = definition.hasMaximumInput
          ? readQuickNumberBoundValue(filterBody, "max")
          : "";
        return (
          isQuickFilterGroupEnabled(filterBody) &&
          Boolean(
            readQuickNumberValue(filterBody, definition) || maximumValue
          )
        );
      })
    ) {
      return true;
    }

    return QUICK_BOUND_FILTERS.some((definition) => {
      const filterBody = getQuickFilterBody(definition.label);
      return Boolean(
        isQuickFilterGroupEnabled(filterBody) &&
          filterBody
            ?.querySelector<HTMLInputElement>(
              `input[placeholder="${definition.bound}"]`
            )
            ?.value.trim()
      );
    });
  }

  function syncQuickFilterClearButton(strip: Element): void {
    const button = strip.querySelector<HTMLButtonElement>(
      ":scope > .poe-trade-styler-quick-filters-clear"
    );

    if (button) {
      button.disabled =
        quickFilterClearInProgress || !hasActiveQuickFilters();
    }
  }

  async function clearAllQuickFilters(button: HTMLButtonElement): Promise<void> {
    if (quickFilterClearInProgress) return;

    quickFilterClearInProgress = true;
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
    closeQuickBoundPopovers();

    try {
      for (const definition of QUICK_BOUND_FILTERS) {
        const filterBody = getQuickFilterBody(definition.label);
        const value =
          (isQuickFilterGroupEnabled(filterBody) &&
            filterBody
              ?.querySelector<HTMLInputElement>(
                `input[placeholder="${definition.bound}"]`
              )
              ?.value.trim()) ||
          "";

        if (value) {
          await applyQuickNumberValue(definition, "", definition.bound);
        }
      }

      for (const definition of QUICK_BOOLEAN_FILTERS) {
        if (readQuickBooleanState(definition) !== "any") {
          await applyQuickBooleanState(definition, "any");
        }
      }

      for (const definition of QUICK_NUMBER_FILTERS) {
        const filterBody = getQuickFilterBody(definition.label);
        const value = isQuickFilterGroupEnabled(filterBody)
          ? readQuickNumberValue(filterBody, definition)
          : "";
        const maximumValue =
          definition.hasMaximumInput && isQuickFilterGroupEnabled(filterBody)
            ? readQuickNumberBoundValue(filterBody, "max")
            : "";

        if (value) {
          await applyQuickNumberValue(definition, "");
        }
        if (maximumValue) {
          await applyQuickNumberValue(definition, "", "max");
        }
      }

      if (rarityFilter.hasValue()) {
        await rarityFilter.clear();
      }
    } finally {
      quickFilterClearInProgress = false;
      button.removeAttribute("aria-busy");
      syncQuickFilters();
      requestQuickFilterSync();
      setTimeout(requestQuickFilterSync, 80);
    }
  }

  function createQuickFilterClearButton(): HTMLButtonElement {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "poe-trade-styler-quick-filters-clear";
    button.textContent = "×";
    button.title = "Clear all quick filters";
    button.setAttribute("aria-label", "Clear all quick filters");
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      void clearAllQuickFilters(button);
    });
    return button;
  }

  function syncQuickFilters() {
    const strip = document.querySelector(
      "#trade > .top .poe-trade-styler-quick-filters"
    );

    if (!strip) {
      return;
    }

    const rarityControl = strip.querySelector<HTMLElement>(
      '[data-quick-filter="rarity"]'
    );
    if (rarityControl) rarityFilter.syncControl(rarityControl);
    QUICK_BOOLEAN_FILTERS.forEach((definition) => {
      const control = strip.querySelector<HTMLElement>(
        `[data-quick-filter="${definition.key}"]`
      );

      if (control) {
        setQuickBooleanControlState(
          control,
          definition,
          readQuickBooleanState(definition)
        );
      }
    });

    const gemSelected = hasSelectedGem(gemData, normalizeStatFilterText);
    QUICK_NUMBER_FILTERS.forEach((definition) => {
      const control = strip.querySelector<HTMLElement>(
        `[data-quick-filter="${definition.key}"]`
      );
      const filterBody = getQuickFilterBody(definition.label);
      const value = isQuickFilterGroupEnabled(filterBody)
        ? readQuickNumberValue(filterBody, definition)
        : "";
      const maximumValue =
        definition.hasMaximumInput && isQuickFilterGroupEnabled(filterBody)
          ? readQuickNumberBoundValue(filterBody, "max")
          : "";

      if (control) {
        setQuickNumberControlVisibility(control, definition, gemSelected);
        setQuickNumberControlValue(
          control,
          definition,
          value,
          maximumValue
        );
      }
    });

    QUICK_BOUND_FILTERS.forEach((definition) => {
      const control = strip.querySelector<HTMLElement>(
        `[data-quick-filter="${definition.key}"]`
      );
      const filterBody = getQuickFilterBody(definition.label);
      const value =
        (isQuickFilterGroupEnabled(filterBody) &&
          filterBody
            ?.querySelector<HTMLInputElement>(
              `input[placeholder="${definition.bound}"]`
            )
            ?.value?.trim()) ||
        "";

      if (control && !control.classList.contains("is-open")) {
        setQuickBoundControlValue(control, definition, value);
      }
    });

    syncQuickFilterClearButton(strip);
  }

  function requestQuickFilterSync() {
    if (quickFilterSyncScheduled) {
      return;
    }

    quickFilterSyncScheduled = true;
    requestAnimationFrame(() => {
      quickFilterSyncScheduled = false;
      syncQuickFilters();
    });
  }

  function decorateQuickFilters() {
    const controls = document.querySelector("#trade > .top .controls");
    const controlsParent = controls?.parentElement;

    if (!controls || !controlsParent) {
      return;
    }

    const existing = controlsParent.querySelector(
      ":scope > .poe-trade-styler-quick-filters"
    );

    if (existing) {
      syncQuickFilters();
      return;
    }

    document
      .querySelectorAll("#trade .poe-trade-styler-quick-filters")
      .forEach((strip) => strip.remove());

    const strip = document.createElement("div");
    strip.className = "poe-trade-styler-quick-filters";
    strip.setAttribute("role", "group");
    strip.setAttribute("aria-label", "Quick filters");
    QUICK_BOUND_FILTERS.forEach((definition) =>
      strip.append(createQuickBoundControl(definition))
    );
    QUICK_BOOLEAN_FILTERS.forEach((definition) =>
      strip.append(createQuickBooleanControl(definition))
    );
    QUICK_NUMBER_FILTERS.forEach((definition) =>
      strip.append(createQuickNumberControl(definition))
    );
    strip.append(rarityFilter.createControl());
    strip.append(createQuickFilterClearButton());

    controlsParent.insertBefore(strip, controls);
    syncQuickFilters();
  }

  return {
    closeBoundPopovers: closeQuickBoundPopovers,
    decorate: decorateQuickFilters,
    handleKeyDown: hoverNumberInput.handleKeyDown,
    isGroupToggleInProgress: () => quickFilterGroupToggleInProgress,
    requestSync: requestQuickFilterSync
  };
}

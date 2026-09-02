import type { QuickRarityFilterDefinition } from "./quick-filter-definitions";
import { bindHoverPopover } from "./hover-popover";
import { decoratePopover, setPopoverOpen } from "./popover-transition";

interface QuickRarityFilterDependencies {
  closePopovers(exceptControl?: Element | null): boolean;
  definition: QuickRarityFilterDefinition;
  ensureGroupEnabled(): Promise<Element | null>;
  getFilterBody(): Element | null;
  isGroupEnabled(filterBody: Element | null): boolean;
  normalizeText(value: unknown): string;
  requestSync(): void;
  waitForElement<T extends Element>(
    findElement: () => T | null,
    attempts?: number
  ): Promise<T | null>;
}

export interface QuickRarityFilterFeature {
  createControl(): HTMLDivElement;
  syncControl(control: HTMLElement): void;
}

export function createQuickRarityFilterFeature(
  dependencies: QuickRarityFilterDependencies
): QuickRarityFilterFeature {
  const {
    closePopovers,
    definition,
    ensureGroupEnabled,
    getFilterBody,
    isGroupEnabled,
    normalizeText,
    requestSync,
    waitForElement
  } = dependencies;

  function getRarityTone(value: string): string {
    if (value === "Normal") return "normal";
    if (value === "Magic") return "magic";
    if (value === "Rare") return "rare";
    if (value.startsWith("Unique")) return "unique";
    return "";
  }

  function readValue(): string {
    const filterBody = getFilterBody();

    if (!isGroupEnabled(filterBody)) return "";

    const input = filterBody?.querySelector<HTMLInputElement>(
      ".multiselect__input"
    );
    const multiselect = input?.closest(".multiselect");
    const isSearching = Boolean(
      multiselect?.classList.contains("multiselect--active")
    );
    const selectedText = filterBody
      ?.querySelector(".multiselect__single")
      ?.textContent?.trim();
    const renderedValue = normalizeText(
      selectedText ||
        (!isSearching ? input?.value.trim() : "") ||
        (!input?.value.trim() ? input?.placeholder : "") ||
        "any"
    );

    return (
      definition.values.find(
        (value) => normalizeText(value) === renderedValue
      ) || ""
    );
  }

  async function applyValue(value: string): Promise<boolean> {
    let filterBody = value
      ? await ensureGroupEnabled()
      : getFilterBody();

    if (!filterBody) return false;

    if (readValue() === value) return true;

    const input = filterBody.querySelector<HTMLInputElement>(
      ".multiselect__input"
    );

    if (!input) return false;

    input.focus();
    input.click();
    input.value = value || "Any";
    input.dispatchEvent(new Event("input", { bubbles: true }));

    const target = normalizeText(value || "Any");
    const findOption = (): HTMLElement | null => {
      filterBody = getFilterBody() || filterBody;
      const currentBody = filterBody;

      if (!currentBody) return null;

      return (
        [...currentBody.querySelectorAll<HTMLElement>(
          ".multiselect__option:not(.multiselect__option--disabled)"
        )].find(
          (option) => normalizeText(option.textContent || "") === target
        ) || null
      );
    };
    const option = findOption() || (await waitForElement(findOption, 20));

    if (!option) return false;

    const isCommitted = (): boolean => readValue() === value;
    option.dispatchEvent(
      new Event("mousedown", { bubbles: true, cancelable: true })
    );
    await new Promise((resolve) => setTimeout(resolve, 0));

    if (!isCommitted()) {
      option.click();
      await new Promise((resolve) => setTimeout(resolve, 0));
    }

    if (!isCommitted()) {
      input.dispatchEvent(
        new KeyboardEvent("keydown", {
          bubbles: true,
          cancelable: true,
          code: "Enter",
          key: "Enter"
        })
      );
      await new Promise((resolve) => setTimeout(resolve, 0));
    }

    return Boolean(
      await waitForElement(
        () => (isCommitted() ? getFilterBody() : null),
        20
      )
    );
  }

  function syncControl(control: HTMLElement): void {
    const value = readValue();
    const trigger = control.querySelector<HTMLButtonElement>(
      ".poe-trade-styler-quick-rarity-trigger"
    );
    const reset = control.querySelector<HTMLButtonElement>(
      ".poe-trade-styler-quick-rarity-reset"
    );

    control.dataset.value = value;
    trigger?.classList.toggle("is-empty", !value);
    trigger?.classList.toggle("is-enabled", Boolean(value));
    if (trigger) {
      const tone = getRarityTone(value);
      const label = value || "Rarity";
      if (trigger.textContent !== label) trigger.textContent = label;
      for (const rarityTone of ["normal", "magic", "rare", "unique"]) {
        trigger.classList.toggle(
          `is-rarity-${rarityTone}`,
          rarityTone === tone
        );
      }
      trigger.title = value
        ? `Rarity: ${value}. Click to disable.`
        : "Rarity: disabled. Hover to choose.";
      trigger.setAttribute(
        "aria-label",
        value ? `Rarity: ${value}. Click to disable.` : "Rarity: disabled"
      );
    }
    if (reset) reset.disabled = !value;

    control
      .querySelectorAll<HTMLElement>(".poe-trade-styler-quick-rarity-option")
      .forEach((option) => {
        const selected = option.dataset.value === value;
        option.classList.toggle("is-selected", selected);
        option.setAttribute("aria-selected", String(selected));
      });
  }

  function createControl(): HTMLDivElement {
    const control = document.createElement("div");
    control.className = "poe-trade-styler-quick-rarity-filter";
    control.dataset.quickFilter = definition.key;

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className =
      "poe-trade-styler-quick-filter poe-trade-styler-quick-rarity-trigger is-empty";
    trigger.textContent = "Rarity";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");

    const popover = document.createElement("div");
    popover.className = "poe-trade-styler-quick-rarity-popover";
    decoratePopover(popover);
    popover.hidden = true;
    popover.setAttribute("role", "listbox");
    popover.setAttribute("aria-label", "Item rarity");

    const close = (): void => {
      setPopoverOpen(popover, false);
      control.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    };
    const open = (): void => {
      closePopovers(control);
      setPopoverOpen(popover, true);
      control.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    };
    const commit = async (value: string): Promise<void> => {
      if (!(await applyValue(value))) return;
      syncControl(control);
      close();
      requestSync();
      setTimeout(requestSync, 80);
    };

    definition.values.forEach((value) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "poe-trade-styler-quick-rarity-option";
      const tone = getRarityTone(value);
      if (tone) option.classList.add(`is-rarity-${tone}`);
      option.dataset.value = value;
      option.textContent = value;
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", "false");
      option.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        void commit(value);
      });
      popover.append(option);
    });

    const reset = document.createElement("button");
    reset.type = "button";
    reset.className = "poe-trade-styler-quick-rarity-reset";
    reset.textContent = "Reset";
    reset.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      void commit("");
    });
    popover.append(reset);

    bindHoverPopover({
      button: trigger,
      close,
      container: control,
      open
    });
    trigger.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowDown") return;
      event.preventDefault();
      open();
      popover.querySelector<HTMLButtonElement>(
        '.poe-trade-styler-quick-rarity-option[aria-selected="true"], .poe-trade-styler-quick-rarity-option'
      )?.focus({ preventScroll: true });
    });

    control.append(trigger, popover);
    syncControl(control);
    return control;
  }

  return { createControl, syncControl };
}

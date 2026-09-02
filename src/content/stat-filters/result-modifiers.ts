import type { StylerPort } from "../ports";
import type {
  ModifierStatDetails,
  PresetStatCatalogService
} from "./catalog";

export interface NativeStatGroupActions {
  activate(group: Element, details: ModifierStatDetails): Promise<boolean>;
  create(type: string): Promise<Element | null>;
  findPositive(): Element | null;
  findType(type: string): Element | null;
}

export interface ResultModifiersFeature {
  decorate(): void;
}

export function createResultModifiersFeature({
  catalog,
  document: doc = document,
  groups,
  styler
}: {
  catalog: PresetStatCatalogService;
  document?: Document;
  groups: NativeStatGroupActions;
  styler: StylerPort;
}): ResultModifiersFeature {
  async function addModifier(
    button: HTMLButtonElement,
    label: string,
    statId: string | null,
    target: "not" | "positive"
  ): Promise<void> {
    button.disabled = true;
    button.title = button.dataset.defaultTitle ?? "";
    button.classList.remove("poe-trade-styler-mod-action-error");
    button.classList.add("poe-trade-styler-mod-action-busy");

    let group = target === "not" ? groups.findType("not") : groups.findPositive();
    if (!group) group = await groups.create(target === "not" ? "not" : "and");

    const details = await catalog.getModifierDetails(label, statId);
    const selected = group && (await groups.activate(group, details));

    button.disabled = false;
    button.classList.remove("poe-trade-styler-mod-action-busy");
    if (selected) {
      button.classList.add("poe-trade-styler-mod-action-added");
      setTimeout(
        () => button.classList.remove("poe-trade-styler-mod-action-added"),
        900
      );
      return;
    }

    button.classList.add("poe-trade-styler-mod-action-error");
    button.title = `Could not find the matching stat filter for: ${label}`;
  }

  function createAction(
    label: string,
    statId: string | null,
    target: "not" | "positive"
  ): HTMLButtonElement {
    const button = doc.createElement("button");
    const isNot = target === "not";
    button.className = "poe-trade-styler-mod-action";
    button.type = "button";
    button.dataset.symbol = isNot ? "−" : "+";
    button.title = isNot
      ? "Add this modifier to a NOT stat group"
      : "Add this modifier to the active AND or Sum stat group";
    button.dataset.defaultTitle = button.title;
    button.setAttribute(
      "aria-label",
      `${isNot ? "Exclude" : "Include"} modifier: ${label}`
    );
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      void addModifier(button, label, statId, target);
    });
    return button;
  }

  function decorate(): void {
    doc
      .querySelectorAll<HTMLElement>(
        "#trade .resultset:not(.exchange) .row .explicitMod .lc.s, " +
          "#trade .resultset:not(.exchange) .row .item-mod--explicit > .lc.s"
      )
      .forEach((modifier) => {
        if (modifier.querySelector(":scope > .poe-trade-styler-mod-controls")) {
          return;
        }

        const label = modifier.textContent.replace(/\s+/g, " ").trim();
        const statId = styler.getItemModifierStatId(modifier.dataset.field);
        if (!label) return;
        if (statId) void catalog.getModifierDetails(label, statId);

        const controls = doc.createElement("span");
        controls.className = "poe-trade-styler-mod-controls";
        controls.setAttribute("role", "group");
        controls.setAttribute("aria-label", `Actions for ${label}`);
        controls.append(
          createAction(label, statId, "positive"),
          createAction(label, statId, "not")
        );
        modifier.prepend(controls);
      });
  }

  return { decorate };
}

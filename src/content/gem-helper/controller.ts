import type {
  GemAttribute,
  GemDataPort,
  GemDefinition,
  StylerPort
} from "../ports";
import type { PresetState } from "../presets/state";
import { getSafeItemImageUrl } from "../image-assets";
import { createModalFrame } from "../modal-frame";
import {
  createGemFavorites,
  type GemFavoritesSettings
} from "./favorites";
import { getSkillGemDetail } from "./details";

export interface GemHelperFeature {
  close(): boolean;
  decorate(): void;
  destroy(): void;
}

type GemSelectionHandler = (key: string) => Promise<boolean>;
type AttributeFilter = GemAttribute | "all";
type GemSortField = "name" | "required-level";
type SortDirection = "asc" | "desc";

const ATTRIBUTE_LABELS: Readonly<Record<AttributeFilter, string>> = Object.freeze({
  all: "All",
  strength: "Strength",
  dexterity: "Dexterity",
  intelligence: "Intelligence"
});

const ATTRIBUTE_SHORT_LABELS: Readonly<Record<AttributeFilter, string>> = Object.freeze({
  all: "ALL",
  strength: "STR",
  dexterity: "DEX",
  intelligence: "INT"
});

const ATTRIBUTE_ICON_PATHS: Readonly<Partial<Record<AttributeFilter, string>>> =
  Object.freeze({
    strength: "assets/item-icons/quick-filter-strength.webp",
    dexterity: "assets/item-icons/quick-filter-dexterity.webp",
    intelligence: "assets/item-icons/quick-filter-intelligence.webp"
  });

function appendText(
  doc: Document,
  parent: ParentNode,
  tag: string,
  className: string,
  text: string
): HTMLElement {
  const element = doc.createElement(tag);
  element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
}

function getWikiGemUrl(name: string): string {
  const slug = name
    .normalize("NFKD")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/\s+/g, "_");
  return `https://www.poe2wiki.net/wiki/${encodeURIComponent(slug)}`;
}

export function createGemHelperFeature({
  document: doc = document,
  gemData,
  onDeactivate = async () => undefined,
  onSelect,
  persistSettings = () => undefined,
  presetState,
  settings = { gemItemFavorites: [] },
  styler
}: {
  document?: Document;
  gemData: GemDataPort;
  onDeactivate?: () => Promise<void>;
  onSelect: GemSelectionHandler;
  persistSettings?: () => void;
  presetState: PresetState;
  settings?: GemFavoritesSettings;
  styler: StylerPort;
}): GemHelperFeature {
  let launcher: HTMLButtonElement | null = null;
  let modal: HTMLDivElement | null = null;
  let detailModal: HTMLDivElement | null = null;
  let detailReturnFocus: HTMLButtonElement | null = null;
  let list: HTMLDivElement | null = null;
  let summary: HTMLElement | null = null;
  let searchInput: HTMLInputElement | null = null;
  let selectedAttribute: AttributeFilter = "all";
  let favoriteOnly = false;
  let sortDirection: SortDirection = "asc";
  let sortField: GemSortField = "name";
  let selectionInProgress = false;
  let launcherToggleInProgress = false;
  const selectedTags = new Set<string>();
  const gemTags = [...new Set(
    gemData.GEM_DEFINITIONS.flatMap((gem) => [...gem.tags])
  )].sort((left, right) => left.localeCompare(right, "en", { sensitivity: "base" }));
  const favorites = createGemFavorites({
    onChange: render,
    persistSettings,
    settings
  });
  function isPoe2Page(): boolean {
    return (
      styler.getTradeGameKey(location.pathname) === "poe2" ||
      doc.body.dataset.fixtureGame === "poe2"
    );
  }

  function baseFilteredGems(): GemDefinition[] {
    return gemData.getGems({
      attribute: selectedAttribute,
      query: searchInput?.value || ""
    });
  }

  function matchesTags(gem: GemDefinition, tags: Iterable<string>): boolean {
    return [...tags].every((tag) => gem.tags.includes(tag));
  }

  function filteredGems(): GemDefinition[] {
    const gems = baseFilteredGems().filter((gem) => matchesTags(gem, selectedTags));
    const visibleGems = favoriteOnly ? favorites.getItems(gems) : gems;
    const direction = sortDirection === "asc" ? 1 : -1;
    return [...visibleGems].sort((left, right) => {
      const byName = left.name.localeCompare(right.name, "en", {
        sensitivity: "base"
      });
      const comparison = sortField === "required-level"
        ? left.requiredLevel - right.requiredLevel || byName
        : byName;
      return comparison * direction;
    });
  }

  async function chooseGem(gem: GemDefinition): Promise<void> {
    if (selectionInProgress) return;
    selectionInProgress = true;
    try {
      if (await onSelect(gem.key)) close();
    } finally {
      selectionInProgress = false;
    }
  }

  function appendDetailProperty(
    parent: ParentNode,
    label: string,
    value: string
  ): void {
    const line = doc.createElement("div");
    line.className = "poe-trade-styler-gem-detail-property";
    appendText(doc, line, "span", "poe-trade-styler-gem-detail-property-label", `${label}:`);
    appendText(doc, line, "span", "poe-trade-styler-gem-detail-property-value", value);
    parent.append(line);
  }

  function closeDetail(): boolean {
    if (!detailModal || detailModal.hidden) return false;
    detailModal.hidden = true;
    const focusTarget = detailReturnFocus;
    detailReturnFocus = null;
    focusTarget?.focus();
    return true;
  }

  function closeModal(): boolean {
    closeDetail();
    if (!modal || modal.hidden) return false;
    modal.hidden = true;
    doc.documentElement.classList.remove("poe-trade-styler-gem-modal-open");
    launcher?.setAttribute("aria-expanded", "false");
    launcher?.focus();
    return true;
  }

  function createProgressionTable(gem: GemDefinition): HTMLElement {
    const detail = getSkillGemDetail(gem);
    const section = doc.createElement("section");
    section.className = "poe-trade-styler-gem-progression";
    appendText(
      doc,
      section,
      "h3",
      "poe-trade-styler-gem-progression-title",
      "Gem level progression"
    );
    if (!detail.progression || detail.progression.rows.length === 0) {
      appendText(
        doc,
        section,
        "p",
        "poe-trade-styler-gem-progression-empty",
        "Level progression is available on the wiki page."
      );
      return section;
    }

    const scroller = doc.createElement("div");
    scroller.className = "poe-trade-styler-gem-progression-scroll";
    const table = doc.createElement("table");
    table.className = "poe-trade-styler-gem-progression-table";
    const head = doc.createElement("thead");
    const headRow = doc.createElement("tr");
    const compactLabel = (label: string): string => ({
      "Required Dexterity": "DEX",
      "Required Intelligence": "INT",
      "Required Level": "Req. Level",
      "Required Strength": "STR"
    })[label] || label;
    for (const column of detail.progression.columns) {
      const cell = doc.createElement("th");
      cell.scope = "col";
      cell.title = column.title;
      cell.textContent = compactLabel(column.label);
      headRow.append(cell);
    }
    head.append(headRow);
    const body = doc.createElement("tbody");
    for (const row of detail.progression.rows) {
      const tableRow = doc.createElement("tr");
      for (const value of row) {
        appendText(doc, tableRow, "td", "", String(value));
      }
      body.append(tableRow);
    }
    table.append(head, body);
    scroller.append(table);
    section.append(scroller);
    return section;
  }

  function createSkillTooltip(gem: GemDefinition): HTMLElement {
    const detail = getSkillGemDetail(gem);
    const tooltip = doc.createElement("article");
    tooltip.className = "poe-trade-styler-gem-detail-tooltip";

    const heading = doc.createElement("header");
    heading.className = "poe-trade-styler-gem-detail-heading";
    const icon = doc.createElement("img");
    icon.className = "poe-trade-styler-gem-detail-icon";
    icon.src = getSafeItemImageUrl(gem.icon);
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");
    appendText(doc, heading, "h3", "poe-trade-styler-gem-detail-name", gem.name);
    heading.prepend(icon);

    appendText(
      doc,
      tooltip,
      "div",
      "poe-trade-styler-gem-detail-tags",
      (detail.tags.length ? detail.tags : gem.tags).join(", ")
    );
    const properties = doc.createElement("div");
    properties.className = "poe-trade-styler-gem-detail-properties";
    for (const property of detail.properties) {
      appendDetailProperty(properties, property.label, property.value);
    }
    let requirement: HTMLDivElement | null = null;
    if (detail.requirement) {
      requirement = doc.createElement("div");
      requirement.className = "poe-trade-styler-gem-detail-requirement";
      appendText(doc, requirement, "span", "", "Requires: ");
      appendText(doc, requirement, "strong", "", detail.requirement);
    }

    const description = appendText(
      doc,
      tooltip,
      "p",
      "poe-trade-styler-gem-detail-description",
      detail.description
    );
    tooltip.append(heading);
    heading.after(
      tooltip.querySelector(".poe-trade-styler-gem-detail-tags")!,
      properties,
      ...(requirement ? [requirement] : []),
      description
    );
    for (const effect of detail.effects) {
      const section = doc.createElement("section");
      section.className = "poe-trade-styler-gem-detail-effect";
      if (effect.title) {
        appendText(doc, section, "h4", "poe-trade-styler-gem-detail-effect-title", effect.title);
      }
      for (const line of effect.lines) {
        const effectLine = appendText(
          doc,
          section,
          "div",
          "poe-trade-styler-gem-detail-effect-line",
          line
        );
        effectLine.classList.toggle("is-property", /^[^:]{1,40}:/.test(line));
      }
      tooltip.append(section);
    }
    if (detail.qualityEffects.length) {
      const quality = doc.createElement("section");
      quality.className = "poe-trade-styler-gem-detail-quality";
      appendText(
        doc,
        quality,
        "h4",
        "poe-trade-styler-gem-detail-quality-title",
        "Additional Effects From 1-20% Quality:"
      );
      for (const line of detail.qualityEffects) {
        appendText(doc, quality, "div", "poe-trade-styler-gem-detail-effect-line", line);
      }
      tooltip.append(quality);
    }
    return tooltip;
  }

  function showDetail(gem: GemDefinition, trigger: HTMLButtonElement): void {
    if (!detailModal) {
      detailModal = doc.createElement("div");
      detailModal.className = "poe-trade-styler-gem-detail-modal";
      detailModal.hidden = true;
      detailModal.setAttribute("role", "dialog");
      detailModal.setAttribute("aria-modal", "true");
      detailModal.addEventListener("click", (event) => {
        if (event.target === detailModal) closeDetail();
      });
      modal?.append(detailModal);
    }
    detailReturnFocus = trigger;
    const shell = doc.createElement("div");
    shell.className = "poe-trade-styler-gem-detail-shell";
    const top = doc.createElement("header");
    top.className = "poe-trade-styler-gem-detail-top";
    const title = appendText(
      doc,
      top,
      "h2",
      "poe-trade-styler-gem-detail-title",
      `${gem.name} skill gem`
    );
    title.id = "poe-trade-styler-gem-detail-title";
    const wiki = doc.createElement("a");
    wiki.className = "poe-trade-styler-gem-detail-wiki";
    const detail = getSkillGemDetail(gem);
    wiki.href = getWikiGemUrl(detail.wikiTitle);
    wiki.target = "_blank";
    wiki.rel = "noopener noreferrer";
    wiki.textContent = "View on PoE2 Wiki ↗";
    const closeButton = doc.createElement("button");
    closeButton.className = "poe-trade-styler-gem-detail-close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", `Close ${gem.name} skill gem details`);
    closeButton.textContent = "×";
    closeButton.addEventListener("click", closeDetail);
    top.append(wiki, closeButton);
    const content = doc.createElement("div");
    content.className = "poe-trade-styler-gem-detail-content";
    content.append(createSkillTooltip(gem), createProgressionTable(gem));
    shell.append(top, content);
    detailModal.setAttribute("aria-labelledby", title.id);
    detailModal.replaceChildren(shell);
    detailModal.hidden = false;
    closeButton.focus();
  }

  function createGemRow(gem: GemDefinition): HTMLDivElement {
    const row = doc.createElement("div");
    row.className = `poe-trade-styler-gem-item is-${
      gem.attributes.length > 1 ? "hybrid" : gem.attribute
    }`;
    row.classList.toggle("is-selected", gem.key === presetState.selectedGemKey);

    const button = doc.createElement("button");
    button.className = "poe-trade-styler-gem-item-select";
    button.type = "button";
    button.dataset.poeTradeStylerGem = gem.key;
    button.title = `Choose ${gem.name}`;

    const icon = doc.createElement("img");
    icon.className = "poe-trade-styler-gem-item-icon";
    icon.src = getSafeItemImageUrl(gem.icon);
    icon.alt = "";
    icon.loading = "lazy";
    icon.setAttribute("aria-hidden", "true");
    const detail = doc.createElement("span");
    detail.className = "poe-trade-styler-gem-item-detail";
    appendText(doc, detail, "strong", "poe-trade-styler-gem-item-name", gem.name);
    appendText(
      doc,
      detail,
      "span",
      "poe-trade-styler-gem-item-tags",
      gem.tags.join(" · ")
    );
    appendText(
      doc,
      detail,
      "span",
      "poe-trade-styler-gem-item-levels",
      `Gemcut ${gem.tier} · Player ${gem.requiredLevel}`
    );
    button.prepend(icon, detail);
    button.addEventListener("click", () => void chooseGem(gem));

    const infoButton = doc.createElement("button");
    infoButton.className = "poe-trade-styler-gem-item-source";
    infoButton.type = "button";
    infoButton.textContent = "Info";
    infoButton.title = `View skill gem details for ${gem.name}`;
    infoButton.setAttribute("aria-label", `View ${gem.name} skill gem details`);
    infoButton.addEventListener("click", () => showDetail(gem, infoButton));

    row.append(button, favorites.createButton(doc, gem), infoButton);
    return row;
  }

  function render(): void {
    if (!list || !summary) return;
    const gems = filteredGems();
    summary.textContent = `${gems.length} skill gem${gems.length === 1 ? "" : "s"}`;
    list.replaceChildren(...gems.map(createGemRow));
    list.scrollTop = 0;
    modal
      ?.querySelectorAll<HTMLButtonElement>(".poe-trade-styler-gem-attribute")
      .forEach((button) => {
        const active = button.dataset.poeTradeStylerGemAttribute === selectedAttribute;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    const allBaseGems = baseFilteredGems();
    const baseGems = favoriteOnly
      ? favorites.getItems(allBaseGems)
      : allBaseGems;
    modal
      ?.querySelectorAll<HTMLButtonElement>(
        ".poe-trade-styler-gem-tag[data-poe-trade-styler-gem-tag]"
      )
      .forEach((button) => {
        const tag = button.dataset.poeTradeStylerGemTag || "";
        const active = selectedTags.has(tag);
        const candidateTags = active
          ? selectedTags
          : new Set([...selectedTags, tag]);
        const count = baseGems.filter((gem) => matchesTags(gem, candidateTags)).length;
        button.classList.toggle("is-active", active);
        button.disabled = !active && count === 0;
        button.setAttribute("aria-pressed", String(active));
        button.setAttribute(
          "aria-label",
          `${tag}, ${count} matching gem${count === 1 ? "" : "s"}`
        );
        const countBadge = button.querySelector<HTMLElement>(
          ".poe-trade-styler-gem-tag-count"
        );
        if (countBadge) countBadge.textContent = String(count);
      });
    const favoriteFilter = modal?.querySelector<HTMLButtonElement>(
      ".poe-trade-styler-gem-favorites-filter"
    );
    if (favoriteFilter) {
      const favoriteCount = favorites.getItems(
        allBaseGems.filter((gem) => matchesTags(gem, selectedTags))
      ).length;
      favoriteFilter.classList.toggle("is-active", favoriteOnly);
      favoriteFilter.disabled = !favoriteOnly && favoriteCount === 0;
      favoriteFilter.setAttribute("aria-pressed", String(favoriteOnly));
      favoriteFilter.setAttribute(
        "aria-label",
        `Favorites, ${favoriteCount} matching gem${favoriteCount === 1 ? "" : "s"}`
      );
      const countBadge = favoriteFilter.querySelector<HTMLElement>(
        ".poe-trade-styler-gem-tag-count"
      );
      if (countBadge) countBadge.textContent = String(favoriteCount);
    }
  }

  function createAttributeFilters(): HTMLDivElement {
    const filters = doc.createElement("div");
    filters.className = "poe-trade-styler-gem-attributes";
    (["all", ...gemData.GEM_ATTRIBUTES] as AttributeFilter[]).forEach((attribute) => {
      const button = doc.createElement("button");
      button.className =
        `poe-trade-styler-gem-attribute is-${attribute}`;
      button.type = "button";
      button.dataset.poeTradeStylerGemAttribute = attribute;
      button.title = `Show ${ATTRIBUTE_LABELS[attribute].toLowerCase()} skill gems`;
      button.setAttribute("aria-label", ATTRIBUTE_LABELS[attribute]);
      const iconPath = ATTRIBUTE_ICON_PATHS[attribute];
      if (iconPath) {
        const icon = doc.createElement("img");
        icon.className = "poe-trade-styler-gem-attribute-icon is-image";
        icon.alt = "";
        icon.src = getSafeItemImageUrl(iconPath);
        icon.referrerPolicy = "no-referrer";
        icon.setAttribute("aria-hidden", "true");
        button.append(icon);
      } else {
        appendText(
          doc,
          button,
          "span",
          "poe-trade-styler-gem-attribute-icon",
          ATTRIBUTE_SHORT_LABELS[attribute]
        );
      }
      button.addEventListener("click", () => {
        selectedAttribute = attribute !== "all" && selectedAttribute === attribute
          ? "all"
          : attribute;
        render();
      });
      filters.append(button);
    });
    return filters;
  }

  function createSortControls(): HTMLDivElement {
    const controls = doc.createElement("div");
    controls.className = "poe-trade-styler-gem-sort-controls";
    const select = doc.createElement("select");
    select.className = "poe-trade-styler-gem-sort-field";
    select.setAttribute("aria-label", "Sort gems by");
    const nameOption = doc.createElement("option");
    nameOption.value = "name";
    nameOption.textContent = "Name";
    const requiredLevelOption = doc.createElement("option");
    requiredLevelOption.value = "required-level";
    requiredLevelOption.textContent = "Required level + name";
    select.append(nameOption, requiredLevelOption);
    select.value = sortField;
    select.addEventListener("change", () => {
      sortField = select.value === "required-level" ? "required-level" : "name";
      render();
    });

    const directionButton = doc.createElement("button");
    directionButton.className = "poe-trade-styler-gem-sort-direction";
    directionButton.type = "button";
    const directionIcon = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    directionIcon.classList.add("poe-trade-styler-gem-sort-direction-icon");
    directionIcon.setAttribute("viewBox", "0 0 22 20");
    directionIcon.setAttribute("aria-hidden", "true");
    const directionPath = doc.createElementNS("http://www.w3.org/2000/svg", "path");
    directionIcon.append(directionPath);
    directionButton.append(directionIcon);
    const syncDirectionButton = (): void => {
      const ascending = sortDirection === "asc";
      directionPath.setAttribute(
        "d",
        ascending
          ? "M2 4h5M2 10h8M2 16h11M17 17V3m-3 3 3-3 3 3"
          : "M2 4h11M2 10h8M2 16h5M17 3v14m-3-3 3 3 3-3"
      );
      directionButton.dataset.poeTradeStylerSortDirection = sortDirection;
      directionButton.title = ascending
        ? "Sort ascending; click for descending"
        : "Sort descending; click for ascending";
      directionButton.setAttribute(
        "aria-label",
        ascending ? "Sort ascending" : "Sort descending"
      );
      directionButton.setAttribute("aria-pressed", String(!ascending));
    };
    directionButton.addEventListener("click", () => {
      sortDirection = sortDirection === "asc" ? "desc" : "asc";
      syncDirectionButton();
      render();
    });
    syncDirectionButton();
    controls.append(select, directionButton);
    return controls;
  }

  function createTagFilters(): HTMLDivElement {
    const filters = doc.createElement("div");
    filters.className = "poe-trade-styler-gem-tags";
    filters.style.setProperty(
      "--gem-tag-row-count",
      String(Math.ceil((gemTags.length + 1) / 3))
    );
    filters.setAttribute("role", "group");
    filters.setAttribute("aria-label", "Filter by gem tags");
    const favoriteButton = doc.createElement("button");
    favoriteButton.className =
      "poe-trade-styler-gem-tag poe-trade-styler-gem-favorites-filter";
    favoriteButton.type = "button";
    const favoriteLabel = appendText(
      doc,
      favoriteButton,
      "span",
      "poe-trade-styler-gem-tag-label",
      "★ Favorites"
    );
    appendText(
      doc,
      favoriteButton,
      "span",
      "poe-trade-styler-gem-tag-count",
      "0"
    );
    favoriteLabel.setAttribute("aria-hidden", "true");
    favoriteButton.addEventListener("click", () => {
      favoriteOnly = !favoriteOnly;
      render();
    });
    filters.append(favoriteButton);
    for (const tag of gemTags) {
      const button = doc.createElement("button");
      button.className = "poe-trade-styler-gem-tag";
      button.type = "button";
      button.dataset.poeTradeStylerGemTag = tag;
      const countBadge = appendText(
        doc,
        button,
        "span",
        "poe-trade-styler-gem-tag-label",
        tag
      );
      appendText(
        doc,
        button,
        "span",
        "poe-trade-styler-gem-tag-count",
        "0"
      );
      countBadge.setAttribute("aria-hidden", "true");
      button.addEventListener("click", () => {
        if (selectedTags.has(tag)) selectedTags.delete(tag);
        else selectedTags.add(tag);
        render();
      });
      filters.append(button);
    }
    return filters;
  }

  function createTagSidebar(): HTMLElement {
    const sidebar = doc.createElement("aside");
    sidebar.className = "poe-trade-styler-gem-tag-sidebar";
    sidebar.append(createTagFilters());
    return sidebar;
  }

  function createModal(): HTMLDivElement {
    const { overlay, dialog, closeButton } = createModalFrame(doc, {
      kind: "gems",
      overlayId: "poe-trade-styler-gem-modal",
      dialogClassName: "poe-trade-styler-gem-dialog",
      headerClassName: "poe-trade-styler-gem-top",
      titleClassName: "poe-trade-styler-gem-title",
      closeButtonClassName: "poe-trade-styler-gem-close",
      titleId: "poe-trade-styler-gem-title",
      titleText: "Skill Gem Presets",
      closeLabel: "Close Skill Gem Presets"
    });
    closeButton.addEventListener("click", close);

    searchInput = doc.createElement("input");
    searchInput.className = "poe-trade-styler-gem-search";
    searchInput.type = "search";
    searchInput.placeholder = "Search skill gems or tags…";
    searchInput.setAttribute("aria-label", "Search skill gems or tags");
    searchInput.addEventListener("input", render);

    const catalogueHeader = doc.createElement("header");
    catalogueHeader.className = "poe-trade-styler-gem-catalogue-header";
    catalogueHeader.append(
      searchInput,
      createSortControls(),
      createAttributeFilters()
    );
    summary = appendText(
      doc,
      catalogueHeader,
      "span",
      "poe-trade-styler-gem-summary",
      ""
    );
    list = doc.createElement("div");
    list.className = "poe-trade-styler-gem-items";
    const catalogue = doc.createElement("section");
    catalogue.className = "poe-trade-styler-gem-catalogue";
    catalogue.append(list);
    const content = doc.createElement("div");
    content.className = "poe-trade-styler-gem-content";
    content.append(createTagSidebar(), catalogue);
    dialog.append(catalogueHeader, content);
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) close();
    });
    doc.body.append(overlay);
    render();
    return overlay;
  }

  function open(): void {
    if (!modal) modal = createModal();
    render();
    modal.hidden = false;
    doc.documentElement.classList.add("poe-trade-styler-gem-modal-open");
    launcher?.setAttribute("aria-expanded", "true");
    searchInput?.focus();
  }

  function close(): boolean {
    if (closeDetail()) return true;
    return closeModal();
  }

  async function onLauncherClick(event: Event): Promise<void> {
    const button = event.target instanceof Element
      ? event.target.closest<HTMLButtonElement>(
          '[data-poe-trade-styler-preset="gems"]'
        )
      : null;
    if (!button || launcherToggleInProgress) return;

    event.preventDefault();
    event.stopPropagation();
    launcher = button;

    if (!modal || modal.hidden) {
      open();
      return;
    }
    if (presetState.activePreset !== "gems") {
      open();
      return;
    }
    launcherToggleInProgress = true;
    closeModal();
    try {
      await onDeactivate();
    } finally {
      launcherToggleInProgress = false;
      button.classList.remove("is-active");
      button.setAttribute("aria-pressed", "false");
    }
  }

  function createLauncher(): HTMLButtonElement {
    const button = doc.createElement("button");
    button.className =
      "poe-trade-styler-preset poe-trade-styler-gem-preset-button";
    button.type = "button";
    button.dataset.poeTradeStylerPreset = "gems";
    button.setAttribute("aria-label", "Open Skill Gem Presets");
    button.setAttribute("aria-haspopup", "dialog");
    button.setAttribute("aria-expanded", "false");
    button.title = "Open Skill Gem Presets";
    const icon = doc.createElement("img");
    icon.className = "poe-trade-styler-gem-preset-icon";
    icon.src = getSafeItemImageUrl(gemData.GEM_GENERAL_ICON);
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");
    button.append(icon);
    return button;
  }

  function removeLauncher(): void {
    launcher?.closest(".poe-trade-styler-gem-navigation-item")?.remove();
    launcher = null;
    closeModal();
  }

  function decorate(): void {
    if (!isPoe2Page()) {
      removeLauncher();
      return;
    }
    const flaskButton = doc.querySelector('[data-poe-trade-styler-preset="flasks"]');
    const previousItem = flaskButton?.closest(".poe-trade-styler-preset-navigation-item");
    if (!previousItem) return;
    launcher =
      doc.querySelector<HTMLButtonElement>('[data-poe-trade-styler-preset="gems"]') ||
      launcher ||
      createLauncher();
    const active = presetState.activePreset === "gems";
    launcher.classList.toggle("is-active", active);
    launcher.setAttribute("aria-pressed", String(active));
    launcher.title = active
      ? "Open Skill Gem Presets (the selected gem preset is active)"
      : "Open Skill Gem Presets";
    let item = launcher.closest(".poe-trade-styler-gem-navigation-item");
    if (!item) {
      item = doc.createElement(previousItem.tagName.toLowerCase() === "li" ? "li" : "span");
      item.className =
        "poe-trade-styler-preset-navigation-item poe-trade-styler-gem-navigation-item";
      item.append(launcher);
    }
    if (previousItem.nextElementSibling !== item) {
      previousItem.insertAdjacentElement("afterend", item);
    }
    if (!modal) modal = createModal();
  }

  const launcherClickTarget: EventTarget = doc.defaultView ?? doc;
  launcherClickTarget.addEventListener("click", onLauncherClick, true);

  return {
    close,
    decorate,
    destroy() {
      launcherClickTarget.removeEventListener("click", onLauncherClick, true);
      removeLauncher();
      modal?.remove();
      modal = null;
      detailModal = null;
      detailReturnFocus = null;
      list = null;
      summary = null;
      searchInput = null;
      doc.documentElement.classList.remove("poe-trade-styler-gem-modal-open");
    }
  };
}

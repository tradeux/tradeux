(function exposeStyler(root, factory) {
  const styler = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = styler;
  }

  root.PoeTradeStyler = styler;
})(typeof globalThis !== "undefined" ? globalThis : this, function createStyler() {
  "use strict";

  const TWO_COLUMN_ENABLED_CLASS = "poe-trade-styler-two-column-enabled";
  const BACKGROUND_DISABLED_CLASS = "poe-trade-styler-background-disabled";
  const FULL_WIDTH_ENABLED_CLASS = "poe-trade-styler-full-width-enabled";
  const RIGHT_SPACE_ENABLED_CLASS = "poe-trade-styler-right-space-enabled";
  const STICKY_SEARCH_ENABLED_CLASS =
    "poe-trade-styler-sticky-search-enabled";
  const CATEGORY_LABELS = {
    "armour.chest": "Body Armour",
    "armour.helmet": "Helmet",
    "armour.gloves": "Gloves",
    "armour.boots": "Boots",
    "armour.shield": "Shield",
    "accessory.amulet": "Amulet",
    "accessory.belt": "Belt",
    "accessory.ring": "Ring"
  };
  const FILTER_LABELS = {
    ar: "Armour",
    es: "Energy Shield",
    ev: "Evasion",
    lvl: "Level"
  };
  const QUICK_BOUND_FILTERS = Object.freeze([
    Object.freeze({
      key: "max-level-requirement",
      label: "Level",
      icon: "assets/ui/user-level-requirement.png",
      tone: "level",
      shortLabel: "Maximum level requirement",
      bound: "max",
      min: 1,
      max: 100
    }),
    Object.freeze({
      key: "max-strength-requirement",
      label: "Strength",
      icon: "assets/item-icons/quick-filter-strength.webp",
      tone: "strength",
      shortLabel: "Maximum strength requirement",
      bound: "max",
      min: 1
    }),
    Object.freeze({
      key: "max-intelligence-requirement",
      label: "Intelligence",
      icon: "assets/item-icons/quick-filter-intelligence.webp",
      tone: "intelligence",
      shortLabel: "Maximum intelligence requirement",
      bound: "max",
      min: 1
    }),
    Object.freeze({
      key: "max-dexterity-requirement",
      label: "Dexterity",
      icon: "assets/item-icons/quick-filter-dexterity.webp",
      tone: "dexterity",
      shortLabel: "Maximum dexterity requirement",
      bound: "max",
      min: 1
    }),
    Object.freeze({
      key: "min-item-level",
      label: "Item Level",
      icon: "🏷️",
      tone: "item-level",
      shortLabel: "Minimum item level",
      bound: "min",
      min: 1
    })
  ]);

  function titleCase(value) {
    return String(value || "")
      .replace(/[._-]+/g, " ")
      .replace(/\b\w/g, (character) => character.toUpperCase())
      .trim();
  }

  function getSearchRequestTitle(query, fallbackText = "Advanced search") {
    const namedTitle = [query?.name, query?.type]
      .filter((part) => typeof part === "string" && part.trim())
      .join(" ")
      .trim();

    if (namedTitle) {
      return namedTitle;
    }

    const typeFilters = query?.filters?.type_filters?.filters || {};
    const rarity = titleCase(typeFilters.rarity?.option);
    const categoryOption = typeFilters.category?.option;
    const category = categoryOption
      ? CATEGORY_LABELS[categoryOption] ||
        titleCase(categoryOption.split(".").pop())
      : "";

    if (rarity && category) {
      return `${rarity} ${category}`;
    }

    if (category) {
      return category;
    }

    if (rarity) {
      return `${rarity} Items`;
    }

    return fallbackText || "Advanced search";
  }

  function getFilterLabel(key) {
    return FILTER_LABELS[key] || titleCase(key);
  }

  function getNextQuickBooleanState(state) {
    const states = ["any", "yes", "no"];
    const index = states.indexOf(String(state || "").toLowerCase());
    return states[(index + 1 + states.length) % states.length];
  }

  function normalizeQuickBoundValue(definition, value) {
    if (value === "") {
      return "";
    }

    const numericValue = Math.trunc(Number(value));

    if (!Number.isFinite(numericValue)) {
      return "";
    }

    return String(
      Math.min(
        definition.max ?? Number.MAX_SAFE_INTEGER,
        Math.max(definition.min ?? 0, numericValue)
      )
    );
  }

  function getAvailableDropdownHeight(
    inputBottom,
    controlsTop,
    quickFiltersTop,
    gap = 8
  ) {
    const boundary = Number.isFinite(quickFiltersTop)
      ? quickFiltersTop
      : controlsTop;

    if (!Number.isFinite(inputBottom) || !Number.isFinite(boundary)) {
      return 0;
    }

    return Math.max(0, Math.floor(boundary - inputBottom - gap));
  }

  function getTradeGameKey(pathname) {
    if (/^\/trade2(?:\/|$)/.test(pathname || "")) {
      return "poe2";
    }

    return null;
  }

  function getStatGroupTypeFromText(value) {
    const text = String(value || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

    if (/\b(?:weighted\s+)?sum\s*(?:v\s*)?2\b/.test(text)) {
      return "sum2";
    }

    if (/\b(?:weighted\s+)?sum\b/.test(text)) {
      return "sum";
    }

    if (/\bnot\b/.test(text)) {
      return "not";
    }

    if (/\band\b/.test(text)) {
      return "and";
    }

    return null;
  }

  function getModifierStatTemplate(value) {
    return String(value || "")
      .replace(/\u00a0/g, " ")
      .replace(/[+-]?\d+(?:[.,]\d+)?/g, (number) =>
        number.startsWith("+") ? "+#" : number.startsWith("-") ? "-#" : "#"
      )
      .replace(/\s+/g, " ")
      .trim();
  }

  function normalizeModifierStatText(value) {
    return getModifierStatTemplate(value).toLowerCase();
  }

  function getItemModifierStatId(dataField) {
    const value = String(dataField || "").trim();
    return value.startsWith("stat.") ? value.slice(5) : "";
  }

  function indexTradeStats(payload) {
    const index = Object.create(null);
    const groups = Array.isArray(payload?.result) ? payload.result : [];

    groups.forEach((group) => {
      const entries = Array.isArray(group?.entries) ? group.entries : [];

      entries.forEach((entry) => {
        if (
          entry &&
          typeof entry.id === "string" &&
          typeof entry.text === "string"
        ) {
          index[entry.id] = {
            id: entry.id,
            text: entry.text,
            type: typeof entry.type === "string" ? entry.type : ""
          };
        }
      });
    });

    return index;
  }

  function getCorruptionStatSearchQuery(label) {
    const source = String(label || "")
      .replace(/\u00a0/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const buildQuery = (value) => String(value || "")
      .replace(/[#%+]/g, " ")
      .replace(/^\s*adds?\s+(?:to\s+)+/i, "")
      .replace(/^\s*causes?\s+/i, "")
      .replace(/^\s*grants?\s+/i, "")
      .replace(/^\s*to\s+/i, "")
      .replace(/^\s*chance\s+to\s+/i, "")
      .replace(/\s+with\s+this\s+weapon\s*$/i, "")
      .replace(/\s+/g, " ")
      .trim();
    const query = buildQuery(source);
    const preferredQuery = /^(?:increased|reduced)\s+damage$/i.test(query)
      ? query
      : query.replace(/^(?:increased|reduced)\s+/i, "");
    const normalizedSource = source.toLowerCase();

    if (normalizedSource.includes(preferredQuery.toLowerCase())) {
      return preferredQuery;
    }

    // Vue Multiselect uses a contiguous substring search. Removing a numeric
    // placeholder from the middle of a label can therefore make an otherwise
    // exact query impossible to render (for example, "Bow Attacks fire #
    // additional Arrows"). Use the longest useful fragment on either side of
    // a placeholder so the native option is guaranteed to enter the DOM.
    const fragments = source
      .split(/[#%+]+/)
      .map(buildQuery)
      .map((fragment) =>
        /^(?:increased|reduced)\s+damage$/i.test(fragment)
          ? fragment
          : fragment.replace(/^(?:increased|reduced)\s+/i, "")
      )
      .filter(
        (fragment) =>
          fragment && normalizedSource.includes(fragment.toLowerCase())
      )
      .sort((left, right) => right.length - left.length);

    return fragments[0] || preferredQuery;
  }

  function isTradeSearchPath(pathname) {
    return /^\/trade2\/search\/[^/]+\/[^/?#]+/.test(pathname || "");
  }

  function formatFilterDescription(key, value) {
    if (value === null || value === undefined || value.disabled) {
      return "";
    }

    const label = getFilterLabel(key);

    if (typeof value !== "object") {
      return `${label}: ${titleCase(value)}`;
    }

    const hasMin = value.min !== null && value.min !== undefined;
    const hasMax = value.max !== null && value.max !== undefined;

    if (hasMin && hasMax) {
      return value.min === value.max
        ? `${label} ${value.min}`
        : `${label} ${value.min}-${value.max}`;
    }

    if (hasMin) {
      return `${label} ${value.min}+`;
    }

    if (hasMax) {
      return `${label} ≤ ${value.max}`;
    }

    if (value.option !== null && value.option !== undefined) {
      const option = String(value.option).toLowerCase();

      if (option === "true" || option === "yes") {
        return label;
      }

      if (option === "false" || option === "no") {
        return `Not ${label}`;
      }

      const optionLabel =
        key === "category"
          ? CATEGORY_LABELS[value.option] || titleCase(value.option)
          : titleCase(value.option);
      return `${label}: ${optionLabel}`;
    }

    return label;
  }

  function setTwoColumnEnabled(documentRoot, enabled) {
    documentRoot.documentElement.classList.toggle(
      TWO_COLUMN_ENABLED_CLASS,
      Boolean(enabled)
    );
  }

  function setBackgroundDisabled(documentRoot, disabled) {
    documentRoot.documentElement.classList.toggle(
      BACKGROUND_DISABLED_CLASS,
      Boolean(disabled)
    );
  }

  function setFullWidthEnabled(documentRoot, enabled) {
    documentRoot.documentElement.classList.toggle(
      FULL_WIDTH_ENABLED_CLASS,
      Boolean(enabled)
    );
  }

  function setRightSpaceEnabled(documentRoot, enabled) {
    documentRoot.documentElement.classList.toggle(
      RIGHT_SPACE_ENABLED_CLASS,
      Boolean(enabled)
    );
  }

  function setStickySearchEnabled(documentRoot, enabled) {
    documentRoot.documentElement.classList.toggle(
      STICKY_SEARCH_ENABLED_CLASS,
      Boolean(enabled)
    );
  }

  return {
    BACKGROUND_DISABLED_CLASS,
    FULL_WIDTH_ENABLED_CLASS,
    RIGHT_SPACE_ENABLED_CLASS,
    QUICK_BOUND_FILTERS,
    STICKY_SEARCH_ENABLED_CLASS,
    TWO_COLUMN_ENABLED_CLASS,
    formatFilterDescription,
    getAvailableDropdownHeight,
    getCorruptionStatSearchQuery,
    getItemModifierStatId,
    getModifierStatTemplate,
    getNextQuickBooleanState,
    getSearchRequestTitle,
    getStatGroupTypeFromText,
    getTradeGameKey,
    isTradeSearchPath,
    indexTradeStats,
    normalizeModifierStatText,
    normalizeQuickBoundValue,
    setBackgroundDisabled,
    setFullWidthEnabled,
    setRightSpaceEnabled,
    setStickySearchEnabled,
    setTwoColumnEnabled
  };
});

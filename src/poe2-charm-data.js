(function exposePoe2CharmData(root, factory) {
  const data = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }

  root.Poe2CharmData = data;
})(typeof globalThis !== "undefined" ? globalThis : this, function createPoe2CharmData() {
  "use strict";

  const BUNDLED_DATA = globalThis.Poe2BundledIconData ||
    (typeof require === "function" ? require("./poe2-bundled-icon-data.js") : {});
  const BUNDLED_ICONS = BUNDLED_DATA.mappings?.charms || {};
  const BUNDLED_FALLBACK = BUNDLED_DATA.fallbackPath || "assets/item-icons/fallback.webp";

  // Base membership and affix classes were verified on 2026-08-30. Labels and
  // stable identities were then
  // reconciled with the official trade2 item/stat catalogues and live Ruby
  // Charm listings. Cleansing Charm is intentionally omitted: it remains in
  // historical crafting data but is absent from the current trade item list.
  const CHARM_STAT_GROUP_ORDER = [
    "explicit",
    "desecrated",
    "fractured",
    "crafted",
    "sanctified",
    "unrevealed"
  ];
  const CHARM_VARIANT_TYPES = new Set([
    "crafted",
    "desecrated",
    "fractured",
    "sanctified",
    "unrevealed"
  ]);

  const CHARM_BASES = Object.freeze([
    ["ruby", "Ruby Charm", "Used when you take Fire damage from a Hit"],
    ["sapphire", "Sapphire Charm", "Used when you take Cold damage from a Hit"],
    ["topaz", "Topaz Charm", "Used when you take Lightning damage from a Hit"],
    ["stone", "Stone Charm", "Used when you become Stunned"],
    ["silver", "Silver Charm", "Used when you are affected by a Slow"],
    ["thawing", "Thawing Charm", "Used when you become Frozen"],
    ["staunching", "Staunching Charm", "Used when you start Bleeding"],
    ["antidote", "Antidote Charm", "Used when you become Poisoned"],
    ["dousing", "Dousing Charm", "Used when you become Ignited"],
    ["grounding", "Grounding Charm", "Used when you become Shocked"],
    ["amethyst", "Amethyst Charm", "Used when you take Chaos damage from a Hit"],
    ["golden", "Golden Charm", "Used when you kill a Rare or Unique enemy"]
  ].map(([key, searchText, baseStat]) =>
    Object.freeze({
      baseStat,
      key,
      displayName: searchText,
      searchText,
      icon: BUNDLED_ICONS[key] || BUNDLED_FALLBACK
    })
  ));
  const CHARM_BASE_BY_KEY = new Map(
    CHARM_BASES.map((definition) => [definition.key, definition])
  );

  const CHARM_STATS = Object.freeze([
    ["explicit.stat_2541588185", "#% increased Duration (Charm)", "prefix"],
    ["explicit.stat_2676834156", "Also grants # Guard", "prefix"],
    ["explicit.stat_2365392475", "Recover # Life when Used", "prefix"],
    ["explicit.stat_1120862500", "Recover # Mana when Used", "prefix"],
    ["explicit.stat_828533480", "#% Chance to gain a Charge when you kill an enemy", "suffix"],
    ["explicit.stat_1366840608", "#% increased Charges", "suffix"],
    ["explicit.stat_3196823591", "#% increased Charges gained", "suffix"],
    ["explicit.stat_388617051", "#% increased Charges per use", "suffix"],
    ["explicit.stat_1873752457", "Gains # Charges per Second", "suffix"]
  ].map(([id, text, affix]) =>
    Object.freeze({ id, text, type: "explicit", affix })
  ));
  const CHARM_STATS_BY_ID = new Map(
    CHARM_STATS.map((definition) => [definition.id, definition])
  );

  // Current Vaal data has no corruption-enchantment pool assigned to the
  // Charms item class. Keep this explicit so future additions remain
  // data-backed instead of being inferred from unrelated Charm-themed stats.
  const CHARM_CORRUPTION_STATS = Object.freeze([]);

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function canonicalStatId(id) {
    const value = String(id || "");
    const numericStat = value.match(/(?:^|\.)(stat_\d+)(?:$|\|)/);
    return numericStat ? `explicit.${numericStat[1]}` : value.replace(/^stat\./, "");
  }

  function canonicalStatType(type) {
    const normalizedType = normalize(type || "explicit");
    return CHARM_VARIANT_TYPES.has(normalizedType)
      ? "explicit"
      : normalizedType;
  }

  function getCharmBase(baseKey) {
    return CHARM_BASE_BY_KEY.get(normalize(baseKey)) || null;
  }

  function isCharmStat({ id, label, text, type } = {}) {
    if (id) {
      return CHARM_STATS_BY_ID.has(canonicalStatId(id));
    }

    const targetType = canonicalStatType(type);
    const targetText = normalize(label || text);
    return CHARM_STATS.some(
      (definition) =>
        canonicalStatType(definition.type) === targetType &&
        normalize(definition.text) === targetText
    );
  }

  function getCharmStatOptions(baseKey, catalogEntries = []) {
    if (!getCharmBase(baseKey)) {
      return [];
    }

    const options = new Map();
    const addOption = (entry) => {
      if (!entry || !isCharmStat(entry)) return;

      const id = String(entry.id || "").replace(/^stat\./, "");
      const text = String(entry.text || entry.label || "")
        .replace(/\s+/g, " ")
        .trim();
      const type = normalize(entry.type || id.split(".")[0] || "explicit");
      const fallback = id
        ? CHARM_STATS_BY_ID.get(canonicalStatId(id))
        : CHARM_STATS.find(
            (definition) => normalize(definition.text) === normalize(text)
          );

      if (!text) return;

      const key = id || `${type}::${normalize(text)}`;
      if (!options.has(key)) {
        options.set(key, {
          id,
          text,
          type,
          affix: normalize(entry.affix || fallback?.affix)
        });
      }
    };

    (Array.isArray(catalogEntries) ? catalogEntries : []).forEach(addOption);
    CHARM_STATS.forEach(addOption);

    const groupRank = (type) => {
      const rank = CHARM_STAT_GROUP_ORDER.indexOf(type);
      return rank < 0 ? CHARM_STAT_GROUP_ORDER.length : rank;
    };
    const sortText = (text) =>
      text.normalize("NFKD").replace(/[^\p{L}\p{N}]+/gu, " ").trim();

    return [...options.values()].sort(
      (left, right) =>
        groupRank(left.type) - groupRank(right.type) ||
        left.type.localeCompare(right.type, undefined, { sensitivity: "base" }) ||
        sortText(left.text).localeCompare(sortText(right.text), undefined, {
          numeric: true,
          sensitivity: "base"
        }) ||
        left.text.localeCompare(right.text, undefined, { sensitivity: "base" }) ||
        left.id.localeCompare(right.id)
    );
  }

  return {
    CHARM_BASES,
    CHARM_CORRUPTION_STATS,
    CHARM_GENERAL_ICON: CHARM_BASES[0]?.icon || "",
    CHARM_STATS,
    CHARM_STAT_GROUP_ORDER,
    canonicalStatId,
    canonicalStatType,
    getCharmBase,
    getCharmStatOptions,
    isCharmStat,
    normalize
  };
});

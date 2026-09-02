(function exposePoe2FlaskData(root, factory) {
  const data = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }

  root.Poe2FlaskData = data;
})(typeof globalThis !== "undefined" ? globalThis : this, function createPoe2FlaskData() {
  "use strict";

  const BUNDLED_DATA = globalThis.Poe2BundledIconData ||
    (typeof require === "function" ? require("./poe2-bundled-icon-data.js") : {});
  const BUNDLED_ICONS = BUNDLED_DATA.mappings?.flasks || {};
  const BUNDLED_FALLBACK = BUNDLED_DATA.fallbackPath || "assets/item-icons/fallback.webp";

  // Bases, required levels, icons, affix membership, and affix classes were
  // verified against the source data on 2026-08-30. Base names and
  // stable stat identities were reconciled with the official trade2 item,
  // filter, and stat catalogues.
  const FLASK_STAT_GROUP_ORDER = [
    "explicit",
    "desecrated",
    "fractured",
    "crafted",
    "sanctified",
    "unrevealed"
  ];
  const FLASK_VARIANT_TYPES = new Set([
    "crafted",
    "desecrated",
    "fractured",
    "sanctified",
    "unrevealed"
  ]);
  const BASE_TIERS = [
    ["ultimate", "Ultimate", 60],
    ["transcendent", "Transcendent", 50],
    ["gargantuan", "Gargantuan", 40],
    ["colossal", "Colossal", 30],
    ["giant", "Giant", 23],
    ["grand", "Grand", 16],
    ["greater", "Greater", 10],
    ["medium", "Medium", 4],
    ["lesser", "Lesser", 1]
  ];

  // Interleave Life and Mana so the two-column menu renders matched tiers on
  // each row while preserving the requested high-to-low ordering.
  const FLASK_BASES = Object.freeze(BASE_TIERS.flatMap(
    ([tierKey, tierName, requiredLevel]) =>
      ["life", "mana"].map((kind) => {
        const kindName = kind === "life" ? "Life" : "Mana";
        const searchText = `${tierName} ${kindName} Flask`;
        return Object.freeze({
          displayName: searchText,
          icon: BUNDLED_ICONS[`${tierKey}-${kind}`] || BUNDLED_FALLBACK,
          key: `${tierKey}-${kind}`,
          kind,
          requiredLevel,
          searchText
        });
      })
  ));
  const FLASK_BASE_BY_KEY = new Map(
    FLASK_BASES.map((definition) => [definition.key, definition])
  );

  const FLASK_STATS = Object.freeze([
    ["explicit.stat_700317374", "#% increased Amount Recovered", "prefix", "both"],
    ["explicit.stat_173226756", "#% increased Recovery rate", "prefix", "both"],
    ["explicit.stat_2503377690", "#% of Recovery applied Instantly", "prefix", "both"],
    ["explicit.stat_1526933524", "Instant Recovery", "prefix", "both"],
    ["explicit.stat_1261982764", "#% increased Life Recovered", "prefix", "life"],
    ["explicit.stat_886931978", "#% more Recovery if used while on Low Life", "prefix", "life"],
    ["explicit.stat_2416869319", "Grants #% of Life Recovery to Minions", "prefix", "life"],
    ["explicit.stat_1811130680", "#% increased Mana Recovered", "prefix", "mana"],
    ["explicit.stat_3276224428", "#% more Recovery if used while on Low Mana", "prefix", "mana"],
    ["explicit.stat_828533480", "#% Chance to gain a Charge when you kill an enemy", "suffix", "both"],
    ["explicit.stat_1366840608", "#% increased Charges", "suffix", "both"],
    ["explicit.stat_3196823591", "#% increased Charges gained", "suffix", "both"],
    ["explicit.stat_388617051", "#% increased Charges per use", "suffix", "both"],
    ["explicit.stat_1873752457", "Gains # Charges per Second", "suffix", "both"]
  ].map(([id, text, affix, kind]) =>
    Object.freeze({ id, text, type: "explicit", affix, kind })
  ));
  const FLASK_STATS_BY_ID = new Map(
    FLASK_STATS.map((definition) => [definition.id, definition])
  );
  const FLASK_CORRUPTION_STATS = Object.freeze([]);

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
    return FLASK_VARIANT_TYPES.has(normalizedType) ? "explicit" : normalizedType;
  }

  function getFlaskBase(baseKey) {
    return FLASK_BASE_BY_KEY.get(normalize(baseKey)) || null;
  }

  function isFlaskStat(entry = {}, kind = "") {
    const definition = entry.id
      ? FLASK_STATS_BY_ID.get(canonicalStatId(entry.id))
      : FLASK_STATS.find(
          (candidate) =>
            canonicalStatType(candidate.type) === canonicalStatType(entry.type) &&
            normalize(candidate.text) === normalize(entry.label || entry.text)
        );
    return Boolean(
      definition && (definition.kind === "both" || definition.kind === kind)
    );
  }

  function getFlaskStatOptions(baseKey, catalogEntries = []) {
    const base = getFlaskBase(baseKey);
    if (!base) return [];

    const options = new Map();
    const addOption = (entry) => {
      if (!entry || !isFlaskStat(entry, base.kind)) return;
      const id = String(entry.id || "").replace(/^stat\./, "");
      const text = String(entry.text || entry.label || "").replace(/\s+/g, " ").trim();
      const type = normalize(entry.type || id.split(".")[0] || "explicit");
      const fallback = id
        ? FLASK_STATS_BY_ID.get(canonicalStatId(id))
        : FLASK_STATS.find((definition) => normalize(definition.text) === normalize(text));
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
    FLASK_STATS.forEach(addOption);

    const groupRank = (type) => {
      const rank = FLASK_STAT_GROUP_ORDER.indexOf(type);
      return rank < 0 ? FLASK_STAT_GROUP_ORDER.length : rank;
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
        left.id.localeCompare(right.id)
    );
  }

  return {
    FLASK_BASES,
    FLASK_CORRUPTION_STATS,
    FLASK_GENERAL_ICON: FLASK_BASES[0]?.icon || "",
    FLASK_STATS,
    FLASK_STAT_GROUP_ORDER,
    canonicalStatId,
    canonicalStatType,
    getFlaskBase,
    getFlaskStatOptions,
    isFlaskStat,
    normalize
  };
});

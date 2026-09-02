(function exposePoe2WaystoneData(root, factory) {
  const data = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }

  root.Poe2WaystoneData = data;
})(typeof globalThis !== "undefined" ? globalThis : this, function createPoe2WaystoneData() {
  "use strict";

  // Verified against the official PoE 2 trade stat catalogue and Craft of
  // Exile's Top Tier Waystone affixes on 2026-08-29. Keep legacy searchable
  // modifiers because existing Waystones can remain listed after pool changes.
  const WAYSTONE_TIER_ICONS = Object.freeze({
    1: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwMSIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/d36b6409e3/EndgameMap1.png",
    2: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwMiIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/4ac71eea17/EndgameMap2.png",
    3: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwMyIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/4257e8e4cd/EndgameMap3.png",
    4: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwNCIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/5462dc78bb/EndgameMap4.png",
    5: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwNSIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/f8cd6b1b86/EndgameMap5.png",
    6: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwNiIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/6150ee81f7/EndgameMap6.png",
    7: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwNyIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/5687c12be9/EndgameMap7.png",
    8: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwOCIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/8a3fc85d64/EndgameMap8.png",
    9: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwOSIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/24a49a7f09/EndgameMap9.png",
    10: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwMTAiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/ce426a3feb/EndgameMap10.png",
    11: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwMTEiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/3cbc9f6a21/EndgameMap11.png",
    12: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwMTIiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/2729435b50/EndgameMap12.png",
    13: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwMTMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/543471526d/EndgameMap13.png",
    14: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwMTQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIiwibWQiOnRydWV9XQ/00bfecd213/EndgameMap14.png",
    15: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwMTUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/17149586aa/EndgameMap15.png",
    16: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9FbmRnYW1lTWFwcy9FbmRnYW1lTWFwMTYiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwicmVhbG0iOiJwb2UyIn1d/c0f4423d40/EndgameMap16.png"
  });
  const WAYSTONE_TIERS = Object.freeze(
    Array.from({ length: 16 }, (_, index) => {
      const tier = index + 1;
      const color =
        tier <= 5 ? "white" : tier <= 10 ? "yellow" : tier <= 15 ? "red" : "dark-red";

      return Object.freeze({
        tier,
        icon: WAYSTONE_TIER_ICONS[tier],
        color,
        searchText: `Waystone (Tier ${tier})`
      });
    })
  );
  const WAYSTONE_TIER_15_ICON = WAYSTONE_TIERS[14].icon;
  // The reviewed top-tier Waystone pool lists the first 24 entries below
  // as prefixes. The remaining difficulty modifiers are suffixes. Keep the
  // split explicit so every compact preset row can display its affix class.
  const WAYSTONE_PREFIX_STAT_COUNT = 24;
  const WAYSTONE_STATS = [
    ["explicit.stat_2898517796", "#% increased amount of Magic Chests"],
    ["explicit.stat_798469000", "#% increased amount of Rare Chests"],
    ["explicit.stat_57434274", "#% increased Experience gain"],
    ["explicit.stat_1133965702", "#% increased Gold found in this Area"],
    ["explicit.stat_3873704640", "Map has #% increased Magic Monsters"],
    ["explicit.stat_1714706956", "#% increased Magic Pack Size"],
    ["explicit.stat_2624927319", "#% increased number of Monster Packs"],
    ["explicit.stat_3793155082", "Map has #% increased number of Rare Monsters"],
    ["explicit.stat_2017682521", "#% increased Pack Size in Map"],
    ["explicit.stat_2390685262", "#% increased Quantity of Items found in Map"],
    ["explicit.stat_2306002879", "#% increased Rarity of Items found in Map"],
    ["explicit.stat_3757259819", "Area contains # additional packs of Beasts"],
    ["explicit.stat_3309089125", "Area contains # additional packs of Bramble Monsters"],
    ["explicit.stat_1436812886", "Area contains # additional packs of Ezomyte Monsters"],
    ["explicit.stat_4130878258", "Area contains # additional packs of Faridun Monsters"],
    ["explicit.stat_2949706590", "Area contains # additional packs of Iron Guards"],
    ["explicit.stat_3592067990", "Area contains # additional packs of Plagued Monsters"],
    ["explicit.stat_1689473577", "Area contains # additional packs of Transcended Monsters"],
    ["explicit.stat_240445958", "Area contains # additional packs of Undead"],
    ["explicit.stat_4181857719", "Area contains # additional packs of Vaal Monsters"],
    ["explicit.stat_395808938", "Area contains an additional Essence"],
    ["explicit.stat_1468737867", "Area contains an additional Shrine"],
    ["explicit.stat_3240183538", "Area contains an additional Strongbox"],
    ["explicit.stat_2550456553", "Rare Monsters have # additional Modifier"],
    ["explicit.stat_1054098949", "+#% Monster Elemental Resistances"],
    ["explicit.stat_115425161", "Monsters have #% increased Stun Buildup"],
    ["explicit.stat_133340941", "Area has patches of Ignited Ground"],
    ["explicit.stat_1588049749", "Monsters have #% increased Accuracy Rating"],
    ["explicit.stat_1629357380", "Players are periodically Cursed with Temporal Chains"],
    ["explicit.stat_1879340377", "Monsters Break Armour equal to #% of Physical Damage dealt"],
    ["explicit.stat_1890519597", "#% increased Monster Damage"],
    ["explicit.stat_1898978455", "Monster Damage Penetrates #% Elemental Resistances"],
    ["explicit.stat_1994551050", "Monsters have #% increased Ailment Threshold"],
    ["explicit.stat_2029171424", "Players are periodically Cursed with Enfeeble"],
    ["explicit.stat_211727", "Monsters deal #% of Damage as Extra Cold"],
    ["explicit.stat_2200661314", "Monsters deal #% of Damage as Extra Chaos"],
    ["explicit.stat_2506820610", "Monsters have #% chance to inflict Bleeding on Hit"],
    ["explicit.stat_2539290279", "Monsters are Armoured"],
    ["explicit.stat_2549889921", "Players gain #% reduced Flask Charges"],
    ["explicit.stat_2570249991", "Monsters are Evasive"],
    ["explicit.stat_2753083623", "Monsters have #% increased Critical Hit Chance"],
    ["explicit.stat_2887760183", "Monsters gain #% of maximum Life as Extra maximum Energy Shield"],
    ["explicit.stat_3376488707", "#% maximum Player Resistances"],
    ["explicit.stat_337935900", "Monsters take #% reduced Extra Damage from Critical Hits"],
    ["explicit.stat_3477720557", "Area has patches of Shocked Ground"],
    ["explicit.stat_349586058", "Area has patches of Chilled Ground"],
    ["explicit.stat_3796523155", "#% less effect of Curses on Monsters"],
    ["explicit.stat_3877264671", "Monster have #% increased Elemental Ailment Application"],
    ["explicit.stat_3909654181", "Monsters have #% increased Attack, Cast and Movement Speed"],
    ["explicit.stat_1309819744", "Monsters fire # additional Projectiles"],
    ["explicit.stat_3222482040", "Monsters have #% chance to steal Power, Frenzy and Endurance charges on Hit"],
    ["explicit.stat_1708461270", "Monsters have #% increased Area of Effect"],
    ["explicit.stat_3998863698", "Monsters have #% increased Freeze Buildup"],
    ["explicit.stat_1984618452", "Monsters have #% increased Shock Chance"],
    ["explicit.stat_4101943684", "Monsters have #% increased Stun Threshold"],
    ["explicit.stat_4181072906", "Players have #% less Recovery Rate of Life and Energy Shield"],
    ["explicit.stat_512071314", "Monsters deal #% of Damage as Extra Lightning"],
    ["explicit.stat_554690751", "Players are periodically Cursed with Elemental Weakness"],
    ["explicit.stat_57326096", "Monsters have #% Critical Damage Bonus"],
    ["explicit.stat_92381065", "Monsters deal #% of Damage as Extra Fire"],
    ["explicit.stat_941368244", "Players have #% more Cooldown Recovery Rate"],
    ["explicit.stat_95221307", "Monsters have #% chance to Poison on Hit"],
    ["explicit.stat_95249895", "#% more Monster Life"]
  ].map(([id, text], index) => ({
    id,
    text,
    type: "explicit",
    affix: index < WAYSTONE_PREFIX_STAT_COUNT ? "prefix" : "suffix"
  }));

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  const WAYSTONE_VARIANT_TYPES = new Set([
    "crafted",
    "desecrated",
    "fractured",
    "sanctified",
    "unrevealed"
  ]);
  const WAYSTONE_TEXT_ONLY_STATS = ["#% increased amount of Chests"];
  const WAYSTONE_STAT_GROUP_ORDER = [
    "explicit",
    "desecrated",
    "fractured",
    "crafted",
    "sanctified",
    "unrevealed"
  ];
  const WAYSTONE_STAT_OPTIONS = [
    ...WAYSTONE_STATS,
    ...WAYSTONE_TEXT_ONLY_STATS.map((text) => ({
      id: "",
      text,
      type: "explicit",
      affix: "prefix"
    }))
  ];
  const WAYSTONE_STAT_IDS = new Set(WAYSTONE_STATS.map(({ id }) => id));
  const WAYSTONE_STAT_KEYS = new Set(
    [...WAYSTONE_STATS.map(({ type, text }) => `${type}::${normalize(text)}`),
      ...WAYSTONE_TEXT_ONLY_STATS.map((text) => `explicit::${normalize(text)}`)]
  );

  function canonicalStatType(type) {
    const normalizedType = normalize(type || "explicit");
    return WAYSTONE_VARIANT_TYPES.has(normalizedType)
      ? "explicit"
      : normalizedType;
  }

  function canonicalStatId(id) {
    const value = String(id || "");
    const numericStat = value.match(/(?:^|\.)(stat_\d+)(?:$|\|)/);
    return numericStat ? `explicit.${numericStat[1]}` : value.replace(/^stat\./, "");
  }

  function isWaystoneStat({ id, label, text, type } = {}) {
    if (id && WAYSTONE_STAT_IDS.has(canonicalStatId(id))) {
      return true;
    }

    return WAYSTONE_STAT_KEYS.has(
      `${canonicalStatType(type)}::${normalize(label || text)}`
    );
  }

  function getWaystoneStatOptions(catalogEntries = []) {
    const fallbackById = new Map(
      WAYSTONE_STATS.map((definition) => [definition.id, definition])
    );
    const options = new Map();
    const addOption = (entry) => {
      if (!entry || !isWaystoneStat(entry)) {
        return;
      }

      const id = String(entry.id || "").replace(/^stat\./, "");
      const text = String(entry.text || entry.label || "")
        .replace(/\s+/g, " ")
        .trim();
      const type = normalize(entry.type || id.split(".")[0] || "explicit");
      const fallbackDefinition = id
        ? fallbackById.get(canonicalStatId(id))
        : WAYSTONE_STAT_OPTIONS.find(
            (definition) =>
              canonicalStatType(definition.type) === canonicalStatType(type) &&
              normalize(definition.text) === normalize(text)
          );
      const affix = normalize(entry.affix || fallbackDefinition?.affix);

      if (!text) {
        return;
      }

      const key = `${id || `${type}::${normalize(text)}`}::${normalize(text)}`;

      if (!options.has(key)) {
        options.set(key, { id, text, type, affix });
      }
    };

    // Prefer current trade-catalog records, including modifier namespace
    // variants, then fill any gaps from the verified built-in fallback.
    (Array.isArray(catalogEntries) ? catalogEntries : []).forEach(addOption);
    WAYSTONE_STAT_OPTIONS.forEach(addOption);

    const groupRank = (type) => {
      const rank = WAYSTONE_STAT_GROUP_ORDER.indexOf(type);
      return rank < 0 ? WAYSTONE_STAT_GROUP_ORDER.length : rank;
    };
    const sortText = (text) =>
      text.normalize("NFKD").replace(/[^\p{L}\p{N}]+/gu, " ").trim();

    return [...options.values()].sort(
      (left, right) =>
        groupRank(left.type) - groupRank(right.type) ||
        left.type.localeCompare(right.type, undefined, {
          sensitivity: "base"
        }) ||
        sortText(left.text).localeCompare(sortText(right.text), undefined, {
          numeric: true,
          sensitivity: "base"
        }) ||
        left.text.localeCompare(right.text, undefined, {
          sensitivity: "base"
        }) ||
        left.id.localeCompare(right.id)
    );
  }

  return {
    WAYSTONE_TIER_15_ICON,
    WAYSTONE_TIERS,
    WAYSTONE_STATS,
    WAYSTONE_STAT_OPTIONS,
    WAYSTONE_STAT_GROUP_ORDER,
    WAYSTONE_STAT_IDS,
    WAYSTONE_STAT_KEYS,
    canonicalStatId,
    canonicalStatType,
    getWaystoneStatOptions,
    isWaystoneStat,
    normalize
  };
});

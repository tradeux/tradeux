(function exposePoe2TabletData(root, factory) {
  const data = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }

  root.Poe2TabletData = data;
})(typeof globalThis !== "undefined" ? globalThis : this, function createPoe2TabletData() {
  "use strict";

  const BUNDLED_DATA = globalThis.Poe2BundledIconData ||
    (typeof require === "function" ? require("./poe2-bundled-icon-data.js") : {});
  const BUNDLED_ICONS = BUNDLED_DATA.mappings?.tablets || {};
  const BUNDLED_FALLBACK = BUNDLED_DATA.fallbackPath || "assets/item-icons/fallback.webp";

  // Base membership comes from the reviewed Tablet base snapshot. Stat
  // identities and fallback labels were reconciled with the official trade2
  // stat catalogue on 2026-08-29. The display names retain the established
  // "Precursor Tablet" vocabulary while searchText follows the current native
  // trade labels.
  const OVERSEER_TABLET_ICON = BUNDLED_ICONS.overseer || BUNDLED_FALLBACK;
  const TABLET_STAT_GROUP_ORDER = [
    "explicit",
    "desecrated",
    "fractured",
    "crafted",
    "sanctified",
    "unrevealed"
  ];
  const TABLET_VARIANT_TYPES = new Set([
    "crafted",
    "desecrated",
    "fractured",
    "sanctified",
    "unrevealed"
  ]);
  const TABLET_PREFIX_STAT_KEYS = new Set([
    "magic_monsters",
    "item_rarity",
    "rare_monsters",
    "gold",
    "experience",
    "pack_size",
    "monster_effectiveness",
    "additional_azmeri",
    "additional_summoning_circle",
    "additional_rogue_exile",
    "additional_rare_chest",
    "additional_essence",
    "monster_rarity"
  ]);

  const TABLET_STATS_BY_KEY = Object.freeze({
    magic_monsters: ["explicit.stat_3873704640", "Map has #% increased Magic Monsters"],
    item_rarity: ["explicit.stat_2306002879", "#% increased Rarity of Items found in Map"],
    waystone_quantity: ["explicit.stat_2777224821", "#% increased Quantity of Waystones found in Map"],
    rare_monsters: ["explicit.stat_3793155082", "Map has #% increased number of Rare Monsters"],
    gold: ["explicit.stat_1276056105", "#% increased Gold found in Map (Gold Piles)"],
    experience: ["explicit.stat_57434274", "#% increased Experience gain in Map"],
    pack_size: ["explicit.stat_2017682521", "#% increased Pack Size in Map"],
    essence_chance: ["explicit.stat_1825943485", "Map has #% increased chance to contain Essences"],
    unique_rare_modifier: ["explicit.stat_3371085671", "Unique Monsters have # additional Rare Modifier"],
    shrine_chance: ["explicit.stat_689816330", "Map has #% increased chance to contain Shrines"],
    strongbox_chance: ["explicit.stat_4279535856", "Map has #% increased chance to contain Strongboxes"],
    random_modifier: ["explicit.stat_588512487", "Map has # additional random Modifier"],
    monster_effectiveness: ["explicit.stat_2065500219", "Monsters have #% increased Effectiveness"],
    azmeri_chance: ["explicit.stat_3815617979", "Map has #% increased chance to contain Azmeri Spirits"],
    rogue_exile_chance: ["explicit.stat_1352729973", "Map has #% increased chance to contain Rogue Exiles"],
    summoning_circle_chance: ["explicit.stat_267210597", "Map has #% increased chance to contain a Summoning Circle"],
    additional_azmeri: ["explicit.stat_358129101", "Map contains # additional Azmeri Spirit"],
    additional_summoning_circle: ["explicit.stat_2839545956", "Map contains an additional Summoning Circle"],
    additional_rogue_exile: ["explicit.stat_3550168289", "Map is inhabited by # additional Rogue Exile"],
    additional_rare_chest: ["explicit.stat_231864447", "Map contains an additional Rare Chest"],
    additional_essence: ["explicit.stat_395808938", "Map contains an additional Essence"],
    additional_shrine: ["explicit.stat_1468737867", "Map contains an additional Shrine"],
    additional_strongbox: ["explicit.stat_3240183538", "Map contains # additional Strongboxes"],
    monster_rarity: ["explicit.stat_4142653832", "Map has #% increased Monster Rarity"],

    abyss_additional_rares: ["explicit.stat_243380454", "# additional Rare Monsters are spawned from Abysses in Map"],
    abyss_modifier_chance: ["explicit.stat_2789248444", "#% increased chance for Abyssal monsters in Map to have Abyssal Modifiers"],
    desecrated_currency: ["explicit.stat_1710200734", "#% increased chance for Desecrated Currency from Abysses in Map"],
    abyss_rewards: ["explicit.stat_4256531808", "Abyss Pits in Map are twice as likely to have Rewards"],
    abyss_effectiveness: ["explicit.stat_664606484", "Abyssal Monsters have #% increased Effectiveness for each closed Pit, up to 100%"],
    abyss_depths: ["explicit.stat_2722831300", "Abysses in Map have #% increased chance to lead to an Abyssal Depths"],
    four_abysses: ["explicit.stat_2890355696", "Map has #% chance to contain four additional Abysses"],
    abyss_monsters: ["explicit.stat_944630113", "Abysses in Map spawn #% increased Monsters"],
    additional_abyss: ["explicit.stat_1070816711", "Map contains an additional Abyss"],

    rare_breach_effectiveness: ["explicit.stat_2895378479", "#% increased Effectiveness of Rare Breach Monsters in Map"],
    hiveblood_quantity: ["explicit.stat_2778285247", "#% increased Quantity of Hiveblood found in Map"],
    wombgift_quantity: ["explicit.stat_472809816", "#% increased Quantity of Wombgifts found in Map"],
    breach_density: ["explicit.stat_1210760818", "Breaches in Map have #% increased Pack Size"],
    vruun_chance: ["explicit.stat_2433436306", "Unstable Breaches in Map have #% increased chance to contain Vruun, Marshal of Xesht"],
    unstable_breach_rare: ["explicit.stat_3762913035", "Unstable Breaches in Map spawn an additional Rare Monster when Stabilised"],

    delirium_bosses: ["explicit.stat_3962960008", "Delirium Encounters in Map are #% more likely to spawn Unique Bosses"],
    fracturing_mirrors: ["explicit.stat_551040294", "Delirium Fog in Map spawns #% increased Fracturing Mirrors"],
    simulacrum_splinters: ["explicit.stat_3836551197", "#% increased Stack size of Simulacrum Splinters found in Map"],
    delirium_duration: ["explicit.stat_3226351972", "Delirium Fog in Map lasts # additional seconds before dissipating"],
    deliriousness: ["explicit.stat_1769611692", "Delirium Fog in Map applies #% increased Deliriousness to Players"],
    delirium_pack_size: ["explicit.stat_3465791711", "Delirium Monsters in Map have #% increased Pack Size"],
    delirium_pause: ["explicit.stat_2323782229", "Slaying Rare Monsters in Map pauses the Delirium Mirror Timer for 1 second"],
    delirium_dissipation: ["explicit.stat_3350944114", "Delirium Fog in Map dissipates #% faster"],

    remnant_effect: ["explicit.stat_3078574625", "#% increased Effect of Expedition Remnants in Map"],
    explosive_range: ["explicit.stat_1539368271", "#% increased Expedition Explosive Placement Range in Map"],
    explosive_radius: ["explicit.stat_3289828378", "#% increased Expedition Explosive Radius in Map"],
    rare_expedition_monsters: ["explicit.stat_2694800111", "#% increased number of Rare Expedition Monsters in Map"],
    runic_markers: ["explicit.stat_1640965354", "Map contains #% increased number of Runic Monster Markers"],
    artifacts: ["explicit.stat_4219583418", "#% increased quantity of Expedition Artifacts dropped by Monsters in Map"],
    logbooks: ["explicit.stat_1083387327", "#% increased Quantity of Expedition Logbooks dropped by Runic Monsters in Map"],
    remnants: ["explicit.stat_3753446846", "Expeditions in Map have # Remnant"],

    boss_item_quantity: ["explicit.stat_3119172063", "#% increased Quantity of Items dropped by Map Bosses"],
    boss_waystone_quantity: ["explicit.stat_1457896329", "#% increased Quantity of Waystones dropped by Map Bosses"],
    boss_item_rarity: ["explicit.stat_4255069232", "#% increased Rarity of Items dropped by Map Bosses"],
    boss_azmeri: ["explicit.stat_775597083", "Areas with Powerful Map Bosses contain an additional Azmeri Spirit"],
    boss_essence: ["explicit.stat_2162684861", "Areas with Powerful Map Bosses contain an additional Essence"],
    boss_shrine: ["explicit.stat_3042527515", "Areas with Map Powerful Map Bosses contain an additional Shrine"],
    boss_strongbox: ["explicit.stat_3040603554", "Areas with Powerful Map Bosses contain an additional Strongbox"],
    boss_experience: ["explicit.stat_3860150265", "Map Bosses grant #% increased Experience"],

    ritual_defer_cost: ["explicit.stat_1345835998", "Deferring Favours at Ritual Altars in Map costs #% increased Tribute"],
    ritual_reappear: ["explicit.stat_28208665", "Favours Deferred at Ritual Altars in Map reappear #% sooner"],
    ritual_free_reroll: ["explicit.stat_937291386", "Favours Rerolled at Ritual Altars in Map have #% chance to cost no Tribute"],
    ritual_tribute: ["explicit.stat_159726667", "Monsters Sacrificed at Ritual Altars in Map grant #% increased Tribute"],
    ritual_reroll_cost: ["explicit.stat_2282052746", "Rerolling Favours at Ritual Altars in Map costs #% increased Tribute"],
    ritual_magic: ["explicit.stat_1031644647", "Revived Monsters from Ritual Altars in Map have #% increased chance to be Magic"],
    ritual_rare: ["explicit.stat_3979184174", "Revived Monsters from Ritual Altars in Map have #% increased chance to be Rare"],
    ritual_rerolls: ["explicit.stat_120737942", "Ritual Altars in Map allow rerolling Favours an additional time"],
    ritual_omens: ["explicit.stat_4219853180", "Ritual Favours in Map have #% increased chance to be Omens"],

    vaal_beacon_monsters: ["explicit.stat_632698321", "#% increased chance Vaal Beacons summon additional Monsters in Map"]
  });

  const COMMON = [
    "azmeri_chance",
    "essence_chance",
    "rogue_exile_chance",
    "shrine_chance",
    "strongbox_chance",
    "summoning_circle_chance",
    "monster_effectiveness",
    "experience",
    "gold",
    "magic_monsters",
    "pack_size",
    "waystone_quantity",
    "rare_monsters",
    "item_rarity",
    "additional_azmeri",
    "additional_summoning_circle",
    "additional_rogue_exile",
    "additional_rare_chest",
    "additional_essence",
    "additional_shrine",
    "additional_strongbox",
    "random_modifier"
  ];
  const WITH_MONSTER_RARITY = [...COMMON, "monster_rarity"];
  const WITH_BOTH = [...WITH_MONSTER_RARITY, "unique_rare_modifier"];

  const TABLET_BASES = Object.freeze([
    {
      key: "abyss",
      displayName: "Abyss Precursor Tablet",
      searchText: "Abyss Tablet",
      icon: "",
      statKeys: [
        ...WITH_BOTH,
        "abyss_additional_rares",
        "abyss_modifier_chance",
        "desecrated_currency",
        "abyss_rewards",
        "abyss_effectiveness",
        "abyss_depths",
        "four_abysses",
        "abyss_monsters",
        "additional_abyss"
      ]
    },
    {
      key: "breach",
      displayName: "Breach Precursor Tablet",
      searchText: "Breach Tablet",
      icon: "",
      statKeys: [
        ...WITH_BOTH,
        "rare_breach_effectiveness",
        "hiveblood_quantity",
        "wombgift_quantity",
        "breach_density",
        "vruun_chance",
        "unstable_breach_rare"
      ]
    },
    {
      key: "delirium",
      displayName: "Delirium Precursor Tablet",
      searchText: "Delirium Tablet",
      icon: "",
      statKeys: [
        ...WITH_BOTH,
        "delirium_bosses",
        "fracturing_mirrors",
        "simulacrum_splinters",
        "delirium_duration",
        "deliriousness",
        "delirium_pack_size",
        "delirium_pause",
        "delirium_dissipation"
      ]
    },
    {
      key: "expedition",
      displayName: "Expedition Precursor Tablet",
      searchText: "Expedition Tablet",
      icon: "",
      statKeys: [
        ...WITH_BOTH,
        "remnant_effect",
        "explosive_range",
        "explosive_radius",
        "rare_expedition_monsters",
        "runic_markers",
        "artifacts",
        "logbooks",
        "remnants"
      ]
    },
    {
      key: "irradiated",
      displayName: "Irradiated Precursor Tablet",
      searchText: "Irradiated Tablet",
      icon: "",
      statKeys: WITH_BOTH
    },
    {
      key: "overseer",
      displayName: "Overseer Precursor Tablet",
      searchText: "Overseer Tablet",
      icon: OVERSEER_TABLET_ICON,
      statKeys: [
        ...WITH_BOTH,
        "boss_item_quantity",
        "boss_waystone_quantity",
        "boss_item_rarity",
        "boss_azmeri",
        "boss_essence",
        "boss_shrine",
        "boss_strongbox",
        "boss_experience"
      ]
    },
    {
      key: "ritual",
      displayName: "Ritual Precursor Tablet",
      searchText: "Ritual Tablet",
      icon: "",
      statKeys: [
        ...WITH_BOTH,
        "ritual_defer_cost",
        "ritual_reappear",
        "ritual_free_reroll",
        "ritual_tribute",
        "ritual_reroll_cost",
        "ritual_magic",
        "ritual_rare",
        "ritual_rerolls",
        "ritual_omens"
      ]
    },
    {
      key: "temple",
      displayName: "Temple Precursor Tablet",
      searchText: "Temple Tablet",
      icon: "",
      statKeys: [...WITH_BOTH, "vaal_beacon_monsters"]
    }
  ].map((definition) => Object.freeze({
    ...definition,
    icon: BUNDLED_ICONS[definition.key] || BUNDLED_FALLBACK,
    statKeys: Object.freeze([...definition.statKeys])
  })));

  const TABLET_BASE_BY_KEY = new Map(
    TABLET_BASES.map((definition) => [definition.key, definition])
  );
  const TABLET_STATS = Object.freeze(
    Object.entries(TABLET_STATS_BY_KEY).map(([key, [id, text]]) =>
      Object.freeze({
        key,
        id,
        text,
        type: "explicit",
        affix: TABLET_PREFIX_STAT_KEYS.has(key) ? "prefix" : "suffix"
      })
    )
  );
  const TABLET_STAT_BY_KEY = new Map(
    TABLET_STATS.map((definition) => [definition.key, definition])
  );

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function canonicalStatType(type) {
    const normalizedType = normalize(type || "explicit");
    return TABLET_VARIANT_TYPES.has(normalizedType)
      ? "explicit"
      : normalizedType;
  }

  function canonicalStatId(id) {
    const value = String(id || "");
    const numericStat = value.match(/(?:^|\.)(stat_\d+)(?:$|\|)/);
    return numericStat ? `explicit.${numericStat[1]}` : value.replace(/^stat\./, "");
  }

  function getTabletBase(baseKey) {
    return TABLET_BASE_BY_KEY.get(normalize(baseKey)) || null;
  }

  function getBaseStatDefinitions(baseKey) {
    const base = getTabletBase(baseKey);
    return base
      ? base.statKeys.map((key) => TABLET_STAT_BY_KEY.get(key)).filter(Boolean)
      : [];
  }

  function isTabletStatForBase(baseKey, { id, label, text, type } = {}) {
    const definitions = getBaseStatDefinitions(baseKey);
    const ids = new Set(definitions.map(({ id: statId }) => statId));

    // A catalogue entry with a stable ID must match by that ID. Falling back
    // to text for a different ID can pull an unrelated or legacy stat into a
    // base merely because it currently has the same display label.
    if (id) {
      return ids.has(canonicalStatId(id));
    }

    const targetType = canonicalStatType(type);
    const targetText = normalize(label || text);
    return definitions.some(
      (definition) =>
        canonicalStatType(definition.type) === targetType &&
        normalize(definition.text) === targetText
    );
  }

  function getTabletStatOptions(baseKey, catalogEntries = []) {
    const fallback = getBaseStatDefinitions(baseKey);
    const fallbackById = new Map(
      fallback.map((definition) => [definition.id, definition])
    );
    const options = new Map();
    const addOption = (entry) => {
      if (!entry || !isTabletStatForBase(baseKey, entry)) {
        return;
      }

      const id = String(entry.id || "").replace(/^stat\./, "");
      const text = String(entry.text || entry.label || "")
        .replace(/\s+/g, " ")
        .trim();
      const type = normalize(entry.type || id.split(".")[0] || "explicit");
      const fallbackDefinition = id
        ? fallbackById.get(canonicalStatId(id))
        : fallback.find(
            (definition) =>
              canonicalStatType(definition.type) === canonicalStatType(type) &&
              normalize(definition.text) === normalize(text)
          );
      const affix = normalize(entry.affix || fallbackDefinition?.affix);

      if (!text) {
        return;
      }

      // The official catalogue occasionally publishes more than one label for
      // the same namespace-qualified stat ID. Prefer the first live record and
      // let the fallback fill only genuinely missing identities.
      const key = id || `${type}::${normalize(text)}`;
      if (!options.has(key)) {
        options.set(key, { id, text, type, affix });
      }
    };

    (Array.isArray(catalogEntries) ? catalogEntries : []).forEach(addOption);
    fallback.forEach(addOption);

    const groupRank = (type) => {
      const rank = TABLET_STAT_GROUP_ORDER.indexOf(type);
      return rank < 0 ? TABLET_STAT_GROUP_ORDER.length : rank;
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
    TABLET_BASES,
    TABLET_STATS,
    TABLET_STAT_GROUP_ORDER,
    TABLET_GENERAL_ICON: TABLET_BASES[0]?.icon || "",
    canonicalStatId,
    canonicalStatType,
    getTabletBase,
    getTabletStatOptions,
    isTabletStatForBase,
    normalize
  };
});

(function exposePoe2UniqueData(root, factory) {
  const data = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }

  root.Poe2UniqueData = data;
})(typeof globalThis !== "undefined" ? globalThis : this, function createPoe2UniqueData() {
  "use strict";

  // Generated from the reviewed Unique and Runeforging catalogue snapshot on
  // 2026-08-30T08:49:35.421Z. Every preview is composed locally and never
  // fetches an item when opened.
  const DETAIL_CACHE_VERSION = 1;
  const BUNDLED_DATA = globalThis.Poe2BundledIconData ||
    (typeof require === "function" ? require("./poe2-bundled-icon-data.js") : {});
  const BUNDLED_ICONS = BUNDLED_DATA.mappings?.uniques || {};
  const BUNDLED_FALLBACK = BUNDLED_DATA.fallbackPath || "assets/item-icons/fallback.webp";
  const UNIQUE_HELPER_ICON = BUNDLED_DATA.mappings?.special?.uniqueHelper || BUNDLED_FALLBACK;
  const RUNEFORGE_ICON = BUNDLED_DATA.mappings?.special?.runeforge || BUNDLED_FALLBACK;
  const UNIQUE_TYPES = Object.freeze([
  "Amulets",
  "Belts",
  "Body Armours",
  "Boots",
  "Bows",
  "Bucklers",
  "Charms",
  "Crossbows",
  "Foci",
  "Gloves",
  "Helmets",
  "Jewels",
  "Life Flasks",
  "Mana Flasks",
  "One Hand Maces",
  "Quarterstaves",
  "Quivers",
  "Relics",
  "Rings",
  "Sceptres",
  "Shields",
  "Spears",
  "Staves",
  "Tablets",
  "Talismans",
  "Two Hand Maces",
  "Wands"
]);
  const UNIQUE_ITEM_SNAPSHOT = [
  {
    "base": "Azure Amulet",
    "baseImplicitMods": [
      "(20-30)% increased Mana Regeneration Rate"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "What they saw was what they believed, and",
      "they believed Lunaris had not abandoned them."
    ],
    "key": "the everlasting gaze azure amulet",
    "level": 1,
    "mods": [
      "+(40-60) to maximum Mana",
      "(40-60)% increased Mana Regeneration Rate",
      "Gain (4-6)% of maximum Mana as Extra maximum Energy Shield"
    ],
    "name": "The Everlasting Gaze",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 1",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Everlasting_Gaze",
    "sourceUrl": "https://poe2db.tw/us/The_Everlasting_Gaze",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Amber Amulet",
    "baseImplicitMods": [
      "+(10-15) to Strength"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Forged from the blood of countless wars,",
      "its thirst has only begun."
    ],
    "key": "carnage heart amber amulet",
    "level": 8,
    "mods": [
      "20% reduced maximum Life",
      "+(10-20) to all Attributes",
      "+(10-20)% to all Elemental Resistances",
      "(100-200)% increased amount of Life Leeched",
      "(25-50)% increased Damage while Leeching"
    ],
    "name": "Carnage Heart",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 8",
    "runeforging": [],
    "section": "Other",
    "slug": "Carnage_Heart",
    "sourceUrl": "https://poe2db.tw/us/Carnage_Heart",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Amber Amulet",
    "baseImplicitMods": [
      "+(10-15) to Strength"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The sacred sap flows slowly, but surely."
    ],
    "key": "revered resin amber amulet",
    "level": 8,
    "mods": [
      "+(40-60) to maximum Life",
      "(20-30)% increased Flask Life Recovery rate",
      "Life Flasks gain (0.17-0.25) charges per Second"
    ],
    "name": "Revered Resin",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 8",
    "runeforging": [],
    "section": "Other",
    "slug": "Revered_Resin",
    "sourceUrl": "https://poe2db.tw/us/Revered_Resin",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Jade Amulet",
    "baseImplicitMods": [
      "+(10-15) to Dexterity"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Natural grace is born, not earned."
    ],
    "key": "surefooted sigil jade amulet",
    "level": 8,
    "mods": [
      "+(40-60) to maximum Life",
      "+(5-15) to Dexterity",
      "+1 metre to Dodge Roll distance",
      "50% increased Evasion Rating if you've Dodge Rolled Recently"
    ],
    "name": "Surefooted Sigil",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 8",
    "runeforging": [],
    "section": "Other",
    "slug": "Surefooted_Sigil",
    "sourceUrl": "https://poe2db.tw/us/Surefooted_Sigil",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Lunar Amulet",
    "baseImplicitMods": [
      "+(20-30) to maximum Energy Shield"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Fanatics are the most dangerous enemy,",
      "for they care not for their own survival."
    ],
    "key": "rondel of fragility lunar amulet",
    "level": 14,
    "mods": [
      "(15-30)% increased Skill Speed",
      "(20-30)% increased Critical Hit Chance",
      "-30% to all Elemental Resistances",
      "(30-50)% increased Damage"
    ],
    "name": "Rondel of Fragility",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 14",
    "runeforging": [],
    "section": "Other",
    "slug": "Rondel_of_Fragility",
    "sourceUrl": "https://poe2db.tw/us/Rondel_of_Fragility",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Bloodstone Amulet",
    "baseImplicitMods": [
      "+(30-40) to maximum Life"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Forge your Perseverance on the Anvil of Faith."
    ],
    "key": "the anvil bloodstone amulet",
    "level": 18,
    "mods": [
      "10% reduced Movement Speed",
      "10% reduced Skill Speed",
      "(25-50)% increased Armour",
      "25% increased Block chance",
      "+(5-10)% to maximum Block chance"
    ],
    "name": "The Anvil",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 18",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Anvil",
    "sourceUrl": "https://poe2db.tw/us/The_Anvil",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Bloodstone Amulet",
    "baseImplicitMods": [
      "+(30-40) to maximum Life"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Let the unrepentant be dragged ever downwards by the weight of their sins."
    ],
    "key": "yoke of suffering bloodstone amulet",
    "level": 18,
    "mods": [
      "+(10-15)% to all Elemental Resistances",
      "(15-30)% increased Elemental Damage",
      "Enemies take (15-20)% increased Damage for each Elemental Ailment type amongyour Ailments on them",
      "(30-40)% reduced Duration of Ignite, Shock and Chill on Enemies"
    ],
    "name": "Yoke of Suffering",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 18",
    "runeforging": [],
    "section": "Other",
    "slug": "Yoke_of_Suffering",
    "sourceUrl": "https://poe2db.tw/us/Yoke_of_Suffering",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Stellar Amulet",
    "baseImplicitMods": [
      "+(5-7) to all Attributes"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Mindless rage will shake the world,",
      "Cunning lies will bend it.",
      "Reckless haste will break the world,",
      "And into darkness send it."
    ],
    "key": "astramentis stellar amulet",
    "level": 24,
    "mods": [
      "+(50-100) to all Attributes",
      "-4 Physical Damage taken from Attack Hits"
    ],
    "name": "Astramentis",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 24",
    "runeforging": [],
    "section": "Other",
    "slug": "Astramentis",
    "sourceUrl": "https://poe2db.tw/us/Astramentis",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Stellar Amulet",
    "baseImplicitMods": [
      "+(5-7) to all Attributes"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "He knew not why he was changing, only",
      "that he wanted to hold his family close..."
    ],
    "key": "fixation of yix stellar amulet",
    "level": 24,
    "mods": [
      "+100 to maximum Life",
      "Allies in your Presence have (30-50)% increased Critical Hit Chance",
      "Allies in your Presence have (30-50)% increased Critical Damage Bonus",
      "Allies in your Presence have (10-20)% increased Attack Speed",
      "Allies in your Presence have (10-20)% increased Cast Speed",
      "50% reduced Presence Area of Effect"
    ],
    "name": "Fixation of Yix",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 24",
    "runeforging": [],
    "section": "Other",
    "slug": "Fixation_of_Yix",
    "sourceUrl": "https://poe2db.tw/us/Fixation_of_Yix",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Crimson Amulet",
    "baseImplicitMods": [
      "(2-4) Life Regeneration per second"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Worship of house gods was tolerated",
      "in Oriath, so long as it remained private."
    ],
    "key": "idol of uldurn crimson amulet",
    "level": 24,
    "mods": [
      "+(60-80) to maximum Life",
      "+(10-20) to Dexterity",
      "(20-40)% reduced Presence Area of Effect",
      "(10-15)% increased Spirit",
      "Skills have +1 to Limit"
    ],
    "name": "Idol of Uldurn",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 24",
    "runeforging": [],
    "section": "Other",
    "slug": "Idol_of_Uldurn",
    "sourceUrl": "https://poe2db.tw/us/Idol_of_Uldurn",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Azure Amulet",
    "baseImplicitMods": [
      "(20-30)% increased Mana Regeneration Rate"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Gentle anger, raging calm."
    ],
    "key": "ungil's harmony azure amulet",
    "level": 25,
    "mods": [
      "+(30-50) to maximum Life",
      "+(30-50) to maximum Mana",
      "(100-200)% increased Critical Hit Chance",
      "+(60-100) to Stun Threshold",
      "You have no Critical Damage Bonus"
    ],
    "name": "Ungil's Harmony",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 25",
    "runeforging": [],
    "section": "Other",
    "slug": "Ungils_Harmony",
    "sourceUrl": "https://poe2db.tw/us/Ungils_Harmony",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Solar Amulet",
    "baseImplicitMods": [
      "+(10-15) to Spirit"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The homeguard signalled for aid against a surprise attack,",
      "but it was not their dekharas that responded.",
      "It was Solerai herself."
    ],
    "key": "beacon of azis solar amulet",
    "level": 30,
    "mods": [
      "+(60-100) to maximum Mana",
      "+30 to Spirit",
      "30% increased Light Radius",
      "Critical Hits ignore Enemy Monster Elemental Resistances"
    ],
    "name": "Beacon of Azis",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 30",
    "runeforging": [],
    "section": "Other",
    "slug": "Beacon_of_Azis",
    "sourceUrl": "https://poe2db.tw/us/Beacon_of_Azis",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Solar Amulet",
    "baseImplicitMods": [
      "+(10-15) to Spirit"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "To stray is to condemn this world to sin."
    ],
    "key": "immaculate adherence solar amulet",
    "level": 30,
    "mods": [
      "100% of Damage is taken from Mana before Life",
      "Cannot have Energy Shield",
      "Convert 100% of maximum Energy Shield to maximum Divinity",
      "(0-100)% increased maximum Divinity",
      "20% reduced maximum Divinity per Corrupted Item Equipped",
      "Skills Cost Divinity instead of Mana or Life"
    ],
    "name": "Immaculate Adherence",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 30",
    "runeforging": [],
    "section": "Other",
    "slug": "Immaculate_Adherence",
    "sourceUrl": "https://poe2db.tw/us/Immaculate_Adherence",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Gold Amulet",
    "baseImplicitMods": [
      "(12-20)% increased Rarity of Items found"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Never blinking, always watching."
    ],
    "key": "eye of chayula gold amulet",
    "level": 35,
    "mods": [
      "(20-30)% reduced maximum Life",
      "+(10-15) to all Attributes",
      "Cannot be Light Stunned"
    ],
    "name": "Eye of Chayula",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 35",
    "runeforging": [],
    "section": "Other",
    "slug": "Eye_of_Chayula",
    "sourceUrl": "https://poe2db.tw/us/Eye_of_Chayula",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Lapis Amulet",
    "baseImplicitMods": [
      "+(10-15) to Intelligence"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Healing the soul requires sacrifice."
    ],
    "key": "ligurium talisman lapis amulet",
    "level": 35,
    "mods": [
      "+(30-40) to maximum Energy Shield",
      "+(25-35) to Spirit",
      "+(20-30) to Intelligence",
      "Life Regeneration is applied to Energy Shield instead"
    ],
    "name": "Ligurium Talisman",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 35",
    "runeforging": [],
    "section": "Other",
    "slug": "Ligurium_Talisman",
    "sourceUrl": "https://poe2db.tw/us/Ligurium_Talisman",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Gold Amulet",
    "baseImplicitMods": [
      "(12-20)% increased Rarity of Items found"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "When Kabala the Serpent Queen was banished from Keth,",
      "the Sekhemas took a single hostage as punishment."
    ],
    "key": "serpent's egg gold amulet",
    "level": 35,
    "mods": [
      "+(10-20) to all Attributes",
      "+(17-23)% to Chaos Resistance",
      "(20-30)% increased Mana Regeneration Rate",
      "Gain an additional Charge when you gain a Charge"
    ],
    "name": "Serpent's Egg",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 35",
    "runeforging": [],
    "section": "Other",
    "slug": "Serpents_Egg",
    "sourceUrl": "https://poe2db.tw/us/Serpents_Egg",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Stellar Amulet",
    "baseImplicitMods": [
      "Grants Skill: Level 11 Future-Past",
      "+(5-7) to all Attributes"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Remember the past, anticipate the future."
    ],
    "key": "hinekora's sight stellar amulet",
    "level": 44,
    "mods": [
      "+(300-600) to Accuracy Rating",
      "+(300-600) to Evasion Rating",
      "Cannot be Blinded"
    ],
    "name": "Hinekora's Sight",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 44",
    "runeforging": [],
    "section": "Other",
    "slug": "Hinekoras_Sight",
    "sourceUrl": "https://poe2db.tw/us/Hinekoras_Sight",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Solar Amulet",
    "baseImplicitMods": [
      "+(10-15) to Spirit"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Tale-women in training drink of a painful desert fruit.",
      "Fire, they learn, springs from agony."
    ],
    "key": "fireflower solar amulet",
    "level": 52,
    "mods": [
      "(10-15)% increased Rarity of Items found",
      "+(1-4) to Level of all Fire Skills",
      "(30-40)% increased Mana Regeneration Rate",
      "Take 100 Fire Damage when you Ignite an Enemy"
    ],
    "name": "Fireflower",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 52",
    "runeforging": [],
    "section": "Other",
    "slug": "Fireflower",
    "sourceUrl": "https://poe2db.tw/us/Fireflower",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Stellar Amulet",
    "baseImplicitMods": [
      "+(5-7) to all Attributes"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "There is no light at the end of this inner strife,",
      "but the shadows eventually become home."
    ],
    "key": "strugglescream stellar amulet",
    "level": 52,
    "mods": [
      "Can have 3 additional Instilled Modifiers"
    ],
    "name": "Strugglescream",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 52",
    "runeforging": [],
    "section": "Other",
    "slug": "Strugglescream",
    "sourceUrl": "https://poe2db.tw/us/Strugglescream",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Lapis Amulet",
    "baseImplicitMods": [
      "+(10-15) to Intelligence"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "A single moment sets in motion an eternal fall,",
      "beneath which all are buried."
    ],
    "key": "the pandemonius lapis amulet",
    "level": 52,
    "mods": [
      "+(50-100)% to Cold Resistance",
      "Damage Penetrates 75% Cold Resistance",
      "Blind Chilled enemies on Hit"
    ],
    "name": "The Pandemonius",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 52",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Pandemonius",
    "sourceUrl": "https://poe2db.tw/us/The_Pandemonius",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Amber Amulet",
    "baseImplicitMods": [
      "+(10-15) to Strength"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "We are his blood.",
      "Through us he carries his burning message."
    ],
    "key": "xoph's blood amber amulet",
    "level": 52,
    "mods": [
      "(10-20)% increased maximum Life",
      "+(50-100)% to Fire Resistance",
      "Enemies in your Presence have -25% to Fire Resistance"
    ],
    "name": "Xoph's Blood",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 52",
    "runeforging": [],
    "section": "Other",
    "slug": "Xophs_Blood",
    "sourceUrl": "https://poe2db.tw/us/Xophs_Blood",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Jade Amulet",
    "baseImplicitMods": [
      "Grants Skill: Level 13 Lightning Bolt",
      "+(10-15) to Dexterity"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "But the fool did not bow.",
      "The fool stood and questioned.",
      "And the fool was unwritten."
    ],
    "key": "choir of the storm jade amulet",
    "level": 55,
    "mods": [
      "+(50-100)% to Lightning Resistance",
      "Critical Hits Ignore Enemy Monster Lightning Resistance",
      "Trigger Lightning Bolt Skill on Critical Hit"
    ],
    "name": "Choir of the Storm",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 55",
    "runeforging": [],
    "section": "Other",
    "slug": "Choir_of_the_Storm",
    "sourceUrl": "https://poe2db.tw/us/Choir_of_the_Storm",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Veridical Chain",
    "baseImplicitMods": [
      "Grants Skill: Level 13 Midnight Zenith",
      "+(30-40) to maximum Runic Ward"
    ],
    "baseProperties": [
      "Kalguuran Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Dannig sculpted the Verisium to evoke the",
      "night-blooming lotus of Middengard's stygian peaks,",
      "which grow only where ash meets the snow and stars."
    ],
    "key": "eventide petals veridical chain",
    "level": 55,
    "mods": [
      "(30-50)% increased Critical Hit Chance",
      "+(25-35) to Intelligence",
      "(30-50)% increased Light Radius",
      "Ice Crystals have (-3-3)% reduced maximum Life per 5% Cold Resistance you have"
    ],
    "name": "Eventide Petals",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 55",
    "runeforging": [
      {
        "cost": "Cost: Eventide Petals Veridical Chain, Exceptional Verisium x40, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "(15-20)% increased maximum Runic Ward"
        ],
        "key": "runemastered veridical chain",
        "label": "Runemastered Veridical Chain",
        "level": 65,
        "properties": [],
        "propertyStyles": [],
        "requirements": "Requires: Level 65",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Eventide Petals Veridical Chain, Exceptional Verisium x40, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "(15-20)% increased maximum Runic Ward"
        ],
        "key": "runemastered veridical chain",
        "label": "Runemastered Veridical Chain",
        "level": 65,
        "properties": [],
        "propertyStyles": [],
        "requirements": "Requires: Level 65",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Eventide Petals Veridical Chain, Exceptional Verisium x40, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "(15-20)% increased maximum Runic Ward"
        ],
        "key": "runemastered veridical chain",
        "label": "Runemastered Veridical Chain",
        "level": 65,
        "properties": [],
        "propertyStyles": [],
        "requirements": "Requires: Level 65",
        "tier": "runemastered"
      }
    ],
    "section": "Other",
    "slug": "Eventide_Petals",
    "sourceUrl": "https://poe2db.tw/us/Eventide_Petals",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Jade Amulet",
    "baseImplicitMods": [
      "+(10-15) to Dexterity"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The respect of Karui warriors is hard to earn,",
      "but lasts a lifetime... and beyond."
    ],
    "key": "defiance of destiny jade amulet",
    "level": 56,
    "mods": [
      "(6-10)% increased maximum Life",
      "+(10-20) to Strength",
      "(25-40)% increased Mana Regeneration Rate",
      "Recover (20-30)% of Missing Life before being Hit by an Enemy"
    ],
    "name": "Defiance of Destiny",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 56",
    "runeforging": [],
    "section": "Other",
    "slug": "Defiance_of_Destiny",
    "sourceUrl": "https://poe2db.tw/us/Defiance_of_Destiny",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Crimson Amulet",
    "baseImplicitMods": [
      "(2-4) Life Regeneration per second"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "A hearth unyielding, ever warm,",
      "A light unbroken, endlessly reborn."
    ],
    "key": "igniferis crimson amulet",
    "level": 65,
    "mods": [
      "+(10-20)% to Fire Resistance",
      "(20-30)% increased Mana Regeneration Rate",
      "25% increased Light Radius",
      "Life Recovery from Regeneration is not applied",
      "Every 4 seconds, Recover 1 Life for every 0.2 Life Recovery per second from Regeneration"
    ],
    "name": "Igniferis",
    "officialIcon": "",
    "pool": "Amulets",
    "requirements": "Requires: Level 65",
    "runeforging": [],
    "section": "Other",
    "slug": "Igniferis",
    "sourceUrl": "https://poe2db.tw/us/Igniferis",
    "type": "Amulets",
    "verification": "embedded"
  },
  {
    "base": "Linen Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "(20-30)% increased Mana Recovery from Flasks"
    ],
    "baseProperties": [
      "Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Below all living things,",
      "there exists a flow..."
    ],
    "key": "keelhaul linen belt",
    "level": 1,
    "mods": [
      "(-25-25)% reduced Flask Life Recovery rate",
      "(-25-25)% reduced Flask Mana Recovery rate",
      "Life Flasks gain 0.25 charges per Second",
      "Mana Flasks gain 0.25 charges per Second"
    ],
    "name": "Keelhaul",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 1",
    "runeforging": [],
    "section": "Other",
    "slug": "Keelhaul",
    "sourceUrl": "https://poe2db.tw/us/Keelhaul",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Rawhide Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "(20-30)% increased Life Recovery from Flasks"
    ],
    "baseProperties": [
      "Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Kaom's strength was rivaled only by",
      "the great Meginord of the north."
    ],
    "key": "meginord's girdle rawhide belt",
    "level": 1,
    "mods": [
      "+(40-50) to Strength",
      "+(10-15)% to Cold Resistance",
      "50% increased Flask Charges used",
      "100% increased Flask Charges gained"
    ],
    "name": "Meginord's Girdle",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 1",
    "runeforging": [],
    "section": "Other",
    "slug": "Meginords_Girdle",
    "sourceUrl": "https://poe2db.tw/us/Meginords_Girdle",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Rawhide Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "(20-30)% increased Life Recovery from Flasks"
    ],
    "baseProperties": [
      "Ezomyte Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Adversity is the soil in",
      "which persistence grows."
    ],
    "key": "midnight braid rawhide belt",
    "level": 1,
    "mods": [
      "+(30-50) to maximum Mana",
      "+(5-10)% to all Elemental Resistances",
      "50% of Damage taken Recouped as Mana"
    ],
    "name": "Midnight Braid",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 1",
    "runeforging": [],
    "section": "Other",
    "slug": "Midnight_Braid",
    "sourceUrl": "https://poe2db.tw/us/Midnight_Braid",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Wide Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "(20-30)% increased Flask Charges gained"
    ],
    "baseProperties": [
      "Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Some families have peculiar gifts..."
    ],
    "key": "birthright buckle wide belt",
    "level": 14,
    "mods": [
      "+(100-150) to Armour",
      "(10-15)% reduced Flask Charges used",
      "(20-30)% increased Flask Charges gained",
      "Life Flasks used while on Low Life apply Recovery Instantly",
      "Mana Flasks used while on Low Mana apply Recovery Instantly"
    ],
    "name": "Birthright Buckle",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 14",
    "runeforging": [],
    "section": "Other",
    "slug": "Birthright_Buckle",
    "sourceUrl": "https://poe2db.tw/us/Birthright_Buckle",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Wide Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "(20-30)% increased Flask Charges gained"
    ],
    "baseProperties": [
      "Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The Brinerot sail without fear of storms."
    ],
    "key": "byrnabas wide belt",
    "level": 14,
    "mods": [
      "+(40-60) to maximum Mana",
      "+(30-40)% to Lightning Resistance",
      "(7-12) Life Regeneration per second",
      "Cannot be Shocked"
    ],
    "name": "Byrnabas",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 14",
    "runeforging": [],
    "section": "Other",
    "slug": "Byrnabas",
    "sourceUrl": "https://poe2db.tw/us/Byrnabas",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Long Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "(15-20)% increased Charm Effect Duration"
    ],
    "baseProperties": [
      "Vaal Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Vaal bloodpriests were among the earliest intellectuals on record.",
      "It was they who found that a newly freed soul would",
      "desperately cling to any other source of life."
    ],
    "key": "soul tether long belt",
    "level": 20,
    "mods": [
      "+(40-60) to maximum Energy Shield",
      "+(20-30) to Intelligence",
      "You lose 5% of maximum Energy Shield per second",
      "Excess Life Recovery from Leech is applied to Energy Shield"
    ],
    "name": "Soul Tether",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Soul_Tether",
    "sourceUrl": "https://poe2db.tw/us/Soul_Tether",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Plate Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "+(140-180) to Armour"
    ],
    "baseProperties": [
      "Ezomyte Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Bleeding just means you're still alive."
    ],
    "key": "goregirdle plate belt",
    "level": 24,
    "mods": [
      "+(20-30) to Strength",
      "(10-20) Life Regeneration per second",
      "Defend with 200% of Armour",
      "Maximum Physical Damage Reduction is 50%"
    ],
    "name": "Goregirdle",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 24",
    "runeforging": [],
    "section": "Other",
    "slug": "Goregirdle",
    "sourceUrl": "https://poe2db.tw/us/Goregirdle",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Linen Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "(20-30)% increased Mana Recovery from Flasks"
    ],
    "baseProperties": [
      "Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"The power of rebirth rivals that of immortality.\"",
      "- Icius Perandus, Antiquities Collection, Item 3"
    ],
    "key": "umbilicus immortalis linen belt",
    "level": 24,
    "mods": [
      "(30-40)% reduced Flask Effect Duration",
      "+(20-30) to Intelligence",
      "Minions have (20-30)% increased maximum Life",
      "Your Life Flask also applies to your Minions",
      "Minions cannot Die while affected by a Life Flask",
      "(20-30)% increased Flask Charges gained"
    ],
    "name": "Umbilicus Immortalis",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 24",
    "runeforging": [],
    "section": "Other",
    "slug": "Umbilicus_Immortalis",
    "sourceUrl": "https://poe2db.tw/us/Umbilicus_Immortalis",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Ornate Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "(10-15)% reduced Charm Charges used"
    ],
    "baseProperties": [
      "Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "All creatures have the potential for greatness or unequivocal failure."
    ],
    "key": "ryslatha's coil ornate belt",
    "level": 31,
    "mods": [
      "+(80-100) to maximum Life",
      "(30-50)% increased Flask Life Recovery rate",
      "(30-40)% more maximum Physical Attack Damage",
      "(30-40)% less minimum Physical Attack Damage"
    ],
    "name": "Ryslatha's Coil",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 31",
    "runeforging": [],
    "section": "Other",
    "slug": "Ryslathas_Coil",
    "sourceUrl": "https://poe2db.tw/us/Ryslathas_Coil",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Mail Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "(10-15)% reduced Flask Charges used"
    ],
    "baseProperties": [
      "Vaal Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Death is your most important duty.",
      "Face it, or curse your bloodline for all eternity."
    ],
    "key": "coward's legacy mail belt",
    "level": 40,
    "mods": [
      "(-20--10) to Strength",
      "+(20-30) to Dexterity",
      "(30-40)% increased Life and Mana Recovery from Flasks",
      "You are considered on Low Life while at 75% of maximum Life or below instead"
    ],
    "name": "Coward's Legacy",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 40",
    "runeforging": [],
    "section": "Other",
    "slug": "Cowards_Legacy",
    "sourceUrl": "https://poe2db.tw/us/Cowards_Legacy",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Double Belt",
    "baseImplicitMods": [
      "Grants Skill: Level 11 Cast on Charm Use",
      "Has (1-3) Charm Slots",
      "(20-30)% increased Charm Charges gained"
    ],
    "baseProperties": [
      "Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Trifle not with the trinket mage."
    ],
    "key": "bijouborne double belt",
    "level": 44,
    "mods": [
      "+(50-100) to maximum Mana",
      "(10-50)% reduced Charm Effect Duration",
      "+2 Charm Slots",
      "+(15-25) to Dexterity",
      "(20-30)% increased Charm Charges gained"
    ],
    "name": "Bijouborne",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 44",
    "runeforging": [],
    "section": "Other",
    "slug": "Bijouborne",
    "sourceUrl": "https://poe2db.tw/us/Bijouborne",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Heavy Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "(20-30)% increased Stun Threshold"
    ],
    "baseProperties": [
      "Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"A man's soul rules from a cavern of bone, learns and",
      "judges through flesh-born windows. The heart is meat.",
      "The head is where the Man is.\"",
      "- Lavianga, Advisor to Kaom"
    ],
    "key": "headhunter heavy belt",
    "level": 50,
    "mods": [
      "+(40-60) to maximum Life",
      "+(20-40) to Strength",
      "+(20-40) to Dexterity",
      "When you kill a Rare monster, you gain its Modifiers for 60 seconds"
    ],
    "name": "Headhunter",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 50",
    "runeforging": [],
    "section": "Other",
    "slug": "Headhunter",
    "sourceUrl": "https://poe2db.tw/us/Headhunter",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Heavy Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "(20-30)% increased Stun Threshold"
    ],
    "baseProperties": [
      "Kalguuran Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Clever artifice is not always complex."
    ],
    "key": "waistgate heavy belt",
    "level": 50,
    "mods": [
      "+(50-80) to maximum Life",
      "+(50-80) to maximum Mana",
      "(20-30)% increased Flask Life Recovery rate",
      "(20-30)% increased Flask Mana Recovery rate",
      "Life and Mana Flasks can be equipped in either slot"
    ],
    "name": "Waistgate",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 50",
    "runeforging": [
      {
        "cost": "Cost: Waistgate Heavy Belt, Exceptional Verisium x25, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "Has (1-3) Charm Slots",
          "(20-30)% increased Stun Threshold",
          "Flasks gain (0.5-1) charges per Second"
        ],
        "key": "runemastered heavy belt",
        "label": "Runemastered Heavy Belt",
        "level": 65,
        "properties": [],
        "propertyStyles": [],
        "requirements": "Requires: Level 65",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Waistgate Heavy Belt, Exceptional Verisium x25, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "Has (1-3) Charm Slots",
          "(20-30)% increased Stun Threshold",
          "Flasks gain (0.5-1) charges per Second"
        ],
        "key": "runemastered heavy belt",
        "label": "Runemastered Heavy Belt",
        "level": 65,
        "properties": [],
        "propertyStyles": [],
        "requirements": "Requires: Level 65",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Waistgate Heavy Belt, Exceptional Verisium x25, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "Has (1-3) Charm Slots",
          "(20-30)% increased Stun Threshold",
          "Flasks gain (0.5-1) charges per Second"
        ],
        "key": "runemastered heavy belt",
        "label": "Runemastered Heavy Belt",
        "level": 65,
        "properties": [],
        "propertyStyles": [],
        "requirements": "Requires: Level 65",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Waistgate Heavy Belt, Exceptional Verisium x25, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "Has (1-3) Charm Slots",
          "(20-30)% increased Stun Threshold",
          "Flasks gain (0.5-1) charges per Second"
        ],
        "key": "runemastered heavy belt",
        "label": "Runemastered Heavy Belt",
        "level": 65,
        "properties": [],
        "propertyStyles": [],
        "requirements": "Requires: Level 65",
        "tier": "runemastered"
      }
    ],
    "section": "Other",
    "slug": "Waistgate",
    "sourceUrl": "https://poe2db.tw/us/Waistgate",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Utility Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "20% of Flask Recovery applied Instantly"
    ],
    "baseProperties": [
      "Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "A Templar thinks he's righteous for flogging",
      "himself once for every ten lashings he gives."
    ],
    "key": "cat o' nine tails utility belt",
    "level": 55,
    "mods": [
      "+(120-200) to maximum Life",
      "Regenerate 5% of maximum Life per second if you have been Hit Recently",
      "(25-50)% increased Life Recovery rate",
      "Life Recovery other than Flasks cannot Recover Life to above Low Life",
      "Gain Physical Thorns damage equal to 8% - 12% of maximum Life"
    ],
    "name": "Cat O' Nine Tails",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 55",
    "runeforging": [],
    "section": "Other",
    "slug": "Cat_O_Nine_Tails",
    "sourceUrl": "https://poe2db.tw/us/Cat_O_Nine_Tails",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Utility Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "20% of Flask Recovery applied Instantly"
    ],
    "baseProperties": [
      "Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Experiments with geomancy taught",
      "the Maji more than they ever expected."
    ],
    "key": "ingenuity utility belt",
    "level": 55,
    "mods": [
      "(-20-20)% reduced Charm Charges gained",
      "(-10-10)% reduced Charm Charges used",
      "(20-30)% increased bonuses gained from left Equipped Ring",
      "(20-30)% increased bonuses gained from right Equipped Ring"
    ],
    "name": "Ingenuity",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 55",
    "runeforging": [],
    "section": "Other",
    "slug": "Ingenuity",
    "sourceUrl": "https://poe2db.tw/us/Ingenuity",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Utility Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "20% of Flask Recovery applied Instantly"
    ],
    "baseProperties": [
      "Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Rivers of power coursed through their veins.",
      "Now, that power is yours, for good or ill."
    ],
    "key": "mageblood utility belt",
    "level": 55,
    "mods": [
      "All Mage's Legacies have (25-50)% increased effect per duplicate Mage's Legacy you have",
      "Legacy of Mages Legacy",
      "Legacy of Mages Legacy",
      "Legacy of Mages Legacy",
      "Legacy of Mages Legacy"
    ],
    "name": "Mageblood",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 55",
    "runeforging": [],
    "section": "Other",
    "slug": "Mageblood",
    "sourceUrl": "https://poe2db.tw/us/Mageblood",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Heavy Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "(20-30)% increased Stun Threshold"
    ],
    "baseProperties": [
      "Vaal Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The most horrifying ideas often begin with a simple innovation."
    ],
    "key": "zerphi's genesis heavy belt",
    "level": 56,
    "mods": [
      "(25-50)% increased Corrupted Charms effect duration",
      "50% of Charges consumed by used Charms are granted to your Life Flasks",
      "50% of Charges consumed by used Life Flasks are granted to your Charms",
      "+(10-30) to Strength",
      "Skills from Corrupted Gems have (15-25)% increased Cost Efficiency during any Flask Effect",
      "Corrupted Blood cannot be inflicted on you"
    ],
    "name": "Zerphi's Genesis",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 56",
    "runeforging": [],
    "section": "Other",
    "slug": "Zerphis_Genesis",
    "sourceUrl": "https://poe2db.tw/us/Zerphis_Genesis",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Wide Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "(20-30)% increased Flask Charges gained"
    ],
    "baseProperties": [
      "Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"Ghorr knows only hunger, only ravenous feasting.",
      "It will consume all that lives, and more!\"",
      "- Rantings of a Templar prisoner, page fourteen"
    ],
    "key": "the gnashing sash wide belt",
    "level": 60,
    "mods": [
      "(15-35)% increased Flask Life Recovery rate",
      "+(17-23)% to Chaos Resistance",
      "Lose 5% of maximum Life per second",
      "Life Recovery from Flasks can Overflow Maximum Life"
    ],
    "name": "The Gnashing Sash",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 60",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Gnashing_Sash",
    "sourceUrl": "https://poe2db.tw/us/The_Gnashing_Sash",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Fine Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "Flasks gain 0.17 charges per Second"
    ],
    "baseProperties": [
      "Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Kulemak sat triumphant, raising the crown.",
      "Darkness coiled the world in eternal night.",
      "Victory, a mere moment, came crashing down.",
      "No conqueror, no conquered, only searing Light."
    ],
    "key": "darkness enthroned fine belt",
    "level": 62,
    "mods": [
      "(50-100)% increased effect of Socketed Augment Items",
      "This item gains bonuses from Socketed Items as though it was a Body Armour",
      "Has 2 Augment Sockets (Hidden)"
    ],
    "name": "Darkness Enthroned",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 62",
    "runeforging": [],
    "section": "Other",
    "slug": "Darkness_Enthroned",
    "sourceUrl": "https://poe2db.tw/us/Darkness_Enthroned",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Fine Belt",
    "baseImplicitMods": [
      "Has (1-3) Charm Slots",
      "Flasks gain 0.17 charges per Second"
    ],
    "baseProperties": [
      "Belt"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Bring mystery to life. Again and again."
    ],
    "key": "shavronne's satchel fine belt",
    "level": 62,
    "mods": [
      "(20-30)% reduced Flask Life Recovery rate",
      "+(20-30) to Intelligence",
      "(20-30)% increased Flask Charges gained",
      "Life Recovery from Flasks also applies to Energy Shield"
    ],
    "name": "Shavronne's Satchel",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 62",
    "runeforging": [],
    "section": "Other",
    "slug": "Shavronnes_Satchel",
    "sourceUrl": "https://poe2db.tw/us/Shavronnes_Satchel",
    "type": "Belts",
    "verification": "embedded"
  },
  {
    "base": "Hermit Garb",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Evasion Rating: 21-24",
      "Energy Shield: 21-24",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"Prepare the rack, boy. And be careful with those hooks!\"",
      "- the Master Torturer's last words"
    ],
    "key": "apron of emiran hermit garb",
    "level": 1,
    "mods": [
      "(30-50)% increased Evasion and Energy Shield",
      "+(10-20) to Dexterity",
      "Bleeding you inflict is Aggravated",
      "(40-60)% reduced Duration of Bleeding on You"
    ],
    "name": "Apron of Emiran",
    "officialIcon": "",
    "pool": "Body_Armours_dex_int",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Apron of Emiran Hermit Garb, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered hermit garb",
        "label": "Runemastered Hermit Garb",
        "level": 38,
        "properties": [
          "Evasion Rating: 135",
          "Energy Shield: 45",
          "Base Movement Speed: -0.03",
          "Runic Ward: 28"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 35 Dex, 35 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Apron_of_Emiran",
    "sourceUrl": "https://poe2db.tw/us/Apron_of_Emiran",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Rusted Cuirass",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Body Armour",
      "Armour: 45",
      "Base Movement Speed: -0.05"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "It is safer to be feared than to be loved."
    ],
    "key": "bramblejack rusted cuirass",
    "level": 1,
    "mods": [
      "+(60-100) to maximum Life",
      "+(60-100) to Stun Threshold",
      "Cannot Evade Enemy Attacks",
      "250% of Melee Physical Damage taken reflected to Attacker",
      "Regenerate 5% of maximum Life per second while Surrounded"
    ],
    "name": "Bramblejack",
    "officialIcon": "",
    "pool": "Body_Armours_str",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Bramblejack Rusted Cuirass, Verisium x230, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered rusted cuirass",
        "label": "Runemastered Rusted Cuirass",
        "level": 38,
        "properties": [
          "Armour: 244",
          "Base Movement Speed: -0.05",
          "Runic Ward: 110"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Bramblejack",
    "sourceUrl": "https://poe2db.tw/us/Bramblejack",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Leather Vest",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Body Armour",
      "Evasion Rating: 15",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "When cornered and desperate, look within for the rage to break loose."
    ],
    "key": "bristleboar leather vest",
    "level": 1,
    "mods": [
      "50% reduced Evasion Rating",
      "+(40-60) to maximum Life",
      "(3-5) Life Regeneration per second",
      "Gain 5 Rage when Hit by an Enemy",
      "Gain 10 Rage when Critically Hit by an Enemy"
    ],
    "name": "Bristleboar",
    "officialIcon": "",
    "pool": "Body_Armours_dex",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Bristleboar Leather Vest, Verisium x230, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered leather vest",
        "label": "Runemastered Leather Vest",
        "level": 38,
        "properties": [
          "Evasion Rating: 82",
          "Base Movement Speed: -0.03",
          "Runic Ward: 165"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Bristleboar",
    "sourceUrl": "https://poe2db.tw/us/Bristleboar",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Chain Mail",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 45-50",
      "Evasion Rating: 29-32",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "For those noble families obsessed",
      "with keeping their bloodline pure,",
      "there was a price to pay..."
    ],
    "key": "coat of red chain mail",
    "level": 1,
    "mods": [
      "(80-100)% increased Armour and Evasion",
      "+(80-100) to maximum Life",
      "+(75-150) to Stun Threshold",
      "25% chance to be inflicted with Bleeding when Hit"
    ],
    "name": "Coat of Red",
    "officialIcon": "",
    "pool": "Body_Armours_str_dex",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Coat of Red Chain Mail, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered chain mail",
        "label": "Runemastered Chain Mail",
        "level": 38,
        "properties": [
          "Armour: 151",
          "Evasion Rating: 135",
          "Base Movement Speed: -0.04",
          "Runic Ward: 55"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 35 Str, 35 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Coat_of_Red",
    "sourceUrl": "https://poe2db.tw/us/Coat_of_Red",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Pilgrim Vestments",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 38-50",
      "Energy Shield: 24-32",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "The gleam of the night and howling teeth alike could not abate the rising of the sun."
    ],
    "key": "enfolding dawn pilgrim vestments",
    "level": 1,
    "mods": [
      "(50-100)% increased Armour and Energy Shield",
      "+100 to Spirit",
      "+(5-15)% to all Elemental Resistances",
      "Gain no inherent bonus from Intelligence"
    ],
    "name": "Enfolding Dawn",
    "officialIcon": "",
    "pool": "Body_Armours_str_int",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Enfolding Dawn Pilgrim Vestments, Verisium x230, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered pilgrim vestments",
        "label": "Runemastered Pilgrim Vestments",
        "level": 38,
        "properties": [
          "Armour: 202",
          "Energy Shield: 60",
          "Base Movement Speed: -0.04",
          "Runic Ward: 55"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 35 Str, 35 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Enfolding_Dawn",
    "sourceUrl": "https://poe2db.tw/us/Enfolding_Dawn",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Tattered Robe",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Energy Shield: 28",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Faith springs abundant at the edge of death."
    ],
    "key": "ghostwrithe tattered robe",
    "level": 1,
    "mods": [
      "+100 to maximum Energy Shield",
      "+(29-37)% to Chaos Resistance",
      "35% of Maximum Life Converted to Energy Shield"
    ],
    "name": "Ghostwrithe",
    "officialIcon": "",
    "pool": "Body_Armours_int",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Ghostwrithe Tattered Robe, Verisium x1810, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered tattered robe",
        "label": "Runemastered Tattered Robe",
        "level": 38,
        "properties": [
          "Energy Shield: 9",
          "Base Movement Speed: -0.03",
          "Runic Ward: 138"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Ghostwrithe",
    "sourceUrl": "https://poe2db.tw/us/Ghostwrithe",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Garment",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "We happily give our limbs.",
      "A net woven to keep safe the bones of the Lords."
    ],
    "key": "skin of the loyal garment",
    "level": 1,
    "mods": [
      "+(5-40)% to all Elemental Resistances",
      "Elemental Ailment Threshold is increased by Uncapped Chaos Resistance",
      "Armour is increased by Uncapped Fire Resistance",
      "Energy Shield is increased by Uncapped Cold Resistance",
      "Evasion Rating is increased by Uncapped Lightning Resistance"
    ],
    "name": "Skin of the Loyal",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Skin of the Loyal Garment, Verisium x25000, Olroth's Crest of the Sun x1",
        "implicitMods": [],
        "key": "runeforged garment",
        "label": "Runeforged Garment",
        "level": null,
        "properties": [
          "Runic Ward: 100"
        ],
        "propertyStyles": [
          0
        ],
        "requirements": "",
        "tier": "runeforged"
      }
    ],
    "section": "Armour",
    "slug": "Skin_of_the_Loyal",
    "sourceUrl": "https://poe2db.tw/us/Skin_of_the_Loyal",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Garment",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [],
    "key": "tabula rasa garment",
    "level": 1,
    "mods": [
      "Has 6 Jewel Sockets (Hidden)"
    ],
    "name": "Tabula Rasa",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Tabula Rasa Garment, Verisium x50000, Olroth's Crest of the Sun x1",
        "implicitMods": [],
        "key": "runeforged garment",
        "label": "Runeforged Garment",
        "level": null,
        "properties": [
          "Runic Ward: 100"
        ],
        "propertyStyles": [
          0
        ],
        "requirements": "",
        "tier": "runeforged"
      }
    ],
    "section": "Armour",
    "slug": "Tabula_Rasa",
    "sourceUrl": "https://poe2db.tw/us/Tabula_Rasa",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Fur Plate",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Body Armour",
      "Armour: 106-126",
      "Base Movement Speed: -0.05"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "An Ezomyte endures."
    ],
    "key": "blackbraid fur plate",
    "level": 4,
    "mods": [
      "+(40-60) to Armour",
      "+(5-15) to Strength",
      "+(5-15) to Intelligence",
      "+10% to all Elemental Resistances",
      "+(100-150)% of Armour also applies to Elemental Damage",
      "+(40-60) to Stun Threshold"
    ],
    "name": "Blackbraid",
    "officialIcon": "",
    "pool": "Body_Armours_str",
    "requirements": "Requires: Level 4, 10 Str",
    "runeforging": [
      {
        "cost": "Cost: Blackbraid Fur Plate, Verisium x400, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runeforged fur plate",
        "label": "Runeforged Fur Plate",
        "level": 38,
        "properties": [
          "Armour: 275",
          "Base Movement Speed: -0.05",
          "Runic Ward: 69"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Armour",
    "slug": "Blackbraid",
    "sourceUrl": "https://poe2db.tw/us/Blackbraid",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Quilted Vest",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Body Armour",
      "Evasion Rating: 99-119",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "To catch an animal, think like an animal."
    ],
    "key": "foxshade quilted vest",
    "level": 4,
    "mods": [
      "+(50-70) to Evasion Rating",
      "+(20-30) to Dexterity",
      "10% increased Movement Speed when on Full Life",
      "100% increased Evasion Rating when on Full Life"
    ],
    "name": "Foxshade",
    "officialIcon": "",
    "pool": "Body_Armours_dex",
    "requirements": "Requires: Level 4, 10 Dex",
    "runeforging": [
      {
        "cost": "Cost: Foxshade Quilted Vest, Verisium x230, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered quilted vest",
        "label": "Runemastered Quilted Vest",
        "level": 38,
        "properties": [
          "Evasion Rating: 178",
          "Base Movement Speed: -0.03",
          "Runic Ward: 152"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Foxshade",
    "sourceUrl": "https://poe2db.tw/us/Foxshade",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Feathered Robe",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Energy Shield: 70-88",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The soul cannot flourish in a doubting mind."
    ],
    "key": "bitterbloom feathered robe",
    "level": 5,
    "mods": [
      "(50-100)% increased Energy Shield",
      "+(50-100) to maximum Mana",
      "50% increased Energy Shield Recharge Rate",
      "Energy Shield Recharge starts when you use a Mana Flask"
    ],
    "name": "Bitterbloom",
    "officialIcon": "",
    "pool": "Body_Armours_int",
    "requirements": "Requires: Level 5, 11 Int",
    "runeforging": [
      {
        "cost": "Cost: Bitterbloom Feathered Robe, Verisium x430, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered feathered robe",
        "label": "Runemastered Feathered Robe",
        "level": 38,
        "properties": [
          "Energy Shield: 55",
          "Base Movement Speed: -0.03",
          "Runic Ward: 99"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Bitterbloom",
    "sourceUrl": "https://poe2db.tw/us/Bitterbloom",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Pathfinder Coat",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Body Armour",
      "Evasion Rating: 96",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The blasted oak stands forever."
    ],
    "key": "ashrend pathfinder coat",
    "level": 11,
    "mods": [
      "+(40-60) to maximum Life",
      "+(10-20) to Strength",
      "+(30-40)% to Fire Resistance",
      "Cannot be Ignited",
      "-10 Physical Damage taken from Attack Hits"
    ],
    "name": "Ashrend",
    "officialIcon": "",
    "pool": "Body_Armours_dex",
    "requirements": "Requires: Level 11, 21 Dex",
    "runeforging": [
      {
        "cost": "Cost: Ashrend Pathfinder Coat, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered pathfinder coat",
        "label": "Runemastered Pathfinder Coat",
        "level": 38,
        "properties": [
          "Evasion Rating: 219",
          "Base Movement Speed: -0.03",
          "Runic Ward: 55"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Ashrend",
    "sourceUrl": "https://poe2db.tw/us/Ashrend",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Iron Cuirass",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Body Armour",
      "Armour: 253-299",
      "Base Movement Speed: -0.05"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "In death, the legendary boar's tusks were turned",
      "to the slaying of Phaaryl's Eternal oppressors."
    ],
    "key": "edyrn's tusks iron cuirass",
    "level": 11,
    "mods": [
      "(120-160)% increased Armour",
      "50% chance to inflict Bleeding on Hit",
      "50% reduced Slowing Potency of Debuffs on You",
      "(15-20) to (25-30) Physical Thorns damage"
    ],
    "name": "Edyrn's Tusks",
    "officialIcon": "",
    "pool": "Body_Armours_str",
    "requirements": "Requires: Level 11, 21 Str",
    "runeforging": [
      {
        "cost": "Cost: Edyrn's Tusks Iron Cuirass, Verisium x230, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered iron cuirass",
        "label": "Runemastered Iron Cuirass",
        "level": 38,
        "properties": [
          "Armour: 260",
          "Base Movement Speed: -0.05",
          "Runic Ward: 55"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Edyrns_Tusks",
    "sourceUrl": "https://poe2db.tw/us/Edyrns_Tusks",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Waxed Jacket",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Evasion Rating: 106-133",
      "Energy Shield: 25",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "It was in this forsaken land, where mists shroud the world in mystery,",
      "that thieves, murderers, and outcasts, sought refuge."
    ],
    "key": "gloomform waxed jacket",
    "level": 11,
    "mods": [
      "(100-150)% increased Evasion Rating",
      "+(10-20) to Dexterity",
      "+(10-20)% to Fire Resistance",
      "20% reduced Light Radius",
      "You have a Smoke Cloud around you while stationary"
    ],
    "name": "Gloomform",
    "officialIcon": "",
    "pool": "Body_Armours_dex_int",
    "requirements": "Requires: Level 11, 13 Dex, 13 Int",
    "runeforging": [
      {
        "cost": "Cost: Gloomform Waxed Jacket, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered waxed jacket",
        "label": "Runemastered Waxed Jacket",
        "level": 38,
        "properties": [
          "Evasion Rating: 113",
          "Energy Shield: 38",
          "Base Movement Speed: -0.03",
          "Runic Ward: 69"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 35 Dex, 35 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Gloomform",
    "sourceUrl": "https://poe2db.tw/us/Gloomform",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Rogue Armour",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 101-126",
      "Evasion Rating: 85-106",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "In the mists they dwell,",
      "forever hungry,",
      "forever cold."
    ],
    "key": "the barrow dweller rogue armour",
    "level": 11,
    "mods": [
      "(60-100)% increased Armour and Evasion",
      "(-20--10)% to Fire Resistance",
      "+50% to Cold Resistance",
      "Damage of Enemies Hitting you is Unlucky while you are on Low Life",
      "50% chance to Avoid Death from Hits"
    ],
    "name": "The Barrow Dweller",
    "officialIcon": "",
    "pool": "Body_Armours_str_dex",
    "requirements": "Requires: Level 11, 13 Str, 13 Dex",
    "runeforging": [
      {
        "cost": "Cost: The Barrow Dweller Rogue Armour, Verisium x250, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered rogue armour",
        "label": "Runemastered Rogue Armour",
        "level": 38,
        "properties": [
          "Armour: 118",
          "Evasion Rating: 105",
          "Base Movement Speed: -0.04",
          "Runic Ward: 83"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 35 Str, 35 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Barrow_Dweller",
    "sourceUrl": "https://poe2db.tw/us/The_Barrow_Dweller",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Hexer's Robe",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Energy Shield: 72-90",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Suspicion is a sinister shadow slithering in the soul."
    ],
    "key": "the black doubt hexer's robe",
    "level": 11,
    "mods": [
      "(60-100)% increased Energy Shield",
      "+(10-30) to Intelligence",
      "+(10-20)% to Cold Resistance",
      "Damage over Time bypasses your Energy ShieldWhile not on Full Life, Sacrifice 10% of maximum Mana per Second to Recover that much Life"
    ],
    "name": "The Black Doubt",
    "officialIcon": "",
    "pool": "Body_Armours_int",
    "requirements": "Requires: Level 11, 21 Int",
    "runeforging": [
      {
        "cost": "Cost: The Black Doubt Hexer's Robe, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered hexer's robe",
        "label": "Runemastered Hexer's Robe",
        "level": 38,
        "properties": [
          "Energy Shield: 64",
          "Base Movement Speed: -0.03",
          "Runic Ward: 83"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Black_Doubt",
    "sourceUrl": "https://poe2db.tw/us/The_Black_Doubt",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Mail Vestments",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 83",
      "Energy Shield: 30",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "When Solaris closes her burning eye",
      "At the end of time,",
      "the world will perish in ice."
    ],
    "key": "icetomb mail vestments",
    "level": 16,
    "mods": [
      "+(20-30) to Strength",
      "+(20-30) to Intelligence",
      "+(30-40)% to Cold Resistance",
      "Gain Cold Thorns Damage equal to (10-18)% of your maximum Mana"
    ],
    "name": "Icetomb",
    "officialIcon": "",
    "pool": "Body_Armours_str_int",
    "requirements": "Requires: Level 16, 17 Str, 17 Int",
    "runeforging": [
      {
        "cost": "Cost: Icetomb Mail Vestments, Verisium x250, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered mail vestments",
        "label": "Runemastered Mail Vestments",
        "level": 38,
        "properties": [
          "Armour: 118",
          "Energy Shield: 35",
          "Base Movement Speed: -0.04",
          "Runic Ward: 83"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 35 Str, 35 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Icetomb",
    "sourceUrl": "https://poe2db.tw/us/Icetomb",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Vagabond Armour",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 166-208",
      "Evasion Rating: 142-178",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "A power unknown aids your own."
    ],
    "key": "irongrasp vagabond armour",
    "level": 16,
    "mods": [
      "(100-150)% increased Armour and Evasion",
      "+(20-30) to Strength",
      "+(100-150) to Stun Threshold",
      "Iron Grip",
      "Iron Will"
    ],
    "name": "Irongrasp",
    "officialIcon": "",
    "pool": "Body_Armours_str_dex",
    "requirements": "Requires: Level 16, 17 Str, 17 Dex",
    "runeforging": [
      {
        "cost": "Cost: Irongrasp Vagabond Armour, Verisium x260, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered vagabond armour",
        "label": "Runemastered Vagabond Armour",
        "level": 38,
        "properties": [
          "Armour: 143",
          "Evasion Rating: 128",
          "Base Movement Speed: -0.04",
          "Runic Ward: 41"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 35 Str, 35 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Irongrasp",
    "sourceUrl": "https://poe2db.tw/us/Irongrasp",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Bone Raiment",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Energy Shield: 54",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Fueled by the blackness in the hearts of men,",
      "the armies of Saresh were just as relentless."
    ],
    "key": "necromantle bone raiment",
    "level": 16,
    "mods": [
      "+(40-60) to maximum Life",
      "+(30-50) to maximum Mana",
      "Minions gain (20-30)% of their maximum Life as Extra maximum Energy Shield",
      "Minions have +(17-23)% to Chaos Resistance",
      "Minions Revive 50% faster"
    ],
    "name": "Necromantle",
    "officialIcon": "",
    "pool": "Body_Armours_int",
    "requirements": "Requires: Level 16, 28 Int",
    "runeforging": [
      {
        "cost": "Cost: Necromantle Bone Raiment, Verisium x260, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered bone raiment",
        "label": "Runemastered Bone Raiment",
        "level": 38,
        "properties": [
          "Energy Shield: 46",
          "Base Movement Speed: -0.03",
          "Runic Ward: 138"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Necromantle",
    "sourceUrl": "https://poe2db.tw/us/Necromantle",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Shrouded Vest",
    "baseImplicitMods": [
      "Grants Skill: Level 5 Blink"
    ],
    "baseProperties": [
      "Body Armour",
      "Evasion Rating: 192-256",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The desert is ever flowing."
    ],
    "key": "sands of silk shrouded vest",
    "level": 16,
    "mods": [
      "(50-100)% increased Evasion Rating",
      "+(50-80) to maximum Mana",
      "+(10-20) to Dexterity",
      "+(10-20) to Intelligence",
      "+(10-15)% to Fire Resistance",
      "(15-30)% increased Cooldown Recovery Rate",
      "unique blink sand [1]"
    ],
    "name": "Sands of Silk",
    "officialIcon": "",
    "pool": "Body_Armours_dex",
    "requirements": "Requires: Level 16, 28 Dex",
    "runeforging": [
      {
        "cost": "Cost: Sands of Silk Shrouded Vest, Verisium x450, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered shrouded vest",
        "label": "Runemastered Shrouded Vest",
        "level": 38,
        "properties": [
          "Evasion Rating: 164",
          "Base Movement Speed: -0.03",
          "Runic Ward: 138"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Sands_of_Silk",
    "sourceUrl": "https://poe2db.tw/us/Sands_of_Silk",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Marabout Garb",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Evasion Rating: 107-128",
      "Energy Shield: 50-63",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "Born among the high peaks, many Mutewind",
      "live their entire lives in snow and ice."
    ],
    "key": "sierran inheritance marabout garb",
    "level": 16,
    "mods": [
      "(50-80)% increased Evasion and Energy Shield",
      "-15% to Cold Resistance",
      "+(30-40)% to Lightning Resistance",
      "(15-30)% increased Energy Shield Recharge Rate",
      "All Damage taken from Hits Contributes to Magnitude of Chill inflicted on you",
      "The Effect of Chill on you is reversed"
    ],
    "name": "Sierran Inheritance",
    "officialIcon": "",
    "pool": "Body_Armours_dex_int",
    "requirements": "Requires: Level 16, 17 Dex, 17 Int",
    "runeforging": [
      {
        "cost": "Cost: Sierran Inheritance Marabout Garb, Verisium x450, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered marabout garb",
        "label": "Runemastered Marabout Garb",
        "level": 38,
        "properties": [
          "Evasion Rating: 90",
          "Energy Shield: 30",
          "Base Movement Speed: -0.03",
          "Runic Ward: 110"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 35 Dex, 35 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Sierran_Inheritance",
    "sourceUrl": "https://poe2db.tw/us/Sierran_Inheritance",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Maraketh Cuirass",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 890-1068",
      "Base Movement Speed: -0.05"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Not the sound of thunder on the wind, but the",
      "rhoaback riders-death charging from the sands."
    ],
    "key": "titanrot cataphract maraketh cuirass",
    "level": 20,
    "mods": [
      "(400-500)% increased Armour",
      "(15-30)% increased Strength",
      "10% reduced Dexterity",
      "10% reduced Intelligence",
      "You have no Life Regeneration"
    ],
    "name": "Titanrot Cataphract",
    "officialIcon": "",
    "pool": "Body_Armours_str",
    "requirements": "Requires: Level 20, 34 Str",
    "runeforging": [
      {
        "cost": "Cost: Titanrot Cataphract Maraketh Cuirass, Verisium x250, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered maraketh cuirass",
        "label": "Runemastered Maraketh Cuirass",
        "level": 38,
        "properties": [
          "Armour: 275",
          "Base Movement Speed: -0.05",
          "Runic Ward: 28"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Titanrot_Cataphract",
    "sourceUrl": "https://poe2db.tw/us/Titanrot_Cataphract",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Rhoahide Coat",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Body Armour",
      "Evasion Rating: 269-336",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"I carry neither food nor drink. I rely on the charity",
      "of my fellow wayfarers. Dead men are generous men.\"",
      "- Taruk of the Wildmen"
    ],
    "key": "briskwrap rhoahide coat",
    "level": 22,
    "mods": [
      "(60-100)% increased Evasion Rating",
      "(40-60)% increased Flask Life Recovery rate",
      "(40-60)% increased Flask Mana Recovery rate",
      "+(20-30) to Dexterity",
      "+(20-30)% to Cold Resistance",
      "Gain Deflection Rating equal to (20-30)% of Evasion Rating"
    ],
    "name": "Briskwrap",
    "officialIcon": "",
    "pool": "Body_Armours_dex",
    "requirements": "Requires: Level 22, 37 Dex",
    "runeforging": [
      {
        "cost": "Cost: Briskwrap Rhoahide Coat, Verisium x450, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered rhoahide coat",
        "label": "Runemastered Rhoahide Coat",
        "level": 38,
        "properties": [
          "Evasion Rating: 219",
          "Base Movement Speed: -0.03",
          "Runic Ward: 69"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Briskwrap",
    "sourceUrl": "https://poe2db.tw/us/Briskwrap",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Silk Robe",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Energy Shield: 64",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "He who sows an ember shall reap an inferno."
    ],
    "key": "cloak of flame silk robe",
    "level": 22,
    "mods": [
      "+(30-50) to maximum Energy Shield",
      "+(30-50)% to Fire Resistance",
      "(30-50)% reduced Ignite Duration on you",
      "50% of Physical Damage taken as Fire Damage",
      "25 to 35 Fire Thorns damage"
    ],
    "name": "Cloak of Flame",
    "officialIcon": "",
    "pool": "Body_Armours_int",
    "requirements": "Requires: Level 22, 37 Int",
    "runeforging": [
      {
        "cost": "Cost: Cloak of Flame Silk Robe, Verisium x1820, Exceptional Verisium x1, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered silk robe",
        "label": "Runemastered Silk Robe",
        "level": 38,
        "properties": [
          "Energy Shield: 27",
          "Base Movement Speed: -0.03",
          "Runic Ward: 110"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Cloak_of_Flame",
    "sourceUrl": "https://poe2db.tw/us/Cloak_of_Flame",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Studded Vest",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Evasion Rating: 388-485",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Wraeclast has suffered many great disasters,",
      "but life always springs back anew."
    ],
    "key": "dustbloom studded vest",
    "level": 26,
    "mods": [
      "(100-150)% increased Evasion Rating",
      "+(20-30)% to Cold Resistance",
      "Maximum 10 Fragile Regrowth",
      "0.5% of maximum Life Regenerated per second per Fragile Regrowth",
      "10% increased Mana Regeneration Rate per Fragile Regrowth",
      "Lose all Fragile Regrowth when Hit",
      "Gain 1 Fragile Regrowth each second"
    ],
    "name": "Dustbloom",
    "officialIcon": "",
    "pool": "Body_Armours_dex",
    "requirements": "Requires: Level 26, 43 Dex",
    "runeforging": [
      {
        "cost": "Cost: Dustbloom Studded Vest, Verisium x260, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered studded vest",
        "label": "Runemastered Studded Vest",
        "level": 40,
        "properties": [
          "Evasion Rating: 301",
          "Base Movement Speed: -0.03",
          "Runic Ward: 29"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 65 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Dustbloom",
    "sourceUrl": "https://poe2db.tw/us/Dustbloom",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Cloaked Mail",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 182-218",
      "Evasion Rating: 161-193",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "His isolation caused him to treasure",
      "their companionship all the more."
    ],
    "key": "pariah's embrace cloaked mail",
    "level": 26,
    "mods": [
      "(50-80)% increased Armour and Evasion",
      "+50 to Spirit",
      "+(10-15) to all Attributes",
      "(10-15) Life Regeneration per second",
      "(20-40)% increased Mana Cost Efficiency"
    ],
    "name": "Pariah's Embrace",
    "officialIcon": "",
    "pool": "Body_Armours_str_dex",
    "requirements": "Requires: Level 26, 25 Str, 25 Dex",
    "runeforging": [
      {
        "cost": "Cost: Pariah's Embrace Cloaked Mail, Verisium x250, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered cloaked mail",
        "label": "Runemastered Cloaked Mail",
        "level": 40,
        "properties": [
          "Armour: 114",
          "Evasion Rating: 102",
          "Base Movement Speed: -0.04",
          "Runic Ward: 115"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 36 Str, 36 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Pariahs_Embrace",
    "sourceUrl": "https://poe2db.tw/us/Pariahs_Embrace",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Steel Plate",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 342-456",
      "Base Movement Speed: -0.05"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Knowing she could outlast any opponent,",
      "Wrashmin fought not to win, but to delay."
    ],
    "key": "wandering reliquary steel plate",
    "level": 27,
    "mods": [
      "(50-100)% increased Armour",
      "+(40-60) to maximum Mana",
      "+(10-20) to Strength",
      "+(60-80) to Stun Threshold",
      "50% of Physical Damage prevented Recouped as Life"
    ],
    "name": "Wandering Reliquary",
    "officialIcon": "",
    "pool": "Body_Armours_str",
    "requirements": "Requires: Level 27, 45 Str",
    "runeforging": [
      {
        "cost": "Cost: Wandering Reliquary Steel Plate, Verisium x260, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered steel plate",
        "label": "Runemastered Steel Plate",
        "level": 40,
        "properties": [
          "Armour: 271",
          "Base Movement Speed: -0.05",
          "Runic Ward: 43"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 65 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Wandering_Reliquary",
    "sourceUrl": "https://poe2db.tw/us/Wandering_Reliquary",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Keth Raiment",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Energy Shield: 118-148",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "In its final era, the roofs of Keth were rife with",
      "anything and everything that could hold water...",
      "should the opportunity arise."
    ],
    "key": "prayers for rain keth raiment",
    "level": 28,
    "mods": [
      "(60-100)% increased Energy Shield",
      "+(10-15) to Intelligence",
      "+(10-20)% to Lightning Resistance",
      "30% slower start of Energy Shield Recharge",
      "Energy Shield Recharge is not interrupted by Damage if Recharge began Recently"
    ],
    "name": "Prayers for Rain",
    "officialIcon": "",
    "pool": "Body_Armours_int",
    "requirements": "Requires: Level 28, 47 Int",
    "runeforging": [
      {
        "cost": "Cost: Prayers for Rain Keth Raiment, Verisium x250, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered keth raiment",
        "label": "Runemastered Keth Raiment",
        "level": 38,
        "properties": [
          "Energy Shield: 73",
          "Base Movement Speed: -0.03",
          "Runic Ward: 55"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Prayers_for_Rain",
    "sourceUrl": "https://poe2db.tw/us/Prayers_for_Rain",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Shaman Mantle",
    "baseImplicitMods": [
      "Grants Skill: Level 8 Rite of Restoration"
    ],
    "baseProperties": [
      "Body Armour",
      "Armour: 258-323",
      "Energy Shield: 82-103",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"Do not despair! Give yourself to the woods!",
      "Become empty, and the Goddess will find you.",
      "From within her roots... you shall be restored.\"",
      "- Cirel of Caer Tarth"
    ],
    "key": "reverie shaman mantle",
    "level": 28,
    "mods": [
      "(100-150)% increased Armour and Energy Shield",
      "-10% to Fire Resistance",
      "+(17-23)% to Chaos Resistance",
      "Cannot use Life FlasksNon-Unique Life Flasks apply their Effects constantlyRecovery from Life Flasks cannot be InstantRecovery from your Life Flasks cannot be applied to anything other than you",
      "(40-60)% less Life Flask Recovery"
    ],
    "name": "Reverie",
    "officialIcon": "",
    "pool": "Body_Armours_str_int",
    "requirements": "Requires: Level 28, 26 Str, 26 Int",
    "runeforging": [
      {
        "cost": "Cost: Reverie Shaman Mantle, Verisium x440, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered shaman mantle",
        "label": "Runemastered Shaman Mantle",
        "level": 38,
        "properties": [
          "Armour: 141",
          "Energy Shield: 42",
          "Base Movement Speed: -0.04",
          "Runic Ward: 44"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 35 Str, 35 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Reverie",
    "sourceUrl": "https://poe2db.tw/us/Reverie",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Wayfarer Jacket",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Evasion Rating: 399-456",
      "Energy Shield: 103-123",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "Be not where death falls."
    ],
    "key": "the dancing mirage wayfarer jacket",
    "level": 28,
    "mods": [
      "(150-200)% increased Evasion and Energy Shield",
      "+(10-20)% to Lightning Resistance",
      "20% less Damage taken if you have not been Hit Recently",
      "100% increased Evasion Rating if you have been Hit Recently"
    ],
    "name": "The Dancing Mirage",
    "officialIcon": "",
    "pool": "Body_Armours_dex_int",
    "requirements": "Requires: Level 28, 26 Dex, 26 Int",
    "runeforging": [
      {
        "cost": "Cost: The Dancing Mirage Wayfarer Jacket, Verisium x260, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered wayfarer jacket",
        "label": "Runemastered Wayfarer Jacket",
        "level": 40,
        "properties": [
          "Evasion Rating: 134",
          "Energy Shield: 44",
          "Base Movement Speed: -0.03",
          "Runic Ward: 43"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 36 Dex, 36 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Dancing_Mirage",
    "sourceUrl": "https://poe2db.tw/us/The_Dancing_Mirage",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Explorer Armour",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 298-373",
      "Evasion Rating: 264-330",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "There is no safer place",
      "Than the Belly of the Beast"
    ],
    "key": "belly of the beast explorer armour",
    "level": 33,
    "mods": [
      "(100-150)% increased Armour and Evasion",
      "+(100-150) to maximum Life",
      "+(100-150) to Stun Threshold",
      "Life Recovery from Flasks is instant",
      "(25-30) to (35-40) Physical Thorns damage"
    ],
    "name": "Belly of the Beast",
    "officialIcon": "",
    "pool": "Body_Armours_str_dex",
    "requirements": "Requires: Level 33, 31 Str, 31 Dex",
    "runeforging": [
      {
        "cost": "Cost: Belly of the Beast Explorer Armour, Verisium x810, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered explorer armour",
        "label": "Runemastered Explorer Armour",
        "level": 55,
        "properties": [
          "Armour: 199",
          "Evasion Rating: 180",
          "Base Movement Speed: -0.04",
          "Runic Ward: 56"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 49 Str, 49 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Belly_of_the_Beast",
    "sourceUrl": "https://poe2db.tw/us/Belly_of_the_Beast",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Full Plate",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Body Armour",
      "Armour: 270",
      "Base Movement Speed: -0.05"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The toughest armour is the trust of your people."
    ],
    "key": "kingsguard full plate",
    "level": 33,
    "mods": [
      "+(60-80) to maximum Life",
      "+(40-60) to maximum Mana",
      "+(5-10)% to all Elemental Resistances",
      "25% reduced Endurance Charge Duration",
      "Recover 5% of maximum Life for each Endurance Charge consumed"
    ],
    "name": "Kingsguard",
    "officialIcon": "",
    "pool": "Body_Armours_str",
    "requirements": "Requires: Level 33, 54 Str",
    "runeforging": [
      {
        "cost": "Cost: Kingsguard Full Plate, Verisium x320, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered full plate",
        "label": "Runemastered Full Plate",
        "level": 45,
        "properties": [
          "Armour: 231",
          "Base Movement Speed: -0.05",
          "Runic Ward: 126"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 45, 72 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Kingsguard",
    "sourceUrl": "https://poe2db.tw/us/Kingsguard",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Anchorite Garb",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Body Armour",
      "Evasion Rating: 132",
      "Energy Shield: 46",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "In all things, control."
    ],
    "key": "redflare conduit anchorite garb",
    "level": 33,
    "mods": [
      "+(50-70) to maximum Mana",
      "+(20-30)% to Lightning Resistance",
      "20% chance to gain a Power Charge on Hit",
      "Lose all Power Charges on reaching maximum Power Charges",
      "Shocks you when you reach maximum Power Charges"
    ],
    "name": "Redflare Conduit",
    "officialIcon": "",
    "pool": "Body_Armours_dex_int",
    "requirements": "Requires: Level 33, 31 Dex, 31 Int",
    "runeforging": [
      {
        "cost": "Cost: Redflare Conduit Anchorite Garb, Verisium x460, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered anchorite garb",
        "label": "Runemastered Anchorite Garb",
        "level": 55,
        "properties": [
          "Evasion Rating: 138",
          "Energy Shield: 43",
          "Base Movement Speed: -0.03",
          "Runic Ward: 130"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 49 Dex, 49 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Redflare_Conduit",
    "sourceUrl": "https://poe2db.tw/us/Redflare_Conduit",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Votive Raiment",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Body Armour",
      "Energy Shield: 166-208",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "A faith born of flesh."
    ],
    "key": "tetzlapokal's desire votive raiment",
    "level": 33,
    "mods": [
      "(100-150)% increased Energy Shield",
      "+(20-30) to Strength",
      "+(20-30) to Intelligence",
      "+(17-23)% to Chaos Resistance",
      "Life Recharges"
    ],
    "name": "Tetzlapokal's Desire",
    "officialIcon": "",
    "pool": "Body_Armours_int",
    "requirements": "Requires: Level 33, 54 Int",
    "runeforging": [
      {
        "cost": "Cost: Tetzlapokal's Desire Votive Raiment, Verisium x460, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered votive raiment",
        "label": "Runemastered Votive Raiment",
        "level": 55,
        "properties": [
          "Energy Shield: 48",
          "Base Movement Speed: -0.03",
          "Runic Ward: 186"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 87 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Tetzlapokals_Desire",
    "sourceUrl": "https://poe2db.tw/us/Tetzlapokals_Desire",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Scout's Vest",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Evasion Rating: 480-600",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The truth lies inside every man, if you dig around.",
      "Many a confession was found in the bowels of Axiom."
    ],
    "key": "the rat cage scout's vest",
    "level": 33,
    "mods": [
      "(100-150)% increased Evasion Rating",
      "+300 to maximum Life",
      "25% reduced Attribute Requirements",
      "100% of Fire Damage from Hits taken as Physical Damage"
    ],
    "name": "The Rat Cage",
    "officialIcon": "",
    "pool": "Body_Armours_dex",
    "requirements": "Requires: Level 33, 40.5 Dex",
    "runeforging": [
      {
        "cost": "Cost: The Rat Cage Scout's Vest, Verisium x460, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered scout's vest",
        "label": "Runemastered Scout's Vest",
        "level": 55,
        "properties": [
          "Evasion Rating: 270",
          "Base Movement Speed: -0.03",
          "Runic Ward: 130"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 87 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Rat_Cage",
    "sourceUrl": "https://poe2db.tw/us/The_Rat_Cage",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Serpentscale Coat",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Body Armour",
      "Evasion Rating: 416-468",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "As the serpent wills."
    ],
    "key": "quatl's molt serpentscale coat",
    "level": 36,
    "mods": [
      "(60-80)% increased Evasion Rating",
      "+(60-80) to maximum Life",
      "+(17-23)% to Chaos Resistance",
      "Gain Deflection Rating equal to (40-60)% of Evasion Rating",
      "(10-20) Life Regeneration per second",
      "Cannot be Poisoned"
    ],
    "name": "Quatl's Molt",
    "officialIcon": "",
    "pool": "Body_Armours_dex",
    "requirements": "Requires: Level 36, 59 Dex",
    "runeforging": [
      {
        "cost": "Cost: Quatl's Molt Serpentscale Coat, Verisium x3730, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered serpentscale coat",
        "label": "Runemastered Serpentscale Coat",
        "level": 55,
        "properties": [
          "Evasion Rating: 385",
          "Base Movement Speed: -0.03",
          "Runic Ward: 19"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 87 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Quatls_Molt",
    "sourceUrl": "https://poe2db.tw/us/Quatls_Molt",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Sacrificial Mantle",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Body Armour",
      "Armour: 288-352",
      "Energy Shield: 86-106",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "The greatest mistakes cause suffering",
      "long after they have been made"
    ],
    "key": "soul mantle sacrificial mantle",
    "level": 36,
    "mods": [
      "(80-120)% increased Armour and Energy Shield",
      "+75 to Spirit",
      "+10 to Strength",
      "+15 to Intelligence",
      "+1 to maximum number of Summoned Totems",
      "Inflicts a random Curse on you when your Totems die, ignoring Curse limit"
    ],
    "name": "Soul Mantle",
    "officialIcon": "",
    "pool": "Body_Armours_str_int",
    "requirements": "Requires: Level 36, 33 Str, 33 Int",
    "runeforging": [
      {
        "cost": "Cost: Soul Mantle Sacrificial Mantle, Verisium x460, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered sacrificial mantle",
        "label": "Runemastered Sacrificial Mantle",
        "level": 55,
        "properties": [
          "Armour: 210",
          "Energy Shield: 60",
          "Base Movement Speed: -0.04",
          "Runic Ward: 37"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 49 Str, 49 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Soul_Mantle",
    "sourceUrl": "https://poe2db.tw/us/Soul_Mantle",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Scale Mail",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Body Armour",
      "Armour: 246-328",
      "Evasion Rating: 221-294",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"This was the first step in some grand design,",
      "lost to the ages, now ours to decipher.\"",
      "- Dominus, High Templar"
    ],
    "key": "doryani's prototype scale mail",
    "level": 37,
    "mods": [
      "(50-100)% increased Armour and Evasion",
      "+(60-80) to maximum Life",
      "+100% of Armour also applies to Lightning Damage",
      "Enemies in your Presence have Lightning Resistance equal to yours",
      "Lightning Resistance does not affect Lightning damage taken"
    ],
    "name": "Doryani's Prototype",
    "officialIcon": "",
    "pool": "Body_Armours_str_dex",
    "requirements": "Requires: Level 37, 34 Str, 34 Dex",
    "runeforging": [
      {
        "cost": "Cost: Doryani's Prototype Scale Mail, Verisium x830, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered scale mail",
        "label": "Runemastered Scale Mail",
        "level": 55,
        "properties": [
          "Armour: 187",
          "Evasion Rating: 170",
          "Base Movement Speed: -0.04",
          "Runic Ward: 75"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 49 Str, 49 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Doryanis_Prototype",
    "sourceUrl": "https://poe2db.tw/us/Doryanis_Prototype",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Vaal Cuirass",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Body Armour",
      "Armour: 596-745",
      "Base Movement Speed: -0.05"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Some would question if the risk was worth it.",
      "The rest were already dead."
    ],
    "key": "greed's embrace vaal cuirass",
    "level": 37,
    "mods": [
      "50% increased Strength Requirement",
      "20% reduced Movement Speed",
      "(100-150)% increased Armour",
      "(30-50)% increased Rarity of Items found",
      "+(20-30)% to Fire Resistance"
    ],
    "name": "Greed's Embrace",
    "officialIcon": "",
    "pool": "Body_Armours_str",
    "requirements": "Requires: Level 37, 90 Str",
    "runeforging": [
      {
        "cost": "Cost: Greed's Embrace Vaal Cuirass, Verisium x820, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered vaal cuirass",
        "label": "Runemastered Vaal Cuirass",
        "level": 55,
        "properties": [
          "Armour: 340",
          "Base Movement Speed: -0.05",
          "Runic Ward: 93"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 87 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Greeds_Embrace",
    "sourceUrl": "https://poe2db.tw/us/Greeds_Embrace",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Scalper's Jacket",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Body Armour",
      "Evasion Rating: 246-277",
      "Energy Shield: 82-92",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "Mortality is a curse.",
      "The cure is simple."
    ],
    "key": "zerphi's serape scalper's jacket",
    "level": 39,
    "mods": [
      "(60-80)% increased Evasion and Energy Shield",
      "+(40-60) to maximum Mana",
      "50% increased Attribute Requirements",
      "(-30-30)% reduced Life Regeneration rate",
      "(-30-30)% reduced Mana Regeneration Rate",
      "Soul Eater"
    ],
    "name": "Zerphi's Serape",
    "officialIcon": "",
    "pool": "Body_Armours_dex_int",
    "requirements": "Requires: Level 39, 52.5 Dex, 52.5 Int",
    "runeforging": [
      {
        "cost": "Cost: Zerphi's Serape Scalper's Jacket, Verisium x3770, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered scalper's jacket",
        "label": "Runemastered Scalper's Jacket",
        "level": 55,
        "properties": [
          "Evasion Rating: 170",
          "Energy Shield: 53",
          "Base Movement Speed: -0.03",
          "Runic Ward: 75"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 49 Dex, 49 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Zerphis_Serape",
    "sourceUrl": "https://poe2db.tw/us/Zerphis_Serape",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Altar Robe",
    "baseImplicitMods": [
      "Grants Skill: Level 10 Life Remnants"
    ],
    "baseProperties": [
      "Vaal Body Armour",
      "Energy Shield: 190-238",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "My Soul is your StrengthMy Price is your Blood"
    ],
    "key": "the covenant altar robe",
    "level": 40,
    "mods": [
      "(100-150)% increased Energy Shield",
      "+(100-150) to maximum Life",
      "10% of Spell Damage Leeched as Life",
      "Skills Gain 100% of Mana Cost as Extra Life Cost"
    ],
    "name": "The Covenant",
    "officialIcon": "",
    "pool": "Body_Armours_int",
    "requirements": "Requires: Level 40, 65 Int",
    "runeforging": [
      {
        "cost": "Cost: The Covenant Altar Robe, Verisium x3830, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered altar robe",
        "label": "Runemastered Altar Robe",
        "level": 55,
        "properties": [
          "Energy Shield: 72",
          "Base Movement Speed: -0.03",
          "Runic Ward: 149"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 87 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Covenant",
    "sourceUrl": "https://poe2db.tw/us/The_Covenant",
    "type": "Body Armours",
    "verification": "page"
  },
  {
    "base": "Ornate Ringmail",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 749",
      "Energy Shield: 220",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "The collector need not even speak. Each ring",
      "regaled them with tales of his conquest."
    ],
    "key": "loreweave ornate ringmail",
    "level": 43,
    "mods": [
      "Adds (1-4) to (8-12) Physical Damage to Attacks",
      "+(200-300) to Accuracy Rating",
      "+(20-30) to maximum Mana",
      "(6-15)% increased Rarity of Items found",
      "+(2-5)% to Quality of all Skills",
      "(7-10)% increased Cast Speed",
      "Your Maximum Resistances are (75-80)%",
      "Random 3 Unique Ring Modifiers"
    ],
    "name": "Loreweave",
    "officialIcon": "",
    "pool": "Body_Armours_str_int",
    "requirements": "Requires: Level 43, 45 Str, 45 Int",
    "runeforging": [
      {
        "cost": "Cost: Loreweave Ornate Ringmail, Verisium x3740, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered ornate ringmail",
        "label": "Runemastered Ornate Ringmail",
        "level": 55,
        "properties": [
          "Armour: 725",
          "Energy Shield: 206",
          "Base Movement Speed: -0.04",
          "Runic Ward: 130"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 57 Str, 57 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Loreweave",
    "sourceUrl": "https://poe2db.tw/us/Loreweave",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Elementalist Robe",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Energy Shield: 1236-1277",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The tale-women of old knew how to build anticipation."
    ],
    "key": "gloamgown elementalist robe",
    "level": 45,
    "mods": [
      "(100-140)% increased Energy Shield",
      "+(30-40) to Spirit",
      "+(25-35)% to Cold Resistance",
      "1000% increased Energy Shield Recharge Rate",
      "Your base Energy Shield Recharge Delay is 10 seconds"
    ],
    "name": "Gloamgown",
    "officialIcon": "",
    "pool": "Body_Armours_int",
    "requirements": "Requires: Level 45, 72 Int",
    "runeforging": [
      {
        "cost": "Cost: Gloamgown Elementalist Robe, Verisium x300, Exceptional Verisium x1, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered elementalist robe",
        "label": "Runemastered Elementalist Robe",
        "level": 55,
        "properties": [
          "Energy Shield: 96",
          "Base Movement Speed: -0.03",
          "Runic Ward: 75"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 87 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Gloamgown",
    "sourceUrl": "https://poe2db.tw/us/Gloamgown",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Knight Armour",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 780-1073",
      "Evasion Rating: 704-968",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "The Trickster God turned the very Day and Night against each other.",
      "What hope have you?"
    ],
    "key": "perfidy knight armour",
    "level": 45,
    "mods": [
      "(300-450)% increased Armour and Evasion",
      "(10-30)% chance to Avoid Physical Damage from Hits",
      "(10-30)% chance to Avoid Fire Damage from Hits",
      "(10-30)% chance to Avoid Cold Damage from Hits",
      "(10-30)% chance to Avoid Lightning Damage from Hits",
      "(10-30)% chance to Avoid Chaos Damage from Hits",
      "Enemies in your Presence are Intimidated"
    ],
    "name": "Perfidy",
    "officialIcon": "",
    "pool": "Body_Armours_str_dex",
    "requirements": "Requires: Level 45, 41 Str, 41 Dex",
    "runeforging": [
      {
        "cost": "Cost: Perfidy Knight Armour, Verisium x750, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered knight armour",
        "label": "Runemastered Knight Armour",
        "level": 55,
        "properties": [
          "Armour: 175",
          "Evasion Rating: 159",
          "Base Movement Speed: -0.04",
          "Runic Ward: 93"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 49 Str, 49 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Perfidy",
    "sourceUrl": "https://poe2db.tw/us/Perfidy",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Cleric Vestments",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 390-488",
      "Energy Shield: 143-200",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "Through every great purge, and every fiery inquisition,",
      "the Twilight Order endured in secret."
    ],
    "key": "the mutable star cleric vestments",
    "level": 45,
    "mods": [
      "(100-150)% increased Armour and Energy Shield",
      "(50-100)% increased Energy Shield Recharge Rate",
      "(25-35) Life Regeneration per second",
      "(30-50)% reduced Ignite Duration on you",
      "Defend against Hits as though you had 1% more Armour per 1% current Energy Shield",
      "(30-50)% reduced Duration of Bleeding on You"
    ],
    "name": "The Mutable Star",
    "officialIcon": "",
    "pool": "Body_Armours_str_int",
    "requirements": "Requires: Level 45, 41 Str, 41 Int",
    "runeforging": [
      {
        "cost": "Cost: The Mutable Star Cleric Vestments, Verisium x470, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered cleric vestments",
        "label": "Runemastered Cleric Vestments",
        "level": 55,
        "properties": [
          "Armour: 187",
          "Energy Shield: 53",
          "Base Movement Speed: -0.04",
          "Runic Ward: 75"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 49 Str, 49 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Mutable_Star",
    "sourceUrl": "https://poe2db.tw/us/The_Mutable_Star",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Knight Armour",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 429-546",
      "Evasion Rating: 387-493",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"What are you lot looking at? We're",
      "under fire! Get to your stations!\"",
      "- Captain Sventura, the Unlucky"
    ],
    "key": "the sunken vessel knight armour",
    "level": 45,
    "mods": [
      "(120-180)% increased Armour and Evasion",
      "+(80-120) to maximum Life",
      "30% reduced Life Recovery rate",
      "33% chance to avoid Projectiles",
      "Physical Damage of Enemies Hitting you is Unlucky",
      "Convert All Armour to Evasion Rating"
    ],
    "name": "The Sunken Vessel",
    "officialIcon": "",
    "pool": "Body_Armours_str_dex",
    "requirements": "Requires: Level 45, 41 Str, 41 Dex",
    "runeforging": [
      {
        "cost": "Cost: The Sunken Vessel Knight Armour, Verisium x600, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered knight armour",
        "label": "Runemastered Knight Armour",
        "level": 55,
        "properties": [
          "Armour: 175",
          "Evasion Rating: 159",
          "Base Movement Speed: -0.04",
          "Runic Ward: 93"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 49 Str, 49 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Sunken_Vessel",
    "sourceUrl": "https://poe2db.tw/us/The_Sunken_Vessel",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Knight Armour",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 390-488",
      "Evasion Rating: 352-440",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "That day, both the Unblinking Eye and",
      "their enemies stood in silence. That day,",
      "the sky was clear, but it was raining."
    ],
    "key": "widow's reign knight armour",
    "level": 45,
    "mods": [
      "(100-150)% increased Armour and Evasion",
      "+(100-150) to maximum Life",
      "+(17-23)% to Chaos Resistance",
      "+(200-300) to Ailment Threshold",
      "Life that would be lost by taking Damage is instead Reserveduntil you take no Damage to Life for 3 seconds"
    ],
    "name": "Widow's Reign",
    "officialIcon": "",
    "pool": "Body_Armours_str_dex",
    "requirements": "Requires: Level 45, 41 Str, 41 Dex",
    "runeforging": [
      {
        "cost": "Cost: Widow's Reign Knight Armour, Verisium x830, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered knight armour",
        "label": "Runemastered Knight Armour",
        "level": 55,
        "properties": [
          "Armour: 175",
          "Evasion Rating: 159",
          "Base Movement Speed: -0.04",
          "Runic Ward: 93"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 49 Str, 49 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Widows_Reign",
    "sourceUrl": "https://poe2db.tw/us/Widows_Reign",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Ancestral Mail",
    "baseImplicitMods": [
      "Grants Skill: Level 12 Valako's Charge"
    ],
    "baseProperties": [
      "Body Armour",
      "Armour: 385-471",
      "Evasion Rating: 349-427",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "The world churned during the Great Wasting.",
      "Tawhoa may have stilled the rioting earth,",
      "but it was Valako that tamed the broken sky."
    ],
    "key": "lightning coil ancestral mail",
    "level": 50,
    "mods": [
      "(80-120)% increased Armour and Evasion",
      "+(80-100) to maximum Life",
      "+(20-30) to Dexterity",
      "(-40--30)% to Lightning Resistance",
      "(30-50)% of Physical damage from Hits taken as Lightning damage",
      "lightning coil replace damage hit effect index [110]"
    ],
    "name": "Lightning Coil",
    "officialIcon": "",
    "pool": "Body_Armours_str_dex",
    "requirements": "Requires: Level 50, 44 Str, 44 Dex",
    "runeforging": [
      {
        "cost": "Cost: Lightning Coil Ancestral Mail, Verisium x1140, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered ancestral mail",
        "label": "Runemastered Ancestral Mail",
        "level": 65,
        "properties": [
          "Armour: 191",
          "Evasion Rating: 174",
          "Base Movement Speed: -0.04",
          "Runic Ward: 107"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 57 Str, 57 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Lightning_Coil",
    "sourceUrl": "https://poe2db.tw/us/Lightning_Coil",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Smuggler Coat",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Evasion Rating: 1257-1436",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Shedding away her regal past,",
      "she forged a new destiny.",
      "Sacrificing the ephemeral joys of man,",
      "she embraced the eternal grasp of nature.",
      "Seizing her one true wish,",
      "she found peace at last."
    ],
    "key": "queen of the forest smuggler coat",
    "level": 51,
    "mods": [
      "(250-300)% increased Evasion Rating",
      "(-15--10)% to Fire Resistance",
      "+(25-30)% to Cold Resistance",
      "+(10-15)% to Lightning Resistance",
      "Increases Movement Speed by 25%, plus 1% per 600 Evasion Rating, up to a maximum of 75%Other Modifiers to Movement Speed except for Sprinting do not apply"
    ],
    "name": "Queen of the Forest",
    "officialIcon": "",
    "pool": "Body_Armours_dex",
    "requirements": "Requires: Level 51, 82 Dex",
    "runeforging": [
      {
        "cost": "Cost: Queen of the Forest Smuggler Coat, Verisium x5000, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered smuggler coat",
        "label": "Runemastered Smuggler Coat",
        "level": 65,
        "properties": [
          "Evasion Rating: 406",
          "Base Movement Speed: -0.03",
          "Runic Ward: 86"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 103 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Queen_of_the_Forest",
    "sourceUrl": "https://poe2db.tw/us/Queen_of_the_Forest",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Tideseer Mantle",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 218",
      "Energy Shield: 63",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"Move in ways your enemy does not expect.",
      "Confuse them with elegance and grace.",
      "They'll never see the axe coming.\"",
      "- Rakiata, Chieftain of the Tasalio Tribe"
    ],
    "key": "waveshaper tideseer mantle",
    "level": 51,
    "mods": [
      "+(100-200) to maximum Energy Shield",
      "+(20-40) to Spirit",
      "+(25-35)% to Fire Resistance",
      "+(25-35)% to Cold Resistance",
      "Increases and Reductions to Mana Regeneration Rate alsoapply to Energy Shield Recharge Rate",
      "Gain (30-50)% of Maximum Mana as Armour"
    ],
    "name": "Waveshaper",
    "officialIcon": "",
    "pool": "Body_Armours_str_int",
    "requirements": "Requires: Level 51, 45 Str, 45 Int",
    "runeforging": [
      {
        "cost": "Cost: Waveshaper Tideseer Mantle, Verisium x1160, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered tideseer mantle",
        "label": "Runemastered Tideseer Mantle",
        "level": 65,
        "properties": [
          "Armour: 55",
          "Energy Shield: 15",
          "Base Movement Speed: -0.04",
          "Runic Ward: 129"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 57 Str, 57 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Waveshaper",
    "sourceUrl": "https://poe2db.tw/us/Waveshaper",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Gilded Vestments",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 333-444",
      "Energy Shield: 95-126",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "It is often said of nobles that they live off their",
      "peasants... sometimes, it's truer than any suspect."
    ],
    "key": "couture of crimson gilded vestments",
    "level": 52,
    "mods": [
      "(50-100)% increased Armour and Energy Shield",
      "(10-15)% increased maximum Life",
      "Life Leech can Overflow Maximum Life",
      "(40-60)% reduced Duration of Bleeding on You"
    ],
    "name": "Couture of Crimson",
    "officialIcon": "",
    "pool": "Body_Armours_str_int",
    "requirements": "Requires: Level 52, 46 Str, 46 Int",
    "runeforging": [
      {
        "cost": "Cost: Couture of Crimson Gilded Vestments, Verisium x5360, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered gilded vestments",
        "label": "Runemastered Gilded Vestments",
        "level": 65,
        "properties": [
          "Armour: 218",
          "Energy Shield: 61",
          "Base Movement Speed: -0.04",
          "Runic Ward: 86"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 57 Str, 57 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Couture_of_Crimson",
    "sourceUrl": "https://poe2db.tw/us/Couture_of_Crimson",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Explorer Armour",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 447-596",
      "Evasion Rating: 396-528",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "In an endless war against darkness,",
      "one must be ever vigilant."
    ],
    "key": "pragmatism explorer armour",
    "level": 52,
    "mods": [
      "(200-300)% increased Armour and Evasion",
      "+(10-20)% to all Elemental Resistances",
      "-17% to Chaos Resistance",
      "Charms use no Charges"
    ],
    "name": "Pragmatism",
    "officialIcon": "",
    "pool": "Body_Armours_str_dex",
    "requirements": "Requires: Level 52, 31 Str, 31 Dex",
    "runeforging": [
      {
        "cost": "Cost: Pragmatism Explorer Armour, Verisium x2500, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered explorer armour",
        "label": "Runemastered Explorer Armour",
        "level": 55,
        "properties": [
          "Armour: 199",
          "Evasion Rating: 180",
          "Base Movement Speed: -0.04",
          "Runic Ward: 56"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 49 Str, 49 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Pragmatism",
    "sourceUrl": "https://poe2db.tw/us/Pragmatism",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Strider Vest",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Evasion Rating: 732-915",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Feed a beast and it will not hunt.",
      "Protect it and it will not fight.",
      "Ferocity must be learned, not taught.",
      "It is suffering that forges the greatest warriors."
    ],
    "key": "yriel's fostering strider vest",
    "level": 52,
    "mods": [
      "(100-150)% increased Evasion Rating",
      "+(80-120) to maximum Life",
      "+(10-30) to Spirit",
      "(40-60)% reduced Poison Duration on you",
      "(40-60)% reduced Duration of Bleeding on You",
      "You can have two Companions of different types"
    ],
    "name": "Yriel's Fostering",
    "officialIcon": "",
    "pool": "Body_Armours_dex",
    "requirements": "Requires: Level 52, 83 Dex",
    "runeforging": [
      {
        "cost": "Cost: Yriel's Fostering Strider Vest, Verisium x9200, Exceptional Verisium x12, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered strider vest",
        "label": "Runemastered Strider Vest",
        "level": 70,
        "properties": [
          "Evasion Rating: 384",
          "Base Movement Speed: -0.03",
          "Runic Ward: 107"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 70, 103 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Yriels_Fostering",
    "sourceUrl": "https://poe2db.tw/us/Yriels_Fostering",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Champion Cuirass",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 2676-3122",
      "Base Movement Speed: -0.05"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The turtle's shell one day becomes its tomb."
    ],
    "key": "the brass dome champion cuirass",
    "level": 58,
    "mods": [
      "(500-600)% increased Armour",
      "(-5--1)% to all Maximum Elemental Resistances",
      "+(200-300) to Stun Threshold",
      "Take no Extra Damage from Critical Hits"
    ],
    "name": "The Brass Dome",
    "officialIcon": "",
    "pool": "Body_Armours_str",
    "requirements": "Requires: Level 58, 92 Str",
    "runeforging": [
      {
        "cost": "Cost: The Brass Dome Champion Cuirass, Exceptional Verisium x39, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "+(750-1000) to maximum Runic Ward"
        ],
        "key": "runeforged champion cuirass",
        "label": "Runeforged Champion Cuirass",
        "level": 58,
        "properties": [
          "Base Movement Speed: -0.05"
        ],
        "propertyStyles": [
          0
        ],
        "requirements": "Requires: Level 58, 92 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Armour",
    "slug": "The_Brass_Dome",
    "sourceUrl": "https://poe2db.tw/us/The_Brass_Dome",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Plated Raiment",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Energy Shield: 214-252",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Reap what others have sown",
      "Muster them from their graves",
      "Parade them for your pleasure",
      "Zealots in mortis enslaved"
    ],
    "key": "vis mortis plated raiment",
    "level": 58,
    "mods": [
      "(70-100)% increased Energy Shield",
      "+(70-100) to maximum Mana",
      "Minions have 50% reduced maximum Life",
      "Minions have Unholy Might"
    ],
    "name": "Vis Mortis",
    "officialIcon": "",
    "pool": "Body_Armours_int",
    "requirements": "Requires: Level 58, 92 Int",
    "runeforging": [
      {
        "cost": "Cost: Vis Mortis Plated Raiment, Verisium x1150, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered plated raiment",
        "label": "Runemastered Plated Raiment",
        "level": 65,
        "properties": [
          "Energy Shield: 124",
          "Base Movement Speed: -0.03",
          "Runic Ward: 43"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 103 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Vis_Mortis",
    "sourceUrl": "https://poe2db.tw/us/Vis_Mortis",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Plated Vestments",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 623-747",
      "Energy Shield: 175-210",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "Although a great leader during the war,",
      "Voll proved disastrous in times of peace."
    ],
    "key": "voll's protector plated vestments",
    "level": 59,
    "mods": [
      "(150-200)% increased Armour and Energy Shield",
      "25% reduced maximum Mana",
      "+(13-17)% to Chaos Resistance",
      "25% chance to gain a Power Charge on Critical Hit"
    ],
    "name": "Voll's Protector",
    "officialIcon": "",
    "pool": "Body_Armours_str_int",
    "requirements": "Requires: Level 59, 52 Str, 52 Int",
    "runeforging": [
      {
        "cost": "Cost: Voll's Protector Plated Vestments, Verisium x820, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered ironclad vestments",
        "label": "Runemastered Ironclad Vestments",
        "level": 55,
        "properties": [
          "Armour: 210",
          "Energy Shield: 60",
          "Base Movement Speed: -0.04",
          "Runic Ward: 37"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 49 Str, 49 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Volls_Protector",
    "sourceUrl": "https://poe2db.tw/us/Volls_Protector",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Silk Robe",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Energy Shield: 64",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The final element the tale-women",
      "mastered was Time itself."
    ],
    "key": "temporalis silk robe",
    "level": 64,
    "mods": [
      "+(100-150) to maximum Energy Shield",
      "+(10-20)% to all Elemental Resistances",
      "(5-30)% of Damage taken Recouped as Life",
      "(5-30)% of Damage taken Recouped as Mana",
      "Skills have (-2--1) seconds to Cooldown"
    ],
    "name": "Temporalis",
    "officialIcon": "",
    "pool": "Body_Armours_int",
    "requirements": "Requires: Level 64, 37 Int",
    "runeforging": [
      {
        "cost": "Cost: Temporalis Silk Robe, Verisium x2500, Exceptional Verisium x1, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered silk robe",
        "label": "Runemastered Silk Robe",
        "level": 38,
        "properties": [
          "Energy Shield: 27",
          "Base Movement Speed: -0.03",
          "Runic Ward: 110"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 61 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Temporalis",
    "sourceUrl": "https://poe2db.tw/us/Temporalis",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Sacrificial Regalia",
    "baseImplicitMods": [
      "+1 to Level of all Corrupted Skill Gems"
    ],
    "baseProperties": [
      "Vaal Body Armour",
      "Armour: 491-601",
      "Evasion Rating: 446-546",
      "Energy Shield: 137-167",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"When you have nothing to hide,",
      "you have nothing to fear.\"",
      "- Atziri, Queen of the Vaal"
    ],
    "key": "atziri's splendour sacrificial regalia",
    "level": 65,
    "mods": [
      "Only Soul Cores can be Socketed in this item",
      "Has no Attribute Requirements",
      "(80-120)% increased Armour, Evasion and Energy Shield",
      "+(10-20)% to all Elemental Resistances",
      "Skills from Corrupted Gems have 50% of Mana Costs Converted to Life Costs",
      "This item gains bonuses from Socketed Soul Cores as though it was also a [Random socketable equipment type]",
      "Has 6 Augment Sockets (Hidden)"
    ],
    "name": "Atziri's Splendour",
    "officialIcon": "",
    "pool": "Body_Armours_str_dex_int",
    "requirements": "Requires: Level 65",
    "runeforging": [
      {
        "cost": "Cost: Atziri's Splendour Sacrificial Regalia, Verisium x560, Exceptional Verisium x2, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "+1 to Level of all Corrupted Skill Gems"
        ],
        "key": "runemastered sacrificial regalia",
        "label": "Runemastered Sacrificial Regalia",
        "level": 65,
        "properties": [
          "Armour: 136",
          "Evasion Rating: 124",
          "Energy Shield: 38",
          "Base Movement Speed: -0.03",
          "Runic Ward: 215"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 72 Str, 72 Dex, 72 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Atziris_Splendour",
    "sourceUrl": "https://poe2db.tw/us/Atziris_Splendour",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Havoc Raiment",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Energy Shield: 207-276",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "When the throat roars,",
      "As eyes weep,",
      "When the hand grips hard",
      "With trembling fingers,",
      "When belly twists",
      "Yet legs stand strong,",
      "That is the work",
      "Of the Defiant Heart."
    ],
    "key": "cloak of defiance havoc raiment",
    "level": 65,
    "mods": [
      "(50-100)% increased Energy Shield",
      "+(100-150) to maximum Mana",
      "(50-100)% increased Mana Regeneration Rate",
      "50% of Damage is taken from Mana before Life"
    ],
    "name": "Cloak of Defiance",
    "officialIcon": "",
    "pool": "Body_Armours_int",
    "requirements": "Requires: Level 65, 121 Int",
    "runeforging": [
      {
        "cost": "Cost: Cloak of Defiance Havoc Raiment, Verisium x6140, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered havoc raiment",
        "label": "Runemastered Havoc Raiment",
        "level": 70,
        "properties": [
          "Energy Shield: 96",
          "Base Movement Speed: -0.03",
          "Runic Ward: 129"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 70, 121 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Cloak_of_Defiance",
    "sourceUrl": "https://poe2db.tw/us/Cloak_of_Defiance",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Revered Vestments",
    "baseImplicitMods": [
      "+1% to all Maximum Elemental Resistances"
    ],
    "baseProperties": [
      "Body Armour",
      "Armour: 683-819",
      "Energy Shield: 76",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "Faith does not make us invulnerable.",
      "It makes us immortal."
    ],
    "key": "geofri's sanctuary revered vestments",
    "level": 65,
    "mods": [
      "(150-200)% increased Armour",
      "+(10-20)% to all Elemental Resistances",
      "Your maximum Energy Shield is equal to (200-300)% of your Strength",
      "Maximum Energy Shield cannot be Converted",
      "Regenerate 2 Life per second for every 10 Intelligence",
      "Zealot's Oath"
    ],
    "name": "Geofri's Sanctuary",
    "officialIcon": "",
    "pool": "Body_Armours_str_int",
    "requirements": "Requires: Level 65, 67 Str, 67 Int",
    "runeforging": [],
    "section": "Armour",
    "slug": "Geofris_Sanctuary",
    "sourceUrl": "https://poe2db.tw/us/Geofris_Sanctuary",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Grand Regalia",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 728-910",
      "Evasion Rating: 660-825",
      "Energy Shield: 200-250",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0,
      0
    ],
    "flavourText": [
      "The Unblinking Eye did not cower and wail.",
      "They stood against the end."
    ],
    "key": "morior invictus grand regalia",
    "level": 65,
    "mods": [
      "(300-400)% increased Armour, Evasion and Energy Shield",
      "[3 Random Socket Modifiers]",
      "Has 4 Augment Sockets (Hidden)"
    ],
    "name": "Morior Invictus",
    "officialIcon": "",
    "pool": "Body_Armours_str_dex_int",
    "requirements": "Requires: Level 65, 41 Str, 41 Dex, 41 Int",
    "runeforging": [
      {
        "cost": "Cost: Morior Invictus Grand Regalia, Verisium x580, Exceptional Verisium x2, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered grand regalia",
        "label": "Runemastered Grand Regalia",
        "level": 65,
        "properties": [
          "Armour: 145",
          "Evasion Rating: 132",
          "Energy Shield: 40",
          "Base Movement Speed: -0.04",
          "Runic Ward: 86"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 41 Str, 41 Dex, 41 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Morior_Invictus",
    "sourceUrl": "https://poe2db.tw/us/Morior_Invictus",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Exquisite Vest",
    "baseImplicitMods": [
      "Grants Skill: Level 15 Mist Raven"
    ],
    "baseProperties": [
      "Body Armour",
      "Evasion Rating: 1398-1533",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"The boy is a bad omen,\" he cried. \"Ravens gather",
      "before him!\" That night, a new raven appeared, and",
      "shadowed the Auspex for the rest of his days."
    ],
    "key": "the auspex exquisite vest",
    "level": 65,
    "mods": [
      "(210-240)% increased Evasion Rating",
      "+(70-120) to maximum Life",
      "100% increased Attribute Requirements",
      "Chance to Deflect is Lucky while on Low Life",
      "Enemies in your Presence gain 1 Gruelling Madness each second"
    ],
    "name": "The Auspex",
    "officialIcon": "",
    "pool": "Body_Armours_dex",
    "requirements": "Requires: Level 65, 242 Dex",
    "runeforging": [
      {
        "cost": "Cost: The Auspex Exquisite Vest, Verisium x1300, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered exquisite vest",
        "label": "Runemastered Exquisite Vest",
        "level": 70,
        "properties": [
          "Evasion Rating: 338",
          "Base Movement Speed: -0.03",
          "Runic Ward: 86"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 70, 121 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Auspex",
    "sourceUrl": "https://poe2db.tw/us/The_Auspex",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Heroic Armour",
    "baseImplicitMods": [
      "Grants Skill: Level 15 Herald of Ash",
      "Grants Skill: Level 15 Herald of Ice",
      "Grants Skill: Level 15 Herald of Thunder",
      "+(60-80) to maximum Life"
    ],
    "baseProperties": [
      "Body Armour",
      "Armour: 273",
      "Evasion Rating: 248",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "Whiff of cold, tiny spark, faintest flicker in the dark.",
      "Embers swirl, ice takes form, sky exposed - Death's perfect storm.",
      "Frost and thunder, flames shine bright, ruin walks the land tonight.",
      "By your hand they dance and bend, wield them and brook no end."
    ],
    "key": "the coming calamity heroic armour",
    "level": 65,
    "mods": [
      "+(30-40)% to all Elemental Resistances",
      "Herald Skills deal (50-100)% increased Damage",
      "Enemies in your Presence have no Elemental Resistances"
    ],
    "name": "The Coming Calamity",
    "officialIcon": "",
    "pool": "Body_Armours_str_dex",
    "requirements": "Requires: Level 65, 67 Str, 67 Dex",
    "runeforging": [
      {
        "cost": "Cost: The Coming Calamity Heroic Armour, Verisium x4920, Exceptional Verisium x1, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "+(60-80) to maximum Life"
        ],
        "key": "runemastered heroic armour",
        "label": "Runemastered Heroic Armour",
        "level": 65,
        "properties": [
          "Armour: 136",
          "Evasion Rating: 124",
          "Base Movement Speed: -0.04",
          "Runic Ward: 215"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 67 Str, 67 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Coming_Calamity",
    "sourceUrl": "https://poe2db.tw/us/The_Coming_Calamity",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Revered Vestments",
    "baseImplicitMods": [
      "+1% to all Maximum Elemental Resistances"
    ],
    "baseProperties": [
      "Kalguuran Body Armour",
      "Armour: 683-956",
      "Energy Shield: 190-266",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "His latent potential unleashed itself, a beast",
      "bursting from its shackles. Each strike of Farrow's",
      "hammer rang out a song for the First Ones."
    ],
    "key": "the unleashed revered vestments",
    "level": 65,
    "mods": [
      "(150-250)% increased Armour and Energy Shield",
      "+(10-20) to Strength and Intelligence",
      "(15-25)% of Damage taken from Hits bypasses Energy Shield if Energy Shield is below half",
      "Gain 1 Runic Binding on Hit with Spells, no more than once every 0.5 secondsLose all Runic Bindings when you Shapeshift to gain that much Unbound Potential"
    ],
    "name": "The Unleashed",
    "officialIcon": "",
    "pool": "Body_Armours_str_int",
    "requirements": "Requires: Level 65, 67 Str, 67 Int",
    "runeforging": [
      {
        "cost": "Cost: The Unleashed Revered Vestments, Exceptional Verisium x30, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "+1% to all Maximum Elemental Resistances"
        ],
        "key": "runemastered revered vestments",
        "label": "Runemastered Revered Vestments",
        "level": 70,
        "properties": [
          "Armour: 164",
          "Energy Shield: 45",
          "Base Movement Speed: -0.04",
          "Runic Ward: 301"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 70, 67 Str, 67 Int",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: The Unleashed Revered Vestments, Exceptional Verisium x30, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "+1% to all Maximum Elemental Resistances"
        ],
        "key": "runemastered revered vestments",
        "label": "Runemastered Revered Vestments",
        "level": 70,
        "properties": [
          "Armour: 164",
          "Energy Shield: 45",
          "Base Movement Speed: -0.04",
          "Runic Ward: 301"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 70, 67 Str, 67 Int",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: The Unleashed Revered Vestments, Exceptional Verisium x30, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "+1% to all Maximum Elemental Resistances"
        ],
        "key": "runemastered revered vestments",
        "label": "Runemastered Revered Vestments",
        "level": 70,
        "properties": [
          "Armour: 164",
          "Energy Shield: 45",
          "Base Movement Speed: -0.04",
          "Runic Ward: 301"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 70, 67 Str, 67 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Unleashed",
    "sourceUrl": "https://poe2db.tw/us/The_Unleashed",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Conqueror Plate",
    "baseImplicitMods": [
      "(30-40)% increased Stun Threshold"
    ],
    "baseProperties": [
      "Body Armour",
      "Armour: 496",
      "Base Movement Speed: -0.05"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The warrior who fears will fall."
    ],
    "key": "kaom's heart conqueror plate",
    "level": 68,
    "mods": [
      "+1500 to maximum Life",
      "You have no Spirit"
    ],
    "name": "Kaom's Heart",
    "officialIcon": "",
    "pool": "Body_Armours_str",
    "requirements": "Requires: Level 68, 121 Str",
    "runeforging": [
      {
        "cost": "Cost: Kaom's Heart Conqueror Plate, Verisium x759, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "(30-40)% increased Stun Threshold"
        ],
        "key": "runeforged conqueror plate",
        "label": "Runeforged Conqueror Plate",
        "level": 68,
        "properties": [
          "Armour: 595",
          "Base Movement Speed: -0.05"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 68, 121 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Armour",
    "slug": "Kaoms_Heart",
    "sourceUrl": "https://poe2db.tw/us/Kaoms_Heart",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Corvus Mantle",
    "baseImplicitMods": [
      "+(20-30) to Spirit"
    ],
    "baseProperties": [
      "Body Armour",
      "Armour: 491-601",
      "Energy Shield: 137-167",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "The Twilight Order rejected the gods, choosing",
      "instead to put their faith in each other."
    ],
    "key": "sacrosanctum corvus mantle",
    "level": 68,
    "mods": [
      "(80-120)% increased Armour and Energy Shield",
      "+(20-30) to Strength",
      "+(20-30) to Intelligence",
      "+(17-23)% to Chaos Resistance",
      "(10-20)% of Damage taken Recouped as Life",
      "Damage taken Recouped as Life is also Recouped as Energy Shield"
    ],
    "name": "Sacrosanctum",
    "officialIcon": "",
    "pool": "Body_Armours_str_int",
    "requirements": "Requires: Level 68, 67 Str, 67 Int",
    "runeforging": [
      {
        "cost": "Cost: Sacrosanctum Corvus Mantle, Exceptional Verisium x24, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "+(20-30) to Spirit"
        ],
        "key": "runemastered corvus mantle",
        "label": "Runemastered Corvus Mantle",
        "level": 70,
        "properties": [
          "Armour: 218",
          "Energy Shield: 61",
          "Base Movement Speed: -0.04",
          "Runic Ward: 86"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 70, 67 Str, 67 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Sacrosanctum",
    "sourceUrl": "https://poe2db.tw/us/Sacrosanctum",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Enlightened Robe",
    "baseImplicitMods": [
      "(40-50)% increased Mana Regeneration Rate"
    ],
    "baseProperties": [
      "Body Armour",
      "Energy Shield: 386-483",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Hallowed Dordalus was cast into the pit as a heretic,",
      "but his piety was so great, he would not burn.",
      "He rose again, lauded, his faith forever changed...",
      "but not the way the Templar believed."
    ],
    "key": "silks of veneration enlightened robe",
    "level": 68,
    "mods": [
      "(150-200)% increased Energy Shield",
      "+(30-50) to Spirit",
      "+(20-30) to Intelligence",
      "(30-50)% increased Energy Shield Recharge Rate",
      "Current Energy Shield also grants Elemental Damage reduction"
    ],
    "name": "Silks of Veneration",
    "officialIcon": "",
    "pool": "Body_Armours_int",
    "requirements": "Requires: Level 68, 121 Int",
    "runeforging": [
      {
        "cost": "Cost: Silks of Veneration Enlightened Robe, Exceptional Verisium x55, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "(40-50)% increased Mana Regeneration Rate"
        ],
        "key": "runemastered enlightened robe",
        "label": "Runemastered Enlightened Robe",
        "level": 75,
        "properties": [
          "Energy Shield: 124",
          "Base Movement Speed: -0.03",
          "Runic Ward: 86"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 75, 121 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Silks_of_Veneration",
    "sourceUrl": "https://poe2db.tw/us/Silks_of_Veneration",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Ancient Mail",
    "baseImplicitMods": [],
    "baseProperties": [
      "Body Armour",
      "Armour: 819-1092",
      "Energy Shield: 228-304",
      "Base Movement Speed: -0.04"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"Hold firm. Let no word but the Mothers' turn your head.",
      "Through your unfaltering fealty, you achieve perfection.\""
    ],
    "key": "decree of loyalty ancient mail",
    "level": 70,
    "mods": [
      "(200-300)% increased Armour and Energy Shield",
      "+(15-25) to Strength and Intelligence",
      "+(1-5)% to Maximum Chaos Resistance",
      "Convert 1% of maximum Life to twice as much Armour per 1% Chaos Resistance above 0%",
      "Defend with (150-200)% of Armour while you have Energy Shield",
      "Damage over Time cannot bypass your Energy Shield"
    ],
    "name": "Decree of Loyalty",
    "officialIcon": "",
    "pool": "Body_Armours_str_int",
    "requirements": "Requires: Level 70, 67 Str, 67 Int",
    "runeforging": [
      {
        "cost": "Cost: Decree of Loyalty Ancient Mail, Verisium x1300, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered ancient mail",
        "label": "Runemastered Ancient Mail",
        "level": 70,
        "properties": [
          "Armour: 218",
          "Energy Shield: 61",
          "Base Movement Speed: -0.04",
          "Runic Ward: 86"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 70, 67 Str, 67 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Decree_of_Loyalty",
    "sourceUrl": "https://poe2db.tw/us/Decree_of_Loyalty",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Primal Markings",
    "baseImplicitMods": [
      "Grants Skill: Level 16 Spirit Vessel"
    ],
    "baseProperties": [
      "Body Armour",
      "Evasion Rating: 804-1072",
      "Energy Shield: 246-328",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "A gift from the Draíocht, lost in Darkness.",
      "The bronze hums. The cloth sighs.",
      "Living pieces of her, yearning to exist."
    ],
    "key": "forgotten warden primal markings",
    "level": 70,
    "mods": [
      "+(70-100) to Deflection Rating per 50 missing Energy Shield",
      "(200-300)% increased Evasion and Energy Shield",
      "+(20-30) to Dexterity",
      "Companions have (30-50)% increased maximum Life",
      "(10-15)% of Damage from Deflected Hits is taken from Damageable Companion's Life before you",
      "enable ancient order task [1]"
    ],
    "name": "Forgotten Warden",
    "officialIcon": "",
    "pool": "Body_Armours_dex_int",
    "requirements": "Requires: Level 70, 67 Dex, 67 Int",
    "runeforging": [
      {
        "cost": "Cost: Forgotten Warden Primal Markings, Verisium x7500, Exceptional Verisium x3, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered primal markings",
        "label": "Runemastered Primal Markings",
        "level": 80,
        "properties": [
          "Evasion Rating: 223",
          "Energy Shield: 68",
          "Base Movement Speed: -0.03",
          "Runic Ward: 107"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 80, 67 Dex, 67 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Forgotten_Warden",
    "sourceUrl": "https://poe2db.tw/us/Forgotten_Warden",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Assassin Garb",
    "baseImplicitMods": [
      "Grants Skill: Level 17 Withering Presence",
      "5% increased Movement Speed"
    ],
    "baseProperties": [
      "Body Armour",
      "Evasion Rating: 620-744",
      "Energy Shield: 190-228",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "Curse their vile Council,",
      "They cast me aside as if I am some bastard child.",
      "If they only knew the power I possess."
    ],
    "key": "cospri's will assassin garb",
    "level": 73,
    "mods": [
      "(150-200)% increased Evasion and Energy Shield",
      "+(23-29)% to Chaos Resistance",
      "Curses you inflict have infinite Duration",
      "Curses you inflict can affect Hexproof Enemies",
      "Withered you inflict has infinite Duration"
    ],
    "name": "Cospri's Will",
    "officialIcon": "",
    "pool": "Body_Armours_dex_int",
    "requirements": "Requires: Level 73, 67 Dex, 67 Int",
    "runeforging": [
      {
        "cost": "Cost: Cospri's Will Assassin Garb, Exceptional Verisium x28, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "5% increased Movement Speed"
        ],
        "key": "runemastered assassin garb",
        "label": "Runemastered Assassin Garb",
        "level": 73,
        "properties": [
          "Evasion Rating: 223",
          "Energy Shield: 68",
          "Base Movement Speed: -0.03",
          "Runic Ward: 43"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 73, 67 Dex, 67 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Cospris_Will",
    "sourceUrl": "https://poe2db.tw/us/Cospris_Will",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Armoured Vest",
    "baseImplicitMods": [
      "(30-40)% increased Elemental Ailment Threshold"
    ],
    "baseProperties": [
      "Body Armour",
      "Evasion Rating: 902-1128",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Hyrri loosed a barrage of arrows,",
      "tipped with a poisoned hatred",
      "only oppression can ferment."
    ],
    "key": "hyrri's ire armoured vest",
    "level": 73,
    "mods": [
      "(100-150)% increased Evasion Rating",
      "Gain (10-20)% of Damage as Extra Cold Damage",
      "+(30-40) to Dexterity",
      "25% increased Freeze Duration on Enemies",
      "Evasion Rating is doubled if you have not been Hit Recently"
    ],
    "name": "Hyrri's Ire",
    "officialIcon": "",
    "pool": "Body_Armours_dex",
    "requirements": "Requires: Level 73, 121 Dex",
    "runeforging": [
      {
        "cost": "Cost: Hyrri's Ire Armoured Vest, Verisium x6760, Exceptional Verisium x5, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "(30-40)% increased Elemental Ailment Threshold"
        ],
        "key": "runemastered armoured vest",
        "label": "Runemastered Armoured Vest",
        "level": 80,
        "properties": [
          "Evasion Rating: 361",
          "Base Movement Speed: -0.03",
          "Runic Ward: 129"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 80, 121 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Hyrris_Ire",
    "sourceUrl": "https://poe2db.tw/us/Hyrris_Ire",
    "type": "Body Armours",
    "verification": "embedded"
  },
  {
    "base": "Rough Greaves",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Boot",
      "Armour: 72-92"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "A wall of steel and muscle."
    ],
    "key": "legionstride rough greaves",
    "level": 1,
    "mods": [
      "+(50-70) to Armour",
      "+(50-70) to Stun Threshold",
      "+10% to Block chance",
      "-10 Physical damage taken from Projectile Attacks"
    ],
    "name": "Legionstride",
    "officialIcon": "",
    "pool": "Boots_str",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Legionstride Rough Greaves, Verisium x360, Medved's Crest of the Circle x1",
        "implicitMods": [
          "10% increased Movement Speed"
        ],
        "key": "runemastered rough greaves",
        "label": "Runemastered Rough Greaves",
        "level": 38,
        "properties": [
          "Armour: 150",
          "Runic Ward: 27"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 51 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Legionstride",
    "sourceUrl": "https://poe2db.tw/us/Legionstride",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Straw Sandals",
    "baseImplicitMods": [],
    "baseProperties": [
      "Boot",
      "Energy Shield: 11-10"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Blessed are those who tend the Grove."
    ],
    "key": "luminous pace straw sandals",
    "level": 1,
    "mods": [
      "10% increased Movement Speed",
      "+(20-30) to maximum Energy Shield",
      "+(5-10) to Intelligence",
      "(20-30)% reduced Energy Shield Recharge Rate",
      "100% faster start of Energy Shield Recharge"
    ],
    "name": "Luminous Pace",
    "officialIcon": "",
    "pool": "Boots_int",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Luminous Pace Straw Sandals, Verisium x200, Medved's Crest of the Circle x1",
        "implicitMods": [
          "5% increased Movement Speed"
        ],
        "key": "runemastered straw sandals",
        "label": "Runemastered Straw Sandals",
        "level": 38,
        "properties": [
          "Energy Shield: 45",
          "Runic Ward: 34"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 51 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Luminous_Pace",
    "sourceUrl": "https://poe2db.tw/us/Luminous_Pace",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Mail Sabatons",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Boot",
      "Armour: 29-33",
      "Evasion Rating: 22-26"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Some search forever for their path."
    ],
    "key": "the knight-errant mail sabatons",
    "level": 6,
    "mods": [
      "10% increased Movement Speed",
      "(30-50)% increased Armour and Evasion",
      "+(30-50) to Stun Threshold",
      "+(30-50) to Ailment Threshold",
      "Iron Reflexes"
    ],
    "name": "The Knight-errant",
    "officialIcon": "",
    "pool": "Boots_str_dex",
    "requirements": "Requires: Level 6, 7 Str, 7 Dex",
    "runeforging": [
      {
        "cost": "Cost: The Knight-errant Mail Sabatons, Verisium x200, Medved's Crest of the Circle x1",
        "implicitMods": [
          "5% increased Movement Speed"
        ],
        "key": "runemastered mail sabatons",
        "label": "Runemastered Mail Sabatons",
        "level": 38,
        "properties": [
          "Armour: 50",
          "Evasion Rating: 44",
          "Runic Ward: 54"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 29 Str, 29 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Knight-errant",
    "sourceUrl": "https://poe2db.tw/us/The_Knight-errant",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Laced Boots",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Boot",
      "Evasion Rating: 47"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "The druids walk the Grelwood without fear."
    ],
    "key": "briarpatch laced boots",
    "level": 11,
    "mods": [
      "(10-20)% increased Movement Speed",
      "+(40-60) to maximum Life",
      "+(60-80) to Stun Threshold",
      "+25% to Thorns Critical Hit Chance",
      "(10-15) to (20-25) Physical Thorns damage"
    ],
    "name": "Briarpatch",
    "officialIcon": "",
    "pool": "Boots_dex",
    "requirements": "Requires: Level 11, 17 Dex",
    "runeforging": [
      {
        "cost": "Cost: Briarpatch Laced Boots, Verisium x710, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "5% increased Movement Speed"
        ],
        "key": "runemastered laced boots",
        "label": "Runemastered Laced Boots",
        "level": 38,
        "properties": [
          "Evasion Rating: 54",
          "Runic Ward: 81"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 51 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Briarpatch",
    "sourceUrl": "https://poe2db.tw/us/Briarpatch",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Iron Greaves",
    "baseImplicitMods": [
      "Grants Skill: Level 4 Decompose"
    ],
    "baseProperties": [
      "Boot",
      "Armour: 74-86"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Natural decay can be twisted to dark ends."
    ],
    "key": "corpsewade iron greaves",
    "level": 11,
    "mods": [
      "10% increased Movement Speed",
      "(30-50)% increased Armour",
      "+(5-10) to Strength",
      "Trigger Decompose every 1.2 metres travelled"
    ],
    "name": "Corpsewade",
    "officialIcon": "",
    "pool": "Boots_str",
    "requirements": "Requires: Level 11, 17 Str",
    "runeforging": [
      {
        "cost": "Cost: Corpsewade Iron Greaves, Verisium x370, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "5% increased Movement Speed"
        ],
        "key": "runemastered iron greaves",
        "label": "Runemastered Iron Greaves",
        "level": 38,
        "properties": [
          "Armour: 120",
          "Runic Ward: 27"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 51 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Corpsewade",
    "sourceUrl": "https://poe2db.tw/us/Corpsewade",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Wrapped Sandals",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Boot",
      "Energy Shield: 22"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "All the world is my home."
    ],
    "key": "wanderlust wrapped sandals",
    "level": 11,
    "mods": [
      "20% increased Movement Speed",
      "+(10-20) to maximum Energy Shield",
      "+5 to Dexterity",
      "Your speed is unaffected by Slows"
    ],
    "name": "Wanderlust",
    "officialIcon": "",
    "pool": "Boots_int",
    "requirements": "Requires: Level 11, 17 Int",
    "runeforging": [
      {
        "cost": "Cost: Wanderlust Wrapped Sandals, Verisium x370, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "5% increased Movement Speed"
        ],
        "key": "runemastered wrapped sandals",
        "label": "Runemastered Wrapped Sandals",
        "level": 38,
        "properties": [
          "Energy Shield: 41",
          "Runic Ward: 41"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 51 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Wanderlust",
    "sourceUrl": "https://poe2db.tw/us/Wanderlust",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Lattice Sandals",
    "baseImplicitMods": [],
    "baseProperties": [
      "Boot",
      "Energy Shield: 38-43"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "The dead man walks where",
      "the living fear to tread."
    ],
    "key": "bones of ullr lattice sandals",
    "level": 16,
    "mods": [
      "(5-15)% increased Movement Speed",
      "(40-60)% increased Energy Shield",
      "+(20-40) to maximum Life",
      "+(20-40) to maximum Mana",
      "(20-30)% increased Reservation Efficiency of Skills which create Undead Minions"
    ],
    "name": "Bones of Ullr",
    "officialIcon": "",
    "pool": "Boots_int",
    "requirements": "Requires: Level 16, 23 Int",
    "runeforging": [
      {
        "cost": "Cost: Bones of Ullr Lattice Sandals, Verisium x1690, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "5% increased Movement Speed"
        ],
        "key": "runemastered lattice sandals",
        "label": "Runemastered Lattice Sandals",
        "level": 38,
        "properties": [
          "Energy Shield: 34",
          "Runic Ward: 34"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 51 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Bones_of_Ullr",
    "sourceUrl": "https://poe2db.tw/us/Bones_of_Ullr",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Braced Sabatons",
    "baseImplicitMods": [],
    "baseProperties": [
      "Boot",
      "Armour: 62-82",
      "Evasion Rating: 53-70"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"Sirrius flew on wings of light, faster than wind, faster",
      "than thought. But try as he might to outrun the darkness,",
      "it was there, at every turn, waiting for him.\"",
      "- Azmerian legend"
    ],
    "key": "darkray vectors braced sabatons",
    "level": 16,
    "mods": [
      "(50-100)% increased Armour and Evasion",
      "+(20-30)% to Lightning Resistance",
      "25% reduced Light Radius",
      "5% increased Movement Speed per Frenzy Charge",
      "+1 to Maximum Frenzy Charges"
    ],
    "name": "Darkray Vectors",
    "officialIcon": "",
    "pool": "Boots_str_dex",
    "requirements": "Requires: Level 16, 14 Str, 14 Dex",
    "runeforging": [
      {
        "cost": "Cost: Darkray Vectors Braced Sabatons, Verisium x370, Medved's Crest of the Circle x1",
        "implicitMods": [
          "5% increased Movement Speed"
        ],
        "key": "runemastered braced sabatons",
        "label": "Runemastered Braced Sabatons",
        "level": 38,
        "properties": [
          "Armour: 66",
          "Evasion Rating: 59",
          "Runic Ward: 34"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 29 Str, 29 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Darkray_Vectors",
    "sourceUrl": "https://poe2db.tw/us/Darkray_Vectors",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Embossed Boots",
    "baseImplicitMods": [],
    "baseProperties": [
      "Boot",
      "Evasion Rating: 126-151"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "All your tomorrows lie ahead of you,",
      "unknown and snarled to the very last."
    ],
    "key": "gamblesprint embossed boots",
    "level": 16,
    "mods": [
      "(100-140)% increased Evasion Rating",
      "(10-15)% increased Rarity of Items found",
      "+(10-15) to Dexterity",
      "+(15-25)% to Lightning Resistance",
      "Gain 0% to 40% increased Movement Speed at random when Hit, until Hit again"
    ],
    "name": "Gamblesprint",
    "officialIcon": "",
    "pool": "Boots_dex",
    "requirements": "Requires: Level 16, 23 Dex",
    "runeforging": [
      {
        "cost": "Cost: Gamblesprint Embossed Boots, Verisium x720, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "5% increased Movement Speed"
        ],
        "key": "runemastered embossed boots",
        "label": "Runemastered Embossed Boots",
        "level": 38,
        "properties": [
          "Evasion Rating: 94",
          "Runic Ward: 41"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 51 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Gamblesprint",
    "sourceUrl": "https://poe2db.tw/us/Gamblesprint",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Threaded Shoes",
    "baseImplicitMods": [],
    "baseProperties": [
      "Boot",
      "Evasion Rating: 70-88",
      "Energy Shield: 30-38"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The cursed ones march forever,",
      "On their hopeless, last endeavour.",
      ""
    ],
    "key": "ghostmarch threaded shoes",
    "level": 16,
    "mods": [
      "15% increased Movement Speed",
      "(100-150)% increased Evasion and Energy Shield",
      "+(30-50) to maximum Mana",
      "+(17-23)% to Chaos Resistance",
      "Dodge Roll passes through Enemies"
    ],
    "name": "Ghostmarch",
    "officialIcon": "",
    "pool": "Boots_dex_int",
    "requirements": "Requires: Level 16, 14 Dex, 14 Int",
    "runeforging": [
      {
        "cost": "Cost: Ghostmarch Threaded Shoes, Verisium x220, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "5% increased Movement Speed"
        ],
        "key": "runemastered threaded shoes",
        "label": "Runemastered Threaded Shoes",
        "level": 38,
        "properties": [
          "Evasion Rating: 55",
          "Energy Shield: 19",
          "Runic Ward: 34"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 29 Dex, 29 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Ghostmarch",
    "sourceUrl": "https://poe2db.tw/us/Ghostmarch",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Bronze Greaves",
    "baseImplicitMods": [],
    "baseProperties": [
      "Boot",
      "Armour: 148-185"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "We move to be closer to her, but the distance yet grows."
    ],
    "key": "the infinite pursuit bronze greaves",
    "level": 16,
    "mods": [
      "10% increased Movement Speed",
      "(100-150)% increased Armour",
      "+(80-100) to maximum Life",
      "(80-100)% increased Chance to be afflicted by Ailments when Hit",
      "25% increased Movement Speed while affected by an Ailment"
    ],
    "name": "The Infinite Pursuit",
    "officialIcon": "",
    "pool": "Boots_str",
    "requirements": "Requires: Level 16, 23 Str",
    "runeforging": [
      {
        "cost": "Cost: The Infinite Pursuit Bronze Greaves, Verisium x220, Medved's Crest of the Circle x1",
        "implicitMods": [
          "5% increased Movement Speed"
        ],
        "key": "runemastered bronze greaves",
        "label": "Runemastered Bronze Greaves",
        "level": 38,
        "properties": [
          "Armour: 135",
          "Runic Ward: 20"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 51 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Infinite_Pursuit",
    "sourceUrl": "https://poe2db.tw/us/The_Infinite_Pursuit",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Secured Leggings",
    "baseImplicitMods": [],
    "baseProperties": [
      "Boot",
      "Armour: 53-66",
      "Energy Shield: 20-24"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Tempest's power given form,",
      "Flee before the walking storm."
    ],
    "key": "wake of destruction secured leggings",
    "level": 16,
    "mods": [
      "10% increased Movement Speed",
      "(30-60)% increased Armour and Energy Shield",
      "Adds 1 to (30-50) Lightning damage to Attacks",
      "Drop Shocked Ground while moving, lasting 8 seconds"
    ],
    "name": "Wake of Destruction",
    "officialIcon": "",
    "pool": "Boots_str_int",
    "requirements": "Requires: Level 16, 14 Str, 14 Int",
    "runeforging": [
      {
        "cost": "Cost: Wake of Destruction Secured Leggings, Verisium x1680, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "5% increased Movement Speed"
        ],
        "key": "runemastered secured leggings",
        "label": "Runemastered Secured Leggings",
        "level": 38,
        "properties": [
          "Armour: 58",
          "Energy Shield: 17",
          "Runic Ward: 41"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 29 Str, 29 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Wake_of_Destruction",
    "sourceUrl": "https://poe2db.tw/us/Wake_of_Destruction",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Trimmed Greaves",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Boot",
      "Armour: 168-224"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "The truly mighty are never outnumbered."
    ],
    "key": "trampletoe trimmed greaves",
    "level": 27,
    "mods": [
      "15% increased Movement Speed",
      "(50-100)% increased Armour",
      "50% increased Attribute Requirements",
      "Deal 30% of Overkill damage to enemies within 2 metres of the enemy killed"
    ],
    "name": "Trampletoe",
    "officialIcon": "",
    "pool": "Boots_str",
    "requirements": "Requires: Level 27, 57 Str",
    "runeforging": [
      {
        "cost": "Cost: Trampletoe Trimmed Greaves, Verisium x5600, Exceptional Verisium x20, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "5% increased Movement Speed"
        ],
        "key": "runemastered trimmed greaves",
        "label": "Runemastered Trimmed Greaves",
        "level": 40,
        "properties": [
          "Armour: 79",
          "Runic Ward: 71"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 40, 54 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Trampletoe",
    "sourceUrl": "https://poe2db.tw/us/Trampletoe",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Silk Slippers",
    "baseImplicitMods": [],
    "baseProperties": [
      "Boot",
      "Energy Shield: 36"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Wonders abound at death's door."
    ],
    "key": "wondertrap silk slippers",
    "level": 27,
    "mods": [
      "(10-20)% increased Movement Speed",
      "+(30-50) to maximum Energy Shield",
      "+(10-20) to Strength",
      "+(10-20) to Dexterity",
      "+(10-20) to Intelligence",
      "50% increased Rarity of Items found when on Low Life"
    ],
    "name": "Wondertrap",
    "officialIcon": "",
    "pool": "Boots_int",
    "requirements": "Requires: Level 27, 38 Int",
    "runeforging": [
      {
        "cost": "Cost: Wondertrap Silk Slippers, Verisium x220, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered silk slippers",
        "label": "Runemastered Silk Slippers",
        "level": 38,
        "properties": [
          "Energy Shield: 36",
          "Runic Ward: 54"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 51 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Wondertrap",
    "sourceUrl": "https://poe2db.tw/us/Wondertrap",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Stone Greaves",
    "baseImplicitMods": [],
    "baseProperties": [
      "Boot",
      "Armour: 133"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "As the sun rises and the light approaches,",
      "so too shall your enemies fear you."
    ],
    "key": "birth of fury stone greaves",
    "level": 33,
    "mods": [
      "20% increased Movement Speed",
      "+(40-60) to maximum Life",
      "+(20-30)% to Fire Resistance",
      "Drop Ignited Ground while moving, which lasts 8 seconds and Ignites as though dealing Fire Damage equal to 10% of your maximum Life"
    ],
    "name": "Birth of Fury",
    "officialIcon": "",
    "pool": "Boots_str",
    "requirements": "Requires: Level 33, 45 Str",
    "runeforging": [
      {
        "cost": "Cost: Birth of Fury Stone Greaves, Verisium x400, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered stone greaves",
        "label": "Runemastered Stone Greaves",
        "level": 55,
        "properties": [
          "Armour: 157",
          "Runic Ward: 46"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 55, 73 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Birth_of_Fury",
    "sourceUrl": "https://poe2db.tw/us/Birth_of_Fury",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Lizardscale Boots",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Boot",
      "Evasion Rating: 177-212"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Banished for his tragic failure,",
      "Erian learned to hunt to survive."
    ],
    "key": "bushwhack lizardscale boots",
    "level": 33,
    "mods": [
      "(15-25)% increased Movement Speed",
      "(50-80)% increased Evasion Rating",
      "+(10-20) to Dexterity",
      "Physical Damage is Pinning"
    ],
    "name": "Bushwhack",
    "officialIcon": "",
    "pool": "Boots_dex",
    "requirements": "Requires: Level 33, 45 Dex",
    "runeforging": [
      {
        "cost": "Cost: Bushwhack Lizardscale Boots, Verisium x220, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered lizardscale boots",
        "label": "Runemastered Lizardscale Boots",
        "level": 40,
        "properties": [
          "Evasion Rating: 99",
          "Runic Ward: 42"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 40, 54 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Bushwhack",
    "sourceUrl": "https://poe2db.tw/us/Bushwhack",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Stacked Sabatons",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Boot",
      "Armour: 183-219",
      "Evasion Rating: 163-195"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The storm cannot sway those of sure footing."
    ],
    "key": "obern's bastion stacked sabatons",
    "level": 33,
    "mods": [
      "(150-200)% increased Armour and Evasion",
      "(20-25) Life Regeneration per second",
      "200% increased Stun Recovery",
      "(30-50)% reduced Chill Duration on you",
      "(30-50)% reduced Freeze Duration on you",
      "(30-50)% reduced Shock duration on you"
    ],
    "name": "Obern's Bastion",
    "officialIcon": "",
    "pool": "Boots_str_dex",
    "requirements": "Requires: Level 33, 26 Str, 26 Dex",
    "runeforging": [
      {
        "cost": "Cost: Obern's Bastion Stacked Sabatons, Verisium x390, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "10% increased Movement Speed"
        ],
        "key": "runemastered stacked sabatons",
        "label": "Runemastered Stacked Sabatons",
        "level": 40,
        "properties": [
          "Armour: 173",
          "Evasion Rating: 155",
          "Runic Ward: 21"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 30 Str, 30 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Oberns_Bastion",
    "sourceUrl": "https://poe2db.tw/us/Oberns_Bastion",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Hunting Shoes",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Boot",
      "Evasion Rating: 104-117",
      "Energy Shield: 35-40"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The combat stance used by Vaal nobles",
      "was as elegant as it was deadly."
    ],
    "key": "powertread hunting shoes",
    "level": 33,
    "mods": [
      "(15-20)% increased Movement Speed",
      "(60-80)% increased Evasion and Energy Shield",
      "+(10-20) to Intelligence",
      "+1 to Maximum Power Charges",
      "12% increased Critical Damage Bonus per Power Charge"
    ],
    "name": "Powertread",
    "officialIcon": "",
    "pool": "Boots_dex_int",
    "requirements": "Requires: Level 33, 26 Dex, 26 Int",
    "runeforging": [
      {
        "cost": "Cost: Powertread Hunting Shoes, Verisium x220, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered hunting shoes",
        "label": "Runemastered Hunting Shoes",
        "level": 40,
        "properties": [
          "Evasion Rating: 70",
          "Energy Shield: 23",
          "Runic Ward: 28"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 30 Dex, 30 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Powertread",
    "sourceUrl": "https://poe2db.tw/us/Powertread",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Feathered Sandals",
    "baseImplicitMods": [],
    "baseProperties": [
      "Boot",
      "Energy Shield: 62-82"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "The mocking wind, a shielding spell,",
      "The haunting screams, a maddening hell"
    ],
    "key": "windscream feathered sandals",
    "level": 33,
    "mods": [
      "(10-20)% increased Movement Speed",
      "(50-100)% increased Energy Shield",
      "+(10-20) to Intelligence",
      "Curse Skills have (10-20)% increased Cast Speed",
      "Curses have no Activation Delay"
    ],
    "name": "Windscream",
    "officialIcon": "",
    "pool": "Boots_int",
    "requirements": "Requires: Level 33, 45 Int",
    "runeforging": [
      {
        "cost": "Cost: Windscream Feathered Sandals, Verisium x220, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered feathered sandals",
        "label": "Runemastered Feathered Sandals",
        "level": 40,
        "properties": [
          "Energy Shield: 33",
          "Runic Ward: 42"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 40, 54 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Windscream",
    "sourceUrl": "https://poe2db.tw/us/Windscream",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Covered Sabatons",
    "baseImplicitMods": [
      "Grants Skill: Level 11 Black Powder Blitz"
    ],
    "baseProperties": [
      "Boot",
      "Armour: 173-192",
      "Evasion Rating: 155-172"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"Captain Hiff Greybeard accomplished what nary a Brinerot",
      "could: he died of old age. Almost had him a dozen times",
      "meself, if it weren't for that damn leg of his... crafty shite...\""
    ],
    "key": "shankgonne covered sabatons",
    "level": 45,
    "mods": [
      "(80-100)% increased Armour and Evasion",
      "(10-20)% increased Rarity of Items found",
      "+(15-25)% to Fire Resistance",
      "Gain Deflection Rating equal to 20% of Armour",
      "+(200-300) to Stun Threshold",
      "You cannot Sprint",
      "cannon ball footsteps [1]",
      "footstep effect variation [119]"
    ],
    "name": "Shankgonne",
    "officialIcon": "",
    "pool": "Boots_str_dex",
    "requirements": "Requires: Level 45, 34 Str, 34 Dex",
    "runeforging": [
      {
        "cost": "Cost: Shankgonne Covered Sabatons, Verisium x700, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered covered sabatons",
        "label": "Runemastered Covered Sabatons",
        "level": 55,
        "properties": [
          "Armour: 69",
          "Evasion Rating: 63",
          "Runic Ward: 73"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 41 Str, 41 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Shankgonne",
    "sourceUrl": "https://poe2db.tw/us/Shankgonne",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Velour Shoes",
    "baseImplicitMods": [],
    "baseProperties": [
      "Boot",
      "Evasion Rating: 158-218",
      "Energy Shield: 50-68"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "They crawl and chitter and swarm",
      "in the shadow of his presence."
    ],
    "key": "beetlebite velour shoes",
    "level": 52,
    "mods": [
      "(20-30)% increased Movement Speed",
      "(60-120)% increased Evasion and Energy Shield",
      "Aggravate Bleeding on Enemies when they Enter your Presence",
      "100% increased Thorns damage"
    ],
    "name": "Beetlebite",
    "officialIcon": "",
    "pool": "Boots_dex_int",
    "requirements": "Requires: Level 52, 38 Dex, 38 Int",
    "runeforging": [
      {
        "cost": "Cost: Beetlebite Velour Shoes, Verisium x520, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered velour shoes",
        "label": "Runemastered Velour Shoes",
        "level": 65,
        "properties": [
          "Evasion Rating: 85",
          "Energy Shield: 26",
          "Runic Ward: 63"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 47 Dex, 47 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Beetlebite",
    "sourceUrl": "https://poe2db.tw/us/Beetlebite",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Grand Cuisses",
    "baseImplicitMods": [],
    "baseProperties": [
      "Boot",
      "Armour: 267-312",
      "Evasion Rating: 243-284",
      "Energy Shield: 75-88"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "His enemy was for endurance forged. His own waned."
    ],
    "key": "ab aeterno grand cuisses",
    "level": 65,
    "mods": [
      "(15-30)% increased Movement Speed",
      "(200-250)% increased Armour, Evasion and Energy Shield",
      "Dodge Roll avoids all Hits",
      "Gain Overencumbrance for 4 seconds when you Dodge Roll",
      "Your speed is Unaffected by Slows while Sprinting"
    ],
    "name": "Ab Aeterno",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 65, 34 Str, 34 Dex, 34 Int",
    "runeforging": [
      {
        "cost": "Cost: Ab Aeterno Grand Cuisses, Verisium x540, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered grand cuisses",
        "label": "Runemastered Grand Cuisses",
        "level": 65,
        "properties": [
          "Armour: 45",
          "Evasion Rating: 41",
          "Energy Shield: 12",
          "Runic Ward: 106"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 34 Str, 34 Dex, 34 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Ab_Aeterno",
    "sourceUrl": "https://poe2db.tw/us/Ab_Aeterno",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Cinched Boots",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Boot",
      "Evasion Rating: 400-488"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "\"Those who dance are considered insane",
      "by those who cannot hear the music.\"",
      "- Atziri, Queen of the Vaal"
    ],
    "key": "atziri's step cinched boots",
    "level": 65,
    "mods": [
      "30% increased Movement Speed",
      "(80-120)% increased Evasion Rating",
      "+(70-100) to maximum Life",
      "Gain Deflection Rating equal to (40-60)% of Evasion Rating",
      "(-12--6)% to amount of Damage Prevented by Deflection",
      "Cannot be Light Stunned by Deflected Hits"
    ],
    "name": "Atziri's Step",
    "officialIcon": "",
    "pool": "Boots_dex",
    "requirements": "Requires: Level 65, 86 Dex",
    "runeforging": [
      {
        "cost": "Cost: Atziri's Step Cinched Boots, Verisium x530, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered cinched boots",
        "label": "Runemastered Cinched Boots",
        "level": 65,
        "properties": [
          "Evasion Rating: 178",
          "Runic Ward: 74"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 65, 86 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Atziris_Step",
    "sourceUrl": "https://poe2db.tw/us/Atziris_Step",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Ancient Leggings",
    "baseImplicitMods": [],
    "baseProperties": [
      "Boot",
      "Armour: 335-402",
      "Energy Shield: 93-111"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"Soar. Be swift. Let none trespass here, from",
      "above or below, lest your purpose be forfeit.\""
    ],
    "key": "decree of flight ancient leggings",
    "level": 65,
    "mods": [
      "30% increased Movement Speed",
      "(150-200)% increased Armour and Energy Shield",
      "(20-30)% faster Dodge Roll",
      "Gain Guard equal to (10-20)% of missing Energy Shield for 4 seconds when you Dodge Roll",
      "Maximum amount of Guard is based on maximum Energy Shield instead",
      "Divine Flight",
      "base is floating [1]"
    ],
    "name": "Decree of Flight",
    "officialIcon": "",
    "pool": "Boots_str_int",
    "requirements": "Requires: Level 65, 56 Str, 56 Int",
    "runeforging": [
      {
        "cost": "Cost: Decree of Flight Ancient Leggings, Verisium x960, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered ancient leggings",
        "label": "Runemastered Ancient Leggings",
        "level": 65,
        "properties": [
          "Armour: 107",
          "Energy Shield: 30",
          "Runic Ward: 53"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 56 Str, 56 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Decree_of_Flight",
    "sourceUrl": "https://poe2db.tw/us/Decree_of_Flight",
    "type": "Boots",
    "verification": "embedded"
  },
  {
    "base": "Crude Bow",
    "baseImplicitMods": [],
    "baseProperties": [
      "Bow",
      "Physical Damage: 6-9",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.2"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0
    ],
    "flavourText": [
      "\"I loosed a volley of arrows into the heart of the man",
      "who slew my beloved. There was no satisfaction, no",
      "healing, no revenge. There was only... emptiness.\""
    ],
    "key": "widowhail crude bow",
    "level": 1,
    "mods": [
      "(150-250)% increased bonuses gained from Equipped Quiver"
    ],
    "name": "Widowhail",
    "officialIcon": "",
    "pool": "Bows",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Widowhail Crude Bow, Exceptional Verisium x15, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "local weapon implicit hidden % base damage is chaos [100]"
        ],
        "key": "runeforged crude bow",
        "label": "Runeforged Crude Bow",
        "level": 55,
        "properties": [
          "Chaos Damage: 42-62",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.2"
        ],
        "propertyStyles": [
          7,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 97 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Widowhail",
    "sourceUrl": "https://poe2db.tw/us/Widowhail",
    "type": "Bows",
    "verification": "embedded"
  },
  {
    "base": "Shortbow",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Bow",
      "Physical Damage: 7-14",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 2.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0
    ],
    "flavourText": [
      "\"The rain of a thousand quills that whittle",
      "present into past, life into death.\"",
      "- Rigwald of the Ezomytes"
    ],
    "key": "quill rain shortbow",
    "level": 5,
    "mods": [
      "100% increased Attack Speed",
      "+(10-20) to Dexterity",
      "(50-100)% increased Arrow Speed",
      "40% less Attack Damage"
    ],
    "name": "Quill Rain",
    "officialIcon": "",
    "pool": "Bows",
    "requirements": "Requires: Level 5, 12 Dex",
    "runeforging": [
      {
        "cost": "Cost: Quill Rain Shortbow, Verisium x200, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Projectiles have 50% chance for an additional Projectile when Forking"
        ],
        "key": "runeforged shortbow",
        "label": "Runeforged Shortbow",
        "level": 55,
        "properties": [
          "Physical Damage: 44-81",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.4"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 97 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Quill_Rain",
    "sourceUrl": "https://poe2db.tw/us/Quill_Rain",
    "type": "Bows",
    "verification": "embedded"
  },
  {
    "base": "Warden Bow",
    "baseImplicitMods": [
      "(25-35)% chance to Chain an additional time"
    ],
    "baseProperties": [
      "Ezomyte Bow",
      "Physical Damage: 12-20",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.21-1.27"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0
    ],
    "flavourText": [
      "Each crest was a Thane's word, bolted to Ivor's bow.",
      "They would join the Count's side, or die by his hands."
    ],
    "key": "ironbound warden bow",
    "level": 11,
    "mods": [
      "+(100-150) to Armour",
      "(5-10)% increased Attack Speed",
      "+12% to Block chance",
      "(3-5)% increased Block chance per 100 total Item Armour on Equipped Armour Items",
      "Hits with this weapon have (1-2) to (4-5) Added Physical Damage per 1% Block Chance",
      "Arrows Return if they have Pierced a target which had Fully Broken Armour"
    ],
    "name": "Ironbound",
    "officialIcon": "",
    "pool": "Bows",
    "requirements": "Requires: Level 11, 23 Dex",
    "runeforging": [
      {
        "cost": "Cost: Ironbound Warden Bow, Verisium x245, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "(25-35)% chance to Chain an additional time"
        ],
        "key": "runeforged warden bow",
        "label": "Runeforged Warden Bow",
        "level": 40,
        "properties": [
          "Physical Damage: 38-63",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.15"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 72 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Ironbound",
    "sourceUrl": "https://poe2db.tw/us/Ironbound",
    "type": "Bows",
    "verification": "embedded"
  },
  {
    "base": "Recurve Bow",
    "baseImplicitMods": [],
    "baseProperties": [
      "Bow",
      "Physical Damage: (33-39) to (68-81)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.1"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0
    ],
    "flavourText": [
      "The forests of the Vastiri held many secrets",
      "mystical and dark. Men learned not to wander,",
      "lest they return with a strange new purpose."
    ],
    "key": "splinterheart recurve bow",
    "level": 16,
    "mods": [
      "(120-160)% increased Physical Damage",
      "+(50-70) to Accuracy Rating",
      "(20-30)% increased Projectile Speed",
      "Projectiles Split towards +2 targets"
    ],
    "name": "Splinterheart",
    "officialIcon": "",
    "pool": "Bows",
    "requirements": "Requires: Level 16, 31 Dex",
    "runeforging": [
      {
        "cost": "Cost: Splinterheart Recurve Bow, Verisium x205, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runeforged recurve bow",
        "label": "Runeforged Recurve Bow",
        "level": 40,
        "properties": [
          "Physical Damage: 41-84",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.1"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 72 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Splinterheart",
    "sourceUrl": "https://poe2db.tw/us/Splinterheart",
    "type": "Bows",
    "verification": "embedded"
  },
  {
    "base": "Composite Bow",
    "baseImplicitMods": [],
    "baseProperties": [
      "Bow",
      "Physical Damage: (24-26) to (41-43)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.2"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0
    ],
    "flavourText": [
      "\"Toasted or frozen",
      "Or twitching in the light",
      "I'm not fussy",
      "And neither is Death.\"",
      "- Koralus Doomfletch"
    ],
    "key": "doomfletch composite bow",
    "level": 22,
    "mods": [
      "Adds (5-7) to (10-12) Physical Damage",
      "+10 to Dexterity",
      "(30-50)% increased Mana Regeneration Rate",
      "Attacks with this Weapon gain 100% of Physical damage as Extra damage of each Element"
    ],
    "name": "Doomfletch",
    "officialIcon": "",
    "pool": "Bows",
    "requirements": "Requires: Level 22, 41 Dex",
    "runeforging": [
      {
        "cost": "Cost: Doomfletch Composite Bow, Exceptional Verisium x20, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runeforged composite bow",
        "label": "Runeforged Composite Bow",
        "level": 55,
        "properties": [
          "Physical Damage: 53-88",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.2"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 97 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Doomfletch",
    "sourceUrl": "https://poe2db.tw/us/Doomfletch",
    "type": "Bows",
    "verification": "embedded"
  },
  {
    "base": "Dualstring Bow",
    "baseImplicitMods": [
      "+50% Surpassing chance to fire an additional Arrow"
    ],
    "baseProperties": [
      "Bow",
      "Physical Damage: 19-35",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.15"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0
    ],
    "flavourText": [
      "The mournful music of the strings,",
      "The creaking arch, the arrow sings.",
      "A choking cry, a rattled breath,",
      "The Reaper's Song, the Harp of Death."
    ],
    "key": "death's harp dualstring bow",
    "level": 28,
    "mods": [
      "+(20-25)% to Critical Damage Bonus",
      "Gain (20-30) Life per enemy killed",
      "Gain (12-18) Mana per enemy killed",
      "+(250-330)% Surpassing chance to fire an additional Arrow"
    ],
    "name": "Death's Harp",
    "officialIcon": "",
    "pool": "Bows",
    "requirements": "Requires: Level 28, 52 Dex",
    "runeforging": [
      {
        "cost": "Cost: Death's Harp Dualstring Bow, Verisium x570, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "+50% Surpassing chance to fire an additional Arrow"
        ],
        "key": "runeforged dualstring bow",
        "label": "Runeforged Dualstring Bow",
        "level": 55,
        "properties": [
          "Physical Damage: 45-83",
          "Critical Hit Chance: 6.5%",
          "Attacks per Second: 1.15"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 97 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Deaths_Harp",
    "sourceUrl": "https://poe2db.tw/us/Deaths_Harp",
    "type": "Bows",
    "verification": "embedded"
  },
  {
    "base": "Zealot Bow",
    "baseImplicitMods": [],
    "baseProperties": [
      "Bow",
      "Physical Damage: (71-79) to (112-119)",
      "Critical Hit Chance: 9-11%",
      "Attacks per Second: 1.2"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0
    ],
    "flavourText": [
      "A hundred blind heads, each seeking the taste of prey on the air."
    ],
    "key": "slivertongue zealot bow",
    "level": 39,
    "mods": [
      "Adds (40-48) to (65-72) Physical Damage",
      "+(4-6)% to Critical Hit Chance",
      "Leeches (5-8)% of Physical Damage as Life",
      "Leeches (4-7)% of Physical Damage as Mana",
      "Arrows Fork",
      "Arrows Pierce all targets after Forking"
    ],
    "name": "Slivertongue",
    "officialIcon": "",
    "pool": "Bows",
    "requirements": "Requires: Level 39, 70 Dex",
    "runeforging": [
      {
        "cost": "Cost: Slivertongue Zealot Bow, Verisium x775, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "local weapon implicit hidden added maximum chaos damage [19]local weapon implicit hidden added minimum chaos damage [7]"
        ],
        "key": "runeforged zealot bow",
        "label": "Runeforged Zealot Bow",
        "level": 55,
        "properties": [
          "Physical Damage: 44-67",
          "Critical Hit Chance: 10%",
          "Attacks per Second: 1.2"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 97 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Slivertongue",
    "sourceUrl": "https://poe2db.tw/us/Slivertongue",
    "type": "Bows",
    "verification": "embedded"
  },
  {
    "base": "Artillery Bow",
    "baseImplicitMods": [
      "Grants Skill: Level 11 Phantasmal Arrow",
      "50% reduced Projectile Range"
    ],
    "baseProperties": [
      "Bow",
      "Physical Damage: 39-72",
      "Fire Damage: (76-98) to (126-193)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.1"
    ],
    "basePropertyStyles": [
      null,
      1,
      4,
      0,
      0
    ],
    "flavourText": [
      "The power of the Allflame rends",
      "souls just as easily as flesh."
    ],
    "key": "fairgraves' curse artillery bow",
    "level": 45,
    "mods": [
      "Adds (76-98) to (126-193) Fire Damage",
      "(30-50)% increased Flammability Magnitude",
      "(10-20)% increased Ignite Magnitude",
      "30% reduced Life Recovery rate",
      "-30 Physical Damage taken from Hits",
      "Attack Hits inflict Spectral Fire for 8 seconds"
    ],
    "name": "Fairgraves' Curse",
    "officialIcon": "",
    "pool": "Bows",
    "requirements": "Requires: Level 45, 80 Dex",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Fairgraves_Curse",
    "sourceUrl": "https://poe2db.tw/us/Fairgraves_Curse",
    "type": "Bows",
    "verification": "embedded"
  },
  {
    "base": "Heavy Bow",
    "baseImplicitMods": [],
    "baseProperties": [
      "Bow",
      "Physical Damage: (113-153) to (188-255)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.32"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0
    ],
    "flavourText": [
      "\"Kinslayer, you dishonour your own traditions to turn the tide of battle!",
      "Let us see which is stronger... Karui savagery or the might of the Empire!\"",
      "- General Marceus Lioneye"
    ],
    "key": "lioneye's glare heavy bow",
    "level": 65,
    "mods": [
      "(150-240)% increased Physical Damage",
      "+(300-500) to Accuracy Rating",
      "10% increased Attack Speed",
      "+(20-30) to Dexterity",
      "+2 metres to Dodge Roll distance if you haven't Dodge Rolled Recently",
      "-1 metre to Dodge Roll distance if you've Dodge Rolled Recently",
      "Repeatable Attacks with this Bow Repeat +2 times if no enemies are in your Presence",
      "enable lioneyes glow task [1]"
    ],
    "name": "Lioneye's Glare",
    "officialIcon": "",
    "pool": "Bows",
    "requirements": "Requires: Level 65, 114 Dex",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Lioneyes_Glare",
    "sourceUrl": "https://poe2db.tw/us/Lioneyes_Glare",
    "type": "Bows",
    "verification": "embedded"
  },
  {
    "base": "Heartwood Shortbow",
    "baseImplicitMods": [
      "Grants Skill: Level 16 Azmerian Swarms"
    ],
    "baseProperties": [
      "Bow",
      "Physical Damage: 41-76",
      "Fire Damage: (48-59) to (75-97)",
      "Cold Damage: (35-53) to (65-80)",
      "Lightning Damage: (1-8) to (123-152)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.35-1.43"
    ],
    "basePropertyStyles": [
      null,
      1,
      4,
      5,
      6,
      0,
      0
    ],
    "flavourText": [
      "As the Maji approached the edge of Nothingness, she strung",
      "fragments of the Wildwood's carcass together. When she",
      "nocked her arrow, she pulled upon the elements of life itself."
    ],
    "key": "periphery heartwood shortbow",
    "level": 67,
    "mods": [
      "Adds (48-59) to (75-97) Fire Damage",
      "Adds (35-53) to (65-80) Cold Damage",
      "Adds (1-8) to (123-152) Lightning Damage",
      "(8-14)% increased Attack Speed",
      "Elemental Damage from Hits Contributes to Flammability, Ignite, and Chill Magnitudes, Freeze Buildup, and Shock Chance"
    ],
    "name": "Periphery",
    "officialIcon": "",
    "pool": "Bows",
    "requirements": "Requires: Level 67, 134 Dex",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Periphery",
    "sourceUrl": "https://poe2db.tw/us/Periphery",
    "type": "Bows",
    "verification": "embedded"
  },
  {
    "base": "Fanatic Bow",
    "baseImplicitMods": [
      "local weapon implicit hidden added maximum chaos damage [64]local weapon implicit hidden added minimum chaos damage [28]"
    ],
    "baseProperties": [
      "Bow",
      "Physical Damage: 47-79",
      "Lightning Damage: (1) to (300-500)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.32-1.38"
    ],
    "basePropertyStyles": [
      null,
      1,
      6,
      0,
      0
    ],
    "flavourText": [
      "The eldritch storm descended upon us, and bruised lightning",
      "rained down. Metal withered and flesh melted before its",
      "arcane power. There was no escape, no shelter. Only despair."
    ],
    "key": "voltaxic rift fanatic bow",
    "level": 79,
    "mods": [
      "Adds 1 to (300-500) Lightning Damage",
      "(10-15)% increased Attack Speed",
      "100% of Lightning Damage Converted to Chaos Damage",
      "Chaos Damage from Hits also Contributes to Shock Chance"
    ],
    "name": "Voltaxic Rift",
    "officialIcon": "",
    "pool": "Bows",
    "requirements": "Requires: Level 79, 163 Dex",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Voltaxic_Rift",
    "sourceUrl": "https://poe2db.tw/us/Voltaxic_Rift",
    "type": "Bows",
    "verification": "embedded"
  },
  {
    "base": "Leather Buckler",
    "baseImplicitMods": [
      "Grants Skill: Parry"
    ],
    "baseProperties": [
      "Ezomyte Buckler",
      "Evasion Rating: 30-40",
      "Block Chance: 24-26%"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"A thief in the night, Draven did creep,",
      "families asleep, taken, held on high.",
      "Clever, he thought, 'til his children paid.",
      "Nay, villain, a man never bleeds alone.\""
    ],
    "key": "dunkelhalt leather buckler",
    "level": 1,
    "mods": [
      "(20-30)% increased Block chance",
      "+(20-30) to Evasion Rating",
      "You take 50% of damage from Blocked Hits",
      "50% increased Parried Debuff Magnitude"
    ],
    "name": "Dunkelhalt",
    "officialIcon": "",
    "pool": "Bucklers",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Dunkelhalt Leather Buckler, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Parry"
        ],
        "key": "runemastered leather buckler",
        "label": "Runemastered Leather Buckler",
        "level": 38,
        "properties": [
          "Block chance: 20%",
          "Evasion Rating: 108",
          "Runic Ward: 36"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Dunkelhalt",
    "sourceUrl": "https://poe2db.tw/us/Dunkelhalt",
    "type": "Bucklers",
    "verification": "embedded"
  },
  {
    "base": "Wooden Buckler",
    "baseImplicitMods": [
      "Grants Skill: Parry"
    ],
    "baseProperties": [
      "Buckler",
      "Evasion Rating: 18",
      "Block Chance: 20%"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Light and shadow chase eternal,",
      "but neither knows the other exists..."
    ],
    "key": "nocturne wooden buckler",
    "level": 5,
    "mods": [
      "+(60-80) to maximum Mana",
      "+(10-15)% to all Elemental Resistances",
      "20% increased Accuracy Rating",
      "Parried enemies take more Spell Damage instead of more Attack Damage",
      "100% increased Parried Debuff Duration",
      "parry skill art variation from item [2]"
    ],
    "name": "Nocturne",
    "officialIcon": "",
    "pool": "Bucklers",
    "requirements": "Requires: Level 5, 10 Dex",
    "runeforging": [
      {
        "cost": "Cost: Nocturne Wooden Buckler, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Parry"
        ],
        "key": "runemastered wooden buckler",
        "label": "Runemastered Wooden Buckler",
        "level": 38,
        "properties": [
          "Block chance: 20%",
          "Evasion Rating: 90",
          "Runic Ward: 18"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Nocturne",
    "sourceUrl": "https://poe2db.tw/us/Nocturne",
    "type": "Bucklers",
    "verification": "embedded"
  },
  {
    "base": "Plated Buckler",
    "baseImplicitMods": [
      "Grants Skill: Parry"
    ],
    "baseProperties": [
      "Ezomyte Buckler",
      "Evasion Rating: 47-78",
      "Block Chance: 20%"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"Resist for long enough, and your oppressor",
      "will lose his will. Then, you've won.\""
    ],
    "key": "rondel de ezo plated buckler",
    "level": 11,
    "mods": [
      "(50-150)% increased Evasion Rating",
      "+(10-20) to Dexterity",
      "5 Life Regeneration per second",
      "100% increased Block chance against Projectiles",
      "Curse Enemies with Enfeeble on Block"
    ],
    "name": "Rondel de Ezo",
    "officialIcon": "",
    "pool": "Bucklers",
    "requirements": "Requires: Level 11, 18 Dex",
    "runeforging": [
      {
        "cost": "Cost: Rondel de Ezo Plated Buckler, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Parry"
        ],
        "key": "runemastered plated buckler",
        "label": "Runemastered Plated Buckler",
        "level": 38,
        "properties": [
          "Block chance: 20%",
          "Evasion Rating: 67",
          "Runic Ward: 23"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Rondel_de_Ezo",
    "sourceUrl": "https://poe2db.tw/us/Rondel_de_Ezo",
    "type": "Bucklers",
    "verification": "embedded"
  },
  {
    "base": "Iron Buckler",
    "baseImplicitMods": [
      "Grants Skill: Parry"
    ],
    "baseProperties": [
      "Buckler",
      "Evasion Rating: 42",
      "Block Chance: 22-23%"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "A window onto a realm of red,",
      "where countless voices scream..."
    ],
    "key": "bloodbarrier iron buckler",
    "level": 16,
    "mods": [
      "(10-15)% increased Block chance",
      "+(13-17)% to Chaos Resistance",
      "(5-10) Life Regeneration per second",
      "Inflict Corrupted Blood for 5 seconds on Block, dealing 50% ofyour maximum Life as Physical damage per second"
    ],
    "name": "Bloodbarrier",
    "officialIcon": "",
    "pool": "Bucklers",
    "requirements": "Requires: Level 16, 25 Dex",
    "runeforging": [
      {
        "cost": "Cost: Bloodbarrier Iron Buckler, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Parry"
        ],
        "key": "runemastered iron buckler",
        "label": "Runemastered Iron Buckler",
        "level": 38,
        "properties": [
          "Block chance: 20%",
          "Evasion Rating: 45",
          "Runic Ward: 45"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Bloodbarrier",
    "sourceUrl": "https://poe2db.tw/us/Bloodbarrier",
    "type": "Bucklers",
    "verification": "embedded"
  },
  {
    "base": "Ridged Buckler",
    "baseImplicitMods": [
      "Grants Skill: Parry"
    ],
    "baseProperties": [
      "Buckler",
      "Evasion Rating: 99-121",
      "Block Chance: 20%"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Cold, miserable and alone... but alive."
    ],
    "key": "kaltenhalt ridged buckler",
    "level": 22,
    "mods": [
      "(80-120)% increased Evasion Rating",
      "+5% to Maximum Cold Resistance",
      "+40% to Cold Resistance",
      "Modifiers to Stun Buildup apply to Freeze Buildup instead for Parry",
      "100% of Parry Physical Damage Converted to Cold Damage",
      "25 to 35 Cold Thorns damage"
    ],
    "name": "Kaltenhalt",
    "officialIcon": "",
    "pool": "Bucklers",
    "requirements": "Requires: Level 22, 33 Dex",
    "runeforging": [
      {
        "cost": "Cost: Kaltenhalt Ridged Buckler, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Parry"
        ],
        "key": "runemastered ridged buckler",
        "label": "Runemastered Ridged Buckler",
        "level": 40,
        "properties": [
          "Block chance: 20%",
          "Evasion Rating: 66",
          "Runic Ward: 28"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 58 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Kaltenhalt",
    "sourceUrl": "https://poe2db.tw/us/Kaltenhalt",
    "type": "Bucklers",
    "verification": "embedded"
  },
  {
    "base": "Spiked Buckler",
    "baseImplicitMods": [
      "Grants Skill: Parry"
    ],
    "baseProperties": [
      "Buckler",
      "Evasion Rating: 102-128",
      "Block Chance: 20%"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "As a boy, in the arena, Daresso learned to",
      "feign weakness to open up a lethal blow."
    ],
    "key": "silverthorne spiked buckler",
    "level": 26,
    "mods": [
      "(60-100)% increased Evasion Rating",
      "+(10-15)% to all Elemental Resistances",
      "Parrying applies 10 Stacks of Critical Weakness",
      "100% increased Parry Damage"
    ],
    "name": "Silverthorne",
    "officialIcon": "",
    "pool": "Bucklers",
    "requirements": "Requires: Level 26, 38 Dex",
    "runeforging": [
      {
        "cost": "Cost: Silverthorne Spiked Buckler, Verisium x430, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Parry"
        ],
        "key": "runemastered spiked buckler",
        "label": "Runemastered Spiked Buckler",
        "level": 40,
        "properties": [
          "Block chance: 20%",
          "Evasion Rating: 61",
          "Runic Ward: 33"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 58 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Silverthorne",
    "sourceUrl": "https://poe2db.tw/us/Silverthorne",
    "type": "Bucklers",
    "verification": "embedded"
  },
  {
    "base": "Ornate Buckler",
    "baseImplicitMods": [
      "Grants Skill: Parry"
    ],
    "baseProperties": [
      "Buckler",
      "Evasion Rating: 192-240",
      "Block Chance: 20%"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"There is nowhere my vengeance cannot find you.\""
    ],
    "key": "calgyra's arc ornate buckler",
    "level": 52,
    "mods": [
      "(60-100)% increased Evasion Rating",
      "+(60-100) to maximum Mana",
      "+(10-20) to Intelligence",
      "Infinite Parry Range",
      "50% increased Parried Debuff Duration",
      "parry skill art variation from item [1]"
    ],
    "name": "Calgyra's Arc",
    "officialIcon": "",
    "pool": "Bucklers",
    "requirements": "Requires: Level 52, 74 Dex",
    "runeforging": [
      {
        "cost": "Cost: Calgyra's Arc Ornate Buckler, Verisium x1000, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "Grants Skill: Parry"
        ],
        "key": "runemastered ornate buckler",
        "label": "Runemastered Ornate Buckler",
        "level": 55,
        "properties": [
          "Block chance: 20%",
          "Evasion Rating: 114",
          "Runic Ward: 12"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 78 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Calgyras_Arc",
    "sourceUrl": "https://poe2db.tw/us/Calgyras_Arc",
    "type": "Bucklers",
    "verification": "embedded"
  },
  {
    "base": "Array Buckler",
    "baseImplicitMods": [
      "Grants Skill: Parry"
    ],
    "baseProperties": [
      "Buckler",
      "Evasion Rating: 252-504",
      "Block Chance: 20%"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"Lundara held back the hordes, while Solerai rose to split the sky.",
      "With a single stroke, she ended the Winter of the World.\"",
      "- Wranga, tale-woman of the Wahida akhara"
    ],
    "key": "sunsplinter array buckler",
    "level": 55,
    "mods": [
      "(100-300)% increased Evasion Rating",
      "+1 to Level of all Fire Skills",
      "+2 to Level of all Cold Skills",
      "+3 to Level of all Lightning Skills",
      "+1% to Maximum Fire Resistance",
      "+2% to Maximum Cold Resistance",
      "+3% to Maximum Lightning Resistance"
    ],
    "name": "Sunsplinter",
    "officialIcon": "",
    "pool": "Bucklers",
    "requirements": "Requires: Level 55, 78 Dex",
    "runeforging": [
      {
        "cost": "Cost: Sunsplinter Array Buckler, Verisium x1500, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "Grants Skill: Parry"
        ],
        "key": "runemastered array buckler",
        "label": "Runemastered Array Buckler",
        "level": 60,
        "properties": [
          "Block chance: 20%",
          "Evasion Rating: 103",
          "Runic Ward: 33"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 60, 85 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Sunsplinter",
    "sourceUrl": "https://poe2db.tw/us/Sunsplinter",
    "type": "Bucklers",
    "verification": "embedded"
  },
  {
    "base": "Sapphire Charm",
    "baseImplicitMods": [
      "Used when you take Cold damage from a Hit"
    ],
    "baseProperties": [
      "Charm"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"To scrape the sky,",
      "to touch the clouds themselves,",
      "is to know true freedom.\"",
      "- Mutewind saying"
    ],
    "key": "breath of the mountains sapphire charm",
    "level": 5,
    "mods": [
      "(10-15)% reduced Charges per use",
      "Grants a Power Charge on use"
    ],
    "name": "Breath of the Mountains",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 5",
    "runeforging": [],
    "section": "Other",
    "slug": "Breath_of_the_Mountains",
    "sourceUrl": "https://poe2db.tw/us/Breath_of_the_Mountains",
    "type": "Charms",
    "verification": "embedded"
  },
  {
    "base": "Ruby Charm",
    "baseImplicitMods": [
      "Used when you take Fire damage from a Hit"
    ],
    "baseProperties": [
      "Charm"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Kaom was not known for his restraint."
    ],
    "key": "ngamahu's chosen ruby charm",
    "level": 5,
    "mods": [
      "(30-40)% increased Charges",
      "Grants up to your maximum Rage on use"
    ],
    "name": "Ngamahu's Chosen",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 5",
    "runeforging": [],
    "section": "Other",
    "slug": "Ngamahus_Chosen",
    "sourceUrl": "https://poe2db.tw/us/Ngamahus_Chosen",
    "type": "Charms",
    "verification": "embedded"
  },
  {
    "base": "Topaz Charm",
    "baseImplicitMods": [
      "Used when you take Lightning damage from a Hit"
    ],
    "baseProperties": [
      "Charm"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The sea swells, the sky thunders; two ships tilt at odds.",
      "Flashes of light show only swinging axes... and a grin."
    ],
    "key": "valako's roar topaz charm",
    "level": 5,
    "mods": [
      "(30-40)% increased Charges gained",
      "Grants a Frenzy Charge on use"
    ],
    "name": "Valako's Roar",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 5",
    "runeforging": [],
    "section": "Other",
    "slug": "Valakos_Roar",
    "sourceUrl": "https://poe2db.tw/us/Valakos_Roar",
    "type": "Charms",
    "verification": "embedded"
  },
  {
    "base": "Stone Charm",
    "baseImplicitMods": [
      "Used when you become Stunned"
    ],
    "baseProperties": [
      "Charm"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"It may be centuries hence, but I still hold utmost faith.",
      "The Saviour will rise, and mankind will be free.\""
    ],
    "key": "for utopia stone charm",
    "level": 8,
    "mods": [
      "Defend with 200% of Armour during effect"
    ],
    "name": "For Utopia",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 8",
    "runeforging": [],
    "section": "Other",
    "slug": "For_Utopia",
    "sourceUrl": "https://poe2db.tw/us/For_Utopia",
    "type": "Charms",
    "verification": "embedded"
  },
  {
    "base": "Silver Charm",
    "baseImplicitMods": [
      "Used when you are affected by a Slow"
    ],
    "baseProperties": [
      "Ezomyte Charm"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"When the headsman's blade swings,",
      "your last moments stretch to eternity.\"",
      "- Vorm, the Twice-Pardoned"
    ],
    "key": "the fall of the axe silver charm",
    "level": 10,
    "mods": [
      "Grants Onslaught during effect"
    ],
    "name": "The Fall of the Axe",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 10",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Fall_of_the_Axe",
    "sourceUrl": "https://poe2db.tw/us/The_Fall_of_the_Axe",
    "type": "Charms",
    "verification": "embedded"
  },
  {
    "base": "Thawing Charm",
    "baseImplicitMods": [
      "Used when you become Frozen"
    ],
    "baseProperties": [
      "Charm"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"Even in the face of the Winter of the World,",
      "life found a way. The Spirit always provides.\""
    ],
    "key": "nascent hope thawing charm",
    "level": 12,
    "mods": [
      "(20-25)% Chance to gain a Charge when you kill an enemy",
      "Energy Shield Recharge starts on use"
    ],
    "name": "Nascent Hope",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 12",
    "runeforging": [],
    "section": "Other",
    "slug": "Nascent_Hope",
    "sourceUrl": "https://poe2db.tw/us/Nascent_Hope",
    "type": "Charms",
    "verification": "embedded"
  },
  {
    "base": "Staunching Charm",
    "baseImplicitMods": [
      "Used when you start Bleeding"
    ],
    "baseProperties": [
      "Charm"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Wraeclast has known too few true heroes.",
      "It remembers those that stood in defiance."
    ],
    "key": "sanguis heroum staunching charm",
    "level": 18,
    "mods": [
      "Gains (0.15-0.2) Charges per Second",
      "Creates Consecrated Ground on use",
      "charm create consecrated ground when used duration ms [4000]",
      "charm create consecrated ground when used radius [14]"
    ],
    "name": "Sanguis Heroum",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 18",
    "runeforging": [],
    "section": "Other",
    "slug": "Sanguis_Heroum",
    "sourceUrl": "https://poe2db.tw/us/Sanguis_Heroum",
    "type": "Charms",
    "verification": "embedded"
  },
  {
    "base": "Antidote Charm",
    "baseImplicitMods": [
      "Used when you become Poisoned"
    ],
    "baseProperties": [
      "Vaal Charm"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Devotees of the Goddess of Lust",
      "needed never fear her sting."
    ],
    "key": "arakaali's gift antidote charm",
    "level": 24,
    "mods": [
      "Recover Life equal to (15-20)% of Mana Flask's Recovery Amount when used",
      "Recover Mana equal to (15-20)% of Life Flask's Recovery Amount when used"
    ],
    "name": "Arakaali's Gift",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 24",
    "runeforging": [],
    "section": "Other",
    "slug": "Arakaalis_Gift",
    "sourceUrl": "https://poe2db.tw/us/Arakaalis_Gift",
    "type": "Charms",
    "verification": "embedded"
  },
  {
    "base": "Dousing Charm",
    "baseImplicitMods": [
      "Used when you become Ignited"
    ],
    "baseProperties": [
      "Ezomyte Charm"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "They found a crying child tied to a frozen pyre.",
      "She was clad in ice, but the village was ash."
    ],
    "key": "beira's anguish dousing charm",
    "level": 32,
    "mods": [
      "(20-25)% Chance to gain a Charge when you kill an enemy",
      "Creates Ignited Ground for 4 seconds when used, Igniting enemies as though dealing Fire damage equal to 500% of your maximum Life"
    ],
    "name": "Beira's Anguish",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 32",
    "runeforging": [],
    "section": "Other",
    "slug": "Beiras_Anguish",
    "sourceUrl": "https://poe2db.tw/us/Beiras_Anguish",
    "type": "Charms",
    "verification": "embedded"
  },
  {
    "base": "Grounding Charm",
    "baseImplicitMods": [
      "Used when you become Shocked"
    ],
    "baseProperties": [
      "Charm"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The most beloved member of every Brinerot crew",
      "is the one that refuses to do any actual work."
    ],
    "key": "the black cat grounding charm",
    "level": 32,
    "mods": [
      "(10-20)% increased Duration",
      "Lightning Damage of Enemies Hitting you is Unlucky during effect"
    ],
    "name": "The Black Cat",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 32",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Black_Cat",
    "sourceUrl": "https://poe2db.tw/us/The_Black_Cat",
    "type": "Charms",
    "verification": "embedded"
  },
  {
    "base": "Amethyst Charm",
    "baseImplicitMods": [
      "Used when you take Chaos damage from a Hit"
    ],
    "baseProperties": [
      "Charm"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Among the Templars, a secret few ate the sins of others.",
      "They bore this burden to empower their hidden Order."
    ],
    "key": "forsaken bangle amethyst charm",
    "level": 40,
    "mods": [
      "(15-25)% increased Duration",
      "50% of Chaos damage you prevent when Hit Recouped as Life and Mana during effect"
    ],
    "name": "Forsaken Bangle",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 40",
    "runeforging": [],
    "section": "Other",
    "slug": "Forsaken_Bangle",
    "sourceUrl": "https://poe2db.tw/us/Forsaken_Bangle",
    "type": "Charms",
    "verification": "embedded"
  },
  {
    "base": "Golden Charm",
    "baseImplicitMods": [
      "Used when you kill a Rare or Unique enemy"
    ],
    "baseProperties": [
      "Charm"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "To become a warrior and a hunter, each young",
      "Azmeri must prove themselves before the Spirit."
    ],
    "key": "rite of passage golden charm",
    "level": 50,
    "mods": [
      "Possessed by Spirit Of The [Azmeri Spirit] for (10-20) seconds on use"
    ],
    "name": "Rite of Passage",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 50",
    "runeforging": [],
    "section": "Other",
    "slug": "Rite_of_Passage",
    "sourceUrl": "https://poe2db.tw/us/Rite_of_Passage",
    "type": "Charms",
    "verification": "embedded"
  },
  {
    "base": "Makeshift Crossbow",
    "baseImplicitMods": [],
    "baseProperties": [
      "Crossbow",
      "Physical Damage: 7-12",
      "Cold Damage: (8-10) to (13-15)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.6",
      "Reload Time: 0.8"
    ],
    "basePropertyStyles": [
      null,
      1,
      5,
      0,
      0,
      0
    ],
    "flavourText": [
      "Sibilant promises surrounded them in the night.",
      "All the travelers had to give him was their devotion..."
    ],
    "key": "mist whisper makeshift crossbow",
    "level": 1,
    "mods": [
      "Adds (8-10) to (13-15) Cold Damage",
      "Gain 5 Mana per enemy killed",
      "(30-50)% increased Freeze Buildup",
      "30% increased Chill Duration on Enemies",
      "Attacks Chain 2 additional times"
    ],
    "name": "Mist Whisper",
    "officialIcon": "",
    "pool": "Crossbows",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Mist Whisper Makeshift Crossbow, Verisium x210, Medved's Crest of the Circle x1",
        "implicitMods": [
          "local weapon implicit hidden % base damage is cold [45]"
        ],
        "key": "runeforged makeshift crossbow",
        "label": "Runeforged Makeshift Crossbow",
        "level": 38,
        "properties": [
          "Physical Damage: 41.25-77",
          "Cold Damage: 33.75-63",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.6",
          "Reload Time: 0.8"
        ],
        "propertyStyles": [
          0,
          5,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 39 Str, 39 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Mist_Whisper",
    "sourceUrl": "https://poe2db.tw/us/Mist_Whisper",
    "type": "Crossbows",
    "verification": "embedded"
  },
  {
    "base": "Tense Crossbow",
    "baseImplicitMods": [
      "(20-30)% increased Bolt Speed"
    ],
    "baseProperties": [
      "Crossbow",
      "Physical Damage: (11-13) to (21-24)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 2.08-2.24",
      "Reload Time: 0.85"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"His approach to the gate was met with sounding trumpets",
      "and an unfurling of banners. He never saw it coming.\"",
      "- anonymous Brotherhood of Silence report"
    ],
    "key": "rampart raptor tense crossbow",
    "level": 4,
    "mods": [
      "(40-60)% increased Physical Damage",
      "(30-40)% increased Attack Speed",
      "30% reduced Reload Speed",
      "Bolts fired by Crossbow Attacks have 100% chance to notexpend Ammunition if you've Reloaded Recently"
    ],
    "name": "Rampart Raptor",
    "officialIcon": "",
    "pool": "Crossbows",
    "requirements": "Requires: Level 4, 8 Str, 8 Dex",
    "runeforging": [
      {
        "cost": "Cost: Rampart Raptor Tense Crossbow, Verisium x285, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runeforged tense crossbow",
        "label": "Runeforged Tense Crossbow",
        "level": 38,
        "properties": [
          "Physical Damage: 44-83",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.6",
          "Reload Time: 0.85"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 39 Str, 39 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Rampart_Raptor",
    "sourceUrl": "https://poe2db.tw/us/Rampart_Raptor",
    "type": "Crossbows",
    "verification": "embedded"
  },
  {
    "base": "Dyad Crossbow",
    "baseImplicitMods": [
      "Grants Skill: Level 6 Gemini Surge",
      "Loads an additional bolt"
    ],
    "baseProperties": [
      "Crossbow",
      "Physical Damage: (23-30) to (62-74)",
      "Critical Hit Chance: 10%",
      "Attacks per Second: 1.6",
      "Reload Time: 1.1"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "For those without a home in the Vastiri, the",
      "hot day is harsh, but the chill night is far worse."
    ],
    "key": "double vision dyad crossbow",
    "level": 20,
    "mods": [
      "Adds (14-21) to (25-37) Physical Damage",
      "+5% to Critical Hit Chance",
      "(15-25)% increased Reload Speed",
      "When you reload, triggers Gemini Surge to alternatelygain (2-6) Cold Surges or (2-6) Fire Surges",
      "trigger reload infusion on reload [1]"
    ],
    "name": "Double Vision",
    "officialIcon": "",
    "pool": "Crossbows",
    "requirements": "Requires: Level 20, 22 Str, 22 Dex",
    "runeforging": [
      {
        "cost": "Cost: Double Vision Dyad Crossbow, Verisium x605, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runeforged dyad crossbow",
        "label": "Runeforged Dyad Crossbow",
        "level": 40,
        "properties": [
          "Physical Damage: 32-127",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.6",
          "Reload Time: 1.1"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 40 Str, 40 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Double_Vision",
    "sourceUrl": "https://poe2db.tw/us/Double_Vision",
    "type": "Crossbows",
    "verification": "embedded"
  },
  {
    "base": "Trarthan Cannon",
    "baseImplicitMods": [
      "Cannot load or fire Ammunition"
    ],
    "baseProperties": [
      "Crossbow",
      "Physical Damage: (232-290) to (536-670)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.4"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0
    ],
    "flavourText": [
      "\"The time has passed for diplomacy!",
      "If they will not respect House Azadi,",
      "then let them die gloriously... and loudly.",
      "We are the masters of the Death Trades!\"",
      "- Ratha Azadi"
    ],
    "key": "redemption trarthan cannon",
    "level": 65,
    "mods": [
      "(300-400)% increased Physical Damage",
      "Hits with this Weapon have no Critical Damage Bonus",
      "(20-40)% reduced Cooldown Recovery Rate",
      "Gain 1 Explosive Rhythm every (2-3) times you use a Grenade Skill Remove all Explosive Rhythm on reaching 10 to gain Explosive Fervour for 10 Seconds"
    ],
    "name": "Redemption",
    "officialIcon": "",
    "pool": "Crossbows",
    "requirements": "Requires: Level 65, 114 Str, 63 Dex",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Redemption",
    "sourceUrl": "https://poe2db.tw/us/Redemption",
    "type": "Crossbows",
    "verification": "embedded"
  },
  {
    "base": "Desolate Crossbow",
    "baseImplicitMods": [
      "Grants Skill: Level 17 Requiem"
    ],
    "baseProperties": [
      "Crossbow",
      "Physical Damage: (116-132) to (462-528)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.76-1.92",
      "Reload Time: 0.8"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"And here we shall remain...",
      "trapped in our symphony of eternal anguish.",
      "Artist and Composer, their fates entwined for all of time.\"",
      "- Adamantia Brektov, the Composer",
      ""
    ],
    "key": "the last lament desolate crossbow",
    "level": 77,
    "mods": [
      "(250-300)% increased Physical Damage",
      "(10-20)% increased Attack Speed",
      "(40-60)% reduced Reload Speed",
      "Leeches (5-10)% of Physical Damage as Life",
      "(10-20)% chance to load a bolt into all Crossbow skills on Kill",
      "Sacrifice 300 Life to not consume the last bolt when firing",
      "enable grand design clip handling [1]"
    ],
    "name": "The Last Lament",
    "officialIcon": "",
    "pool": "Crossbows",
    "requirements": "Requires: Level 77, 89 Str, 89 Dex",
    "runeforging": [],
    "section": "Weapons",
    "slug": "The_Last_Lament",
    "sourceUrl": "https://poe2db.tw/us/The_Last_Lament",
    "type": "Crossbows",
    "verification": "embedded"
  },
  {
    "base": "Twig Focus",
    "baseImplicitMods": [],
    "baseProperties": [
      "Focus",
      "Energy Shield: 12"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "The cry of death whispers in the wind."
    ],
    "key": "deathrattle twig focus",
    "level": 1,
    "mods": [
      "+(10-20) to maximum Energy Shield",
      "(20-40)% increased Spell Damage",
      "+(5-10) to Intelligence",
      "20% chance for Energy Shield Recharge to start when you Kill an Enemy"
    ],
    "name": "Deathrattle",
    "officialIcon": "",
    "pool": "Foci",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Deathrattle Twig Focus, Verisium x220, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered twig focus",
        "label": "Runemastered Twig Focus",
        "level": 38,
        "properties": [
          "Energy Shield: 38",
          "Runic Ward: 23"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Deathrattle",
    "sourceUrl": "https://poe2db.tw/us/Deathrattle",
    "type": "Foci",
    "verification": "embedded"
  },
  {
    "base": "Woven Focus",
    "baseImplicitMods": [],
    "baseProperties": [
      "Focus",
      "Energy Shield: 23-26"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "A gift, a braid, of golden hair.",
      "The war, forgotten.",
      "The reason, remembered."
    ],
    "key": "threaded light woven focus",
    "level": 6,
    "mods": [
      "(50-70)% increased Energy Shield",
      "(30-40)% increased Mana Regeneration Rate",
      "20% increased Light Radius",
      "(8-12)% increased Spell Damage per 10 Spirit"
    ],
    "name": "Threaded Light",
    "officialIcon": "",
    "pool": "Foci",
    "requirements": "Requires: Level 6, 11 Int",
    "runeforging": [
      {
        "cost": "Cost: Threaded Light Woven Focus, Verisium x400, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered woven focus",
        "label": "Runemastered Woven Focus",
        "level": 38,
        "properties": [
          "Energy Shield: 23",
          "Runic Ward: 45"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Threaded_Light",
    "sourceUrl": "https://poe2db.tw/us/Threaded_Light",
    "type": "Foci",
    "verification": "embedded"
  },
  {
    "base": "Lapis Amulet",
    "baseImplicitMods": [
      "+(10-15) to Intelligence"
    ],
    "baseProperties": [
      "Amulet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "You are slow, foolish and ignorant.",
      "I am not."
    ],
    "key": "stone of lazhwar lapis amulet",
    "level": 8,
    "mods": [
      "+(50-100) to maximum Mana",
      "(15-25)% increased Cast Speed",
      "+(15-25)% to Block Chance while holding a Focus"
    ],
    "name": "Stone of Lazhwar",
    "officialIcon": "",
    "pool": "Foci",
    "requirements": "Requires: Level 8",
    "runeforging": [],
    "section": "Other",
    "slug": "Stone_of_Lazhwar",
    "sourceUrl": "https://poe2db.tw/us/Stone_of_Lazhwar",
    "type": "Foci",
    "verification": "embedded"
  },
  {
    "base": "Antler Focus",
    "baseImplicitMods": [],
    "baseProperties": [
      "Focus",
      "Energy Shield: 18"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "The horrors we imagined as children",
      "still exist somewhere in the dark..."
    ],
    "key": "effigy of cruelty antler focus",
    "level": 10,
    "mods": [
      "+(20-30) to maximum Energy Shield",
      "(40-50)% increased Spell Damage",
      "+10 to Intelligence",
      "+(7-13)% to Chaos Resistance",
      "Critical Hits with Spells apply (1-3) Stacks of Critical Weakness"
    ],
    "name": "Effigy of Cruelty",
    "officialIcon": "",
    "pool": "Foci",
    "requirements": "Requires: Level 10, 17 Int",
    "runeforging": [
      {
        "cost": "Cost: Effigy of Cruelty Antler Focus, Verisium x790, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered antler focus",
        "label": "Runemastered Antler Focus",
        "level": 38,
        "properties": [
          "Energy Shield: 23",
          "Runic Ward: 34"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Effigy_of_Cruelty",
    "sourceUrl": "https://poe2db.tw/us/Effigy_of_Cruelty",
    "type": "Foci",
    "verification": "embedded"
  },
  {
    "base": "Engraved Focus",
    "baseImplicitMods": [],
    "baseProperties": [
      "Focus",
      "Energy Shield: 22"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Obedience stretches beyond the grave."
    ],
    "key": "carrion call engraved focus",
    "level": 16,
    "mods": [
      "+(30-40) to maximum Energy Shield",
      "Minions have (20-30)% increased maximum Life",
      "(20-30)% increased Mana Regeneration Rate",
      "Minions deal (20-30)% increased Damage",
      "Minions' Resistances are equal to yours"
    ],
    "name": "Carrion Call",
    "officialIcon": "",
    "pool": "Foci",
    "requirements": "Requires: Level 16, 25 Int",
    "runeforging": [
      {
        "cost": "Cost: Carrion Call Engraved Focus, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered engraved focus",
        "label": "Runemastered Engraved Focus",
        "level": 38,
        "properties": [
          "Energy Shield: 38",
          "Runic Ward: 45"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Carrion_Call",
    "sourceUrl": "https://poe2db.tw/us/Carrion_Call",
    "type": "Foci",
    "verification": "embedded"
  },
  {
    "base": "Tonal Focus",
    "baseImplicitMods": [],
    "baseProperties": [
      "Focus",
      "Energy Shield: 26"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Sinuous, entwined... inextricable."
    ],
    "key": "serpent's lesson tonal focus",
    "level": 22,
    "mods": [
      "+(60-100) to maximum Life",
      "+(60-100) to maximum Mana",
      "You count as on Low Life while at 35% of maximum Mana or below",
      "You count as on Low Mana while at 35% of maximum Life or below"
    ],
    "name": "Serpent's Lesson",
    "officialIcon": "",
    "pool": "Foci",
    "requirements": "Requires: Level 22, 33 Int",
    "runeforging": [
      {
        "cost": "Cost: Serpent's Lesson Tonal Focus, Verisium x250, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered tonal focus",
        "label": "Runemastered Tonal Focus",
        "level": 38,
        "properties": [
          "Energy Shield: 19",
          "Runic Ward: 57"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Serpents_Lesson",
    "sourceUrl": "https://poe2db.tw/us/Serpents_Lesson",
    "type": "Foci",
    "verification": "embedded"
  },
  {
    "base": "Crystal Focus",
    "baseImplicitMods": [],
    "baseProperties": [
      "Focus",
      "Energy Shield: 44-49"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "A flash of blue, a stormcloud's kiss,",
      "her motionless dance the pulse of bliss"
    ],
    "key": "the eternal spark crystal focus",
    "level": 26,
    "mods": [
      "(50-70)% increased Energy Shield",
      "+5% to Maximum Lightning Resistance",
      "+(20-30)% to Lightning Resistance",
      "40% increased Mana Regeneration Rate",
      "40% increased Mana Regeneration Rate while stationary"
    ],
    "name": "The Eternal Spark",
    "officialIcon": "",
    "pool": "Foci",
    "requirements": "Requires: Level 26, 38 Int",
    "runeforging": [
      {
        "cost": "Cost: The Eternal Spark Crystal Focus, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered crystal focus",
        "label": "Runemastered Crystal Focus",
        "level": 40,
        "properties": [
          "Energy Shield: 23",
          "Runic Ward: 47"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 40, 58 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Eternal_Spark",
    "sourceUrl": "https://poe2db.tw/us/The_Eternal_Spark",
    "type": "Foci",
    "verification": "embedded"
  },
  {
    "base": "Voodoo Focus",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Foci",
      "Energy Shield: 78-119"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Give him your body, and your burdens will follow."
    ],
    "key": "apep's supremacy voodoo focus",
    "level": 33,
    "mods": [
      "(100-200)% increased Energy Shield",
      "(30-50)% increased Energy Shield Recharge Rate",
      "20% of Elemental damage from Hits taken as Chaos damage",
      "+25% chance to be Poisoned",
      "100% chance to Poison on Hit with Spell Damage"
    ],
    "name": "Apep's Supremacy",
    "officialIcon": "",
    "pool": "Foci",
    "requirements": "Requires: Level 33, 48 Int",
    "runeforging": [
      {
        "cost": "Cost: Apep's Supremacy Voodoo Focus, Verisium x420, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered voodoo focus",
        "label": "Runemastered Voodoo Focus",
        "level": 55,
        "properties": [
          "Energy Shield: 40",
          "Runic Ward: 31"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 55, 78 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Apeps_Supremacy",
    "sourceUrl": "https://poe2db.tw/us/Apeps_Supremacy",
    "type": "Foci",
    "verification": "embedded"
  },
  {
    "base": "Sacred Focus",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Foci",
      "Energy Shield: 130-162"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "The Vaal emptied their slaves of beating hearts,",
      "and left a mountain of twitching dead."
    ],
    "key": "rathpith globe sacred focus",
    "level": 75,
    "mods": [
      "(60-100)% increased Energy Shield",
      "+(60-100) to maximum Life",
      "Non-Channelling Spells cost an additional 6% of your maximum Life",
      "Non-Channelling Spells have 3% increased Critical Hit Chance per 100 maximum Life",
      "Non-Channelling Spells deal 6% increased Damage per 100 maximum Life",
      "rathpith surge [3]"
    ],
    "name": "Rathpith Globe",
    "officialIcon": "",
    "pool": "Foci",
    "requirements": "Requires: Level 75, 107 Int",
    "runeforging": [
      {
        "cost": "Cost: Rathpith Globe Sacred Focus, Verisium x2500, Exceptional Verisium x10, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered plumed focus",
        "label": "Runemastered Plumed Focus",
        "level": 75,
        "properties": [
          "Energy Shield: 23",
          "Runic Ward: 106"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 75, 91 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Rathpith_Globe",
    "sourceUrl": "https://poe2db.tw/us/Rathpith_Globe",
    "type": "Foci",
    "verification": "embedded"
  },
  {
    "base": "Stocky Mitts",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Glove",
      "Physical Damage: 8-12",
      "Armour: 15"
    ],
    "basePropertyStyles": [
      null,
      1,
      0
    ],
    "flavourText": [
      "\"You think us savages?\" mused the Red Wolf, as",
      "he pulled teeth from the Eternal's skull. \"I will",
      "show your kind the way of tooth and claw.\""
    ],
    "key": "facebreaker stocky mitts",
    "level": 1,
    "mods": [
      "Has 8 to 12 Physical damage, +3 to +4 per Boss's Face Broken",
      "(30-50)% increased Stun Buildup",
      "1% more Unarmed Damage per 5 Strength",
      "+0.3 metres to Melee Strike Range while Unarmed",
      "+1 to Armour per Strength",
      "Can Attack as though using a One Handed Mace while both of your hand slots are emptyUnarmed Attacks that would use an Equipped One Hand Mace's damage use this Item's damage",
      "local display facebreaker damage imitation weapon [1]"
    ],
    "name": "Facebreaker",
    "officialIcon": "",
    "pool": "Gloves_str",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Facebreaker Stocky Mitts, Verisium x240, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered stocky mitts",
        "label": "Runemastered Stocky Mitts",
        "level": 38,
        "properties": [
          "Armour: 50",
          "Runic Ward: 45"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 48 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Facebreaker",
    "sourceUrl": "https://poe2db.tw/us/Facebreaker",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Suede Bracers",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Glove",
      "Evasion Rating: 25-35"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Fight with the ferocity of the First Ones."
    ],
    "key": "northpaw suede bracers",
    "level": 1,
    "mods": [
      "+(15-25) to Evasion Rating",
      "Adds (3-5) to (8-10) Physical Damage to Attacks",
      "(10-15)% increased Critical Damage Bonus",
      "Base Critical Hit Chance for Attacks with Weapons is 7%"
    ],
    "name": "Northpaw",
    "officialIcon": "",
    "pool": "Gloves_dex",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Northpaw Suede Bracers, Verisium x420, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered suede bracers",
        "label": "Runemastered Suede Bracers",
        "level": 38,
        "properties": [
          "Evasion Rating: 63",
          "Runic Ward: 20"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 48 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Northpaw",
    "sourceUrl": "https://poe2db.tw/us/Northpaw",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Torn Gloves",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Energy Shield: 9"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Bloodshed on the crimson shores,",
      "longing for the endless sea.",
      "Treasures, life, I'd give it all",
      "just to capture thee."
    ],
    "key": "painter's servant torn gloves",
    "level": 1,
    "mods": [
      "Gain (5-10)% of Elemental Damage as Extra Cold Damage",
      "Gain (5-10)% of Elemental Damage as Extra Fire Damage",
      "Gain (5-10)% of Elemental Damage as Extra Lightning Damage",
      "33% of Elemental Damage Converted to Cold Damage",
      "33% of Elemental Damage Converted to Fire Damage",
      "33% of Elemental Damage Converted to Lightning Damage"
    ],
    "name": "Painter's Servant",
    "officialIcon": "",
    "pool": "Gloves_int",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Painter's Servant Torn Gloves, Verisium x240, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered torn gloves",
        "label": "Runemastered Torn Gloves",
        "level": 38,
        "properties": [
          "Energy Shield: 18",
          "Runic Ward: 36"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 48 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Painters_Servant",
    "sourceUrl": "https://poe2db.tw/us/Painters_Servant",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Gauze Wraps",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Evasion Rating: 12-14",
      "Energy Shield: 8-9"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Ulcers, scabs, and pocks, the third army makes its claim."
    ],
    "key": "plaguefinger gauze wraps",
    "level": 4,
    "mods": [
      "(30-50)% increased Evasion and Energy Shield",
      "(4-6)% increased Attack Speed",
      "Cannot inflict Elemental Ailments",
      "(20-30)% chance to Poison on Hit",
      "All Damage from Hits Contributes to Poison Magnitude"
    ],
    "name": "Plaguefinger",
    "officialIcon": "",
    "pool": "Gloves_dex_int",
    "requirements": "Requires: Level 4, 6 Dex, 6 Int",
    "runeforging": [
      {
        "cost": "Cost: Plaguefinger Gauze Wraps, Verisium x230, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered gauze wraps",
        "label": "Runemastered Gauze Wraps",
        "level": 38,
        "properties": [
          "Runic Ward: 90"
        ],
        "propertyStyles": [
          0
        ],
        "requirements": "Requires: Level 38, 27 Dex, 27 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Plaguefinger",
    "sourceUrl": "https://poe2db.tw/us/Plaguefinger",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Rope Cuffs",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Armour: 18-21",
      "Energy Shield: 8-10"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Try as you like to hide the",
      "blood on your hands.",
      "You'll still know the truth."
    ],
    "key": "gravebind rope cuffs",
    "level": 5,
    "mods": [
      "(40-60)% increased Armour and Energy Shield",
      "20% increased Rarity of Items foundYour other Modifiers to Rarity of Items found do not apply",
      "+(10-15)% to Cold Resistance",
      "Gain (7-10) Life per enemy killed",
      "Gain (4-6) Mana per enemy killed",
      "Enemies in your Presence killed by anyone count as being killed by you instead"
    ],
    "name": "Gravebind",
    "officialIcon": "",
    "pool": "Gloves_str_int",
    "requirements": "Requires: Level 5, 6 Str, 6 Int",
    "runeforging": [
      {
        "cost": "Cost: Gravebind Rope Cuffs, Verisium x130, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered rope cuffs",
        "label": "Runemastered Rope Cuffs",
        "level": 38,
        "properties": [
          "Armour: 33",
          "Energy Shield: 10",
          "Runic Ward: 36"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 27 Str, 27 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Gravebind",
    "sourceUrl": "https://poe2db.tw/us/Gravebind",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Ringmail Gauntlets",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Armour: 21",
      "Evasion Rating: 17"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The whispers of the old gods hum through the iron. They demand a hero."
    ],
    "key": "jarngreipr ringmail gauntlets",
    "level": 6,
    "mods": [
      "50% increased Armour and Evasion",
      "Adds (2-3) to (5-6) Physical Damage to Attacks",
      "+(30-50) to maximum Life",
      "(4-8)% increased Attack Speed",
      "Strength can satisfy other Attribute Requirements of Melee Weapons and Melee Skills"
    ],
    "name": "Jarngreipr",
    "officialIcon": "",
    "pool": "Gloves_str_dex",
    "requirements": "Requires: Level 6, 6 Str, 6 Dex",
    "runeforging": [
      {
        "cost": "Cost: Jarngreipr Ringmail Gauntlets, Verisium x140, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered ringmail gauntlets",
        "label": "Runemastered Ringmail Gauntlets",
        "level": 38,
        "properties": [
          "Armour: 44",
          "Evasion Rating: 39",
          "Runic Ward: 18"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 27 Str, 27 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Jarngreipr",
    "sourceUrl": "https://poe2db.tw/us/Jarngreipr",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Firm Bracers",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Evasion Rating: 40-47"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "After the eruption, the skies turned grey,",
      "ash began to fall, and a chill set in..."
    ],
    "key": "grip of winter firm bracers",
    "level": 11,
    "mods": [
      "(30-50)% increased Evasion Rating",
      "Adds (3-5) to (6-8) Cold damage to Attacks",
      "+(20-30)% to Cold Resistance",
      "(40-50)% increased Freeze Buildup",
      "(20-30)% increased Magnitude of Chill you inflict"
    ],
    "name": "Grip of Winter",
    "officialIcon": "",
    "pool": "Gloves_dex",
    "requirements": "Requires: Level 11, 16 Dex",
    "runeforging": [
      {
        "cost": "Cost: Grip of Winter Firm Bracers, Verisium x140, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered firm bracers",
        "label": "Runemastered Firm Bracers",
        "level": 38,
        "properties": [
          "Evasion Rating: 63",
          "Runic Ward: 27"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 48 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Grip_of_Winter",
    "sourceUrl": "https://poe2db.tw/us/Grip_of_Winter",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Riveted Mitts",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Armour: 49-61"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "The largest beings on Wraeclast",
      "are not flesh and blood."
    ],
    "key": "treefingers riveted mitts",
    "level": 11,
    "mods": [
      "(30-60)% increased Armour",
      "Adds (6-10) to (12-16) Physical Damage to Attacks",
      "5% reduced Attack Speed",
      "+(15-20) to Strength",
      "(20-30)% increased Stun Buildup",
      "Giant's Blood"
    ],
    "name": "Treefingers",
    "officialIcon": "",
    "pool": "Gloves_str",
    "requirements": "Requires: Level 11, 16 Str",
    "runeforging": [
      {
        "cost": "Cost: Treefingers Riveted Mitts, Verisium x250, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered riveted mitts",
        "label": "Runemastered Riveted Mitts",
        "level": 38,
        "properties": [
          "Armour: 80",
          "Runic Ward: 23"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 48 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Treefingers",
    "sourceUrl": "https://poe2db.tw/us/Treefingers",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Sombre Gloves",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Glove",
      "Energy Shield: 23-27"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "You can be the wick or the wax. Either way, your light goes out and mine goes on."
    ],
    "key": "candlemaker sombre gloves",
    "level": 12,
    "mods": [
      "(50-80)% increased Energy Shield",
      "(20-40)% increased Fire Damage",
      "(10-20)% reduced Cold Damage",
      "+(20-40)% to Fire Resistance",
      "(-20--10)% to Cold Resistance",
      "Flammability Magnitude is doubled"
    ],
    "name": "Candlemaker",
    "officialIcon": "",
    "pool": "Gloves_int",
    "requirements": "Requires: Level 12, 17 Int",
    "runeforging": [
      {
        "cost": "Cost: Candlemaker Sombre Gloves, Verisium x140, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered sombre gloves",
        "label": "Runemastered Sombre Gloves",
        "level": 39,
        "properties": [
          "Energy Shield: 24",
          "Runic Ward: 18"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 39, 49 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Candlemaker",
    "sourceUrl": "https://poe2db.tw/us/Candlemaker",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Layered Gauntlets",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Armour: 38-43",
      "Evasion Rating: 32-37"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Wealth is not to be borne lightly."
    ],
    "key": "aurseize layered gauntlets",
    "level": 16,
    "mods": [
      "(40-60)% increased Armour and Evasion",
      "(40-50)% increased Rarity of Items found",
      "Lose 2% of maximum Life on Kill"
    ],
    "name": "Aurseize",
    "officialIcon": "",
    "pool": "Gloves_str_dex",
    "requirements": "Requires: Level 16, 13 Str, 13 Dex",
    "runeforging": [
      {
        "cost": "Cost: Aurseize Layered Gauntlets, Verisium x140, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered layered gauntlets",
        "label": "Runemastered Layered Gauntlets",
        "level": 38,
        "properties": [
          "Armour: 52",
          "Evasion Rating: 47",
          "Runic Ward: 14"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 27 Str, 27 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Aurseize",
    "sourceUrl": "https://poe2db.tw/us/Aurseize",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Stitched Gloves",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Energy Shield: 18"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "While Doedre lacked Maligaro's sense of style,",
      "she surpassed her master in pure malevolence."
    ],
    "key": "doedre's tenure stitched gloves",
    "level": 16,
    "mods": [
      "+(20-30) to maximum Energy Shield",
      "100% increased Spell Damage",
      "(15-25)% reduced Cast Speed",
      "+(10-15) to Intelligence"
    ],
    "name": "Doedre's Tenure",
    "officialIcon": "",
    "pool": "Gloves_int",
    "requirements": "Requires: Level 16, 22 Int",
    "runeforging": [
      {
        "cost": "Cost: Doedre's Tenure Stitched Gloves, Verisium x150, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered stitched gloves",
        "label": "Runemastered Stitched Gloves",
        "level": 38,
        "properties": [
          "Energy Shield: 30",
          "Runic Ward: 23"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 48 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Doedres_Tenure",
    "sourceUrl": "https://poe2db.tw/us/Doedres_Tenure",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Linen Wraps",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Evasion Rating: 30-37",
      "Energy Shield: 13-16"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"Stitches? Wouldn't that defeat the purpose?\"",
      "- Jeffry, Torturer's Apprentice"
    ],
    "key": "killjoy linen wraps",
    "level": 16,
    "mods": [
      "(30-60)% increased Evasion and Energy Shield",
      "+(30-50) to maximum Life",
      "(20-30)% increased Critical Damage Bonus",
      "Flasks do not recover Life",
      "On-Kill Effects happen twice"
    ],
    "name": "Killjoy",
    "officialIcon": "",
    "pool": "Gloves_dex_int",
    "requirements": "Requires: Level 16, 13 Dex, 13 Int",
    "runeforging": [
      {
        "cost": "Cost: Killjoy Linen Wraps, Verisium x150, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered linen wraps",
        "label": "Runemastered Linen Wraps",
        "level": 38,
        "properties": [
          "Evasion Rating: 37",
          "Energy Shield: 12",
          "Runic Ward: 23"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 27 Dex, 27 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Killjoy",
    "sourceUrl": "https://poe2db.tw/us/Killjoy",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Tempered Mitts",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Armour: 64-74"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Why cling to your sanity? It offers you nothing.",
      "Surrender to me, and I will grant you everything."
    ],
    "key": "lochtonial caress tempered mitts",
    "level": 16,
    "mods": [
      "(10-15)% increased Skill Speed",
      "+(15-25) to Armour",
      "+(40-60) to maximum Life",
      "(10-15)% reduced maximum Mana",
      "Share Charges with Allies in your Presence"
    ],
    "name": "Lochtonial Caress",
    "officialIcon": "",
    "pool": "Gloves_str",
    "requirements": "Requires: Level 16, 22 Str",
    "runeforging": [
      {
        "cost": "Cost: Lochtonial Caress Tempered Mitts, Verisium x150, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered tempered mitts",
        "label": "Runemastered Tempered Mitts",
        "level": 38,
        "properties": [
          "Armour: 95",
          "Runic Ward: 23"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 48 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Lochtonial_Caress",
    "sourceUrl": "https://poe2db.tw/us/Lochtonial_Caress",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Aged Cuffs",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Armour: 35-41",
      "Energy Shield: 13-15"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Captivity breeds creativity."
    ],
    "key": "shackles of the wretched aged cuffs",
    "level": 16,
    "mods": [
      "(30-50)% increased Armour and Energy Shield",
      "You cannot be Chilled for 6 seconds after being Chilled",
      "You cannot be Frozen for 6 seconds after being Frozen",
      "You cannot be Ignited for 6 seconds after being Ignited",
      "You cannot be Shocked for 6 seconds after being Shocked",
      "Curses you inflict are reflected back to you"
    ],
    "name": "Shackles of the Wretched",
    "officialIcon": "",
    "pool": "Gloves_str_int",
    "requirements": "Requires: Level 16, 13 Str, 13 Int",
    "runeforging": [
      {
        "cost": "Cost: Shackles of the Wretched Aged Cuffs, Verisium x150, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered aged cuffs",
        "label": "Runemastered Aged Cuffs",
        "level": 38,
        "properties": [
          "Armour: 44",
          "Energy Shield: 13",
          "Runic Ward: 18"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 27 Str, 27 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Shackles_of_the_Wretched",
    "sourceUrl": "https://poe2db.tw/us/Shackles_of_the_Wretched",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Jewelled Gloves",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Energy Shield: 30-35"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Reality is a puzzle. Ingenuity is power."
    ],
    "key": "kitoko's current jewelled gloves",
    "level": 26,
    "mods": [
      "(30-50)% increased Energy Shield",
      "+(10-20) to Dexterity",
      "(10-15)% reduced Attack and Cast Speed",
      "Lightning damage from Hits Contributes to Electrocution Buildup"
    ],
    "name": "Kitoko's Current",
    "officialIcon": "",
    "pool": "Gloves_int",
    "requirements": "Requires: Level 26, 34 Int",
    "runeforging": [
      {
        "cost": "Cost: Kitoko's Current Jewelled Gloves, Verisium x140, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered jewelled gloves",
        "label": "Runemastered Jewelled Gloves",
        "level": 38,
        "properties": [
          "Energy Shield: 21",
          "Runic Ward: 27"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 48 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Kitokos_Current",
    "sourceUrl": "https://poe2db.tw/us/Kitokos_Current",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Bolstered Mitts",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Armour: 120-150"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "What is worse, the sting of the past, the pain of the present, or the fear of the future?"
    ],
    "key": "dreadfist bolstered mitts",
    "level": 27,
    "mods": [
      "(60-100)% increased Armour",
      "(20-30)% increased Critical Damage Bonus",
      "Critical Hits inflict Impale",
      "Critical Hits cannot Extract Impale",
      "(20-31) to (32-49) Physical Thorns damage"
    ],
    "name": "Dreadfist",
    "officialIcon": "",
    "pool": "Gloves_str",
    "requirements": "Requires: Level 27, 35 Str",
    "runeforging": [
      {
        "cost": "Cost: Dreadfist Bolstered Mitts, Verisium x150, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered bolstered mitts",
        "label": "Runemastered Bolstered Mitts",
        "level": 38,
        "properties": [
          "Armour: 80",
          "Runic Ward: 27"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 48 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Dreadfist",
    "sourceUrl": "https://poe2db.tw/us/Dreadfist",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Sectioned Bracers",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Glove",
      "Evasion Rating: 95-109"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "The devil finds work for idle hands."
    ],
    "key": "idle hands sectioned bracers",
    "level": 28,
    "mods": [
      "(40-60)% increased Evasion Rating",
      "+(60-100) to Accuracy Rating",
      "+(5-10) to Intelligence",
      "25% increased Attack Speed while on Full Mana",
      "You count as on Full Mana while at 90% of maximum Mana or above"
    ],
    "name": "Idle Hands",
    "officialIcon": "",
    "pool": "Gloves_dex",
    "requirements": "Requires: Level 28, 36 Dex",
    "runeforging": [
      {
        "cost": "Cost: Idle Hands Sectioned Bracers, Verisium x150, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered sectioned bracers",
        "label": "Runemastered Sectioned Bracers",
        "level": 38,
        "properties": [
          "Evasion Rating: 76",
          "Runic Ward: 18"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 48 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Idle_Hands",
    "sourceUrl": "https://poe2db.tw/us/Idle_Hands",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Moulded Mitts",
    "baseImplicitMods": [
      "Grants Skill: Level 9 Herald of the Royal Queen"
    ],
    "baseProperties": [
      "Vaal Glove",
      "Armour: 223-267"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "\"The heart is the herald.",
      "It will tell me when it is best to strike.\"",
      "- Atziri, Queen of the Vaal"
    ],
    "key": "atziri's acuity moulded mitts",
    "level": 33,
    "mods": [
      "(150-200)% increased Armour",
      "+(100-150) to maximum Life",
      "Leech 10% of Physical Attack Damage as Life",
      "10% of Physical damage dealt by your Hits causes Blood Loss",
      "Vaal Pact"
    ],
    "name": "Atziri's Acuity",
    "officialIcon": "",
    "pool": "Gloves_str",
    "requirements": "Requires: Level 33, 42 Str",
    "runeforging": [
      {
        "cost": "Cost: Atziri's Acuity Moulded Mitts, Verisium x400, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered moulded mitts",
        "label": "Runemastered Moulded Mitts",
        "level": 55,
        "properties": [
          "Armour: 70",
          "Runic Ward: 61"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 55, 68 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Atziris_Acuity",
    "sourceUrl": "https://poe2db.tw/us/Atziris_Acuity",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Goldcast Cuffs",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Armour: 49",
      "Energy Shield: 15"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The secret was lost with its maker."
    ],
    "key": "blueflame bracers goldcast cuffs",
    "level": 33,
    "mods": [
      "+20 to maximum Energy Shield",
      "+(10-20) to Intelligence",
      "+(5-15)% to Fire Resistance",
      "+(5-15)% to Cold Resistance",
      "100% of Fire Damage Converted to Cold Damage"
    ],
    "name": "Blueflame Bracers",
    "officialIcon": "",
    "pool": "Gloves_str_int",
    "requirements": "Requires: Level 33, 24 Str, 24 Int",
    "runeforging": [
      {
        "cost": "Cost: Blueflame Bracers Goldcast Cuffs, Verisium x260, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered goldcast cuffs",
        "label": "Runemastered Goldcast Cuffs",
        "level": 55,
        "properties": [
          "Armour: 77",
          "Energy Shield: 22",
          "Runic Ward: 37"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 38 Str, 38 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Blueflame_Bracers",
    "sourceUrl": "https://poe2db.tw/us/Blueflame_Bracers",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Doubled Gauntlets",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Glove",
      "Armour: 98-123",
      "Evasion Rating: 86-108"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Anticipation is a gift."
    ],
    "key": "deathblow doubled gauntlets",
    "level": 33,
    "mods": [
      "(100-150)% increased Armour and Evasion",
      "(5-10)% increased Attack Speed",
      "Gain (20-30) Life per enemy killed",
      "Gain (20-30) Mana per enemy killed",
      "Culling Strike"
    ],
    "name": "Deathblow",
    "officialIcon": "",
    "pool": "Gloves_str_dex",
    "requirements": "Requires: Level 33, 24 Str, 24 Dex",
    "runeforging": [
      {
        "cost": "Cost: Deathblow Doubled Gauntlets, Verisium x260, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered doubled gauntlets",
        "label": "Runemastered Doubled Gauntlets",
        "level": 55,
        "properties": [
          "Armour: 61",
          "Evasion Rating: 56",
          "Runic Ward: 24"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 38 Str, 38 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Deathblow",
    "sourceUrl": "https://poe2db.tw/us/Deathblow",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Intricate Gloves",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Glove",
      "Energy Shield: 27"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Xibaqua's treachery was met with divine fury.",
      "One by one, the gods reclaimed their flesh,",
      "until all that remained was a droplet of pure light:",
      "The first Vaal."
    ],
    "key": "demon stitcher intricate gloves",
    "level": 33,
    "mods": [
      "+(40-60) to maximum Energy Shield",
      "+(80-120) to maximum Life",
      "(6-12)% increased Cast Speed",
      "Sacrifice (5-15)% of maximum Life to gain that much Energy Shield when you Cast a Spell"
    ],
    "name": "Demon Stitcher",
    "officialIcon": "",
    "pool": "Gloves_int",
    "requirements": "Requires: Level 33, 42 Int",
    "runeforging": [
      {
        "cost": "Cost: Demon Stitcher Intricate Gloves, Verisium x260, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered intricate gloves",
        "label": "Runemastered Intricate Gloves",
        "level": 55,
        "properties": [
          "Energy Shield: 47",
          "Runic Ward: 24"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 55, 68 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Demon_Stitcher",
    "sourceUrl": "https://poe2db.tw/us/Demon_Stitcher",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Spiral Wraps",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Evasion Rating: 43",
      "Energy Shield: 15"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "She thinks and we act.",
      "She acts and we think.",
      "Fragments of the whole that washes clean the skies."
    ],
    "key": "hand of wisdom and action spiral wraps",
    "level": 33,
    "mods": [
      "+(15-25) to Dexterity",
      "+(15-25) to Intelligence",
      "1% increased Attack Speed per 20 Dexterity",
      "Adds 1 to 10 Lightning Damage to Attacks per 20 Intelligence"
    ],
    "name": "Hand of Wisdom and Action",
    "officialIcon": "",
    "pool": "Gloves_dex_int",
    "requirements": "Requires: Level 33, 24 Dex, 24 Int",
    "runeforging": [
      {
        "cost": "Cost: Hand of Wisdom and Action Spiral Wraps, Verisium x500, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered spiral wraps",
        "label": "Runemastered Spiral Wraps",
        "level": 55,
        "properties": [
          "Evasion Rating: 38",
          "Energy Shield: 12",
          "Runic Ward: 67"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 38 Dex, 38 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Hand_of_Wisdom_and_Action",
    "sourceUrl": "https://poe2db.tw/us/Hand_of_Wisdom_and_Action",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Spined Bracers",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Glove",
      "Evasion Rating: 111-126"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "As the serpent shuns thought,",
      "It shuns fear.",
      "It strikes with the speed of wrath",
      "And the skill of compulsion."
    ],
    "key": "snakebite spined bracers",
    "level": 33,
    "mods": [
      "(40-60)% increased Evasion Rating",
      "+(7-17)% to Chaos Resistance",
      "(6-10) Life Regeneration per second",
      "(20-30)% chance to Poison on Hit",
      "Targets can be affected by +1 of your Poisons at the same time"
    ],
    "name": "Snakebite",
    "officialIcon": "",
    "pool": "Gloves_dex",
    "requirements": "Requires: Level 33, 42 Dex",
    "runeforging": [
      {
        "cost": "Cost: Snakebite Spined Bracers, Verisium x490, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered spined bracers",
        "label": "Runemastered Spined Bracers",
        "level": 38,
        "properties": [
          "Evasion Rating: 72",
          "Runic Ward: 18"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 48 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Snakebite",
    "sourceUrl": "https://poe2db.tw/us/Snakebite",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Fine Bracers",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Evasion Rating: 168-189"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Maligaro operated effortlessly,",
      "with great speed and terrible consequences."
    ],
    "key": "maligaro's virtuosity fine bracers",
    "level": 45,
    "mods": [
      "(60-80)% increased Evasion Rating",
      "(20-30)% increased Critical Hit Chance",
      "5% increased Attack Speed",
      "+(10-20) to Dexterity",
      "Your Critical Hit Chance cannot be Rerolled",
      "Your Critical Damage Bonus is 250%"
    ],
    "name": "Maligaro's Virtuosity",
    "officialIcon": "",
    "pool": "Gloves_dex",
    "requirements": "Requires: Level 45, 56 Dex",
    "runeforging": [
      {
        "cost": "Cost: Maligaro's Virtuosity Fine Bracers, Verisium x1740, Exceptional Verisium x2, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered fine bracers",
        "label": "Runemastered Fine Bracers",
        "level": 45,
        "properties": [
          "Evasion Rating: 52",
          "Runic Ward: 52"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 45, 56 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Maligaros_Virtuosity",
    "sourceUrl": "https://poe2db.tw/us/Maligaros_Virtuosity",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Pauascale Gloves",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Energy Shield: 54-68"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Diamora sings not for hunger, but for longing."
    ],
    "key": "nightscale pauascale gloves",
    "level": 45,
    "mods": [
      "(60-100)% increased Energy Shield",
      "(30-50)% increased Critical Hit Chance",
      "+(10-20) to Intelligence",
      "+(20-30)% to Cold Resistance",
      "150% increased Mana Regeneration Rate if you've dealt a Critical Hit Recently",
      "Cannot Regenerate Mana if you haven't dealt a Critical Hit Recently"
    ],
    "name": "Nightscale",
    "officialIcon": "",
    "pool": "Gloves_int",
    "requirements": "Requires: Level 45, 56 Int",
    "runeforging": [
      {
        "cost": "Cost: Nightscale Pauascale Gloves, Verisium x260, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered pauascale gloves",
        "label": "Runemastered Pauascale Gloves",
        "level": 55,
        "properties": [
          "Energy Shield: 30",
          "Runic Ward: 31"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 55, 68 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Nightscale",
    "sourceUrl": "https://poe2db.tw/us/Nightscale",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Kalguuran Cuffs",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Armour: 192-256",
      "Energy Shield: 57-76"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Only once did Maligaro wonder if he'd gone too far.",
      "His greatest success took three entire legions to capture."
    ],
    "key": "the prisoner's manacles kalguuran cuffs",
    "level": 45,
    "mods": [
      "(200-300)% increased Armour and Energy Shield",
      "+100 to maximum Life",
      "100% increased Attribute Requirements",
      "+(20-40)% to Lightning Resistance",
      "(15-30) Life Regeneration per second",
      "Debuffs you inflict have (20-30)% increased Slow Magnitude",
      "Cannot Immobilise enemies"
    ],
    "name": "The Prisoner's Manacles",
    "officialIcon": "",
    "pool": "Gloves_str_int",
    "requirements": "Requires: Level 45, 64 Str, 64 Int",
    "runeforging": [
      {
        "cost": "Cost: The Prisoner's Manacles Kalguuran Cuffs, Verisium x260, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered verisium cuffs",
        "label": "Runemastered Verisium Cuffs",
        "level": 55,
        "properties": [
          "Armour: 73",
          "Energy Shield: 21",
          "Runic Ward: 12"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 38 Str, 38 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Prisoners_Manacles",
    "sourceUrl": "https://poe2db.tw/us/The_Prisoners_Manacles",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Plate Gauntlets",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Armour: 96-128",
      "Evasion Rating: 87-116"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Unlike the other gods, when he was born from the volcano,",
      "Valako rode the clouds of ash into the thundering sky."
    ],
    "key": "valako's vice plate gauntlets",
    "level": 45,
    "mods": [
      "(50-100)% increased Armour and Evasion",
      "(5-10)% increased Attack Speed",
      "+(20-30) to Strength",
      "+(20-30) to Dexterity",
      "+(30-50)% to Lightning Resistance",
      "100% of Fire damage Converted to Lightning damage"
    ],
    "name": "Valako's Vice",
    "officialIcon": "",
    "pool": "Gloves_str_dex",
    "requirements": "Requires: Level 45, 32 Str, 32 Dex",
    "runeforging": [
      {
        "cost": "Cost: Valako's Vice Plate Gauntlets, Verisium x260, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered plate gauntlets",
        "label": "Runemastered Plate Gauntlets",
        "level": 55,
        "properties": [
          "Armour: 69",
          "Evasion Rating: 63",
          "Runic Ward: 12"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 38 Str, 38 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Valakos_Vice",
    "sourceUrl": "https://poe2db.tw/us/Valakos_Vice",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Burnished Gauntlets",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Armour: 110-124",
      "Evasion Rating: 99-112"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The strongest souls are forged through struggle and defeat."
    ],
    "key": "aerisvane's wings burnished gauntlets",
    "level": 52,
    "mods": [
      "(50-70)% increased Armour and Evasion",
      "(5-10)% increased Attack Speed",
      "+(20-30) to Intelligence",
      "Decimating Strike"
    ],
    "name": "Aerisvane's Wings",
    "officialIcon": "",
    "pool": "Gloves_str_dex",
    "requirements": "Requires: Level 52, 36 Str, 36 Dex",
    "runeforging": [
      {
        "cost": "Cost: Aerisvane's Wings Burnished Gauntlets, Verisium x230, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered burnished gauntlets",
        "label": "Runemastered Burnished Gauntlets",
        "level": 52,
        "properties": [
          "Armour: 36",
          "Evasion Rating: 33",
          "Runic Ward: 58"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 52, 36 Str, 36 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Aerisvanes_Wings",
    "sourceUrl": "https://poe2db.tw/us/Aerisvanes_Wings",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Titan Mitts",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Armour: 330-396"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "\"I like my vassals at sword point,",
      "but my enemies as close as the hilt.\"",
      "- Emperor Chitus"
    ],
    "key": "empire's grasp titan mitts",
    "level": 52,
    "mods": [
      "(150-200)% increased Armour",
      "+(20-30) to Strength",
      "Gain (30-50) Life per enemy killed",
      "(10-20)% increased Global Physical Damage",
      "Knockback direction is reversed"
    ],
    "name": "Empire's Grasp",
    "officialIcon": "",
    "pool": "Gloves_str",
    "requirements": "Requires: Level 52, 64 Str",
    "runeforging": [
      {
        "cost": "Cost: Empire's Grasp Titan Mitts, Verisium x400, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered titan mitts",
        "label": "Runemastered Titan Mitts",
        "level": 65,
        "properties": [
          "Armour: 114",
          "Runic Ward: 49"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 65, 80 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Empires_Grasp",
    "sourceUrl": "https://poe2db.tw/us/Empires_Grasp",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Furtive Wraps",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Evasion Rating: 99-112",
      "Energy Shield: 32-36"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The darkest clouds clashed and coupled,",
      "giving birth to four lightning children of hate."
    ],
    "key": "essentia sanguis furtive wraps",
    "level": 52,
    "mods": [
      "(50-70)% increased Evasion and Energy Shield",
      "Adds 1 to (30-50) Lightning damage to Attacks",
      "+(15-25) to Intelligence",
      "+(25-35)% to Lightning Resistance",
      "Life Leech is Converted to Energy Shield Leech"
    ],
    "name": "Essentia Sanguis",
    "officialIcon": "",
    "pool": "Gloves_dex_int",
    "requirements": "Requires: Level 52, 36 Dex, 36 Int",
    "runeforging": [
      {
        "cost": "Cost: Essentia Sanguis Furtive Wraps, Verisium x1960, Exceptional Verisium x1, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered furtive wraps",
        "label": "Runemastered Furtive Wraps",
        "level": 55,
        "properties": [
          "Evasion Rating: 56",
          "Energy Shield: 17",
          "Runic Ward: 24"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 38 Dex, 38 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Essentia_Sanguis",
    "sourceUrl": "https://poe2db.tw/us/Essentia_Sanguis",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Embroidered Gloves",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Energy Shield: 61-76"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "\"Keep smiling. The deepest cut comes not from insults, but from false praise.\""
    ],
    "key": "leopold's applause embroidered gloves",
    "level": 52,
    "mods": [
      "(60-100)% increased Energy Shield",
      "+(60-100) to maximum Mana",
      "(10-15)% increased Rarity of Items found",
      "Damage Penetrates 10% Elemental Resistances",
      "Your Hits can Penetrate Elemental Resistances down to a minimum of -50%"
    ],
    "name": "Leopold's Applause",
    "officialIcon": "",
    "pool": "Gloves_int",
    "requirements": "Requires: Level 52, 64 Int",
    "runeforging": [
      {
        "cost": "Cost: Leopold's Applause Embroidered Gloves, Verisium x1900, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered embroidered gloves",
        "label": "Runemastered Embroidered Gloves",
        "level": 52,
        "properties": [
          "Energy Shield: 26",
          "Runic Ward: 35"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 52, 64 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Leopolds_Applause",
    "sourceUrl": "https://poe2db.tw/us/Leopolds_Applause",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Moulded Mitts",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Glove",
      "Armour: 356-445"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "The first Karui born on the fringes of the Vaal empire developed a blood fever born of corruption."
    ],
    "key": "hateforge moulded mitts",
    "level": 60,
    "mods": [
      "(300-400)% increased Armour",
      "Gain (3-6) Rage on Hit",
      "Gain a random Charge on reaching Maximum Rage, no more than once every (3-6) seconds",
      "Lose all Rage on reaching Maximum Rage",
      "(-10-10) to Maximum Rage"
    ],
    "name": "Hateforge",
    "officialIcon": "",
    "pool": "Gloves_str",
    "requirements": "Requires: Level 60, 42 Str",
    "runeforging": [
      {
        "cost": "Cost: Hateforge Moulded Mitts, Verisium x400, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered moulded mitts",
        "label": "Runemastered Moulded Mitts",
        "level": 55,
        "properties": [
          "Armour: 70",
          "Runic Ward: 61"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 55, 68 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Hateforge",
    "sourceUrl": "https://poe2db.tw/us/Hateforge",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Ornate Gauntlets",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Armour: 178-223",
      "Evasion Rating: 162-203"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"The mind at the center of the swarm... K'Tash does",
      "the thinking... but it has only one thought... hate.\"",
      "- Rantings of a Templar prisoner, page ninety-four"
    ],
    "key": "death articulated ornate gauntlets",
    "level": 65,
    "mods": [
      "(100-150)% increased Armour and Evasion",
      "(5-10)% increased Attack Speed",
      "+(17-23)% to Chaos Resistance",
      "Lose 5% of maximum Life per second",
      "Regenerate 5 Rage per second",
      "No Inherent loss of Rage"
    ],
    "name": "Death Articulated",
    "officialIcon": "",
    "pool": "Gloves_str_dex",
    "requirements": "Requires: Level 65, 44 Str, 44 Dex",
    "runeforging": [],
    "section": "Armour",
    "slug": "Death_Articulated",
    "sourceUrl": "https://poe2db.tw/us/Death_Articulated",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Engraved Bracers",
    "baseImplicitMods": [
      "Grants Skill: Level 15 Crushing Fear"
    ],
    "baseProperties": [
      "Gloves",
      "Evasion Rating: 444-592"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "If fear doesn't kill you, I will."
    ],
    "key": "horror's flight engraved bracers",
    "level": 65,
    "mods": [
      "(200-300)% increased Evasion Rating",
      "(7-17)% increased Attack Speed",
      "+(13-23) to Dexterity",
      "Adds (19-23) to (31-37) Chaos Damage to Attacks",
      "Gain 1 Fear Incarnate when you Cull a target"
    ],
    "name": "Horror's Flight",
    "officialIcon": "",
    "pool": "Gloves_dex",
    "requirements": "Requires: Level 65, 80 Dex",
    "runeforging": [],
    "section": "Armour",
    "slug": "Horrors_Flight",
    "sourceUrl": "https://poe2db.tw/us/Horrors_Flight",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Grand Manchettes",
    "baseImplicitMods": [],
    "baseProperties": [
      "Gloves",
      "Armour: 150-180",
      "Evasion Rating: 135-162",
      "Energy Shield: 43-51"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "The greatest warrior of his era fought with honour."
    ],
    "key": "sine aequo grand manchettes",
    "level": 65,
    "mods": [
      "(10-15)% increased Skill Speed",
      "(150-200)% increased Armour, Evasion and Energy Shield",
      "Immobilise enemies at 50% buildup instead of 100%",
      "(30-50)% increased Damage against Immobilised Enemies"
    ],
    "name": "Sine Aequo",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 65, 32 Str, 32 Dex, 32 Int",
    "runeforging": [
      {
        "cost": "Cost: Sine Aequo Grand Manchettes, Verisium x640, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered grand manchettes",
        "label": "Runemastered Grand Manchettes",
        "level": 65,
        "properties": [
          "Armour: 30",
          "Evasion Rating: 27",
          "Energy Shield: 8",
          "Runic Ward: 70"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 32 Str, 32 Dex, 32 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Sine_Aequo",
    "sourceUrl": "https://poe2db.tw/us/Sine_Aequo",
    "type": "Gloves",
    "verification": "page"
  },
  {
    "base": "Tethering Bands",
    "baseImplicitMods": [
      "Grants Skill: Level 15 Untether"
    ],
    "baseProperties": [
      "Gloves"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The Master's tether wraps itself around the soul.",
      "Should he be denied, he will unmercifully set it free."
    ],
    "key": "the master's reach tethering bands",
    "level": 65,
    "mods": [
      "(200-300)% increased Armour and Energy Shield",
      "+(75-125) to maximum Life",
      "+(15-25) to Intelligence",
      "Reveal Weaknesses against Rare and Unique enemies",
      "(80-100)% of damage taken from enemies with an Open Weakness Recouped as Life",
      "Eat a Soul when you Hit an enemy with an Open Weakness",
      "unique reveal weakness art variation [1]"
    ],
    "name": "The Master's Reach",
    "officialIcon": "",
    "pool": "Gloves_str_int",
    "requirements": "Requires: Level 65, 55 Str, 55 Int",
    "runeforging": [],
    "section": "Armour",
    "slug": "The_Masters_Reach",
    "sourceUrl": "https://poe2db.tw/us/The_Masters_Reach",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Utility Wraps",
    "baseImplicitMods": [
      "Grants Skill: Level 15 Crackling Palm"
    ],
    "baseProperties": [
      "Gloves",
      "Evasion Rating: 82-171",
      "Energy Shield: 25-53"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The roar of the heavens",
      "Strikes more than fear",
      "Into the hearts of Man"
    ],
    "key": "thunderfist utility wraps",
    "level": 65,
    "mods": [
      "(1-111)% increased Evasion and Energy Shield",
      "(1-11)% increased Attack Speed",
      "+(1-33)% to Lightning Resistance",
      "Adds 1 to (77-111) Lightning Damage to Unarmed Melee Hits",
      "+(0.1-1.1)% to Unarmed Melee Attack Critical Hit Chance",
      "use thunderfist art variation [1]"
    ],
    "name": "Thunderfist",
    "officialIcon": "",
    "pool": "Gloves_dex_int",
    "requirements": "Requires: Level 65, 44 Dex, 44 Int",
    "runeforging": [
      {
        "cost": "Cost: Thunderfist Utility Wraps, Verisium x2750, Exceptional Verisium x1, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered utility wraps",
        "label": "Runemastered Utility Wraps",
        "level": 65,
        "properties": [
          "Evasion Rating: 49",
          "Energy Shield: 15",
          "Runic Ward: 56"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 44 Dex, 44 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Thunderfist",
    "sourceUrl": "https://poe2db.tw/us/Thunderfist",
    "type": "Gloves",
    "verification": "embedded"
  },
  {
    "base": "Twig Circlet",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Helmet",
      "Energy Shield: 19"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Lift it lightly, don it slow.",
      "The spikes point out and in, you know."
    ],
    "key": "crown of thorns twig circlet",
    "level": 1,
    "mods": [
      "+(100-150) to maximum Energy Shield",
      "Lose 5 Life when you use a Skill",
      "(3-5) to (6-10) Physical Thorns damage",
      "Pain Attunement"
    ],
    "name": "Crown of Thorns",
    "officialIcon": "",
    "pool": "Helmets_int",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Crown of Thorns Twig Circlet, Verisium x190, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered twig circlet",
        "label": "Runemastered Twig Circlet",
        "level": 38,
        "properties": [
          "Energy Shield: 48",
          "Runic Ward: 36"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Crown_of_Thorns",
    "sourceUrl": "https://poe2db.tw/us/Crown_of_Thorns",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Rusted Greathelm",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Helmet",
      "Armour: 49"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "The younger brother waded into battle, shrugging off blows."
    ],
    "key": "horns of bynden rusted greathelm",
    "level": 1,
    "mods": [
      "+20 to Armour",
      "(5-15)% increased Rarity of Items found",
      "+(20-30) to Strength",
      "Every Rage also grants 1% increased Armour",
      "Gain 1 Rage on Melee Hit"
    ],
    "name": "Horns of Bynden",
    "officialIcon": "",
    "pool": "Helmets_str",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Horns of Bynden Rusted Greathelm, Verisium x160, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered rusted greathelm",
        "label": "Runemastered Rusted Greathelm",
        "level": 38,
        "properties": [
          "Armour: 360",
          "Runic Ward: 36"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Horns_of_Bynden",
    "sourceUrl": "https://poe2db.tw/us/Horns_of_Bynden",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Shabby Hood",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Evasion Rating: 39-49"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Beyond madness lies inspiration."
    ],
    "key": "innsmouth shabby hood",
    "level": 1,
    "mods": [
      "+(20-30) to Evasion Rating",
      "25% reduced maximum Mana",
      "+(10-20)% to Cold Resistance",
      "+(13-19)% to Chaos Resistance",
      "100% increased Mana Regeneration Rate"
    ],
    "name": "Innsmouth",
    "officialIcon": "",
    "pool": "Helmets_dex",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Innsmouth Shabby Hood, Verisium x180, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered shabby hood",
        "label": "Runemastered Shabby Hood",
        "level": 38,
        "properties": [
          "Runic Ward: 201"
        ],
        "propertyStyles": [
          0
        ],
        "requirements": "Requires: Level 38, 54 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Innsmouth",
    "sourceUrl": "https://poe2db.tw/us/Innsmouth",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Rusted Greathelm",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Helmet",
      "Armour: 49"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "The older brother retained calm in the midst of fury."
    ],
    "key": "wings of caelyn rusted greathelm",
    "level": 1,
    "mods": [
      "+20 to Armour",
      "(5-15)% increased Rarity of Items found",
      "+(20-30) to Dexterity",
      "Gain 1 Rage on Melee Hit",
      "Every Rage also grants 1% increased Stun Threshold"
    ],
    "name": "Wings of Caelyn",
    "officialIcon": "",
    "pool": "Helmets_str",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Wings of Caelyn Rusted Greathelm, Verisium x170, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered rusted greathelm",
        "label": "Runemastered Rusted Greathelm",
        "level": 38,
        "properties": [
          "Armour: 360",
          "Runic Ward: 36"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Wings_of_Caelyn",
    "sourceUrl": "https://poe2db.tw/us/Wings_of_Caelyn",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Iron Crown",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Armour: 26",
      "Energy Shield: 13"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "An endless river of bodies lie in the wake of ambition."
    ],
    "key": "crown of the victor iron crown",
    "level": 5,
    "mods": [
      "(10-15)% increased Rarity of Items found",
      "+1 to Level of all Skills",
      "Gain 10 Life per enemy killed",
      "Gain 10 Mana per enemy killed"
    ],
    "name": "Crown of the Victor",
    "officialIcon": "",
    "pool": "Helmets_str_int",
    "requirements": "Requires: Level 5, 7 Str, 7 Int",
    "runeforging": [
      {
        "cost": "Cost: Crown of the Victor Iron Crown, Verisium x330, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered iron crown",
        "label": "Runemastered Iron Crown",
        "level": 38,
        "properties": [
          "Armour: 72",
          "Energy Shield: 21",
          "Runic Ward: 72"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 31 Str, 31 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Crown_of_the_Victor",
    "sourceUrl": "https://poe2db.tw/us/Crown_of_the_Victor",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Brimmed Helm",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Helmet",
      "Armour: 26",
      "Evasion Rating: 20"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "In the end, even heroes fade away."
    ],
    "key": "greymake brimmed helm",
    "level": 5,
    "mods": [
      "+(30-50) to Strength",
      "+(30-50) to Dexterity",
      "+(30-50) to Intelligence",
      "-1 to all Attributes per Level",
      "Has 4 Augment Sockets (Hidden)"
    ],
    "name": "Greymake",
    "officialIcon": "",
    "pool": "Helmets_str_dex",
    "requirements": "Requires: Level 5, 7 Str, 7 Dex",
    "runeforging": [
      {
        "cost": "Cost: Greymake Brimmed Helm, Verisium x180, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered brimmed helm",
        "label": "Runemastered Brimmed Helm",
        "level": 38,
        "properties": [
          "Armour: 44",
          "Evasion Rating: 39",
          "Runic Ward: 109"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 31 Str, 31 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Greymake",
    "sourceUrl": "https://poe2db.tw/us/Greymake",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Hewn Mask",
    "baseImplicitMods": [
      "Grants Skill: Level 2 Wildwood's Gifts"
    ],
    "baseProperties": [
      "Helmet",
      "Evasion Rating: 20",
      "Energy Shield: 13"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The roots burrow deeper, unveiling the wood's bounty..."
    ],
    "key": "the hollow mask hewn mask",
    "level": 5,
    "mods": [
      "+(60-80) to maximum Life",
      "15% additional Physical Damage Reduction",
      "-10% to all Elemental Resistances",
      "+13% to Chaos Resistance",
      "Remnants you create affect Allies in your Presence as well as you when collected",
      "(80-100)% increased Reservation Efficiency of Remnant Skills"
    ],
    "name": "The Hollow Mask",
    "officialIcon": "",
    "pool": "Helmets_dex_int",
    "requirements": "Requires: Level 5, 7 Dex, 7 Int",
    "runeforging": [
      {
        "cost": "Cost: The Hollow Mask Hewn Mask, Verisium x330, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered hewn mask",
        "label": "Runemastered Hewn Mask",
        "level": 38,
        "properties": [
          "Evasion Rating: 30",
          "Energy Shield: 10",
          "Runic Ward: 54"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 31 Dex, 31 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Hollow_Mask",
    "sourceUrl": "https://poe2db.tw/us/The_Hollow_Mask",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Horned Crown",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Armour: 59-78",
      "Energy Shield: 24-32"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Heavy is the head."
    ],
    "key": "bronzebeard horned crown",
    "level": 10,
    "mods": [
      "10% reduced Movement Speed",
      "(50-100)% increased Armour and Energy Shield",
      "+100 to maximum Life",
      "(35-50)% reduced Effect of Chill on you",
      "(35-50)% reduced Magnitude of Ignite on you",
      "(35-50)% reduced effect of Shock on you"
    ],
    "name": "Bronzebeard",
    "officialIcon": "",
    "pool": "Helmets_str_int",
    "requirements": "Requires: Level 10, 10 Str, 10 Int",
    "runeforging": [
      {
        "cost": "Cost: Bronzebeard Horned Crown, Verisium x180, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered horned crown",
        "label": "Runemastered Horned Crown",
        "level": 38,
        "properties": [
          "Armour: 83",
          "Energy Shield: 25",
          "Runic Ward: 54"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 31 Str, 31 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Bronzebeard",
    "sourceUrl": "https://poe2db.tw/us/Bronzebeard",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Felt Cap",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Evasion Rating: 88-108"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "No metal slips as easily through the fingers as gold."
    ],
    "key": "goldrim felt cap",
    "level": 10,
    "mods": [
      "+(30-50) to Evasion Rating",
      "10% increased Rarity of Items found",
      "+(25-35)% to all Elemental Resistances"
    ],
    "name": "Goldrim",
    "officialIcon": "",
    "pool": "Helmets_dex",
    "requirements": "Requires: Level 10, 17 Dex",
    "runeforging": [
      {
        "cost": "Cost: Goldrim Felt Cap, Verisium x320, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered felt cap",
        "label": "Runemastered Felt Cap",
        "level": 38,
        "properties": [
          "Evasion Rating: 134",
          "Runic Ward: 54"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Goldrim",
    "sourceUrl": "https://poe2db.tw/us/Goldrim",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Face Mask",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Evasion Rating: 52-57",
      "Energy Shield: 16"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "A terror of ancient times, his identity",
      "remains lost... but his power does not."
    ],
    "key": "mask of the sanguimancer face mask",
    "level": 10,
    "mods": [
      "+(20-25) to Evasion Rating",
      "+(10-15) to maximum Energy Shield",
      "(20-40)% increased Critical Hit Chance for Spells",
      "+(10-20) to Strength",
      "+(10-20) to Intelligence",
      "Blood Magic"
    ],
    "name": "Mask of the Sanguimancer",
    "officialIcon": "",
    "pool": "Helmets_dex_int",
    "requirements": "Requires: Level 10, 10 Dex, 10 Int",
    "runeforging": [
      {
        "cost": "Cost: Mask of the Sanguimancer Face Mask, Verisium x170, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered face mask",
        "label": "Runemastered Face Mask",
        "level": 38,
        "properties": [
          "Evasion Rating: 118",
          "Energy Shield: 40",
          "Runic Ward: 18"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 31 Dex, 31 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Mask_of_the_Sanguimancer",
    "sourceUrl": "https://poe2db.tw/us/Mask_of_the_Sanguimancer",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Wicker Tiara",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Energy Shield: 46-58"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "The spirit hungers for the flesh."
    ],
    "key": "the devouring diadem wicker tiara",
    "level": 10,
    "mods": [
      "(60-100)% increased Energy Shield",
      "+(40-60) to maximum Life",
      "+(10-20) to Intelligence",
      "+(13-19)% to Chaos Resistance",
      "Every 3 seconds, Consume a nearby Corpse to Recover 20% of maximum Life"
    ],
    "name": "The Devouring Diadem",
    "officialIcon": "",
    "pool": "Helmets_int",
    "requirements": "Requires: Level 10, 17 Int",
    "runeforging": [
      {
        "cost": "Cost: The Devouring Diadem Wicker Tiara, Verisium x180, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered wicker tiara",
        "label": "Runemastered Wicker Tiara",
        "level": 38,
        "properties": [
          "Energy Shield: 45",
          "Runic Ward: 45"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Devouring_Diadem",
    "sourceUrl": "https://poe2db.tw/us/The_Devouring_Diadem",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Guarded Helm",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Helmet",
      "Armour: 42-82",
      "Evasion Rating: 34-64"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Sometimes patching up your",
      "equipment gets out of hand."
    ],
    "key": "erian's cobble guarded helm",
    "level": 11,
    "mods": [
      "+(0-40) to Armour",
      "+(0-30) to Evasion Rating",
      "+(0-20) to maximum Energy Shield",
      "+(0-60) to Accuracy Rating",
      "+(0-30) to maximum Life",
      "+(0-20) to maximum Mana",
      "(0-20)% increased Rarity of Items found",
      "(0-30)% increased Critical Hit Chance",
      "+(0-10) to Strength",
      "+(0-10) to Dexterity",
      "+(0-10) to Intelligence",
      "+(0-10)% to Fire Resistance",
      "+(0-10)% to Cold Resistance",
      "+(0-10)% to Lightning Resistance",
      "(0-6) Life Regeneration per second"
    ],
    "name": "Erian's Cobble",
    "officialIcon": "",
    "pool": "Helmets_str_dex",
    "requirements": "Requires: Level 11, 11 Str, 11 Dex",
    "runeforging": [
      {
        "cost": "Cost: Erian's Cobble Guarded Helm, Verisium x180, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered guarded helm",
        "label": "Runemastered Guarded Helm",
        "level": 38,
        "properties": [
          "Armour: 275",
          "Evasion Rating: 247",
          "Runic Ward: 36"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 31 Str, 31 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Erians_Cobble",
    "sourceUrl": "https://poe2db.tw/us/Erians_Cobble",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Soldier Greathelm",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Helmet",
      "Armour: 120-160"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Centuries of servitude, a day",
      "of glory, an eternity of death."
    ],
    "key": "ezomyte peak soldier greathelm",
    "level": 12,
    "mods": [
      "(50-100)% increased Armour",
      "+(50-80) to maximum Life",
      "(3-6) Life Regeneration per second",
      "(10-20)% increased Area of Effect",
      "Unwavering Stance"
    ],
    "name": "Ezomyte Peak",
    "officialIcon": "",
    "pool": "Helmets_str",
    "requirements": "Requires: Level 12, 19 Str",
    "runeforging": [
      {
        "cost": "Cost: Ezomyte Peak Soldier Greathelm, Verisium x180, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered soldier greathelm",
        "label": "Runemastered Soldier Greathelm",
        "level": 38,
        "properties": [
          "Armour: 140",
          "Runic Ward: 54"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Ezomyte_Peak",
    "sourceUrl": "https://poe2db.tw/us/Ezomyte_Peak",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Wrapped Greathelm",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Armour: 149-178"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "The beasts we fear the most",
      "are the ones who dwell in total darkness."
    ],
    "key": "black sun crest wrapped greathelm",
    "level": 16,
    "mods": [
      "(50-80)% increased Armour",
      "(5-15)% increased Strength",
      "(5-15)% increased Dexterity",
      "(5-15)% increased Intelligence",
      "20% reduced Light Radius"
    ],
    "name": "Black Sun Crest",
    "officialIcon": "",
    "pool": "Helmets_str",
    "requirements": "Requires: Level 16, 25 Str",
    "runeforging": [
      {
        "cost": "Cost: Black Sun Crest Wrapped Greathelm, Verisium x180, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered wrapped greathelm",
        "label": "Runemastered Wrapped Greathelm",
        "level": 38,
        "properties": [
          "Armour: 170",
          "Runic Ward: 27"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Black_Sun_Crest",
    "sourceUrl": "https://poe2db.tw/us/Black_Sun_Crest",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Cultist Crown",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Armour: 81-108",
      "Energy Shield: 29-38"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "A lightless world",
      "a silent reign",
      "two sightless eyes",
      "feed on your pain."
    ],
    "key": "crown of the pale king cultist crown",
    "level": 16,
    "mods": [
      "(50-100)% increased Armour and Energy Shield",
      "+(40-80) to maximum Life",
      "10% increased Rarity of Items found",
      "(10-15) to (20-25) Physical Thorns damage",
      "Thorns can Retaliate against all Hits"
    ],
    "name": "Crown of the Pale King",
    "officialIcon": "",
    "pool": "Helmets_str_int",
    "requirements": "Requires: Level 16, 15 Str, 15 Int",
    "runeforging": [
      {
        "cost": "Cost: Crown of the Pale King Cultist Crown, Verisium x310, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered cultist crown",
        "label": "Runemastered Cultist Crown",
        "level": 38,
        "properties": [
          "Armour: 165",
          "Energy Shield: 50",
          "Runic Ward: 49"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 31 Str, 31 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Crown_of_the_Pale_King",
    "sourceUrl": "https://poe2db.tw/us/Crown_of_the_Pale_King",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Visored Helm",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Armour: 86-97",
      "Evasion Rating: 74-83"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Let the rider's aim be true."
    ],
    "key": "ironride visored helm",
    "level": 16,
    "mods": [
      "(60-80)% increased Armour and Evasion",
      "+(30-50) to maximum Life",
      "+(30-50) to maximum Mana",
      "+(10-15)% to Lightning Resistance",
      "You have no Accuracy Penalty at Distance"
    ],
    "name": "Ironride",
    "officialIcon": "",
    "pool": "Helmets_str_dex",
    "requirements": "Requires: Level 16, 15 Str, 15 Dex",
    "runeforging": [
      {
        "cost": "Cost: Ironride Visored Helm, Verisium x320, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered visored helm",
        "label": "Runemastered Visored Helm",
        "level": 38,
        "properties": [
          "Armour: 77",
          "Evasion Rating: 69",
          "Runic Ward: 54"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 31 Str, 31 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Ironride",
    "sourceUrl": "https://poe2db.tw/us/Ironride",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Hooded Mask",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Evasion Rating: 46",
      "Energy Shield: 19"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "For none of us are as cruel as all of us."
    ],
    "key": "leer cast hooded mask",
    "level": 16,
    "mods": [
      "+(30-50) to maximum Life",
      "+(30-50) to maximum Mana",
      "Allies in your Presence deal 50% increased Damage",
      "+(10-20) to Dexterity",
      "25% reduced Damage"
    ],
    "name": "Leer Cast",
    "officialIcon": "",
    "pool": "Helmets_dex_int",
    "requirements": "Requires: Level 16, 15 Dex, 15 Int",
    "runeforging": [
      {
        "cost": "Cost: Leer Cast Hooded Mask, Verisium x170, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered hooded mask",
        "label": "Runemastered Hooded Mask",
        "level": 38,
        "properties": [
          "Evasion Rating: 69",
          "Energy Shield: 23",
          "Runic Ward: 54"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 31 Dex, 31 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Leer_Cast",
    "sourceUrl": "https://poe2db.tw/us/Leer_Cast",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Lace Hood",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Evasion Rating: 151-168"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "No man burns alone."
    ],
    "key": "radiant grief lace hood",
    "level": 16,
    "mods": [
      "(80-100)% increased Evasion Rating",
      "+(15-25)% to Fire Resistance",
      "30% increased Light Radius",
      "Enemies in your Presence are Ignited as though dealt 200 Base Fire Damage"
    ],
    "name": "Radiant Grief",
    "officialIcon": "",
    "pool": "Helmets_dex",
    "requirements": "Requires: Level 16, 25 Dex",
    "runeforging": [
      {
        "cost": "Cost: Radiant Grief Lace Hood, Verisium x590, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "(30-50)% increased Ignite Magnitude"
        ],
        "key": "runeforged lace hood",
        "label": "Runeforged Lace Hood",
        "level": 38,
        "properties": [
          "Evasion Rating: 90",
          "Runic Ward: 72"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Armour",
    "slug": "Radiant_Grief",
    "sourceUrl": "https://poe2db.tw/us/Radiant_Grief",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Beaded Circlet",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Energy Shield: 53-63"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Tale-women do not fight as dekharas.",
      "They command a power all their own."
    ],
    "key": "visage of ayah beaded circlet",
    "level": 16,
    "mods": [
      "(50-80)% increased Energy Shield",
      "(10-15)% increased Rarity of Items found",
      "(20-30)% increased Critical Hit Chance",
      "+(10-20)% to Lightning Resistance",
      "Eldritch Battery"
    ],
    "name": "Visage of Ayah",
    "officialIcon": "",
    "pool": "Helmets_int",
    "requirements": "Requires: Level 16, 25 Int",
    "runeforging": [
      {
        "cost": "Cost: Visage of Ayah Beaded Circlet, Verisium x180, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered beaded circlet",
        "label": "Runemastered Beaded Circlet",
        "level": 38,
        "properties": [
          "Energy Shield: 24",
          "Runic Ward: 72"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Visage_of_Ayah",
    "sourceUrl": "https://poe2db.tw/us/Visage_of_Ayah",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Cowled Helm",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Helmet",
      "Armour: 200-240",
      "Evasion Rating: 175-210"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "He never spoke a word. His opponents imagined",
      "their own personal mockeries, most cruel."
    ],
    "key": "the smiling knight cowled helm",
    "level": 26,
    "mods": [
      "+(50-100) to Accuracy Rating",
      "(150-200)% increased Armour and Evasion",
      "(15-25)% increased Critical Hit Chance",
      "Aggravate Bleeding on targets you Critically Hit with Attacks"
    ],
    "name": "The Smiling Knight",
    "officialIcon": "",
    "pool": "Helmets_str_dex",
    "requirements": "Requires: Level 26, 22 Str, 22 Dex",
    "runeforging": [
      {
        "cost": "Cost: The Smiling Knight Cowled Helm, Verisium x530, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered cowled helm",
        "label": "Runemastered Cowled Helm",
        "level": 40,
        "properties": [
          "Armour: 104",
          "Evasion Rating: 93",
          "Runic Ward: 19"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 32 Str, 32 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Smiling_Knight",
    "sourceUrl": "https://poe2db.tw/us/The_Smiling_Knight",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Spired Greathelm",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Armour: 149"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "We may fight, and we may die, but in these",
      "moments of blood and battle, we truly live."
    ],
    "key": "thrillsteel spired greathelm",
    "level": 27,
    "mods": [
      "Onslaught"
    ],
    "name": "Thrillsteel",
    "officialIcon": "",
    "pool": "Helmets_str",
    "requirements": "Requires: Level 27, 40 Str",
    "runeforging": [
      {
        "cost": "Cost: Thrillsteel Spired Greathelm, Verisium x1110, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered spired greathelm",
        "label": "Runemastered Spired Greathelm",
        "level": 40,
        "properties": [
          "Armour: 115",
          "Runic Ward: 85"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 40, 58 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Thrillsteel",
    "sourceUrl": "https://poe2db.tw/us/Thrillsteel",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Veiled Mask",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Evasion Rating: 150-188",
      "Energy Shield: 54-68"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Remaining unseen, the Dishonoured Assassin struck",
      "only in the depths of the harshest sandstorms."
    ],
    "key": "atsak's sight veiled mask",
    "level": 28,
    "mods": [
      "(100-150)% increased Evasion and Energy Shield",
      "(30-40)% increased Critical Hit Chance",
      "+(10-20) to Dexterity",
      "+(10-20) to Intelligence",
      "Critical Hits Poison the enemy"
    ],
    "name": "Atsak's Sight",
    "officialIcon": "",
    "pool": "Helmets_dex_int",
    "requirements": "Requires: Level 28, 23 Dex, 23 Int",
    "runeforging": [
      {
        "cost": "Cost: Atsak's Sight Veiled Mask, Verisium x180, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered veiled mask",
        "label": "Runemastered Veiled Mask",
        "level": 40,
        "properties": [
          "Evasion Rating: 78",
          "Energy Shield: 26",
          "Runic Ward: 57"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 32 Dex, 32 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Atsaks_Sight",
    "sourceUrl": "https://poe2db.tw/us/Atsaks_Sight",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Martyr Crown",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Armour: 85",
      "Energy Shield: 27"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The seeds of greatness are planted in darkness,",
      "Watered by suffering,",
      "Tended by desperation,",
      "And bloom steel flowers of victory."
    ],
    "key": "veil of the night martyr crown",
    "level": 28,
    "mods": [
      "50% increased maximum Life",
      "+(10-20) to all Attributes",
      "40% reduced Light Radius",
      "You have no Elemental Resistances"
    ],
    "name": "Veil of the Night",
    "officialIcon": "",
    "pool": "Helmets_str_int",
    "requirements": "Requires: Level 28, 23 Str, 23 Int",
    "runeforging": [
      {
        "cost": "Cost: Veil of the Night Martyr Crown, Verisium x830, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered martyr crown",
        "label": "Runemastered Martyr Crown",
        "level": 40,
        "properties": [
          "Armour: 66",
          "Energy Shield: 20",
          "Runic Ward: 81"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 32 Str, 32 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Veil_of_the_Night",
    "sourceUrl": "https://poe2db.tw/us/Veil_of_the_Night",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Heavy Crown",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Armour: 97",
      "Energy Shield: 30"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Pain brings clarity."
    ],
    "key": "cornathaum heavy crown",
    "level": 33,
    "mods": [
      "(10-20)% increased Rarity of Items found",
      "+(40-50) to Intelligence",
      "30% increased Light Radius",
      "5% increased Experience gain"
    ],
    "name": "Cornathaum",
    "officialIcon": "",
    "pool": "Helmets_str_int",
    "requirements": "Requires: Level 33, 27 Str, 27 Int",
    "runeforging": [
      {
        "cost": "Cost: Cornathaum Heavy Crown, Verisium x440, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered heavy crown",
        "label": "Runemastered Heavy Crown",
        "level": 55,
        "properties": [
          "Armour: 77",
          "Energy Shield: 22",
          "Runic Ward: 122"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 43 Str, 43 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Cornathaum",
    "sourceUrl": "https://poe2db.tw/us/Cornathaum",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Elite Greathelm",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Helmet",
      "Armour: 283-354"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "May you never hear it toll."
    ],
    "key": "deidbell elite greathelm",
    "level": 33,
    "mods": [
      "(60-100)% increased Armour",
      "+(10-20) to Strength",
      "(20-30)% increased Warcry Speed",
      "Warcries Explode Corpses dealing 10% of their Life as Physical Damage",
      "Warcry Skills have (20-30)% increased Area of Effect"
    ],
    "name": "Deidbell",
    "officialIcon": "",
    "pool": "Helmets_str",
    "requirements": "Requires: Level 33, 48 Str",
    "runeforging": [
      {
        "cost": "Cost: Deidbell Elite Greathelm, Verisium x330, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered elite greathelm",
        "label": "Runemastered Elite Greathelm",
        "level": 55,
        "properties": [
          "Armour: 209",
          "Runic Ward: 61"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 55, 78 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Deidbell",
    "sourceUrl": "https://poe2db.tw/us/Deidbell",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Hunter Hood",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Helmet",
      "Evasion Rating: 237-284"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Ancient worshippers of the Greatwolf were overtaken",
      "by a ravenous hunger for all things mystical."
    ],
    "key": "elevore hunter hood",
    "level": 33,
    "mods": [
      "(50-80)% increased Evasion Rating",
      "+(20-30) to Dexterity",
      "Charms gain 1 charge per Second",
      "+(1-2) Charm Slots"
    ],
    "name": "Elevore",
    "officialIcon": "",
    "pool": "Helmets_dex",
    "requirements": "Requires: Level 33, 48 Dex",
    "runeforging": [
      {
        "cost": "Cost: Elevore Hunter Hood, Verisium x330, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered hunter hood",
        "label": "Runemastered Hunter Hood",
        "level": 40,
        "properties": [
          "Evasion Rating: 73",
          "Runic Ward: 75"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 40, 58 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Elevore",
    "sourceUrl": "https://poe2db.tw/us/Elevore",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Feathered Tiara",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Helmet",
      "Energy Shield: 119-140"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "From the flesh of the gods, Xibaqua was born.",
      "From the carnage of Xibaqua, we were born.",
      "It is our duty to return to the gods what was once theirs."
    ],
    "key": "mask of the stitched demon feathered tiara",
    "level": 33,
    "mods": [
      "(120-160)% increased Energy Shield",
      "+(17-23)% to Chaos Resistance",
      "Cannot have Energy Shield",
      "Regenerate 0.05 Life per second per Maximum Energy Shield"
    ],
    "name": "Mask of the Stitched Demon",
    "officialIcon": "",
    "pool": "Helmets_int",
    "requirements": "Requires: Level 33, 48 Int",
    "runeforging": [
      {
        "cost": "Cost: Mask of the Stitched Demon Feathered Tiara, Verisium x330, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered feathered tiara",
        "label": "Runemastered Feathered Tiara",
        "level": 55,
        "properties": [
          "Energy Shield: 32",
          "Runic Ward: 98"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 55, 78 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Mask_of_the_Stitched_Demon",
    "sourceUrl": "https://poe2db.tw/us/Mask_of_the_Stitched_Demon",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Tribal Mask",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Helmet",
      "Evasion Rating: 174-218",
      "Energy Shield: 60-75"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"A queen should be seen, admired, but never touched.\"",
      "- Atziri, Queen of the Vaal"
    ],
    "key": "the vertex tribal mask",
    "level": 33,
    "mods": [
      "Has no Attribute Requirements",
      "(100-150)% increased Evasion and Energy Shield",
      "(20-30)% increased Critical Hit Chance",
      "+(13-17)% to Chaos Resistance",
      "Skill Gems have no Attribute Requirements"
    ],
    "name": "The Vertex",
    "officialIcon": "",
    "pool": "Helmets_dex_int",
    "requirements": "Requires: Level 33",
    "runeforging": [
      {
        "cost": "Cost: The Vertex Tribal Mask, Verisium x590, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered tribal mask",
        "label": "Runemastered Tribal Mask",
        "level": 52,
        "properties": [
          "Evasion Rating: 105",
          "Energy Shield: 33",
          "Runic Ward: 47"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 52, 41 Dex, 41 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Vertex",
    "sourceUrl": "https://poe2db.tw/us/The_Vertex",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Shielded Helm",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Helmet",
      "Armour: 155-194",
      "Evasion Rating: 139-174"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Familiarity breeds contempt."
    ],
    "key": "the vile knight shielded helm",
    "level": 33,
    "mods": [
      "(60-100)% increased Armour and Evasion",
      "+(75-125) to Accuracy Rating",
      "(10-15) Life Regeneration per second",
      "Deal 4% increased Damage with Hits to Rare or Unique Enemies for each second they've ever been in your Presence, up to a maximum of 200%"
    ],
    "name": "The Vile Knight",
    "officialIcon": "",
    "pool": "Helmets_str_dex",
    "requirements": "Requires: Level 33, 27 Str, 27 Dex",
    "runeforging": [
      {
        "cost": "Cost: The Vile Knight Shielded Helm, Verisium x450, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered shielded helm",
        "label": "Runemastered Shielded Helm",
        "level": 55,
        "properties": [
          "Armour: 107",
          "Evasion Rating: 97",
          "Runic Ward: 122"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 43 Str, 43 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Vile_Knight",
    "sourceUrl": "https://poe2db.tw/us/The_Vile_Knight",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Warrior Greathelm",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Helmet",
      "Armour: 191"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Only the High Priests could enact the sacrifices,",
      "but all who witnessed shared in exultation."
    ],
    "key": "corona of the red sun warrior greathelm",
    "level": 36,
    "mods": [
      "+(100-150) to Accuracy Rating",
      "+(60-80) to maximum Life",
      "+(20-25)% to Fire Resistance",
      "25% increased Light Radius",
      "Leeching Life from your Hits causes Allies in your Presence to also Leech the same amount of Life"
    ],
    "name": "Corona of the Red Sun",
    "officialIcon": "",
    "pool": "Helmets_str",
    "requirements": "Requires: Level 36, 52 Str",
    "runeforging": [
      {
        "cost": "Cost: Corona of the Red Sun Warrior Greathelm, Verisium x320, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered warrior greathelm",
        "label": "Runemastered Warrior Greathelm",
        "level": 55,
        "properties": [
          "Armour: 111",
          "Runic Ward: 147"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 55, 78 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Corona_of_the_Red_Sun",
    "sourceUrl": "https://poe2db.tw/us/Corona_of_the_Red_Sun",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Viper Cap",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Helmet",
      "Evasion Rating: 179"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "\"Be vigilant, Nezahul! When the serpent is cornered, does it give up?",
      "No... It waits. Then it bites the first hand it finds.",
      "The danger of numbers is all in your mind!\"",
      "- Viper Napuatzi, instructing Royal Commander Nezahul"
    ],
    "key": "constricting command viper cap",
    "level": 38,
    "mods": [
      "+(80-120) to maximum Life",
      "+(10-15) to all Attributes",
      "(8-12) Life Regeneration per second",
      "Require (2-4) fewer enemies to be Surrounded"
    ],
    "name": "Constricting Command",
    "officialIcon": "",
    "pool": "Helmets_dex",
    "requirements": "Requires: Level 38, 54 Dex",
    "runeforging": [
      {
        "cost": "Cost: Constricting Command Viper Cap, Verisium x3710, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered viper cap",
        "label": "Runemastered Viper Cap",
        "level": 55,
        "properties": [
          "Evasion Rating: 139",
          "Runic Ward: 110"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 55, 78 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Constricting_Command",
    "sourceUrl": "https://poe2db.tw/us/Constricting_Command",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Gold Circlet",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Helmet",
      "Energy Shield: 62"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "They screamed her name in adulation as they gave",
      "their very lives. She looked on with impatience."
    ],
    "key": "atziri's disdain gold circlet",
    "level": 40,
    "mods": [
      "+(60-100) to maximum Mana",
      "(10-20)% increased Rarity of Items found",
      "Gain (10-15)% of maximum Life as Extra maximum Energy Shield",
      "10% of Damage taken bypasses Energy Shield"
    ],
    "name": "Atziri's Disdain",
    "officialIcon": "",
    "pool": "Helmets_int",
    "requirements": "Requires: Level 40, 58 Int",
    "runeforging": [
      {
        "cost": "Cost: Atziri's Disdain Gold Circlet, Verisium x3860, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered gold circlet",
        "label": "Runemastered Gold Circlet",
        "level": 55,
        "properties": [
          "Energy Shield: 16",
          "Runic Ward: 196"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 55, 78 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Atziris_Disdain",
    "sourceUrl": "https://poe2db.tw/us/Atziris_Disdain",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Closed Helm",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Armour: 384-512",
      "Evasion Rating: 345-460"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "A moment of calm before the battle can end the war."
    ],
    "key": "assailum closed helm",
    "level": 45,
    "mods": [
      "(200-300)% increased Armour and Evasion",
      "+(200-400) to Accuracy Rating",
      "(30-50)% increased Critical Hit Chance",
      "Skills have a (100-150)% longer Perfect Timing window"
    ],
    "name": "Assailum",
    "officialIcon": "",
    "pool": "Helmets_str_dex",
    "requirements": "Requires: Level 45, 36 Str, 36 Dex",
    "runeforging": [],
    "section": "Armour",
    "slug": "Assailum",
    "sourceUrl": "https://poe2db.tw/us/Assailum",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Vermeil Circlet",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Energy Shield: 136-163"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Turning, gazing, blinking,",
      "behold the eyes of void.",
      "Burning, razing, drinking,",
      "your mind is destroyed."
    ],
    "key": "crown of eyes vermeil circlet",
    "level": 45,
    "mods": [
      "(100-140)% increased Energy Shield",
      "+(150-200) to Accuracy Rating",
      "+(10-15) to all Attributes",
      "-10% to Fire Resistance",
      "Increases and Reductions to Spell damage also apply to Attacks"
    ],
    "name": "Crown of Eyes",
    "officialIcon": "",
    "pool": "Helmets_int",
    "requirements": "Requires: Level 45, 64 Int",
    "runeforging": [
      {
        "cost": "Cost: Crown of Eyes Vermeil Circlet, Verisium x840, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered vermeil circlet",
        "label": "Runemastered Vermeil Circlet",
        "level": 55,
        "properties": [
          "Energy Shield: 67",
          "Runic Ward: 37"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 55, 78 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Crown_of_Eyes",
    "sourceUrl": "https://poe2db.tw/us/Crown_of_Eyes",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Corsair Cap",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Evasion Rating: 357-420"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Brinerot pirates live in a perpetual blaze of glory,",
      "pushing their luck right to the end."
    ],
    "key": "the black insignia corsair cap",
    "level": 45,
    "mods": [
      "(70-100)% increased Evasion Rating",
      "(10-20)% increased Rarity of Items found",
      "+(15-25)% to Lightning Resistance",
      "Gain Tailwind on Critical Hit, no more than once per second",
      "Lose all Tailwind when Hit"
    ],
    "name": "The Black Insignia",
    "officialIcon": "",
    "pool": "Helmets_dex",
    "requirements": "Requires: Level 45, 64 Dex",
    "runeforging": [
      {
        "cost": "Cost: The Black Insignia Corsair Cap, Verisium x3760, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered corsair cap",
        "label": "Runemastered Corsair Cap",
        "level": 55,
        "properties": [
          "Evasion Rating: 202",
          "Runic Ward: 37"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 55, 78 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Black_Insignia",
    "sourceUrl": "https://poe2db.tw/us/The_Black_Insignia",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Solid Mask",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Evasion Rating: 161-184",
      "Energy Shield: 52-59"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"The ice seared his naked feet",
      "As the lightning stilled his heart,",
      "But it was the flames upon his lover's face",
      "That roused him to vengeance.\"",
      "- From 'The Three Dragons' by Victario of Sarn"
    ],
    "key": "the three dragons solid mask",
    "level": 45,
    "mods": [
      "(40-60)% increased Evasion and Energy Shield",
      "+(10-20)% to all Elemental Resistances",
      "Fire Damage from Hits Contributes to Shock Chance instead of Flammability and Ignite Magnitudes",
      "Cold Damage from Hits Contributes to Flammability and Ignite Magnitudes instead of Chill Magnitude or Freeze Buildup",
      "Lightning Damage from Hits Contributes to Freeze Buildup instead of Shock Chance"
    ],
    "name": "The Three Dragons",
    "officialIcon": "",
    "pool": "Helmets_dex_int",
    "requirements": "Requires: Level 45, 36 Dex, 36 Int",
    "runeforging": [
      {
        "cost": "Cost: The Three Dragons Solid Mask, Verisium x590, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered solid mask",
        "label": "Runemastered Solid Mask",
        "level": 55,
        "properties": [
          "Evasion Rating: 125",
          "Energy Shield: 39",
          "Runic Ward: 37"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 43 Dex, 43 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Three_Dragons",
    "sourceUrl": "https://poe2db.tw/us/The_Three_Dragons",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Jade Tiara",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Energy Shield: 73"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "\"The sharper the pain, the sharper the mind.",
      "A curious paradox.\"",
      "- Shavronne of Umbra"
    ],
    "key": "scold's bridle jade tiara",
    "level": 50,
    "mods": [
      "+(75-150) to maximum Energy Shield",
      "(60-100)% increased Spell Damage",
      "+(80-100) to maximum Mana",
      "15% reduced Cast Speed",
      "Take (25-100)% of Mana Costs you pay for Skills as Physical Damage"
    ],
    "name": "Scold's Bridle",
    "officialIcon": "",
    "pool": "Helmets_int",
    "requirements": "Requires: Level 50, 71 Int",
    "runeforging": [
      {
        "cost": "Cost: Scold's Bridle Jade Tiara, Verisium x620, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered jade tiara",
        "label": "Runemastered Jade Tiara",
        "level": 65,
        "properties": [
          "Energy Shield: 45",
          "Runic Ward: 141"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 65, 91 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Scolds_Bridle",
    "sourceUrl": "https://poe2db.tw/us/Scolds_Bridle",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Leatherbound Hood",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Helmet",
      "Evasion Rating: 462-693"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "There was no hero made out of Starkonja's death,",
      "but merely a long sleep made eternal."
    ],
    "key": "starkonja's head leatherbound hood",
    "level": 50,
    "mods": [
      "(100-200)% increased Evasion Rating",
      "(15-25)% increased Critical Hit Chance",
      "+(30-40) to Dexterity",
      "150% increased Global Evasion Rating when on Low Life",
      "15% of Damage from Hits is taken from your Damageable Companion's Life before you"
    ],
    "name": "Starkonja's Head",
    "officialIcon": "",
    "pool": "Helmets_dex",
    "requirements": "Requires: Level 50, 71 Dex",
    "runeforging": [
      {
        "cost": "Cost: Starkonja's Head Leatherbound Hood, Verisium x2760, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered leatherbound hood",
        "label": "Runemastered Leatherbound Hood",
        "level": 65,
        "properties": [
          "Evasion Rating: 266",
          "Runic Ward: 28"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 65, 91 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Starkonjas_Head",
    "sourceUrl": "https://poe2db.tw/us/Starkonjas_Head",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Fierce Greathelm",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Armour: 468-572"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "An eye for an eye makes the whole world dead."
    ],
    "key": "blood price fierce greathelm",
    "level": 51,
    "mods": [
      "(80-120)% increased Armour",
      "(10-15) Life Regeneration per second",
      "+(100-150) to Stun Threshold",
      "(30-60)% increased Presence Area of Effect",
      "Enemies in your Presence have at least 10% of Life Reserved"
    ],
    "name": "Blood Price",
    "officialIcon": "",
    "pool": "Helmets_str",
    "requirements": "Requires: Level 51, 73 Str",
    "runeforging": [
      {
        "cost": "Cost: Blood Price Fierce Greathelm, Verisium x170, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered fierce greathelm",
        "label": "Runemastered Fierce Greathelm",
        "level": 55,
        "properties": [
          "Armour: 334",
          "Runic Ward: 24"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 55, 78 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Blood_Price",
    "sourceUrl": "https://poe2db.tw/us/Blood_Price",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Tribal Mask",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Helmet",
      "Evasion Rating: 87",
      "Energy Shield: 30"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "Man retains sanity and strives toward civilisation",
      "only under the blessed veil of ignorance."
    ],
    "key": "glimpse of chaos tribal mask",
    "level": 52,
    "mods": [
      "Can be modified while Corrupted",
      "+(50-150) to maximum Life",
      "+(50-150) to maximum Mana",
      "(-30-30)% to Fire Resistance",
      "(-30-30)% to Cold Resistance",
      "(-30-30)% to Lightning Resistance",
      "Chaos Resistance is zero"
    ],
    "name": "Glimpse of Chaos",
    "officialIcon": "",
    "pool": "Helmets_dex_int",
    "requirements": "Requires: Level 52, 27 Dex, 27 Int",
    "runeforging": [
      {
        "cost": "Cost: Glimpse of Chaos Tribal Mask, Verisium x590, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered tribal mask",
        "label": "Runemastered Tribal Mask",
        "level": 52,
        "properties": [
          "Evasion Rating: 105",
          "Energy Shield: 33",
          "Runic Ward: 47"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 52, 41 Dex, 41 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Glimpse_of_Chaos",
    "sourceUrl": "https://poe2db.tw/us/Glimpse_of_Chaos",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Velvet Cap",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Evasion Rating: 360-408"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Give of your heated passions.",
      "Give of your cold resolve.",
      "You will be repaid."
    ],
    "key": "heatshiver velvet cap",
    "level": 52,
    "mods": [
      "(50-70)% increased Evasion Rating",
      "+(60-100) to maximum Mana",
      "+(20-30)% to Fire Resistance",
      "+(20-30)% to Cold Resistance",
      "Gain 1% of Cold damage as Extra Fire damage per 1% Chill Magnitude on enemy"
    ],
    "name": "Heatshiver",
    "officialIcon": "",
    "pool": "Helmets_dex",
    "requirements": "Requires: Level 52, 74 Dex",
    "runeforging": [
      {
        "cost": "Cost: Heatshiver Velvet Cap, Verisium x3860, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered velvet cap",
        "label": "Runemastered Velvet Cap",
        "level": 65,
        "properties": [
          "Evasion Rating: 222",
          "Runic Ward: 70"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 65, 91 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Heatshiver",
    "sourceUrl": "https://poe2db.tw/us/Heatshiver",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Chain Tiara",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Energy Shield: 47"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "A fell wind brings death."
    ],
    "key": "sandstorm visage chain tiara",
    "level": 52,
    "mods": [
      "+(80-120) to maximum Energy Shield",
      "+(20-30) to Dexterity",
      "Enemies in your Presence are Blinded",
      "Every second, inflicts Critical Weakness on enemies in your Presence for (15-20) seconds"
    ],
    "name": "Sandstorm Visage",
    "officialIcon": "",
    "pool": "Helmets_int",
    "requirements": "Requires: Level 52, 38 Int",
    "runeforging": [
      {
        "cost": "Cost: Sandstorm Visage Chain Tiara, Verisium x1450, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered chain tiara",
        "label": "Runemastered Chain Tiara",
        "level": 40,
        "properties": [
          "Energy Shield: 62"
        ],
        "propertyStyles": [
          0
        ],
        "requirements": "Requires: Level 40, 58 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Sandstorm_Visage",
    "sourceUrl": "https://poe2db.tw/us/Sandstorm_Visage",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Decorated Helm",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Armour: 1022-1314",
      "Evasion Rating: 924-1188"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"What lies beneath your feet?!\"",
      "\"Sacred ground, watered with tears of blood!\""
    ],
    "key": "the bringer of rain decorated helm",
    "level": 52,
    "mods": [
      "(600-800)% increased Armour and Evasion",
      "+(200-300) to Accuracy Rating",
      "100% increased Critical Hit Chance",
      "(30-60) Life Regeneration per second",
      "Can't use Body Armour",
      "You can wield Two-Handed Axes, Maces and Swords in one hand",
      "This item gains bonuses from Socketed Items as though it was a Body Armour",
      "Has 4 Augment Sockets (Hidden)"
    ],
    "name": "The Bringer of Rain",
    "officialIcon": "",
    "pool": "Helmets_str_dex",
    "requirements": "Requires: Level 52, 41 Str, 41 Dex",
    "runeforging": [
      {
        "cost": "Cost: The Bringer of Rain Decorated Helm, Verisium x4890, Exceptional Verisium x10, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered decorated helm",
        "label": "Runemastered Decorated Helm",
        "level": 65,
        "properties": [
          "Armour: 161",
          "Evasion Rating: 146",
          "Runic Ward: 70"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 50 Str, 50 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Bringer_of_Rain",
    "sourceUrl": "https://poe2db.tw/us/The_Bringer_of_Rain",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Covert Hood",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Evasion Rating: 360-411"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "The end always comes sooner than we think."
    ],
    "key": "myris uxor covert hood",
    "level": 56,
    "mods": [
      "(40-60)% increased Evasion Rating",
      "+(100-150) to Accuracy Rating",
      "+(40-60) to maximum Mana",
      "100% increased Culling Strike Threshold"
    ],
    "name": "Myris Uxor",
    "officialIcon": "",
    "pool": "Helmets_dex",
    "requirements": "Requires: Level 56, 79 Dex",
    "runeforging": [
      {
        "cost": "Cost: Myris Uxor Covert Hood, Verisium x600, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered covert hood",
        "label": "Runemastered Covert Hood",
        "level": 56,
        "properties": [
          "Evasion Rating: 129",
          "Runic Ward: 124"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 56, 79 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Myris_Uxor",
    "sourceUrl": "https://poe2db.tw/us/Myris_Uxor",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Spiritbone Crown",
    "baseImplicitMods": [],
    "baseProperties": [
      "Kalguuran Helmet",
      "Armour: 435-563",
      "Energy Shield: 126-163"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The priests of the Kalguur keep faith through numbers",
      "and calculation, not unprovable promises."
    ],
    "key": "keeper of the arc spiritbone crown",
    "level": 62,
    "mods": [
      "(240-340)% increased Armour and Energy Shield",
      "(15-25) Life Regeneration per second",
      "(15-25)% increased Mana Regeneration Rate",
      "Alternating every 5 seconds:Take 40% less Damage from HitsTake 40% less Damage over time"
    ],
    "name": "Keeper of the Arc",
    "officialIcon": "",
    "pool": "Helmets_str_int",
    "requirements": "Requires: Level 62, 36 Str, 36 Int",
    "runeforging": [
      {
        "cost": "Cost: Keeper of the Arc Spiritbone Crown, Exceptional Verisium x25, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "Every 5 seconds, gain a Verisium Infusion"
        ],
        "key": "runemastered spiritbone crown",
        "label": "Runemastered Spiritbone Crown",
        "level": 65,
        "properties": [
          "Armour: 116",
          "Energy Shield: 32",
          "Runic Ward: 113"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 50 Str, 50 Int",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Keeper of the Arc Spiritbone Crown, Exceptional Verisium x25, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "Every 5 seconds, gain a Verisium Infusion"
        ],
        "key": "runemastered spiritbone crown",
        "label": "Runemastered Spiritbone Crown",
        "level": 65,
        "properties": [
          "Armour: 116",
          "Energy Shield: 32",
          "Runic Ward: 113"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 50 Str, 50 Int",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Keeper of the Arc Spiritbone Crown, Exceptional Verisium x25, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "Every 5 seconds, gain a Verisium Infusion"
        ],
        "key": "runemastered spiritbone crown",
        "label": "Runemastered Spiritbone Crown",
        "level": 65,
        "properties": [
          "Armour: 116",
          "Energy Shield: 32",
          "Runic Ward: 113"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 50 Str, 50 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Keeper_of_the_Arc",
    "sourceUrl": "https://poe2db.tw/us/Keeper_of_the_Arc",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Armoured Cap",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Evasion Rating: 533-592"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Nature respects the strong",
      "And paints the snow red",
      "With the blood of the weak"
    ],
    "key": "alpha's howl armoured cap",
    "level": 65,
    "mods": [
      "(80-100)% increased Evasion Rating",
      "+100 to Spirit",
      "+(50-75)% to Cold Resistance",
      "Presence Radius is doubled"
    ],
    "name": "Alpha's Howl",
    "officialIcon": "",
    "pool": "Helmets_dex",
    "requirements": "Requires: Level 65, 91 Dex",
    "runeforging": [
      {
        "cost": "Cost: Alpha's Howl Armoured Cap, Verisium x3710, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered armoured cap",
        "label": "Runemastered Armoured Cap",
        "level": 65,
        "properties": [
          "Evasion Rating: 178",
          "Runic Ward: 113"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 65, 91 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Alphas_Howl",
    "sourceUrl": "https://poe2db.tw/us/Alphas_Howl",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Ancient Visor",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Armour: 448-627",
      "Evasion Rating: 408-571"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"Focus. Hone your mind. Your lessers rely on the tangible.",
      "Shed your senses, and raze them from this physical realm.\""
    ],
    "key": "decree of acuity ancient visor",
    "level": 65,
    "mods": [
      "(150-250)% increased Armour and Evasion",
      "+(25-35) to Dexterity",
      "Gain (15-30)% of Evasion Rating as extra Armour",
      "You are Blind",
      "The Effect of Blind on you is reversed"
    ],
    "name": "Decree of Acuity",
    "officialIcon": "",
    "pool": "Helmets_str_dex",
    "requirements": "Requires: Level 65, 59 Str, 59 Dex",
    "runeforging": [
      {
        "cost": "Cost: Decree of Acuity Ancient Visor, Verisium x300, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered ancient visor",
        "label": "Runemastered Ancient Visor",
        "level": 65,
        "properties": [
          "Armour: 168",
          "Evasion Rating: 153",
          "Runic Ward: 59"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 59 Str, 59 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Decree_of_Acuity",
    "sourceUrl": "https://poe2db.tw/us/Decree_of_Acuity",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Magus Tiara",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Energy Shield: 180-216"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Where the body's limits begin,",
      "the mind's limits end."
    ],
    "key": "indigon magus tiara",
    "level": 65,
    "mods": [
      "(100-140)% increased Energy Shield",
      "+(80-120) to maximum Mana",
      "(5-10)% increased Cost of Skills for each 200 total Mana Spent Recently",
      "(10-15)% increased Spell damage for each 200 total Mana you have Spent Recently",
      "Mana Recovery other than Regeneration cannot Recover Mana"
    ],
    "name": "Indigon",
    "officialIcon": "",
    "pool": "Helmets_int",
    "requirements": "Requires: Level 65, 91 Int",
    "runeforging": [
      {
        "cost": "Cost: Indigon Magus Tiara, Verisium x1180, Exceptional Verisium x1, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered magus tiara",
        "label": "Runemastered Magus Tiara",
        "level": 65,
        "properties": [
          "Energy Shield: 68",
          "Runic Ward: 70"
        ],
        "propertyStyles": [
          0,
          0
        ],
        "requirements": "Requires: Level 65, 91 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Indigon",
    "sourceUrl": "https://poe2db.tw/us/Indigon",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Death Mask",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Evasion Rating: 408-489",
      "Energy Shield: 125-150"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "The sky tore asunder, black cleaving upon blue",
      "The end of life, of Time, with no escape",
      "But they found a fragment, a void, a haven",
      "And there they waited, as it all began again",
      "Dark will, dark knowledge, enemies of Fate",
      "They know your mind, because they remember"
    ],
    "key": "mind of the council death mask",
    "level": 65,
    "mods": [
      "(150-200)% increased Evasion and Energy Shield",
      "+(60-90) to maximum Mana",
      "+(20-30)% to Lightning Resistance",
      "Attacks cost an additional 6% of your maximum Mana",
      "Attacks have Added maximum Lightning Damage equal to (6-9)% of maximum Mana"
    ],
    "name": "Mind of the Council",
    "officialIcon": "",
    "pool": "Helmets_dex_int",
    "requirements": "Requires: Level 65, 50 Dex, 50 Int",
    "runeforging": [
      {
        "cost": "Cost: Mind of the Council Death Mask, Verisium x3370, Exceptional Verisium x3, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runemastered death mask",
        "label": "Runemastered Death Mask",
        "level": 65,
        "properties": [
          "Evasion Rating: 130",
          "Energy Shield: 40",
          "Runic Ward: 70"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 50 Dex, 50 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Mind_of_the_Council",
    "sourceUrl": "https://poe2db.tw/us/Mind_of_the_Council",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Grand Visage",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Armour: 298-357",
      "Evasion Rating: 273-327",
      "Energy Shield: 83-99"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "One warrior alone survived to face the Arbiter."
    ],
    "key": "solus ipse grand visage",
    "level": 65,
    "mods": [
      "(150-200)% increased Armour, Evasion and Energy Shield",
      "+(60-100) to maximum Mana",
      "25% increased Light Radius",
      "Equipment and Skill Gems have 25% increased Attribute Requirements",
      "You can Socket 2 additional copies of each Lineage Support Gem, in different Skills"
    ],
    "name": "Solus Ipse",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 65, 36 Str, 36 Dex, 36 Int",
    "runeforging": [
      {
        "cost": "Cost: Solus Ipse Grand Visage, Verisium x310, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runemastered grand visage",
        "label": "Runemastered Grand Visage",
        "level": 65,
        "properties": [
          "Armour: 77",
          "Evasion Rating: 71",
          "Energy Shield: 22",
          "Runic Ward: 99"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 36 Str, 36 Dex, 36 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Solus_Ipse",
    "sourceUrl": "https://poe2db.tw/us/Solus_Ipse",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Tenebrous Crown",
    "baseImplicitMods": [],
    "baseProperties": [
      "Helmet",
      "Armour: 448-537",
      "Energy Shield: 125-150"
    ],
    "basePropertyStyles": [
      null,
      0,
      0
    ],
    "flavourText": [
      "\"Your covetous hands bring the Unlight",
      "ever closer to consuming your realm.\""
    ],
    "key": "vestige of darkness tenebrous crown",
    "level": 65,
    "mods": [
      "(150-200)% increased Armour and Energy Shield",
      "+(20-30) to Strength and Intelligence",
      "Physical damage from Hits Contributes to Chill Magnitude and Freeze Buildup",
      "Enemies in your Presence are Blinded",
      "The Bodach haunts your Presence",
      "the wendigo manifestation delay randomisation ms [500]",
      "the wendigo manifests +% faster per enemy power in your presence [5]"
    ],
    "name": "Vestige of Darkness",
    "officialIcon": "",
    "pool": "Helmets_str_int",
    "requirements": "Requires: Level 65, 59 Str, 59 Int",
    "runeforging": [
      {
        "cost": "Cost: Vestige of Darkness Tenebrous Crown, Verisium x300, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runemastered tenebrous crown",
        "label": "Runemastered Tenebrous Crown",
        "level": 65,
        "properties": [
          "Armour: 143",
          "Energy Shield: 40",
          "Runic Ward: 56"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 59 Str, 59 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Vestige_of_Darkness",
    "sourceUrl": "https://poe2db.tw/us/Vestige_of_Darkness",
    "type": "Helmets",
    "verification": "embedded"
  },
  {
    "base": "Time-Lost Diamond",
    "baseImplicitMods": [
      "local jewel effect base radius [1000]"
    ],
    "baseProperties": [
      "Jewel"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "After the fires, in the depths of the Winter of the World, all life in the Vastiri banded together. Whether serpent, hyena, human, or golem, hated enemies clasped hand to claw, built refuge, and fought side by side against the Abyssals. Thus, the Third Pact was born."
    ],
    "key": "against the darkness time-lost diamond",
    "level": 20,
    "mods": [
      "[2 Random Jewel Modifiers]"
    ],
    "name": "Against the Darkness",
    "officialIcon": "",
    "pool": "Time-Lost_Diamond",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Against_the_Darkness",
    "sourceUrl": "https://poe2db.tw/us/Against_the_Darkness",
    "type": "Jewels",
    "verification": "embedded"
  },
  {
    "base": "Diamond",
    "baseImplicitMods": [],
    "baseProperties": [
      "Jewel"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Our world was dying, but we chose to survive.",
      "We broke free from the chains within."
    ],
    "key": "controlled metamorphosis diamond",
    "level": 20,
    "mods": [
      "Only affects Passives in Medium-Large Ring",
      "Passives in Radius can be Allocated without being connected to your tree",
      "(-20--5)% to all Elemental Resistances"
    ],
    "name": "Controlled Metamorphosis",
    "officialIcon": "",
    "pool": "Diamond",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Controlled_Metamorphosis",
    "sourceUrl": "https://poe2db.tw/us/Controlled_Metamorphosis",
    "type": "Jewels",
    "verification": "embedded"
  },
  {
    "base": "Diamond",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Jewel"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"Never mind the pain, it's only... making room. Unrelated fact,",
      "a person can live a normal life with just one kidney. Or just one",
      "lung. You never know what Vaal technology will cost you...\""
    ],
    "key": "flesh crucible diamond",
    "level": 20,
    "mods": [
      "Random 1 Keystone Passive Skill [1,33]",
      "(20-10)% less [random stat]"
    ],
    "name": "Flesh Crucible",
    "officialIcon": "",
    "pool": "Diamond",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Flesh_Crucible",
    "sourceUrl": "https://poe2db.tw/us/Flesh_Crucible",
    "type": "Jewels",
    "verification": "embedded"
  },
  {
    "base": "Diamond",
    "baseImplicitMods": [],
    "baseProperties": [
      "Jewel"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "They clawed their way up from the agonising depths of nonexistence,",
      "breathing deep with joy the exquisite light of meaning."
    ],
    "key": "from nothing diamond",
    "level": 20,
    "mods": [
      "Passives in Radius of Passive Skill can be Allocatedwithout being connected to your tree"
    ],
    "name": "From Nothing",
    "officialIcon": "",
    "pool": "Diamond",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "From_Nothing",
    "sourceUrl": "https://poe2db.tw/us/From_Nothing",
    "type": "Jewels",
    "verification": "embedded"
  },
  {
    "base": "Ruby",
    "baseImplicitMods": [],
    "baseProperties": [
      "Jewel"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "A wellspring of vitality bubbling from within."
    ],
    "key": "grand spectrum ruby",
    "level": 20,
    "mods": [
      "2% increased Maximum Life per socketed Grand Spectrum",
      "number of stackable unique jewels [1]"
    ],
    "name": "Grand Spectrum",
    "officialIcon": "",
    "pool": "Ruby",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Grand_Spectrum",
    "sourceUrl": "https://poe2db.tw/us/Grand_Spectrum",
    "type": "Jewels",
    "verification": "page"
  },
  {
    "base": "Emerald",
    "baseImplicitMods": [],
    "baseProperties": [
      "Jewel"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "An indomitable force of control."
    ],
    "key": "grand spectrum emerald",
    "level": 20,
    "mods": [
      "2% increased Spirit per socketed Grand Spectrum",
      "number of stackable unique jewels [1]"
    ],
    "name": "Grand Spectrum",
    "officialIcon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1VuaXF1ZXMvR3JhbmRTcGVjdHJ1bV9FbWVyYWxkIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/687a109210/GrandSpectrum_Emerald.png",
    "pool": "Emerald",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Grand_Spectrum",
    "sourceUrl": "https://poe2db.tw/us/Grand_Spectrum",
    "type": "Jewels",
    "verification": "page"
  },
  {
    "base": "Sapphire",
    "baseImplicitMods": [],
    "baseProperties": [
      "Jewel"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Skin like steel tempered by bright flames."
    ],
    "key": "grand spectrum sapphire",
    "level": 20,
    "mods": [
      "+6% to all Elemental Resistances per socketed Grand Spectrum",
      "number of stackable unique jewels [1]"
    ],
    "name": "Grand Spectrum",
    "officialIcon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1VuaXF1ZXMvR3JhbmRTcGVjdHJ1bV9TYXBwaGlyZSIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/514d06d40e/GrandSpectrum_Sapphire.png",
    "pool": "Sapphire",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Grand_Spectrum",
    "sourceUrl": "https://poe2db.tw/us/Grand_Spectrum",
    "type": "Jewels",
    "verification": "page"
  },
  {
    "base": "Diamond",
    "baseImplicitMods": [],
    "baseProperties": [
      "Jewel"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Countless souls scream in agonising harmony,forever sinking under the weight of the newly dead."
    ],
    "key": "heart of the well diamond",
    "level": 20,
    "mods": [
      "[Custom Desecrated prefix]",
      "[Custom Desecrated prefix]",
      "[Custom Desecrated suffix]",
      "[Custom Desecrated suffix]"
    ],
    "name": "Heart of the Well",
    "officialIcon": "",
    "pool": "Diamond",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Heart_of_the_Well",
    "sourceUrl": "https://poe2db.tw/us/Heart_of_the_Well",
    "type": "Jewels",
    "verification": "page"
  },
  {
    "base": "Timeless Jewel",
    "baseImplicitMods": [],
    "baseProperties": [
      "Kalguuran Jewel"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "They believed themselves courageous and selfless,",
      "but that bravery became the doom at their door."
    ],
    "key": "heroic tragedy timeless jewel",
    "level": 20,
    "mods": [
      "Remembrancing (100-8000) songworthy deeds by the line of VoranaPassives in radius are Conquered by the Kalguur",
      "Historic",
      "local unique jewel break timeless jewel calculators [0]"
    ],
    "name": "Heroic Tragedy",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Heroic_Tragedy",
    "sourceUrl": "https://poe2db.tw/us/Heroic_Tragedy",
    "type": "Jewels",
    "verification": "embedded"
  },
  {
    "base": "Diamond",
    "baseImplicitMods": [],
    "baseProperties": [
      "Jewel"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "If you're going to act like you're better",
      "than everyone else, make sure you are."
    ],
    "key": "megalomaniac diamond",
    "level": 20,
    "mods": [
      "Allocates Passive Skill",
      "Allocates Passive Skill",
      "Allocates Passive Skill"
    ],
    "name": "Megalomaniac",
    "officialIcon": "",
    "pool": "Diamond",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Megalomaniac",
    "sourceUrl": "https://poe2db.tw/us/Megalomaniac",
    "type": "Jewels",
    "verification": "embedded"
  },
  {
    "base": "Diamond",
    "baseImplicitMods": [],
    "baseProperties": [
      "Jewel"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Entropy can be reversed."
    ],
    "key": "prism of belief diamond",
    "level": 20,
    "mods": [
      "+(1-3) to Level of all Specific Skill Skills"
    ],
    "name": "Prism of Belief",
    "officialIcon": "",
    "pool": "Diamond",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Prism_of_Belief",
    "sourceUrl": "https://poe2db.tw/us/Prism_of_Belief",
    "type": "Jewels",
    "verification": "embedded"
  },
  {
    "base": "Ruby",
    "baseImplicitMods": [],
    "baseProperties": [
      "Jewel"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"Try on another life. See how it fits. You'll",
      "find that your one life is utterly inadequate.\"",
      "- He of Many Names and Many Faces"
    ],
    "key": "split personality ruby",
    "level": 20,
    "mods": [
      "Can Allocate Passive Skills from the Sorceress's starting point"
    ],
    "name": "Split Personality",
    "officialIcon": "",
    "pool": "Ruby",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Split_Personality",
    "sourceUrl": "https://poe2db.tw/us/Split_Personality",
    "type": "Jewels",
    "verification": "embedded"
  },
  {
    "base": "Diamond",
    "baseImplicitMods": [],
    "baseProperties": [
      "Vaal Jewel"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "At their height, the Vaal glittered under the sun.",
      "A decade, a century, an aeon of prosperity...",
      "now nothing more than a passing wonder."
    ],
    "key": "the adorned diamond",
    "level": 20,
    "mods": [
      "(0-150)% increased Effect of Jewel Socket Passive Skillscontaining Corrupted Magic Jewels"
    ],
    "name": "The Adorned",
    "officialIcon": "",
    "pool": "Diamond",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Adorned",
    "sourceUrl": "https://poe2db.tw/us/The_Adorned",
    "type": "Jewels",
    "verification": "embedded"
  },
  {
    "base": "Timeless Jewel",
    "baseImplicitMods": [],
    "baseProperties": [
      "Jewel"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "They believed themselves driven by necessity,",
      "but that desperation made them monstrous."
    ],
    "key": "undying hate timeless jewel",
    "level": 20,
    "mods": [
      "Glorifying the defilement of (79-30977) souls in tribute to AmanamuPassives in radius are Conquered by the AbyssalsDesecration makes this item unstable",
      "Historic",
      "local unique jewel break timeless jewel calculators [0]"
    ],
    "name": "Undying Hate",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Undying_Hate",
    "sourceUrl": "https://poe2db.tw/us/Undying_Hate",
    "type": "Jewels",
    "verification": "embedded"
  },
  {
    "base": "Sapphire",
    "baseImplicitMods": [],
    "baseProperties": [
      "Jewel"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Only a madman would ignore a god's instructions."
    ],
    "key": "voices sapphire",
    "level": 20,
    "mods": [
      "Allocates 2 Sinister Jewel sockets"
    ],
    "name": "Voices",
    "officialIcon": "",
    "pool": "Sapphire",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Voices",
    "sourceUrl": "https://poe2db.tw/us/Voices",
    "type": "Jewels",
    "verification": "embedded"
  },
  {
    "base": "Gargantuan Life Flask",
    "baseImplicitMods": [],
    "baseProperties": [
      "Life Flask"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"Tukohama may be asleep, but he still gives us his strength. A small",
      "needle, an offering, and a vial... drink deeply, my son, and you",
      "will more than survive the coming battle... you will thrive.\""
    ],
    "key": "blood of the warrior gargantuan life flask",
    "level": 40,
    "mods": [
      "90% less Life Recovered",
      "Effect is not removed when Unreserved Life is Filled",
      "(15-30)% of Damage taken during effect Recouped as Life",
      "Gain (3-5) Rage when Hit by an Enemy during effect",
      "No Inherent loss of Rage during effect",
      "(25-50)% increased Duration"
    ],
    "name": "Blood of the Warrior",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 40",
    "runeforging": [],
    "section": "Other",
    "slug": "Blood_of_the_Warrior",
    "sourceUrl": "https://poe2db.tw/us/Blood_of_the_Warrior",
    "type": "Life Flasks",
    "verification": "embedded"
  },
  {
    "base": "Ultimate Life Flask",
    "baseImplicitMods": [],
    "baseProperties": [
      "Kalguuran Life Flask"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Olroth the Gallant,",
      "tireless and true,",
      "he fights for me,",
      "he fights for you!"
    ],
    "key": "olroth's resolve ultimate life flask",
    "level": 60,
    "mods": [
      "(100-150)% increased Charges per use",
      "Regenerate (2.5-5)% of maximum Runic Ward per second during Effect",
      "Gain Guard equal to Current Runic Ward for 10 seconds when Effect ends"
    ],
    "name": "Olroth's Resolve",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 60",
    "runeforging": [],
    "section": "Other",
    "slug": "Olroths_Resolve",
    "sourceUrl": "https://poe2db.tw/us/Olroths_Resolve",
    "type": "Life Flasks",
    "verification": "embedded"
  },
  {
    "base": "Ultimate Life Flask",
    "baseImplicitMods": [],
    "baseProperties": [
      "Life Flask"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"Calculations complete, and He is assembled.",
      "Our immaculate tactics are set in motion.\""
    ],
    "key": "opportunity ultimate life flask",
    "level": 60,
    "mods": [
      "Effect is not removed when Unreserved Life is Filled",
      "Cannot be Used manually",
      "Used when you release a skill with Perfect Timing",
      "Skills have (80-120)% longer Perfect Timing window during effect",
      "(100-150)% increased Amount Recovered",
      "(25-50)% reduced Recovery rate",
      "(50-75)% reduced Charges per use"
    ],
    "name": "Opportunity",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 60",
    "runeforging": [],
    "section": "Other",
    "slug": "Opportunity",
    "sourceUrl": "https://poe2db.tw/us/Opportunity",
    "type": "Life Flasks",
    "verification": "embedded"
  },
  {
    "base": "Gargantuan Mana Flask",
    "baseImplicitMods": [],
    "baseProperties": [
      "Mana Flask"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"How do I cope with what I witnessed on Wraeclast?",
      "Thank the Ancestors! My cup, it overflows.\"",
      "- Lavianga, former advisor to Kaom"
    ],
    "key": "lavianga's spirits gargantuan mana flask",
    "level": 49,
    "mods": [
      "This Flask cannot be Used but applies its Effect constantly",
      "(70-80)% reduced Amount Recovered"
    ],
    "name": "Lavianga's Spirits",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 49",
    "runeforging": [],
    "section": "Other",
    "slug": "Laviangas_Spirits",
    "sourceUrl": "https://poe2db.tw/us/Laviangas_Spirits",
    "type": "Mana Flasks",
    "verification": "embedded"
  },
  {
    "base": "Transcendent Mana Flask",
    "baseImplicitMods": [],
    "baseProperties": [
      "Kalguuran Mana Flask"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Uhtred drank. Verisium burned through his veins.",
      "He gazed at death's face. With all his strength,",
      "he turned instead to the stars, and witnessed Truth."
    ],
    "key": "uhtred's chalice transcendent mana flask",
    "level": 50,
    "mods": [
      "(200-300)% increased Amount Recovered",
      "70% reduced Recovery rate",
      "(50-60)% reduced Charges",
      "Mana Recovery from Flasks can Overflow maximum Mana during Effect",
      "Lose 5% Life per second while you have no Runic Ward during Effect"
    ],
    "name": "Uhtred's Chalice",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 50",
    "runeforging": [],
    "section": "Other",
    "slug": "Uhtreds_Chalice",
    "sourceUrl": "https://poe2db.tw/us/Uhtreds_Chalice",
    "type": "Mana Flasks",
    "verification": "embedded"
  },
  {
    "base": "Ultimate Mana Flask",
    "baseImplicitMods": [],
    "baseProperties": [
      "Mana Flask"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "What is life, but a dreamlike spiral of panic?"
    ],
    "key": "melting maelstrom ultimate mana flask",
    "level": 60,
    "mods": [
      "Effect is not removed when Unreserved Mana is Filled",
      "(200-250)% increased Duration",
      "Every 3 seconds during Effect, deal 100% of Mana spent in those seconds as Chaos Damage to Enemies within 3 metres",
      "Deals 25% of current Mana as Chaos Damage to you when Effect ends"
    ],
    "name": "Melting Maelstrom",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 60",
    "runeforging": [],
    "section": "Other",
    "slug": "Melting_Maelstrom",
    "sourceUrl": "https://poe2db.tw/us/Melting_Maelstrom",
    "type": "Mana Flasks",
    "verification": "embedded"
  },
  {
    "base": "Wooden Club",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte One Hand Mace",
      "Physical Damage: (16-20) to (26-30)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.16",
      "Weapon Range: 1.3"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "The mark of the smith was widely known."
    ],
    "key": "brynhand's mark wooden club",
    "level": 1,
    "mods": [
      "Adds (10-14) to (16-20) Physical Damage",
      "+(30-50) to Accuracy Rating",
      "20% reduced Attack Speed",
      "+(10-20) to Strength",
      "Causes Double Stun Buildup"
    ],
    "name": "Brynhand's Mark",
    "officialIcon": "",
    "pool": "One_Hand_Maces",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Brynhand's Mark Wooden Club, Verisium x205, Medved's Crest of the Circle x1",
        "implicitMods": [
          "(20-30)% increased Area of Effect for Attacks"
        ],
        "key": "runeforged wooden club",
        "label": "Runeforged Wooden Club",
        "level": 38,
        "properties": [
          "Physical Damage: 83-138",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.45",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 68 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Brynhands_Mark",
    "sourceUrl": "https://poe2db.tw/us/Brynhands_Mark",
    "type": "One Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Slim Mace",
    "baseImplicitMods": [],
    "baseProperties": [
      "One Hand Mace",
      "Physical Damage: (19-23) to (33-37)",
      "Cold Damage: (8-12) to (16-20)",
      "Critical Hit Chance: 10%",
      "Attacks per Second: 1.55",
      "Weapon Range: 1.3"
    ],
    "basePropertyStyles": [
      null,
      1,
      5,
      0,
      0,
      0
    ],
    "flavourText": [
      "A merciful murderer swept through the streets of Sarn",
      "Robbing breath from the weak and worthless."
    ],
    "key": "frostbreath slim mace",
    "level": 10,
    "mods": [
      "Adds (8-12) to (16-20) Physical Damage",
      "Adds (8-12) to (16-20) Cold Damage",
      "+5% to Critical Hit Chance",
      "All Damage from Hits with this Weapon Contributes to Freeze Buildup",
      "Culling Strike against Frozen Enemies"
    ],
    "name": "Frostbreath",
    "officialIcon": "",
    "pool": "One_Hand_Maces",
    "requirements": "Requires: Level 10, 21 Str",
    "runeforging": [
      {
        "cost": "Cost: Frostbreath Slim Mace, Verisium x430, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "local weapon implicit hidden % base damage is cold [50]"
        ],
        "key": "runeforged slim mace",
        "label": "Runeforged Slim Mace",
        "level": 38,
        "properties": [
          "Physical Damage: 48-72.5",
          "Cold Damage: 48-72.5",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.55",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          0,
          5,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 68 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Frostbreath",
    "sourceUrl": "https://poe2db.tw/us/Frostbreath",
    "type": "One Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Spiked Club",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte One Hand Mace",
      "Physical Damage: (28-30) to (46-49)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.74-1.89",
      "Weapon Range: 1.3"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "Ezomyte loyalty was not given to distant leaders.",
      "It was earned by comrades in arms."
    ],
    "key": "trenchtimbre spiked club",
    "level": 16,
    "mods": [
      "Adds (13-15) to (22-25) Physical Damage",
      "(20-30)% increased Attack Speed",
      "+(1-2) to Level of all Minion Skills",
      "Increases and Reductions to Minion Attack Speed also affect you"
    ],
    "name": "Trenchtimbre",
    "officialIcon": "",
    "pool": "One_Hand_Maces",
    "requirements": "Requires: Level 16, 31 Str",
    "runeforging": [
      {
        "cost": "Cost: Trenchtimbre Spiked Club, Verisium x550, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runeforged spiked club",
        "label": "Runeforged Spiked Club",
        "level": 40,
        "properties": [
          "Physical Damage: 56-93",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.5",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 72 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Trenchtimbre",
    "sourceUrl": "https://poe2db.tw/us/Trenchtimbre",
    "type": "One Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Warpick",
    "baseImplicitMods": [
      "+(5-10)% to Critical Damage Bonus"
    ],
    "baseProperties": [
      "One Hand Mace",
      "Physical Damage: (39-44) to (49-55)",
      "Critical Hit Chance: 7%",
      "Attacks per Second: 1.6-1.67",
      "Weapon Range: 1.3"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "The Abyssals were created, not born,",
      "and every moment in the light was agony."
    ],
    "key": "sculpted suffering warpick",
    "level": 22,
    "mods": [
      "Adds (21-26) to (25-31) Physical Damage",
      "(10-15)% increased Attack Speed",
      "Breaks Armour equal to 40% of damage from Hits with this weapon",
      "Fully Armour Broken enemies you kill with Hits Shatter"
    ],
    "name": "Sculpted Suffering",
    "officialIcon": "",
    "pool": "One_Hand_Maces",
    "requirements": "Requires: Level 22, 41 Str",
    "runeforging": [
      {
        "cost": "Cost: Sculpted Suffering Warpick, Verisium x250, Medved's Crest of the Circle x1",
        "implicitMods": [
          "(30-40)% increased effect of Fully Broken Armour"
        ],
        "key": "runeforged warpick",
        "label": "Runeforged Warpick",
        "level": 38,
        "properties": [
          "Physical Damage: 75-102",
          "Critical Hit Chance: 7%",
          "Attacks per Second: 1.45",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 68 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Sculpted_Suffering",
    "sourceUrl": "https://poe2db.tw/us/Sculpted_Suffering",
    "type": "One Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Morning Star",
    "baseImplicitMods": [
      "Grants Skill: Level 11 Molten Shower"
    ],
    "baseProperties": [
      "One Hand Mace",
      "Physical Damage: (59-73) to (88-108)",
      "Critical Hit Chance: 6.5%",
      "Attacks per Second: 1.52-1.6",
      "Weapon Range: 1.3"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"A sprinkle of liquid encouragement is often",
      "required to garnish the perfect confession.\"",
      "- Brutus, Warden of Axiom"
    ],
    "key": "brutus' lead sprinkler morning star",
    "level": 45,
    "mods": [
      "Hits with this Weapon have 5% chance to Trigger Molten Shower per 25 Strength",
      "(80-120)% increased Physical Damage",
      "(5-10)% increased Attack Speed",
      "+(15-25) to Strength",
      "5 to 10 Added Attack Fire Damage per 25 Strength",
      "local display grants level X molten shower [1]"
    ],
    "name": "Brutus' Lead Sprinkler",
    "officialIcon": "",
    "pool": "One_Hand_Maces",
    "requirements": "Requires: Level 45, 80 Str",
    "runeforging": [
      {
        "cost": "Cost: Brutus' Lead Sprinkler Morning Star, Exceptional Verisium x3, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "local weapon implicit hidden % base damage is fire [100]"
        ],
        "key": "runeforged morning star",
        "label": "Runeforged Morning Star",
        "level": 65,
        "properties": [
          "Fire Damage: 90-134",
          "Critical Hit Chance: 6.5%",
          "Attacks per Second: 1.45",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          4,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 114 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Brutus_Lead_Sprinkler",
    "sourceUrl": "https://poe2db.tw/us/Brutus_Lead_Sprinkler",
    "type": "One Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Kalguuran Forgehammer",
    "baseImplicitMods": [
      "Grants Skill: Level 12 Runic Tempering",
      "Has 3 Sockets"
    ],
    "baseProperties": [
      "Kalguuran One Hand Mace",
      "Physical Damage: (56-63) to (90-110)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.45",
      "Weapon Range: 1.3"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "A common soldier from a common family kept hammering into the night",
      "after each grueling march, his eyes afire with starlight and determination.",
      "Few suspected that he would one day become the greatest among them."
    ],
    "key": "serle's grit kalguuran forgehammer",
    "level": 47,
    "mods": [
      "Maximum Quality is 40%",
      "Adds (23-30) to (35-55) Physical Damage",
      "+(20-30) to Strength",
      "Skills which Empower an Attack have (10-20)% chance to not count that Attack",
      "(40-50) to (80-100) added Physical Thorns damage per Runic Plate"
    ],
    "name": "Serle's Grit",
    "officialIcon": "",
    "pool": "One_Hand_Maces",
    "requirements": "Requires: Level 47",
    "runeforging": [
      {
        "cost": "Cost: Serle's Grit Kalguuran Forgehammer, Verisium x1500, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "Has 3 Sockets",
          "+(100-150) to maximum Runic Ward"
        ],
        "key": "runeforged kalguuran forgehammer",
        "label": "Runeforged Kalguuran Forgehammer",
        "level": 65,
        "properties": [
          "Physical Damage: 59-99",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.45",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65",
        "tier": "runeforged"
      },
      {
        "cost": "Cost: Serle's Grit Kalguuran Forgehammer, Verisium x1500, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "Has 3 Sockets",
          "+(100-150) to maximum Runic Ward"
        ],
        "key": "runeforged kalguuran forgehammer",
        "label": "Runeforged Kalguuran Forgehammer",
        "level": 65,
        "properties": [
          "Physical Damage: 59-99",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.45",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65",
        "tier": "runeforged"
      },
      {
        "cost": "Cost: Serle's Grit Kalguuran Forgehammer, Verisium x1500, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "Has 3 Sockets",
          "+(100-150) to maximum Runic Ward"
        ],
        "key": "runeforged kalguuran forgehammer",
        "label": "Runeforged Kalguuran Forgehammer",
        "level": 65,
        "properties": [
          "Physical Damage: 59-99",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.45",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65",
        "tier": "runeforged"
      },
      {
        "cost": "Cost: Serle's Grit Kalguuran Forgehammer, Verisium x1500, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "Has 3 Sockets",
          "+(100-150) to maximum Runic Ward"
        ],
        "key": "runeforged kalguuran forgehammer",
        "label": "Runeforged Kalguuran Forgehammer",
        "level": 65,
        "properties": [
          "Physical Damage: 59-99",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.45",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Serles_Grit",
    "sourceUrl": "https://poe2db.tw/us/Serles_Grit",
    "type": "One Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Marching Mace",
    "baseImplicitMods": [],
    "baseProperties": [
      "One Hand Mace",
      "Physical Damage: 33-69",
      "Cold Damage: (24-31) to (36-46)",
      "Lightning Damage: (1-5) to (66-90)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.54-1.68",
      "Weapon Range: 1.3"
    ],
    "basePropertyStyles": [
      null,
      1,
      5,
      6,
      0,
      0,
      0
    ],
    "flavourText": [
      "Within lies a window."
    ],
    "key": "seeing stars marching mace",
    "level": 54,
    "mods": [
      "Adds (24-31) to (36-46) Cold Damage",
      "Adds (1-5) to (66-90) Lightning Damage",
      "(10-20)% increased Attack Speed",
      "Energy Generation is doubled"
    ],
    "name": "Seeing Stars",
    "officialIcon": "",
    "pool": "One_Hand_Maces",
    "requirements": "Requires: Level 54, 96 Str",
    "runeforging": [
      {
        "cost": "Cost: Seeing Stars Marching Mace, Verisium x1140, Exceptional Verisium x5, Uhtred's Crest of the Chalice x1",
        "implicitMods": [],
        "key": "runeforged marching mace",
        "label": "Runeforged Marching Mace",
        "level": 65,
        "properties": [
          "Physical Damage: 46-96",
          "Critical Hit Chance: 7.5%",
          "Attacks per Second: 1.4",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 114 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Seeing_Stars",
    "sourceUrl": "https://poe2db.tw/us/Seeing_Stars",
    "type": "One Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Execratus Hammer",
    "baseImplicitMods": [],
    "baseProperties": [
      "One Hand Mace",
      "Physical Damage: (79-88) to (129-139)",
      "Chaos Damage: (25-36) to (44-55)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.45",
      "Weapon Range: 1.3"
    ],
    "basePropertyStyles": [
      null,
      1,
      7,
      0,
      0,
      0
    ],
    "flavourText": [
      "They hoped that, trapped in its prison,",
      "the creature would age and perish.",
      "But time would not touch the fiend."
    ],
    "key": "nebuloch execratus hammer",
    "level": 55,
    "mods": [
      "Adds (39-48) to (69-79) Physical Damage",
      "+(20-30)% to Critical Damage Bonus",
      "Adds (25-36) to (44-55) Chaos damage",
      "Attacks consume an Endurance Charge to Critically Hit",
      "Take 100 Chaos damage per second per Endurance Charge"
    ],
    "name": "Nebuloch",
    "officialIcon": "",
    "pool": "One_Hand_Maces",
    "requirements": "Requires: Level 55, 97 Str",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Nebuloch",
    "sourceUrl": "https://poe2db.tw/us/Nebuloch",
    "type": "One Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Torment Club",
    "baseImplicitMods": [
      "Grants Skill: Level 15 Thundergod's Wrath"
    ],
    "baseProperties": [
      "Kalguuran One Hand Mace",
      "Physical Damage: (154-198) to (256-329)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.6-1.74",
      "Weapon Range: 1.3"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "Look the storm in the eye and you will have its respect."
    ],
    "key": "mjölner torment club",
    "level": 65,
    "mods": [
      "+200 Intelligence Requirement",
      "+100 Strength Requirement",
      "(250-350)% increased Physical Damage",
      "(10-20)% increased Attack Speed",
      "+(2-4) to Level of all Lightning Skills"
    ],
    "name": "Mjölner",
    "officialIcon": "",
    "pool": "One_Hand_Maces",
    "requirements": "Requires: Level 65, 214 Str, Int 200",
    "runeforging": [
      {
        "cost": "Cost: Mjölner Torment Club, Exceptional Verisium x30, Olroth's Crest of the Sun x1",
        "implicitMods": [],
        "key": "runemastered torment club",
        "label": "Runemastered Torment Club",
        "level": 65,
        "properties": [
          "Physical Damage: 54-91",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.45",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 124 Str",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Mjölner Torment Club, Exceptional Verisium x30, Olroth's Crest of the Sun x1",
        "implicitMods": [],
        "key": "runemastered torment club",
        "label": "Runemastered Torment Club",
        "level": 65,
        "properties": [
          "Physical Damage: 54-91",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.45",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 124 Str",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Mjölner Torment Club, Exceptional Verisium x30, Olroth's Crest of the Sun x1",
        "implicitMods": [],
        "key": "runemastered torment club",
        "label": "Runemastered Torment Club",
        "level": 65,
        "properties": [
          "Physical Damage: 54-91",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.45",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 124 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Weapons",
    "slug": "Mj%C3%B6lner",
    "sourceUrl": "https://poe2db.tw/us/Mj%C3%B6lner",
    "type": "One Hand Maces",
    "verification": "page"
  },
  {
    "base": "Torment Club",
    "baseImplicitMods": [],
    "baseProperties": [
      "Kalguuran One Hand Mace",
      "Physical Damage: 44-73",
      "Lightning Damage: (1) to (60-80)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.52-1.89",
      "Weapon Range: 1.3"
    ],
    "basePropertyStyles": [
      null,
      1,
      6,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"True heroes grow stronger in the face of adversity.\"",
      "- Fourth Tenet of the Knights of the Sun"
    ],
    "key": "olrovasara torment club",
    "level": 65,
    "mods": [
      "Adds 1 to (60-80) Lightning Damage",
      "+(300-400) to Accuracy Rating",
      "(5-30)% increased Attack Speed",
      "On Hitting an enemy, gains maximum added Lightning damage equal tothe enemy's Power for 20 seconds, up to a total of 500"
    ],
    "name": "Olrovasara",
    "officialIcon": "",
    "pool": "One_Hand_Maces",
    "requirements": "Requires: Level 65, 114 Str",
    "runeforging": [
      {
        "cost": "Cost: Olrovasara Torment Club, Exceptional Verisium x15, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "+(1.5-2) metres to Melee Strike Range"
        ],
        "key": "runemastered torment club",
        "label": "Runemastered Torment Club",
        "level": 65,
        "properties": [
          "Physical Damage: 44-73",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.45",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 114 Str",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Olrovasara Torment Club, Exceptional Verisium x15, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "+(1.5-2) metres to Melee Strike Range"
        ],
        "key": "runemastered torment club",
        "label": "Runemastered Torment Club",
        "level": 65,
        "properties": [
          "Physical Damage: 44-73",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.45",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 114 Str",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Olrovasara Torment Club, Exceptional Verisium x15, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "+(1.5-2) metres to Melee Strike Range"
        ],
        "key": "runemastered torment club",
        "label": "Runemastered Torment Club",
        "level": 65,
        "properties": [
          "Physical Damage: 44-73",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.45",
          "Weapon Range: 1.3"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 114 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Weapons",
    "slug": "Olrovasara",
    "sourceUrl": "https://poe2db.tw/us/Olrovasara",
    "type": "One Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Flanged Mace",
    "baseImplicitMods": [
      "Grants Skill: Level 16 Harbinger of Madness"
    ],
    "baseProperties": [
      "One Hand Mace",
      "Physical Damage: (153-180) to (228-268)",
      "Critical Hit Chance: 10-13%",
      "Attacks per Second: 1.77-1.89",
      "Weapon Range: 1.3"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"You mortals are insidious. You repress your",
      "evil, or deny it exists. Liars! When I open",
      "your heads, that violence floods out.\"",
      "- The Raven Trickster"
    ],
    "key": "sadist's mercy flanged mace",
    "level": 67,
    "mods": [
      "(240-300)% increased Physical Damage",
      "+(5-8)% to Critical Hit Chance",
      "(14-22)% increased Attack Speed",
      "Hits with this Weapon inflict (2-5) Gruelling Madness",
      "Enemies in your Presence have additional Power equal to their Gruelling Madness"
    ],
    "name": "Sadist's Mercy",
    "officialIcon": "",
    "pool": "One_Hand_Maces",
    "requirements": "Requires: Level 67, 134 Str",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Sadists_Mercy",
    "sourceUrl": "https://poe2db.tw/us/Sadists_Mercy",
    "type": "One Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Wrapped Quarterstaff",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Quarterstave",
      "Physical Damage: (15-19) to (28-30)",
      "Critical Hit Chance: 10%",
      "Attacks per Second: 1.4",
      "Weapon Range: 1.4"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "Touch not the thorn, for only blood and pain await."
    ],
    "key": "the blood thorn wrapped quarterstaff",
    "level": 1,
    "mods": [
      "Adds (8-12) to (16-18) Physical Damage",
      "+(10-15) to Strength",
      "Causes Bleeding on Hit",
      "(4-5) to (8-10) Physical Thorns damage"
    ],
    "name": "The Blood Thorn",
    "officialIcon": "",
    "pool": "Quarterstaves",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: The Blood Thorn Wrapped Quarterstaff, Verisium x225, Medved's Crest of the Circle x1",
        "implicitMods": [
          "50% increased Magnitude of Bleeding you inflict"
        ],
        "key": "runeforged wrapped quarterstaff",
        "label": "Runeforged Wrapped Quarterstaff",
        "level": 38,
        "properties": [
          "Physical Damage: 93-155",
          "Critical Hit Chance: 10%",
          "Attacks per Second: 1.4",
          "Weapon Range: 1.4"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Dex, 23 Int",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "The_Blood_Thorn",
    "sourceUrl": "https://poe2db.tw/us/The_Blood_Thorn",
    "type": "Quarterstaves",
    "verification": "embedded"
  },
  {
    "base": "Long Quarterstaff",
    "baseImplicitMods": [
      "16% increased Melee Strike Range with this weapon"
    ],
    "baseProperties": [
      "Quarterstaff",
      "Physical Damage: 9-18",
      "Critical Hit Chance: 10%",
      "Attacks per Second: 1.4",
      "Weapon Range: 1.4"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "Forged to rule the waves and tide",
      "Destined to serve the monkey's paw",
      "Strong as a tower of iron",
      "Deft as the needle doubt"
    ],
    "key": "pillar of the caged god long quarterstaff",
    "level": 4,
    "mods": [
      "1% increased Area of Effect for Attacks per 10 Intelligence",
      "1% increased Attack Speed per 10 Dexterity",
      "10% increased Weapon Damage per 10 Strength"
    ],
    "name": "Pillar of the Caged God",
    "officialIcon": "",
    "pool": "Quarterstaves",
    "requirements": "Requires: Level 4, 9 Dex",
    "runeforging": [
      {
        "cost": "Cost: Pillar of the Caged God Long Quarterstaff, Verisium x425, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "16% increased Melee Strike Range with this weapon"
        ],
        "key": "runeforged long quarterstaff",
        "label": "Runeforged Long Quarterstaff",
        "level": 38,
        "properties": [
          "Physical Damage: 21-43",
          "Critical Hit Chance: 10%",
          "Attacks per Second: 1.4",
          "Weapon Range: 1.4"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Dex, 23 Int",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Pillar_of_the_Caged_God",
    "sourceUrl": "https://poe2db.tw/us/Pillar_of_the_Caged_God",
    "type": "Quarterstaves",
    "verification": "embedded"
  },
  {
    "base": "Gothic Quarterstaff",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Quarterstave",
      "Physical Damage: 16-26",
      "Fire Damage: (25-32) to (40-50)",
      "Critical Hit Chance: 12%",
      "Attacks per Second: 1.4",
      "Weapon Range: 1.4"
    ],
    "basePropertyStyles": [
      null,
      1,
      4,
      0,
      0,
      0
    ],
    "flavourText": [
      "The night Draven attacked,",
      "Erian was asleep at his post."
    ],
    "key": "the sentry gothic quarterstaff",
    "level": 11,
    "mods": [
      "No Physical Damage",
      "Adds (25-32) to (40-50) Fire Damage",
      "+(30-50) to Accuracy Rating",
      "+20% to Fire Resistance",
      "100% increased Flammability Magnitude",
      "30% increased Light Radius"
    ],
    "name": "The Sentry",
    "officialIcon": "",
    "pool": "Quarterstaves",
    "requirements": "Requires: Level 11, 18 Dex, 9 Int",
    "runeforging": [
      {
        "cost": "Cost: The Sentry Gothic Quarterstaff, Verisium x200, Medved's Crest of the Circle x1",
        "implicitMods": [
          "local weapon implicit hidden % base damage is fire [100]"
        ],
        "key": "runeforged gothic quarterstaff",
        "label": "Runeforged Gothic Quarterstaff",
        "level": 38,
        "properties": [
          "Fire Damage: 80-134",
          "Critical Hit Chance: 12%",
          "Attacks per Second: 1.4",
          "Weapon Range: 1.4"
        ],
        "propertyStyles": [
          4,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Dex, 23 Int",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "The_Sentry",
    "sourceUrl": "https://poe2db.tw/us/The_Sentry",
    "type": "Quarterstaves",
    "verification": "embedded"
  },
  {
    "base": "Crescent Quarterstaff",
    "baseImplicitMods": [],
    "baseProperties": [
      "Quarterstaff",
      "Physical Damage: 19-39",
      "Cold Damage: (6-9) to (10-15)",
      "Lightning Damage: (1) to (19-29)",
      "Critical Hit Chance: 13-15%",
      "Attacks per Second: 1.73-1.8",
      "Weapon Range: 1.4"
    ],
    "basePropertyStyles": [
      null,
      1,
      5,
      6,
      0,
      0,
      0
    ],
    "flavourText": [
      "In our tales, and in our hearts, the rivers still flow."
    ],
    "key": "matsya crescent quarterstaff",
    "level": 20,
    "mods": [
      "Adds (6-9) to (10-15) Cold Damage",
      "Adds 1 to (19-29) Lightning Damage",
      "+(3-5)% to Critical Hit Chance",
      "(15-20)% increased Attack Speed",
      "(25-40)% increased Mana Regeneration Rate",
      "Skills reserve 50% less Spirit"
    ],
    "name": "Matsya",
    "officialIcon": "",
    "pool": "Quarterstaves",
    "requirements": "Requires: Level 20, 30 Dex, 14 Int",
    "runeforging": [
      {
        "cost": "Cost: Matsya Crescent Quarterstaff, Verisium x920, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "local weapon implicit hidden % base damage is cold [50]",
          "local weapon implicit hidden % base damage is lightning [50]"
        ],
        "key": "runeforged crescent quarterstaff",
        "label": "Runeforged Crescent Quarterstaff",
        "level": 40,
        "properties": [
          "Cold Damage: 39-81",
          "Lightning Damage: 39-81",
          "Critical Hit Chance: 10%",
          "Attacks per Second: 1.5",
          "Weapon Range: 1.4"
        ],
        "propertyStyles": [
          5,
          6,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 56 Dex, 23 Int",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Matsya",
    "sourceUrl": "https://poe2db.tw/us/Matsya",
    "type": "Quarterstaves",
    "verification": "embedded"
  },
  {
    "base": "Steelpoint Quarterstaff",
    "baseImplicitMods": [],
    "baseProperties": [
      "Quarterstaff",
      "Physical Damage: (58-64) to (126-132)",
      "Critical Hit Chance: 10%",
      "Attacks per Second: 1.4",
      "Weapon Range: 1.4"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "The first witch hunter knew one critical tactic:",
      "never let your enemy have a clear moment."
    ],
    "key": "nazir's judgement steelpoint quarterstaff",
    "level": 28,
    "mods": [
      "Adds (30-36) to (75-81) Physical Damage",
      "+(50-100) to Accuracy Rating",
      "(10-20)% increased Stun Duration",
      "Dazes on Hit",
      "(35-50)% increased Melee Damage against Heavy Stunned enemies"
    ],
    "name": "Nazir's Judgement",
    "officialIcon": "",
    "pool": "Quarterstaves",
    "requirements": "Requires: Level 28, 41 Dex, 18 Int",
    "runeforging": [
      {
        "cost": "Cost: Nazir's Judgement Steelpoint Quarterstaff, Verisium x320, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runeforged steelpoint quarterstaff",
        "label": "Runeforged Steelpoint Quarterstaff",
        "level": 40,
        "properties": [
          "Physical Damage: 90-167",
          "Critical Hit Chance: 10%",
          "Attacks per Second: 1.4",
          "Weapon Range: 1.4"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 56 Dex, 23 Int",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Nazirs_Judgement",
    "sourceUrl": "https://poe2db.tw/us/Nazirs_Judgement",
    "type": "Quarterstaves",
    "verification": "embedded"
  },
  {
    "base": "Wyrm Quarterstaff",
    "baseImplicitMods": [],
    "baseProperties": [
      "Quarterstaff",
      "Physical Damage: 57-94",
      "Critical Hit Chance: 15-20%",
      "Attacks per Second: 1.4",
      "Weapon Range: 1.4"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "The edges bend, the world flexes, the infinite spills into view."
    ],
    "key": "collapsing horizon wyrm quarterstaff",
    "level": 65,
    "mods": [
      "+(5-10)% to Critical Hit Chance",
      "+(2-4) to Level of all Elemental Skills",
      "100% increased Elemental Damage",
      "Trigger skills refund half of Energy spent"
    ],
    "name": "Collapsing Horizon",
    "officialIcon": "",
    "pool": "Quarterstaves",
    "requirements": "Requires: Level 65, 89 Dex, 36 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Collapsing_Horizon",
    "sourceUrl": "https://poe2db.tw/us/Collapsing_Horizon",
    "type": "Quarterstaves",
    "verification": "embedded"
  },
  {
    "base": "Warding Quarterstaff",
    "baseImplicitMods": [
      "+(30-50) to maximum Runic Ward"
    ],
    "baseProperties": [
      "Kalguuran Quarterstave",
      "Physical Damage: (153-204) to (255-340)",
      "Critical Hit Chance: 10%",
      "Attacks per Second: 1.57-1.71",
      "Weapon Range: 1.4"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "Dannig saw Seren in his mind's eye, a public ornament of",
      "extravagance. Until she bore Cadigan a son and vanished.",
      "Decadence covering brutality, like all Kalguuran customs."
    ],
    "key": "duality warding quarterstaff",
    "level": 65,
    "mods": [
      "(200-300)% increased Physical Damage",
      "+(20-30)% to Critical Damage Bonus",
      "(12-22)% increased Attack Speed",
      "Gain Finality for 0.5 seconds per Combo expended when using Skills",
      "Gain (500-1000) Guard for 0.5 seconds per Combo expended when using Skills"
    ],
    "name": "Duality",
    "officialIcon": "",
    "pool": "Quarterstaves",
    "requirements": "Requires: Level 65, 127 Dex, 50 Int",
    "runeforging": [
      {
        "cost": "Cost: Duality Warding Quarterstaff, Exceptional Verisium x20, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "+(30-50) to maximum Runic Ward"
        ],
        "key": "runemastered warding quarterstaff",
        "label": "Runemastered Warding Quarterstaff",
        "level": 65,
        "properties": [
          "Physical Damage: 85-141",
          "Critical Hit Chance: 10%",
          "Attacks per Second: 1.4",
          "Weapon Range: 1.4"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 127 Dex, 50 Int",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Duality Warding Quarterstaff, Exceptional Verisium x20, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "+(30-50) to maximum Runic Ward"
        ],
        "key": "runemastered warding quarterstaff",
        "label": "Runemastered Warding Quarterstaff",
        "level": 65,
        "properties": [
          "Physical Damage: 85-141",
          "Critical Hit Chance: 10%",
          "Attacks per Second: 1.4",
          "Weapon Range: 1.4"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 127 Dex, 50 Int",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Duality Warding Quarterstaff, Exceptional Verisium x20, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "+(30-50) to maximum Runic Ward"
        ],
        "key": "runemastered warding quarterstaff",
        "label": "Runemastered Warding Quarterstaff",
        "level": 65,
        "properties": [
          "Physical Damage: 85-141",
          "Critical Hit Chance: 10%",
          "Attacks per Second: 1.4",
          "Weapon Range: 1.4"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 127 Dex, 50 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Weapons",
    "slug": "Duality",
    "sourceUrl": "https://poe2db.tw/us/Duality",
    "type": "Quarterstaves",
    "verification": "embedded"
  },
  {
    "base": "Broadhead Quiver",
    "baseImplicitMods": [
      "Adds 1 to 3 Physical Damage to Attacks"
    ],
    "baseProperties": [
      "Quiver"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Mist of breath",
      "Icing to lips and throat",
      "As the warm ones choke and fall",
      "Upon the frozen wasteland."
    ],
    "key": "asphyxia's wrath broadhead quiver",
    "level": 1,
    "mods": [
      "Adds (3-4) to (5-8) Cold damage to Attacks",
      "Attacks Gain (5-10)% of Damage as Extra Cold Damage",
      "(5-10)% increased Attack Speed",
      "+(5-10)% to Cold Resistance",
      "Enemies Chilled by your Hits increase damage taken by Chill Magnitude"
    ],
    "name": "Asphyxia's Wrath",
    "officialIcon": "",
    "pool": "Quivers",
    "requirements": "Requires: Level 1",
    "runeforging": [],
    "section": "Other",
    "slug": "Asphyxias_Wrath",
    "sourceUrl": "https://poe2db.tw/us/Asphyxias_Wrath",
    "type": "Quivers",
    "verification": "embedded"
  },
  {
    "base": "Fire Quiver",
    "baseImplicitMods": [
      "Adds 3 to 5 Fire damage to Attacks"
    ],
    "baseProperties": [
      "Quiver"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Molten feathers, veiled spark,",
      "Hissing arrows from the dark."
    ],
    "key": "blackgleam fire quiver",
    "level": 8,
    "mods": [
      "Adds (3-5) to (6-9) Fire damage to Attacks",
      "Attacks Gain (5-10)% of Damage as Extra Fire Damage",
      "+(30-50) to maximum Mana",
      "50% increased Flammability Magnitude",
      "Projectiles Pierce all Ignited enemies"
    ],
    "name": "Blackgleam",
    "officialIcon": "",
    "pool": "Quivers",
    "requirements": "Requires: Level 8",
    "runeforging": [],
    "section": "Other",
    "slug": "Blackgleam",
    "sourceUrl": "https://poe2db.tw/us/Blackgleam",
    "type": "Quivers",
    "verification": "embedded"
  },
  {
    "base": "Sacral Quiver",
    "baseImplicitMods": [
      "Gain (2-3) Life per Enemy Hit with Attacks"
    ],
    "baseProperties": [
      "Quiver"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Life and death ooze from the same sap."
    ],
    "key": "the lethal draw sacral quiver",
    "level": 16,
    "mods": [
      "(5-10)% increased Attack Speed",
      "Gain 5 Life per Enemy Hit with Attacks",
      "(15-25)% chance to Pierce an Enemy",
      "Bow Attacks consume 10% of your maximum Life Flask Charges if possible to deal added Physical damage equal to (5-10)% of Flask's Life Recovery amount"
    ],
    "name": "The Lethal Draw",
    "officialIcon": "",
    "pool": "Quivers",
    "requirements": "Requires: Level 16",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Lethal_Draw",
    "sourceUrl": "https://poe2db.tw/us/The_Lethal_Draw",
    "type": "Quivers",
    "verification": "embedded"
  },
  {
    "base": "Blunt Quiver",
    "baseImplicitMods": [
      "(25-40)% increased Stun Buildup"
    ],
    "baseProperties": [
      "Vaal Quiver"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"It's a rare man that has eyes in the back of his head.\"",
      "- Kiravi, Vaal Archer"
    ],
    "key": "rearguard blunt quiver",
    "level": 33,
    "mods": [
      "Adds (7-11) to (14-20) Physical Damage to Attacks",
      "+(150-200) to Armour",
      "(20-30)% increased Projectile Speed",
      "+(15-25)% to Block chance"
    ],
    "name": "Rearguard",
    "officialIcon": "",
    "pool": "Quivers",
    "requirements": "Requires: Level 33",
    "runeforging": [],
    "section": "Other",
    "slug": "Rearguard",
    "sourceUrl": "https://poe2db.tw/us/Rearguard",
    "type": "Quivers",
    "verification": "embedded"
  },
  {
    "base": "Toxic Quiver",
    "baseImplicitMods": [
      "Grants Skill: Level 10 Bursting Fen Toad",
      "(20-30)% chance to Poison on Hit with Attacks"
    ],
    "baseProperties": [
      "Quiver"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"Boiling frogs isn't for spells, dear. That's a disgusting",
      "rumour. They're actually for brewing poisons.\"",
      "- Selassie of the Black Fen"
    ],
    "key": "murkshaft toxic quiver",
    "level": 39,
    "mods": [
      "Adds (6-10) to (13-17) Physical Damage to Attacks",
      "Gain (10-15) Mana per enemy killed",
      "(10-20)% increased Poison Duration",
      "(20-30)% chance to Poison on Hit with Attacks",
      "Blind Targets when you Poison them",
      "local display triggers level x toad on kill [1]"
    ],
    "name": "Murkshaft",
    "officialIcon": "",
    "pool": "Quivers",
    "requirements": "Requires: Level 39",
    "runeforging": [],
    "section": "Other",
    "slug": "Murkshaft",
    "sourceUrl": "https://poe2db.tw/us/Murkshaft",
    "type": "Quivers",
    "verification": "embedded"
  },
  {
    "base": "Penetrating Quiver",
    "baseImplicitMods": [
      "100% chance to Pierce an Enemy"
    ],
    "baseProperties": [
      "Vaal Quiver"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"Why waste such a fine arrow on just one man?\"",
      "- Kiravi, Vaal Archer"
    ],
    "key": "drillneck penetrating quiver",
    "level": 55,
    "mods": [
      "+(60-90) to maximum Life",
      "(8-12)% increased Attack Speed",
      "Gain Deflection Rating equal to (24-32)% of Evasion Rating",
      "Attack Projectiles Return if they Pierced at least (2-4) times",
      "Projectiles deal (42-64)% increased Damage with Hits for each time they have Pierced",
      "Projectiles have (42-64)% increased Critical Hit chance for each time they have Pierced"
    ],
    "name": "Drillneck",
    "officialIcon": "",
    "pool": "Quivers",
    "requirements": "Requires: Level 55",
    "runeforging": [],
    "section": "Other",
    "slug": "Drillneck",
    "sourceUrl": "https://poe2db.tw/us/Drillneck",
    "type": "Quivers",
    "verification": "embedded"
  },
  {
    "base": "Visceral Quiver",
    "baseImplicitMods": [
      "(20-30)% increased Critical Hit Chance for Attacks"
    ],
    "baseProperties": [
      "Quiver"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The limit of our knowledge is a barrier",
      "that protects us from ourselves."
    ],
    "key": "beyond reach visceral quiver",
    "level": 65,
    "mods": [
      "(10-15)% reduced Attack Speed",
      "Attacks Gain (10-20)% of Physical Damage as extra Chaos Damage",
      "Chaos Damage from Hits also Contributes to Freeze Buildup",
      "Chaos Damage from Hits also Contributes to Electrocute Buildup"
    ],
    "name": "Beyond Reach",
    "officialIcon": "",
    "pool": "Quivers",
    "requirements": "Requires: Level 65",
    "runeforging": [],
    "section": "Other",
    "slug": "Beyond_Reach",
    "sourceUrl": "https://poe2db.tw/us/Beyond_Reach",
    "type": "Quivers",
    "verification": "embedded"
  },
  {
    "base": "Primed Quiver",
    "baseImplicitMods": [
      "(7-10)% increased Attack Speed"
    ],
    "baseProperties": [
      "Quiver"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"One can never fully eliminate Chance, but with the right",
      "machinations, all the outcomes may be turned in your favour...\"",
      "- Cadiro Perandus"
    ],
    "key": "cadiro's gambit primed quiver",
    "level": 66,
    "mods": [
      "Each Arrow fired is a Crescendo, Splinter, Reversing, Diamond, Covetous, or Blunt Arrow"
    ],
    "name": "Cadiro's Gambit",
    "officialIcon": "",
    "pool": "Quivers",
    "requirements": "Requires: Level 66",
    "runeforging": [],
    "section": "Other",
    "slug": "Cadiros_Gambit",
    "sourceUrl": "https://poe2db.tw/us/Cadiros_Gambit",
    "type": "Quivers",
    "verification": "embedded"
  },
  {
    "base": "Tapestry Relic",
    "baseImplicitMods": [],
    "baseProperties": [
      "Relic"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The path forward is unknown,",
      "but someone must lead.",
      "Let it be the best of us."
    ],
    "key": "the burden of leadership tapestry relic",
    "level": 64,
    "mods": [
      "Zarokh, the Temporal drops Sekhema's Resolve",
      "Rooms are unknown on the Trial Map",
      "This item is destroyed when applied to a Trial"
    ],
    "name": "The Burden of Leadership",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 64",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Burden_of_Leadership",
    "sourceUrl": "https://poe2db.tw/us/The_Burden_of_Leadership",
    "type": "Relics",
    "verification": "embedded"
  },
  {
    "base": "Seal Relic",
    "baseImplicitMods": [],
    "baseProperties": [
      "Relic"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "All rejoiced when Solerai and Lundara shattered the grey sky,",
      "but with the cold banished, sandier climes began to creep in..."
    ],
    "key": "the changing seasons seal relic",
    "level": 64,
    "mods": [
      "Zarokh, the Temporal drops Sandstorm Visage",
      "Cannot restore Honour",
      "This item is destroyed when applied to a Trial"
    ],
    "name": "The Changing Seasons",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 64",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Changing_Seasons",
    "sourceUrl": "https://poe2db.tw/us/The_Changing_Seasons",
    "type": "Relics",
    "verification": "embedded"
  },
  {
    "base": "Amphora Relic",
    "baseImplicitMods": [],
    "baseProperties": [
      "Relic"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Centuries of peace brought immense wealth to Keth,",
      "but many worried that it had also left the people soft."
    ],
    "key": "the peacemaker's draught amphora relic",
    "level": 64,
    "mods": [
      "Zarokh, the Temporal drops 1 additional Baryas",
      "Your Armour, Evasion and Energy Shield are zero",
      "This item is destroyed when applied to a Trial"
    ],
    "name": "The Peacemaker's Draught",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 64",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Peacemakers_Draught",
    "sourceUrl": "https://poe2db.tw/us/The_Peacemakers_Draught",
    "type": "Relics",
    "verification": "embedded"
  },
  {
    "base": "Vase Relic",
    "baseImplicitMods": [],
    "baseProperties": [
      "Relic"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "By fire and ice, perhaps the end of the world.",
      "They did not fall on their knees and lament."
    ],
    "key": "the desperate alliance vase relic",
    "level": 65,
    "mods": [
      "Zarokh, the Temporal drops Against the Darkness",
      "Zarokh, the Temporal deals 100% more Damage",
      "Zarokh, the Temporal takes 75% less Damage",
      "This item is destroyed when applied to a Trial"
    ],
    "name": "The Desperate Alliance",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 65",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Desperate_Alliance",
    "sourceUrl": "https://poe2db.tw/us/The_Desperate_Alliance",
    "type": "Relics",
    "verification": "embedded"
  },
  {
    "base": "Incense Relic",
    "baseImplicitMods": [],
    "baseProperties": [
      "Relic"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "In the coldest depths of the Winter of the World, overrun by darkness and fighting to the last, life itself clung to existence by the barest remaining thread."
    ],
    "key": "the last flame incense relic",
    "level": 65,
    "mods": [
      "Zarokh, the Temporal drops Temporalis",
      "Damage taken cannot be Absorbed",
      "Maximum Honour is 1",
      "Cannot be used with Trials below level 80",
      "This item is destroyed when applied to a Trial"
    ],
    "name": "The Last Flame",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 65",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Last_Flame",
    "sourceUrl": "https://poe2db.tw/us/The_Last_Flame",
    "type": "Relics",
    "verification": "embedded"
  },
  {
    "base": "Iron Ring",
    "baseImplicitMods": [
      "Adds 1 to 4 Physical Damage to Attacks"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "If evil must always exist, so be it.",
      "Embrace it. Become its master."
    ],
    "key": "blackheart iron ring",
    "level": 1,
    "mods": [
      "(3-6) Life Regeneration per second",
      "Adds (4-6) to (8-10) Chaos Damage to Attacks",
      "+(10-20)% of Armour also applies to Chaos Damage",
      "25% chance to Intimidate Enemies for 4 seconds on Hit"
    ],
    "name": "Blackheart",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 1",
    "runeforging": [],
    "section": "Other",
    "slug": "Blackheart",
    "sourceUrl": "https://poe2db.tw/us/Blackheart",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Lazuli Ring",
    "baseImplicitMods": [
      "+(20-30) to maximum Mana"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Where her mouth should have been there was only a whirling, black void."
    ],
    "key": "doedre's damning lazuli ring",
    "level": 1,
    "mods": [
      "+(5-15)% to all Elemental Resistances",
      "Gain (1-10) Mana per enemy killed",
      "You can apply an additional Curse"
    ],
    "name": "Doedre's Damning",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 1",
    "runeforging": [],
    "section": "Other",
    "slug": "Doedres_Damning",
    "sourceUrl": "https://poe2db.tw/us/Doedres_Damning",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Ring",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "During the Winter of the World, her akhara began",
      "shepherding jingakh across the harsh Vastiri. Sekhema",
      "Eshtera planted the seeds of Maraketh diplomacy."
    ],
    "key": "eshtera's path ring",
    "level": 1,
    "mods": [
      "You can only Socket Sapphire Jewels in this item",
      "(10-20)% increased Rarity of Items found",
      "+(10-20) to all Attributes",
      "+(5-10)% to Fire and Cold Resistances per Equipped Item with a Lightning Resistance Modifier",
      "Has 1 Jewel Socket (Hidden)"
    ],
    "name": "Eshtera's Path",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 1",
    "runeforging": [],
    "section": "Other",
    "slug": "Eshteras_Path",
    "sourceUrl": "https://poe2db.tw/us/Eshteras_Path",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Lazuli Ring",
    "baseImplicitMods": [
      "+(20-30) to maximum Mana"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "As their eyes adjusted, they became aware of a strange",
      "blue light. Countless glowing worms crawled above,",
      "blissfully unaware of their flight from the sirens."
    ],
    "key": "glowswarm lazuli ring",
    "level": 1,
    "mods": [
      "+(40-60) to maximum Mana",
      "(20-30)% increased Flask Mana Recovery rate",
      "Mana Flasks gain (0.17-0.25) charges per Second",
      "Using a Mana Flask grants Guard equal to 100% of Flask's recovery amount for 4 seconds"
    ],
    "name": "Glowswarm",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 1",
    "runeforging": [],
    "section": "Other",
    "slug": "Glowswarm",
    "sourceUrl": "https://poe2db.tw/us/Glowswarm",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Abyssal Signet",
    "baseImplicitMods": [
      "Inflict Abyssal Wasting on Hit"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Drink deeply of the Well.",
      "Let the Abyss coil within."
    ],
    "key": "grip of kulemak abyssal signet",
    "level": 1,
    "mods": [
      "(20-30)% reduced Presence Area of Effect",
      "(20-30)% reduced Light Radius"
    ],
    "name": "Grip of Kulemak",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 1",
    "runeforging": [],
    "section": "Other",
    "slug": "Grip_of_Kulemak",
    "sourceUrl": "https://poe2db.tw/us/Grip_of_Kulemak",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Ring",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Power is a matter of perspective."
    ],
    "key": "kalandra's touch ring",
    "level": 1,
    "mods": [
      "Reflects opposite Ring"
    ],
    "name": "Kalandra's Touch",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 1",
    "runeforging": [],
    "section": "Other",
    "slug": "Kalandras_Touch",
    "sourceUrl": "https://poe2db.tw/us/Kalandras_Touch",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Lazuli Ring",
    "baseImplicitMods": [
      "+(20-30) to maximum Mana"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The dawn of a new era is set into motion"
    ],
    "key": "seed of cataclysm lazuli ring",
    "level": 1,
    "mods": [
      "(30-50)% increased Critical Hit Chance for Spells",
      "5% reduced Critical Spell Damage Bonus per Critical Hit you've dealt with Spells Recently",
      "+(13-17)% to Chaos Resistance",
      "10% increased Mana Cost of Skills",
      "(15-30)% chance for Spell Damage with Critical Hits to be Lucky"
    ],
    "name": "Seed of Cataclysm",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 1",
    "runeforging": [],
    "section": "Other",
    "slug": "Seed_of_Cataclysm",
    "sourceUrl": "https://poe2db.tw/us/Seed_of_Cataclysm",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Ruby Ring",
    "baseImplicitMods": [
      "+(20-30)% to Fire Resistance"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"The Brotherhood of Silence does not set out to torture our targets.",
      "Excruciating pain is simply a byproduct of certain... necessary methods.\""
    ],
    "key": "blistering bond ruby ring",
    "level": 8,
    "mods": [
      "+(40-60) to maximum Life",
      "+(20-30)% to Fire Resistance",
      "(-15--10)% to Cold Resistance",
      "You take Fire Damage instead of Physical Damage from Bleeding",
      "Fire Damage also Contributes to Bleeding Magnitude",
      "Bleeding you inflict deals Fire Damage instead of Physical Damage"
    ],
    "name": "Blistering Bond",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 8",
    "runeforging": [],
    "section": "Other",
    "slug": "Blistering_Bond",
    "sourceUrl": "https://poe2db.tw/us/Blistering_Bond",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Ruby Ring",
    "baseImplicitMods": [
      "+(20-30)% to Fire Resistance"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Fear the fire that spreads like a plague."
    ],
    "key": "cracklecreep ruby ring",
    "level": 8,
    "mods": [
      "(20-30)% increased Fire Damage",
      "(3.1-6) Life Regeneration per second",
      "(20-30)% increased Mana Regeneration Rate",
      "Ignites you inflict spread to other Enemies that stay within 1.5 metres for 1 second"
    ],
    "name": "Cracklecreep",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 8",
    "runeforging": [],
    "section": "Other",
    "slug": "Cracklecreep",
    "sourceUrl": "https://poe2db.tw/us/Cracklecreep",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Sapphire Ring",
    "baseImplicitMods": [
      "+(20-30)% to Cold Resistance"
    ],
    "baseProperties": [
      "Vaal Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Doryani stumbled into a realm of madness",
      "And awoke its Master."
    ],
    "key": "dream fragments sapphire ring",
    "level": 12,
    "mods": [
      "(10-15)% increased maximum Mana",
      "(30-50)% increased Mana Regeneration Rate",
      "You cannot be Chilled or Frozen"
    ],
    "name": "Dream Fragments",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 12",
    "runeforging": [],
    "section": "Other",
    "slug": "Dream_Fragments",
    "sourceUrl": "https://poe2db.tw/us/Dream_Fragments",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Sapphire Ring",
    "baseImplicitMods": [
      "+(20-30)% to Cold Resistance"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "I rule the north",
      "A legacy earned",
      "Time and time again",
      "Sing Meginord's song!"
    ],
    "key": "polcirkeln sapphire ring",
    "level": 12,
    "mods": [
      "(20-30)% increased Cold Damage",
      "+(40-60) to maximum Mana",
      "+(10-15) to Strength",
      "Enemies Chilled by your Hits can be Shattered as though Frozen"
    ],
    "name": "Polcirkeln",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 12",
    "runeforging": [],
    "section": "Other",
    "slug": "Polcirkeln",
    "sourceUrl": "https://poe2db.tw/us/Polcirkeln",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Topaz Ring",
    "baseImplicitMods": [
      "+(20-30)% to Lightning Resistance"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Highgate held other secrets."
    ],
    "key": "levinstone topaz ring",
    "level": 16,
    "mods": [
      "+(40-60) to maximum Mana",
      "(10-20)% increased chance to Shock",
      "Lightning Skills Chain +1 times",
      "(10-20)% increased Magnitude of Shock you inflict"
    ],
    "name": "Levinstone",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 16",
    "runeforging": [],
    "section": "Other",
    "slug": "Levinstone",
    "sourceUrl": "https://poe2db.tw/us/Levinstone",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Topaz Ring",
    "baseImplicitMods": [
      "+(20-30)% to Lightning Resistance"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "It coils deeper and deeper",
      "It slithers between thoughts",
      "It lies beneath the valley",
      "It lies in our minds"
    ],
    "key": "the burrower topaz ring",
    "level": 16,
    "mods": [
      "-10% to Cold Resistance",
      "+(20-30)% to Lightning Resistance",
      "(30-50)% increased Mana Regeneration Rate",
      "Lightning Damage of Enemies Hitting you is Unlucky"
    ],
    "name": "The Burrower",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 16",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Burrower",
    "sourceUrl": "https://poe2db.tw/us/The_Burrower",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Amethyst Ring",
    "baseImplicitMods": [
      "+(7-13)% to Chaos Resistance"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Beyond the veil of death, there burns a fire",
      "by whose light night is borne."
    ],
    "key": "blackflame amethyst ring",
    "level": 20,
    "mods": [
      "(15-30)% increased Mana Regeneration Rate",
      "Ignite you inflict deals Chaos Damage instead of Fire Damage",
      "(80-100)% increased Ignite Magnitude",
      "(60-75)% reduced Ignite Duration on Enemies",
      "Withered you inflict also increases Fire Damage taken",
      "Withered does not expire on Enemies Ignited by you",
      "use unique blackflame ignite effect [1]"
    ],
    "name": "Blackflame",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Blackflame",
    "sourceUrl": "https://poe2db.tw/us/Blackflame",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Amethyst Ring",
    "baseImplicitMods": [
      "+(7-13)% to Chaos Resistance"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Ming slew Tranquillity",
      "Took Chaos for his wife",
      "And on Her immortal finger",
      "He placed his Heart"
    ],
    "key": "ming's heart amethyst ring",
    "level": 20,
    "mods": [
      "20% reduced maximum Life",
      "Gain (30-40)% of Damage as Extra Chaos Damage",
      "30% reduced Global Armour, Evasion and Energy Shield"
    ],
    "name": "Ming's Heart",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Mings_Heart",
    "sourceUrl": "https://poe2db.tw/us/Mings_Heart",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Amethyst Ring",
    "baseImplicitMods": [
      "+(7-13)% to Chaos Resistance"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Innocence rose to godhood not on inspired faith,",
      "but on the vilification and hatred of another."
    ],
    "key": "original sin amethyst ring",
    "level": 20,
    "mods": [
      "+(17-23)% to Chaos Resistance",
      "100% of Elemental Damage Converted to Chaos Damage"
    ],
    "name": "Original Sin",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Original_Sin",
    "sourceUrl": "https://poe2db.tw/us/Original_Sin",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Amethyst Ring",
    "baseImplicitMods": [
      "+(7-13)% to Chaos Resistance"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The tribe revelled wildly, unaware that each fruit",
      "they ate further bound their continuity to the fog's.",
      "In time, the merest touch could break their reality."
    ],
    "key": "veilpiercer amethyst ring",
    "level": 20,
    "mods": [
      "+(60-100) to maximum Mana",
      "+(15-25) to Intelligence",
      "Curses you inflict can affect Hexproof Enemies",
      "Curses you inflict spread to enemies within 3 metres when Cursed enemy dies",
      "Gain 1 Dark Whisper every second there is a Cursed Enemy in your Presence",
      "(20-40)% increased Damage with Hits against targets in your Presence"
    ],
    "name": "Veilpiercer",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 20",
    "runeforging": [],
    "section": "Other",
    "slug": "Veilpiercer",
    "sourceUrl": "https://poe2db.tw/us/Veilpiercer",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Emerald Ring",
    "baseImplicitMods": [
      "+(120-160) to Accuracy Rating"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "To truly appreciate life you must be there when it ends"
    ],
    "key": "death rush emerald ring",
    "level": 26,
    "mods": [
      "+(75-125) to Accuracy Rating",
      "+(75-125) to Evasion Rating",
      "Leech 5% of Physical Attack Damage as Life",
      "You gain Onslaught for 4 seconds on Kill"
    ],
    "name": "Death Rush",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 26",
    "runeforging": [],
    "section": "Other",
    "slug": "Death_Rush",
    "sourceUrl": "https://poe2db.tw/us/Death_Rush",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Emerald Ring",
    "baseImplicitMods": [
      "+(120-160) to Accuracy Rating"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The ring I stole,",
      "My finger they took,",
      "A shrouded mind,",
      "Cut their curses short,",
      "As I drained their spirit",
      "And stole their soul.",
      "A blessing is often a curse."
    ],
    "key": "thief's torment emerald ring",
    "level": 26,
    "mods": [
      "(30-40)% increased Rarity of Items found",
      "+(10-15)% to all Elemental Resistances",
      "Gain 25 Life per Enemy Hit with Attacks",
      "Can't use other Rings",
      "Gain 15 Mana per Enemy Hit with Attacks",
      "50% reduced Duration of Curses on you"
    ],
    "name": "Thief's Torment",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 26",
    "runeforging": [],
    "section": "Other",
    "slug": "Thiefs_Torment",
    "sourceUrl": "https://poe2db.tw/us/Thiefs_Torment",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Emerald Ring",
    "baseImplicitMods": [
      "+(120-160) to Accuracy Rating"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The warriors of the Unblinking Eye moved",
      "together as one, shoulder to shoulder."
    ],
    "key": "vigilant view emerald ring",
    "level": 26,
    "mods": [
      "+(100-150) to Accuracy Rating",
      "+(100-150) to Evasion Rating",
      "(10-20)% increased Rarity of Items found",
      "+(20-30) to Dexterity",
      "Enemies have an Accuracy Penalty against you based on Distance",
      "Maximum Chance to Evade is 50%"
    ],
    "name": "Vigilant View",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 26",
    "runeforging": [],
    "section": "Other",
    "slug": "Vigilant_View",
    "sourceUrl": "https://poe2db.tw/us/Vigilant_View",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Topaz Ring",
    "baseImplicitMods": [
      "+(20-30)% to Lightning Resistance"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Forged by three brothers",
      "so that they may recognize each other",
      "across any distance of time or travel."
    ],
    "key": "call of the brotherhood topaz ring",
    "level": 32,
    "mods": [
      "+(10-20) to Intelligence",
      "(25-35)% increased Mana Regeneration Rate",
      "(20-30)% increased Freeze Buildup",
      "100% of Lightning Damage Converted to Cold Damage"
    ],
    "name": "Call of the Brotherhood",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 32",
    "runeforging": [],
    "section": "Other",
    "slug": "Call_of_the_Brotherhood",
    "sourceUrl": "https://poe2db.tw/us/Call_of_the_Brotherhood",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Pearl Ring",
    "baseImplicitMods": [
      "(7-10)% increased Cast Speed"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Power comes to those who seek",
      "Death comes to those who reach"
    ],
    "key": "evergrasping ring pearl ring",
    "level": 32,
    "mods": [
      "+(60-100) to maximum Mana",
      "Allies in your Presence Gain (15-25)% of Damage as Extra Chaos Damage",
      "Enemies in your Presence Gain (6-12)% of Damage as Extra Chaos Damage"
    ],
    "name": "Evergrasping Ring",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 32",
    "runeforging": [],
    "section": "Other",
    "slug": "Evergrasping_Ring",
    "sourceUrl": "https://poe2db.tw/us/Evergrasping_Ring",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Pearl Ring",
    "baseImplicitMods": [
      "(7-10)% increased Cast Speed"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "When the axe finally fell, Seryl shared his pain,",
      "and the last thought that flickered through his",
      "fading mind was her broken, shattered scream."
    ],
    "key": "heartbound loop pearl ring",
    "level": 32,
    "mods": [
      "Minions have (10-15)% increased maximum Life",
      "(10-15) Life Regeneration per second",
      "(20-40)% increased Mana Regeneration Rate",
      "300 Physical Damage taken on Minion Death",
      "Minions Revive (10-15)% faster"
    ],
    "name": "Heartbound Loop",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 32",
    "runeforging": [],
    "section": "Other",
    "slug": "Heartbound_Loop",
    "sourceUrl": "https://poe2db.tw/us/Heartbound_Loop",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Pearl Ring",
    "baseImplicitMods": [
      "(7-10)% increased Cast Speed"
    ],
    "baseProperties": [
      "Vaal Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "They wrap around you until your blood turns as cold as theirs."
    ],
    "key": "snakepit pearl ring",
    "level": 32,
    "mods": [
      "(20-30)% increased Spell Damage",
      "(10-15)% increased Cast Speed",
      "Left ring slot: Projectiles from Spells cannot Chain",
      "Left ring slot: Projectiles from Spells Fork",
      "Right ring slot: Projectiles from Spells Chain +1 times",
      "Right ring slot: Projectiles from Spells cannot Fork",
      "Projectiles from Spells cannot Pierce"
    ],
    "name": "Snakepit",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 32",
    "runeforging": [],
    "section": "Other",
    "slug": "Snakepit",
    "sourceUrl": "https://poe2db.tw/us/Snakepit",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Sapphire Ring",
    "baseImplicitMods": [
      "+(20-30)% to Cold Resistance"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Forged by the last remaining brother",
      "to return all that was once given."
    ],
    "key": "whisper of the brotherhood sapphire ring",
    "level": 32,
    "mods": [
      "(5-10)% increased Skill Speed",
      "+(10-20) to Dexterity",
      "(25-35)% increased Mana Regeneration Rate",
      "100% of Cold Damage Converted to Lightning Damage"
    ],
    "name": "Whisper of the Brotherhood",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 32",
    "runeforging": [],
    "section": "Other",
    "slug": "Whisper_of_the_Brotherhood",
    "sourceUrl": "https://poe2db.tw/us/Whisper_of_the_Brotherhood",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Prismatic Ring",
    "baseImplicitMods": [
      "+(7-10)% to all Elemental Resistances"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "God blesses those who bless themselves."
    ],
    "key": "gifts from above prismatic ring",
    "level": 35,
    "mods": [
      "(20-30)% increased Critical Hit Chance",
      "(20-30)% increased Light Radius",
      "(20-30)% increased Rarity of Items Dropped by Enemies killed with a Critical Hit",
      "You have Consecrated Ground around you while stationary"
    ],
    "name": "Gifts from Above",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 35",
    "runeforging": [],
    "section": "Other",
    "slug": "Gifts_from_Above",
    "sourceUrl": "https://poe2db.tw/us/Gifts_from_Above",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Iron Ring",
    "baseImplicitMods": [
      "Adds 1 to 4 Physical Damage to Attacks"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Those members of the Brotherhood who employ the venom of",
      "Trarthan ice snakes must take great care with the volatile substance."
    ],
    "key": "icefang orbit iron ring",
    "level": 36,
    "mods": [
      "Adds (5-7) to (9-13) Physical Damage to Attacks",
      "+(20-30) to Dexterity",
      "(10-20)% chance to Poison on Hit",
      "All Damage taken from Hits while Poisoned Contributes to Magnitude of Chill on you",
      "All Damage from Hits against Poisoned targets Contributes to Chill Magnitude",
      "(15-25)% increased Magnitude of Poison you inflict"
    ],
    "name": "Icefang Orbit",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 36",
    "runeforging": [],
    "section": "Other",
    "slug": "Icefang_Orbit",
    "sourceUrl": "https://poe2db.tw/us/Icefang_Orbit",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Iron Ring",
    "baseImplicitMods": [
      "Adds 1 to 4 Physical Damage to Attacks"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "There is a way to survive the bite of an ice snake,",
      "but few have the resolve to attempt it."
    ],
    "key": "venopuncture iron ring",
    "level": 36,
    "mods": [
      "Adds (5-7) to (9-13) Physical Damage to Attacks",
      "+(20-30) to Strength",
      "All Damage taken from Hits while Bleeding Contributes to Magnitude of Chill on you",
      "All Damage from Hits against Bleeding targets Contributes to Chill Magnitude",
      "(10-20)% chance to inflict Bleeding on Hit",
      "(15-25)% increased Magnitude of Bleeding you inflict"
    ],
    "name": "Venopuncture",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 36",
    "runeforging": [],
    "section": "Other",
    "slug": "Venopuncture",
    "sourceUrl": "https://poe2db.tw/us/Venopuncture",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Gold Ring",
    "baseImplicitMods": [
      "(6-15)% increased Rarity of Items found"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Danger is the price of wealth."
    ],
    "key": "andvarius gold ring",
    "level": 40,
    "mods": [
      "(50-70)% increased Rarity of Items found",
      "+10 to Dexterity",
      "-20% to all Elemental Resistances"
    ],
    "name": "Andvarius",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 40",
    "runeforging": [],
    "section": "Other",
    "slug": "Andvarius",
    "sourceUrl": "https://poe2db.tw/us/Andvarius",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Gold Ring",
    "baseImplicitMods": [
      "(6-15)% increased Rarity of Items found"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "A pact with Prospero always comes at a price."
    ],
    "key": "perandus seal gold ring",
    "level": 40,
    "mods": [
      "+(30-50) to maximum Mana",
      "+(5-10) to all Attributes",
      "(10-15)% increased Quantity of Gold Dropped by Slain Enemies"
    ],
    "name": "Perandus Seal",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 40",
    "runeforging": [],
    "section": "Other",
    "slug": "Perandus_Seal",
    "sourceUrl": "https://poe2db.tw/us/Perandus_Seal",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Ring",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The Vaal protected those who integrated into their",
      "culture. Many neighbours became one. Sekhema Safrin",
      "vowed the Maraketh identity would remain resolute."
    ],
    "key": "safrin's resolve ring",
    "level": 40,
    "mods": [
      "You can only Socket Ruby Jewels in this item",
      "(10-20)% increased Rarity of Items found",
      "+(10-20) to all Attributes",
      "+(5-10)% to Cold and Lightning Resistances per Equipped Item with a Fire Resistance Modifier",
      "Has 1 Jewel Socket (Hidden)"
    ],
    "name": "Safrin's Resolve",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 40",
    "runeforging": [],
    "section": "Other",
    "slug": "Safrins_Resolve",
    "sourceUrl": "https://poe2db.tw/us/Safrins_Resolve",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Ring",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The relative peace under the fledgling Empire saw",
      "the first Sekhema to choose, in her resplendent age and",
      "wisdom, to step down. The role of Zaitema was born."
    ],
    "key": "zaida's longevity ring",
    "level": 40,
    "mods": [
      "You can only Socket Emerald Jewels in this item",
      "(10-20)% increased Rarity of Items found",
      "+(10-20) to all Attributes",
      "+(5-10)% to Fire and Lightning Resistances per Equipped Item with a Cold Resistance Modifier",
      "Has 1 Jewel Socket (Hidden)"
    ],
    "name": "Zaida's Longevity",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 40",
    "runeforging": [],
    "section": "Other",
    "slug": "Zaidas_Longevity",
    "sourceUrl": "https://poe2db.tw/us/Zaidas_Longevity",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Two-Stone Ring",
    "baseImplicitMods": [
      "+(12-16)% to Cold and Lightning Resistances"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"Berek hid from Storm's lightning wrath",
      "In the embrace of oblivious Frost",
      "Repelled by ice, blinded by blizzards",
      "Storm raged in vain",
      "While Berek slept.\"",
      "- Berek and the Untamed"
    ],
    "key": "berek's grip two-stone ring",
    "level": 42,
    "mods": [
      "+(10-20) to Dexterity and Intelligence",
      "+(10-20)% to Cold and Lightning Resistances",
      "Hits against you have (35-50)% reduced Critical Hit Chance while you are Chilled",
      "Wind Skills which can be boosted by Elemental Ground Surfaces countas being boosted by Shocked Ground"
    ],
    "name": "Berek's Grip",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 42",
    "runeforging": [],
    "section": "Other",
    "slug": "Bereks_Grip",
    "sourceUrl": "https://poe2db.tw/us/Bereks_Grip",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Two-Stone Ring",
    "baseImplicitMods": [
      "+(12-16)% to Fire and Cold Resistances"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"From Frost's ice-bound pass",
      "Berek taunted and jeered",
      "Until furious Flame scaled the mountain",
      "Berek escaped through the thaw",
      "And Frost's tortured moans.\"",
      "- Berek and the Untamed"
    ],
    "key": "berek's pass two-stone ring",
    "level": 42,
    "mods": [
      "+(10-20) to Strength and Intelligence",
      "+(10-20)% to Fire and Cold Resistances",
      "Regenerate (1-2)% of maximum Life per second while Ignited",
      "Wind Skills which can be boosted by Elemental Ground Surfaces countas being boosted by Chilled Ground"
    ],
    "name": "Berek's Pass",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 42",
    "runeforging": [],
    "section": "Other",
    "slug": "Bereks_Pass",
    "sourceUrl": "https://poe2db.tw/us/Bereks_Pass",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Two-Stone Ring",
    "baseImplicitMods": [
      "+(12-16)% to Fire and Lightning Resistances"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"With Flame licking at his heels",
      "Berek berated the clouds",
      "Until vengeful Storm spewed forth his rains",
      "And Berek held on tight",
      "As Fire screamed and steamed",
      "And fled.\"",
      "- Berek and the Untamed"
    ],
    "key": "berek's respite two-stone ring",
    "level": 42,
    "mods": [
      "+(10-20) to Strength and Dexterity",
      "+(10-20)% to Fire and Lightning Resistances",
      "(15-25)% increased Critical Damage Bonus while Shocked",
      "Wind Skills which can be boosted by Elemental Ground Surfaces countas being boosted by Ignited Ground"
    ],
    "name": "Berek's Respite",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 42",
    "runeforging": [],
    "section": "Other",
    "slug": "Bereks_Respite",
    "sourceUrl": "https://poe2db.tw/us/Bereks_Respite",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Prismatic Ring",
    "baseImplicitMods": [
      "+(7-10)% to all Elemental Resistances"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"Moon after moon did Berek make fools",
      "Of the great and Untamed Three",
      "Until malice for a Brother",
      "Slew the hatred of the Other",
      "And Berek did hunt",
      "Alone and free.\"",
      "- Berek and the Untamed"
    ],
    "key": "the taming prismatic ring",
    "level": 42,
    "mods": [
      "+(10-20)% to all Elemental Resistances",
      "(10-20)% increased Damage for each type of Elemental Ailment on Enemy",
      "Wind Skills which can be boosted by Elemental Ground Surfaces can be boosted by multiple Elemental Ground Surfaces",
      "Wind Skills which can be boosted by Elemental Ground Surfaces countas being boosted by Ignited, Shocked, and Chilled Ground"
    ],
    "name": "The Taming",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 42",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Taming",
    "sourceUrl": "https://poe2db.tw/us/The_Taming",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Iron Ring",
    "baseImplicitMods": [
      "Adds 1 to 4 Physical Damage to Attacks"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Agony brings clarity to those of pure mind."
    ],
    "key": "prized pain iron ring",
    "level": 48,
    "mods": [
      "+(20-30) to Strength",
      "Skills Gain 10% of Mana Cost as Extra Life Cost",
      "(24-35) to (36-53) Physical Thorns damage",
      "(15-25)% chance to deal your Thorns Damage to Enemies you Hit with Melee Attacks"
    ],
    "name": "Prized Pain",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 48",
    "runeforging": [],
    "section": "Other",
    "slug": "Prized_Pain",
    "sourceUrl": "https://poe2db.tw/us/Prized_Pain",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Unset Ring",
    "baseImplicitMods": [
      "Grants 1 additional Skill Slots"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"All Beidat desires is a foothold, a grip on your flesh,",
      "on the world... he will offer you anything to get it...\"",
      "- Rantings of a Templar prisoner, page thirty"
    ],
    "key": "bursting decay unset ring",
    "level": 60,
    "mods": [
      "(15-25)% increased Rarity of Items found",
      "+(17-23)% to Chaos Resistance",
      "Lose 5% of maximum Life per second",
      "Attacks have added Physical damage equal to 3% of maximum Life"
    ],
    "name": "Bursting Decay",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 60",
    "runeforging": [],
    "section": "Other",
    "slug": "Bursting_Decay",
    "sourceUrl": "https://poe2db.tw/us/Bursting_Decay",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Gold Ring",
    "baseImplicitMods": [
      "(6-15)% increased Rarity of Items found"
    ],
    "baseProperties": [
      "Ring"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "In a blaze of glory,",
      "An anomaly defying all odds",
      "The \"unkillable\" beast met the divine",
      "And Ventor met his latest trophy."
    ],
    "key": "ventor's gamble gold ring",
    "level": 64,
    "mods": [
      "+(0-80) to maximum Life",
      "+(0-20) to Spirit",
      "(-25-25)% reduced Rarity of Items found",
      "(-40-40)% to Fire Resistance",
      "(-40-40)% to Cold Resistance",
      "(-40-40)% to Lightning Resistance"
    ],
    "name": "Ventor's Gamble",
    "officialIcon": "",
    "pool": "Rings",
    "requirements": "Requires: Level 64",
    "runeforging": [],
    "section": "Other",
    "slug": "Ventors_Gamble",
    "sourceUrl": "https://poe2db.tw/us/Ventors_Gamble",
    "type": "Rings",
    "verification": "embedded"
  },
  {
    "base": "Rattling Sceptre",
    "baseImplicitMods": [
      "Grants Skill: Skeletal Warrior"
    ],
    "baseProperties": [
      "Sceptre",
      "Spirit: 100"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Rare is the Necromancer who leads",
      "his undead armies from the front."
    ],
    "key": "the dark defiler rattling sceptre",
    "level": 1,
    "mods": [
      "+(20-30) to maximum Mana",
      "+(5-10) to Intelligence",
      "(10-30)% increased Mana Regeneration Rate",
      "Gain 5% of Damage as Chaos Damage per Undead Minion"
    ],
    "name": "The Dark Defiler",
    "officialIcon": "",
    "pool": "Sceptres",
    "requirements": "Requires: Level 1",
    "runeforging": [],
    "section": "Weapons",
    "slug": "The_Dark_Defiler",
    "sourceUrl": "https://poe2db.tw/us/The_Dark_Defiler",
    "type": "Sceptres",
    "verification": "embedded"
  },
  {
    "base": "Omen Sceptre",
    "baseImplicitMods": [
      "Grants Skill: Malice"
    ],
    "baseProperties": [
      "Sceptre",
      "Spirit: 100"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Tale-women may not fight directly,",
      "for they have a much higher purpose."
    ],
    "key": "font of power omen sceptre",
    "level": 16,
    "mods": [
      "(30-50)% increased Spirit",
      "+(40-60) to maximum Mana",
      "(20-30)% increased Mana Regeneration Rate",
      "When a Party Member in your Presence Casts a Spell, youSacrifice 20% of Mana and they Leech that Mana"
    ],
    "name": "Font of Power",
    "officialIcon": "",
    "pool": "Sceptres",
    "requirements": "Requires: Level 16, 12 Str, 25 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Font_of_Power",
    "sourceUrl": "https://poe2db.tw/us/Font_of_Power",
    "type": "Sceptres",
    "verification": "embedded"
  },
  {
    "base": "Shrine Sceptre",
    "baseImplicitMods": [
      "Grants Skill: Purity of Fire"
    ],
    "baseProperties": [
      "Sceptre",
      "Spirit: 100"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Fire destroys, but fire also purifies.",
      "Life always springs anew."
    ],
    "key": "sacred flame shrine sceptre",
    "level": 55,
    "mods": [
      "Gain (40-60)% of Damage as Extra Fire Damage",
      "Allies in your Presence Regenerate (2-3)% of their Maximum Life per second",
      "Allies in your Presence Gain (20-30)% of Damage as Extra Fire Damage",
      "Enemies in your Presence Resist Elemental Damage based on their Lowest Resistance"
    ],
    "name": "Sacred Flame",
    "officialIcon": "",
    "pool": "Sceptres",
    "requirements": "Requires: Level 55, 17 Str, 38 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Sacred_Flame",
    "sourceUrl": "https://poe2db.tw/us/Sacred_Flame",
    "type": "Sceptres",
    "verification": "embedded"
  },
  {
    "base": "Stoic Sceptre",
    "baseImplicitMods": [
      "Grants Skill: Discipline",
      "Grants Skill: Level 14 Azmerian Wolf"
    ],
    "baseProperties": [
      "Sceptre",
      "Spirit: 100"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "Darkness howls through ancient bones, a wistful cry",
      "on hollow winds. The moon listens. The pack gathers."
    ],
    "key": "sylvan's effigy stoic sceptre",
    "level": 62,
    "mods": [
      "(50-75)% increased Spirit",
      "Allies in your Presence Regenerate (50-100) Life per second",
      "+(6-12) to all Attributes",
      "Companions deal (50-100)% increased damage to your Marked targets",
      "You can have any number of Companions of different types",
      "discipline art variation [1]"
    ],
    "name": "Sylvan's Effigy",
    "officialIcon": "",
    "pool": "Sceptres",
    "requirements": "Requires: Level 62, 12 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Sylvans_Effigy",
    "sourceUrl": "https://poe2db.tw/us/Sylvans_Effigy",
    "type": "Sceptres",
    "verification": "embedded"
  },
  {
    "base": "Shrine Sceptre",
    "baseImplicitMods": [
      "Grants Skill: Purity of Ice"
    ],
    "baseProperties": [
      "Sceptre",
      "Spirit: 100"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "\"With piercing eyes, you saw through the Stillness.",
      "Undulating as one, you gloriously covered all in white.",
      "But... I can bear you no longer.\"",
      "The Dreamer whispered with fogging breath, ice creeping down his hand."
    ],
    "key": "guiding palm of the eye shrine sceptre",
    "level": 65,
    "mods": [
      "Gain 25% of Damage as Extra Cold Damage",
      "Allies in your Presence deal (15-23) to (28-35) added Attack Cold Damage",
      "50% of your Base Life Regeneration is granted to Allies in your Presence",
      "+(20-30) to Intelligence",
      "25% increased Light Radius",
      "Grants effect of Guided Freezing Shrine"
    ],
    "name": "Guiding Palm of the Eye",
    "officialIcon": "",
    "pool": "Sceptres",
    "requirements": "Requires: Level 65, 17 Str, 38 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Guiding_Palm_of_the_Eye",
    "sourceUrl": "https://poe2db.tw/us/Guiding_Palm_of_the_Eye",
    "type": "Sceptres",
    "verification": "embedded"
  },
  {
    "base": "Shrine Sceptre",
    "baseImplicitMods": [
      "Grants Skill: Purity of Fire"
    ],
    "baseProperties": [
      "Sceptre",
      "Spirit: 100"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "\"Power of the Red Pyre! Flaming Heart of the Hive!",
      "I release your burning message to rest here, forevermore.\"",
      "The Dreamer declared, casting out the lingering dark embers within him."
    ],
    "key": "guiding palm of the heart shrine sceptre",
    "level": 65,
    "mods": [
      "Gain 25% of Damage as Extra Fire Damage",
      "Allies in your Presence deal (15-23) to (28-35) added Attack Fire Damage",
      "50% of your Base Life Regeneration is granted to Allies in your Presence",
      "+(20-30) to Strength",
      "25% increased Light Radius",
      "Grants effect of Guided Meteoric Shrine"
    ],
    "name": "Guiding Palm of the Heart",
    "officialIcon": "",
    "pool": "Sceptres",
    "requirements": "Requires: Level 65, 17 Str, 38 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Guiding_Palm_of_the_Heart",
    "sourceUrl": "https://poe2db.tw/us/Guiding_Palm_of_the_Heart",
    "type": "Sceptres",
    "verification": "embedded"
  },
  {
    "base": "Shrine Sceptre",
    "baseImplicitMods": [
      "Grants Skill: Purity of Lightning"
    ],
    "baseProperties": [
      "Sceptre",
      "Spirit: 100"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "\"Deep in thought, you would tremble the very air before you.",
      "Wreathed in light, you nurtured them all.",
      "And yet... Your nature became you.\"",
      "The Dreamer mused with aching heart, as remnants of forking tendrils burst forth."
    ],
    "key": "guiding palm of the mind shrine sceptre",
    "level": 65,
    "mods": [
      "Gain 25% of Damage as Extra Lightning Damage",
      "Allies in your Presence deal 1 to (56-70) added Attack Lightning Damage",
      "50% of your Base Life Regeneration is granted to Allies in your Presence",
      "+(20-30) to Dexterity",
      "25% increased Light Radius",
      "Grants effect of Guided Tempest Shrine"
    ],
    "name": "Guiding Palm of the Mind",
    "officialIcon": "",
    "pool": "Sceptres",
    "requirements": "Requires: Level 65, 17 Str, 38 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Guiding_Palm_of_the_Mind",
    "sourceUrl": "https://poe2db.tw/us/Guiding_Palm_of_the_Mind",
    "type": "Sceptres",
    "verification": "embedded"
  },
  {
    "base": "Shrine Sceptre",
    "baseImplicitMods": [
      "Grants Skill: Impurity"
    ],
    "baseProperties": [
      "Sceptre",
      "Spirit: 100"
    ],
    "basePropertyStyles": [
      null,
      0
    ],
    "flavourText": [
      "\"We sometimes fail. We sometimes succeed. Who determines one from the other?",
      "I now know we can never be made One, if we are bore of differing desires.",
      "And yet, I have hope for a new truth. And I will see it... made real.\"",
      "- The Benevolent Dreamer"
    ],
    "key": "palm of the dreamer shrine sceptre",
    "level": 65,
    "mods": [
      "Allies in your Presence deal (13-17) to (25-37) added Attack Chaos Damage",
      "+(7-13) to all Attributes",
      "23% reduced Light Radius",
      "(-13-13)% reduced Skill Effect Duration",
      "Gain 27% of Damage as Extra Chaos Damage",
      "Grants effect of Dreaming Gloom Shrine"
    ],
    "name": "Palm of the Dreamer",
    "officialIcon": "",
    "pool": "Sceptres",
    "requirements": "Requires: Level 65, 17 Str, 38 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Palm_of_the_Dreamer",
    "sourceUrl": "https://poe2db.tw/us/Palm_of_the_Dreamer",
    "type": "Sceptres",
    "verification": "embedded"
  },
  {
    "base": "Blazon Crest Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Ezomyte Shield",
      "Armour: 13-15",
      "Energy Shield: 8-9",
      "Block Chance: 28.75-30%",
      "Base Movement Speed: -0.015"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0,
      0
    ],
    "flavourText": [
      "May your resolve never waver."
    ],
    "key": "alkem eira blazon crest shield",
    "level": 1,
    "mods": [
      "(15-20)% increased Block chance",
      "(30-50)% increased Armour and Energy Shield",
      "+(50-70) to maximum Mana",
      "Damage Blocked is Recouped as Mana"
    ],
    "name": "Alkem Eira",
    "officialIcon": "",
    "pool": "Shields_str_int",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Alkem Eira Blazon Crest Shield, Verisium x380, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered blazon crest shield",
        "label": "Runemastered Blazon Crest Shield",
        "level": 40,
        "properties": [
          "Block chance: 25%",
          "Armour: 43",
          "Energy Shield: 13",
          "Base Movement Speed: -0.015",
          "Runic Ward: 47"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 32 Str, 32 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Alkem_Eira",
    "sourceUrl": "https://poe2db.tw/us/Alkem_Eira",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Hardwood Targe",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Shield",
      "Armour: 16-20",
      "Evasion Rating: 11-14",
      "Block Chance: 25%",
      "Base Movement Speed: -0.015"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0,
      0
    ],
    "flavourText": [
      "The unending carnage of war",
      "mercilessly grinds away",
      "at body and mind."
    ],
    "key": "arvil's wheel hardwood targe",
    "level": 1,
    "mods": [
      "(60-100)% increased Armour and Evasion",
      "+(40-60) to maximum Life",
      "+(40-60) to maximum Mana",
      "Lose 1% of maximum Life on Kill",
      "Lose 1% of maximum Mana on Kill",
      "(30-50)% increased Skill Effect Duration"
    ],
    "name": "Arvil's Wheel",
    "officialIcon": "",
    "pool": "Shields_str_dex",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Arvil's Wheel Hardwood Targe, Verisium x220, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered hardwood targe",
        "label": "Runemastered Hardwood Targe",
        "level": 38,
        "properties": [
          "Block chance: 25%",
          "Armour: 55",
          "Evasion Rating: 49",
          "Base Movement Speed: -0.015",
          "Runic Ward: 23"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 31 Str, 31 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Arvils_Wheel",
    "sourceUrl": "https://poe2db.tw/us/Arvils_Wheel",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Splintered Tower Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Ezomyte Shield",
      "Armour: 29-32",
      "Block Chance: 26%",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "Praetor Draven knew his only chance to subjugate",
      "the Ezomytes was to catch them unaware."
    ],
    "key": "dionadair splintered tower shield",
    "level": 1,
    "mods": [
      "(60-80)% increased Armour",
      "+(10-15) to Strength",
      "(3-5) Life Regeneration per second",
      "20% reduced Stun Threshold",
      "Double Stun Threshold while Shield is Raised"
    ],
    "name": "Dionadair",
    "officialIcon": "",
    "pool": "Shields_str",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Dionadair Splintered Tower Shield, Verisium x220, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered splintered tower shield",
        "label": "Runemastered Splintered Tower Shield",
        "level": 38,
        "properties": [
          "Block chance: 26%",
          "Armour: 100",
          "Base Movement Speed: -0.03",
          "Runic Ward: 23"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Dionadair",
    "sourceUrl": "https://poe2db.tw/us/Dionadair",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Painted Tower Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Ezomyte Shield",
      "Armour: 33",
      "Block Chance: 26%",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "The Counts of Ogham share a",
      "legacy of cunning and power."
    ],
    "key": "wulfsbane painted tower shield",
    "level": 6,
    "mods": [
      "+(40-60) to maximum Life",
      "+(10-15) to Strength",
      "+(60-80) to Stun Threshold",
      "Intimidate Enemies on Block for 8 seconds"
    ],
    "name": "Wulfsbane",
    "officialIcon": "",
    "pool": "Shields_str",
    "requirements": "Requires: Level 6, 11 Str",
    "runeforging": [
      {
        "cost": "Cost: Wulfsbane Painted Tower Shield, Verisium x230, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered painted tower shield",
        "label": "Runemastered Painted Tower Shield",
        "level": 38,
        "properties": [
          "Block chance: 26%",
          "Armour: 63",
          "Base Movement Speed: -0.03",
          "Runic Ward: 57"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Wulfsbane",
    "sourceUrl": "https://poe2db.tw/us/Wulfsbane",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Sigil Crest Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Ezomyte Shield",
      "Armour: 36-44",
      "Energy Shield: 16-20",
      "Block Chance: 30-32.5%",
      "Base Movement Speed: -0.015"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0,
      0
    ],
    "flavourText": [
      "The druids swore to protect the Grelwood with their very lives."
    ],
    "key": "oaksworn sigil crest shield",
    "level": 7,
    "mods": [
      "(20-30)% increased Block chance",
      "(80-120)% increased Armour and Energy Shield",
      "+(17-23)% to Chaos Resistance",
      "50% increased Life Regeneration rate"
    ],
    "name": "Oaksworn",
    "officialIcon": "",
    "pool": "Shields_str_int",
    "requirements": "Requires: Level 7, 8 Str, 8 Int",
    "runeforging": [
      {
        "cost": "Cost: Oaksworn Sigil Crest Shield, Verisium x230, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered sigil crest shield",
        "label": "Runemastered Sigil Crest Shield",
        "level": 40,
        "properties": [
          "Block chance: 25%",
          "Armour: 65",
          "Energy Shield: 19",
          "Base Movement Speed: -0.015",
          "Runic Ward: 12"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 32 Str, 32 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Oaksworn",
    "sourceUrl": "https://poe2db.tw/us/Oaksworn",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Braced Tower Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Shield",
      "Armour: 100-125",
      "Block Chance: 46.8-52%",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "Welcome to Wraeclast."
    ],
    "key": "doomgate braced tower shield",
    "level": 12,
    "mods": [
      "(80-100)% increased Block chance",
      "(100-150)% increased Armour",
      "+(13-17)% to Chaos Resistance",
      "You take (25-40)% of damage from Blocked Hits",
      "Enemies are Culled on Block"
    ],
    "name": "Doomgate",
    "officialIcon": "",
    "pool": "Shields_str",
    "requirements": "Requires: Level 12, 19 Str",
    "runeforging": [
      {
        "cost": "Cost: Doomgate Braced Tower Shield, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered braced tower shield",
        "label": "Runemastered Braced Tower Shield",
        "level": 38,
        "properties": [
          "Block chance: 26%",
          "Armour: 88",
          "Base Movement Speed: -0.03",
          "Runic Ward: 34"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Doomgate",
    "sourceUrl": "https://poe2db.tw/us/Doomgate",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Emblem Crest Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Shield",
      "Armour: 34",
      "Energy Shield: 12",
      "Block Chance: 25%",
      "Base Movement Speed: -0.015"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0,
      0
    ],
    "flavourText": [
      "A swift mind solves problems before they occur."
    ],
    "key": "saffell's frame emblem crest shield",
    "level": 16,
    "mods": [
      "+(15-25)% to Fire Resistance",
      "+(15-25)% to Cold Resistance",
      "+(15-25)% to Lightning Resistance",
      "Cannot Block",
      "Modifiers to Maximum Block Chance instead apply to Maximum Resistances"
    ],
    "name": "Saffell's Frame",
    "officialIcon": "",
    "pool": "Shields_str_int",
    "requirements": "Requires: Level 16, 15 Str, 15 Int",
    "runeforging": [
      {
        "cost": "Cost: Saffell's Frame Emblem Crest Shield, Verisium x420, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered emblem crest shield",
        "label": "Runemastered Emblem Crest Shield",
        "level": 38,
        "properties": [
          "Block chance: 25%",
          "Armour: 48",
          "Energy Shield: 14",
          "Base Movement Speed: -0.015",
          "Runic Ward: 34"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 31 Str, 31 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Saffells_Frame",
    "sourceUrl": "https://poe2db.tw/us/Saffells_Frame",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Barricade Tower Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Shield",
      "Armour: 99-136",
      "Block Chance: 26%",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"Beyond fire, blood, and nightmare,",
      "the Saviour will build Utopia.\""
    ],
    "key": "window to paradise barricade tower shield",
    "level": 16,
    "mods": [
      "(60-120)% increased Armour",
      "+(60-100) to maximum Mana",
      "+(10-15)% to all Elemental Resistances",
      "Inflict Elemental Exposure to Enemies 3 metres in front of youfor 4 seconds, every 0.25 seconds while raised"
    ],
    "name": "Window to Paradise",
    "officialIcon": "",
    "pool": "Shields_str",
    "requirements": "Requires: Level 16, 25 Str",
    "runeforging": [
      {
        "cost": "Cost: Window to Paradise Barricade Tower Shield, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered barricade tower shield",
        "label": "Runemastered Barricade Tower Shield",
        "level": 38,
        "properties": [
          "Block chance: 26%",
          "Armour: 94",
          "Base Movement Speed: -0.03",
          "Runic Ward: 28"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 54 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Window_to_Paradise",
    "sourceUrl": "https://poe2db.tw/us/Window_to_Paradise",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Crescent Targe",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Shield",
      "Armour: 50",
      "Evasion Rating: 44",
      "Block Chance: 25%",
      "Base Movement Speed: -0.015"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0,
      0
    ],
    "flavourText": [
      "Ride the western wind, and take flight."
    ],
    "key": "feathered fortress crescent targe",
    "level": 26,
    "mods": [
      "+(20-30) to Strength",
      "+(20-30) to Dexterity",
      "+(20-30)% to Fire Resistance",
      "+(20-30)% to Cold Resistance",
      "No Movement Speed Penalty while Shield is Raised"
    ],
    "name": "Feathered Fortress",
    "officialIcon": "",
    "pool": "Shields_str_dex",
    "requirements": "Requires: Level 26, 22 Str, 22 Dex",
    "runeforging": [
      {
        "cost": "Cost: Feathered Fortress Crescent Targe, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered crescent targe",
        "label": "Runemastered Crescent Targe",
        "level": 38,
        "properties": [
          "Block chance: 25%",
          "Armour: 52",
          "Evasion Rating: 46",
          "Base Movement Speed: -0.015",
          "Runic Ward: 28"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 31 Str, 31 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Feathered_Fortress",
    "sourceUrl": "https://poe2db.tw/us/Feathered_Fortress",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Jingling Crest Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Shield",
      "Armour: 85-106",
      "Energy Shield: 27-34",
      "Block Chance: 25%",
      "Base Movement Speed: -0.015"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0,
      0
    ],
    "flavourText": [
      "When the Red Sekhema called,",
      "the Ardura were the first to answer."
    ],
    "key": "crest of ardura jingling crest shield",
    "level": 28,
    "mods": [
      "(60-100)% increased Armour and Energy Shield",
      "+(10-20) to Intelligence",
      "(30-50)% increased Mana Regeneration Rate",
      "(30-50)% increased Cooldown Recovery Rate"
    ],
    "name": "Crest of Ardura",
    "officialIcon": "",
    "pool": "Shields_str_int",
    "requirements": "Requires: Level 28, 23 Str, 23 Int",
    "runeforging": [
      {
        "cost": "Cost: Crest of Ardura Jingling Crest Shield, Verisium x250, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered jingling crest shield",
        "label": "Runemastered Jingling Crest Shield",
        "level": 38,
        "properties": [
          "Block chance: 25%",
          "Armour: 41",
          "Energy Shield: 12",
          "Base Movement Speed: -0.015",
          "Runic Ward: 45"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 31 Str, 31 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Crest_of_Ardura",
    "sourceUrl": "https://poe2db.tw/us/Crest_of_Ardura",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Rampart Tower Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Shield",
      "Armour: 154-192",
      "Block Chance: 28.6-29.9%",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "A true predator does not chase; It waits."
    ],
    "key": "lycosidae rampart tower shield",
    "level": 28,
    "mods": [
      "(10-15)% increased Block chance",
      "(60-100)% increased Armour",
      "Accuracy Rating is Doubled",
      "Blocking Damage Poisons the Enemy as though dealing 200 Base Chaos Damage"
    ],
    "name": "Lycosidae",
    "officialIcon": "",
    "pool": "Shields_str",
    "requirements": "Requires: Level 28, 42 Str",
    "runeforging": [
      {
        "cost": "Cost: Lycosidae Rampart Tower Shield, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered rampart tower shield",
        "label": "Runemastered Rampart Tower Shield",
        "level": 40,
        "properties": [
          "Block chance: 26%",
          "Armour: 98",
          "Base Movement Speed: -0.03",
          "Runic Ward: 29"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 58 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Lycosidae",
    "sourceUrl": "https://poe2db.tw/us/Lycosidae",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Heraldric Tower Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Shield",
      "Armour: 178-222",
      "Block Chance: 28.6-29.9%",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "Blood shed is blood shared."
    ],
    "key": "redblade banner heraldric tower shield",
    "level": 33,
    "mods": [
      "(10-15)% increased Block chance",
      "(60-100)% increased Armour",
      "+(20-30) to Strength",
      "+(100-150) to Stun Threshold",
      "Enemies in your Presence count as having double Power"
    ],
    "name": "Redblade Banner",
    "officialIcon": "",
    "pool": "Shields_str",
    "requirements": "Requires: Level 33, 48 Str",
    "runeforging": [
      {
        "cost": "Cost: Redblade Banner Heraldric Tower Shield, Verisium x800, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered heraldric tower shield",
        "label": "Runemastered Heraldric Tower Shield",
        "level": 50,
        "properties": [
          "Block chance: 26%",
          "Armour: 96",
          "Base Movement Speed: -0.03",
          "Runic Ward: 42"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 50, 71 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Redblade_Banner",
    "sourceUrl": "https://poe2db.tw/us/Redblade_Banner",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Omen Crest Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Vaal Shield",
      "Armour: 66",
      "Energy Shield: 20",
      "Block Chance: 25%",
      "Base Movement Speed: -0.015"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0,
      0
    ],
    "flavourText": [
      "My bearer shall be guarded by flame,",
      "for I am the phoenix, forever radiant in glory."
    ],
    "key": "rise of the phoenix omen crest shield",
    "level": 36,
    "mods": [
      "+5% to Maximum Fire Resistance",
      "+(20-25)% to Fire Resistance",
      "+25% to Fire Resistance while on Low Life",
      "Regenerate 3% of maximum Life per second",
      "Regenerate 3% of maximum Life per second while on Low Life"
    ],
    "name": "Rise of the Phoenix",
    "officialIcon": "",
    "pool": "Shields_str_int",
    "requirements": "Requires: Level 36, 30 Str, 30 Int",
    "runeforging": [
      {
        "cost": "Cost: Rise of the Phoenix Omen Crest Shield, Verisium x220, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered omen crest shield",
        "label": "Runemastered Omen Crest Shield",
        "level": 48,
        "properties": [
          "Block chance: 25%",
          "Armour: 42",
          "Energy Shield: 12",
          "Base Movement Speed: -0.015",
          "Runic Ward: 82"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 48, 38 Str, 38 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Rise_of_the_Phoenix",
    "sourceUrl": "https://poe2db.tw/us/Rise_of_the_Phoenix",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Omen Crest Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Vaal Shield",
      "Armour: 286-506",
      "Energy Shield: 87-153",
      "Block Chance: 25%",
      "Base Movement Speed: -0.015"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0,
      0
    ],
    "flavourText": [
      "The Banished Architect sought to employ the darkest secrets of the Vaal."
    ],
    "key": "mahuxotl's machination omen crest shield",
    "level": 48,
    "mods": [
      "(66-333)% increased effect of Socketed Soul Cores",
      "(333-666)% increased Armour and Energy Shield",
      "Everlasting Sacrifice"
    ],
    "name": "Mahuxotl's Machination",
    "officialIcon": "",
    "pool": "Shields_str_int",
    "requirements": "Requires: Level 48, 30 Str, 30 Int",
    "runeforging": [],
    "section": "Armour",
    "slug": "Mahuxotls_Machination",
    "sourceUrl": "https://poe2db.tw/us/Mahuxotls_Machination",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Crucible Tower Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield",
      "Grants Skill: Level 14 Cast on Block"
    ],
    "baseProperties": [
      "Kalguuran Shield",
      "Armour: 435-580",
      "Block Chance: 26%",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "The priests found the Great Shield the night it fell to Middengard,",
      "but it was the smiths who delved into the secrets it held."
    ],
    "key": "svalinn crucible tower shield",
    "level": 60,
    "mods": [
      "+(50-100) to maximum Runic Ward",
      "(200-300)% increased Armour",
      "Chance to Block Damage is Lucky",
      "You take (0-20)% of damage from Blocked Hits"
    ],
    "name": "Svalinn",
    "officialIcon": "",
    "pool": "Shields_str",
    "requirements": "Requires: Level 60, 64 Str",
    "runeforging": [
      {
        "cost": "Cost: Svalinn Crucible Tower Shield, Exceptional Verisium x25, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "Grants Skill: Raise Shield",
          "(15-25)% of Damage is taken from Mana before Life"
        ],
        "key": "runemastered crucible tower shield",
        "label": "Runemastered Crucible Tower Shield",
        "level": 65,
        "properties": [
          "Block chance: 26%",
          "Armour: 162",
          "Base Movement Speed: -0.03",
          "Runic Ward: 35"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 91 Str",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Svalinn Crucible Tower Shield, Exceptional Verisium x25, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "Grants Skill: Raise Shield",
          "(15-25)% of Damage is taken from Mana before Life"
        ],
        "key": "runemastered crucible tower shield",
        "label": "Runemastered Crucible Tower Shield",
        "level": 65,
        "properties": [
          "Block chance: 26%",
          "Armour: 162",
          "Base Movement Speed: -0.03",
          "Runic Ward: 35"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 91 Str",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Svalinn Crucible Tower Shield, Exceptional Verisium x25, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "Grants Skill: Raise Shield",
          "(15-25)% of Damage is taken from Mana before Life"
        ],
        "key": "runemastered crucible tower shield",
        "label": "Runemastered Crucible Tower Shield",
        "level": 65,
        "properties": [
          "Block chance: 26%",
          "Armour: 162",
          "Base Movement Speed: -0.03",
          "Runic Ward: 35"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 91 Str",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Svalinn Crucible Tower Shield, Exceptional Verisium x25, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "Grants Skill: Raise Shield",
          "(15-25)% of Damage is taken from Mana before Life"
        ],
        "key": "runemastered crucible tower shield",
        "label": "Runemastered Crucible Tower Shield",
        "level": 65,
        "properties": [
          "Block chance: 26%",
          "Armour: 162",
          "Base Movement Speed: -0.03",
          "Runic Ward: 35"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 91 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Svalinn",
    "sourceUrl": "https://poe2db.tw/us/Svalinn",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Venerable Defender",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Kalguuran Shield",
      "Armour: 428-535",
      "Evasion Rating: 388-485",
      "Block Chance: 28%",
      "Base Movement Speed: -0.015"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0,
      0
    ],
    "flavourText": [
      "From aeons past, Dannig felt the Runefather's",
      "gaze, challenging him. There is no honour in ease.",
      "True greatness is torn from the jaws of defeat."
    ],
    "key": "eyes of the runefather venerable defender",
    "level": 62,
    "mods": [
      "(300-400)% increased Armour and Evasion",
      "+(40-50)% to Cold Resistance",
      "Off-hand Hits inflict Runefather's Challenge",
      "Inflicts Runefather's Challenge on enemies 6 metres in front of you when raised, no more than once every 2 seconds",
      "Gain 1 Runefather's Boast per Power of targets affected by Runefather's Challenge you kill"
    ],
    "name": "Eyes of the Runefather",
    "officialIcon": "",
    "pool": "Shields_str_dex",
    "requirements": "Requires: Level 62, 64 Str, 64 Dex",
    "runeforging": [
      {
        "cost": "Cost: Eyes of the Runefather Venerable Defender, Verisium x1800, Exceptional Verisium x1, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered venerable defender",
        "label": "Runemastered Venerable Defender",
        "level": 65,
        "properties": [
          "Block chance: 20%",
          "Evasion Rating: 148",
          "Runic Ward: 42"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 107 Dex",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Eyes of the Runefather Venerable Defender, Verisium x1800, Exceptional Verisium x1, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered venerable defender",
        "label": "Runemastered Venerable Defender",
        "level": 65,
        "properties": [
          "Block chance: 20%",
          "Evasion Rating: 148",
          "Runic Ward: 42"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 107 Dex",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Eyes of the Runefather Venerable Defender, Verisium x1800, Exceptional Verisium x1, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered venerable defender",
        "label": "Runemastered Venerable Defender",
        "level": 65,
        "properties": [
          "Block chance: 20%",
          "Evasion Rating: 148",
          "Runic Ward: 42"
        ],
        "propertyStyles": [
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 107 Dex",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Eyes_of_the_Runefather",
    "sourceUrl": "https://poe2db.tw/us/Eyes_of_the_Runefather",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Blacksteel Tower Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Ezomyte Shield",
      "Armour: 406-508",
      "Block Chance: 26%",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "Fire dances with those who doubt",
      "Licks the skin and flesh from the fearful",
      "Where there is no fear",
      "There is no flame"
    ],
    "key": "chernobog's pillar blacksteel tower shield",
    "level": 65,
    "mods": [
      "(100-150)% increased Armour",
      "+(30-40)% to Fire Resistance",
      "+(23-29)% to Chaos Resistance",
      "+(150-200) to Stun Threshold",
      "Gain 1% of damage as Fire damage per 1% Chance to Block"
    ],
    "name": "Chernobog's Pillar",
    "officialIcon": "",
    "pool": "Shields_str",
    "requirements": "Requires: Level 65, 91 Str",
    "runeforging": [
      {
        "cost": "Cost: Chernobog's Pillar Blacksteel Tower Shield, Verisium x5000, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered blacksteel tower shield",
        "label": "Runemastered Blacksteel Tower Shield",
        "level": 65,
        "properties": [
          "Block chance: 26%",
          "Armour: 102",
          "Base Movement Speed: -0.03",
          "Runic Ward: 88"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 91 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Chernobogs_Pillar",
    "sourceUrl": "https://poe2db.tw/us/Chernobogs_Pillar",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Intricate Crest Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Shield",
      "Armour: 280-336",
      "Energy Shield: 78-93",
      "Block Chance: 25%",
      "Base Movement Speed: -0.015"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0,
      0
    ],
    "flavourText": [
      "When blood is paid, the weak think twice."
    ],
    "key": "prism guardian intricate crest shield",
    "level": 65,
    "mods": [
      "(150-200)% increased Armour and Energy Shield",
      "+50 to Spirit",
      "+(20-30) to Dexterity",
      "+(10-20)% to all Elemental Resistances",
      "1% increased Spirit Reservation Efficiency of Buff Skills per 100 Maximum Life"
    ],
    "name": "Prism Guardian",
    "officialIcon": "",
    "pool": "Shields_str_int",
    "requirements": "Requires: Level 65, 50 Str, 50 Int",
    "runeforging": [
      {
        "cost": "Cost: Prism Guardian Intricate Crest Shield, Verisium x3500, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered intricate crest shield",
        "label": "Runemastered Intricate Crest Shield",
        "level": 65,
        "properties": [
          "Block chance: 25%",
          "Armour: 78",
          "Energy Shield: 22",
          "Base Movement Speed: -0.015",
          "Runic Ward: 62"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 50 Str, 50 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Prism_Guardian",
    "sourceUrl": "https://poe2db.tw/us/Prism_Guardian",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Glacial Fortress",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield",
      "Grants Skill: Level 16 Soaring Midnight"
    ],
    "baseProperties": [
      "Shield"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"Upon plains of endless chill,",
      "They Who Never Tire... dominate.",
      "They Who Never Surrender... terrify.",
      "And They Who Lay Beneath... wait for Nightfall.\"",
      "- Tul, She That Silences"
    ],
    "key": "nightfall glacial fortress",
    "level": 70,
    "mods": [
      "+150 Strength Requirement",
      "(10-20)% increased Block chance",
      "(350-450)% increased Armour",
      "+(30-40)% to Cold Resistance",
      "(10-20)% of Fire damage taken as Cold damage",
      "(10-20)% of Lightning damage taken as Cold damage"
    ],
    "name": "Nightfall",
    "officialIcon": "",
    "pool": "Shields_str",
    "requirements": "Requires: Level 70, 249 Str",
    "runeforging": [
      {
        "cost": "Cost: Nightfall Glacial Fortress, Verisium x5500, Exceptional Verisium x2, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered glacial fortress",
        "label": "Runemastered Glacial Fortress",
        "level": 70,
        "properties": [
          "Block chance: 26%",
          "Armour: 203",
          "Base Movement Speed: -0.03",
          "Runic Ward: 53"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 70, 99 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "Nightfall",
    "sourceUrl": "https://poe2db.tw/us/Nightfall",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Vaal Tower Shield",
    "baseImplicitMods": [
      "Grants Skill: Raise Shield"
    ],
    "baseProperties": [
      "Shield",
      "Armour: 610-732",
      "Block Chance: 36.4-41.6%",
      "Base Movement Speed: -0.03"
    ],
    "basePropertyStyles": [
      null,
      0,
      0,
      0
    ],
    "flavourText": [
      "Our hearts cry out",
      "but are silenced by our flesh",
      "and so we give up our flesh."
    ],
    "key": "the surrender vaal tower shield",
    "level": 75,
    "mods": [
      "(40-60)% increased Block chance",
      "(150-200)% increased Armour",
      "+(150-200) to Stun Threshold",
      "Recover 4% of maximum Life when you Block"
    ],
    "name": "The Surrender",
    "officialIcon": "",
    "pool": "Shields_str",
    "requirements": "Requires: Level 75, 107 Str",
    "runeforging": [
      {
        "cost": "Cost: The Surrender Vaal Tower Shield, Verisium x6500, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "Grants Skill: Raise Shield"
        ],
        "key": "runemastered vaal tower shield",
        "label": "Runemastered Vaal Tower Shield",
        "level": 75,
        "properties": [
          "Block chance: 26%",
          "Armour: 203",
          "Base Movement Speed: -0.03",
          "Runic Ward: 70"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 75, 107 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Armour",
    "slug": "The_Surrender",
    "sourceUrl": "https://poe2db.tw/us/The_Surrender",
    "type": "Shields",
    "verification": "embedded"
  },
  {
    "base": "Hardwood Spear",
    "baseImplicitMods": [
      "Grants Skill: Spear Throw"
    ],
    "baseProperties": [
      "Spear",
      "Physical Damage: (7-8) to (15-17)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.6",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "The Baleful Gem's corruption lingers still..."
    ],
    "key": "splinter of lorrata hardwood spear",
    "level": 1,
    "mods": [
      "Adds (2-3) to (6-8) Physical Damage",
      "Deal no Elemental Damage",
      "20% increased Melee Strike Range with this weapon",
      "Any number of Poisons from this Weapon can affect a target at the same time",
      "Always Poison on Hit with this weapon"
    ],
    "name": "Splinter of Lorrata",
    "officialIcon": "",
    "pool": "Spears",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Splinter of Lorrata Hardwood Spear, Exceptional Verisium x35, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "Grants Skill: Spear Throw"
        ],
        "key": "runeforged hardwood spear",
        "label": "Runeforged Hardwood Spear",
        "level": 40,
        "properties": [
          "Physical Damage: 24-45",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.6",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 23 Str, 56 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Splinter_of_Lorrata",
    "sourceUrl": "https://poe2db.tw/us/Splinter_of_Lorrata",
    "type": "Spears",
    "verification": "embedded"
  },
  {
    "base": "Ironhead Spear",
    "baseImplicitMods": [
      "Grants Skill: Spear Throw"
    ],
    "baseProperties": [
      "Ezomyte Spear",
      "Physical Damage: (23-27) to (30-36)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.44-1.36",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "The might of the Eternal Empire was formidable,",
      "but rebels of every culture stood together as one."
    ],
    "key": "tyranny's grip ironhead spear",
    "level": 5,
    "mods": [
      "(150-200)% increased Physical Damage",
      "(10-15)% reduced Attack Speed",
      "+(15-30) to Strength",
      "Strikes deal Splash Damage",
      "Knocks Back Enemies on Hit",
      "Cannot use Projectile Attacks"
    ],
    "name": "Tyranny's Grip",
    "officialIcon": "",
    "pool": "Spears",
    "requirements": "Requires: Level 5, 10 Dex",
    "runeforging": [
      {
        "cost": "Cost: Tyranny's Grip Ironhead Spear, Verisium x225, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Spear Throw"
        ],
        "key": "runeforged ironhead spear",
        "label": "Runeforged Ironhead Spear",
        "level": 38,
        "properties": [
          "Physical Damage: 40-54",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.6",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 23 Str, 54 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Tyrannys_Grip",
    "sourceUrl": "https://poe2db.tw/us/Tyrannys_Grip",
    "type": "Spears",
    "verification": "embedded"
  },
  {
    "base": "Hunting Spear",
    "baseImplicitMods": [
      "Grants Skill: Spear Throw",
      "(15-25)% chance to Maim on Hit"
    ],
    "baseProperties": [
      "Spear",
      "Physical Damage: (23-27) to (39-45)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.71",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "The Sacred Hunt ends with mercy."
    ],
    "key": "chainsting hunting spear",
    "level": 10,
    "mods": [
      "Adds (13-17) to (22-28) Physical Damage",
      "+(100-150) to Accuracy Rating",
      "10% increased Attack Speed",
      "All Damage from Hits with this Weapon Contributes to Pin Buildup",
      "(20-30)% increased Projectile Speed with this Weapon"
    ],
    "name": "Chainsting",
    "officialIcon": "",
    "pool": "Spears",
    "requirements": "Requires: Level 10, 9 Str, 17 Dex",
    "runeforging": [
      {
        "cost": "Cost: Chainsting Hunting Spear, Verisium x220, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Spear Throw",
          "(15-25)% chance to Maim on Hit"
        ],
        "key": "runeforged hunting spear",
        "label": "Runeforged Hunting Spear",
        "level": 38,
        "properties": [
          "Physical Damage: 65-108",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.55",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 23 Str, 54 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Chainsting",
    "sourceUrl": "https://poe2db.tw/us/Chainsting",
    "type": "Spears",
    "verification": "embedded"
  },
  {
    "base": "Winged Spear",
    "baseImplicitMods": [
      "Grants Skill: Spear Throw"
    ],
    "baseProperties": [
      "Spear",
      "Physical Damage: 12-22",
      "Lightning Damage: (1) to (80-120)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.96-2.21",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      6,
      0,
      0,
      0
    ],
    "flavourText": [
      "Heads fall to the sand, just as the star fell from the sky"
    ],
    "key": "skysliver winged spear",
    "level": 16,
    "mods": [
      "No Physical Damage",
      "Adds 1 to (80-120) Lightning Damage",
      "(15-30)% increased Attack Speed",
      "(50-100)% increased chance to Shock",
      "Rolls only the minimum or maximum Damage value for each Damage Type"
    ],
    "name": "Skysliver",
    "officialIcon": "",
    "pool": "Spears",
    "requirements": "Requires: Level 16, 12 Str, 25 Dex",
    "runeforging": [
      {
        "cost": "Cost: Skysliver Winged Spear, Verisium x395, Vorana's Crest of the Scythe x1",
        "implicitMods": [
          "Grants Skill: Spear Throw",
          "local weapon implicit hidden % base damage is lightning [100]"
        ],
        "key": "runeforged winged spear",
        "label": "Runeforged Winged Spear",
        "level": 40,
        "properties": [
          "Lightning Damage: 0-125",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.7",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          6,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 23 Str, 56 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Skysliver",
    "sourceUrl": "https://poe2db.tw/us/Skysliver",
    "type": "Spears",
    "verification": "embedded"
  },
  {
    "base": "War Spear",
    "baseImplicitMods": [
      "Grants Skill: Spear Throw",
      "(25-35)% increased Projectile Speed with this Weapon"
    ],
    "baseProperties": [
      "Spear",
      "Physical Damage: (26-31) to (48-53)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.76-1.92",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"You killed their Golden Sekhema. The Maraketh will think of nothing",
      "but vengeance now.\" - Dimos, Advisor to General Titucius"
    ],
    "key": "daevata's wind war spear",
    "level": 21,
    "mods": [
      "Adds (10-15) to (21-26) Physical Damage",
      "+100 to Evasion Rating",
      "(10-20)% increased Attack Speed",
      "(30-60)% increased Melee Damage if you've dealt a Projectile Attack Hit in the past eight seconds",
      "(30-60)% increased Projectile Damage if you've dealt a Melee Hit in the past eight seconds"
    ],
    "name": "Daevata's Wind",
    "officialIcon": "",
    "pool": "Spears",
    "requirements": "Requires: Level 21, 14 Str, 31 Dex",
    "runeforging": [
      {
        "cost": "Cost: Daevata's Wind War Spear, Verisium x295, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Grants Skill: Spear Throw",
          "(25-35)% increased Projectile Speed with this Weapon"
        ],
        "key": "runeforged war spear",
        "label": "Runeforged War Spear",
        "level": 40,
        "properties": [
          "Physical Damage: 59-98",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.6",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 23 Str, 56 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Daevatas_Wind",
    "sourceUrl": "https://poe2db.tw/us/Daevatas_Wind",
    "type": "Spears",
    "verification": "embedded"
  },
  {
    "base": "Forked Spear",
    "baseImplicitMods": [
      "Grants Skill: Spear Throw"
    ],
    "baseProperties": [
      "Spear",
      "Physical Damage: (27-31) to (68-74)",
      "Critical Hit Chance: 10-13%",
      "Attacks per Second: 1.55",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"In the hands of Orbala, it made a god bleed.\"",
      "- Wranga, tale-woman of the Wahida akhara"
    ],
    "key": "tangletongue forked spear",
    "level": 26,
    "mods": [
      "Adds (14-18) to (30-36) Physical Damage",
      "+(5-8)% to Critical Hit Chance",
      "+(15-25) to Intelligence",
      "Bifurcates Critical Hits",
      "10% of Skill Mana Costs Converted to Life Costs"
    ],
    "name": "Tangletongue",
    "officialIcon": "",
    "pool": "Spears",
    "requirements": "Requires: Level 26, 17 Str, 38 Dex",
    "runeforging": [
      {
        "cost": "Cost: Tangletongue Forked Spear, Exceptional Verisium x30, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "Grants Skill: Spear Throw"
        ],
        "key": "runeforged forked spear",
        "label": "Runeforged Forked Spear",
        "level": 55,
        "properties": [
          "Physical Damage: 8-57",
          "Critical Hit Chance: 7%",
          "Attacks per Second: 1.6",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 31 Str, 76 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Tangletongue",
    "sourceUrl": "https://poe2db.tw/us/Tangletongue",
    "type": "Spears",
    "verification": "embedded"
  },
  {
    "base": "Barbed Spear",
    "baseImplicitMods": [
      "Grants Skill: Spear Throw",
      "Bleeding you inflict deals Damage (10-20)% faster"
    ],
    "baseProperties": [
      "Vaal Spear",
      "Physical Damage: (34-46) to (65-70)",
      "Fire Damage: (33-41) to (47-53)",
      "Critical Hit Chance: 6%",
      "Attacks per Second: 1.5",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      4,
      0,
      0,
      0
    ],
    "flavourText": [
      "Born in a star of man's own make,",
      "fused to her hand by her last mistake."
    ],
    "key": "saitha's spear barbed spear",
    "level": 33,
    "mods": [
      "Adds (14-26) to (27-32) Physical Damage",
      "Adds (33-41) to (47-53) Fire Damage",
      "(15-25)% chance to cause Bleeding on Hit",
      "Aggravating any Bleeding with this Weapon also Aggravates all Ignites on the target",
      "(25-40)% chance to Aggravate Bleeding on Hit"
    ],
    "name": "Saitha's Spear",
    "officialIcon": "",
    "pool": "Spears",
    "requirements": "Requires: Level 33, 20 Str, 47 Dex",
    "runeforging": [
      {
        "cost": "Cost: Saitha's Spear Barbed Spear, Verisium x1600, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "Grants Skill: Spear Throw",
          "Bleeding you inflict deals Damage (10-20)% faster",
          "local weapon implicit hidden % base damage is fire [66]"
        ],
        "key": "runeforged barbed spear",
        "label": "Runeforged Barbed Spear",
        "level": 55,
        "properties": [
          "Physical Damage: 26.52-49.3",
          "Fire Damage: 51.48-95.7",
          "Critical Hit Chance: 6%",
          "Attacks per Second: 1.5",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          4,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 31 Str, 76 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Saithas_Spear",
    "sourceUrl": "https://poe2db.tw/us/Saithas_Spear",
    "type": "Spears",
    "verification": "embedded"
  },
  {
    "base": "Helix Spear",
    "baseImplicitMods": [
      "Grants Skill: Spear Throw",
      "Grants Skill: Level 15 Chaotic Surge"
    ],
    "baseProperties": [
      "Spear",
      "Physical Damage: 37-68",
      "Chaos Damage: (167-201) to (267-333)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.84-1.92",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      7,
      0,
      0,
      0
    ],
    "flavourText": [
      "The spear was specially forged to assassinate Voll,",
      "but Maligaro never got a chance to use it..."
    ],
    "key": "spire of ire helix spear",
    "level": 65,
    "mods": [
      "(15-20)% increased Attack Speed",
      "Leeches (10-20)% of Physical Damage as Life",
      "Adds (167-201) to (267-333) Chaos damage",
      "When you Consume a Charge Trigger Chaotic Surge to gain 2 Chaos Surges",
      "Life Leech recovers based on your Chaos damage instead of Physical damage"
    ],
    "name": "Spire of Ire",
    "officialIcon": "",
    "pool": "Spears",
    "requirements": "Requires: Level 65, 36 Str, 89 Dex",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Spire_of_Ire",
    "sourceUrl": "https://poe2db.tw/us/Spire_of_Ire",
    "type": "Spears",
    "verification": "embedded"
  },
  {
    "base": "Pronged Spear",
    "baseImplicitMods": [
      "Grants Skill: Spear Throw",
      "Grants Skill: Level 17 Shattering Spite"
    ],
    "baseProperties": [
      "Vaal Spear",
      "Physical Damage: (60-66) to (178-196)",
      "Fire Damage: (83-97) to (123-153)",
      "Lightning Damage: (1) to (193-207)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.71-1.8",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      4,
      6,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"My people? I'm not doing this for them.",
      "They belong to me. They want this for me.",
      "Their sacrifice is a gift they give out of love",
      "and adoration... I deserve it. I am their Queen.\""
    ],
    "key": "atziri's contempt pronged spear",
    "level": 72,
    "mods": [
      "(100-120)% increased Physical Damage",
      "Adds (83-97) to (123-153) Fire Damage",
      "Adds 1 to (193-207) Lightning Damage",
      "(10-16)% increased Attack Speed",
      "(60-80)% increased Presence Area of Effect",
      "Spear Skills inflict a Bloodstone Lance on Hit, up to a maximum of 30 on each target"
    ],
    "name": "Atziri's Contempt",
    "officialIcon": "",
    "pool": "Spears",
    "requirements": "Requires: Level 72, 46 Str, 115 Dex",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Atziris_Contempt",
    "sourceUrl": "https://poe2db.tw/us/Atziris_Contempt",
    "type": "Spears",
    "verification": "embedded"
  },
  {
    "base": "Grand Spear",
    "baseImplicitMods": [
      "Grants Skill: Spear Throw",
      "Grants Skill: Level 18 Righteous Descent",
      "25% increased Melee Strike Range with this weapon"
    ],
    "baseProperties": [
      "Spear",
      "Physical Damage: (140-196) to (210-294)",
      "Lightning Damage: (1) to (200-300)",
      "Critical Hit Chance: 10-13%",
      "Attacks per Second: 1.4",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      6,
      0,
      0,
      0
    ],
    "flavourText": [
      "May the Lightless drown in the violence of His devotion."
    ],
    "key": "the ordained grand spear",
    "level": 79,
    "mods": [
      "(150-250)% increased Physical Damage",
      "Adds 1 to (200-300) Lightning Damage",
      "+(5-8)% to Critical Hit Chance",
      "Life Leech recovers based on your Lightning damage as well as Physical damage",
      "Create a Fragment of Divinity in your Presence every 4 seconds"
    ],
    "name": "The Ordained",
    "officialIcon": "",
    "pool": "Spears",
    "requirements": "Requires: Level 79, 68 Str, 109 Dex",
    "runeforging": [],
    "section": "Weapons",
    "slug": "The_Ordained",
    "sourceUrl": "https://poe2db.tw/us/The_Ordained",
    "type": "Spears",
    "verification": "embedded"
  },
  {
    "base": "Ashen Staff",
    "baseImplicitMods": [
      "Grants Skill: Firebolt",
      "Grants Skill: Level 1 Ember Fusillade"
    ],
    "baseProperties": [
      "Ezomyte Stave"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The candlemass tradition was born in a time of darkness and fear."
    ],
    "key": "dusk vigil ashen staff",
    "level": 1,
    "mods": [
      "Gain (30-50)% of Damage as Extra Fire Damage",
      "(80-120)% increased Spell Damage",
      "Gain (5-10) Life per enemy killed",
      "25% increased Mana Regeneration Rate",
      "Trigger Ember Fusillade Skill on casting a Spell"
    ],
    "name": "Dusk Vigil",
    "officialIcon": "",
    "pool": "Staves",
    "requirements": "Requires: Level 1",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Dusk_Vigil",
    "sourceUrl": "https://poe2db.tw/us/Dusk_Vigil",
    "type": "Staves",
    "verification": "embedded"
  },
  {
    "base": "Voltaic Staff",
    "baseImplicitMods": [
      "Grants Skill: Lightning Bolt",
      "Grants Skill: Level 1 Spark"
    ],
    "baseProperties": [
      "Staff"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "An ancient Azmeri staff, overgrown by roots..."
    ],
    "key": "earthbound voltaic staff",
    "level": 2,
    "mods": [
      "(80-120)% increased Spell Damage",
      "(10-20)% increased Cast Speed",
      "(20-30)% increased Mana Regeneration Rate",
      "(20-40)% increased chance to Shock",
      "Trigger Spark Skill on killing a Shocked Enemy"
    ],
    "name": "Earthbound",
    "officialIcon": "",
    "pool": "Staves",
    "requirements": "Requires: Level 2",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Earthbound",
    "sourceUrl": "https://poe2db.tw/us/Earthbound",
    "type": "Staves",
    "verification": "embedded"
  },
  {
    "base": "Gelid Staff",
    "baseImplicitMods": [
      "Grants Skill: Freezing Shards"
    ],
    "baseProperties": [
      "Staff"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Shed by the winged beast of night,",
      "A scaly frost-encrusted thorn.",
      "All who feel its wintry light",
      "Shiver in pain at the frozen dawn."
    ],
    "key": "taryn's shiver gelid staff",
    "level": 2,
    "mods": [
      "(80-120)% increased Spell Damage",
      "(10-20)% increased Cast Speed",
      "30% increased Freeze Buildup",
      "Enemies Frozen by you take 100% increased Damage"
    ],
    "name": "Taryn's Shiver",
    "officialIcon": "",
    "pool": "Staves",
    "requirements": "Requires: Level 2",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Taryns_Shiver",
    "sourceUrl": "https://poe2db.tw/us/Taryns_Shiver",
    "type": "Staves",
    "verification": "embedded"
  },
  {
    "base": "Pyrophyte Staff",
    "baseImplicitMods": [
      "Grants Skill: Solar Orb"
    ],
    "baseProperties": [
      "Staff"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Burn to cinders, scar and maim,",
      "Rule a world, bathed in flame."
    ],
    "key": "the searing touch pyrophyte staff",
    "level": 16,
    "mods": [
      "(80-120)% increased Fire Damage",
      "(10-20)% increased Cast Speed",
      "100% increased Flammability Magnitude",
      "100% increased Ignite Magnitude",
      "Ignites you inflict spread to other Enemies that stay within 1.5 metres for 1 second"
    ],
    "name": "The Searing Touch",
    "officialIcon": "",
    "pool": "Staves",
    "requirements": "Requires: Level 16, 31 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "The_Searing_Touch",
    "sourceUrl": "https://poe2db.tw/us/The_Searing_Touch",
    "type": "Staves",
    "verification": "embedded"
  },
  {
    "base": "Chiming Staff",
    "baseImplicitMods": [
      "Grants Skill: Sigil of Power"
    ],
    "baseProperties": [
      "Staff"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "That which was broken may yet break."
    ],
    "key": "sire of shards chiming staff",
    "level": 25,
    "mods": [
      "(80-120)% increased Spell Damage",
      "(10-20)% increased Cast Speed",
      "+(5-10)% to all Elemental Resistances",
      "20% increased Light Radius",
      "Spells fire 4 additional ProjectilesSpells fire Projectiles in a circle"
    ],
    "name": "Sire of Shards",
    "officialIcon": "",
    "pool": "Staves",
    "requirements": "Requires: Level 25, 46 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Sire_of_Shards",
    "sourceUrl": "https://poe2db.tw/us/Sire_of_Shards",
    "type": "Staves",
    "verification": "embedded"
  },
  {
    "base": "Perching Staff",
    "baseImplicitMods": [
      "Grants Skill: Spiraling Conspiracy"
    ],
    "baseProperties": [
      "Staff"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"Where the boy went, ravens gathered,",
      "feasting on misery. His vile influence",
      "spread, swift as the carnage they wrought.\""
    ],
    "key": "the raven's flock perching staff",
    "level": 65,
    "mods": [
      "(8-16)% increased Cast Speed",
      "+(20-30) to Intelligence",
      "Minions deal (80-120)% increased Damage",
      "Minions have (10-20)% chance to inflict Gruelling Madness on Hit",
      "(30-50)% increased Spirit Reservation Efficiency of Skills"
    ],
    "name": "The Raven's Flock",
    "officialIcon": "",
    "pool": "Staves",
    "requirements": "Requires: Level 65, 114 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "The_Ravens_Flock",
    "sourceUrl": "https://poe2db.tw/us/The_Ravens_Flock",
    "type": "Staves",
    "verification": "embedded"
  },
  {
    "base": "Ravenous Staff",
    "baseImplicitMods": [
      "Grants Skill: Feast of Flesh"
    ],
    "baseProperties": [
      "Staff"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "In ghastly pits beneath the world,",
      "Kulemak grows countless new bodies,",
      "each more powerful than the last.",
      "Not all of his abominations survive."
    ],
    "key": "the unborn lich ravenous staff",
    "level": 65,
    "mods": [
      "(60-80)% increased Desecrated Modifier magnitudes",
      "[Custom Desecrated prefix]",
      "[Lich's Desecrated prefix]",
      "[Lich's Desecrated suffix]",
      "[Lich's Desecrated suffix]"
    ],
    "name": "The Unborn Lich",
    "officialIcon": "",
    "pool": "Staves",
    "requirements": "Requires: Level 65, 114 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "The_Unborn_Lich",
    "sourceUrl": "https://poe2db.tw/us/The_Unborn_Lich",
    "type": "Staves",
    "verification": "embedded"
  },
  {
    "base": "Reflecting Staff",
    "baseImplicitMods": [
      "Grants Skill: Mirror of Refraction"
    ],
    "baseProperties": [
      "Vaal Stave"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Bow before her... or suffer the most gruelling death imaginable."
    ],
    "key": "atziri's rule reflecting staff",
    "level": 70,
    "mods": [
      "(10-20)% increased maximum Life",
      "+(3-5) to Level of all Corrupted Spell Skill Gems",
      "(10-20)% increased Cast Speed",
      "+(20-30) to Intelligence",
      "Spells which cost Life Gain (80-120)% of Damage as Extra Physical Damage"
    ],
    "name": "Atziri's Rule",
    "officialIcon": "",
    "pool": "Staves",
    "requirements": "Requires: Level 70, 114 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Atziris_Rule",
    "sourceUrl": "https://poe2db.tw/us/Atziris_Rule",
    "type": "Staves",
    "verification": "embedded"
  },
  {
    "base": "Permafrost Staff",
    "baseImplicitMods": [
      "Grants Skill: Heart of Ice",
      "Grants Skill: Level 17 Icestorm"
    ],
    "baseProperties": [
      "Staff"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"From what beast you derived, we can only fathom.",
      "Aye, you of living ice, rotting gill, and untold nightmare!",
      "We Brinerot return ye to the sea.\"",
      "- Weylam Roth",
      ""
    ],
    "key": "the whispering ice permafrost staff",
    "level": 75,
    "mods": [
      "+(5-7) to Level of all Cold Spell Skills",
      "(10-20)% reduced Cast Speed",
      "(5-10)% increased Intelligence",
      "2% increased Spell Damage per 10 Intelligence",
      "Inflict Elemental Exposure on Hit, lowering Total Elemental Resistances by (50-60)%"
    ],
    "name": "The Whispering Ice",
    "officialIcon": "",
    "pool": "Staves",
    "requirements": "Requires: Level 75, 114 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "The_Whispering_Ice",
    "sourceUrl": "https://poe2db.tw/us/The_Whispering_Ice",
    "type": "Staves",
    "verification": "embedded"
  },
  {
    "base": "Chiming Staff",
    "baseImplicitMods": [
      "Grants Skill: Sigil of Power"
    ],
    "baseProperties": [
      "Staff"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Nothingness is loathe to relinquish its grip.",
      "Every moment is a struggle to exist."
    ],
    "key": "the burden of shadows chiming staff",
    "level": 78,
    "mods": [
      "(20-30)% increased Cast Speed",
      "Skill Mana Costs Converted to Life Costs",
      "Skills gain 1% of Damage as Chaos Damage per 3 Life Cost"
    ],
    "name": "The Burden of Shadows",
    "officialIcon": "",
    "pool": "Staves",
    "requirements": "Requires: Level 78, 46 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "The_Burden_of_Shadows",
    "sourceUrl": "https://poe2db.tw/us/The_Burden_of_Shadows",
    "type": "Staves",
    "verification": "embedded"
  },
  {
    "base": "Delirium Tablet",
    "baseImplicitMods": [
      "Adds a Mirror of Delirium to a Map 10 uses remaining"
    ],
    "baseProperties": [
      "Tablet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "A simple instruction that will purify an entire region,",
      "making it safe and kind for weary travellers."
    ],
    "key": "clear skies delirium tablet",
    "level": 65,
    "mods": [
      "Delirium Fog in your Maps never dissipates",
      "Delirium Fog in Map applies (-10-10)% reduced Deliriousness to Players"
    ],
    "name": "Clear Skies",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 65",
    "runeforging": [],
    "section": "Other",
    "slug": "Clear_Skies",
    "sourceUrl": "https://poe2db.tw/us/Clear_Skies",
    "type": "Tablets",
    "verification": "embedded"
  },
  {
    "base": "Overseer Tablet",
    "baseImplicitMods": [
      "Empowers the Map Boss of a Map 10 uses remaining"
    ],
    "baseProperties": [
      "Tablet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The lash of the whip,",
      "the ire of the tithe...",
      "the press of the boot."
    ],
    "key": "cruel hegemony overseer tablet",
    "level": 65,
    "mods": [
      "Map Bosses have 1 additional Modifiers"
    ],
    "name": "Cruel Hegemony",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 65",
    "runeforging": [],
    "section": "Other",
    "slug": "Cruel_Hegemony",
    "sourceUrl": "https://poe2db.tw/us/Cruel_Hegemony",
    "type": "Tablets",
    "verification": "embedded"
  },
  {
    "base": "Ritual Tablet",
    "baseImplicitMods": [
      "Adds Ritual Altars to a Map 10 uses remaining"
    ],
    "baseProperties": [
      "Tablet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "When darkness comes, we pray for light.",
      "When darkness is all that there is,",
      "we pray for death."
    ],
    "key": "freedom of faith ritual tablet",
    "level": 65,
    "mods": [
      "Favours at Ritual Altars in Area costs (10-15)% increased Tribute",
      "Can Reroll Favours at Ritual Altars in your Maps twice as many times"
    ],
    "name": "Freedom of Faith",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 65",
    "runeforging": [],
    "section": "Other",
    "slug": "Freedom_of_Faith",
    "sourceUrl": "https://poe2db.tw/us/Freedom_of_Faith",
    "type": "Tablets",
    "verification": "embedded"
  },
  {
    "base": "Irradiated Tablet",
    "baseImplicitMods": [
      "Adds Irradiated to a Map 1 uses remaining"
    ],
    "baseProperties": [
      "Tablet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "For a brief shining time, the Precursors",
      "could resculpt the world as they saw fit."
    ],
    "key": "mastered domain irradiated tablet",
    "level": 65,
    "mods": [
      "Map also counts as a Water Map"
    ],
    "name": "Mastered Domain",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 65",
    "runeforging": [],
    "section": "Other",
    "slug": "Mastered_Domain",
    "sourceUrl": "https://poe2db.tw/us/Mastered_Domain",
    "type": "Tablets",
    "verification": "embedded"
  },
  {
    "base": "Overseer Tablet",
    "baseImplicitMods": [
      "Empowers the Map Boss of a Map 10 uses remaining"
    ],
    "baseProperties": [
      "Tablet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Darkness and light, naught but forest between.",
      "As the forest fades, the twilight hunt begins."
    ],
    "key": "season of the hunt overseer tablet",
    "level": 65,
    "mods": [
      "Map Bosses are Hunted by Azmeri Spirits"
    ],
    "name": "Season of the Hunt",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 65",
    "runeforging": [],
    "section": "Other",
    "slug": "Season_of_the_Hunt",
    "sourceUrl": "https://poe2db.tw/us/Season_of_the_Hunt",
    "type": "Tablets",
    "verification": "embedded"
  },
  {
    "base": "Irradiated Tablet",
    "baseImplicitMods": [
      "Adds Irradiated to a Map 1 uses remaining"
    ],
    "baseProperties": [
      "Tablet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"I see a pattern in these towers. Whoever the Precursors were, they sought to master",
      "this world, to shape it as they saw fit. My people had the same ambition...\""
    ],
    "key": "the grand project irradiated tablet",
    "level": 65,
    "mods": [
      "Can only be applied to Precursor Tower MapsCompleting the Tower makes all nearby Maps accessible"
    ],
    "name": "The Grand Project",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 65",
    "runeforging": [],
    "section": "Other",
    "slug": "The_Grand_Project",
    "sourceUrl": "https://poe2db.tw/us/The_Grand_Project",
    "type": "Tablets",
    "verification": "embedded"
  },
  {
    "base": "Abyss Tablet",
    "baseImplicitMods": [
      "Adds Abysses to a Map 1 uses remaining"
    ],
    "baseProperties": [
      "Tablet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "The Well was naught.",
      "The Precursors dug too deep.",
      "The Well always had been."
    ],
    "key": "unforeseen consequences abyss tablet",
    "level": 65,
    "mods": [
      "% more Waystones found in Area",
      "additional Rare Monsters are spawned from Abysses in Map",
      "Map contains (14-18) additional Abysses",
      "Map is overrun by the Abyssal",
      "map abyss tower augment quantity +% final from overrun unique tablet [-75]"
    ],
    "name": "Unforeseen Consequences",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 65",
    "runeforging": [],
    "section": "Other",
    "slug": "Unforeseen_Consequences",
    "sourceUrl": "https://poe2db.tw/us/Unforeseen_Consequences",
    "type": "Tablets",
    "verification": "embedded"
  },
  {
    "base": "Irradiated Tablet",
    "baseImplicitMods": [
      "Adds Irradiated to a Map 1 uses remaining"
    ],
    "baseProperties": [
      "Tablet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "\"If they had ever completed the tower network,",
      "it could have changed the face of the world...\""
    ],
    "key": "visions of paradise irradiated tablet",
    "level": 65,
    "mods": [
      "If Map was not previously Irradiated, completing Map adds Irradiation instead"
    ],
    "name": "Visions of Paradise",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 65",
    "runeforging": [],
    "section": "Other",
    "slug": "Visions_of_Paradise",
    "sourceUrl": "https://poe2db.tw/us/Visions_of_Paradise",
    "type": "Tablets",
    "verification": "embedded"
  },
  {
    "base": "Breach Tablet",
    "baseImplicitMods": [
      "Adds an Otherworldy Breach to a Map 10 uses remaining"
    ],
    "baseProperties": [
      "Tablet"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "In his broken madness, Xesht spills forth the hordes,",
      "reaching out to wreak pain and ruination."
    ],
    "key": "wraeclast besieged breach tablet",
    "level": 65,
    "mods": [
      "Breach Hives in Map have (2-5) additional waves of Hiveborn Monsters",
      "Breaches in Map have (-10-20)% reduced Pack Size",
      "Unstable Breaches in Map take 120 additional seconds to collapse after timer is filled",
      "Unstable Breaches in Map spawn (2-5) additional Rare Monsters when Stabilised"
    ],
    "name": "Wraeclast Besieged",
    "officialIcon": "",
    "pool": null,
    "requirements": "Requires: Level 65",
    "runeforging": [],
    "section": "Other",
    "slug": "Wraeclast_Besieged",
    "sourceUrl": "https://poe2db.tw/us/Wraeclast_Besieged",
    "type": "Tablets",
    "verification": "embedded"
  },
  {
    "base": "Changeling Talisman",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Talisman",
      "Physical Damage: (25-29) to (38-42)",
      "Critical Hit Chance: 8%",
      "Attacks per Second: 1.25",
      "Weapon Range: 1.2"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "A sensitive few among the first settlers of Ezomyr",
      "followed the wisps by canoe. On a misty forested",
      "island, Cirel of Tarth stood waiting to greet them."
    ],
    "key": "amor mandragora changeling talisman",
    "level": 1,
    "mods": [
      "Adds (16-20) to (23-27) Physical Damage",
      "+(8-15) to Intelligence",
      "(10-15)% increased Skill Effect Duration",
      "Enemies in your Presence are Hindered",
      "Gain 1 Druidic Prowess for every 20 total Rage spent"
    ],
    "name": "Amor Mandragora",
    "officialIcon": "",
    "pool": "Talismans",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Amor Mandragora Changeling Talisman, Verisium x240, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runeforged changeling talisman",
        "label": "Runeforged Changeling Talisman",
        "level": 38,
        "properties": [
          "Physical Damage: 91-151",
          "Critical Hit Chance: 8%",
          "Attacks per Second: 1.25",
          "Weapon Range: 1.2"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 45 Str, 32 Int",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Amor_Mandragora",
    "sourceUrl": "https://poe2db.tw/us/Amor_Mandragora",
    "type": "Talismans",
    "verification": "embedded"
  },
  {
    "base": "Nettle Talisman",
    "baseImplicitMods": [
      "Grants Skill: Level 2 Sanguine Revelry"
    ],
    "baseProperties": [
      "Ezomyte Talisman",
      "Physical Damage: (19-23) to (32-38)",
      "Critical Hit Chance: 11%",
      "Attacks per Second: 1.33-1.38",
      "Weapon Range: 1.2"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "If you see the blushing tree of the northern woods,",
      "remember: \"Blossoms of red, the tree's been fed.",
      "Blossoms of white, prepare for a fight.\""
    ],
    "key": "spiteful floret nettle talisman",
    "level": 5,
    "mods": [
      "(60-90)% increased Physical Damage",
      "(6-10)% increased Attack Speed",
      "+(7-14) to Strength",
      "(20-30)% chance to cause Bleeding on Hit",
      "Every 5 Rage also grants 5% of Damage taken Recouped as Life"
    ],
    "name": "Spiteful Floret",
    "officialIcon": "",
    "pool": "Talismans",
    "requirements": "Requires: Level 5, 9 Str, 8 Int",
    "runeforging": [
      {
        "cost": "Cost: Spiteful Floret Nettle Talisman, Verisium x210, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runeforged nettle talisman",
        "label": "Runeforged Nettle Talisman",
        "level": 38,
        "properties": [
          "Physical Damage: 51-86",
          "Critical Hit Chance: 11%",
          "Attacks per Second: 1.25",
          "Weapon Range: 1.2"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 45 Str, 32 Int",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Spiteful_Floret",
    "sourceUrl": "https://poe2db.tw/us/Spiteful_Floret",
    "type": "Talismans",
    "verification": "embedded"
  },
  {
    "base": "Familial Talisman",
    "baseImplicitMods": [
      "Grants Skill: Level 5 Cackling Companions",
      "Minions deal (30-50)% increased Damage"
    ],
    "baseProperties": [
      "Talisman",
      "Physical Damage: (34-40) to (58-68)",
      "Critical Hit Chance: 8%",
      "Attacks per Second: 1.25",
      "Weapon Range: 1.2"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "In a time of great need, surrounded by Abyssals,",
      "the Wayward Druid came to the Sun Clan's aid.",
      "It is a debt they have never forgotten."
    ],
    "key": "hysseg's claw familial talisman",
    "level": 16,
    "mods": [
      "(70-100)% increased Physical Damage",
      "5% increased Movement Speed",
      "+(8-15) to Strength",
      "+(8-15) to Intelligence",
      "(5-8)% increased Damage per Minion"
    ],
    "name": "Hysseg's Claw",
    "officialIcon": "",
    "pool": "Talismans",
    "requirements": "Requires: Level 16, 21 Str, 16 Int",
    "runeforging": [
      {
        "cost": "Cost: Hysseg's Claw Familial Talisman, Verisium x225, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Minions deal (30-50)% increased Damage"
        ],
        "key": "runeforged familial talisman",
        "label": "Runeforged Familial Talisman",
        "level": 38,
        "properties": [
          "Physical Damage: 54-91",
          "Critical Hit Chance: 8%",
          "Attacks per Second: 1.25",
          "Weapon Range: 1.2"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 45 Str, 32 Int",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Hyssegs_Claw",
    "sourceUrl": "https://poe2db.tw/us/Hyssegs_Claw",
    "type": "Talismans",
    "verification": "embedded"
  },
  {
    "base": "Vicious Talisman",
    "baseImplicitMods": [],
    "baseProperties": [
      "Talisman",
      "Physical Damage: (82-95) to (135-156)",
      "Critical Hit Chance: 8%",
      "Attacks per Second: 1.34-1.41",
      "Weapon Range: 1.2"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "Long ago, the witches of the Azak Tribe learned",
      "how to tap into the flow of Vivid lifeforce to",
      "'cooperate' with their enemies... forcefully."
    ],
    "key": "the flesh poppet vicious talisman",
    "level": 40,
    "mods": [
      "(90-120)% increased Physical Damage",
      "(7-13)% increased Attack Speed",
      "+(7-13) to all Attributes",
      "(30-40)% reduced Presence Area of Effect",
      "Copy a random Modifier from each enemy in your Presence whenyou Shapeshift to an Animal formModifiers gained this way are lost after 30 seconds or when you next Shapeshift"
    ],
    "name": "The Flesh Poppet",
    "officialIcon": "",
    "pool": "Talismans",
    "requirements": "Requires: Level 40, 47 Str, 34 Int",
    "runeforging": [
      {
        "cost": "Cost: The Flesh Poppet Vicious Talisman, Exceptional Verisium x25, Olroth's Crest of the Sun x1",
        "implicitMods": [],
        "key": "runeforged vicious talisman",
        "label": "Runeforged Vicious Talisman",
        "level": 65,
        "properties": [
          "Physical Damage: 123-205",
          "Critical Hit Chance: 8%",
          "Attacks per Second: 1.25",
          "Weapon Range: 1.2"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 74 Str, 52 Int",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "The_Flesh_Poppet",
    "sourceUrl": "https://poe2db.tw/us/The_Flesh_Poppet",
    "type": "Talismans",
    "verification": "embedded"
  },
  {
    "base": "Lumbering Talisman",
    "baseImplicitMods": [],
    "baseProperties": [
      "Talisman",
      "Physical Damage: (249-284) to (375-428)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 0.99-0.94",
      "Weapon Range: 1.2"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"A traditional hatungo does not carry an axe,",
      "it is true. But as Narumoa showed us, there",
      "are many ways to crush one's enemy...\""
    ],
    "key": "surge of the tide lumbering talisman",
    "level": 52,
    "mods": [
      "(250-300)% increased Physical Damage",
      "(30-50)% increased Armour",
      "(10-15)% reduced Attack Speed",
      "+(20-30) to Strength",
      "Every second Slam Skill you use while Shapeshifted is Ancestrally BoostedEvery second Strike Skill you use while Shapeshifted is Ancestrally Boosted"
    ],
    "name": "Surge of the Tide",
    "officialIcon": "",
    "pool": "Talismans",
    "requirements": "Requires: Level 52, 60 Str, 43 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Surge_of_the_Tide",
    "sourceUrl": "https://poe2db.tw/us/Surge_of_the_Tide",
    "type": "Talismans",
    "verification": "embedded"
  },
  {
    "base": "Ashbark Talisman",
    "baseImplicitMods": [
      "Grants Skill: Level 17 Molten Crash",
      "(50-80)% increased Flammability Magnitudelocal weapon implicit hidden % base damage is fire [30]"
    ],
    "baseProperties": [
      "Talisman",
      "Physical Damage: 50-105",
      "Fire Damage: (525-611) to (692-758)",
      "Critical Hit Chance: 8%",
      "Attacks per Second: 1.02-0.96",
      "Weapon Range: 1.2"
    ],
    "basePropertyStyles": [
      null,
      1,
      4,
      0,
      0,
      0
    ],
    "flavourText": [
      "Gruthkul was the Mother of Despair...",
      "but one day, the Father will return,",
      "and discover the fate of his children."
    ],
    "key": "fury of the king ashbark talisman",
    "level": 72,
    "mods": [
      "Adds (503-589) to (647-713) Fire Damage",
      "(15-20)% reduced Attack Speed",
      "+(30-40) to Strength",
      "Bear Skills Convert 80% of Physical Damage to Fire Damage",
      "Skills which require Glory generate (2-5) Glory every 2 seconds",
      "Enemies in your Presence have Exposure",
      "exposure art variation [1]"
    ],
    "name": "Fury of the King",
    "officialIcon": "",
    "pool": "Talismans",
    "requirements": "Requires: Level 72, 94 Str, 67 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Fury_of_the_King",
    "sourceUrl": "https://poe2db.tw/us/Fury_of_the_King",
    "type": "Talismans",
    "verification": "embedded"
  },
  {
    "base": "Felled Greatclub",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Two Hand Mace",
      "Physical Damage: (29-33) to (41-45)",
      "Critical Hit Chance: 20%",
      "Attacks per Second: 0.99",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "There was a very clear and delicious",
      "reason why the Ezomytes chose to",
      "stop their flight and settle in Phaaryl."
    ],
    "key": "hoghunt felled greatclub",
    "level": 1,
    "mods": [
      "Adds (16-20) to (23-27) Physical Damage",
      "+15% to Critical Hit Chance",
      "10% reduced Attack Speed",
      "+10 to Strength",
      "Maim on Critical Hit"
    ],
    "name": "Hoghunt",
    "officialIcon": "",
    "pool": "Two_Hand_Maces",
    "requirements": "Requires: Level 1",
    "runeforging": [
      {
        "cost": "Cost: Hoghunt Felled Greatclub, Verisium x210, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runeforged felled greatclub",
        "label": "Runeforged Felled Greatclub",
        "level": 38,
        "properties": [
          "Physical Damage: 146-197",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.1",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 68 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Hoghunt",
    "sourceUrl": "https://poe2db.tw/us/Hoghunt",
    "type": "Two Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Oak Greathammer",
    "baseImplicitMods": [
      "Causes (20-40)% increased Stun Buildup"
    ],
    "baseProperties": [
      "Ezomyte Two Hand Mace",
      "Physical Damage: (29-35) to (54-66)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"The crack of bone, the spray of blood.",
      "Is there sweeter music?\"",
      "- Hrimnor of the Ezomytes."
    ],
    "key": "hrimnor's hymn oak greathammer",
    "level": 4,
    "mods": [
      "(80-120)% increased Physical Damage",
      "+(10-15) to Strength",
      "Gain (10-20) Life per enemy killed",
      "Slam Skills you use yourself cause an additional Aftershock"
    ],
    "name": "Hrimnor's Hymn",
    "officialIcon": "",
    "pool": "Two_Hand_Maces",
    "requirements": "Requires: Level 4, 11 Str",
    "runeforging": [
      {
        "cost": "Cost: Hrimnor's Hymn Oak Greathammer, Verisium x215, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Causes (20-40)% increased Stun Buildup"
        ],
        "key": "runeforged oak greathammer",
        "label": "Runeforged Oak Greathammer",
        "level": 38,
        "properties": [
          "Physical Damage: 73-135",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 68 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Hrimnors_Hymn",
    "sourceUrl": "https://poe2db.tw/us/Hrimnors_Hymn",
    "type": "Two Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Forge Maul",
    "baseImplicitMods": [
      "Crushes Enemies on Hit"
    ],
    "baseProperties": [
      "Two Hand Mace",
      "Physical Damage: (38-41) to (57-60)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.16-1.21",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "The art of surgery advances one mistake at a time."
    ],
    "key": "trephina forge maul",
    "level": 11,
    "mods": [
      "Adds (12-15) to (22-25) Physical Damage",
      "(10-15)% increased Attack Speed",
      "Causes (30-50)% increased Stun Buildup",
      "Always deals Critical Hits against Heavy Stunned Enemies"
    ],
    "name": "Trephina",
    "officialIcon": "",
    "pool": "Two_Hand_Maces",
    "requirements": "Requires: Level 11, 23 Str",
    "runeforging": [
      {
        "cost": "Cost: Trephina Forge Maul, Verisium x475, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Crushes Enemies on Hit"
        ],
        "key": "runeforged forge maul",
        "label": "Runeforged Forge Maul",
        "level": 40,
        "properties": [
          "Physical Damage: 147-199",
          "Critical Hit Chance: 10%",
          "Attacks per Second: 1.05",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 72 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Trephina",
    "sourceUrl": "https://poe2db.tw/us/Trephina",
    "type": "Two Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Studded Greatclub",
    "baseImplicitMods": [],
    "baseProperties": [
      "Ezomyte Two Hand Mace",
      "Physical Damage: 32-48",
      "Lightning Damage: (1) to (110-115)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.21-1.27",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      6,
      0,
      0,
      0
    ],
    "flavourText": [
      "The mind may have no limits, but the skull sure does."
    ],
    "key": "brain rattler studded greatclub",
    "level": 16,
    "mods": [
      "Adds 1 to (110-115) Lightning Damage",
      "(10-15)% increased Attack Speed",
      "All damage with this Weapon causes Electrocution buildup"
    ],
    "name": "Brain Rattler",
    "officialIcon": "",
    "pool": "Two_Hand_Maces",
    "requirements": "Requires: Level 16, 31 Str",
    "runeforging": [
      {
        "cost": "Cost: Brain Rattler Studded Greatclub, Verisium x245, Medved's Crest of the Circle x1",
        "implicitMods": [
          "local weapon implicit hidden % base damage is lightning [75]"
        ],
        "key": "runeforged studded greatclub",
        "label": "Runeforged Studded Greatclub",
        "level": 38,
        "properties": [
          "Physical Damage: 23.5-62.25",
          "Lightning Damage: 70.5-186.75",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.1",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          6,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 38, 68 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Brain_Rattler",
    "sourceUrl": "https://poe2db.tw/us/Brain_Rattler",
    "type": "Two Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Cultist Greathammer",
    "baseImplicitMods": [
      "Strikes deal Splash Damage"
    ],
    "baseProperties": [
      "Two Hand Mace",
      "Physical Damage: (61-71) to (89-99)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.05",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "Secrecy and silence are powers all their own."
    ],
    "key": "the empty roar cultist greathammer",
    "level": 22,
    "mods": [
      "Adds (25-35) to (40-50) Physical Damage",
      "Leeches 10% of Physical Damage as Life",
      "(10-20)% chance to cause Bleeding on Hit",
      "All Attacks count as Empowered Attacks",
      "Cannot use Warcries"
    ],
    "name": "The Empty Roar",
    "officialIcon": "",
    "pool": "Two_Hand_Maces",
    "requirements": "Requires: Level 22, 41 Str",
    "runeforging": [
      {
        "cost": "Cost: The Empty Roar Cultist Greathammer, Verisium x295, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Strikes deal Splash Damage",
          "(20-30)% increased Bleeding Duration"
        ],
        "key": "runeforged cultist greathammer",
        "label": "Runeforged Cultist Greathammer",
        "level": 40,
        "properties": [
          "Physical Damage: 144-194",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.05",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 40, 72 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "The_Empty_Roar",
    "sourceUrl": "https://poe2db.tw/us/The_Empty_Roar",
    "type": "Two Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Temple Maul",
    "baseImplicitMods": [],
    "baseProperties": [
      "Two Hand Mace",
      "Physical Damage: (63-77) to (130-158)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.8",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "Be not deceived by the treachery of men."
    ],
    "key": "shyaba temple maul",
    "level": 28,
    "mods": [
      "+50 Dexterity Requirement",
      "-15 Strength Requirement",
      "(80-120)% increased Physical Damage",
      "50% increased Attack Speed",
      "(15-25)% increased Light Radius",
      "Always Hits"
    ],
    "name": "Shyaba",
    "officialIcon": "",
    "pool": "Two_Hand_Maces",
    "requirements": "Requires: Level 28, 37 Str, Dex 50",
    "runeforging": [
      {
        "cost": "Cost: Shyaba Temple Maul, Verisium x1600, Vorana's Crest of the Scythe x1",
        "implicitMods": [],
        "key": "runeforged temple maul",
        "label": "Runeforged Temple Maul",
        "level": 55,
        "properties": [
          "Physical Damage: 64-134",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.3",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 76 Str, 40 Dex",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Shyaba",
    "sourceUrl": "https://poe2db.tw/us/Shyaba",
    "type": "Two Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Leaden Greathammer",
    "baseImplicitMods": [],
    "baseProperties": [
      "Two Hand Mace",
      "Physical Damage: (116-123) to (180-188)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 1.1",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "The faithful may continue to serve, even after death."
    ],
    "key": "chober chaber leaden greathammer",
    "level": 33,
    "mods": [
      "+100 Intelligence Requirement",
      "Adds (58-65) to (102-110) Physical Damage",
      "+(80-100) to maximum Mana",
      "+50 to Spirit",
      "+1 to Level of all Minion Skills",
      "Increases and Reductions to Minion Damage also affect you"
    ],
    "name": "Chober Chaber",
    "officialIcon": "",
    "pool": "Two_Hand_Maces",
    "requirements": "Requires: Level 33, 60 Str, Int 100",
    "runeforging": [
      {
        "cost": "Cost: Chober Chaber Leaden Greathammer, Verisium x485, Medved's Crest of the Circle x1",
        "implicitMods": [],
        "key": "runeforged leaden greathammer",
        "label": "Runeforged Leaden Greathammer",
        "level": 55,
        "properties": [
          "Physical Damage: 132-179",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.1",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 60 Str, 50 Int",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Chober_Chaber",
    "sourceUrl": "https://poe2db.tw/us/Chober_Chaber",
    "type": "Two Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Crumbling Maul",
    "baseImplicitMods": [
      "Causes Enemies to Explode on Critical kill, for 10% of their Life as Physical Damage"
    ],
    "baseProperties": [
      "Vaal Two Hand Mace",
      "Physical Damage: (124-155) to (150-188)",
      "Critical Hit Chance: 8%",
      "Attacks per Second: 1.1",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"The finest prosperity grows from the direst",
      "carnage. Such is the nature of progress.\"",
      "- Doryani of the Vaal"
    ],
    "key": "quecholli crumbling maul",
    "level": 38,
    "mods": [
      "(100-150)% increased Physical Damage",
      "+(10-15) to all Attributes",
      "Gain 30 Life per enemy killed",
      "Hits with this Weapon have no Critical Damage Bonus",
      "This Weapon's Critical Hit Chance is 100%"
    ],
    "name": "Quecholli",
    "officialIcon": "",
    "pool": "Two_Hand_Maces",
    "requirements": "Requires: Level 38, 68 Str",
    "runeforging": [
      {
        "cost": "Cost: Quecholli Crumbling Maul, Verisium x435, Medved's Crest of the Circle x1",
        "implicitMods": [
          "Causes Enemies to Explode on Critical kill, for 10% of their Life as Physical Damage"
        ],
        "key": "runeforged crumbling maul",
        "label": "Runeforged Crumbling Maul",
        "level": 55,
        "properties": [
          "Physical Damage: 105-128",
          "Critical Hit Chance: 8%",
          "Attacks per Second: 1.1",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 55, 97 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Quecholli",
    "sourceUrl": "https://poe2db.tw/us/Quecholli",
    "type": "Two Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Pointed Maul",
    "baseImplicitMods": [],
    "baseProperties": [
      "Two Hand Mace",
      "Physical Damage: (150-170) to (224-255)",
      "Critical Hit Chance: 6.5%",
      "Attacks per Second: 1.1",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "The sea strikes the rock relentlessly.",
      "Whether in one day or in ten thousand years,",
      "eventually the rock will crumble,",
      "and the Brine King's domain will grow."
    ],
    "key": "tidebreaker pointed maul",
    "level": 45,
    "mods": [
      "(120-150)% increased Physical Damage",
      "+(2-3) to Level of all Melee Skills",
      "+(20-30) to Intelligence",
      "Causes (150-200)% increased Stun Buildup",
      "All Damage from Hits with this Weapon Contributes to Chill Magnitude"
    ],
    "name": "Tidebreaker",
    "officialIcon": "",
    "pool": "Two_Hand_Maces",
    "requirements": "Requires: Level 45, 80 Str",
    "runeforging": [
      {
        "cost": "Cost: Tidebreaker Pointed Maul, Verisium x5000, Uhtred's Crest of the Chalice x1",
        "implicitMods": [
          "Strikes deal Splash Damage"
        ],
        "key": "runeforged pointed maul",
        "label": "Runeforged Pointed Maul",
        "level": 65,
        "properties": [
          "Physical Damage: 125-188",
          "Critical Hit Chance: 6.5%",
          "Attacks per Second: 1.1",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 65, 114 Str",
        "tier": "runeforged"
      }
    ],
    "section": "Weapons",
    "slug": "Tidebreaker",
    "sourceUrl": "https://poe2db.tw/us/Tidebreaker",
    "type": "Two Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Totemic Greatclub",
    "baseImplicitMods": [
      "Warcries Empower 1 additional Attacks"
    ],
    "baseProperties": [
      "Two Hand Mace",
      "Physical Damage: (539-616) to (735-840)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 0.72",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "\"Drunken Erqi boasted to Tukohama; the God of War",
      "challenged him to a clash of strength. Woe to the",
      "Divine - he should have made it a test of skill!\""
    ],
    "key": "marohi erqi totemic greatclub",
    "level": 60,
    "mods": [
      "+150 Strength Requirement",
      "(600-700)% increased Physical Damage",
      "(-300--200) to Accuracy Rating",
      "35% reduced Attack Speed",
      "Causes (40-60)% increased Stun Buildup",
      "Heavy Stuns Enemies that are on Full Life"
    ],
    "name": "Marohi Erqi",
    "officialIcon": "",
    "pool": "Two_Hand_Maces",
    "requirements": "Requires: Level 60, 239 Str",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Marohi_Erqi",
    "sourceUrl": "https://poe2db.tw/us/Marohi_Erqi",
    "type": "Two Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Giant Maul",
    "baseImplicitMods": [],
    "baseProperties": [
      "Two Hand Mace",
      "Physical Damage: (384-432) to (576-648)",
      "Critical Hit Chance: 5%",
      "Attacks per Second: 0.99",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      0,
      0,
      0
    ],
    "flavourText": [
      "The secret Order endured by publicly",
      "praying however the Templars demanded.",
      "One day, justice would fall upon them..."
    ],
    "key": "the hammer of faith giant maul",
    "level": 65,
    "mods": [
      "(300-350)% increased Physical Damage",
      "10% reduced Attack Speed",
      "+10% to all Elemental Resistances",
      "50% increased Mana Regeneration Rate",
      "Every 10 seconds, gain a random non-damaging Shrine buff for 20 seconds"
    ],
    "name": "The Hammer of Faith",
    "officialIcon": "",
    "pool": "Two_Hand_Maces",
    "requirements": "Requires: Level 65, 114 Str",
    "runeforging": [],
    "section": "Weapons",
    "slug": "The_Hammer_of_Faith",
    "sourceUrl": "https://poe2db.tw/us/The_Hammer_of_Faith",
    "type": "Two Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Aberrant Sledge",
    "baseImplicitMods": [
      "Grants Skill: Level 16 Starborn Onslaught"
    ],
    "baseProperties": [
      "Kalguuran Two Hand Mace",
      "Physical Damage: (133-148) to (277-308)",
      "Cold Damage: (150-200) to (350-400)",
      "Critical Hit Chance: 9-11%",
      "Attacks per Second: 1.2",
      "Weapon Range: 1.5"
    ],
    "basePropertyStyles": [
      null,
      1,
      5,
      0,
      0,
      0
    ],
    "flavourText": [
      "Infinite mutations over endless eons borne upon it in a singular moment."
    ],
    "key": "twisted empyrean aberrant sledge",
    "level": 70,
    "mods": [
      "(80-100)% increased Physical Damage",
      "Adds (150-200) to (350-400) Cold Damage",
      "+(300-400) to maximum Mana",
      "+(4-6)% to Critical Hit Chance",
      "(10-20)% of Damage is taken from Mana before Life",
      "Attacks with this Weapon have Added Cold Damage equal to (6-8)% to (10-12)% of maximum Mana",
      "Convert 100% of Fire Damage with Mace Skills to Cold Damage",
      "mace fire skills are blue [1]"
    ],
    "name": "Twisted Empyrean",
    "officialIcon": "",
    "pool": "Two_Hand_Maces",
    "requirements": "Requires: Level 70, 163 Str",
    "runeforging": [
      {
        "cost": "Cost: Twisted Empyrean Aberrant Sledge, Exceptional Verisium x40, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "local weapon implicit hidden % base damage is cold [80]"
        ],
        "key": "runemastered aberrant sledge",
        "label": "Runemastered Aberrant Sledge",
        "level": 70,
        "properties": [
          "Physical Damage: 29.6-61.6",
          "Cold Damage: 118.4-246.4",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.2",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          5,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 70, 163 Str",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Twisted Empyrean Aberrant Sledge, Exceptional Verisium x40, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "local weapon implicit hidden % base damage is cold [80]"
        ],
        "key": "runemastered aberrant sledge",
        "label": "Runemastered Aberrant Sledge",
        "level": 70,
        "properties": [
          "Physical Damage: 29.6-61.6",
          "Cold Damage: 118.4-246.4",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.2",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          5,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 70, 163 Str",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Twisted Empyrean Aberrant Sledge, Exceptional Verisium x40, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "local weapon implicit hidden % base damage is cold [80]"
        ],
        "key": "runemastered aberrant sledge",
        "label": "Runemastered Aberrant Sledge",
        "level": 70,
        "properties": [
          "Physical Damage: 29.6-61.6",
          "Cold Damage: 118.4-246.4",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.2",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          5,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 70, 163 Str",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Twisted Empyrean Aberrant Sledge, Exceptional Verisium x40, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "local weapon implicit hidden % base damage is cold [80]"
        ],
        "key": "runemastered aberrant sledge",
        "label": "Runemastered Aberrant Sledge",
        "level": 70,
        "properties": [
          "Physical Damage: 29.6-61.6",
          "Cold Damage: 118.4-246.4",
          "Critical Hit Chance: 5%",
          "Attacks per Second: 1.2",
          "Weapon Range: 1.5"
        ],
        "propertyStyles": [
          0,
          5,
          0,
          0,
          0
        ],
        "requirements": "Requires: Level 70, 163 Str",
        "tier": "runemastered"
      }
    ],
    "section": "Weapons",
    "slug": "Twisted_Empyrean",
    "sourceUrl": "https://poe2db.tw/us/Twisted_Empyrean",
    "type": "Two Hand Maces",
    "verification": "embedded"
  },
  {
    "base": "Withered Wand",
    "baseImplicitMods": [
      "Grants Skill: Chaos Bolt"
    ],
    "baseProperties": [
      "Wand"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "With a flick of the finger, their fates are written,",
      "the pages torn to a million pieces."
    ],
    "key": "the wicked quill withered wand",
    "level": 1,
    "mods": [
      "(60-100)% increased Spell Damage",
      "+(60-100) to maximum Mana",
      "+(7-13)% to Chaos Resistance",
      "Spells have a 25% chance to inflict Withered for 4 seconds on Hit"
    ],
    "name": "The Wicked Quill",
    "officialIcon": "",
    "pool": "Wands",
    "requirements": "Requires: Level 1",
    "runeforging": [],
    "section": "Weapons",
    "slug": "The_Wicked_Quill",
    "sourceUrl": "https://poe2db.tw/us/The_Wicked_Quill",
    "type": "Wands",
    "verification": "embedded"
  },
  {
    "base": "Attuned Wand",
    "baseImplicitMods": [
      "Grants Skill: Mana Drain"
    ],
    "baseProperties": [
      "Ezomyte Wand"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "From the smallest seeds",
      "To the tallest redwoods,",
      "Life endures in Wraeclast."
    ],
    "key": "lifesprig attuned wand",
    "level": 2,
    "mods": [
      "+(10-20) to maximum Mana",
      "+(1-3) to Level of all Spell Skills",
      "(5-10)% increased Cast Speed",
      "Leeches 1% of maximum Life when you Cast a Spell"
    ],
    "name": "Lifesprig",
    "officialIcon": "",
    "pool": "Wands",
    "requirements": "Requires: Level 2",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Lifesprig",
    "sourceUrl": "https://poe2db.tw/us/Lifesprig",
    "type": "Wands",
    "verification": "embedded"
  },
  {
    "base": "Bone Wand",
    "baseImplicitMods": [
      "Grants Skill: Bone Blast"
    ],
    "baseProperties": [
      "Wand"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "One way or another, it will find what it seeks."
    ],
    "key": "sanguine diviner bone wand",
    "level": 2,
    "mods": [
      "(80-100)% increased Spell Damage",
      "Gain (10-15) Life per enemy killed",
      "25% chance to inflict Bleeding on Hit",
      "25% of Spell Mana Cost Converted to Life Cost"
    ],
    "name": "Sanguine Diviner",
    "officialIcon": "",
    "pool": "Wands",
    "requirements": "Requires: Level 2",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Sanguine_Diviner",
    "sourceUrl": "https://poe2db.tw/us/Sanguine_Diviner",
    "type": "Wands",
    "verification": "embedded"
  },
  {
    "base": "Volatile Wand",
    "baseImplicitMods": [
      "Grants Skill: Volatile Dead"
    ],
    "baseProperties": [
      "Wand"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "He alone was welcome in the sacred spaces of the Titans."
    ],
    "key": "enezun's charge volatile wand",
    "level": 16,
    "mods": [
      "(80-100)% increased Spell Damage",
      "(30-50)% increased Critical Hit Chance for Spells",
      "Gain (10-15) Mana per enemy killed",
      "25% chance to not destroy Corpses when Consuming Corpses"
    ],
    "name": "Enezun's Charge",
    "officialIcon": "",
    "pool": "Wands",
    "requirements": "Requires: Level 16, 31 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Enezuns_Charge",
    "sourceUrl": "https://poe2db.tw/us/Enezuns_Charge",
    "type": "Wands",
    "verification": "embedded"
  },
  {
    "base": "Acrid Wand",
    "baseImplicitMods": [
      "Grants Skill: Decompose"
    ],
    "baseProperties": [
      "Ezomyte Wand"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Lost in the Black Fen, Erian hoped that dawn would save him.",
      "He had no idea how far away the light truly was."
    ],
    "key": "cursecarver acrid wand",
    "level": 33,
    "mods": [
      "(80-100)% increased Spell Damage",
      "(10-20)% increased Cast Speed",
      "Lose 10 Life per enemy killed",
      "(30-50)% increased Mana Regeneration Rate",
      "+4 to Level of [Random Curse] Skills"
    ],
    "name": "Cursecarver",
    "officialIcon": "",
    "pool": "Wands",
    "requirements": "Requires: Level 33, 60 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Cursecarver",
    "sourceUrl": "https://poe2db.tw/us/Cursecarver",
    "type": "Wands",
    "verification": "embedded"
  },
  {
    "base": "Siphoning Wand",
    "baseImplicitMods": [
      "Grants Skill: Power Siphon",
      "Grants Skill: Level 15 Pinnacle of Power"
    ],
    "baseProperties": [
      "Ezomyte Wand"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Adonia rose with eyes afire, emanating a ghastly aura, and",
      "broke off a carving from the wall of the Throne Room.",
      "\"You think me powerless without my wand? Insult me again!\""
    ],
    "key": "adonia's ego siphoning wand",
    "level": 65,
    "mods": [
      "+(100-150) to maximum Mana",
      "+3 to Level of all Spell Skills",
      "(15-30)% increased Cast Speed",
      "-10% to all Elemental Resistances per Power Charge",
      "(-1-1) to Maximum Power Charges",
      "power siphon unique elemental art variation [1]",
      "visual use power charges elemental epk [1]"
    ],
    "name": "Adonia's Ego",
    "officialIcon": "",
    "pool": "Wands",
    "requirements": "Requires: Level 65, 23 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Adonias_Ego",
    "sourceUrl": "https://poe2db.tw/us/Adonias_Ego",
    "type": "Wands",
    "verification": "embedded"
  },
  {
    "base": "Twisted Wand",
    "baseImplicitMods": [
      "Grants Skill: Coiling Bolts"
    ],
    "baseProperties": [
      "Wand"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "In that moment, Viridi's bones became",
      "branches, weaving over the Darkness.",
      "She coiled around the nothing,",
      "trapping it within her everything."
    ],
    "key": "liminal coil twisted wand",
    "level": 65,
    "mods": [
      "(71-113)% increased Spell Damage",
      "(7-13)% increased Cast Speed",
      "Magnitudes of Curses you inflict are zero",
      "Curses you inflict ignore Curse limit",
      "Spell Hits Gain (23-31)% of Damage as Extra Chaos Damage per Curse on target",
      "Spell Hits Gain (23-31)% of Damage as Extra Physical Damage per Curse on target"
    ],
    "name": "Liminal Coil",
    "officialIcon": "",
    "pool": "Wands",
    "requirements": "Requires: Level 65, 114 Int",
    "runeforging": [],
    "section": "Weapons",
    "slug": "Liminal_Coil",
    "sourceUrl": "https://poe2db.tw/us/Liminal_Coil",
    "type": "Wands",
    "verification": "embedded"
  },
  {
    "base": "Runic Fork",
    "baseImplicitMods": [
      "Grants Skill: Level 15 The Stars Answer"
    ],
    "baseProperties": [
      "Ezomyte Wand"
    ],
    "basePropertyStyles": [
      null
    ],
    "flavourText": [
      "Smithed from ancient metalwrought from the very stars.It is a means to call upon them,for one capable of wielding it."
    ],
    "key": "runeseeker's call runic fork",
    "level": 65,
    "mods": [
      "Only Runes can be Socketed in this item",
      "200% increased effect of Socketed Runes",
      "Has 5 Augment Sockets (Hidden)"
    ],
    "name": "Runeseeker's Call",
    "officialIcon": "",
    "pool": "Wands",
    "requirements": "Requires: Level 65, 114 Int",
    "runeforging": [
      {
        "cost": "Cost: Runeseeker's Call Runic Fork, Exceptional Verisium x50, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "+300 to maximum Runic Ward"
        ],
        "key": "runemastered runic fork",
        "label": "Runemastered Runic Fork",
        "level": 65,
        "properties": [],
        "propertyStyles": [],
        "requirements": "Requires: Level 65, 114 Int",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Runeseeker's Call Runic Fork, Exceptional Verisium x50, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "+300 to maximum Runic Ward"
        ],
        "key": "runemastered runic fork",
        "label": "Runemastered Runic Fork",
        "level": 65,
        "properties": [],
        "propertyStyles": [],
        "requirements": "Requires: Level 65, 114 Int",
        "tier": "runemastered"
      },
      {
        "cost": "Cost: Runeseeker's Call Runic Fork, Exceptional Verisium x50, Olroth's Crest of the Sun x1",
        "implicitMods": [
          "+300 to maximum Runic Ward"
        ],
        "key": "runemastered runic fork",
        "label": "Runemastered Runic Fork",
        "level": 65,
        "properties": [],
        "propertyStyles": [],
        "requirements": "Requires: Level 65, 114 Int",
        "tier": "runemastered"
      }
    ],
    "section": "Weapons",
    "slug": "Runeseekers_Call",
    "sourceUrl": "https://poe2db.tw/us/Runeseekers_Call",
    "type": "Wands",
    "verification": "page"
  }
];
  const UNIQUE_ITEMS = Object.freeze(UNIQUE_ITEM_SNAPSHOT.map((item) =>
    Object.freeze({
      ...item,
      officialIcon: BUNDLED_ICONS[item.key] || item.officialIcon || BUNDLED_FALLBACK
    })
  ));

  function getItemsByType(type) {
    return UNIQUE_ITEMS.filter((item) => item.type === type);
  }

  function getUniqueItem(key) {
    const normalized = String(key || "").trim().toLowerCase();
    return UNIQUE_ITEMS.find((item) => item.key === normalized) || null;
  }

  return {
    DETAIL_CACHE_VERSION,
    RUNEFORGE_ICON,
    UNIQUE_HELPER_ICON,
    UNIQUE_ITEMS,
    UNIQUE_TYPES,
    getItemsByType,
    getUniqueItem
  };
});

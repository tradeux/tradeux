(function exposePoe2CorruptionData(root, factory) {
  const data = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }

  root.Poe2CorruptionData = data;
})(typeof globalThis !== "undefined" ? globalThis : this, function createPoe2CorruptionData() {
  "use strict";

  // Generated from the reviewed item-class snapshot on 2026-08-28T19:42:08.645Z.
  const CORRUPTION_POOLS = {
  "Amulets": [
    "Leech #% of Physical Attack Damage as Life",
    "Leech #% of Physical Attack Damage as Mana",
    "#% to all Maximum Elemental Resistances",
    "#% to all Elemental Resistances",
    "#% increased Rarity of Items found",
    "# to Level of all Skills",
    "# to Strength",
    "# to Dexterity",
    "# to Intelligence",
    "Life Flasks gain # charges per Second",
    "Mana Flasks gain # charges per Second",
    "Charms gain # charge per Second"
  ],
  "Body_Armours_dex": [
    "#% reduced Attribute Requirements",
    "#% additional Physical Damage Reduction",
    "#% of Damage taken Recouped as Life",
    "#% of Damage taken Recouped as Mana",
    "#% to all Maximum Elemental Resistances",
    "# to maximum Life",
    "#% increased Thorns damage",
    "#% to Chaos Resistance"
  ],
  "Body_Armours_dex_int": [
    "#% reduced Attribute Requirements",
    "#% additional Physical Damage Reduction",
    "#% of Damage taken Recouped as Life",
    "#% of Damage taken Recouped as Mana",
    "#% to all Maximum Elemental Resistances",
    "# to maximum Life",
    "#% increased Thorns damage",
    "#% to Chaos Resistance"
  ],
  "Body_Armours_int": [
    "#% reduced Attribute Requirements",
    "#% additional Physical Damage Reduction",
    "#% of Damage taken Recouped as Life",
    "#% of Damage taken Recouped as Mana",
    "#% to all Maximum Elemental Resistances",
    "# to maximum Life",
    "#% increased Thorns damage",
    "#% to Chaos Resistance"
  ],
  "Body_Armours_str": [
    "#% reduced Attribute Requirements",
    "#% additional Physical Damage Reduction",
    "#% of Damage taken Recouped as Life",
    "#% of Damage taken Recouped as Mana",
    "#% to all Maximum Elemental Resistances",
    "# to maximum Life",
    "#% increased Thorns damage",
    "#% to Chaos Resistance"
  ],
  "Body_Armours_str_dex": [
    "#% reduced Attribute Requirements",
    "#% additional Physical Damage Reduction",
    "#% of Damage taken Recouped as Life",
    "#% of Damage taken Recouped as Mana",
    "#% to all Maximum Elemental Resistances",
    "# to maximum Life",
    "#% increased Thorns damage",
    "#% to Chaos Resistance"
  ],
  "Body_Armours_str_dex_int": [
    "#% reduced Attribute Requirements",
    "#% additional Physical Damage Reduction",
    "#% of Damage taken Recouped as Life",
    "#% of Damage taken Recouped as Mana",
    "#% to all Maximum Elemental Resistances",
    "# to maximum Life",
    "#% increased Thorns damage",
    "#% to Chaos Resistance"
  ],
  "Body_Armours_str_int": [
    "#% reduced Attribute Requirements",
    "#% additional Physical Damage Reduction",
    "#% of Damage taken Recouped as Life",
    "#% of Damage taken Recouped as Mana",
    "#% to all Maximum Elemental Resistances",
    "# to maximum Life",
    "#% increased Thorns damage",
    "#% to Chaos Resistance"
  ],
  "Boots_dex": [
    "#% reduced Attribute Requirements",
    "#% to Fire Resistance",
    "#% to Cold Resistance",
    "#% to Lightning Resistance",
    "#% to Maximum Lightning Resistance",
    "#% increased Movement Speed",
    "#% increased Stun Threshold",
    "#% increased Freeze Threshold",
    "#% reduced Slowing Potency of Debuffs on You"
  ],
  "Boots_dex_int": [
    "#% reduced Attribute Requirements",
    "#% to Fire Resistance",
    "#% to Cold Resistance",
    "#% to Lightning Resistance",
    "#% to Maximum Lightning Resistance",
    "#% increased Movement Speed",
    "#% increased Stun Threshold",
    "#% increased Freeze Threshold",
    "#% reduced Slowing Potency of Debuffs on You"
  ],
  "Boots_int": [
    "#% reduced Attribute Requirements",
    "#% to Fire Resistance",
    "#% to Cold Resistance",
    "#% to Lightning Resistance",
    "#% to Maximum Lightning Resistance",
    "#% increased Movement Speed",
    "#% increased Stun Threshold",
    "#% increased Freeze Threshold",
    "#% reduced Slowing Potency of Debuffs on You"
  ],
  "Boots_str": [
    "#% reduced Attribute Requirements",
    "#% to Fire Resistance",
    "#% to Cold Resistance",
    "#% to Lightning Resistance",
    "#% to Maximum Lightning Resistance",
    "#% increased Movement Speed",
    "#% increased Stun Threshold",
    "#% increased Freeze Threshold",
    "#% reduced Slowing Potency of Debuffs on You"
  ],
  "Boots_str_dex": [
    "#% reduced Attribute Requirements",
    "#% to Fire Resistance",
    "#% to Cold Resistance",
    "#% to Lightning Resistance",
    "#% to Maximum Lightning Resistance",
    "#% increased Movement Speed",
    "#% increased Stun Threshold",
    "#% increased Freeze Threshold",
    "#% reduced Slowing Potency of Debuffs on You"
  ],
  "Boots_str_int": [
    "#% reduced Attribute Requirements",
    "#% to Fire Resistance",
    "#% to Cold Resistance",
    "#% to Lightning Resistance",
    "#% to Maximum Lightning Resistance",
    "#% increased Movement Speed",
    "#% increased Stun Threshold",
    "#% increased Freeze Threshold",
    "#% reduced Slowing Potency of Debuffs on You"
  ],
  "Bows": [
    "#% reduced Attribute Requirements",
    "#% increased Physical Damage",
    "Adds # to # Fire Damage",
    "Adds # to # Cold Damage",
    "Adds # to # Lightning Damage",
    "Adds # to # Chaos damage",
    "#% increased Attack Speed",
    "#% to Critical Damage Bonus",
    "#% chance to Maim on Hit",
    "#% chance to Blind Enemies on hit",
    "#% increased Elemental Damage with Attacks",
    "Bow Attacks fire # additional Arrows"
  ],
  "Bucklers": [
    "#% increased Evasion Rating",
    "#% reduced Attribute Requirements",
    "#% increased Thorns damage",
    "#% increased Block chance",
    "#% to maximum Block chance",
    "# Life gained when you Block",
    "# Mana gained when you Block"
  ],
  "Claws": [
    "#% reduced Attribute Requirements",
    "#% increased Physical Damage",
    "Adds # to # Fire Damage",
    "Adds # to # Cold Damage",
    "Adds # to # Lightning Damage",
    "Adds # to # Chaos damage",
    "#% increased Attack Speed",
    "#% to Critical Damage Bonus",
    "#% increased Elemental Damage with Attacks"
  ],
  "Crossbows": [
    "#% reduced Attribute Requirements",
    "#% increased Physical Damage",
    "Adds # to # Fire Damage",
    "Adds # to # Cold Damage",
    "Adds # to # Lightning Damage",
    "Adds # to # Chaos damage",
    "#% increased Attack Speed",
    "#% to Critical Damage Bonus",
    "#% chance to Maim on Hit",
    "#% chance to Blind Enemies on hit",
    "#% increased Elemental Damage with Attacks",
    "Loads an additional bolt"
  ],
  "Diamond": [
    "# to Strength",
    "# to Dexterity",
    "# to Intelligence",
    "#% to Fire Resistance",
    "#% to Cold Resistance",
    "#% to Lightning Resistance",
    "#% to Chaos Resistance",
    "Immune to Maim",
    "You cannot be Hindered",
    "Corrupted Blood cannot be inflicted on you",
    "Cannot be Blinded"
  ],
  "Emerald": [
    "# to Strength",
    "# to Dexterity",
    "# to Intelligence",
    "#% to Fire Resistance",
    "#% to Cold Resistance",
    "#% to Lightning Resistance",
    "#% to Chaos Resistance",
    "Immune to Maim",
    "You cannot be Hindered",
    "Corrupted Blood cannot be inflicted on you",
    "Cannot be Blinded"
  ],
  "Flails": [
    "#% reduced Attribute Requirements",
    "#% increased Physical Damage",
    "Adds # to # Fire Damage",
    "Adds # to # Cold Damage",
    "Adds # to # Lightning Damage",
    "Adds # to # Chaos damage",
    "#% increased Attack Speed",
    "#% to Critical Damage Bonus",
    "Causes #% increased Stun Buildup",
    "#% increased Melee Strike Range with this weapon",
    "#% chance to cause Bleeding on Hit",
    "Grants # Rage on Hit",
    "#% increased Elemental Damage with Attacks"
  ],
  "Foci": [
    "#% increased Energy Shield",
    "#% reduced Attribute Requirements",
    "# to maximum Mana",
    "#% increased Spell Damage"
  ],
  "Gloves_dex": [
    "#% reduced Attribute Requirements",
    "Damage Penetrates #% Fire Resistance",
    "Damage Penetrates #% Cold Resistance",
    "Damage Penetrates #% Lightning Resistance",
    "Break #% increased Armour",
    "#% increased Quantity of Gold Dropped by Slain Enemies",
    "# to Maximum Frenzy Charges",
    "# to Level of all Melee Skills"
  ],
  "Gloves_dex_int": [
    "#% reduced Attribute Requirements",
    "Damage Penetrates #% Fire Resistance",
    "Damage Penetrates #% Cold Resistance",
    "Damage Penetrates #% Lightning Resistance",
    "Break #% increased Armour",
    "#% increased Quantity of Gold Dropped by Slain Enemies",
    "# to Maximum Frenzy Charges",
    "# to Level of all Melee Skills"
  ],
  "Gloves_int": [
    "#% reduced Attribute Requirements",
    "Damage Penetrates #% Fire Resistance",
    "Damage Penetrates #% Cold Resistance",
    "Damage Penetrates #% Lightning Resistance",
    "Break #% increased Armour",
    "#% increased Quantity of Gold Dropped by Slain Enemies",
    "# to Maximum Frenzy Charges",
    "# to Level of all Melee Skills"
  ],
  "Gloves_str": [
    "#% reduced Attribute Requirements",
    "Damage Penetrates #% Fire Resistance",
    "Damage Penetrates #% Cold Resistance",
    "Damage Penetrates #% Lightning Resistance",
    "Break #% increased Armour",
    "#% increased Quantity of Gold Dropped by Slain Enemies",
    "# to Maximum Frenzy Charges",
    "# to Level of all Melee Skills"
  ],
  "Gloves_str_dex": [
    "#% reduced Attribute Requirements",
    "Damage Penetrates #% Fire Resistance",
    "Damage Penetrates #% Cold Resistance",
    "Damage Penetrates #% Lightning Resistance",
    "Break #% increased Armour",
    "#% increased Quantity of Gold Dropped by Slain Enemies",
    "# to Maximum Frenzy Charges",
    "# to Level of all Melee Skills"
  ],
  "Gloves_str_int": [
    "#% reduced Attribute Requirements",
    "Damage Penetrates #% Fire Resistance",
    "Damage Penetrates #% Cold Resistance",
    "Damage Penetrates #% Lightning Resistance",
    "Break #% increased Armour",
    "#% increased Quantity of Gold Dropped by Slain Enemies",
    "# to Maximum Frenzy Charges",
    "# to Level of all Melee Skills"
  ],
  "Helmets_dex": [
    "#% reduced Attribute Requirements",
    "#% to Maximum Cold Resistance",
    "# to Spirit",
    "# to Maximum Power Charges",
    "# to Accuracy Rating",
    "#% increased Life Regeneration rate",
    "#% increased Mana Regeneration Rate",
    "# to Level of all Minion Skills"
  ],
  "Helmets_dex_int": [
    "#% reduced Attribute Requirements",
    "#% to Maximum Cold Resistance",
    "# to Spirit",
    "# to Maximum Power Charges",
    "# to Accuracy Rating",
    "#% increased Life Regeneration rate",
    "#% increased Mana Regeneration Rate",
    "# to Level of all Minion Skills"
  ],
  "Helmets_int": [
    "#% reduced Attribute Requirements",
    "#% to Maximum Cold Resistance",
    "# to Spirit",
    "# to Maximum Power Charges",
    "# to Accuracy Rating",
    "#% increased Life Regeneration rate",
    "#% increased Mana Regeneration Rate",
    "# to Level of all Minion Skills"
  ],
  "Helmets_str": [
    "#% reduced Attribute Requirements",
    "#% to Maximum Cold Resistance",
    "# to Spirit",
    "# to Maximum Power Charges",
    "# to Accuracy Rating",
    "#% increased Life Regeneration rate",
    "#% increased Mana Regeneration Rate",
    "# to Level of all Minion Skills"
  ],
  "Helmets_str_dex": [
    "#% reduced Attribute Requirements",
    "#% to Maximum Cold Resistance",
    "# to Spirit",
    "# to Maximum Power Charges",
    "# to Accuracy Rating",
    "#% increased Life Regeneration rate",
    "#% increased Mana Regeneration Rate",
    "# to Level of all Minion Skills"
  ],
  "Helmets_str_int": [
    "#% reduced Attribute Requirements",
    "#% to Maximum Cold Resistance",
    "# to Spirit",
    "# to Maximum Power Charges",
    "# to Accuracy Rating",
    "#% increased Life Regeneration rate",
    "#% increased Mana Regeneration Rate",
    "# to Level of all Minion Skills"
  ],
  "One_Hand_Axes": [
    "#% reduced Attribute Requirements",
    "#% increased Physical Damage",
    "Adds # to # Fire Damage",
    "Adds # to # Cold Damage",
    "Adds # to # Lightning Damage",
    "Adds # to # Chaos damage",
    "#% increased Attack Speed",
    "#% to Critical Damage Bonus",
    "Causes #% increased Stun Buildup",
    "#% increased Melee Strike Range with this weapon",
    "#% chance to cause Bleeding on Hit",
    "Grants # Rage on Hit",
    "#% increased Elemental Damage with Attacks"
  ],
  "One_Hand_Maces": [
    "#% reduced Attribute Requirements",
    "#% increased Physical Damage",
    "Adds # to # Fire Damage",
    "Adds # to # Cold Damage",
    "Adds # to # Lightning Damage",
    "Adds # to # Chaos damage",
    "#% increased Attack Speed",
    "#% to Critical Damage Bonus",
    "Causes #% increased Stun Buildup",
    "#% increased Melee Strike Range with this weapon",
    "#% chance to cause Bleeding on Hit",
    "Grants # Rage on Hit",
    "#% increased Elemental Damage with Attacks"
  ],
  "One_Hand_Swords": [
    "#% reduced Attribute Requirements",
    "#% increased Physical Damage",
    "Adds # to # Fire Damage",
    "Adds # to # Cold Damage",
    "Adds # to # Lightning Damage",
    "Adds # to # Chaos damage",
    "#% increased Attack Speed",
    "#% to Critical Damage Bonus",
    "Causes #% increased Stun Buildup",
    "#% increased Melee Strike Range with this weapon",
    "#% chance to cause Bleeding on Hit",
    "#% chance to Poison on Hit with this weapon",
    "Grants # Rage on Hit",
    "#% increased Elemental Damage with Attacks"
  ],
  "Quarterstaves": [
    "#% reduced Attribute Requirements",
    "#% increased Physical Damage",
    "Adds # to # Fire Damage",
    "Adds # to # Cold Damage",
    "Adds # to # Lightning Damage",
    "Adds # to # Chaos damage",
    "#% increased Attack Speed",
    "#% to Critical Damage Bonus",
    "Causes #% increased Stun Buildup",
    "#% increased Melee Strike Range with this weapon",
    "#% chance to Poison on Hit with this weapon",
    "Grants # Rage on Hit",
    "#% increased Elemental Damage with Attacks"
  ],
  "Quivers": [
    "# to maximum Mana",
    "# to Accuracy Rating",
    "#% increased Damage",
    "#% increased Skill Speed",
    "#% increased Critical Damage Bonus",
    "Gain # Life per enemy killed",
    "Gain # Mana per enemy killed",
    "#% chance to Pierce an Enemy",
    "Projectiles have #% chance to Chain an additional time from terrain"
  ],
  "Rings": [
    "# to maximum Mana",
    "#% to Chaos Resistance",
    "#% increased Life Regeneration rate",
    "#% increased Mana Regeneration Rate",
    "#% to all Elemental Resistances",
    "#% increased Rarity of Items found",
    "#% increased Damage",
    "#% increased Skill Speed",
    "#% increased Critical Damage Bonus",
    "# to Strength",
    "# to Dexterity",
    "# to Intelligence"
  ],
  "Ruby": [
    "# to Strength",
    "# to Dexterity",
    "# to Intelligence",
    "#% to Fire Resistance",
    "#% to Cold Resistance",
    "#% to Lightning Resistance",
    "#% to Chaos Resistance",
    "Immune to Maim",
    "You cannot be Hindered",
    "Corrupted Blood cannot be inflicted on you",
    "Cannot be Blinded"
  ],
  "Sapphire": [
    "# to Strength",
    "# to Dexterity",
    "# to Intelligence",
    "#% to Fire Resistance",
    "#% to Cold Resistance",
    "#% to Lightning Resistance",
    "#% to Chaos Resistance",
    "Immune to Maim",
    "You cannot be Hindered",
    "Corrupted Blood cannot be inflicted on you",
    "Cannot be Blinded"
  ],
  "Sceptres": [
    "#% reduced Attribute Requirements",
    "#% increased Spirit",
    "Allies in your Presence deal #% increased Damage",
    "Allies in your Presence have #% increased Attack Speed",
    "Allies in your Presence have #% increased Cast Speed",
    "Allies in your Presence have #% increased Critical Damage Bonus"
  ],
  "Shields_str": [
    "#% reduced Attribute Requirements",
    "#% increased Thorns damage",
    "#% increased Block chance",
    "#% to maximum Block chance",
    "# Life gained when you Block",
    "# Mana gained when you Block"
  ],
  "Shields_str_dex": [
    "#% reduced Attribute Requirements",
    "#% increased Thorns damage",
    "#% increased Block chance",
    "#% to maximum Block chance",
    "# Life gained when you Block",
    "# Mana gained when you Block"
  ],
  "Shields_str_int": [
    "#% reduced Attribute Requirements",
    "#% increased Thorns damage",
    "#% increased Block chance",
    "#% to maximum Block chance",
    "# Life gained when you Block",
    "# Mana gained when you Block"
  ],
  "Spears": [
    "#% reduced Attribute Requirements",
    "#% increased Physical Damage",
    "Adds # to # Fire Damage",
    "Adds # to # Cold Damage",
    "Adds # to # Lightning Damage",
    "Adds # to # Chaos damage",
    "#% increased Attack Speed",
    "#% to Critical Damage Bonus",
    "Causes #% increased Stun Buildup",
    "#% increased Melee Strike Range with this weapon",
    "#% chance to Poison on Hit with this weapon",
    "Grants # Rage on Hit",
    "#% increased Elemental Damage with Attacks"
  ],
  "Staves": [
    "#% reduced Attribute Requirements",
    "# to Level of all Fire Spell Skills",
    "# to Level of all Cold Spell Skills",
    "# to Level of all Lightning Spell Skills",
    "# to Level of all Chaos Spell Skills",
    "# to Level of all Physical Spell Skills",
    "#% increased Spell Damage",
    "#% increased Flammability Magnitude",
    "#% increased Freeze Buildup",
    "#% increased chance to Shock",
    "#% increased Critical Hit Chance for Spells",
    "Gain # Life per enemy killed",
    "Gain # Mana per enemy killed",
    "#% increased Cast Speed"
  ],
  "Talismans": [
    "#% reduced Attribute Requirements",
    "#% increased Physical Damage",
    "Adds # to # Fire Damage",
    "Adds # to # Cold Damage",
    "Adds # to # Lightning Damage",
    "Adds # to # Chaos damage",
    "#% increased Attack Speed",
    "#% to Critical Damage Bonus",
    "#% increased Elemental Damage with Attacks"
  ],
  "Time-Lost_Diamond": [
    "# to Strength",
    "# to Dexterity",
    "# to Intelligence",
    "#% to Fire Resistance",
    "#% to Cold Resistance",
    "#% to Lightning Resistance",
    "#% to Chaos Resistance",
    "Immune to Maim",
    "You cannot be Hindered",
    "Corrupted Blood cannot be inflicted on you",
    "Cannot be Blinded"
  ],
  "Time-Lost_Emerald": [
    "# to Strength",
    "# to Dexterity",
    "# to Intelligence",
    "#% to Fire Resistance",
    "#% to Cold Resistance",
    "#% to Lightning Resistance",
    "#% to Chaos Resistance",
    "Immune to Maim",
    "You cannot be Hindered",
    "Corrupted Blood cannot be inflicted on you",
    "Cannot be Blinded"
  ],
  "Time-Lost_Ruby": [
    "# to Strength",
    "# to Dexterity",
    "# to Intelligence",
    "#% to Fire Resistance",
    "#% to Cold Resistance",
    "#% to Lightning Resistance",
    "#% to Chaos Resistance",
    "Immune to Maim",
    "You cannot be Hindered",
    "Corrupted Blood cannot be inflicted on you",
    "Cannot be Blinded"
  ],
  "Time-Lost_Sapphire": [
    "# to Strength",
    "# to Dexterity",
    "# to Intelligence",
    "#% to Fire Resistance",
    "#% to Cold Resistance",
    "#% to Lightning Resistance",
    "#% to Chaos Resistance",
    "Immune to Maim",
    "You cannot be Hindered",
    "Corrupted Blood cannot be inflicted on you",
    "Cannot be Blinded"
  ],
  "Two_Hand_Axes": [
    "#% reduced Attribute Requirements",
    "#% increased Physical Damage",
    "Adds # to # Fire Damage",
    "Adds # to # Cold Damage",
    "Adds # to # Lightning Damage",
    "Adds # to # Chaos damage",
    "#% increased Attack Speed",
    "#% to Critical Damage Bonus",
    "Causes #% increased Stun Buildup",
    "#% increased Melee Strike Range with this weapon",
    "#% chance to cause Bleeding on Hit",
    "Grants # Rage on Hit",
    "#% increased Elemental Damage with Attacks"
  ],
  "Two_Hand_Maces": [
    "#% reduced Attribute Requirements",
    "#% increased Physical Damage",
    "Adds # to # Fire Damage",
    "Adds # to # Cold Damage",
    "Adds # to # Lightning Damage",
    "Adds # to # Chaos damage",
    "#% increased Attack Speed",
    "#% to Critical Damage Bonus",
    "Causes #% increased Stun Buildup",
    "#% increased Melee Strike Range with this weapon",
    "#% chance to cause Bleeding on Hit",
    "Grants # Rage on Hit",
    "#% increased Elemental Damage with Attacks"
  ],
  "Wands": [
    "#% reduced Attribute Requirements",
    "# to Level of all Fire Spell Skills",
    "# to Level of all Cold Spell Skills",
    "# to Level of all Lightning Spell Skills",
    "# to Level of all Chaos Spell Skills",
    "# to Level of all Physical Spell Skills",
    "#% increased Spell Damage",
    "#% increased Flammability Magnitude",
    "#% increased Freeze Buildup",
    "#% increased chance to Shock",
    "#% increased Critical Hit Chance for Spells",
    "Gain # Life per enemy killed",
    "Gain # Mana per enemy killed",
    "#% increased Cast Speed"
  ]
};
  const UNIQUE_ITEMS = {
  "adonia's ego siphoning wand": {
    "name": "Adonia's Ego",
    "base": "Siphoning Wand",
    "pool": "Wands"
  },
  "aerisvane's wings burnished gauntlets": {
    "name": "Aerisvane's Wings",
    "base": "Burnished Gauntlets",
    "pool": "Gloves_str_dex"
  },
  "aerisvane's wings fists of stone": {
    "name": "Aerisvane's Wings",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "against the darkness time-lost diamond": {
    "name": "Against the Darkness",
    "base": "Time-Lost Diamond",
    "pool": "Time-Lost_Diamond"
  },
  "alkem eira blazon crest shield": {
    "name": "Alkem Eira",
    "base": "Blazon Crest Shield",
    "pool": "Shields_str_int"
  },
  "alpha's howl armoured cap": {
    "name": "Alpha's Howl",
    "base": "Armoured Cap",
    "pool": "Helmets_dex"
  },
  "amor mandragora changeling talisman": {
    "name": "Amor Mandragora",
    "base": "Changeling Talisman",
    "pool": "Talismans"
  },
  "andvarius gold ring": {
    "name": "Andvarius",
    "base": "Gold Ring",
    "pool": "Rings"
  },
  "apep's supremacy voodoo focus": {
    "name": "Apep's Supremacy",
    "base": "Voodoo Focus",
    "pool": "Foci"
  },
  "apron of emiran hermit garb": {
    "name": "Apron of Emiran",
    "base": "Hermit Garb",
    "pool": "Body_Armours_dex_int"
  },
  "arvil's wheel hardwood targe": {
    "name": "Arvil's Wheel",
    "base": "Hardwood Targe",
    "pool": "Shields_str_dex"
  },
  "ashrend pathfinder coat": {
    "name": "Ashrend",
    "base": "Pathfinder Coat",
    "pool": "Body_Armours_dex"
  },
  "asphyxia's wrath broadhead quiver": {
    "name": "Asphyxia's Wrath",
    "base": "Broadhead Quiver",
    "pool": "Quivers"
  },
  "assailum closed helm": {
    "name": "Assailum",
    "base": "Closed Helm",
    "pool": "Helmets_str_dex"
  },
  "astramentis stellar amulet": {
    "name": "Astramentis",
    "base": "Stellar Amulet",
    "pool": "Amulets"
  },
  "atsak's sight veiled mask": {
    "name": "Atsak's Sight",
    "base": "Veiled Mask",
    "pool": "Helmets_dex_int"
  },
  "atziri's acuity fists of stone": {
    "name": "Atziri's Acuity",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "atziri's acuity moulded mitts": {
    "name": "Atziri's Acuity",
    "base": "Moulded Mitts",
    "pool": "Gloves_str"
  },
  "atziri's contempt pronged spear": {
    "name": "Atziri's Contempt",
    "base": "Pronged Spear",
    "pool": "Spears"
  },
  "atziri's disdain gold circlet": {
    "name": "Atziri's Disdain",
    "base": "Gold Circlet",
    "pool": "Helmets_int"
  },
  "atziri's rule reflecting staff": {
    "name": "Atziri's Rule",
    "base": "Reflecting Staff",
    "pool": "Staves"
  },
  "atziri's splendour sacrificial regalia": {
    "name": "Atziri's Splendour",
    "base": "Sacrificial Regalia",
    "pool": "Body_Armours_str_dex_int"
  },
  "atziri's step cinched boots": {
    "name": "Atziri's Step",
    "base": "Cinched Boots",
    "pool": "Boots_dex"
  },
  "aurseize fists of stone": {
    "name": "Aurseize",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "aurseize layered gauntlets": {
    "name": "Aurseize",
    "base": "Layered Gauntlets",
    "pool": "Gloves_str_dex"
  },
  "beacon of azis solar amulet": {
    "name": "Beacon of Azis",
    "base": "Solar Amulet",
    "pool": "Amulets"
  },
  "beetlebite velour shoes": {
    "name": "Beetlebite",
    "base": "Velour Shoes",
    "pool": "Boots_dex_int"
  },
  "belly of the beast explorer armour": {
    "name": "Belly of the Beast",
    "base": "Explorer Armour",
    "pool": "Body_Armours_str_dex"
  },
  "berek's grip two-stone ring": {
    "name": "Berek's Grip",
    "base": "Two-Stone Ring",
    "pool": "Rings"
  },
  "berek's pass two-stone ring": {
    "name": "Berek's Pass",
    "base": "Two-Stone Ring",
    "pool": "Rings"
  },
  "berek's respite two-stone ring": {
    "name": "Berek's Respite",
    "base": "Two-Stone Ring",
    "pool": "Rings"
  },
  "beyond reach visceral quiver": {
    "name": "Beyond Reach",
    "base": "Visceral Quiver",
    "pool": "Quivers"
  },
  "birth of fury stone greaves": {
    "name": "Birth of Fury",
    "base": "Stone Greaves",
    "pool": "Boots_str"
  },
  "bitterbloom feathered robe": {
    "name": "Bitterbloom",
    "base": "Feathered Robe",
    "pool": "Body_Armours_int"
  },
  "black sun crest wrapped greathelm": {
    "name": "Black Sun Crest",
    "base": "Wrapped Greathelm",
    "pool": "Helmets_str"
  },
  "blackbraid fur plate": {
    "name": "Blackbraid",
    "base": "Fur Plate",
    "pool": "Body_Armours_str"
  },
  "blackflame amethyst ring": {
    "name": "Blackflame",
    "base": "Amethyst Ring",
    "pool": "Rings"
  },
  "blackgleam fire quiver": {
    "name": "Blackgleam",
    "base": "Fire Quiver",
    "pool": "Quivers"
  },
  "blackheart iron ring": {
    "name": "Blackheart",
    "base": "Iron Ring",
    "pool": "Rings"
  },
  "blistering bond ruby ring": {
    "name": "Blistering Bond",
    "base": "Ruby Ring",
    "pool": "Rings"
  },
  "blood price fierce greathelm": {
    "name": "Blood Price",
    "base": "Fierce Greathelm",
    "pool": "Helmets_str"
  },
  "bloodbarrier iron buckler": {
    "name": "Bloodbarrier",
    "base": "Iron Buckler",
    "pool": "Bucklers"
  },
  "blueflame bracers fists of stone": {
    "name": "Blueflame Bracers",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "blueflame bracers goldcast cuffs": {
    "name": "Blueflame Bracers",
    "base": "Goldcast Cuffs",
    "pool": "Gloves_str_int"
  },
  "bones of ullr lattice sandals": {
    "name": "Bones of Ullr",
    "base": "Lattice Sandals",
    "pool": "Boots_int"
  },
  "brain rattler studded greatclub": {
    "name": "Brain Rattler",
    "base": "Studded Greatclub",
    "pool": "Two_Hand_Maces"
  },
  "bramblejack rusted cuirass": {
    "name": "Bramblejack",
    "base": "Rusted Cuirass",
    "pool": "Body_Armours_str"
  },
  "briarpatch laced boots": {
    "name": "Briarpatch",
    "base": "Laced Boots",
    "pool": "Boots_dex"
  },
  "briskwrap rhoahide coat": {
    "name": "Briskwrap",
    "base": "Rhoahide Coat",
    "pool": "Body_Armours_dex"
  },
  "bristleboar leather vest": {
    "name": "Bristleboar",
    "base": "Leather Vest",
    "pool": "Body_Armours_dex"
  },
  "bronzebeard horned crown": {
    "name": "Bronzebeard",
    "base": "Horned Crown",
    "pool": "Helmets_str_int"
  },
  "brutus' lead sprinkler morning star": {
    "name": "Brutus' Lead Sprinkler",
    "base": "Morning Star",
    "pool": "One_Hand_Maces"
  },
  "brynhand's mark wooden club": {
    "name": "Brynhand's Mark",
    "base": "Wooden Club",
    "pool": "One_Hand_Maces"
  },
  "bursting decay unset ring": {
    "name": "Bursting Decay",
    "base": "Unset Ring",
    "pool": "Rings"
  },
  "bushwhack lizardscale boots": {
    "name": "Bushwhack",
    "base": "Lizardscale Boots",
    "pool": "Boots_dex"
  },
  "cadiro's gambit primed quiver": {
    "name": "Cadiro's Gambit",
    "base": "Primed Quiver",
    "pool": "Quivers"
  },
  "calgyra's arc ornate buckler": {
    "name": "Calgyra's Arc",
    "base": "Ornate Buckler",
    "pool": "Bucklers"
  },
  "call of the brotherhood topaz ring": {
    "name": "Call of the Brotherhood",
    "base": "Topaz Ring",
    "pool": "Rings"
  },
  "candlemaker fists of stone": {
    "name": "Candlemaker",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "candlemaker sombre gloves": {
    "name": "Candlemaker",
    "base": "Sombre Gloves",
    "pool": "Gloves_int"
  },
  "carnage heart amber amulet": {
    "name": "Carnage Heart",
    "base": "Amber Amulet",
    "pool": "Amulets"
  },
  "carrion call engraved focus": {
    "name": "Carrion Call",
    "base": "Engraved Focus",
    "pool": "Foci"
  },
  "chainsting hunting spear": {
    "name": "Chainsting",
    "base": "Hunting Spear",
    "pool": "Spears"
  },
  "chernobog's pillar blacksteel tower shield": {
    "name": "Chernobog's Pillar",
    "base": "Blacksteel Tower Shield",
    "pool": "Shields_str"
  },
  "chober chaber leaden greathammer": {
    "name": "Chober Chaber",
    "base": "Leaden Greathammer",
    "pool": "Two_Hand_Maces"
  },
  "choir of the storm jade amulet": {
    "name": "Choir of the Storm",
    "base": "Jade Amulet",
    "pool": "Amulets"
  },
  "cloak of defiance havoc raiment": {
    "name": "Cloak of Defiance",
    "base": "Havoc Raiment",
    "pool": "Body_Armours_int"
  },
  "cloak of flame silk robe": {
    "name": "Cloak of Flame",
    "base": "Silk Robe",
    "pool": "Body_Armours_int"
  },
  "coat of red chain mail": {
    "name": "Coat of Red",
    "base": "Chain Mail",
    "pool": "Body_Armours_str_dex"
  },
  "collapsing horizon wyrm quarterstaff": {
    "name": "Collapsing Horizon",
    "base": "Wyrm Quarterstaff",
    "pool": "Quarterstaves"
  },
  "constricting command viper cap": {
    "name": "Constricting Command",
    "base": "Viper Cap",
    "pool": "Helmets_dex"
  },
  "controlled metamorphosis diamond": {
    "name": "Controlled Metamorphosis",
    "base": "Diamond",
    "pool": "Diamond"
  },
  "cornathaum heavy crown": {
    "name": "Cornathaum",
    "base": "Heavy Crown",
    "pool": "Helmets_str_int"
  },
  "corona of the red sun warrior greathelm": {
    "name": "Corona of the Red Sun",
    "base": "Warrior Greathelm",
    "pool": "Helmets_str"
  },
  "corpsewade iron greaves": {
    "name": "Corpsewade",
    "base": "Iron Greaves",
    "pool": "Boots_str"
  },
  "cospri's will assassin garb": {
    "name": "Cospri's Will",
    "base": "Assassin Garb",
    "pool": "Body_Armours_dex_int"
  },
  "couture of crimson gilded vestments": {
    "name": "Couture of Crimson",
    "base": "Gilded Vestments",
    "pool": "Body_Armours_str_int"
  },
  "cracklecreep ruby ring": {
    "name": "Cracklecreep",
    "base": "Ruby Ring",
    "pool": "Rings"
  },
  "crest of ardura jingling crest shield": {
    "name": "Crest of Ardura",
    "base": "Jingling Crest Shield",
    "pool": "Shields_str_int"
  },
  "crown of eyes vermeil circlet": {
    "name": "Crown of Eyes",
    "base": "Vermeil Circlet",
    "pool": "Helmets_int"
  },
  "crown of the pale king cultist crown": {
    "name": "Crown of the Pale King",
    "base": "Cultist Crown",
    "pool": "Helmets_str_int"
  },
  "crown of the victor iron crown": {
    "name": "Crown of the Victor",
    "base": "Iron Crown",
    "pool": "Helmets_str_int"
  },
  "crown of thorns twig circlet": {
    "name": "Crown of Thorns",
    "base": "Twig Circlet",
    "pool": "Helmets_int"
  },
  "cursecarver acrid wand": {
    "name": "Cursecarver",
    "base": "Acrid Wand",
    "pool": "Wands"
  },
  "daevata's wind war spear": {
    "name": "Daevata's Wind",
    "base": "War Spear",
    "pool": "Spears"
  },
  "darkray vectors braced sabatons": {
    "name": "Darkray Vectors",
    "base": "Braced Sabatons",
    "pool": "Boots_str_dex"
  },
  "death articulated fists of stone": {
    "name": "Death Articulated",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "death articulated ornate gauntlets": {
    "name": "Death Articulated",
    "base": "Ornate Gauntlets",
    "pool": "Gloves_str_dex"
  },
  "death rush emerald ring": {
    "name": "Death Rush",
    "base": "Emerald Ring",
    "pool": "Rings"
  },
  "death's harp dualstring bow": {
    "name": "Death's Harp",
    "base": "Dualstring Bow",
    "pool": "Bows"
  },
  "deathblow doubled gauntlets": {
    "name": "Deathblow",
    "base": "Doubled Gauntlets",
    "pool": "Gloves_str_dex"
  },
  "deathblow fists of stone": {
    "name": "Deathblow",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "deathrattle twig focus": {
    "name": "Deathrattle",
    "base": "Twig Focus",
    "pool": "Foci"
  },
  "decree of acuity ancient visor": {
    "name": "Decree of Acuity",
    "base": "Ancient Visor",
    "pool": "Helmets_str_dex"
  },
  "decree of flight ancient leggings": {
    "name": "Decree of Flight",
    "base": "Ancient Leggings",
    "pool": "Boots_str_int"
  },
  "decree of loyalty ancient mail": {
    "name": "Decree of Loyalty",
    "base": "Ancient Mail",
    "pool": "Body_Armours_str_int"
  },
  "defiance of destiny jade amulet": {
    "name": "Defiance of Destiny",
    "base": "Jade Amulet",
    "pool": "Amulets"
  },
  "deidbell elite greathelm": {
    "name": "Deidbell",
    "base": "Elite Greathelm",
    "pool": "Helmets_str"
  },
  "demon stitcher fists of stone": {
    "name": "Demon Stitcher",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "demon stitcher intricate gloves": {
    "name": "Demon Stitcher",
    "base": "Intricate Gloves",
    "pool": "Gloves_int"
  },
  "dionadair splintered tower shield": {
    "name": "Dionadair",
    "base": "Splintered Tower Shield",
    "pool": "Shields_str"
  },
  "doedre's damning lazuli ring": {
    "name": "Doedre's Damning",
    "base": "Lazuli Ring",
    "pool": "Rings"
  },
  "doedre's tenure fists of stone": {
    "name": "Doedre's Tenure",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "doedre's tenure stitched gloves": {
    "name": "Doedre's Tenure",
    "base": "Stitched Gloves",
    "pool": "Gloves_int"
  },
  "doomfletch composite bow": {
    "name": "Doomfletch",
    "base": "Composite Bow",
    "pool": "Bows"
  },
  "doomgate braced tower shield": {
    "name": "Doomgate",
    "base": "Braced Tower Shield",
    "pool": "Shields_str"
  },
  "doryani's prototype scale mail": {
    "name": "Doryani's Prototype",
    "base": "Scale Mail",
    "pool": "Body_Armours_str_dex"
  },
  "double vision dyad crossbow": {
    "name": "Double Vision",
    "base": "Dyad Crossbow",
    "pool": "Crossbows"
  },
  "dreadfist bolstered mitts": {
    "name": "Dreadfist",
    "base": "Bolstered Mitts",
    "pool": "Gloves_str"
  },
  "dreadfist fists of stone": {
    "name": "Dreadfist",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "dream fragments sapphire ring": {
    "name": "Dream Fragments",
    "base": "Sapphire Ring",
    "pool": "Rings"
  },
  "drillneck penetrating quiver": {
    "name": "Drillneck",
    "base": "Penetrating Quiver",
    "pool": "Quivers"
  },
  "duality warding quarterstaff": {
    "name": "Duality",
    "base": "Warding Quarterstaff",
    "pool": "Quarterstaves"
  },
  "dunkelhalt leather buckler": {
    "name": "Dunkelhalt",
    "base": "Leather Buckler",
    "pool": "Bucklers"
  },
  "dusk vigil ashen staff": {
    "name": "Dusk Vigil",
    "base": "Ashen Staff",
    "pool": "Staves"
  },
  "dustbloom studded vest": {
    "name": "Dustbloom",
    "base": "Studded Vest",
    "pool": "Body_Armours_dex"
  },
  "earthbound voltaic staff": {
    "name": "Earthbound",
    "base": "Voltaic Staff",
    "pool": "Staves"
  },
  "edyrn's tusks iron cuirass": {
    "name": "Edyrn's Tusks",
    "base": "Iron Cuirass",
    "pool": "Body_Armours_str"
  },
  "effigy of cruelty antler focus": {
    "name": "Effigy of Cruelty",
    "base": "Antler Focus",
    "pool": "Foci"
  },
  "elevore hunter hood": {
    "name": "Elevore",
    "base": "Hunter Hood",
    "pool": "Helmets_dex"
  },
  "empire's grasp fists of stone": {
    "name": "Empire's Grasp",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "empire's grasp titan mitts": {
    "name": "Empire's Grasp",
    "base": "Titan Mitts",
    "pool": "Gloves_str"
  },
  "enezun's charge volatile wand": {
    "name": "Enezun's Charge",
    "base": "Volatile Wand",
    "pool": "Wands"
  },
  "enfolding dawn pilgrim vestments": {
    "name": "Enfolding Dawn",
    "base": "Pilgrim Vestments",
    "pool": "Body_Armours_str_int"
  },
  "erian's cobble guarded helm": {
    "name": "Erian's Cobble",
    "base": "Guarded Helm",
    "pool": "Helmets_str_dex"
  },
  "eshtera's path ring": {
    "name": "Eshtera's Path",
    "base": "Ring",
    "pool": "Rings"
  },
  "essentia sanguis fists of stone": {
    "name": "Essentia Sanguis",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "essentia sanguis furtive wraps": {
    "name": "Essentia Sanguis",
    "base": "Furtive Wraps",
    "pool": "Gloves_dex_int"
  },
  "eventide petals veridical chain": {
    "name": "Eventide Petals",
    "base": "Veridical Chain",
    "pool": "Amulets"
  },
  "evergrasping ring pearl ring": {
    "name": "Evergrasping Ring",
    "base": "Pearl Ring",
    "pool": "Rings"
  },
  "eye of chayula gold amulet": {
    "name": "Eye of Chayula",
    "base": "Gold Amulet",
    "pool": "Amulets"
  },
  "eyes of the runefather venerable defender": {
    "name": "Eyes of the Runefather",
    "base": "Venerable Defender",
    "pool": "Shields_str_dex"
  },
  "ezomyte peak soldier greathelm": {
    "name": "Ezomyte Peak",
    "base": "Soldier Greathelm",
    "pool": "Helmets_str"
  },
  "facebreaker fists of stone": {
    "name": "Facebreaker",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "facebreaker stocky mitts": {
    "name": "Facebreaker",
    "base": "Stocky Mitts",
    "pool": "Gloves_str"
  },
  "fairgraves' curse artillery bow": {
    "name": "Fairgraves' Curse",
    "base": "Artillery Bow",
    "pool": "Bows"
  },
  "feathered fortress crescent targe": {
    "name": "Feathered Fortress",
    "base": "Crescent Targe",
    "pool": "Shields_str_dex"
  },
  "fireflower solar amulet": {
    "name": "Fireflower",
    "base": "Solar Amulet",
    "pool": "Amulets"
  },
  "fixation of yix stellar amulet": {
    "name": "Fixation of Yix",
    "base": "Stellar Amulet",
    "pool": "Amulets"
  },
  "flesh crucible diamond": {
    "name": "Flesh Crucible",
    "base": "Diamond",
    "pool": "Diamond"
  },
  "font of power omen sceptre": {
    "name": "Font of Power",
    "base": "Omen Sceptre",
    "pool": "Sceptres"
  },
  "forgotten warden primal markings": {
    "name": "Forgotten Warden",
    "base": "Primal Markings",
    "pool": "Body_Armours_dex_int"
  },
  "foxshade quilted vest": {
    "name": "Foxshade",
    "base": "Quilted Vest",
    "pool": "Body_Armours_dex"
  },
  "from nothing diamond": {
    "name": "From Nothing",
    "base": "Diamond",
    "pool": "Diamond"
  },
  "frostbreath slim mace": {
    "name": "Frostbreath",
    "base": "Slim Mace",
    "pool": "One_Hand_Maces"
  },
  "fury of the king ashbark talisman": {
    "name": "Fury of the King",
    "base": "Ashbark Talisman",
    "pool": "Talismans"
  },
  "gamblesprint embossed boots": {
    "name": "Gamblesprint",
    "base": "Embossed Boots",
    "pool": "Boots_dex"
  },
  "geofri's sanctuary revered vestments": {
    "name": "Geofri's Sanctuary",
    "base": "Revered Vestments",
    "pool": "Body_Armours_str_int"
  },
  "ghostmarch threaded shoes": {
    "name": "Ghostmarch",
    "base": "Threaded Shoes",
    "pool": "Boots_dex_int"
  },
  "ghostwrithe tattered robe": {
    "name": "Ghostwrithe",
    "base": "Tattered Robe",
    "pool": "Body_Armours_int"
  },
  "gifts from above prismatic ring": {
    "name": "Gifts from Above",
    "base": "Prismatic Ring",
    "pool": "Rings"
  },
  "glimpse of chaos tribal mask": {
    "name": "Glimpse of Chaos",
    "base": "Tribal Mask",
    "pool": "Helmets_dex_int"
  },
  "gloamgown elementalist robe": {
    "name": "Gloamgown",
    "base": "Elementalist Robe",
    "pool": "Body_Armours_int"
  },
  "gloomform waxed jacket": {
    "name": "Gloomform",
    "base": "Waxed Jacket",
    "pool": "Body_Armours_dex_int"
  },
  "glowswarm lazuli ring": {
    "name": "Glowswarm",
    "base": "Lazuli Ring",
    "pool": "Rings"
  },
  "goldrim felt cap": {
    "name": "Goldrim",
    "base": "Felt Cap",
    "pool": "Helmets_dex"
  },
  "grand spectrum emerald": {
    "name": "Grand Spectrum",
    "base": "Emerald",
    "pool": "Emerald"
  },
  "grand spectrum ruby": {
    "name": "Grand Spectrum",
    "base": "Ruby",
    "pool": "Ruby"
  },
  "grand spectrum sapphire": {
    "name": "Grand Spectrum",
    "base": "Sapphire",
    "pool": "Sapphire"
  },
  "gravebind fists of stone": {
    "name": "Gravebind",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "gravebind rope cuffs": {
    "name": "Gravebind",
    "base": "Rope Cuffs",
    "pool": "Gloves_str_int"
  },
  "greed's embrace vaal cuirass": {
    "name": "Greed's Embrace",
    "base": "Vaal Cuirass",
    "pool": "Body_Armours_str"
  },
  "greymake brimmed helm": {
    "name": "Greymake",
    "base": "Brimmed Helm",
    "pool": "Helmets_str_dex"
  },
  "grip of kulemak abyssal signet": {
    "name": "Grip of Kulemak",
    "base": "Abyssal Signet",
    "pool": "Rings"
  },
  "grip of winter firm bracers": {
    "name": "Grip of Winter",
    "base": "Firm Bracers",
    "pool": "Gloves_dex"
  },
  "grip of winter fists of stone": {
    "name": "Grip of Winter",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "guiding palm of the eye shrine sceptre": {
    "name": "Guiding Palm of the Eye",
    "base": "Shrine Sceptre",
    "pool": "Sceptres"
  },
  "guiding palm of the heart shrine sceptre": {
    "name": "Guiding Palm of the Heart",
    "base": "Shrine Sceptre",
    "pool": "Sceptres"
  },
  "guiding palm of the mind shrine sceptre": {
    "name": "Guiding Palm of the Mind",
    "base": "Shrine Sceptre",
    "pool": "Sceptres"
  },
  "hand of wisdom and action fists of stone": {
    "name": "Hand of Wisdom and Action",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "hand of wisdom and action spiral wraps": {
    "name": "Hand of Wisdom and Action",
    "base": "Spiral Wraps",
    "pool": "Gloves_dex_int"
  },
  "hateforge fists of stone": {
    "name": "Hateforge",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "hateforge moulded mitts": {
    "name": "Hateforge",
    "base": "Moulded Mitts",
    "pool": "Gloves_str"
  },
  "heart of the well diamond": {
    "name": "Heart of the Well",
    "base": "Diamond",
    "pool": "Diamond"
  },
  "heartbound loop pearl ring": {
    "name": "Heartbound Loop",
    "base": "Pearl Ring",
    "pool": "Rings"
  },
  "heatshiver velvet cap": {
    "name": "Heatshiver",
    "base": "Velvet Cap",
    "pool": "Helmets_dex"
  },
  "hinekora's sight stellar amulet": {
    "name": "Hinekora's Sight",
    "base": "Stellar Amulet",
    "pool": "Amulets"
  },
  "hoghunt felled greatclub": {
    "name": "Hoghunt",
    "base": "Felled Greatclub",
    "pool": "Two_Hand_Maces"
  },
  "horns of bynden rusted greathelm": {
    "name": "Horns of Bynden",
    "base": "Rusted Greathelm",
    "pool": "Helmets_str"
  },
  "horror's flight engraved bracers": {
    "name": "Horror's Flight",
    "base": "Engraved Bracers",
    "pool": "Gloves_dex"
  },
  "horror's flight fists of stone": {
    "name": "Horror's Flight",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "hrimnor's hymn oak greathammer": {
    "name": "Hrimnor's Hymn",
    "base": "Oak Greathammer",
    "pool": "Two_Hand_Maces"
  },
  "hyrri's ire armoured vest": {
    "name": "Hyrri's Ire",
    "base": "Armoured Vest",
    "pool": "Body_Armours_dex"
  },
  "hysseg's claw familial talisman": {
    "name": "Hysseg's Claw",
    "base": "Familial Talisman",
    "pool": "Talismans"
  },
  "icefang orbit iron ring": {
    "name": "Icefang Orbit",
    "base": "Iron Ring",
    "pool": "Rings"
  },
  "icetomb mail vestments": {
    "name": "Icetomb",
    "base": "Mail Vestments",
    "pool": "Body_Armours_str_int"
  },
  "idle hands fists of stone": {
    "name": "Idle Hands",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "idle hands sectioned bracers": {
    "name": "Idle Hands",
    "base": "Sectioned Bracers",
    "pool": "Gloves_dex"
  },
  "idol of uldurn crimson amulet": {
    "name": "Idol of Uldurn",
    "base": "Crimson Amulet",
    "pool": "Amulets"
  },
  "igniferis crimson amulet": {
    "name": "Igniferis",
    "base": "Crimson Amulet",
    "pool": "Amulets"
  },
  "immaculate adherence solar amulet": {
    "name": "Immaculate Adherence",
    "base": "Solar Amulet",
    "pool": "Amulets"
  },
  "indigon magus tiara": {
    "name": "Indigon",
    "base": "Magus Tiara",
    "pool": "Helmets_int"
  },
  "innsmouth shabby hood": {
    "name": "Innsmouth",
    "base": "Shabby Hood",
    "pool": "Helmets_dex"
  },
  "ironbound warden bow": {
    "name": "Ironbound",
    "base": "Warden Bow",
    "pool": "Bows"
  },
  "irongrasp vagabond armour": {
    "name": "Irongrasp",
    "base": "Vagabond Armour",
    "pool": "Body_Armours_str_dex"
  },
  "ironride visored helm": {
    "name": "Ironride",
    "base": "Visored Helm",
    "pool": "Helmets_str_dex"
  },
  "jarngreipr fists of stone": {
    "name": "Jarngreipr",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "jarngreipr ringmail gauntlets": {
    "name": "Jarngreipr",
    "base": "Ringmail Gauntlets",
    "pool": "Gloves_str_dex"
  },
  "kalandra's touch ring": {
    "name": "Kalandra's Touch",
    "base": "Ring",
    "pool": "Rings"
  },
  "kaltenhalt ridged buckler": {
    "name": "Kaltenhalt",
    "base": "Ridged Buckler",
    "pool": "Bucklers"
  },
  "kaom's heart conqueror plate": {
    "name": "Kaom's Heart",
    "base": "Conqueror Plate",
    "pool": "Body_Armours_str"
  },
  "keeper of the arc spiritbone crown": {
    "name": "Keeper of the Arc",
    "base": "Spiritbone Crown",
    "pool": "Helmets_str_int"
  },
  "killjoy fists of stone": {
    "name": "Killjoy",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "killjoy linen wraps": {
    "name": "Killjoy",
    "base": "Linen Wraps",
    "pool": "Gloves_dex_int"
  },
  "kingsguard full plate": {
    "name": "Kingsguard",
    "base": "Full Plate",
    "pool": "Body_Armours_str"
  },
  "kitoko's current fists of stone": {
    "name": "Kitoko's Current",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "kitoko's current jewelled gloves": {
    "name": "Kitoko's Current",
    "base": "Jewelled Gloves",
    "pool": "Gloves_int"
  },
  "leer cast hooded mask": {
    "name": "Leer Cast",
    "base": "Hooded Mask",
    "pool": "Helmets_dex_int"
  },
  "legionstride rough greaves": {
    "name": "Legionstride",
    "base": "Rough Greaves",
    "pool": "Boots_str"
  },
  "leopold's applause embroidered gloves": {
    "name": "Leopold's Applause",
    "base": "Embroidered Gloves",
    "pool": "Gloves_int"
  },
  "leopold's applause fists of stone": {
    "name": "Leopold's Applause",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "levinstone topaz ring": {
    "name": "Levinstone",
    "base": "Topaz Ring",
    "pool": "Rings"
  },
  "lifesprig attuned wand": {
    "name": "Lifesprig",
    "base": "Attuned Wand",
    "pool": "Wands"
  },
  "lightning coil ancestral mail": {
    "name": "Lightning Coil",
    "base": "Ancestral Mail",
    "pool": "Body_Armours_str_dex"
  },
  "ligurium talisman lapis amulet": {
    "name": "Ligurium Talisman",
    "base": "Lapis Amulet",
    "pool": "Amulets"
  },
  "liminal coil twisted wand": {
    "name": "Liminal Coil",
    "base": "Twisted Wand",
    "pool": "Wands"
  },
  "lioneye's glare heavy bow": {
    "name": "Lioneye's Glare",
    "base": "Heavy Bow",
    "pool": "Bows"
  },
  "lochtonial caress fists of stone": {
    "name": "Lochtonial Caress",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "lochtonial caress tempered mitts": {
    "name": "Lochtonial Caress",
    "base": "Tempered Mitts",
    "pool": "Gloves_str"
  },
  "loreweave ornate ringmail": {
    "name": "Loreweave",
    "base": "Ornate Ringmail",
    "pool": "Body_Armours_str_int"
  },
  "luminous pace straw sandals": {
    "name": "Luminous Pace",
    "base": "Straw Sandals",
    "pool": "Boots_int"
  },
  "lycosidae rampart tower shield": {
    "name": "Lycosidae",
    "base": "Rampart Tower Shield",
    "pool": "Shields_str"
  },
  "mahuxotl's machination omen crest shield": {
    "name": "Mahuxotl's Machination",
    "base": "Omen Crest Shield",
    "pool": "Shields_str_int"
  },
  "maligaro's virtuosity fine bracers": {
    "name": "Maligaro's Virtuosity",
    "base": "Fine Bracers",
    "pool": "Gloves_dex"
  },
  "maligaro's virtuosity fists of stone": {
    "name": "Maligaro's Virtuosity",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "marohi erqi totemic greatclub": {
    "name": "Marohi Erqi",
    "base": "Totemic Greatclub",
    "pool": "Two_Hand_Maces"
  },
  "mask of the sanguimancer face mask": {
    "name": "Mask of the Sanguimancer",
    "base": "Face Mask",
    "pool": "Helmets_dex_int"
  },
  "mask of the stitched demon feathered tiara": {
    "name": "Mask of the Stitched Demon",
    "base": "Feathered Tiara",
    "pool": "Helmets_int"
  },
  "matsya crescent quarterstaff": {
    "name": "Matsya",
    "base": "Crescent Quarterstaff",
    "pool": "Quarterstaves"
  },
  "megalomaniac diamond": {
    "name": "Megalomaniac",
    "base": "Diamond",
    "pool": "Diamond"
  },
  "mind of the council death mask": {
    "name": "Mind of the Council",
    "base": "Death Mask",
    "pool": "Helmets_dex_int"
  },
  "ming's heart amethyst ring": {
    "name": "Ming's Heart",
    "base": "Amethyst Ring",
    "pool": "Rings"
  },
  "mist whisper makeshift crossbow": {
    "name": "Mist Whisper",
    "base": "Makeshift Crossbow",
    "pool": "Crossbows"
  },
  "mjölner torment club": {
    "name": "Mjölner",
    "base": "Torment Club",
    "pool": "One_Hand_Maces"
  },
  "morior invictus grand regalia": {
    "name": "Morior Invictus",
    "base": "Grand Regalia",
    "pool": "Body_Armours_str_dex_int"
  },
  "murkshaft toxic quiver": {
    "name": "Murkshaft",
    "base": "Toxic Quiver",
    "pool": "Quivers"
  },
  "myris uxor covert hood": {
    "name": "Myris Uxor",
    "base": "Covert Hood",
    "pool": "Helmets_dex"
  },
  "nazir's judgement steelpoint quarterstaff": {
    "name": "Nazir's Judgement",
    "base": "Steelpoint Quarterstaff",
    "pool": "Quarterstaves"
  },
  "nebuloch execratus hammer": {
    "name": "Nebuloch",
    "base": "Execratus Hammer",
    "pool": "One_Hand_Maces"
  },
  "necromantle bone raiment": {
    "name": "Necromantle",
    "base": "Bone Raiment",
    "pool": "Body_Armours_int"
  },
  "nightfall glacial fortress": {
    "name": "Nightfall",
    "base": "Glacial Fortress",
    "pool": "Shields_str"
  },
  "nightscale fists of stone": {
    "name": "Nightscale",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "nightscale pauascale gloves": {
    "name": "Nightscale",
    "base": "Pauascale Gloves",
    "pool": "Gloves_int"
  },
  "nocturne wooden buckler": {
    "name": "Nocturne",
    "base": "Wooden Buckler",
    "pool": "Bucklers"
  },
  "northpaw fists of stone": {
    "name": "Northpaw",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "northpaw suede bracers": {
    "name": "Northpaw",
    "base": "Suede Bracers",
    "pool": "Gloves_dex"
  },
  "oaksworn sigil crest shield": {
    "name": "Oaksworn",
    "base": "Sigil Crest Shield",
    "pool": "Shields_str_int"
  },
  "obern's bastion stacked sabatons": {
    "name": "Obern's Bastion",
    "base": "Stacked Sabatons",
    "pool": "Boots_str_dex"
  },
  "olrovasara torment club": {
    "name": "Olrovasara",
    "base": "Torment Club",
    "pool": "One_Hand_Maces"
  },
  "original sin amethyst ring": {
    "name": "Original Sin",
    "base": "Amethyst Ring",
    "pool": "Rings"
  },
  "painter's servant fists of stone": {
    "name": "Painter's Servant",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "painter's servant torn gloves": {
    "name": "Painter's Servant",
    "base": "Torn Gloves",
    "pool": "Gloves_int"
  },
  "palm of the dreamer shrine sceptre": {
    "name": "Palm of the Dreamer",
    "base": "Shrine Sceptre",
    "pool": "Sceptres"
  },
  "pariah's embrace cloaked mail": {
    "name": "Pariah's Embrace",
    "base": "Cloaked Mail",
    "pool": "Body_Armours_str_dex"
  },
  "perandus seal gold ring": {
    "name": "Perandus Seal",
    "base": "Gold Ring",
    "pool": "Rings"
  },
  "perfidy knight armour": {
    "name": "Perfidy",
    "base": "Knight Armour",
    "pool": "Body_Armours_str_dex"
  },
  "periphery heartwood shortbow": {
    "name": "Periphery",
    "base": "Heartwood Shortbow",
    "pool": "Bows"
  },
  "pillar of the caged god long quarterstaff": {
    "name": "Pillar of the Caged God",
    "base": "Long Quarterstaff",
    "pool": "Quarterstaves"
  },
  "plaguefinger fists of stone": {
    "name": "Plaguefinger",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "plaguefinger gauze wraps": {
    "name": "Plaguefinger",
    "base": "Gauze Wraps",
    "pool": "Gloves_dex_int"
  },
  "polcirkeln sapphire ring": {
    "name": "Polcirkeln",
    "base": "Sapphire Ring",
    "pool": "Rings"
  },
  "powertread hunting shoes": {
    "name": "Powertread",
    "base": "Hunting Shoes",
    "pool": "Boots_dex_int"
  },
  "pragmatism explorer armour": {
    "name": "Pragmatism",
    "base": "Explorer Armour",
    "pool": "Body_Armours_str_dex"
  },
  "prayers for rain keth raiment": {
    "name": "Prayers for Rain",
    "base": "Keth Raiment",
    "pool": "Body_Armours_int"
  },
  "prism guardian intricate crest shield": {
    "name": "Prism Guardian",
    "base": "Intricate Crest Shield",
    "pool": "Shields_str_int"
  },
  "prism of belief diamond": {
    "name": "Prism of Belief",
    "base": "Diamond",
    "pool": "Diamond"
  },
  "prized pain iron ring": {
    "name": "Prized Pain",
    "base": "Iron Ring",
    "pool": "Rings"
  },
  "quatl's molt serpentscale coat": {
    "name": "Quatl's Molt",
    "base": "Serpentscale Coat",
    "pool": "Body_Armours_dex"
  },
  "quecholli crumbling maul": {
    "name": "Quecholli",
    "base": "Crumbling Maul",
    "pool": "Two_Hand_Maces"
  },
  "queen of the forest smuggler coat": {
    "name": "Queen of the Forest",
    "base": "Smuggler Coat",
    "pool": "Body_Armours_dex"
  },
  "quill rain shortbow": {
    "name": "Quill Rain",
    "base": "Shortbow",
    "pool": "Bows"
  },
  "radiant grief lace hood": {
    "name": "Radiant Grief",
    "base": "Lace Hood",
    "pool": "Helmets_dex"
  },
  "rampart raptor tense crossbow": {
    "name": "Rampart Raptor",
    "base": "Tense Crossbow",
    "pool": "Crossbows"
  },
  "rathpith globe sacred focus": {
    "name": "Rathpith Globe",
    "base": "Sacred Focus",
    "pool": "Foci"
  },
  "rearguard blunt quiver": {
    "name": "Rearguard",
    "base": "Blunt Quiver",
    "pool": "Quivers"
  },
  "redblade banner heraldric tower shield": {
    "name": "Redblade Banner",
    "base": "Heraldric Tower Shield",
    "pool": "Shields_str"
  },
  "redemption trarthan cannon": {
    "name": "Redemption",
    "base": "Trarthan Cannon",
    "pool": "Crossbows"
  },
  "redflare conduit anchorite garb": {
    "name": "Redflare Conduit",
    "base": "Anchorite Garb",
    "pool": "Body_Armours_dex_int"
  },
  "revered resin amber amulet": {
    "name": "Revered Resin",
    "base": "Amber Amulet",
    "pool": "Amulets"
  },
  "reverie shaman mantle": {
    "name": "Reverie",
    "base": "Shaman Mantle",
    "pool": "Body_Armours_str_int"
  },
  "rise of the phoenix omen crest shield": {
    "name": "Rise of the Phoenix",
    "base": "Omen Crest Shield",
    "pool": "Shields_str_int"
  },
  "rondel de ezo plated buckler": {
    "name": "Rondel de Ezo",
    "base": "Plated Buckler",
    "pool": "Bucklers"
  },
  "rondel of fragility lunar amulet": {
    "name": "Rondel of Fragility",
    "base": "Lunar Amulet",
    "pool": "Amulets"
  },
  "runeseeker's call runic fork": {
    "name": "Runeseeker's Call",
    "base": "Runic Fork",
    "pool": "Wands"
  },
  "sacred flame shrine sceptre": {
    "name": "Sacred Flame",
    "base": "Shrine Sceptre",
    "pool": "Sceptres"
  },
  "sacrosanctum corvus mantle": {
    "name": "Sacrosanctum",
    "base": "Corvus Mantle",
    "pool": "Body_Armours_str_int"
  },
  "sadist's mercy flanged mace": {
    "name": "Sadist's Mercy",
    "base": "Flanged Mace",
    "pool": "One_Hand_Maces"
  },
  "saffell's frame emblem crest shield": {
    "name": "Saffell's Frame",
    "base": "Emblem Crest Shield",
    "pool": "Shields_str_int"
  },
  "safrin's resolve ring": {
    "name": "Safrin's Resolve",
    "base": "Ring",
    "pool": "Rings"
  },
  "saitha's spear barbed spear": {
    "name": "Saitha's Spear",
    "base": "Barbed Spear",
    "pool": "Spears"
  },
  "sands of silk shrouded vest": {
    "name": "Sands of Silk",
    "base": "Shrouded Vest",
    "pool": "Body_Armours_dex"
  },
  "sandstorm visage chain tiara": {
    "name": "Sandstorm Visage",
    "base": "Chain Tiara",
    "pool": "Helmets_int"
  },
  "sanguine diviner bone wand": {
    "name": "Sanguine Diviner",
    "base": "Bone Wand",
    "pool": "Wands"
  },
  "scold's bridle jade tiara": {
    "name": "Scold's Bridle",
    "base": "Jade Tiara",
    "pool": "Helmets_int"
  },
  "sculpted suffering warpick": {
    "name": "Sculpted Suffering",
    "base": "Warpick",
    "pool": "One_Hand_Maces"
  },
  "seed of cataclysm lazuli ring": {
    "name": "Seed of Cataclysm",
    "base": "Lazuli Ring",
    "pool": "Rings"
  },
  "seeing stars marching mace": {
    "name": "Seeing Stars",
    "base": "Marching Mace",
    "pool": "One_Hand_Maces"
  },
  "serle's grit kalguuran forgehammer": {
    "name": "Serle's Grit",
    "base": "Kalguuran Forgehammer",
    "pool": "One_Hand_Maces"
  },
  "serpent's egg gold amulet": {
    "name": "Serpent's Egg",
    "base": "Gold Amulet",
    "pool": "Amulets"
  },
  "serpent's lesson tonal focus": {
    "name": "Serpent's Lesson",
    "base": "Tonal Focus",
    "pool": "Foci"
  },
  "shackles of the wretched aged cuffs": {
    "name": "Shackles of the Wretched",
    "base": "Aged Cuffs",
    "pool": "Gloves_str_int"
  },
  "shackles of the wretched fists of stone": {
    "name": "Shackles of the Wretched",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "shankgonne covered sabatons": {
    "name": "Shankgonne",
    "base": "Covered Sabatons",
    "pool": "Boots_str_dex"
  },
  "shyaba temple maul": {
    "name": "Shyaba",
    "base": "Temple Maul",
    "pool": "Two_Hand_Maces"
  },
  "sierran inheritance marabout garb": {
    "name": "Sierran Inheritance",
    "base": "Marabout Garb",
    "pool": "Body_Armours_dex_int"
  },
  "silks of veneration enlightened robe": {
    "name": "Silks of Veneration",
    "base": "Enlightened Robe",
    "pool": "Body_Armours_int"
  },
  "silverthorne spiked buckler": {
    "name": "Silverthorne",
    "base": "Spiked Buckler",
    "pool": "Bucklers"
  },
  "sine aequo fists of stone": {
    "name": "Sine Aequo",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "sire of shards chiming staff": {
    "name": "Sire of Shards",
    "base": "Chiming Staff",
    "pool": "Staves"
  },
  "skysliver winged spear": {
    "name": "Skysliver",
    "base": "Winged Spear",
    "pool": "Spears"
  },
  "slivertongue zealot bow": {
    "name": "Slivertongue",
    "base": "Zealot Bow",
    "pool": "Bows"
  },
  "snakebite fists of stone": {
    "name": "Snakebite",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "snakebite spined bracers": {
    "name": "Snakebite",
    "base": "Spined Bracers",
    "pool": "Gloves_dex"
  },
  "snakepit pearl ring": {
    "name": "Snakepit",
    "base": "Pearl Ring",
    "pool": "Rings"
  },
  "soul mantle sacrificial mantle": {
    "name": "Soul Mantle",
    "base": "Sacrificial Mantle",
    "pool": "Body_Armours_str_int"
  },
  "spire of ire helix spear": {
    "name": "Spire of Ire",
    "base": "Helix Spear",
    "pool": "Spears"
  },
  "spiteful floret nettle talisman": {
    "name": "Spiteful Floret",
    "base": "Nettle Talisman",
    "pool": "Talismans"
  },
  "splinter of lorrata hardwood spear": {
    "name": "Splinter of Lorrata",
    "base": "Hardwood Spear",
    "pool": "Spears"
  },
  "splinterheart recurve bow": {
    "name": "Splinterheart",
    "base": "Recurve Bow",
    "pool": "Bows"
  },
  "split personality ruby": {
    "name": "Split Personality",
    "base": "Ruby",
    "pool": "Ruby"
  },
  "starkonja's head leatherbound hood": {
    "name": "Starkonja's Head",
    "base": "Leatherbound Hood",
    "pool": "Helmets_dex"
  },
  "stone of lazhwar lapis amulet": {
    "name": "Stone of Lazhwar",
    "base": "Lapis Amulet",
    "pool": "Foci"
  },
  "strugglescream stellar amulet": {
    "name": "Strugglescream",
    "base": "Stellar Amulet",
    "pool": "Amulets"
  },
  "sunsplinter array buckler": {
    "name": "Sunsplinter",
    "base": "Array Buckler",
    "pool": "Bucklers"
  },
  "surefooted sigil jade amulet": {
    "name": "Surefooted Sigil",
    "base": "Jade Amulet",
    "pool": "Amulets"
  },
  "surge of the tide lumbering talisman": {
    "name": "Surge of the Tide",
    "base": "Lumbering Talisman",
    "pool": "Talismans"
  },
  "svalinn crucible tower shield": {
    "name": "Svalinn",
    "base": "Crucible Tower Shield",
    "pool": "Shields_str"
  },
  "sylvan's effigy stoic sceptre": {
    "name": "Sylvan's Effigy",
    "base": "Stoic Sceptre",
    "pool": "Sceptres"
  },
  "tangletongue forked spear": {
    "name": "Tangletongue",
    "base": "Forked Spear",
    "pool": "Spears"
  },
  "taryn's shiver gelid staff": {
    "name": "Taryn's Shiver",
    "base": "Gelid Staff",
    "pool": "Staves"
  },
  "temporalis silk robe": {
    "name": "Temporalis",
    "base": "Silk Robe",
    "pool": "Body_Armours_int"
  },
  "tetzlapokal's desire votive raiment": {
    "name": "Tetzlapokal's Desire",
    "base": "Votive Raiment",
    "pool": "Body_Armours_int"
  },
  "the adorned diamond": {
    "name": "The Adorned",
    "base": "Diamond",
    "pool": "Diamond"
  },
  "the anvil bloodstone amulet": {
    "name": "The Anvil",
    "base": "Bloodstone Amulet",
    "pool": "Amulets"
  },
  "the auspex exquisite vest": {
    "name": "The Auspex",
    "base": "Exquisite Vest",
    "pool": "Body_Armours_dex"
  },
  "the barrow dweller rogue armour": {
    "name": "The Barrow Dweller",
    "base": "Rogue Armour",
    "pool": "Body_Armours_str_dex"
  },
  "the black doubt hexer's robe": {
    "name": "The Black Doubt",
    "base": "Hexer's Robe",
    "pool": "Body_Armours_int"
  },
  "the black insignia corsair cap": {
    "name": "The Black Insignia",
    "base": "Corsair Cap",
    "pool": "Helmets_dex"
  },
  "the blood thorn wrapped quarterstaff": {
    "name": "The Blood Thorn",
    "base": "Wrapped Quarterstaff",
    "pool": "Quarterstaves"
  },
  "the brass dome champion cuirass": {
    "name": "The Brass Dome",
    "base": "Champion Cuirass",
    "pool": "Body_Armours_str"
  },
  "the bringer of rain decorated helm": {
    "name": "The Bringer of Rain",
    "base": "Decorated Helm",
    "pool": "Helmets_str_dex"
  },
  "the burden of shadows chiming staff": {
    "name": "The Burden of Shadows",
    "base": "Chiming Staff",
    "pool": "Staves"
  },
  "the burrower topaz ring": {
    "name": "The Burrower",
    "base": "Topaz Ring",
    "pool": "Rings"
  },
  "the coming calamity heroic armour": {
    "name": "The Coming Calamity",
    "base": "Heroic Armour",
    "pool": "Body_Armours_str_dex"
  },
  "the covenant altar robe": {
    "name": "The Covenant",
    "base": "Altar Robe",
    "pool": "Body_Armours_int"
  },
  "the dancing mirage wayfarer jacket": {
    "name": "The Dancing Mirage",
    "base": "Wayfarer Jacket",
    "pool": "Body_Armours_dex_int"
  },
  "the dark defiler rattling sceptre": {
    "name": "The Dark Defiler",
    "base": "Rattling Sceptre",
    "pool": "Sceptres"
  },
  "the devouring diadem wicker tiara": {
    "name": "The Devouring Diadem",
    "base": "Wicker Tiara",
    "pool": "Helmets_int"
  },
  "the empty roar cultist greathammer": {
    "name": "The Empty Roar",
    "base": "Cultist Greathammer",
    "pool": "Two_Hand_Maces"
  },
  "the eternal spark crystal focus": {
    "name": "The Eternal Spark",
    "base": "Crystal Focus",
    "pool": "Foci"
  },
  "the everlasting gaze azure amulet": {
    "name": "The Everlasting Gaze",
    "base": "Azure Amulet",
    "pool": "Amulets"
  },
  "the flesh poppet vicious talisman": {
    "name": "The Flesh Poppet",
    "base": "Vicious Talisman",
    "pool": "Talismans"
  },
  "the hammer of faith giant maul": {
    "name": "The Hammer of Faith",
    "base": "Giant Maul",
    "pool": "Two_Hand_Maces"
  },
  "the hollow mask hewn mask": {
    "name": "The Hollow Mask",
    "base": "Hewn Mask",
    "pool": "Helmets_dex_int"
  },
  "the infinite pursuit bronze greaves": {
    "name": "The Infinite Pursuit",
    "base": "Bronze Greaves",
    "pool": "Boots_str"
  },
  "the knight-errant mail sabatons": {
    "name": "The Knight-errant",
    "base": "Mail Sabatons",
    "pool": "Boots_str_dex"
  },
  "the last lament desolate crossbow": {
    "name": "The Last Lament",
    "base": "Desolate Crossbow",
    "pool": "Crossbows"
  },
  "the lethal draw sacral quiver": {
    "name": "The Lethal Draw",
    "base": "Sacral Quiver",
    "pool": "Quivers"
  },
  "the master's reach fists of stone": {
    "name": "The Master's Reach",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "the master's reach tethering bands": {
    "name": "The Master's Reach",
    "base": "Tethering Bands",
    "pool": "Gloves_str_int"
  },
  "the mutable star cleric vestments": {
    "name": "The Mutable Star",
    "base": "Cleric Vestments",
    "pool": "Body_Armours_str_int"
  },
  "the ordained grand spear": {
    "name": "The Ordained",
    "base": "Grand Spear",
    "pool": "Spears"
  },
  "the pandemonius lapis amulet": {
    "name": "The Pandemonius",
    "base": "Lapis Amulet",
    "pool": "Amulets"
  },
  "the prisoner's manacles fists of stone": {
    "name": "The Prisoner's Manacles",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "the prisoner's manacles kalguuran cuffs": {
    "name": "The Prisoner's Manacles",
    "base": "Kalguuran Cuffs",
    "pool": "Gloves_str_int"
  },
  "the rat cage scout's vest": {
    "name": "The Rat Cage",
    "base": "Scout's Vest",
    "pool": "Body_Armours_dex"
  },
  "the raven's flock perching staff": {
    "name": "The Raven's Flock",
    "base": "Perching Staff",
    "pool": "Staves"
  },
  "the searing touch pyrophyte staff": {
    "name": "The Searing Touch",
    "base": "Pyrophyte Staff",
    "pool": "Staves"
  },
  "the sentry gothic quarterstaff": {
    "name": "The Sentry",
    "base": "Gothic Quarterstaff",
    "pool": "Quarterstaves"
  },
  "the smiling knight cowled helm": {
    "name": "The Smiling Knight",
    "base": "Cowled Helm",
    "pool": "Helmets_str_dex"
  },
  "the sunken vessel knight armour": {
    "name": "The Sunken Vessel",
    "base": "Knight Armour",
    "pool": "Body_Armours_str_dex"
  },
  "the surrender vaal tower shield": {
    "name": "The Surrender",
    "base": "Vaal Tower Shield",
    "pool": "Shields_str"
  },
  "the taming prismatic ring": {
    "name": "The Taming",
    "base": "Prismatic Ring",
    "pool": "Rings"
  },
  "the three dragons solid mask": {
    "name": "The Three Dragons",
    "base": "Solid Mask",
    "pool": "Helmets_dex_int"
  },
  "the unborn lich ravenous staff": {
    "name": "The Unborn Lich",
    "base": "Ravenous Staff",
    "pool": "Staves"
  },
  "the unleashed revered vestments": {
    "name": "The Unleashed",
    "base": "Revered Vestments",
    "pool": "Body_Armours_str_int"
  },
  "the vertex tribal mask": {
    "name": "The Vertex",
    "base": "Tribal Mask",
    "pool": "Helmets_dex_int"
  },
  "the vile knight shielded helm": {
    "name": "The Vile Knight",
    "base": "Shielded Helm",
    "pool": "Helmets_str_dex"
  },
  "the wailing wall effigial tower shield": {
    "name": "The Wailing Wall",
    "base": "Effigial Tower Shield",
    "pool": "Shields_str"
  },
  "the whispering ice permafrost staff": {
    "name": "The Whispering Ice",
    "base": "Permafrost Staff",
    "pool": "Staves"
  },
  "the wicked quill withered wand": {
    "name": "The Wicked Quill",
    "base": "Withered Wand",
    "pool": "Wands"
  },
  "thief's torment emerald ring": {
    "name": "Thief's Torment",
    "base": "Emerald Ring",
    "pool": "Rings"
  },
  "threaded light woven focus": {
    "name": "Threaded Light",
    "base": "Woven Focus",
    "pool": "Foci"
  },
  "thrillsteel spired greathelm": {
    "name": "Thrillsteel",
    "base": "Spired Greathelm",
    "pool": "Helmets_str"
  },
  "thunderfist fists of stone": {
    "name": "Thunderfist",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "thunderfist utility wraps": {
    "name": "Thunderfist",
    "base": "Utility Wraps",
    "pool": "Gloves_dex_int"
  },
  "tidebreaker pointed maul": {
    "name": "Tidebreaker",
    "base": "Pointed Maul",
    "pool": "Two_Hand_Maces"
  },
  "titanrot cataphract maraketh cuirass": {
    "name": "Titanrot Cataphract",
    "base": "Maraketh Cuirass",
    "pool": "Body_Armours_str"
  },
  "trampletoe trimmed greaves": {
    "name": "Trampletoe",
    "base": "Trimmed Greaves",
    "pool": "Boots_str"
  },
  "treefingers fists of stone": {
    "name": "Treefingers",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "treefingers riveted mitts": {
    "name": "Treefingers",
    "base": "Riveted Mitts",
    "pool": "Gloves_str"
  },
  "trenchtimbre spiked club": {
    "name": "Trenchtimbre",
    "base": "Spiked Club",
    "pool": "One_Hand_Maces"
  },
  "trephina forge maul": {
    "name": "Trephina",
    "base": "Forge Maul",
    "pool": "Two_Hand_Maces"
  },
  "twisted empyrean aberrant sledge": {
    "name": "Twisted Empyrean",
    "base": "Aberrant Sledge",
    "pool": "Two_Hand_Maces"
  },
  "tyranny's grip ironhead spear": {
    "name": "Tyranny's Grip",
    "base": "Ironhead Spear",
    "pool": "Spears"
  },
  "ungil's harmony azure amulet": {
    "name": "Ungil's Harmony",
    "base": "Azure Amulet",
    "pool": "Amulets"
  },
  "valako's vice fists of stone": {
    "name": "Valako's Vice",
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int"
  },
  "valako's vice plate gauntlets": {
    "name": "Valako's Vice",
    "base": "Plate Gauntlets",
    "pool": "Gloves_str_dex"
  },
  "veil of the night martyr crown": {
    "name": "Veil of the Night",
    "base": "Martyr Crown",
    "pool": "Helmets_str_int"
  },
  "veilpiercer amethyst ring": {
    "name": "Veilpiercer",
    "base": "Amethyst Ring",
    "pool": "Rings"
  },
  "venopuncture iron ring": {
    "name": "Venopuncture",
    "base": "Iron Ring",
    "pool": "Rings"
  },
  "ventor's gamble gold ring": {
    "name": "Ventor's Gamble",
    "base": "Gold Ring",
    "pool": "Rings"
  },
  "vestige of darkness tenebrous crown": {
    "name": "Vestige of Darkness",
    "base": "Tenebrous Crown",
    "pool": "Helmets_str_int"
  },
  "vigilant view emerald ring": {
    "name": "Vigilant View",
    "base": "Emerald Ring",
    "pool": "Rings"
  },
  "vis mortis plated raiment": {
    "name": "Vis Mortis",
    "base": "Plated Raiment",
    "pool": "Body_Armours_int"
  },
  "visage of ayah beaded circlet": {
    "name": "Visage of Ayah",
    "base": "Beaded Circlet",
    "pool": "Helmets_int"
  },
  "voices sapphire": {
    "name": "Voices",
    "base": "Sapphire",
    "pool": "Sapphire"
  },
  "voll's protector plated vestments": {
    "name": "Voll's Protector",
    "base": "Plated Vestments",
    "pool": "Body_Armours_str_int"
  },
  "voltaxic rift fanatic bow": {
    "name": "Voltaxic Rift",
    "base": "Fanatic Bow",
    "pool": "Bows"
  },
  "wake of destruction secured leggings": {
    "name": "Wake of Destruction",
    "base": "Secured Leggings",
    "pool": "Boots_str_int"
  },
  "wandering reliquary steel plate": {
    "name": "Wandering Reliquary",
    "base": "Steel Plate",
    "pool": "Body_Armours_str"
  },
  "wanderlust wrapped sandals": {
    "name": "Wanderlust",
    "base": "Wrapped Sandals",
    "pool": "Boots_int"
  },
  "waveshaper tideseer mantle": {
    "name": "Waveshaper",
    "base": "Tideseer Mantle",
    "pool": "Body_Armours_str_int"
  },
  "whisper of the brotherhood sapphire ring": {
    "name": "Whisper of the Brotherhood",
    "base": "Sapphire Ring",
    "pool": "Rings"
  },
  "widow's reign knight armour": {
    "name": "Widow's Reign",
    "base": "Knight Armour",
    "pool": "Body_Armours_str_dex"
  },
  "widowhail crude bow": {
    "name": "Widowhail",
    "base": "Crude Bow",
    "pool": "Bows"
  },
  "window to paradise barricade tower shield": {
    "name": "Window to Paradise",
    "base": "Barricade Tower Shield",
    "pool": "Shields_str"
  },
  "windscream feathered sandals": {
    "name": "Windscream",
    "base": "Feathered Sandals",
    "pool": "Boots_int"
  },
  "wings of caelyn rusted greathelm": {
    "name": "Wings of Caelyn",
    "base": "Rusted Greathelm",
    "pool": "Helmets_str"
  },
  "wondertrap silk slippers": {
    "name": "Wondertrap",
    "base": "Silk Slippers",
    "pool": "Boots_int"
  },
  "wulfsbane painted tower shield": {
    "name": "Wulfsbane",
    "base": "Painted Tower Shield",
    "pool": "Shields_str"
  },
  "xoph's blood amber amulet": {
    "name": "Xoph's Blood",
    "base": "Amber Amulet",
    "pool": "Amulets"
  },
  "yoke of suffering bloodstone amulet": {
    "name": "Yoke of Suffering",
    "base": "Bloodstone Amulet",
    "pool": "Amulets"
  },
  "yriel's fostering strider vest": {
    "name": "Yriel's Fostering",
    "base": "Strider Vest",
    "pool": "Body_Armours_dex"
  },
  "zaida's longevity ring": {
    "name": "Zaida's Longevity",
    "base": "Ring",
    "pool": "Rings"
  },
  "zerphi's serape scalper's jacket": {
    "name": "Zerphi's Serape",
    "base": "Scalper's Jacket",
    "pool": "Body_Armours_dex_int"
  }
};
  const UNIQUE_BASES = {
  "aberrant sledge": {
    "base": "Aberrant Sledge",
    "pool": "Two_Hand_Maces",
    "uniques": [
      "twisted empyrean aberrant sledge"
    ]
  },
  "abyssal signet": {
    "base": "Abyssal Signet",
    "pool": "Rings",
    "uniques": [
      "grip of kulemak abyssal signet"
    ]
  },
  "acrid wand": {
    "base": "Acrid Wand",
    "pool": "Wands",
    "uniques": [
      "cursecarver acrid wand"
    ]
  },
  "aged cuffs": {
    "base": "Aged Cuffs",
    "pool": "Gloves_str_int",
    "uniques": [
      "shackles of the wretched aged cuffs"
    ]
  },
  "altar robe": {
    "base": "Altar Robe",
    "pool": "Body_Armours_int",
    "uniques": [
      "the covenant altar robe"
    ]
  },
  "amber amulet": {
    "base": "Amber Amulet",
    "pool": "Amulets",
    "uniques": [
      "carnage heart amber amulet",
      "revered resin amber amulet",
      "xoph's blood amber amulet"
    ]
  },
  "amethyst ring": {
    "base": "Amethyst Ring",
    "pool": "Rings",
    "uniques": [
      "blackflame amethyst ring",
      "ming's heart amethyst ring",
      "original sin amethyst ring",
      "veilpiercer amethyst ring"
    ]
  },
  "ancestral mail": {
    "base": "Ancestral Mail",
    "pool": "Body_Armours_str_dex",
    "uniques": [
      "lightning coil ancestral mail"
    ]
  },
  "anchorite garb": {
    "base": "Anchorite Garb",
    "pool": "Body_Armours_dex_int",
    "uniques": [
      "redflare conduit anchorite garb"
    ]
  },
  "ancient leggings": {
    "base": "Ancient Leggings",
    "pool": "Boots_str_int",
    "uniques": [
      "decree of flight ancient leggings"
    ]
  },
  "ancient mail": {
    "base": "Ancient Mail",
    "pool": "Body_Armours_str_int",
    "uniques": [
      "decree of loyalty ancient mail"
    ]
  },
  "ancient visor": {
    "base": "Ancient Visor",
    "pool": "Helmets_str_dex",
    "uniques": [
      "decree of acuity ancient visor"
    ]
  },
  "antler focus": {
    "base": "Antler Focus",
    "pool": "Foci",
    "uniques": [
      "effigy of cruelty antler focus"
    ]
  },
  "armoured cap": {
    "base": "Armoured Cap",
    "pool": "Helmets_dex",
    "uniques": [
      "alpha's howl armoured cap"
    ]
  },
  "armoured vest": {
    "base": "Armoured Vest",
    "pool": "Body_Armours_dex",
    "uniques": [
      "hyrri's ire armoured vest"
    ]
  },
  "array buckler": {
    "base": "Array Buckler",
    "pool": "Bucklers",
    "uniques": [
      "sunsplinter array buckler"
    ]
  },
  "artillery bow": {
    "base": "Artillery Bow",
    "pool": "Bows",
    "uniques": [
      "fairgraves' curse artillery bow"
    ]
  },
  "ashbark talisman": {
    "base": "Ashbark Talisman",
    "pool": "Talismans",
    "uniques": [
      "fury of the king ashbark talisman"
    ]
  },
  "ashen staff": {
    "base": "Ashen Staff",
    "pool": "Staves",
    "uniques": [
      "dusk vigil ashen staff"
    ]
  },
  "assassin garb": {
    "base": "Assassin Garb",
    "pool": "Body_Armours_dex_int",
    "uniques": [
      "cospri's will assassin garb"
    ]
  },
  "attuned wand": {
    "base": "Attuned Wand",
    "pool": "Wands",
    "uniques": [
      "lifesprig attuned wand"
    ]
  },
  "azure amulet": {
    "base": "Azure Amulet",
    "pool": "Amulets",
    "uniques": [
      "the everlasting gaze azure amulet",
      "ungil's harmony azure amulet"
    ]
  },
  "barbed spear": {
    "base": "Barbed Spear",
    "pool": "Spears",
    "uniques": [
      "saitha's spear barbed spear"
    ]
  },
  "barricade tower shield": {
    "base": "Barricade Tower Shield",
    "pool": "Shields_str",
    "uniques": [
      "window to paradise barricade tower shield"
    ]
  },
  "beaded circlet": {
    "base": "Beaded Circlet",
    "pool": "Helmets_int",
    "uniques": [
      "visage of ayah beaded circlet"
    ]
  },
  "blacksteel tower shield": {
    "base": "Blacksteel Tower Shield",
    "pool": "Shields_str",
    "uniques": [
      "chernobog's pillar blacksteel tower shield"
    ]
  },
  "blazon crest shield": {
    "base": "Blazon Crest Shield",
    "pool": "Shields_str_int",
    "uniques": [
      "alkem eira blazon crest shield"
    ]
  },
  "bloodstone amulet": {
    "base": "Bloodstone Amulet",
    "pool": "Amulets",
    "uniques": [
      "the anvil bloodstone amulet",
      "yoke of suffering bloodstone amulet"
    ]
  },
  "blunt quiver": {
    "base": "Blunt Quiver",
    "pool": "Quivers",
    "uniques": [
      "rearguard blunt quiver"
    ]
  },
  "bolstered mitts": {
    "base": "Bolstered Mitts",
    "pool": "Gloves_str",
    "uniques": [
      "dreadfist bolstered mitts"
    ]
  },
  "bone raiment": {
    "base": "Bone Raiment",
    "pool": "Body_Armours_int",
    "uniques": [
      "necromantle bone raiment"
    ]
  },
  "bone wand": {
    "base": "Bone Wand",
    "pool": "Wands",
    "uniques": [
      "sanguine diviner bone wand"
    ]
  },
  "braced sabatons": {
    "base": "Braced Sabatons",
    "pool": "Boots_str_dex",
    "uniques": [
      "darkray vectors braced sabatons"
    ]
  },
  "braced tower shield": {
    "base": "Braced Tower Shield",
    "pool": "Shields_str",
    "uniques": [
      "doomgate braced tower shield"
    ]
  },
  "brimmed helm": {
    "base": "Brimmed Helm",
    "pool": "Helmets_str_dex",
    "uniques": [
      "greymake brimmed helm"
    ]
  },
  "broadhead quiver": {
    "base": "Broadhead Quiver",
    "pool": "Quivers",
    "uniques": [
      "asphyxia's wrath broadhead quiver"
    ]
  },
  "bronze greaves": {
    "base": "Bronze Greaves",
    "pool": "Boots_str",
    "uniques": [
      "the infinite pursuit bronze greaves"
    ]
  },
  "burnished gauntlets": {
    "base": "Burnished Gauntlets",
    "pool": "Gloves_str_dex",
    "uniques": [
      "aerisvane's wings burnished gauntlets"
    ]
  },
  "chain mail": {
    "base": "Chain Mail",
    "pool": "Body_Armours_str_dex",
    "uniques": [
      "coat of red chain mail"
    ]
  },
  "chain tiara": {
    "base": "Chain Tiara",
    "pool": "Helmets_int",
    "uniques": [
      "sandstorm visage chain tiara"
    ]
  },
  "champion cuirass": {
    "base": "Champion Cuirass",
    "pool": "Body_Armours_str",
    "uniques": [
      "the brass dome champion cuirass"
    ]
  },
  "changeling talisman": {
    "base": "Changeling Talisman",
    "pool": "Talismans",
    "uniques": [
      "amor mandragora changeling talisman"
    ]
  },
  "chiming staff": {
    "base": "Chiming Staff",
    "pool": "Staves",
    "uniques": [
      "sire of shards chiming staff",
      "the burden of shadows chiming staff"
    ]
  },
  "cinched boots": {
    "base": "Cinched Boots",
    "pool": "Boots_dex",
    "uniques": [
      "atziri's step cinched boots"
    ]
  },
  "cleric vestments": {
    "base": "Cleric Vestments",
    "pool": "Body_Armours_str_int",
    "uniques": [
      "the mutable star cleric vestments"
    ]
  },
  "cloaked mail": {
    "base": "Cloaked Mail",
    "pool": "Body_Armours_str_dex",
    "uniques": [
      "pariah's embrace cloaked mail"
    ]
  },
  "closed helm": {
    "base": "Closed Helm",
    "pool": "Helmets_str_dex",
    "uniques": [
      "assailum closed helm"
    ]
  },
  "composite bow": {
    "base": "Composite Bow",
    "pool": "Bows",
    "uniques": [
      "doomfletch composite bow"
    ]
  },
  "conqueror plate": {
    "base": "Conqueror Plate",
    "pool": "Body_Armours_str",
    "uniques": [
      "kaom's heart conqueror plate"
    ]
  },
  "corsair cap": {
    "base": "Corsair Cap",
    "pool": "Helmets_dex",
    "uniques": [
      "the black insignia corsair cap"
    ]
  },
  "corvus mantle": {
    "base": "Corvus Mantle",
    "pool": "Body_Armours_str_int",
    "uniques": [
      "sacrosanctum corvus mantle"
    ]
  },
  "covered sabatons": {
    "base": "Covered Sabatons",
    "pool": "Boots_str_dex",
    "uniques": [
      "shankgonne covered sabatons"
    ]
  },
  "covert hood": {
    "base": "Covert Hood",
    "pool": "Helmets_dex",
    "uniques": [
      "myris uxor covert hood"
    ]
  },
  "cowled helm": {
    "base": "Cowled Helm",
    "pool": "Helmets_str_dex",
    "uniques": [
      "the smiling knight cowled helm"
    ]
  },
  "crescent quarterstaff": {
    "base": "Crescent Quarterstaff",
    "pool": "Quarterstaves",
    "uniques": [
      "matsya crescent quarterstaff"
    ]
  },
  "crescent targe": {
    "base": "Crescent Targe",
    "pool": "Shields_str_dex",
    "uniques": [
      "feathered fortress crescent targe"
    ]
  },
  "crimson amulet": {
    "base": "Crimson Amulet",
    "pool": "Amulets",
    "uniques": [
      "idol of uldurn crimson amulet",
      "igniferis crimson amulet"
    ]
  },
  "crucible tower shield": {
    "base": "Crucible Tower Shield",
    "pool": "Shields_str",
    "uniques": [
      "svalinn crucible tower shield"
    ]
  },
  "crude bow": {
    "base": "Crude Bow",
    "pool": "Bows",
    "uniques": [
      "widowhail crude bow"
    ]
  },
  "crumbling maul": {
    "base": "Crumbling Maul",
    "pool": "Two_Hand_Maces",
    "uniques": [
      "quecholli crumbling maul"
    ]
  },
  "crystal focus": {
    "base": "Crystal Focus",
    "pool": "Foci",
    "uniques": [
      "the eternal spark crystal focus"
    ]
  },
  "cultist crown": {
    "base": "Cultist Crown",
    "pool": "Helmets_str_int",
    "uniques": [
      "crown of the pale king cultist crown"
    ]
  },
  "cultist greathammer": {
    "base": "Cultist Greathammer",
    "pool": "Two_Hand_Maces",
    "uniques": [
      "the empty roar cultist greathammer"
    ]
  },
  "death mask": {
    "base": "Death Mask",
    "pool": "Helmets_dex_int",
    "uniques": [
      "mind of the council death mask"
    ]
  },
  "decorated helm": {
    "base": "Decorated Helm",
    "pool": "Helmets_str_dex",
    "uniques": [
      "the bringer of rain decorated helm"
    ]
  },
  "desolate crossbow": {
    "base": "Desolate Crossbow",
    "pool": "Crossbows",
    "uniques": [
      "the last lament desolate crossbow"
    ]
  },
  "diamond": {
    "base": "Diamond",
    "pool": "Diamond",
    "uniques": [
      "controlled metamorphosis diamond",
      "flesh crucible diamond",
      "from nothing diamond",
      "heart of the well diamond",
      "megalomaniac diamond",
      "prism of belief diamond",
      "the adorned diamond"
    ]
  },
  "doubled gauntlets": {
    "base": "Doubled Gauntlets",
    "pool": "Gloves_str_dex",
    "uniques": [
      "deathblow doubled gauntlets"
    ]
  },
  "dualstring bow": {
    "base": "Dualstring Bow",
    "pool": "Bows",
    "uniques": [
      "death's harp dualstring bow"
    ]
  },
  "dyad crossbow": {
    "base": "Dyad Crossbow",
    "pool": "Crossbows",
    "uniques": [
      "double vision dyad crossbow"
    ]
  },
  "effigial tower shield": {
    "base": "Effigial Tower Shield",
    "pool": "Shields_str",
    "uniques": [
      "the wailing wall effigial tower shield"
    ]
  },
  "elementalist robe": {
    "base": "Elementalist Robe",
    "pool": "Body_Armours_int",
    "uniques": [
      "gloamgown elementalist robe"
    ]
  },
  "elite greathelm": {
    "base": "Elite Greathelm",
    "pool": "Helmets_str",
    "uniques": [
      "deidbell elite greathelm"
    ]
  },
  "emblem crest shield": {
    "base": "Emblem Crest Shield",
    "pool": "Shields_str_int",
    "uniques": [
      "saffell's frame emblem crest shield"
    ]
  },
  "embossed boots": {
    "base": "Embossed Boots",
    "pool": "Boots_dex",
    "uniques": [
      "gamblesprint embossed boots"
    ]
  },
  "embroidered gloves": {
    "base": "Embroidered Gloves",
    "pool": "Gloves_int",
    "uniques": [
      "leopold's applause embroidered gloves"
    ]
  },
  "emerald": {
    "base": "Emerald",
    "pool": "Emerald",
    "uniques": [
      "grand spectrum emerald"
    ]
  },
  "emerald ring": {
    "base": "Emerald Ring",
    "pool": "Rings",
    "uniques": [
      "death rush emerald ring",
      "thief's torment emerald ring",
      "vigilant view emerald ring"
    ]
  },
  "engraved bracers": {
    "base": "Engraved Bracers",
    "pool": "Gloves_dex",
    "uniques": [
      "horror's flight engraved bracers"
    ]
  },
  "engraved focus": {
    "base": "Engraved Focus",
    "pool": "Foci",
    "uniques": [
      "carrion call engraved focus"
    ]
  },
  "enlightened robe": {
    "base": "Enlightened Robe",
    "pool": "Body_Armours_int",
    "uniques": [
      "silks of veneration enlightened robe"
    ]
  },
  "execratus hammer": {
    "base": "Execratus Hammer",
    "pool": "One_Hand_Maces",
    "uniques": [
      "nebuloch execratus hammer"
    ]
  },
  "explorer armour": {
    "base": "Explorer Armour",
    "pool": "Body_Armours_str_dex",
    "uniques": [
      "belly of the beast explorer armour",
      "pragmatism explorer armour"
    ]
  },
  "exquisite vest": {
    "base": "Exquisite Vest",
    "pool": "Body_Armours_dex",
    "uniques": [
      "the auspex exquisite vest"
    ]
  },
  "face mask": {
    "base": "Face Mask",
    "pool": "Helmets_dex_int",
    "uniques": [
      "mask of the sanguimancer face mask"
    ]
  },
  "familial talisman": {
    "base": "Familial Talisman",
    "pool": "Talismans",
    "uniques": [
      "hysseg's claw familial talisman"
    ]
  },
  "fanatic bow": {
    "base": "Fanatic Bow",
    "pool": "Bows",
    "uniques": [
      "voltaxic rift fanatic bow"
    ]
  },
  "feathered robe": {
    "base": "Feathered Robe",
    "pool": "Body_Armours_int",
    "uniques": [
      "bitterbloom feathered robe"
    ]
  },
  "feathered sandals": {
    "base": "Feathered Sandals",
    "pool": "Boots_int",
    "uniques": [
      "windscream feathered sandals"
    ]
  },
  "feathered tiara": {
    "base": "Feathered Tiara",
    "pool": "Helmets_int",
    "uniques": [
      "mask of the stitched demon feathered tiara"
    ]
  },
  "felled greatclub": {
    "base": "Felled Greatclub",
    "pool": "Two_Hand_Maces",
    "uniques": [
      "hoghunt felled greatclub"
    ]
  },
  "felt cap": {
    "base": "Felt Cap",
    "pool": "Helmets_dex",
    "uniques": [
      "goldrim felt cap"
    ]
  },
  "fierce greathelm": {
    "base": "Fierce Greathelm",
    "pool": "Helmets_str",
    "uniques": [
      "blood price fierce greathelm"
    ]
  },
  "fine bracers": {
    "base": "Fine Bracers",
    "pool": "Gloves_dex",
    "uniques": [
      "maligaro's virtuosity fine bracers"
    ]
  },
  "fire quiver": {
    "base": "Fire Quiver",
    "pool": "Quivers",
    "uniques": [
      "blackgleam fire quiver"
    ]
  },
  "firm bracers": {
    "base": "Firm Bracers",
    "pool": "Gloves_dex",
    "uniques": [
      "grip of winter firm bracers"
    ]
  },
  "fists of stone": {
    "base": "Fists of Stone",
    "pool": "Gloves_dex_int",
    "uniques": [
      "aerisvane's wings fists of stone",
      "atziri's acuity fists of stone",
      "aurseize fists of stone",
      "blueflame bracers fists of stone",
      "candlemaker fists of stone",
      "death articulated fists of stone",
      "deathblow fists of stone",
      "demon stitcher fists of stone",
      "doedre's tenure fists of stone",
      "dreadfist fists of stone",
      "empire's grasp fists of stone",
      "essentia sanguis fists of stone",
      "facebreaker fists of stone",
      "gravebind fists of stone",
      "grip of winter fists of stone",
      "hand of wisdom and action fists of stone",
      "hateforge fists of stone",
      "horror's flight fists of stone",
      "idle hands fists of stone",
      "jarngreipr fists of stone",
      "killjoy fists of stone",
      "kitoko's current fists of stone",
      "leopold's applause fists of stone",
      "lochtonial caress fists of stone",
      "maligaro's virtuosity fists of stone",
      "nightscale fists of stone",
      "northpaw fists of stone",
      "painter's servant fists of stone",
      "plaguefinger fists of stone",
      "shackles of the wretched fists of stone",
      "sine aequo fists of stone",
      "snakebite fists of stone",
      "the master's reach fists of stone",
      "the prisoner's manacles fists of stone",
      "thunderfist fists of stone",
      "treefingers fists of stone",
      "valako's vice fists of stone"
    ]
  },
  "flanged mace": {
    "base": "Flanged Mace",
    "pool": "One_Hand_Maces",
    "uniques": [
      "sadist's mercy flanged mace"
    ]
  },
  "forge maul": {
    "base": "Forge Maul",
    "pool": "Two_Hand_Maces",
    "uniques": [
      "trephina forge maul"
    ]
  },
  "forked spear": {
    "base": "Forked Spear",
    "pool": "Spears",
    "uniques": [
      "tangletongue forked spear"
    ]
  },
  "full plate": {
    "base": "Full Plate",
    "pool": "Body_Armours_str",
    "uniques": [
      "kingsguard full plate"
    ]
  },
  "fur plate": {
    "base": "Fur Plate",
    "pool": "Body_Armours_str",
    "uniques": [
      "blackbraid fur plate"
    ]
  },
  "furtive wraps": {
    "base": "Furtive Wraps",
    "pool": "Gloves_dex_int",
    "uniques": [
      "essentia sanguis furtive wraps"
    ]
  },
  "gauze wraps": {
    "base": "Gauze Wraps",
    "pool": "Gloves_dex_int",
    "uniques": [
      "plaguefinger gauze wraps"
    ]
  },
  "gelid staff": {
    "base": "Gelid Staff",
    "pool": "Staves",
    "uniques": [
      "taryn's shiver gelid staff"
    ]
  },
  "giant maul": {
    "base": "Giant Maul",
    "pool": "Two_Hand_Maces",
    "uniques": [
      "the hammer of faith giant maul"
    ]
  },
  "gilded vestments": {
    "base": "Gilded Vestments",
    "pool": "Body_Armours_str_int",
    "uniques": [
      "couture of crimson gilded vestments"
    ]
  },
  "glacial fortress": {
    "base": "Glacial Fortress",
    "pool": "Shields_str",
    "uniques": [
      "nightfall glacial fortress"
    ]
  },
  "gold amulet": {
    "base": "Gold Amulet",
    "pool": "Amulets",
    "uniques": [
      "eye of chayula gold amulet",
      "serpent's egg gold amulet"
    ]
  },
  "gold circlet": {
    "base": "Gold Circlet",
    "pool": "Helmets_int",
    "uniques": [
      "atziri's disdain gold circlet"
    ]
  },
  "gold ring": {
    "base": "Gold Ring",
    "pool": "Rings",
    "uniques": [
      "andvarius gold ring",
      "perandus seal gold ring",
      "ventor's gamble gold ring"
    ]
  },
  "goldcast cuffs": {
    "base": "Goldcast Cuffs",
    "pool": "Gloves_str_int",
    "uniques": [
      "blueflame bracers goldcast cuffs"
    ]
  },
  "gothic quarterstaff": {
    "base": "Gothic Quarterstaff",
    "pool": "Quarterstaves",
    "uniques": [
      "the sentry gothic quarterstaff"
    ]
  },
  "grand regalia": {
    "base": "Grand Regalia",
    "pool": "Body_Armours_str_dex_int",
    "uniques": [
      "morior invictus grand regalia"
    ]
  },
  "grand spear": {
    "base": "Grand Spear",
    "pool": "Spears",
    "uniques": [
      "the ordained grand spear"
    ]
  },
  "guarded helm": {
    "base": "Guarded Helm",
    "pool": "Helmets_str_dex",
    "uniques": [
      "erian's cobble guarded helm"
    ]
  },
  "hardwood spear": {
    "base": "Hardwood Spear",
    "pool": "Spears",
    "uniques": [
      "splinter of lorrata hardwood spear"
    ]
  },
  "hardwood targe": {
    "base": "Hardwood Targe",
    "pool": "Shields_str_dex",
    "uniques": [
      "arvil's wheel hardwood targe"
    ]
  },
  "havoc raiment": {
    "base": "Havoc Raiment",
    "pool": "Body_Armours_int",
    "uniques": [
      "cloak of defiance havoc raiment"
    ]
  },
  "heartwood shortbow": {
    "base": "Heartwood Shortbow",
    "pool": "Bows",
    "uniques": [
      "periphery heartwood shortbow"
    ]
  },
  "heavy bow": {
    "base": "Heavy Bow",
    "pool": "Bows",
    "uniques": [
      "lioneye's glare heavy bow"
    ]
  },
  "heavy crown": {
    "base": "Heavy Crown",
    "pool": "Helmets_str_int",
    "uniques": [
      "cornathaum heavy crown"
    ]
  },
  "helix spear": {
    "base": "Helix Spear",
    "pool": "Spears",
    "uniques": [
      "spire of ire helix spear"
    ]
  },
  "heraldric tower shield": {
    "base": "Heraldric Tower Shield",
    "pool": "Shields_str",
    "uniques": [
      "redblade banner heraldric tower shield"
    ]
  },
  "hermit garb": {
    "base": "Hermit Garb",
    "pool": "Body_Armours_dex_int",
    "uniques": [
      "apron of emiran hermit garb"
    ]
  },
  "heroic armour": {
    "base": "Heroic Armour",
    "pool": "Body_Armours_str_dex",
    "uniques": [
      "the coming calamity heroic armour"
    ]
  },
  "hewn mask": {
    "base": "Hewn Mask",
    "pool": "Helmets_dex_int",
    "uniques": [
      "the hollow mask hewn mask"
    ]
  },
  "hexer's robe": {
    "base": "Hexer's Robe",
    "pool": "Body_Armours_int",
    "uniques": [
      "the black doubt hexer's robe"
    ]
  },
  "hooded mask": {
    "base": "Hooded Mask",
    "pool": "Helmets_dex_int",
    "uniques": [
      "leer cast hooded mask"
    ]
  },
  "horned crown": {
    "base": "Horned Crown",
    "pool": "Helmets_str_int",
    "uniques": [
      "bronzebeard horned crown"
    ]
  },
  "hunter hood": {
    "base": "Hunter Hood",
    "pool": "Helmets_dex",
    "uniques": [
      "elevore hunter hood"
    ]
  },
  "hunting shoes": {
    "base": "Hunting Shoes",
    "pool": "Boots_dex_int",
    "uniques": [
      "powertread hunting shoes"
    ]
  },
  "hunting spear": {
    "base": "Hunting Spear",
    "pool": "Spears",
    "uniques": [
      "chainsting hunting spear"
    ]
  },
  "intricate crest shield": {
    "base": "Intricate Crest Shield",
    "pool": "Shields_str_int",
    "uniques": [
      "prism guardian intricate crest shield"
    ]
  },
  "intricate gloves": {
    "base": "Intricate Gloves",
    "pool": "Gloves_int",
    "uniques": [
      "demon stitcher intricate gloves"
    ]
  },
  "iron buckler": {
    "base": "Iron Buckler",
    "pool": "Bucklers",
    "uniques": [
      "bloodbarrier iron buckler"
    ]
  },
  "iron crown": {
    "base": "Iron Crown",
    "pool": "Helmets_str_int",
    "uniques": [
      "crown of the victor iron crown"
    ]
  },
  "iron cuirass": {
    "base": "Iron Cuirass",
    "pool": "Body_Armours_str",
    "uniques": [
      "edyrn's tusks iron cuirass"
    ]
  },
  "iron greaves": {
    "base": "Iron Greaves",
    "pool": "Boots_str",
    "uniques": [
      "corpsewade iron greaves"
    ]
  },
  "iron ring": {
    "base": "Iron Ring",
    "pool": "Rings",
    "uniques": [
      "blackheart iron ring",
      "icefang orbit iron ring",
      "prized pain iron ring",
      "venopuncture iron ring"
    ]
  },
  "ironhead spear": {
    "base": "Ironhead Spear",
    "pool": "Spears",
    "uniques": [
      "tyranny's grip ironhead spear"
    ]
  },
  "jade amulet": {
    "base": "Jade Amulet",
    "pool": "Amulets",
    "uniques": [
      "choir of the storm jade amulet",
      "defiance of destiny jade amulet",
      "surefooted sigil jade amulet"
    ]
  },
  "jade tiara": {
    "base": "Jade Tiara",
    "pool": "Helmets_int",
    "uniques": [
      "scold's bridle jade tiara"
    ]
  },
  "jewelled gloves": {
    "base": "Jewelled Gloves",
    "pool": "Gloves_int",
    "uniques": [
      "kitoko's current jewelled gloves"
    ]
  },
  "jingling crest shield": {
    "base": "Jingling Crest Shield",
    "pool": "Shields_str_int",
    "uniques": [
      "crest of ardura jingling crest shield"
    ]
  },
  "kalguuran cuffs": {
    "base": "Kalguuran Cuffs",
    "pool": "Gloves_str_int",
    "uniques": [
      "the prisoner's manacles kalguuran cuffs"
    ]
  },
  "kalguuran forgehammer": {
    "base": "Kalguuran Forgehammer",
    "pool": "One_Hand_Maces",
    "uniques": [
      "serle's grit kalguuran forgehammer"
    ]
  },
  "keth raiment": {
    "base": "Keth Raiment",
    "pool": "Body_Armours_int",
    "uniques": [
      "prayers for rain keth raiment"
    ]
  },
  "knight armour": {
    "base": "Knight Armour",
    "pool": "Body_Armours_str_dex",
    "uniques": [
      "perfidy knight armour",
      "the sunken vessel knight armour",
      "widow's reign knight armour"
    ]
  },
  "lace hood": {
    "base": "Lace Hood",
    "pool": "Helmets_dex",
    "uniques": [
      "radiant grief lace hood"
    ]
  },
  "laced boots": {
    "base": "Laced Boots",
    "pool": "Boots_dex",
    "uniques": [
      "briarpatch laced boots"
    ]
  },
  "lapis amulet": {
    "base": "Lapis Amulet",
    "pool": "Amulets",
    "uniques": [
      "ligurium talisman lapis amulet",
      "stone of lazhwar lapis amulet",
      "the pandemonius lapis amulet"
    ]
  },
  "lattice sandals": {
    "base": "Lattice Sandals",
    "pool": "Boots_int",
    "uniques": [
      "bones of ullr lattice sandals"
    ]
  },
  "layered gauntlets": {
    "base": "Layered Gauntlets",
    "pool": "Gloves_str_dex",
    "uniques": [
      "aurseize layered gauntlets"
    ]
  },
  "lazuli ring": {
    "base": "Lazuli Ring",
    "pool": "Rings",
    "uniques": [
      "doedre's damning lazuli ring",
      "glowswarm lazuli ring",
      "seed of cataclysm lazuli ring"
    ]
  },
  "leaden greathammer": {
    "base": "Leaden Greathammer",
    "pool": "Two_Hand_Maces",
    "uniques": [
      "chober chaber leaden greathammer"
    ]
  },
  "leather buckler": {
    "base": "Leather Buckler",
    "pool": "Bucklers",
    "uniques": [
      "dunkelhalt leather buckler"
    ]
  },
  "leather vest": {
    "base": "Leather Vest",
    "pool": "Body_Armours_dex",
    "uniques": [
      "bristleboar leather vest"
    ]
  },
  "leatherbound hood": {
    "base": "Leatherbound Hood",
    "pool": "Helmets_dex",
    "uniques": [
      "starkonja's head leatherbound hood"
    ]
  },
  "linen wraps": {
    "base": "Linen Wraps",
    "pool": "Gloves_dex_int",
    "uniques": [
      "killjoy linen wraps"
    ]
  },
  "lizardscale boots": {
    "base": "Lizardscale Boots",
    "pool": "Boots_dex",
    "uniques": [
      "bushwhack lizardscale boots"
    ]
  },
  "long quarterstaff": {
    "base": "Long Quarterstaff",
    "pool": "Quarterstaves",
    "uniques": [
      "pillar of the caged god long quarterstaff"
    ]
  },
  "lumbering talisman": {
    "base": "Lumbering Talisman",
    "pool": "Talismans",
    "uniques": [
      "surge of the tide lumbering talisman"
    ]
  },
  "lunar amulet": {
    "base": "Lunar Amulet",
    "pool": "Amulets",
    "uniques": [
      "rondel of fragility lunar amulet"
    ]
  },
  "magus tiara": {
    "base": "Magus Tiara",
    "pool": "Helmets_int",
    "uniques": [
      "indigon magus tiara"
    ]
  },
  "mail sabatons": {
    "base": "Mail Sabatons",
    "pool": "Boots_str_dex",
    "uniques": [
      "the knight-errant mail sabatons"
    ]
  },
  "mail vestments": {
    "base": "Mail Vestments",
    "pool": "Body_Armours_str_int",
    "uniques": [
      "icetomb mail vestments"
    ]
  },
  "makeshift crossbow": {
    "base": "Makeshift Crossbow",
    "pool": "Crossbows",
    "uniques": [
      "mist whisper makeshift crossbow"
    ]
  },
  "marabout garb": {
    "base": "Marabout Garb",
    "pool": "Body_Armours_dex_int",
    "uniques": [
      "sierran inheritance marabout garb"
    ]
  },
  "maraketh cuirass": {
    "base": "Maraketh Cuirass",
    "pool": "Body_Armours_str",
    "uniques": [
      "titanrot cataphract maraketh cuirass"
    ]
  },
  "marching mace": {
    "base": "Marching Mace",
    "pool": "One_Hand_Maces",
    "uniques": [
      "seeing stars marching mace"
    ]
  },
  "martyr crown": {
    "base": "Martyr Crown",
    "pool": "Helmets_str_int",
    "uniques": [
      "veil of the night martyr crown"
    ]
  },
  "morning star": {
    "base": "Morning Star",
    "pool": "One_Hand_Maces",
    "uniques": [
      "brutus' lead sprinkler morning star"
    ]
  },
  "moulded mitts": {
    "base": "Moulded Mitts",
    "pool": "Gloves_str",
    "uniques": [
      "atziri's acuity moulded mitts",
      "hateforge moulded mitts"
    ]
  },
  "nettle talisman": {
    "base": "Nettle Talisman",
    "pool": "Talismans",
    "uniques": [
      "spiteful floret nettle talisman"
    ]
  },
  "oak greathammer": {
    "base": "Oak Greathammer",
    "pool": "Two_Hand_Maces",
    "uniques": [
      "hrimnor's hymn oak greathammer"
    ]
  },
  "omen crest shield": {
    "base": "Omen Crest Shield",
    "pool": "Shields_str_int",
    "uniques": [
      "mahuxotl's machination omen crest shield",
      "rise of the phoenix omen crest shield"
    ]
  },
  "omen sceptre": {
    "base": "Omen Sceptre",
    "pool": "Sceptres",
    "uniques": [
      "font of power omen sceptre"
    ]
  },
  "ornate buckler": {
    "base": "Ornate Buckler",
    "pool": "Bucklers",
    "uniques": [
      "calgyra's arc ornate buckler"
    ]
  },
  "ornate gauntlets": {
    "base": "Ornate Gauntlets",
    "pool": "Gloves_str_dex",
    "uniques": [
      "death articulated ornate gauntlets"
    ]
  },
  "ornate ringmail": {
    "base": "Ornate Ringmail",
    "pool": "Body_Armours_str_int",
    "uniques": [
      "loreweave ornate ringmail"
    ]
  },
  "painted tower shield": {
    "base": "Painted Tower Shield",
    "pool": "Shields_str",
    "uniques": [
      "wulfsbane painted tower shield"
    ]
  },
  "pathfinder coat": {
    "base": "Pathfinder Coat",
    "pool": "Body_Armours_dex",
    "uniques": [
      "ashrend pathfinder coat"
    ]
  },
  "pauascale gloves": {
    "base": "Pauascale Gloves",
    "pool": "Gloves_int",
    "uniques": [
      "nightscale pauascale gloves"
    ]
  },
  "pearl ring": {
    "base": "Pearl Ring",
    "pool": "Rings",
    "uniques": [
      "evergrasping ring pearl ring",
      "heartbound loop pearl ring",
      "snakepit pearl ring"
    ]
  },
  "penetrating quiver": {
    "base": "Penetrating Quiver",
    "pool": "Quivers",
    "uniques": [
      "drillneck penetrating quiver"
    ]
  },
  "perching staff": {
    "base": "Perching Staff",
    "pool": "Staves",
    "uniques": [
      "the raven's flock perching staff"
    ]
  },
  "permafrost staff": {
    "base": "Permafrost Staff",
    "pool": "Staves",
    "uniques": [
      "the whispering ice permafrost staff"
    ]
  },
  "pilgrim vestments": {
    "base": "Pilgrim Vestments",
    "pool": "Body_Armours_str_int",
    "uniques": [
      "enfolding dawn pilgrim vestments"
    ]
  },
  "plate gauntlets": {
    "base": "Plate Gauntlets",
    "pool": "Gloves_str_dex",
    "uniques": [
      "valako's vice plate gauntlets"
    ]
  },
  "plated buckler": {
    "base": "Plated Buckler",
    "pool": "Bucklers",
    "uniques": [
      "rondel de ezo plated buckler"
    ]
  },
  "plated raiment": {
    "base": "Plated Raiment",
    "pool": "Body_Armours_int",
    "uniques": [
      "vis mortis plated raiment"
    ]
  },
  "plated vestments": {
    "base": "Plated Vestments",
    "pool": "Body_Armours_str_int",
    "uniques": [
      "voll's protector plated vestments"
    ]
  },
  "pointed maul": {
    "base": "Pointed Maul",
    "pool": "Two_Hand_Maces",
    "uniques": [
      "tidebreaker pointed maul"
    ]
  },
  "primal markings": {
    "base": "Primal Markings",
    "pool": "Body_Armours_dex_int",
    "uniques": [
      "forgotten warden primal markings"
    ]
  },
  "primed quiver": {
    "base": "Primed Quiver",
    "pool": "Quivers",
    "uniques": [
      "cadiro's gambit primed quiver"
    ]
  },
  "prismatic ring": {
    "base": "Prismatic Ring",
    "pool": "Rings",
    "uniques": [
      "gifts from above prismatic ring",
      "the taming prismatic ring"
    ]
  },
  "pronged spear": {
    "base": "Pronged Spear",
    "pool": "Spears",
    "uniques": [
      "atziri's contempt pronged spear"
    ]
  },
  "pyrophyte staff": {
    "base": "Pyrophyte Staff",
    "pool": "Staves",
    "uniques": [
      "the searing touch pyrophyte staff"
    ]
  },
  "quilted vest": {
    "base": "Quilted Vest",
    "pool": "Body_Armours_dex",
    "uniques": [
      "foxshade quilted vest"
    ]
  },
  "rampart tower shield": {
    "base": "Rampart Tower Shield",
    "pool": "Shields_str",
    "uniques": [
      "lycosidae rampart tower shield"
    ]
  },
  "rattling sceptre": {
    "base": "Rattling Sceptre",
    "pool": "Sceptres",
    "uniques": [
      "the dark defiler rattling sceptre"
    ]
  },
  "ravenous staff": {
    "base": "Ravenous Staff",
    "pool": "Staves",
    "uniques": [
      "the unborn lich ravenous staff"
    ]
  },
  "recurve bow": {
    "base": "Recurve Bow",
    "pool": "Bows",
    "uniques": [
      "splinterheart recurve bow"
    ]
  },
  "reflecting staff": {
    "base": "Reflecting Staff",
    "pool": "Staves",
    "uniques": [
      "atziri's rule reflecting staff"
    ]
  },
  "revered vestments": {
    "base": "Revered Vestments",
    "pool": "Body_Armours_str_int",
    "uniques": [
      "geofri's sanctuary revered vestments",
      "the unleashed revered vestments"
    ]
  },
  "rhoahide coat": {
    "base": "Rhoahide Coat",
    "pool": "Body_Armours_dex",
    "uniques": [
      "briskwrap rhoahide coat"
    ]
  },
  "ridged buckler": {
    "base": "Ridged Buckler",
    "pool": "Bucklers",
    "uniques": [
      "kaltenhalt ridged buckler"
    ]
  },
  "ring": {
    "base": "Ring",
    "pool": "Rings",
    "uniques": [
      "eshtera's path ring",
      "kalandra's touch ring",
      "safrin's resolve ring",
      "zaida's longevity ring"
    ]
  },
  "ringmail gauntlets": {
    "base": "Ringmail Gauntlets",
    "pool": "Gloves_str_dex",
    "uniques": [
      "jarngreipr ringmail gauntlets"
    ]
  },
  "riveted mitts": {
    "base": "Riveted Mitts",
    "pool": "Gloves_str",
    "uniques": [
      "treefingers riveted mitts"
    ]
  },
  "rogue armour": {
    "base": "Rogue Armour",
    "pool": "Body_Armours_str_dex",
    "uniques": [
      "the barrow dweller rogue armour"
    ]
  },
  "rope cuffs": {
    "base": "Rope Cuffs",
    "pool": "Gloves_str_int",
    "uniques": [
      "gravebind rope cuffs"
    ]
  },
  "rough greaves": {
    "base": "Rough Greaves",
    "pool": "Boots_str",
    "uniques": [
      "legionstride rough greaves"
    ]
  },
  "ruby": {
    "base": "Ruby",
    "pool": "Ruby",
    "uniques": [
      "grand spectrum ruby",
      "split personality ruby"
    ]
  },
  "ruby ring": {
    "base": "Ruby Ring",
    "pool": "Rings",
    "uniques": [
      "blistering bond ruby ring",
      "cracklecreep ruby ring"
    ]
  },
  "runic fork": {
    "base": "Runic Fork",
    "pool": "Wands",
    "uniques": [
      "runeseeker's call runic fork"
    ]
  },
  "rusted cuirass": {
    "base": "Rusted Cuirass",
    "pool": "Body_Armours_str",
    "uniques": [
      "bramblejack rusted cuirass"
    ]
  },
  "rusted greathelm": {
    "base": "Rusted Greathelm",
    "pool": "Helmets_str",
    "uniques": [
      "horns of bynden rusted greathelm",
      "wings of caelyn rusted greathelm"
    ]
  },
  "sacral quiver": {
    "base": "Sacral Quiver",
    "pool": "Quivers",
    "uniques": [
      "the lethal draw sacral quiver"
    ]
  },
  "sacred focus": {
    "base": "Sacred Focus",
    "pool": "Foci",
    "uniques": [
      "rathpith globe sacred focus"
    ]
  },
  "sacrificial mantle": {
    "base": "Sacrificial Mantle",
    "pool": "Body_Armours_str_int",
    "uniques": [
      "soul mantle sacrificial mantle"
    ]
  },
  "sacrificial regalia": {
    "base": "Sacrificial Regalia",
    "pool": "Body_Armours_str_dex_int",
    "uniques": [
      "atziri's splendour sacrificial regalia"
    ]
  },
  "sapphire": {
    "base": "Sapphire",
    "pool": "Sapphire",
    "uniques": [
      "grand spectrum sapphire",
      "voices sapphire"
    ]
  },
  "sapphire ring": {
    "base": "Sapphire Ring",
    "pool": "Rings",
    "uniques": [
      "dream fragments sapphire ring",
      "polcirkeln sapphire ring",
      "whisper of the brotherhood sapphire ring"
    ]
  },
  "scale mail": {
    "base": "Scale Mail",
    "pool": "Body_Armours_str_dex",
    "uniques": [
      "doryani's prototype scale mail"
    ]
  },
  "scalper's jacket": {
    "base": "Scalper's Jacket",
    "pool": "Body_Armours_dex_int",
    "uniques": [
      "zerphi's serape scalper's jacket"
    ]
  },
  "scout's vest": {
    "base": "Scout's Vest",
    "pool": "Body_Armours_dex",
    "uniques": [
      "the rat cage scout's vest"
    ]
  },
  "sectioned bracers": {
    "base": "Sectioned Bracers",
    "pool": "Gloves_dex",
    "uniques": [
      "idle hands sectioned bracers"
    ]
  },
  "secured leggings": {
    "base": "Secured Leggings",
    "pool": "Boots_str_int",
    "uniques": [
      "wake of destruction secured leggings"
    ]
  },
  "serpentscale coat": {
    "base": "Serpentscale Coat",
    "pool": "Body_Armours_dex",
    "uniques": [
      "quatl's molt serpentscale coat"
    ]
  },
  "shabby hood": {
    "base": "Shabby Hood",
    "pool": "Helmets_dex",
    "uniques": [
      "innsmouth shabby hood"
    ]
  },
  "shaman mantle": {
    "base": "Shaman Mantle",
    "pool": "Body_Armours_str_int",
    "uniques": [
      "reverie shaman mantle"
    ]
  },
  "shielded helm": {
    "base": "Shielded Helm",
    "pool": "Helmets_str_dex",
    "uniques": [
      "the vile knight shielded helm"
    ]
  },
  "shortbow": {
    "base": "Shortbow",
    "pool": "Bows",
    "uniques": [
      "quill rain shortbow"
    ]
  },
  "shrine sceptre": {
    "base": "Shrine Sceptre",
    "pool": "Sceptres",
    "uniques": [
      "guiding palm of the eye shrine sceptre",
      "guiding palm of the heart shrine sceptre",
      "guiding palm of the mind shrine sceptre",
      "palm of the dreamer shrine sceptre",
      "sacred flame shrine sceptre"
    ]
  },
  "shrouded vest": {
    "base": "Shrouded Vest",
    "pool": "Body_Armours_dex",
    "uniques": [
      "sands of silk shrouded vest"
    ]
  },
  "sigil crest shield": {
    "base": "Sigil Crest Shield",
    "pool": "Shields_str_int",
    "uniques": [
      "oaksworn sigil crest shield"
    ]
  },
  "silk robe": {
    "base": "Silk Robe",
    "pool": "Body_Armours_int",
    "uniques": [
      "cloak of flame silk robe",
      "temporalis silk robe"
    ]
  },
  "silk slippers": {
    "base": "Silk Slippers",
    "pool": "Boots_int",
    "uniques": [
      "wondertrap silk slippers"
    ]
  },
  "siphoning wand": {
    "base": "Siphoning Wand",
    "pool": "Wands",
    "uniques": [
      "adonia's ego siphoning wand"
    ]
  },
  "slim mace": {
    "base": "Slim Mace",
    "pool": "One_Hand_Maces",
    "uniques": [
      "frostbreath slim mace"
    ]
  },
  "smuggler coat": {
    "base": "Smuggler Coat",
    "pool": "Body_Armours_dex",
    "uniques": [
      "queen of the forest smuggler coat"
    ]
  },
  "solar amulet": {
    "base": "Solar Amulet",
    "pool": "Amulets",
    "uniques": [
      "beacon of azis solar amulet",
      "fireflower solar amulet",
      "immaculate adherence solar amulet"
    ]
  },
  "soldier greathelm": {
    "base": "Soldier Greathelm",
    "pool": "Helmets_str",
    "uniques": [
      "ezomyte peak soldier greathelm"
    ]
  },
  "solid mask": {
    "base": "Solid Mask",
    "pool": "Helmets_dex_int",
    "uniques": [
      "the three dragons solid mask"
    ]
  },
  "sombre gloves": {
    "base": "Sombre Gloves",
    "pool": "Gloves_int",
    "uniques": [
      "candlemaker sombre gloves"
    ]
  },
  "spiked buckler": {
    "base": "Spiked Buckler",
    "pool": "Bucklers",
    "uniques": [
      "silverthorne spiked buckler"
    ]
  },
  "spiked club": {
    "base": "Spiked Club",
    "pool": "One_Hand_Maces",
    "uniques": [
      "trenchtimbre spiked club"
    ]
  },
  "spined bracers": {
    "base": "Spined Bracers",
    "pool": "Gloves_dex",
    "uniques": [
      "snakebite spined bracers"
    ]
  },
  "spiral wraps": {
    "base": "Spiral Wraps",
    "pool": "Gloves_dex_int",
    "uniques": [
      "hand of wisdom and action spiral wraps"
    ]
  },
  "spired greathelm": {
    "base": "Spired Greathelm",
    "pool": "Helmets_str",
    "uniques": [
      "thrillsteel spired greathelm"
    ]
  },
  "spiritbone crown": {
    "base": "Spiritbone Crown",
    "pool": "Helmets_str_int",
    "uniques": [
      "keeper of the arc spiritbone crown"
    ]
  },
  "splintered tower shield": {
    "base": "Splintered Tower Shield",
    "pool": "Shields_str",
    "uniques": [
      "dionadair splintered tower shield"
    ]
  },
  "stacked sabatons": {
    "base": "Stacked Sabatons",
    "pool": "Boots_str_dex",
    "uniques": [
      "obern's bastion stacked sabatons"
    ]
  },
  "steel plate": {
    "base": "Steel Plate",
    "pool": "Body_Armours_str",
    "uniques": [
      "wandering reliquary steel plate"
    ]
  },
  "steelpoint quarterstaff": {
    "base": "Steelpoint Quarterstaff",
    "pool": "Quarterstaves",
    "uniques": [
      "nazir's judgement steelpoint quarterstaff"
    ]
  },
  "stellar amulet": {
    "base": "Stellar Amulet",
    "pool": "Amulets",
    "uniques": [
      "astramentis stellar amulet",
      "fixation of yix stellar amulet",
      "hinekora's sight stellar amulet",
      "strugglescream stellar amulet"
    ]
  },
  "stitched gloves": {
    "base": "Stitched Gloves",
    "pool": "Gloves_int",
    "uniques": [
      "doedre's tenure stitched gloves"
    ]
  },
  "stocky mitts": {
    "base": "Stocky Mitts",
    "pool": "Gloves_str",
    "uniques": [
      "facebreaker stocky mitts"
    ]
  },
  "stoic sceptre": {
    "base": "Stoic Sceptre",
    "pool": "Sceptres",
    "uniques": [
      "sylvan's effigy stoic sceptre"
    ]
  },
  "stone greaves": {
    "base": "Stone Greaves",
    "pool": "Boots_str",
    "uniques": [
      "birth of fury stone greaves"
    ]
  },
  "straw sandals": {
    "base": "Straw Sandals",
    "pool": "Boots_int",
    "uniques": [
      "luminous pace straw sandals"
    ]
  },
  "strider vest": {
    "base": "Strider Vest",
    "pool": "Body_Armours_dex",
    "uniques": [
      "yriel's fostering strider vest"
    ]
  },
  "studded greatclub": {
    "base": "Studded Greatclub",
    "pool": "Two_Hand_Maces",
    "uniques": [
      "brain rattler studded greatclub"
    ]
  },
  "studded vest": {
    "base": "Studded Vest",
    "pool": "Body_Armours_dex",
    "uniques": [
      "dustbloom studded vest"
    ]
  },
  "suede bracers": {
    "base": "Suede Bracers",
    "pool": "Gloves_dex",
    "uniques": [
      "northpaw suede bracers"
    ]
  },
  "tattered robe": {
    "base": "Tattered Robe",
    "pool": "Body_Armours_int",
    "uniques": [
      "ghostwrithe tattered robe"
    ]
  },
  "tempered mitts": {
    "base": "Tempered Mitts",
    "pool": "Gloves_str",
    "uniques": [
      "lochtonial caress tempered mitts"
    ]
  },
  "temple maul": {
    "base": "Temple Maul",
    "pool": "Two_Hand_Maces",
    "uniques": [
      "shyaba temple maul"
    ]
  },
  "tenebrous crown": {
    "base": "Tenebrous Crown",
    "pool": "Helmets_str_int",
    "uniques": [
      "vestige of darkness tenebrous crown"
    ]
  },
  "tense crossbow": {
    "base": "Tense Crossbow",
    "pool": "Crossbows",
    "uniques": [
      "rampart raptor tense crossbow"
    ]
  },
  "tethering bands": {
    "base": "Tethering Bands",
    "pool": "Gloves_str_int",
    "uniques": [
      "the master's reach tethering bands"
    ]
  },
  "threaded shoes": {
    "base": "Threaded Shoes",
    "pool": "Boots_dex_int",
    "uniques": [
      "ghostmarch threaded shoes"
    ]
  },
  "tideseer mantle": {
    "base": "Tideseer Mantle",
    "pool": "Body_Armours_str_int",
    "uniques": [
      "waveshaper tideseer mantle"
    ]
  },
  "time-lost diamond": {
    "base": "Time-Lost Diamond",
    "pool": "Time-Lost_Diamond",
    "uniques": [
      "against the darkness time-lost diamond"
    ]
  },
  "titan mitts": {
    "base": "Titan Mitts",
    "pool": "Gloves_str",
    "uniques": [
      "empire's grasp titan mitts"
    ]
  },
  "tonal focus": {
    "base": "Tonal Focus",
    "pool": "Foci",
    "uniques": [
      "serpent's lesson tonal focus"
    ]
  },
  "topaz ring": {
    "base": "Topaz Ring",
    "pool": "Rings",
    "uniques": [
      "call of the brotherhood topaz ring",
      "levinstone topaz ring",
      "the burrower topaz ring"
    ]
  },
  "torment club": {
    "base": "Torment Club",
    "pool": "One_Hand_Maces",
    "uniques": [
      "mjölner torment club",
      "olrovasara torment club"
    ]
  },
  "torn gloves": {
    "base": "Torn Gloves",
    "pool": "Gloves_int",
    "uniques": [
      "painter's servant torn gloves"
    ]
  },
  "totemic greatclub": {
    "base": "Totemic Greatclub",
    "pool": "Two_Hand_Maces",
    "uniques": [
      "marohi erqi totemic greatclub"
    ]
  },
  "toxic quiver": {
    "base": "Toxic Quiver",
    "pool": "Quivers",
    "uniques": [
      "murkshaft toxic quiver"
    ]
  },
  "trarthan cannon": {
    "base": "Trarthan Cannon",
    "pool": "Crossbows",
    "uniques": [
      "redemption trarthan cannon"
    ]
  },
  "tribal mask": {
    "base": "Tribal Mask",
    "pool": "Helmets_dex_int",
    "uniques": [
      "glimpse of chaos tribal mask",
      "the vertex tribal mask"
    ]
  },
  "trimmed greaves": {
    "base": "Trimmed Greaves",
    "pool": "Boots_str",
    "uniques": [
      "trampletoe trimmed greaves"
    ]
  },
  "twig circlet": {
    "base": "Twig Circlet",
    "pool": "Helmets_int",
    "uniques": [
      "crown of thorns twig circlet"
    ]
  },
  "twig focus": {
    "base": "Twig Focus",
    "pool": "Foci",
    "uniques": [
      "deathrattle twig focus"
    ]
  },
  "twisted wand": {
    "base": "Twisted Wand",
    "pool": "Wands",
    "uniques": [
      "liminal coil twisted wand"
    ]
  },
  "two-stone ring": {
    "base": "Two-Stone Ring",
    "pool": "Rings",
    "uniques": [
      "berek's grip two-stone ring",
      "berek's pass two-stone ring",
      "berek's respite two-stone ring"
    ]
  },
  "unset ring": {
    "base": "Unset Ring",
    "pool": "Rings",
    "uniques": [
      "bursting decay unset ring"
    ]
  },
  "utility wraps": {
    "base": "Utility Wraps",
    "pool": "Gloves_dex_int",
    "uniques": [
      "thunderfist utility wraps"
    ]
  },
  "vaal cuirass": {
    "base": "Vaal Cuirass",
    "pool": "Body_Armours_str",
    "uniques": [
      "greed's embrace vaal cuirass"
    ]
  },
  "vaal tower shield": {
    "base": "Vaal Tower Shield",
    "pool": "Shields_str",
    "uniques": [
      "the surrender vaal tower shield"
    ]
  },
  "vagabond armour": {
    "base": "Vagabond Armour",
    "pool": "Body_Armours_str_dex",
    "uniques": [
      "irongrasp vagabond armour"
    ]
  },
  "veiled mask": {
    "base": "Veiled Mask",
    "pool": "Helmets_dex_int",
    "uniques": [
      "atsak's sight veiled mask"
    ]
  },
  "velour shoes": {
    "base": "Velour Shoes",
    "pool": "Boots_dex_int",
    "uniques": [
      "beetlebite velour shoes"
    ]
  },
  "velvet cap": {
    "base": "Velvet Cap",
    "pool": "Helmets_dex",
    "uniques": [
      "heatshiver velvet cap"
    ]
  },
  "venerable defender": {
    "base": "Venerable Defender",
    "pool": "Shields_str_dex",
    "uniques": [
      "eyes of the runefather venerable defender"
    ]
  },
  "veridical chain": {
    "base": "Veridical Chain",
    "pool": "Amulets",
    "uniques": [
      "eventide petals veridical chain"
    ]
  },
  "vermeil circlet": {
    "base": "Vermeil Circlet",
    "pool": "Helmets_int",
    "uniques": [
      "crown of eyes vermeil circlet"
    ]
  },
  "vicious talisman": {
    "base": "Vicious Talisman",
    "pool": "Talismans",
    "uniques": [
      "the flesh poppet vicious talisman"
    ]
  },
  "viper cap": {
    "base": "Viper Cap",
    "pool": "Helmets_dex",
    "uniques": [
      "constricting command viper cap"
    ]
  },
  "visceral quiver": {
    "base": "Visceral Quiver",
    "pool": "Quivers",
    "uniques": [
      "beyond reach visceral quiver"
    ]
  },
  "visored helm": {
    "base": "Visored Helm",
    "pool": "Helmets_str_dex",
    "uniques": [
      "ironride visored helm"
    ]
  },
  "volatile wand": {
    "base": "Volatile Wand",
    "pool": "Wands",
    "uniques": [
      "enezun's charge volatile wand"
    ]
  },
  "voltaic staff": {
    "base": "Voltaic Staff",
    "pool": "Staves",
    "uniques": [
      "earthbound voltaic staff"
    ]
  },
  "voodoo focus": {
    "base": "Voodoo Focus",
    "pool": "Foci",
    "uniques": [
      "apep's supremacy voodoo focus"
    ]
  },
  "votive raiment": {
    "base": "Votive Raiment",
    "pool": "Body_Armours_int",
    "uniques": [
      "tetzlapokal's desire votive raiment"
    ]
  },
  "war spear": {
    "base": "War Spear",
    "pool": "Spears",
    "uniques": [
      "daevata's wind war spear"
    ]
  },
  "warden bow": {
    "base": "Warden Bow",
    "pool": "Bows",
    "uniques": [
      "ironbound warden bow"
    ]
  },
  "warding quarterstaff": {
    "base": "Warding Quarterstaff",
    "pool": "Quarterstaves",
    "uniques": [
      "duality warding quarterstaff"
    ]
  },
  "warpick": {
    "base": "Warpick",
    "pool": "One_Hand_Maces",
    "uniques": [
      "sculpted suffering warpick"
    ]
  },
  "warrior greathelm": {
    "base": "Warrior Greathelm",
    "pool": "Helmets_str",
    "uniques": [
      "corona of the red sun warrior greathelm"
    ]
  },
  "waxed jacket": {
    "base": "Waxed Jacket",
    "pool": "Body_Armours_dex_int",
    "uniques": [
      "gloomform waxed jacket"
    ]
  },
  "wayfarer jacket": {
    "base": "Wayfarer Jacket",
    "pool": "Body_Armours_dex_int",
    "uniques": [
      "the dancing mirage wayfarer jacket"
    ]
  },
  "wicker tiara": {
    "base": "Wicker Tiara",
    "pool": "Helmets_int",
    "uniques": [
      "the devouring diadem wicker tiara"
    ]
  },
  "winged spear": {
    "base": "Winged Spear",
    "pool": "Spears",
    "uniques": [
      "skysliver winged spear"
    ]
  },
  "withered wand": {
    "base": "Withered Wand",
    "pool": "Wands",
    "uniques": [
      "the wicked quill withered wand"
    ]
  },
  "wooden buckler": {
    "base": "Wooden Buckler",
    "pool": "Bucklers",
    "uniques": [
      "nocturne wooden buckler"
    ]
  },
  "wooden club": {
    "base": "Wooden Club",
    "pool": "One_Hand_Maces",
    "uniques": [
      "brynhand's mark wooden club"
    ]
  },
  "woven focus": {
    "base": "Woven Focus",
    "pool": "Foci",
    "uniques": [
      "threaded light woven focus"
    ]
  },
  "wrapped greathelm": {
    "base": "Wrapped Greathelm",
    "pool": "Helmets_str",
    "uniques": [
      "black sun crest wrapped greathelm"
    ]
  },
  "wrapped quarterstaff": {
    "base": "Wrapped Quarterstaff",
    "pool": "Quarterstaves",
    "uniques": [
      "the blood thorn wrapped quarterstaff"
    ]
  },
  "wrapped sandals": {
    "base": "Wrapped Sandals",
    "pool": "Boots_int",
    "uniques": [
      "wanderlust wrapped sandals"
    ]
  },
  "wyrm quarterstaff": {
    "base": "Wyrm Quarterstaff",
    "pool": "Quarterstaves",
    "uniques": [
      "collapsing horizon wyrm quarterstaff"
    ]
  },
  "zealot bow": {
    "base": "Zealot Bow",
    "pool": "Bows",
    "uniques": [
      "slivertongue zealot bow"
    ]
  }
};

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function getUniqueItem(value) {
    const normalized = normalize(value);
    const candidates = [
      normalized,
      normalize(normalized.replace(/\s+\(legacy\)$/i, "")),
      normalize(normalized.replace(/\bruneforged\b/gi, "")),
      normalize(normalized.replace(/\brunemastered\b/gi, ""))
    ];

    for (const candidate of candidates) {
      if (UNIQUE_ITEMS[candidate]) {
        return UNIQUE_ITEMS[candidate];
      }
    }

    return null;
  }

  function getCorruptionImplicits(value) {
    const item = getUniqueItem(value);
    return item ? CORRUPTION_POOLS[item.pool] || [] : [];
  }

  return {
    CORRUPTION_POOLS,
    UNIQUE_BASES,
    UNIQUE_ITEMS,
    getCorruptionImplicits,
    getUniqueItem,
    normalize
  };
});

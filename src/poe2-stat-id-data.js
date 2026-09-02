(function exposePoe2StatIdData(root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) module.exports = data;
  root.Poe2StatIdData = data;
})(typeof globalThis !== "undefined" ? globalThis : this, function createPoe2StatIdData() {
  "use strict";

  // Generated from https://www.pathofexile.com/api/trade2/data/stats on 2026-08-31T11:09:36.947Z.
  const SOURCE_URL = "https://www.pathofexile.com/api/trade2/data/stats";
  const GENERATED_AT = "2026-08-31T11:09:36.947Z";
  const COVERAGE = Object.freeze({
  "corruption": {
    "ambiguous": 0,
    "resolved": 92,
    "sourceLabels": 92,
    "templates": 92,
    "unresolved": 0
  },
  "unique": {
    "ambiguous": 19,
    "resolved": 779,
    "sourceLabels": 1541,
    "templates": 934,
    "unresolved": 136
  }
});
  const UNIQUE_STATS = Object.freeze({
  "# metre to dodge roll distance if you've dodge rolled recently": {
    "candidates": [
      {
        "id": "explicit.stat_57896763",
        "text": "# metre to Dodge Roll distance if you've Dodge Rolled Recently",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to all attributes per level": {
    "candidates": [
      {
        "id": "explicit.stat_2333085568",
        "text": "# to all Attributes per Level",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# physical damage taken from attack hits": {
    "candidates": [
      {
        "id": "explicit.stat_3441651621",
        "text": "# Physical Damage taken from Attack Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# physical damage taken from projectile attacks": {
    "candidates": [
      {
        "id": "explicit.stat_3612407781",
        "text": "# Physical damage taken from Projectile Attacks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to all elemental resistances": {
    "candidates": [
      {
        "id": "explicit.stat_2901986750",
        "text": "#% to all Elemental Resistances",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to all elemental resistances per power charge": {
    "candidates": [
      {
        "id": "explicit.stat_2593644209",
        "text": "#% to all Elemental Resistances per Power Charge",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to cold resistance": {
    "candidates": [
      {
        "id": "explicit.stat_4220027924",
        "text": "#% to Cold Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to fire resistance": {
    "candidates": [
      {
        "id": "explicit.stat_3372524247",
        "text": "#% to Fire Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# strength requirement": {
    "candidates": [
      {
        "id": "explicit.stat_2833226514",
        "text": "# Strength Requirement",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to chaos resistance": {
    "candidates": [
      {
        "id": "explicit.stat_2923486259",
        "text": "#% to Chaos Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# physical damage taken from hits": {
    "candidates": [
      {
        "id": "explicit.stat_321765853",
        "text": "# Physical Damage taken from Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to maximum power charges": {
    "candidates": [
      {
        "id": "explicit.stat_227523295",
        "text": "# to Maximum Power Charges",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to maximum rage": {
    "candidates": [
      {
        "id": "explicit.stat_1181501418",
        "text": "# to Maximum Rage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced charm charges used": {
    "candidates": [
      {
        "id": "explicit.stat_1570770415",
        "text": "#% reduced Charm Charges used",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to amount of damage prevented by deflection": {
    "candidates": [],
    "status": "unresolved"
  },
  "#% reduced skill effect duration": {
    "candidates": [
      {
        "id": "explicit.stat_3377888098",
        "text": "#% increased Skill Effect Duration",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to strength": {
    "candidates": [
      {
        "id": "explicit.stat_4080418644",
        "text": "# to Strength",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced charm charges gained": {
    "candidates": [
      {
        "id": "explicit.stat_3585532255",
        "text": "#% increased Charm Charges gained",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced flask life recovery rate": {
    "candidates": [
      {
        "id": "explicit.stat_51994685",
        "text": "#% increased Flask Life Recovery rate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced flask mana recovery rate": {
    "candidates": [
      {
        "id": "explicit.stat_1412217137",
        "text": "#% increased Flask Mana Recovery rate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced rarity of items found": {
    "candidates": [
      {
        "id": "explicit.stat_3917489142",
        "text": "#% increased Rarity of Items found",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced life regeneration rate": {
    "candidates": [
      {
        "id": "explicit.stat_44972811",
        "text": "#% increased Life Regeneration rate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced mana regeneration rate": {
    "candidates": [
      {
        "id": "explicit.stat_789117908",
        "text": "#% increased Mana Regeneration Rate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to lightning resistance": {
    "candidates": [
      {
        "id": "explicit.stat_1671376347",
        "text": "#% to Lightning Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to accuracy rating": {
    "candidates": [
      {
        "id": "explicit.stat_803737631",
        "text": "# to Accuracy Rating",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to all maximum elemental resistances": {
    "candidates": [
      {
        "id": "explicit.stat_1978899297",
        "text": "#% to all Maximum Elemental Resistances",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased maximum divinity": {
    "candidates": [
      {
        "id": "explicit.stat_878697053",
        "text": "#% increased maximum Divinity",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased effect of jewel socket passive skillscontaining corrupted magic jewels": {
    "candidates": [],
    "status": "unresolved"
  },
  "#% increased rarity of items found": {
    "candidates": [
      {
        "id": "explicit.stat_3917489142",
        "text": "#% increased Rarity of Items found",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased critical hit chance": {
    "candidates": [
      {
        "id": "explicit.stat_587431675",
        "text": "#% increased Critical Hit Chance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# life regeneration per second": {
    "candidates": [
      {
        "id": "explicit.stat_3325883026",
        "text": "# Life Regeneration per second",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased attack speed": {
    "candidates": [
      {
        "id": "explicit.stat_681332047",
        "text": "#% increased Attack Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased evasion and energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_1999113824",
        "text": "#% increased Evasion and Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to # physical thorns damage": {
    "candidates": [
      {
        "id": "explicit.stat_2881298780",
        "text": "# to # Physical Thorns damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased block chance": {
    "candidates": [
      {
        "id": "explicit.stat_4147897060",
        "text": "#% increased Block chance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased cast speed": {
    "candidates": [
      {
        "id": "explicit.stat_2891184298",
        "text": "#% increased Cast Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased critical damage bonus": {
    "candidates": [
      {
        "id": "explicit.stat_3556824919",
        "text": "#% increased Critical Damage Bonus",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_983749596",
        "text": "#% increased maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased maximum mana": {
    "candidates": [
      {
        "id": "explicit.stat_2748665614",
        "text": "#% increased maximum Mana",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased quantity of gold dropped by slain enemies": {
    "candidates": [
      {
        "id": "explicit.stat_3175163625",
        "text": "#% increased Quantity of Gold Dropped by Slain Enemies",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased skill effect duration": {
    "candidates": [
      {
        "id": "explicit.stat_3377888098",
        "text": "#% increased Skill Effect Duration",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased skill speed": {
    "candidates": [
      {
        "id": "explicit.stat_970213192",
        "text": "#% increased Skill Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased spell damage for each # total mana you have spent recently": {
    "candidates": [
      {
        "id": "explicit.stat_347220474",
        "text": "#% increased Spell damage for each 200 total Mana you have Spent Recently",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased spirit": {
    "candidates": [
      {
        "id": "explicit.stat_1416406066",
        "text": "#% increased Spirit",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_3984865854",
        "text": "#% increased Spirit",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "#% of damage from deflected hits is taken from damageable companion's life before you": {
    "candidates": [
      {
        "id": "explicit.stat_3918757604",
        "text": "#% of Damage from Deflected Hits is taken from Damageable Companion's Life before you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced attack and cast speed": {
    "candidates": [
      {
        "id": "explicit.stat_2672805335",
        "text": "#% increased Attack and Cast Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced attack speed": {
    "candidates": [
      {
        "id": "explicit.stat_210067635",
        "text": "#% increased Attack Speed (Local)",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_681332047",
        "text": "#% increased Attack Speed",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "#% reduced charges per use": {
    "candidates": [
      {
        "id": "explicit.stat_388617051",
        "text": "#% increased Charges per use",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced flask charges used": {
    "candidates": [
      {
        "id": "explicit.stat_644456512",
        "text": "#% reduced Flask Charges used",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced maximum mana": {
    "candidates": [
      {
        "id": "explicit.stat_2748665614",
        "text": "#% increased maximum Mana",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to cause bleeding on hit": {
    "candidates": [
      {
        "id": "explicit.stat_1519615863",
        "text": "#% chance to cause Bleeding on Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to inflict bleeding on hit": {
    "candidates": [
      {
        "id": "explicit.stat_2174054121",
        "text": "#% chance to inflict Bleeding on Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to load a bolt into all crossbow skills on kill": {
    "candidates": [
      {
        "id": "explicit.stat_3823990000",
        "text": "#% chance to load a bolt into all Crossbow skills on Kill",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to poison on hit": {
    "candidates": [
      {
        "id": "explicit.stat_795138349",
        "text": "#% chance to Poison on Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased area of effect": {
    "candidates": [
      {
        "id": "explicit.stat_280731498",
        "text": "#% increased Area of Effect",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased chance to shock": {
    "candidates": [
      {
        "id": "explicit.stat_293638271",
        "text": "#% increased chance to Shock",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased damage for each type of elemental ailment on enemy": {
    "candidates": [
      {
        "id": "explicit.stat_3388405805",
        "text": "#% increased Damage for each type of Elemental Ailment on Enemy",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased duration": {
    "candidates": [],
    "status": "unresolved"
  },
  "#% increased global physical damage": {
    "candidates": [
      {
        "id": "explicit.stat_1310194496",
        "text": "#% increased Global Physical Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased ignite magnitude": {
    "candidates": [
      {
        "id": "explicit.stat_3791899485",
        "text": "#% increased Ignite Magnitude",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased magnitude of shock you inflict": {
    "candidates": [
      {
        "id": "explicit.stat_2527686725",
        "text": "#% increased Magnitude of Shock you inflict",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased movement speed": {
    "candidates": [
      {
        "id": "explicit.stat_2250533757",
        "text": "#% increased Movement Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased poison duration": {
    "candidates": [
      {
        "id": "explicit.stat_2011656677",
        "text": "#% increased Poison Duration",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased stun duration": {
    "candidates": [
      {
        "id": "explicit.stat_748522257",
        "text": "#% increased Stun Duration",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of damage is taken from mana before life": {
    "candidates": [
      {
        "id": "explicit.stat_458438597",
        "text": "#% of Damage is taken from Mana before Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of damage taken recouped as life": {
    "candidates": [
      {
        "id": "explicit.stat_1444556985",
        "text": "#% of Damage taken Recouped as Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of fire damage taken as cold damage": {
    "candidates": [
      {
        "id": "explicit.stat_4108426433",
        "text": "#% of Fire damage taken as Cold damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of lightning damage taken as cold damage": {
    "candidates": [
      {
        "id": "explicit.stat_3198708642",
        "text": "#% of Lightning damage taken as Cold damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced cast speed": {
    "candidates": [
      {
        "id": "explicit.stat_2891184298",
        "text": "#% increased Cast Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced cold damage": {
    "candidates": [
      {
        "id": "explicit.stat_3291658075",
        "text": "#% increased Cold Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to avoid chaos damage from hits": {
    "candidates": [
      {
        "id": "explicit.stat_1563503803",
        "text": "#% chance to Avoid Chaos Damage from Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to avoid cold damage from hits": {
    "candidates": [
      {
        "id": "explicit.stat_3743375737",
        "text": "#% chance to Avoid Cold Damage from Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to avoid fire damage from hits": {
    "candidates": [
      {
        "id": "explicit.stat_42242677",
        "text": "#% chance to Avoid Fire Damage from Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to avoid lightning damage from hits": {
    "candidates": [
      {
        "id": "explicit.stat_2889664727",
        "text": "#% chance to Avoid Lightning Damage from Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to avoid physical damage from hits": {
    "candidates": [
      {
        "id": "explicit.stat_2415497478",
        "text": "#% chance to Avoid Physical Damage from Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased mana regeneration rate": {
    "candidates": [
      {
        "id": "explicit.stat_789117908",
        "text": "#% increased Mana Regeneration Rate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced charm effect duration": {
    "candidates": [
      {
        "id": "explicit.stat_1389754388",
        "text": "#% increased Charm Effect Duration",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased physical damage": {
    "candidates": [
      {
        "id": "explicit.stat_1509134228",
        "text": "#% increased Physical Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_4015621042",
        "text": "#% increased Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased evasion rating": {
    "candidates": [
      {
        "id": "explicit.stat_2106365538",
        "text": "#% increased Evasion Rating",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased amount recovered": {
    "candidates": [
      {
        "id": "explicit.stat_700317374",
        "text": "#% increased Amount Recovered",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased armour": {
    "candidates": [
      {
        "id": "explicit.stat_2866361420",
        "text": "#% increased Armour",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased armour and energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_3321629045",
        "text": "#% increased Armour and Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased armour and evasion": {
    "candidates": [
      {
        "id": "explicit.stat_2451402625",
        "text": "#% increased Armour and Evasion",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased charges per use": {
    "candidates": [
      {
        "id": "explicit.stat_388617051",
        "text": "#% increased Charges per use",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased amount of life leeched": {
    "candidates": [
      {
        "id": "explicit.stat_2112395885",
        "text": "#% increased amount of Life Leeched",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to deal your thorns damage to enemies you hit with melee attacks": {
    "candidates": [
      {
        "id": "explicit.stat_2880019685",
        "text": "#% chance to deal your Thorns Damage to Enemies you Hit with Melee Attacks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to pierce an enemy": {
    "candidates": [
      {
        "id": "explicit.stat_2321178454",
        "text": "#% chance to Pierce an Enemy",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased critical damage bonus while shocked": {
    "candidates": [
      {
        "id": "explicit.stat_2408983956",
        "text": "#% increased Critical Damage Bonus while Shocked",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased light radius": {
    "candidates": [
      {
        "id": "explicit.stat_1263695895",
        "text": "#% increased Light Radius",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased magnitude of bleeding you inflict": {
    "candidates": [
      {
        "id": "explicit.stat_3166958180",
        "text": "#% increased Magnitude of Bleeding you inflict",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased magnitude of poison you inflict": {
    "candidates": [
      {
        "id": "explicit.stat_2487305362",
        "text": "#% increased Magnitude of Poison you inflict",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased reload speed": {
    "candidates": [
      {
        "id": "explicit.stat_710476746",
        "text": "#% increased Reload Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of damage taken from hits bypasses energy shield if energy shield is below half": {
    "candidates": [
      {
        "id": "explicit.stat_1311130924",
        "text": "#% of Damage taken from Hits bypasses Energy Shield if Energy Shield is below half",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance for spell damage with critical hits to be lucky": {
    "candidates": [
      {
        "id": "explicit.stat_1133346493",
        "text": "#% chance for Spell Damage with Critical Hits to be Lucky",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased cooldown recovery rate": {
    "candidates": [
      {
        "id": "explicit.stat_1004011302",
        "text": "#% increased Cooldown Recovery Rate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased elemental damage": {
    "candidates": [
      {
        "id": "explicit.stat_3141070085",
        "text": "#% increased Elemental Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased energy shield recharge rate": {
    "candidates": [
      {
        "id": "explicit.stat_2339757871",
        "text": "#% increased Energy Shield Recharge Rate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased strength": {
    "candidates": [
      {
        "id": "explicit.stat_734614379",
        "text": "#% increased Strength",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of damage taken during effect recouped as life": {
    "candidates": [
      {
        "id": "explicit.stat_3598623697",
        "text": "#% of Damage taken during effect Recouped as Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased flask life recovery rate": {
    "candidates": [
      {
        "id": "explicit.stat_51994685",
        "text": "#% increased Flask Life Recovery rate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased armour, evasion and energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_3523867985",
        "text": "#% increased Armour, Evasion and Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased bonuses gained from equipped quiver": {
    "candidates": [
      {
        "id": "explicit.stat_1200678966",
        "text": "#% increased bonuses gained from Equipped Quiver",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% less [random stat]": {
    "candidates": [],
    "status": "unresolved"
  },
  "#% chance to gain a charge when you kill an enemy": {
    "candidates": [
      {
        "id": "explicit.stat_828533480",
        "text": "#% Chance to gain a Charge when you kill an enemy",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to poison on hit with attacks": {
    "candidates": [
      {
        "id": "explicit.stat_3954735777",
        "text": "#% chance to Poison on Hit with Attacks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% faster dodge roll": {
    "candidates": [
      {
        "id": "explicit.stat_504054855",
        "text": "#% faster Dodge Roll",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased bonuses gained from left equipped ring": {
    "candidates": [
      {
        "id": "explicit.stat_513747733",
        "text": "#% increased bonuses gained from left Equipped Ring",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased bonuses gained from right equipped ring": {
    "candidates": [
      {
        "id": "explicit.stat_3885501357",
        "text": "#% increased bonuses gained from right Equipped Ring",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased charm charges gained": {
    "candidates": [
      {
        "id": "explicit.stat_3585532255",
        "text": "#% increased Charm Charges gained",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased cold damage": {
    "candidates": [
      {
        "id": "explicit.stat_3291658075",
        "text": "#% increased Cold Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased fire damage": {
    "candidates": [
      {
        "id": "explicit.stat_3962278098",
        "text": "#% increased Fire Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased flask charges gained": {
    "candidates": [
      {
        "id": "explicit.stat_1836676211",
        "text": "#% increased Flask Charges gained",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased flask mana recovery rate": {
    "candidates": [
      {
        "id": "explicit.stat_1412217137",
        "text": "#% increased Flask Mana Recovery rate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased freeze buildup": {
    "candidates": [
      {
        "id": "explicit.stat_473429811",
        "text": "#% increased Freeze Buildup",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased magnitude of chill you inflict": {
    "candidates": [
      {
        "id": "explicit.stat_828179689",
        "text": "#% increased Magnitude of Chill you inflict",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased projectile speed": {
    "candidates": [
      {
        "id": "explicit.stat_3759663284",
        "text": "#% increased Projectile Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased projectile speed with this weapon": {
    "candidates": [
      {
        "id": "explicit.stat_535217483",
        "text": "#% increased Projectile Speed with this Weapon",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased rarity of items dropped by enemies killed with a critical hit": {
    "candidates": [
      {
        "id": "explicit.stat_21824003",
        "text": "#% increased Rarity of Items Dropped by Enemies killed with a Critical Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased reservation efficiency of skills which create undead minions": {
    "candidates": [
      {
        "id": "explicit.stat_2308632835",
        "text": "#% increased Reservation Efficiency of Skills which create Undead Minions",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased spell damage": {
    "candidates": [
      {
        "id": "explicit.stat_2974417149",
        "text": "#% increased Spell Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased stun buildup": {
    "candidates": [
      {
        "id": "explicit.stat_239367161",
        "text": "#% increased Stun Buildup",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased warcry speed": {
    "candidates": [
      {
        "id": "explicit.stat_1316278494",
        "text": "#% increased Warcry Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced energy shield recharge rate": {
    "candidates": [
      {
        "id": "explicit.stat_2339757871",
        "text": "#% increased Energy Shield Recharge Rate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced light radius": {
    "candidates": [
      {
        "id": "explicit.stat_1263695895",
        "text": "#% increased Light Radius",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_983749596",
        "text": "#% increased maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced presence area of effect": {
    "candidates": [
      {
        "id": "explicit.stat_101878827",
        "text": "#% increased Presence Area of Effect",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased critical hit chance for spells": {
    "candidates": [
      {
        "id": "explicit.stat_737908626",
        "text": "#% increased Critical Hit Chance for Spells",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased damage with hits against targets in your presence": {
    "candidates": [
      {
        "id": "explicit.stat_4015438188",
        "text": "#% increased Damage with Hits against targets in your Presence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased mana cost efficiency": {
    "candidates": [
      {
        "id": "explicit.stat_4101445926",
        "text": "#% increased Mana Cost Efficiency",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced cooldown recovery rate": {
    "candidates": [
      {
        "id": "explicit.stat_1004011302",
        "text": "#% increased Cooldown Recovery Rate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to aggravate bleeding on hit": {
    "candidates": [
      {
        "id": "explicit.stat_1009412152",
        "text": "#% chance to Aggravate Bleeding on Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased corrupted charms effect duration": {
    "candidates": [
      {
        "id": "explicit.stat_1571268546",
        "text": "#% increased Corrupted Charms effect duration",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased damage while leeching": {
    "candidates": [
      {
        "id": "explicit.stat_310246444",
        "text": "#% increased Damage while Leeching",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased life recovery rate": {
    "candidates": [
      {
        "id": "explicit.stat_3240073117",
        "text": "#% increased Life Recovery rate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced recovery rate": {
    "candidates": [
      {
        "id": "explicit.stat_173226756",
        "text": "#% increased Recovery rate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased block chance per # total item armour on equipped armour items": {
    "candidates": [
      {
        "id": "explicit.stat_2531622767",
        "text": "#% increased Block chance per 100 total Item Armour on Equipped Armour Items",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased charges": {
    "candidates": [
      {
        "id": "explicit.stat_1366840608",
        "text": "#% increased Charges",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased charges gained": {
    "candidates": [
      {
        "id": "explicit.stat_3196823591",
        "text": "#% increased Charges gained",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased life and mana recovery from flasks": {
    "candidates": [
      {
        "id": "explicit.stat_2310741722",
        "text": "#% increased Life and Mana Recovery from Flasks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% less minimum physical attack damage": {
    "candidates": [
      {
        "id": "explicit.stat_2423248184",
        "text": "#% less minimum Physical Attack Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% more maximum physical attack damage": {
    "candidates": [
      {
        "id": "explicit.stat_3735888493",
        "text": "#% more maximum Physical Attack Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced duration of ignite, shock and chill on enemies": {
    "candidates": [
      {
        "id": "explicit.stat_1062710370",
        "text": "#% increased Duration of Ignite, Shock and Chill on Enemies",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced flask effect duration": {
    "candidates": [
      {
        "id": "explicit.stat_3741323227",
        "text": "#% increased Flask Effect Duration",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased damage": {
    "candidates": [
      {
        "id": "explicit.stat_2154246560",
        "text": "#% increased Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased damage against immobilised enemies": {
    "candidates": [
      {
        "id": "explicit.stat_3120508478",
        "text": "#% increased Damage against Immobilised Enemies",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased flammability magnitude": {
    "candidates": [
      {
        "id": "explicit.stat_2968503605",
        "text": "#% increased Flammability Magnitude",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased spirit reservation efficiency of skills": {
    "candidates": [
      {
        "id": "explicit.stat_53386210",
        "text": "#% increased Spirit Reservation Efficiency of Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of physical damage from hits taken as lightning damage": {
    "candidates": [
      {
        "id": "explicit.stat_425242359",
        "text": "#% of Physical damage from Hits taken as Lightning damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced chill duration on you": {
    "candidates": [
      {
        "id": "explicit.stat_1874553720",
        "text": "#% reduced Chill Duration on you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced duration of bleeding on you": {
    "candidates": [
      {
        "id": "explicit.stat_1692879867",
        "text": "#% increased Duration of Bleeding on You",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced freeze duration on you": {
    "candidates": [
      {
        "id": "explicit.stat_2160282525",
        "text": "#% reduced Freeze Duration on you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced ignite duration on you": {
    "candidates": [
      {
        "id": "explicit.stat_986397080",
        "text": "#% reduced Ignite Duration on you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced shock duration on you": {
    "candidates": [
      {
        "id": "explicit.stat_99927264",
        "text": "#% reduced Shock duration on you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased melee damage if you've dealt a projectile attack hit in the past eight seconds": {
    "candidates": [
      {
        "id": "explicit.stat_3028809864",
        "text": "#% increased Melee Damage if you've dealt a Projectile Attack Hit in the past eight seconds",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased presence area of effect": {
    "candidates": [
      {
        "id": "explicit.stat_101878827",
        "text": "#% increased Presence Area of Effect",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased projectile damage if you've dealt a melee hit in the past eight seconds": {
    "candidates": [
      {
        "id": "explicit.stat_3596695232",
        "text": "#% increased Projectile Damage if you've dealt a Melee Hit in the past eight seconds",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased melee damage against heavy stunned enemies": {
    "candidates": [
      {
        "id": "explicit.stat_2677352961",
        "text": "#% increased Melee Damage against Heavy Stunned enemies",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced effect of chill on you": {
    "candidates": [
      {
        "id": "explicit.stat_1478653032",
        "text": "#% reduced Effect of Chill on you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced effect of shock on you": {
    "candidates": [
      {
        "id": "explicit.stat_3801067695",
        "text": "#% reduced effect of Shock on you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced magnitude of ignite on you": {
    "candidates": [
      {
        "id": "explicit.stat_1269971728",
        "text": "#% reduced Magnitude of Ignite on you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to # added physical thorns damage per runic plate": {
    "candidates": [
      {
        "id": "explicit.stat_3926910174",
        "text": "# to # added Physical Thorns damage per Runic Plate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% less life flask recovery": {
    "candidates": [],
    "status": "unresolved"
  },
  "#% reduced poison duration on you": {
    "candidates": [
      {
        "id": "explicit.stat_3301100256",
        "text": "#% increased Poison Duration on you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced reload speed": {
    "candidates": [
      {
        "id": "explicit.stat_710476746",
        "text": "#% increased Reload Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased cost of skills for each # total mana spent recently": {
    "candidates": [
      {
        "id": "explicit.stat_2650053239",
        "text": "#% increased Cost of Skills for each 200 total Mana Spent Recently",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased intelligence": {
    "candidates": [
      {
        "id": "explicit.stat_656461285",
        "text": "#% increased Intelligence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased dexterity": {
    "candidates": [
      {
        "id": "explicit.stat_4139681126",
        "text": "#% increased Dexterity",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of damage taken recouped as mana": {
    "candidates": [
      {
        "id": "explicit.stat_472520716",
        "text": "#% of Damage taken Recouped as Mana",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased damage per minion": {
    "candidates": [
      {
        "id": "explicit.stat_3399499561",
        "text": "#% increased Damage per Minion",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased arrow speed": {
    "candidates": [
      {
        "id": "explicit.stat_1207554355",
        "text": "#% increased Arrow Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased effect of socketed augment items": {
    "candidates": [
      {
        "id": "explicit.stat_2081918629",
        "text": "#% increased effect of Socketed Augment Items",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced charges": {
    "candidates": [
      {
        "id": "explicit.stat_1366840608",
        "text": "#% increased Charges",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced ignite duration on enemies": {
    "candidates": [
      {
        "id": "explicit.stat_1086147743",
        "text": "#% increased Ignite Duration on Enemies",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased desecrated modifier magnitudes": {
    "candidates": [
      {
        "id": "explicit.stat_586037801",
        "text": "#% increased Desecrated Modifier magnitudes",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased effect of socketed soul cores": {
    "candidates": [
      {
        "id": "explicit.stat_4065505214",
        "text": "#% increased effect of Socketed Soul Cores",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced amount recovered": {
    "candidates": [
      {
        "id": "explicit.stat_700317374",
        "text": "#% increased Amount Recovered",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased spell damage per # spirit": {
    "candidates": [
      {
        "id": "explicit.stat_2412053423",
        "text": "#% increased Spell Damage per 10 Spirit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased chance to be afflicted by ailments when hit": {
    "candidates": [
      {
        "id": "explicit.stat_892489594",
        "text": "#% increased Chance to be afflicted by Ailments when Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased reservation efficiency of remnant skills": {
    "candidates": [
      {
        "id": "explicit.stat_1350127730",
        "text": "#% increased Reservation Efficiency of Remnant Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of damage taken from enemies with an open weakness recouped as life": {
    "candidates": [
      {
        "id": "explicit.stat_2285766967",
        "text": "#% of damage taken from enemies with an Open Weakness Recouped as Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "[# random jewel modifiers]": {
    "candidates": [],
    "status": "unresolved"
  },
  "[# random socket modifiers]": {
    "candidates": [],
    "status": "unresolved"
  },
  "[custom desecrated prefix]": {
    "candidates": [],
    "status": "unresolved"
  },
  "[custom desecrated suffix]": {
    "candidates": [],
    "status": "unresolved"
  },
  "[lich's desecrated prefix]": {
    "candidates": [],
    "status": "unresolved"
  },
  "[lich's desecrated suffix]": {
    "candidates": [],
    "status": "unresolved"
  },
  "% more waystones found in area": {
    "candidates": [],
    "status": "unresolved"
  },
  "# to dexterity": {
    "candidates": [
      {
        "id": "explicit.stat_3261801346",
        "text": "# to Dexterity",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to intelligence": {
    "candidates": [
      {
        "id": "explicit.stat_328541901",
        "text": "# to Intelligence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to maximum energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_3489782002",
        "text": "# to maximum Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to maximum mana": {
    "candidates": [
      {
        "id": "explicit.stat_1050105434",
        "text": "# to maximum Mana",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to spirit": {
    "candidates": [
      {
        "id": "explicit.stat_2704225257",
        "text": "# to Spirit",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_3981240776",
        "text": "# to Spirit",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "# to evasion rating": {
    "candidates": [
      {
        "id": "explicit.stat_2144192055",
        "text": "# to Evasion Rating",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_3299347043",
        "text": "# to maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to armour": {
    "candidates": [
      {
        "id": "explicit.stat_809229260",
        "text": "# to Armour",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to unarmed melee attack critical hit chance": {
    "candidates": [
      {
        "id": "explicit.stat_3613173483",
        "text": "#% to Unarmed Melee Attack Critical Hit Chance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# charm slots": {
    "candidates": [],
    "status": "unresolved"
  },
  "# to level of all minion skills": {
    "candidates": [
      {
        "id": "explicit.stat_2162097452",
        "text": "# to Level of all Minion Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to level of all specific skill skills": {
    "candidates": [],
    "status": "unresolved"
  },
  "# to level of all spell skills": {
    "candidates": [
      {
        "id": "explicit.stat_124131830",
        "text": "# to Level of all Spell Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to level of all fire skills": {
    "candidates": [
      {
        "id": "explicit.stat_599749213",
        "text": "# to Level of all Fire Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to maximum chaos resistance": {
    "candidates": [
      {
        "id": "explicit.stat_1301765461",
        "text": "#% to Maximum Chaos Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to all attributes": {
    "candidates": [
      {
        "id": "explicit.stat_1379411836",
        "text": "# to all Attributes",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_2897413282",
        "text": "# to all Attributes",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "# to dexterity and intelligence": {
    "candidates": [
      {
        "id": "explicit.stat_2300185227",
        "text": "# to Dexterity and Intelligence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to strength and dexterity": {
    "candidates": [
      {
        "id": "explicit.stat_538848803",
        "text": "# to Strength and Dexterity",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to strength and intelligence": {
    "candidates": [
      {
        "id": "explicit.stat_1535626285",
        "text": "# to Strength and Intelligence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of armour also applies to chaos damage": {
    "candidates": [
      {
        "id": "explicit.stat_3972229254",
        "text": "#% of Armour also applies to Chaos Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to cold and lightning resistances": {
    "candidates": [
      {
        "id": "explicit.stat_4277795662",
        "text": "#% to Cold and Lightning Resistances",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to fire and cold resistances": {
    "candidates": [
      {
        "id": "explicit.stat_2915988346",
        "text": "#% to Fire and Cold Resistances",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to fire and lightning resistances": {
    "candidates": [
      {
        "id": "explicit.stat_3441501978",
        "text": "#% to Fire and Lightning Resistances",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to stun threshold": {
    "candidates": [
      {
        "id": "explicit.stat_915769802",
        "text": "# to Stun Threshold",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of armour also applies to elemental damage": {
    "candidates": [
      {
        "id": "explicit.stat_3362812763",
        "text": "#% of Armour also applies to Elemental Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to block chance": {
    "candidates": [
      {
        "id": "explicit.stat_1702195217",
        "text": "#% to Block chance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to block chance while holding a focus": {
    "candidates": [
      {
        "id": "explicit.stat_3122852693",
        "text": "#% to Block Chance while holding a Focus",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to level of all melee skills": {
    "candidates": [
      {
        "id": "explicit.stat_9187492",
        "text": "# to Level of all Melee Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to level of all elemental skills": {
    "candidates": [
      {
        "id": "explicit.stat_2901213448",
        "text": "# to Level of all Elemental Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to level of all lightning skills": {
    "candidates": [
      {
        "id": "explicit.stat_1147690586",
        "text": "# to Level of all Lightning Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to quality of all skills": {
    "candidates": [
      {
        "id": "explicit.stat_3655769732",
        "text": "#% to Quality of all Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to critical damage bonus": {
    "candidates": [
      {
        "id": "explicit.stat_2694482655",
        "text": "#% to Critical Damage Bonus",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to ailment threshold": {
    "candidates": [
      {
        "id": "explicit.stat_1488650448",
        "text": "# to Ailment Threshold",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% surpassing chance to fire an additional arrow": {
    "candidates": [
      {
        "id": "explicit.stat_2463230181",
        "text": "#% Surpassing chance to fire an additional Arrow",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to level of all corrupted spell skill gems": {
    "candidates": [
      {
        "id": "explicit.stat_2061237517",
        "text": "# to Level of all Corrupted Spell Skill Gems",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to critical hit chance": {
    "candidates": [
      {
        "id": "explicit.stat_518292764",
        "text": "#% to Critical Hit Chance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to cold and lightning resistances per equipped item with a fire resistance modifier": {
    "candidates": [
      {
        "id": "explicit.stat_2381897042",
        "text": "#% to Cold and Lightning Resistances per Equipped Item with a Fire Resistance Modifier",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to fire and cold resistances per equipped item with a lightning resistance modifier": {
    "candidates": [
      {
        "id": "explicit.stat_4032948616",
        "text": "#% to Fire and Cold Resistances per Equipped Item with a Lightning Resistance Modifier",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to fire and lightning resistances per equipped item with a cold resistance modifier": {
    "candidates": [
      {
        "id": "explicit.stat_3753008264",
        "text": "#% to Fire and Lightning Resistances per Equipped Item with a Cold Resistance Modifier",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to maximum block chance": {
    "candidates": [
      {
        "id": "explicit.stat_480796730",
        "text": "#% to maximum Block chance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to level of all cold spell skills": {
    "candidates": [
      {
        "id": "explicit.stat_2254480358",
        "text": "# to Level of all Cold Spell Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to maximum runic ward": {
    "candidates": [
      {
        "id": "explicit.stat_3336230913",
        "text": "# to maximum Runic Ward",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_774059442",
        "text": "# to maximum Runic Ward",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "# to deflection rating per # missing energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_1207006772",
        "text": "# to Deflection Rating per 50 missing Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# metres to melee strike range while unarmed": {
    "candidates": [
      {
        "id": "explicit.stat_3273962791",
        "text": "# metres to Melee Strike Range while Unarmed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# metre to dodge roll distance": {
    "candidates": [
      {
        "id": "explicit.stat_258119672",
        "text": "# metre to Dodge Roll distance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to armour per strength": {
    "candidates": [
      {
        "id": "explicit.stat_1291132817",
        "text": "+1 to Armour per Strength",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to level of all skills": {
    "candidates": [
      {
        "id": "explicit.stat_4283407333",
        "text": "# to Level of all Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to maximum frenzy charges": {
    "candidates": [
      {
        "id": "explicit.stat_4078695",
        "text": "# to Maximum Frenzy Charges",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to maximum number of summoned totems": {
    "candidates": [
      {
        "id": "explicit.stat_429867172",
        "text": "# to maximum number of Summoned Totems",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to maximum fire resistance": {
    "candidates": [
      {
        "id": "explicit.stat_4095671657",
        "text": "#% to Maximum Fire Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# intelligence requirement": {
    "candidates": [
      {
        "id": "explicit.stat_2153364323",
        "text": "# Intelligence Requirement",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of armour also applies to lightning damage": {
    "candidates": [
      {
        "id": "explicit.stat_2134207902",
        "text": "+100% of Armour also applies to Lightning Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# metres to dodge roll distance if you haven't dodge rolled recently": {
    "candidates": [],
    "status": "unresolved"
  },
  "# to level of all cold skills": {
    "candidates": [
      {
        "id": "explicit.stat_1078455967",
        "text": "# to Level of all Cold Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to maximum cold resistance": {
    "candidates": [
      {
        "id": "explicit.stat_3676141501",
        "text": "#% to Maximum Cold Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to be poisoned": {
    "candidates": [
      {
        "id": "explicit.stat_4250009622",
        "text": "#% chance to be Poisoned",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to fire resistance while on low life": {
    "candidates": [
      {
        "id": "explicit.stat_38301299",
        "text": "#% to Fire Resistance while on Low Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to thorns critical hit chance": {
    "candidates": [
      {
        "id": "explicit.stat_2715190555",
        "text": "#% to Thorns Critical Hit Chance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to maximum lightning resistance": {
    "candidates": [
      {
        "id": "explicit.stat_1011760251",
        "text": "#% to Maximum Lightning Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to level of [random curse] skills": {
    "candidates": [],
    "status": "unresolved"
  },
  "# dexterity requirement": {
    "candidates": [
      {
        "id": "explicit.stat_1133453872",
        "text": "# Dexterity Requirement",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of maximum life regenerated per second per fragile regrowth": {
    "candidates": [
      {
        "id": "explicit.stat_3175722882",
        "text": "#% of maximum Life Regenerated per second per Fragile Regrowth",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased area of effect for attacks per # intelligence": {
    "candidates": [
      {
        "id": "explicit.stat_434750362",
        "text": "#% increased Area of Effect for Attacks per 10 Intelligence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased attack speed per # dexterity": {
    "candidates": [
      {
        "id": "explicit.stat_2241560081",
        "text": "#% increased Attack Speed per 25 Dexterity",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_720908147",
        "text": "#% increased Attack Speed per 20 Dexterity",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_889691035",
        "text": "#% increased Attack Speed per 10 Dexterity",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "#% increased spirit reservation efficiency of buff skills per # maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_3581035970",
        "text": "#% increased Spirit Reservation Efficiency of Buff Skills per 100 Maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% more unarmed damage per # strength": {
    "candidates": [
      {
        "id": "explicit.stat_3452816629",
        "text": "1% more Unarmed Damage per # Strength",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased mana cost of skills": {
    "candidates": [
      {
        "id": "explicit.stat_474294393",
        "text": "#% reduced Mana Cost of Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased mana regeneration rate per fragile regrowth": {
    "candidates": [
      {
        "id": "explicit.stat_344174146",
        "text": "#% increased Mana Regeneration Rate per Fragile Regrowth",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased movement speed when on full life": {
    "candidates": [
      {
        "id": "explicit.stat_3393547195",
        "text": "#% increased Movement Speed when on Full Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased weapon damage per # strength": {
    "candidates": [
      {
        "id": "explicit.stat_1791136590",
        "text": "#% increased Weapon Damage per 10 Strength",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of damage taken bypasses energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_2448633171",
        "text": "#% of Damage taken bypasses Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of physical damage dealt by your hits causes blood loss": {
    "candidates": [
      {
        "id": "explicit.stat_70760090",
        "text": "#% of Physical damage dealt by your Hits causes Blood Loss",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of skill mana costs converted to life costs": {
    "candidates": [
      {
        "id": "explicit.stat_2480498143",
        "text": "#% of Skill Mana Costs Converted to Life Costs",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of spell damage leeched as life": {
    "candidates": [
      {
        "id": "explicit.stat_782941180",
        "text": "#% of Spell Damage Leeched as Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced dexterity": {
    "candidates": [
      {
        "id": "explicit.stat_4139681126",
        "text": "#% increased Dexterity",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced intelligence": {
    "candidates": [
      {
        "id": "explicit.stat_656461285",
        "text": "#% increased Intelligence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced movement speed": {
    "candidates": [
      {
        "id": "explicit.stat_2250533757",
        "text": "#% increased Movement Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced skill speed": {
    "candidates": [
      {
        "id": "explicit.stat_970213192",
        "text": "#% increased Skill Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to poison on hit with spell damage": {
    "candidates": [
      {
        "id": "explicit.stat_1493211587",
        "text": "#% chance to Poison on Hit with Spell Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% faster start of energy shield recharge": {
    "candidates": [
      {
        "id": "explicit.stat_1782086450",
        "text": "#% faster start of Energy Shield Recharge",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased attribute requirements": {
    "candidates": [
      {
        "id": "explicit.stat_3639275092",
        "text": "#% increased Attribute Requirements",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased block chance against projectiles": {
    "candidates": [
      {
        "id": "explicit.stat_3583542124",
        "text": "#% increased Block chance against Projectiles",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased culling strike threshold": {
    "candidates": [
      {
        "id": "explicit.stat_3563080185",
        "text": "#% increased Culling Strike Threshold",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased evasion rating if you have been hit recently": {
    "candidates": [
      {
        "id": "explicit.stat_1073310669",
        "text": "#% increased Evasion Rating if you have been Hit Recently",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased evasion rating when on full life": {
    "candidates": [
      {
        "id": "explicit.stat_88817332",
        "text": "#% increased Evasion Rating when on Full Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased parried debuff duration": {
    "candidates": [
      {
        "id": "explicit.stat_3401186585",
        "text": "#% increased Parried Debuff Duration",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased parry damage": {
    "candidates": [
      {
        "id": "explicit.stat_1569159338",
        "text": "#% increased Parry Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased thorns damage": {
    "candidates": [
      {
        "id": "explicit.stat_1315743832",
        "text": "#% increased Thorns damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of cold damage converted to lightning damage": {
    "candidates": [
      {
        "id": "explicit.stat_1686824704",
        "text": "#% of Cold Damage Converted to Lightning Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of elemental damage converted to chaos damage": {
    "candidates": [
      {
        "id": "explicit.stat_2295988214",
        "text": "#% of Elemental Damage Converted to Chaos Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of fire damage converted to cold damage": {
    "candidates": [
      {
        "id": "explicit.stat_3503160529",
        "text": "#% of Fire Damage Converted to Cold Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of fire damage converted to lightning damage": {
    "candidates": [
      {
        "id": "explicit.stat_2772033465",
        "text": "#% of Fire damage Converted to Lightning damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of fire damage from hits taken as physical damage": {
    "candidates": [
      {
        "id": "explicit.stat_3205239847",
        "text": "#% of Fire Damage from Hits taken as Physical Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of lightning damage converted to chaos damage": {
    "candidates": [
      {
        "id": "explicit.stat_2109189637",
        "text": "#% of Lightning Damage Converted to Chaos Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of lightning damage converted to cold damage": {
    "candidates": [
      {
        "id": "explicit.stat_3627052716",
        "text": "#% of Lightning Damage Converted to Cold Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of parry physical damage converted to cold damage": {
    "candidates": [
      {
        "id": "explicit.stat_2089152298",
        "text": "#% of Parry Physical Damage Converted to Cold Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased critical damage bonus per power charge": {
    "candidates": [
      {
        "id": "explicit.stat_4164870816",
        "text": "#% increased Critical Damage Bonus per Power Charge",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% additional physical damage reduction": {
    "candidates": [
      {
        "id": "explicit.stat_3771516363",
        "text": "#% additional Physical Damage Reduction",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of damage from hits is taken from your damageable companion's life before you": {
    "candidates": [
      {
        "id": "explicit.stat_1150343007",
        "text": "#% of Damage from Hits is taken from your Damageable Companion's Life before you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased global evasion rating when on low life": {
    "candidates": [
      {
        "id": "explicit.stat_2695354435",
        "text": "#% increased Global Evasion Rating when on Low Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased mana regeneration rate if you've dealt a critical hit recently": {
    "candidates": [
      {
        "id": "explicit.stat_1659564104",
        "text": "#% increased Mana Regeneration Rate if you've dealt a Critical Hit Recently",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased maximum life per socketed grand spectrum": {
    "candidates": [
      {
        "id": "explicit.stat_332217711",
        "text": "#% increased Maximum Life per socketed Grand Spectrum",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased spirit per socketed grand spectrum": {
    "candidates": [
      {
        "id": "explicit.stat_1430165758",
        "text": "#% increased Spirit per socketed Grand Spectrum",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% to all elemental resistances per socketed grand spectrum": {
    "candidates": [
      {
        "id": "explicit.stat_242161915",
        "text": "+#% to all Elemental Resistances per socketed Grand Spectrum",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased spell damage per # intelligence": {
    "candidates": [
      {
        "id": "explicit.stat_2818518881",
        "text": "#% increased Spell Damage per 10 Intelligence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance for energy shield recharge to start when you kill an enemy": {
    "candidates": [
      {
        "id": "explicit.stat_1618482990",
        "text": "#% chance for Energy Shield Recharge to start when you Kill an Enemy",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to gain a power charge on hit": {
    "candidates": [
      {
        "id": "explicit.stat_1453197917",
        "text": "#% chance to gain a Power Charge on Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased accuracy rating": {
    "candidates": [
      {
        "id": "explicit.stat_624954515",
        "text": "#% increased Accuracy Rating",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased melee strike range with this weapon": {
    "candidates": [
      {
        "id": "explicit.stat_548198834",
        "text": "#% increased Melee Strike Range with this weapon",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased rarity of items foundyour other modifiers to rarity of items found do not apply": {
    "candidates": [],
    "status": "unresolved"
  },
  "#% less damage taken if you have not been hit recently": {
    "candidates": [
      {
        "id": "explicit.stat_67637087",
        "text": "#% less Damage taken if you have not been Hit Recently",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of elemental damage from hits taken as chaos damage": {
    "candidates": [
      {
        "id": "explicit.stat_1175213674",
        "text": "#% of Elemental damage from Hits taken as Chaos damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced maximum divinity per corrupted item equipped": {
    "candidates": [
      {
        "id": "explicit.stat_2189090852",
        "text": "#% increased maximum Divinity per Corrupted Item Equipped",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced stun threshold": {
    "candidates": [
      {
        "id": "explicit.stat_680068163",
        "text": "#% increased Stun Threshold",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased effect of socketed runes": {
    "candidates": [
      {
        "id": "explicit.stat_704409219",
        "text": "#% increased effect of Socketed Runes",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased stun recovery": {
    "candidates": [
      {
        "id": "explicit.stat_2511217560",
        "text": "#% increased Stun Recovery",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to # cold thorns damage": {
    "candidates": [
      {
        "id": "explicit.stat_1515531208",
        "text": "# to # Cold Thorns damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "# to # fire thorns damage": {
    "candidates": [
      {
        "id": "explicit.stat_1993950627",
        "text": "# to # Fire Thorns damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to be inflicted with bleeding when hit": {
    "candidates": [
      {
        "id": "explicit.stat_3423694372",
        "text": "#% chance to be inflicted with Bleeding when Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to gain a power charge on critical hit": {
    "candidates": [
      {
        "id": "explicit.stat_3814876985",
        "text": "#% chance to gain a Power Charge on Critical Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to intimidate enemies for # seconds on hit": {
    "candidates": [
      {
        "id": "explicit.stat_78985352",
        "text": "#% chance to Intimidate Enemies for 4 seconds on Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to not destroy corpses when consuming corpses": {
    "candidates": [
      {
        "id": "explicit.stat_965913123",
        "text": "#% chance to not destroy Corpses when Consuming Corpses",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased attack speed while on full mana": {
    "candidates": [
      {
        "id": "explicit.stat_4145314483",
        "text": "#% increased Attack Speed while on Full Mana",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased freeze duration on enemies": {
    "candidates": [
      {
        "id": "explicit.stat_1073942215",
        "text": "#% increased Freeze Duration on Enemies",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased movement speed while affected by an ailment": {
    "candidates": [
      {
        "id": "explicit.stat_610276769",
        "text": "#% increased Movement Speed while affected by an Ailment",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of spell mana cost converted to life cost": {
    "candidates": [
      {
        "id": "explicit.stat_3544050945",
        "text": "#% of Spell Mana Cost Converted to Life Cost",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced attribute requirements": {
    "candidates": [
      {
        "id": "explicit.stat_3639275092",
        "text": "#% increased Attribute Requirements",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced damage": {
    "candidates": [
      {
        "id": "explicit.stat_2154246560",
        "text": "#% increased Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced endurance charge duration": {
    "candidates": [
      {
        "id": "explicit.stat_1170174456",
        "text": "#% increased Endurance Charge Duration",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of melee physical damage taken reflected to attacker": {
    "candidates": [
      {
        "id": "explicit.stat_1092987622",
        "text": "#% of Melee Physical Damage taken reflected to Attacker",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased chill duration on enemies": {
    "candidates": [
      {
        "id": "explicit.stat_3485067555",
        "text": "#% increased Chill Duration on Enemies",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced global armour, evasion and energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_1177404658",
        "text": "#% increased Global Armour, Evasion and Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced life recovery rate": {
    "candidates": [
      {
        "id": "explicit.stat_3240073117",
        "text": "#% increased Life Recovery rate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% slower start of energy shield recharge": {
    "candidates": [],
    "status": "unresolved"
  },
  "# physical damage taken on minion death": {
    "candidates": [
      {
        "id": "explicit.stat_4176970656",
        "text": "# Physical Damage taken on Minion Death",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to avoid projectiles": {
    "candidates": [
      {
        "id": "explicit.stat_3452269808",
        "text": "#% chance to avoid Projectiles",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of elemental damage converted to cold damage": {
    "candidates": [
      {
        "id": "explicit.stat_210092264",
        "text": "#% of Elemental Damage Converted to Cold Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of elemental damage converted to fire damage": {
    "candidates": [
      {
        "id": "explicit.stat_40154188",
        "text": "#% of Elemental Damage Converted to Fire Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of elemental damage converted to lightning damage": {
    "candidates": [
      {
        "id": "explicit.stat_289540902",
        "text": "#% of Elemental Damage Converted to Lightning Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of maximum life converted to energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_2458962764",
        "text": "#% of Maximum Life Converted to Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased mana regeneration rate while stationary": {
    "candidates": [
      {
        "id": "explicit.stat_3308030688",
        "text": "#% increased Mana Regeneration Rate while stationary",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% less attack damage": {
    "candidates": [],
    "status": "unresolved"
  },
  "# to # added attack fire damage per # strength": {
    "candidates": [
      {
        "id": "explicit.stat_4186798932",
        "text": "# to # Added Attack Fire Damage per 25 Strength",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased experience gain": {
    "candidates": [
      {
        "id": "explicit.stat_3666934677",
        "text": "#% increased Experience gain",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_57434274",
        "text": "#% increased Experience gain",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "#% increased movement speed per frenzy charge": {
    "candidates": [
      {
        "id": "explicit.stat_1541516339",
        "text": "#% increased Movement Speed per Frenzy Charge",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced critical spell damage bonus per critical hit you've dealt with spells recently": {
    "candidates": [
      {
        "id": "explicit.stat_2972244965",
        "text": "#% increased Critical Spell Damage Bonus per Critical Hit you've dealt with Spells Recently",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to avoid death from hits": {
    "candidates": [
      {
        "id": "explicit.stat_1689729380",
        "text": "#% chance to Avoid Death from Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased evasion rating if you've dodge rolled recently": {
    "candidates": [
      {
        "id": "explicit.stat_1040569494",
        "text": "#% increased Evasion Rating if you've Dodge Rolled Recently",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased flask charges used": {
    "candidates": [
      {
        "id": "explicit.stat_644456512",
        "text": "#% reduced Flask Charges used",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased life regeneration rate": {
    "candidates": [
      {
        "id": "explicit.stat_44972811",
        "text": "#% increased Life Regeneration rate",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased parried debuff magnitude": {
    "candidates": [
      {
        "id": "explicit.stat_818877178",
        "text": "#% increased Parried Debuff Magnitude",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased rarity of items found when on low life": {
    "candidates": [
      {
        "id": "explicit.stat_2929867083",
        "text": "#% increased Rarity of Items found when on Low Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased strength requirement": {
    "candidates": [
      {
        "id": "explicit.stat_295075366",
        "text": "#% increased Strength Requirement",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of chaos damage you prevent when hit recouped as life and mana during effect": {
    "candidates": [
      {
        "id": "explicit.stat_2678930256",
        "text": "#% of Chaos damage you prevent when Hit Recouped as Life and Mana during effect",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of charges consumed by used charms are granted to your life flasks": {
    "candidates": [
      {
        "id": "explicit.stat_2369960685",
        "text": "#% of Charges consumed by used Charms are granted to your Life Flasks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of charges consumed by used life flasks are granted to your charms": {
    "candidates": [
      {
        "id": "explicit.stat_2020463573",
        "text": "#% of Charges consumed by used Life Flasks are granted to your Charms",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of physical damage prevented recouped as life": {
    "candidates": [
      {
        "id": "explicit.stat_1374654984",
        "text": "#% of Physical Damage prevented Recouped as Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of physical damage taken as fire damage": {
    "candidates": [
      {
        "id": "explicit.stat_1004468512",
        "text": "#% of Physical Damage taken as Fire Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% of your base life regeneration is granted to allies in your presence": {
    "candidates": [
      {
        "id": "explicit.stat_4287671144",
        "text": "#% of your Base Life Regeneration is granted to Allies in your Presence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced duration of curses on you": {
    "candidates": [
      {
        "id": "explicit.stat_2920970371",
        "text": "#% increased Duration of Curses on you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% reduced evasion rating": {
    "candidates": [
      {
        "id": "explicit.stat_124859000",
        "text": "#% increased Evasion Rating (Local)",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_2106365538",
        "text": "#% increased Evasion Rating",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "#% reduced slowing potency of debuffs on you": {
    "candidates": [
      {
        "id": "explicit.stat_924253255",
        "text": "#% increased Slowing Potency of Debuffs on You",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "#% less life recovered": {
    "candidates": [],
    "status": "unresolved"
  },
  "accuracy rating is doubled": {
    "candidates": [
      {
        "id": "explicit.stat_2161347476",
        "text": "Accuracy Rating is Doubled",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "additional rare monsters are spawned from abysses in map": {
    "candidates": [],
    "status": "unresolved"
  },
  "adds # to # physical damage to attacks": {
    "candidates": [
      {
        "id": "explicit.stat_3032590688",
        "text": "Adds # to # Physical Damage to Attacks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "adds # to # lightning damage": {
    "candidates": [
      {
        "id": "explicit.stat_3336890334",
        "text": "Adds # to # Lightning Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "adds # to # physical damage": {
    "candidates": [
      {
        "id": "explicit.stat_1940865751",
        "text": "Adds # to # Physical Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "adds # to # cold damage": {
    "candidates": [
      {
        "id": "explicit.stat_1037193709",
        "text": "Adds # to # Cold Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "adds # to # chaos damage": {
    "candidates": [
      {
        "id": "explicit.stat_2223678961",
        "text": "Adds # to # Chaos damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "adds # to # chaos damage to attacks": {
    "candidates": [
      {
        "id": "explicit.stat_674553446",
        "text": "Adds # to # Chaos Damage to Attacks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "adds # to # fire damage": {
    "candidates": [
      {
        "id": "explicit.stat_709508406",
        "text": "Adds # to # Fire Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "adds # to # cold damage to attacks": {
    "candidates": [
      {
        "id": "explicit.stat_4067062424",
        "text": "Adds # to # Cold damage to Attacks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "adds # to # fire damage to attacks": {
    "candidates": [
      {
        "id": "explicit.stat_1573130764",
        "text": "Adds # to # Fire damage to Attacks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "adds # to # lightning damage to attacks": {
    "candidates": [
      {
        "id": "explicit.stat_1754445556",
        "text": "Adds # to # Lightning damage to Attacks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "adds # to # lightning damage to unarmed melee hits": {
    "candidates": [
      {
        "id": "explicit.stat_3835522656",
        "text": "Adds # to # Lightning Damage to Unarmed Melee Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "adds # to # lightning damage to attacks per # intelligence": {
    "candidates": [
      {
        "id": "explicit.stat_3111921451",
        "text": "Adds # to # Lightning Damage to Attacks per 20 Intelligence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "aggravate bleeding on enemies when they enter your presence": {
    "candidates": [
      {
        "id": "explicit.stat_874646180",
        "text": "Aggravate Bleeding on Enemies when they Enter your Presence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "aggravate bleeding on targets you critically hit with attacks": {
    "candidates": [],
    "status": "unresolved"
  },
  "aggravating any bleeding with this weapon also aggravates all ignites on the target": {
    "candidates": [
      {
        "id": "explicit.stat_2312741059",
        "text": "Aggravating any Bleeding with this Weapon also Aggravates all Ignites on the target",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "all attacks count as empowered attacks": {
    "candidates": [
      {
        "id": "explicit.stat_1952324525",
        "text": "All Attacks count as Empowered Attacks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "all damage from hits against bleeding targets contributes to chill magnitude": {
    "candidates": [
      {
        "id": "explicit.stat_1717295693",
        "text": "All Damage from Hits against Bleeding targets Contributes to Chill Magnitude",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "all damage from hits against poisoned targets contributes to chill magnitude": {
    "candidates": [
      {
        "id": "explicit.stat_1375667591",
        "text": "All Damage from Hits against Poisoned targets Contributes to Chill Magnitude",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "all damage from hits contributes to poison magnitude": {
    "candidates": [
      {
        "id": "explicit.stat_4012215578",
        "text": "All Damage from Hits Contributes to Poison Magnitude",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "all damage from hits with this weapon contributes to chill magnitude": {
    "candidates": [
      {
        "id": "explicit.stat_2156230257",
        "text": "All Damage from Hits with this Weapon Contributes to Chill Magnitude",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "all damage from hits with this weapon contributes to freeze buildup": {
    "candidates": [
      {
        "id": "explicit.stat_3761294489",
        "text": "All Damage from Hits with this Weapon Contributes to Freeze Buildup",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "all damage from hits with this weapon contributes to pin buildup": {
    "candidates": [
      {
        "id": "explicit.stat_4142786792",
        "text": "All Damage from Hits with this Weapon Contributes to Pin Buildup",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "all damage taken from hits contributes to magnitude of chill inflicted on you": {
    "candidates": [
      {
        "id": "explicit.stat_1705072014",
        "text": "All Damage taken from Hits Contributes to Magnitude of Chill inflicted on you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "all damage taken from hits while bleeding contributes to magnitude of chill on you": {
    "candidates": [
      {
        "id": "explicit.stat_2420248029",
        "text": "All Damage taken from Hits while Bleeding Contributes to Magnitude of Chill on you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "all damage taken from hits while poisoned contributes to magnitude of chill on you": {
    "candidates": [
      {
        "id": "explicit.stat_1291285202",
        "text": "All Damage taken from Hits while Poisoned Contributes to Magnitude of Chill on you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "all damage with this weapon causes electrocution buildup": {
    "candidates": [
      {
        "id": "explicit.stat_1910743684",
        "text": "All damage with this Weapon causes Electrocution buildup",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "all mage's legacies have #% increased effect per duplicate mage's legacy you have": {
    "candidates": [
      {
        "id": "explicit.stat_3874491706",
        "text": "All Mage's Legacies have #% increased effect per duplicate Mage's Legacy you have",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence deal # to # added attack chaos damage": {
    "candidates": [
      {
        "id": "explicit.stat_262946222",
        "text": "Allies in your Presence deal # to # added Attack Chaos Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence deal # to # added attack cold damage": {
    "candidates": [
      {
        "id": "explicit.stat_2347036682",
        "text": "Allies in your Presence deal # to # added Attack Cold Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence deal # to # added attack fire damage": {
    "candidates": [
      {
        "id": "explicit.stat_849987426",
        "text": "Allies in your Presence deal # to # added Attack Fire Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence deal # to # added attack lightning damage": {
    "candidates": [
      {
        "id": "explicit.stat_2854751904",
        "text": "Allies in your Presence deal # to # added Attack Lightning Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence deal #% increased damage": {
    "candidates": [
      {
        "id": "explicit.stat_1798257884",
        "text": "Allies in your Presence deal #% increased Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence gain #% of damage as extra chaos damage": {
    "candidates": [
      {
        "id": "explicit.stat_4258251165",
        "text": "Allies in your Presence Gain #% of Damage as Extra Chaos Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence gain #% of damage as extra fire damage": {
    "candidates": [
      {
        "id": "explicit.stat_2173791158",
        "text": "Allies in your Presence Gain #% of Damage as Extra Fire Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence have #% increased attack speed": {
    "candidates": [
      {
        "id": "explicit.stat_1998951374",
        "text": "Allies in your Presence have #% increased Attack Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence have #% increased cast speed": {
    "candidates": [
      {
        "id": "explicit.stat_289128254",
        "text": "Allies in your Presence have #% increased Cast Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence have #% increased critical damage bonus": {
    "candidates": [
      {
        "id": "explicit.stat_3057012405",
        "text": "Allies in your Presence have #% increased Critical Damage Bonus",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence have #% increased critical hit chance": {
    "candidates": [
      {
        "id": "explicit.stat_1250712710",
        "text": "Allies in your Presence have #% increased Critical Hit Chance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence regenerate #% of their maximum life per second": {
    "candidates": [
      {
        "id": "explicit.stat_3081479811",
        "text": "Allies in your Presence Regenerate #% of their Maximum Life per second",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence regenerate # life per second": {
    "candidates": [
      {
        "id": "explicit.stat_4010677958",
        "text": "Allies in your Presence Regenerate # Life per second",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "allocates # sinister jewel sockets": {
    "candidates": [
      {
        "id": "explicit.stat_3929993388",
        "text": "Allocates # Sinister Jewel sockets",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "allocates passive skill": {
    "candidates": [],
    "status": "unresolved"
  },
  "alternating every # seconds:take #% less damage from hitstake #% less damage over time": {
    "candidates": [],
    "status": "unresolved"
  },
  "always deals critical hits against heavy stunned enemies": {
    "candidates": [
      {
        "id": "explicit.stat_2214130968",
        "text": "Always deals Critical Hits against Heavy Stunned Enemies",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "always hits": {
    "candidates": [
      {
        "id": "explicit.stat_4126210832",
        "text": "Always Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "always poison on hit with this weapon": {
    "candidates": [],
    "status": "unresolved"
  },
  "any number of poisons from this weapon can affect a target at the same time": {
    "candidates": [
      {
        "id": "explicit.stat_4021234281",
        "text": "Any number of Poisons from this Weapon can affect a target at the same time",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "armour is increased by uncapped fire resistance": {
    "candidates": [
      {
        "id": "explicit.stat_713266390",
        "text": "Armour is increased by Uncapped Fire Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "arrows fork": {
    "candidates": [
      {
        "id": "explicit.stat_2421436896",
        "text": "Arrows Fork",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "arrows pierce all targets after forking": {
    "candidates": [
      {
        "id": "explicit.stat_2138799639",
        "text": "Arrows Pierce all targets after Forking",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "arrows return if they have pierced a target which had fully broken armour": {
    "candidates": [
      {
        "id": "explicit.stat_1243721142",
        "text": "Arrows Return if they have Pierced a target which had Fully Broken Armour",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "attack hits inflict spectral fire for # seconds": {
    "candidates": [
      {
        "id": "explicit.stat_33298888",
        "text": "Attack Hits inflict Spectral Fire for # seconds",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "attack projectiles return if they pierced at least # times": {
    "candidates": [
      {
        "id": "explicit.stat_2720781168",
        "text": "Attack Projectiles Return if they Pierced at least # times",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "attacks chain # additional times": {
    "candidates": [],
    "status": "unresolved"
  },
  "attacks consume an endurance charge to critically hit": {
    "candidates": [
      {
        "id": "explicit.stat_3550545679",
        "text": "Attacks consume an Endurance Charge to Critically Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "attacks cost an additional #% of your maximum mana": {
    "candidates": [
      {
        "id": "explicit.stat_2157692677",
        "text": "Attacks cost an additional #% of your maximum Mana",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "attacks gain #% of physical damage as extra chaos damage": {
    "candidates": [
      {
        "id": "explicit.stat_261503687",
        "text": "Attacks Gain #% of Physical Damage as extra Chaos Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "attacks gain #% of damage as extra cold damage": {
    "candidates": [
      {
        "id": "explicit.stat_1484500028",
        "text": "Attacks Gain #% of Damage as Extra Cold Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "attacks gain #% of damage as extra fire damage": {
    "candidates": [
      {
        "id": "explicit.stat_1049080093",
        "text": "Attacks Gain #% of Damage as Extra Fire Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "attacks have added maximum lightning damage equal to #% of maximum mana": {
    "candidates": [
      {
        "id": "explicit.stat_3258071686",
        "text": "Attacks have Added maximum Lightning Damage equal to #% of maximum Mana",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "attacks have added physical damage equal to #% of maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_2723294374",
        "text": "Attacks have added Physical damage equal to #% of maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "attacks with this weapon gain #% of physical damage as extra damage of each element": {
    "candidates": [
      {
        "id": "explicit.stat_3620731914",
        "text": "Attacks with this Weapon gain #% of Physical damage as Extra damage of each Element",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "attacks with this weapon have added cold damage equal to #% to #% of maximum mana": {
    "candidates": [
      {
        "id": "explicit.stat_566086661",
        "text": "Attacks with this Weapon have Added Cold Damage equal to #% to #% of maximum Mana",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "base critical hit chance for attacks with weapons is #%": {
    "candidates": [
      {
        "id": "explicit.stat_2635559734",
        "text": "Base Critical Hit Chance for Attacks with Weapons is #%",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "base is floating [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "bear skills convert #% of physical damage to fire damage": {
    "candidates": [
      {
        "id": "explicit.stat_4287372938",
        "text": "Bear Skills Convert #% of Physical Damage to Fire Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "bifurcates critical hits": {
    "candidates": [
      {
        "id": "explicit.stat_1451444093",
        "text": "Bifurcates Critical Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "bleeding you inflict deals fire damage instead of physical damage": {
    "candidates": [
      {
        "id": "explicit.stat_1016759424",
        "text": "Bleeding you inflict deals Fire Damage instead of Physical Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "bleeding you inflict is aggravated": {
    "candidates": [
      {
        "id": "explicit.stat_841429130",
        "text": "Bleeding you inflict is Aggravated",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "blind chilled enemies on hit": {
    "candidates": [
      {
        "id": "explicit.stat_3450276548",
        "text": "Blind Chilled enemies on Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "blind targets when you poison them": {
    "candidates": [
      {
        "id": "explicit.stat_60826109",
        "text": "Blind Targets when you Poison them",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "blocking damage poisons the enemy as though dealing # base chaos damage": {
    "candidates": [
      {
        "id": "explicit.stat_4195198267",
        "text": "Blocking Damage Poisons the Enemy as though dealing # Base Chaos Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "blood magic": {
    "candidates": [
      {
        "id": "explicit.stat_2801937280",
        "text": "Blood Magic",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_3831171903|5",
        "text": "Blood Magic",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "bolts fired by crossbow attacks have #% chance to notexpend ammunition if you've reloaded recently": {
    "candidates": [],
    "status": "unresolved"
  },
  "bow attacks consume #% of your maximum life flask charges if possible to deal added physical damage equal to #% of flask's life recovery amount": {
    "candidates": [
      {
        "id": "explicit.stat_3893788785",
        "text": "Bow Attacks consume #% of your maximum Life Flask Charges if possible to deal added Physical damage equal to #% of Flask's Life Recovery amount",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "breach hives in map have # additional waves of hiveborn monsters": {
    "candidates": [],
    "status": "unresolved"
  },
  "breaches in map have #% reduced pack size": {
    "candidates": [
      {
        "id": "explicit.stat_1210760818",
        "text": "Breaches in Map have #% increased Pack Size",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "breaks armour equal to #% of damage from hits with this weapon": {
    "candidates": [
      {
        "id": "explicit.stat_949573361",
        "text": "Breaks Armour equal to #% of damage from Hits with this weapon",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "can allocate passive skills from the sorceress's starting point": {
    "candidates": [
      {
        "id": "explicit.stat_3359496001",
        "text": "Can Allocate Passive Skills from the Sorceress's starting point",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "can attack as though using a one handed mace while both of your hand slots are emptyunarmed attacks that would use an equipped one hand mace's damage use this item's damage": {
    "candidates": [],
    "status": "unresolved"
  },
  "can be modified while corrupted": {
    "candidates": [
      {
        "id": "explicit.stat_1161337167",
        "text": "Can be modified while Corrupted",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "can have # additional instilled modifiers": {
    "candidates": [
      {
        "id": "explicit.stat_1135194732",
        "text": "Can have # additional Instilled Modifiers",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "can only be applied to precursor tower mapscompleting the tower makes all nearby maps accessible": {
    "candidates": [],
    "status": "unresolved"
  },
  "can reroll favours at ritual altars in your maps twice as many times": {
    "candidates": [
      {
        "id": "explicit.stat_2500154144",
        "text": "Can Reroll Favours at Ritual Altars in your Maps twice as many times",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "can't use body armour": {
    "candidates": [
      {
        "id": "explicit.stat_4007482102",
        "text": "Can't use Body Armour",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "can't use other rings": {
    "candidates": [
      {
        "id": "explicit.stat_64726306",
        "text": "Can't use other Rings",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cannon ball footsteps [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "cannot be blinded": {
    "candidates": [
      {
        "id": "explicit.stat_1436284579",
        "text": "Cannot be Blinded",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cannot be ignited": {
    "candidates": [
      {
        "id": "explicit.stat_331731406",
        "text": "Cannot be Ignited",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cannot be light stunned": {
    "candidates": [
      {
        "id": "explicit.stat_1000739259",
        "text": "Cannot be Light Stunned",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cannot be light stunned by deflected hits": {
    "candidates": [
      {
        "id": "explicit.stat_2252419505",
        "text": "Cannot be Light Stunned by Deflected Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cannot be poisoned": {
    "candidates": [
      {
        "id": "explicit.stat_3835551335",
        "text": "Cannot be Poisoned",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cannot be shocked": {
    "candidates": [
      {
        "id": "explicit.stat_491899612",
        "text": "Cannot be Shocked",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cannot be used manually": {
    "candidates": [
      {
        "id": "explicit.stat_1237409891",
        "text": "Cannot be Used manually",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cannot be used with trials below level #": {
    "candidates": [],
    "status": "unresolved"
  },
  "cannot block": {
    "candidates": [
      {
        "id": "explicit.stat_1465760952",
        "text": "Cannot Block",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cannot evade enemy attacks": {
    "candidates": [
      {
        "id": "explicit.stat_474452755",
        "text": "Cannot Evade Enemy Attacks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cannot have energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_410952253",
        "text": "Cannot have Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cannot immobilise enemies": {
    "candidates": [
      {
        "id": "explicit.stat_4062529591",
        "text": "Cannot Immobilise enemies",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cannot inflict elemental ailments": {
    "candidates": [
      {
        "id": "explicit.stat_4056809290",
        "text": "Cannot inflict Elemental Ailments",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cannot regenerate mana if you haven't dealt a critical hit recently": {
    "candidates": [
      {
        "id": "explicit.stat_1458880585",
        "text": "Cannot Regenerate Mana if you haven't dealt a Critical Hit Recently",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cannot restore honour": {
    "candidates": [],
    "status": "unresolved"
  },
  "cannot use life flasksnon-unique life flasks apply their effects constantlyrecovery from life flasks cannot be instantrecovery from your life flasks cannot be applied to anything other than you": {
    "candidates": [],
    "status": "unresolved"
  },
  "cannot use projectile attacks": {
    "candidates": [
      {
        "id": "explicit.stat_1961849903",
        "text": "Cannot use Projectile Attacks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cannot use warcries": {
    "candidates": [
      {
        "id": "explicit.stat_2598171606",
        "text": "Cannot use Warcries",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "causes #% increased stun buildup": {
    "candidates": [
      {
        "id": "explicit.stat_791928121",
        "text": "Causes #% increased Stun Buildup",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "causes bleeding on hit": {
    "candidates": [
      {
        "id": "explicit.stat_2091621414",
        "text": "Causes Bleeding on Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "causes double stun buildup": {
    "candidates": [
      {
        "id": "explicit.stat_769129523",
        "text": "Causes Double Stun Buildup",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "chance to block damage is lucky": {
    "candidates": [
      {
        "id": "explicit.stat_2957287092",
        "text": "Chance to Block Damage is Lucky",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "chance to deflect is lucky while on low life": {
    "candidates": [
      {
        "id": "explicit.stat_1675120891",
        "text": "Chance to Deflect is Lucky while on Low Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "chaos damage from hits also contributes to electrocute buildup": {
    "candidates": [
      {
        "id": "explicit.stat_2315177528",
        "text": "Chaos Damage from Hits also Contributes to Electrocute Buildup",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "chaos damage from hits also contributes to freeze buildup": {
    "candidates": [
      {
        "id": "explicit.stat_2973498992",
        "text": "Chaos Damage from Hits also Contributes to Freeze Buildup",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "chaos damage from hits also contributes to shock chance": {
    "candidates": [
      {
        "id": "explicit.stat_2418601510",
        "text": "Chaos Damage from Hits also Contributes to Shock Chance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "chaos resistance is zero": {
    "candidates": [
      {
        "id": "explicit.stat_2439129490",
        "text": "Chaos Resistance is zero",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "charm create consecrated ground when used duration ms [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "charm create consecrated ground when used radius [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "charms gain # charge per second": {
    "candidates": [
      {
        "id": "explicit.stat_185580205",
        "text": "Charms gain # charge per Second",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "charms use no charges": {
    "candidates": [
      {
        "id": "explicit.stat_2620375641",
        "text": "Charms use no Charges",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "cold damage from hits contributes to flammability and ignite magnitudes instead of chill magnitude or freeze buildup": {
    "candidates": [
      {
        "id": "explicit.stat_1261612903",
        "text": "Cold Damage from Hits Contributes to Flammability and Ignite Magnitudes instead of Chill Magnitude or Freeze Buildup",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "companions deal #% increased damage to your marked targets": {
    "candidates": [
      {
        "id": "explicit.stat_1067622524",
        "text": "Companions deal #% increased damage to your Marked targets",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "companions have #% increased maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_1805182458",
        "text": "Companions have #% increased maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "convert #% of maximum life to twice as much armour per #% chaos resistance above #%": {
    "candidates": [
      {
        "id": "explicit.stat_4274637468",
        "text": "Convert #% of maximum Life to twice as much Armour per 1% Chaos Resistance above 0%",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "convert #% of fire damage with mace skills to cold damage": {
    "candidates": [
      {
        "id": "explicit.stat_1683568809",
        "text": "Convert #% of Fire Damage with Mace Skills to Cold Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "convert #% of maximum energy shield to maximum divinity": {
    "candidates": [
      {
        "id": "explicit.stat_2896801635",
        "text": "Convert 100% of maximum Energy Shield to maximum Divinity",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "convert all armour to evasion rating": {
    "candidates": [
      {
        "id": "explicit.stat_3351912431",
        "text": "Convert All Armour to Evasion Rating",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "copy a random modifier from each enemy in your presence whenyou shapeshift to an animal formmodifiers gained this way are lost after # seconds or when you next shapeshift": {
    "candidates": [],
    "status": "unresolved"
  },
  "corrupted blood cannot be inflicted on you": {
    "candidates": [
      {
        "id": "explicit.stat_1658498488",
        "text": "Corrupted Blood cannot be inflicted on you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "create a fragment of divinity in your presence every # seconds": {
    "candidates": [
      {
        "id": "explicit.stat_891466814",
        "text": "Create a Fragment of Divinity in your Presence every 4 seconds",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "creates consecrated ground on use": {
    "candidates": [
      {
        "id": "explicit.stat_3849649145",
        "text": "Creates Consecrated Ground on use",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "creates ignited ground for # seconds when used, igniting enemies as though dealing fire damage equal to #% of your maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_39209842",
        "text": "Creates Ignited Ground for 4 seconds when used, Igniting enemies as though dealing Fire damage equal to #% of your maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "critical hits cannot extract impale": {
    "candidates": [
      {
        "id": "explicit.stat_3414998042",
        "text": "Critical Hits cannot Extract Impale",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "critical hits ignore enemy monster elemental resistances": {
    "candidates": [
      {
        "id": "explicit.stat_1094937621",
        "text": "Critical Hits ignore Enemy Monster Elemental Resistances",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "critical hits ignore enemy monster lightning resistance": {
    "candidates": [
      {
        "id": "explicit.stat_1289045485",
        "text": "Critical Hits Ignore Enemy Monster Lightning Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "critical hits inflict impale": {
    "candidates": [
      {
        "id": "explicit.stat_3058238353",
        "text": "Critical Hits inflict Impale",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "critical hits poison the enemy": {
    "candidates": [
      {
        "id": "explicit.stat_62849030",
        "text": "Critical Hits Poison the enemy",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "critical hits with spells apply # stacks of critical weakness": {
    "candidates": [],
    "status": "unresolved"
  },
  "culling strike": {
    "candidates": [
      {
        "id": "explicit.stat_2524254339",
        "text": "Culling Strike",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "culling strike against frozen enemies": {
    "candidates": [
      {
        "id": "explicit.stat_1158324489",
        "text": "Culling Strike against Frozen Enemies",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "current energy shield also grants elemental damage reduction": {
    "candidates": [],
    "status": "unresolved"
  },
  "curse enemies with enfeeble on block": {
    "candidates": [],
    "status": "unresolved"
  },
  "curse skills have #% increased cast speed": {
    "candidates": [
      {
        "id": "explicit.stat_2378065031",
        "text": "Curse Skills have #% increased Cast Speed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "curses have no activation delay": {
    "candidates": [
      {
        "id": "explicit.stat_3751072557",
        "text": "Curses have no Activation Delay",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "curses you inflict are reflected back to you": {
    "candidates": [
      {
        "id": "explicit.stat_4275855121",
        "text": "Curses you inflict are reflected back to you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "curses you inflict can affect hexproof enemies": {
    "candidates": [
      {
        "id": "explicit.stat_1367119630",
        "text": "Curses you inflict can affect Hexproof Enemies",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "curses you inflict have infinite duration": {
    "candidates": [
      {
        "id": "explicit.stat_2609822974",
        "text": "Curses you inflict have infinite Duration",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "curses you inflict ignore curse limit": {
    "candidates": [
      {
        "id": "explicit.stat_1793470535",
        "text": "Curses you inflict ignore Curse limit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "curses you inflict spread to enemies within # metres when cursed enemy dies": {
    "candidates": [
      {
        "id": "explicit.stat_986616727",
        "text": "Curses you inflict spread to enemies within 3 metres when Cursed enemy dies",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "damage blocked is recouped as mana": {
    "candidates": [
      {
        "id": "explicit.stat_2875218423",
        "text": "Damage Blocked is Recouped as Mana",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "damage of enemies hitting you is unlucky while you are on low life": {
    "candidates": [
      {
        "id": "explicit.stat_3753748365",
        "text": "Damage of Enemies Hitting you is Unlucky while you are on Low Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "damage over time bypasses your energy shieldwhile not on full life, sacrifice #% of maximum mana per second to recover that much life": {
    "candidates": [],
    "status": "unresolved"
  },
  "damage over time cannot bypass your energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_2886108529",
        "text": "Damage over Time cannot bypass your Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "damage penetrates #% elemental resistances": {
    "candidates": [
      {
        "id": "explicit.stat_2101383955",
        "text": "Damage Penetrates #% Elemental Resistances",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "damage penetrates #% cold resistance": {
    "candidates": [
      {
        "id": "explicit.stat_3417711605",
        "text": "Damage Penetrates #% Cold Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "damage taken cannot be absorbed": {
    "candidates": [],
    "status": "unresolved"
  },
  "damage taken recouped as life is also recouped as energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_2432200638",
        "text": "Damage taken Recouped as Life is also Recouped as Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "dazes on hit": {
    "candidates": [
      {
        "id": "explicit.stat_2933846633",
        "text": "Dazes on Hit",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_3146310524",
        "text": "Dazes on Hit",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "deal #% of overkill damage to enemies within # metres of the enemy killed": {
    "candidates": [
      {
        "id": "explicit.stat_2301852600",
        "text": "Deal #% of Overkill damage to enemies within 2 metres of the enemy killed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "deal #% increased damage with hits to rare or unique enemies for each second they've ever been in your presence, up to a maximum of #%": {
    "candidates": [
      {
        "id": "explicit.stat_4258409981",
        "text": "Deal #% increased Damage with Hits to Rare or Unique Enemies for each second they've ever been in your Presence, up to a maximum of 200%",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "deal no elemental damage": {
    "candidates": [
      {
        "id": "explicit.stat_2998305364",
        "text": "Deal no Elemental Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "deals #% of current mana as chaos damage to you when effect ends": {
    "candidates": [
      {
        "id": "explicit.stat_3311259821",
        "text": "Deals #% of current Mana as Chaos Damage to you when Effect ends",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "debuffs you inflict have #% increased slow magnitude": {
    "candidates": [
      {
        "id": "explicit.stat_3650992555",
        "text": "Debuffs you inflict have #% increased Slow Magnitude",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "decimating strike": {
    "candidates": [
      {
        "id": "explicit.stat_3872034802",
        "text": "Decimating Strike",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "defend against hits as though you had #% more armour per #% current energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_679087890",
        "text": "Defend against Hits as though you had #% more Armour per 1% current Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "defend with #% of armour while you have energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_1539671749",
        "text": "Defend with #% of Armour while you have Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "defend with #% of armour": {
    "candidates": [
      {
        "id": "explicit.stat_3387008487",
        "text": "Defend with 200% of Armour",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "defend with #% of armour during effect": {
    "candidates": [
      {
        "id": "explicit.stat_3138344128",
        "text": "Defend with 200% of Armour during effect",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "delirium fog in map applies #% reduced deliriousness to players": {
    "candidates": [
      {
        "id": "explicit.stat_1769611692",
        "text": "Delirium Fog in Map applies #% increased Deliriousness to Players",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "delirium fog in your maps never dissipates": {
    "candidates": [
      {
        "id": "explicit.stat_1084853859",
        "text": "Delirium Fog in your Maps never dissipates",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "discipline art variation [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "divine flight": {
    "candidates": [
      {
        "id": "explicit.stat_2971398565",
        "text": "Divine Flight",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "dodge roll avoids all hits": {
    "candidates": [
      {
        "id": "explicit.stat_3518087336",
        "text": "Dodge Roll avoids all Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "dodge roll passes through enemies": {
    "candidates": [
      {
        "id": "explicit.stat_1298316550",
        "text": "Dodge Roll passes through Enemies",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "double stun threshold while shield is raised": {
    "candidates": [
      {
        "id": "explicit.stat_3686997387",
        "text": "Double Stun Threshold while Shield is Raised",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "drop ignited ground while moving, which lasts # seconds and ignites as though dealing fire damage equal to #% of your maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_2356156926",
        "text": "Drop Ignited Ground while moving, which lasts 8 seconds and Ignites as though dealing Fire Damage equal to #% of your maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "drop shocked ground while moving, lasting # seconds": {
    "candidates": [
      {
        "id": "explicit.stat_65133983",
        "text": "Drop Shocked Ground while moving, lasting 8 seconds",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "each arrow fired is a crescendo, splinter, reversing, diamond, covetous, or blunt arrow": {
    "candidates": [
      {
        "id": "explicit.stat_3891922348",
        "text": "Each Arrow fired is a Crescendo, Splinter, Reversing, Diamond, Covetous, or Blunt Arrow",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "eat a soul when you hit an enemy with an open weakness": {
    "candidates": [
      {
        "id": "explicit.stat_1393838912",
        "text": "Eat a Soul when you Hit an enemy with an Open Weakness",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "effect is not removed when unreserved life is filled": {
    "candidates": [
      {
        "id": "explicit.stat_2932359713",
        "text": "Effect is not removed when Unreserved Life is Filled",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "effect is not removed when unreserved mana is filled": {
    "candidates": [
      {
        "id": "explicit.stat_3969608626",
        "text": "Effect is not removed when Unreserved Mana is Filled",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "eldritch battery": {
    "candidates": [
      {
        "id": "explicit.stat_2262736444",
        "text": "Eldritch Battery",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_3831171903|9",
        "text": "Eldritch Battery",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "elemental ailment threshold is increased by uncapped chaos resistance": {
    "candidates": [
      {
        "id": "explicit.stat_1000566389",
        "text": "Elemental Ailment Threshold is increased by Uncapped Chaos Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "elemental damage from hits contributes to flammability, ignite, and chill magnitudes, freeze buildup, and shock chance": {
    "candidates": [
      {
        "id": "explicit.stat_2678924815",
        "text": "Elemental Damage from Hits Contributes to Flammability, Ignite, and Chill Magnitudes, Freeze Buildup, and Shock Chance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enable ancient order task [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "enable grand design clip handling [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "enable lioneyes glow task [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "enemies are culled on block": {
    "candidates": [
      {
        "id": "explicit.stat_381470861",
        "text": "Enemies are Culled on Block",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies chilled by your hits can be shattered as though frozen": {
    "candidates": [
      {
        "id": "explicit.stat_3119292058",
        "text": "Enemies Chilled by your Hits can be Shattered as though Frozen",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies chilled by your hits increase damage taken by chill magnitude": {
    "candidates": [
      {
        "id": "explicit.stat_1816894864",
        "text": "Enemies Chilled by your Hits increase damage taken by Chill Magnitude",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies frozen by you take #% increased damage": {
    "candidates": [
      {
        "id": "explicit.stat_849085925",
        "text": "Enemies Frozen by you take #% increased Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies have an accuracy penalty against you based on distance": {
    "candidates": [
      {
        "id": "explicit.stat_3868746097",
        "text": "Enemies have an Accuracy Penalty against you based on Distance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies in your presence are blinded": {
    "candidates": [
      {
        "id": "explicit.stat_1464727508",
        "text": "Enemies in your Presence are Blinded",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_2080373320",
        "text": "Enemies in your Presence are Blinded",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "enemies in your presence are hindered": {
    "candidates": [
      {
        "id": "explicit.stat_2890401248",
        "text": "Enemies in your Presence are Hindered",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies in your presence are ignited as though dealt # base fire damage": {
    "candidates": [
      {
        "id": "explicit.stat_1433051415",
        "text": "Enemies in your Presence are Ignited as though dealt # Base Fire Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies in your presence are intimidated": {
    "candidates": [
      {
        "id": "explicit.stat_3491722585",
        "text": "Enemies in your Presence are Intimidated",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies in your presence count as having double power": {
    "candidates": [
      {
        "id": "explicit.stat_2836928993",
        "text": "Enemies in your Presence count as having double Power",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies in your presence gain #% of damage as extra chaos damage": {
    "candidates": [
      {
        "id": "explicit.stat_1224838456",
        "text": "Enemies in your Presence Gain #% of Damage as Extra Chaos Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies in your presence gain # gruelling madness each second": {
    "candidates": [
      {
        "id": "explicit.stat_3628041050",
        "text": "Enemies in your Presence gain 1 Gruelling Madness each second",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies in your presence have #% to fire resistance": {
    "candidates": [
      {
        "id": "explicit.stat_990363519",
        "text": "Enemies in your Presence have #% to Fire Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies in your presence have additional power equal to their gruelling madness": {
    "candidates": [
      {
        "id": "explicit.stat_1827379101",
        "text": "Enemies in your Presence have additional Power equal to their Gruelling Madness",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies in your presence have at least #% of life reserved": {
    "candidates": [
      {
        "id": "explicit.stat_1953536251",
        "text": "Enemies in your Presence have at least #% of Life Reserved",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies in your presence have exposure": {
    "candidates": [
      {
        "id": "explicit.stat_724806967",
        "text": "Enemies in your Presence have Exposure",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies in your presence have lightning resistance equal to yours": {
    "candidates": [
      {
        "id": "explicit.stat_1546580830",
        "text": "Enemies in your Presence have Lightning Resistance equal to yours",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies in your presence have no elemental resistances": {
    "candidates": [
      {
        "id": "explicit.stat_83011992",
        "text": "Enemies in your Presence have no Elemental Resistances",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies in your presence killed by anyone count as being killed by you instead": {
    "candidates": [
      {
        "id": "explicit.stat_1576794517",
        "text": "Enemies in your Presence killed by anyone count as being killed by you instead",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies in your presence resist elemental damage based on their lowest resistance": {
    "candidates": [
      {
        "id": "explicit.stat_2786852525",
        "text": "Enemies in your Presence Resist Elemental Damage based on their Lowest Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "enemies take #% increased damage for each elemental ailment type amongyour ailments on them": {
    "candidates": [],
    "status": "unresolved"
  },
  "energy generation is doubled": {
    "candidates": [
      {
        "id": "explicit.stat_793801176",
        "text": "Energy Generation is doubled",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "energy shield is increased by uncapped cold resistance": {
    "candidates": [
      {
        "id": "explicit.stat_2147773348",
        "text": "Energy Shield is increased by Uncapped Cold Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "energy shield recharge is not interrupted by damage if recharge began recently": {
    "candidates": [
      {
        "id": "explicit.stat_1419390131",
        "text": "Energy Shield Recharge is not interrupted by Damage if Recharge began Recently",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "energy shield recharge starts on use": {
    "candidates": [
      {
        "id": "explicit.stat_1056492907",
        "text": "Energy Shield Recharge starts on use",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "energy shield recharge starts when you use a mana flask": {
    "candidates": [
      {
        "id": "explicit.stat_2402413437",
        "text": "Energy Shield Recharge starts when you use a Mana Flask",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "equipment and skill gems have #% increased attribute requirements": {
    "candidates": [
      {
        "id": "explicit.stat_752930724",
        "text": "Equipment and Skill Gems have #% increased Attribute Requirements",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "evasion rating is doubled if you have not been hit recently": {
    "candidates": [
      {
        "id": "explicit.stat_1272938854",
        "text": "Evasion Rating is doubled if you have not been Hit Recently",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "evasion rating is increased by uncapped lightning resistance": {
    "candidates": [
      {
        "id": "explicit.stat_419098854",
        "text": "Evasion Rating is increased by Uncapped Lightning Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "everlasting sacrifice": {
    "candidates": [
      {
        "id": "explicit.stat_145598447",
        "text": "Everlasting Sacrifice",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "every # seconds, gain a random non-damaging shrine buff for # seconds": {
    "candidates": [
      {
        "id": "explicit.stat_2625554454",
        "text": "Every 10 seconds, gain a random non-damaging Shrine buff for 20 seconds",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_2879778895",
        "text": "Every 10 seconds, gain a random non-damaging Shrine buff for 20 seconds",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "every # seconds during effect, deal #% of mana spent in those seconds as chaos damage to enemies within # metres": {
    "candidates": [
      {
        "id": "explicit.stat_1910039112",
        "text": "Every 3 seconds during Effect, deal #% of Mana spent in those seconds as Chaos Damage to Enemies within 3 metres",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "every # seconds, consume a nearby corpse to recover #% of maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_3764198549",
        "text": "Every 3 seconds, Consume a nearby Corpse to Recover #% of maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "every # seconds, recover # life for every # life recovery per second from regeneration": {
    "candidates": [
      {
        "id": "explicit.stat_1457411584",
        "text": "Every 4 seconds, Recover 1 Life for every # Life Recovery per second from Regeneration",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "every # rage also grants #% of damage taken recouped as life": {
    "candidates": [
      {
        "id": "explicit.stat_1895552497",
        "text": "Every 5 Rage also grants #% of Damage taken Recouped as Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "every rage also grants #% increased armour": {
    "candidates": [
      {
        "id": "explicit.stat_2995914769",
        "text": "Every Rage also grants #% increased Armour",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "every rage also grants #% increased stun threshold": {
    "candidates": [
      {
        "id": "explicit.stat_352044736",
        "text": "Every Rage also grants #% increased Stun Threshold",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "every second slam skill you use while shapeshifted is ancestrally boostedevery second strike skill you use while shapeshifted is ancestrally boosted": {
    "candidates": [],
    "status": "unresolved"
  },
  "every second, inflicts critical weakness on enemies in your presence for # seconds": {
    "candidates": [],
    "status": "unresolved"
  },
  "excess life recovery from leech is applied to energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_999436592",
        "text": "Excess Life Recovery from Leech is applied to Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "exposure art variation [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "favours at ritual altars in area costs #% increased tribute": {
    "candidates": [
      {
        "id": "explicit.stat_1228222525",
        "text": "Favours at Ritual Altars in Area costs #% increased Tribute",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "fire damage also contributes to bleeding magnitude": {
    "candidates": [
      {
        "id": "explicit.stat_1221641885",
        "text": "Fire Damage also Contributes to Bleeding Magnitude",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "fire damage from hits contributes to shock chance instead of flammability and ignite magnitudes": {
    "candidates": [
      {
        "id": "explicit.stat_2949096603",
        "text": "Fire Damage from Hits Contributes to Shock Chance instead of Flammability and Ignite Magnitudes",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "flammability magnitude is doubled": {
    "candidates": [
      {
        "id": "explicit.stat_1540254896",
        "text": "Flammability Magnitude is doubled",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "flasks do not recover life": {
    "candidates": [
      {
        "id": "explicit.stat_265717301",
        "text": "Flasks do not recover Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "footstep effect variation [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "fully armour broken enemies you kill with hits shatter": {
    "candidates": [
      {
        "id": "explicit.stat_3278008231",
        "text": "Fully Armour Broken enemies you kill with Hits Shatter",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # mana per enemy killed": {
    "candidates": [
      {
        "id": "explicit.stat_1368271171",
        "text": "Gain # Mana per enemy killed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # life per enemy killed": {
    "candidates": [
      {
        "id": "explicit.stat_3695891184",
        "text": "Gain # Life per enemy killed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain #% of maximum life as extra maximum energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_1228337241",
        "text": "Gain #% of maximum Life as Extra maximum Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain #% of damage as extra cold damage": {
    "candidates": [
      {
        "id": "explicit.stat_2505884597",
        "text": "Gain #% of Damage as Extra Cold Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain #% of evasion rating as extra armour": {
    "candidates": [
      {
        "id": "explicit.stat_1546604934",
        "text": "Gain #% of Evasion Rating as extra Armour",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # rage when hit by an enemy during effect": {
    "candidates": [
      {
        "id": "explicit.stat_555311715",
        "text": "Gain # Rage when Hit by an Enemy during effect",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # rage on hit": {
    "candidates": [
      {
        "id": "explicit.stat_2258007247",
        "text": "Gain # Rage on Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain #% of damage as extra chaos damage": {
    "candidates": [
      {
        "id": "explicit.stat_3398787959",
        "text": "Gain #% of Damage as Extra Chaos Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain #% of damage as extra fire damage": {
    "candidates": [
      {
        "id": "explicit.stat_3015669065",
        "text": "Gain #% of Damage as Extra Fire Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain #% of maximum mana as armour": {
    "candidates": [
      {
        "id": "explicit.stat_514290151",
        "text": "Gain #% of Maximum Mana as Armour",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain #% of maximum mana as extra maximum energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_3027830452",
        "text": "Gain #% of maximum Mana as Extra maximum Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain #% of elemental damage as extra cold damage": {
    "candidates": [
      {
        "id": "explicit.stat_1158842087",
        "text": "Gain #% of Elemental Damage as Extra Cold Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain #% of elemental damage as extra fire damage": {
    "candidates": [
      {
        "id": "explicit.stat_701564564",
        "text": "Gain #% of Elemental Damage as Extra Fire Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain #% of elemental damage as extra lightning damage": {
    "candidates": [
      {
        "id": "explicit.stat_3550887155",
        "text": "Gain #% of Elemental Damage as Extra Lightning Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # guard for # seconds per combo expended when using skills": {
    "candidates": [
      {
        "id": "explicit.stat_2443032293",
        "text": "Gain # Guard for 0.5 seconds per Combo expended when using Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain #% to #% increased movement speed at random when hit, until hit again": {
    "candidates": [
      {
        "id": "explicit.stat_796381300",
        "text": "Gain 0% to #% increased Movement Speed at random when Hit, until Hit again",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # dark whisper every second there is a cursed enemy in your presence": {
    "candidates": [
      {
        "id": "explicit.stat_2482970488",
        "text": "Gain 1 Dark Whisper every second there is a Cursed Enemy in your Presence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # druidic prowess for every # total rage spent": {
    "candidates": [
      {
        "id": "explicit.stat_1273508088",
        "text": "Gain 1 Druidic Prowess for every 20 total Rage spent",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # explosive rhythm every # times you use a grenade skill remove all explosive rhythm on reaching # to gain explosive fervour for # seconds": {
    "candidates": [],
    "status": "unresolved"
  },
  "gain # fear incarnate when you cull a target": {
    "candidates": [
      {
        "id": "explicit.stat_3775736880",
        "text": "Gain 1 Fear Incarnate when you Cull a target",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # fragile regrowth each second": {
    "candidates": [
      {
        "id": "explicit.stat_3841984913",
        "text": "Gain # Fragile Regrowth each second",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # rage on melee hit": {
    "candidates": [
      {
        "id": "explicit.stat_2709367754",
        "text": "Gain # Rage on Melee Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # runefather's boast per power of targets affected by runefather's challenge you kill": {
    "candidates": [
      {
        "id": "explicit.stat_343703314",
        "text": "Gain 1 Runefather's Boast per Power of targets affected by Runefather's Challenge you kill",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # runic binding on hit with spells, no more than once every # secondslose all runic bindings when you shapeshift to gain that much unbound potential": {
    "candidates": [],
    "status": "unresolved"
  },
  "gain #% of cold damage as extra fire damage per #% chill magnitude on enemy": {
    "candidates": [
      {
        "id": "explicit.stat_2469544361",
        "text": "Gain #% of Cold damage as Extra Fire damage per 1% Chill Magnitude on enemy",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain #% of damage as fire damage per #% chance to block": {
    "candidates": [
      {
        "id": "explicit.stat_3170380905",
        "text": "Gain 1% of damage as Fire damage per #% Chance to Block",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # rage when critically hit by an enemy": {
    "candidates": [
      {
        "id": "explicit.stat_1466716929",
        "text": "Gain # Rage when Critically Hit by an Enemy",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # mana per enemy hit with attacks": {
    "candidates": [
      {
        "id": "explicit.stat_820939409",
        "text": "Gain # Mana per Enemy Hit with Attacks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # life per enemy hit with attacks": {
    "candidates": [
      {
        "id": "explicit.stat_2797971005",
        "text": "Gain # Life per Enemy Hit with Attacks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain #% of damage as extra lightning damage": {
    "candidates": [
      {
        "id": "explicit.stat_3278136794",
        "text": "Gain #% of Damage as Extra Lightning Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain # rage when hit by an enemy": {
    "candidates": [
      {
        "id": "explicit.stat_3292710273",
        "text": "Gain # Rage when Hit by an Enemy",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain #% of damage as chaos damage per undead minion": {
    "candidates": [
      {
        "id": "explicit.stat_997343726",
        "text": "Gain #% of Damage as Chaos Damage per Undead Minion",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain a random charge on reaching maximum rage, no more than once every # seconds": {
    "candidates": [
      {
        "id": "explicit.stat_2284588585",
        "text": "Gain a random Charge on reaching Maximum Rage, no more than once every # seconds",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain an additional charge when you gain a charge": {
    "candidates": [],
    "status": "unresolved"
  },
  "gain cold thorns damage equal to #% of your maximum mana": {
    "candidates": [
      {
        "id": "explicit.stat_1435496528",
        "text": "Gain Cold Thorns Damage equal to #% of your maximum Mana",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain deflection rating equal to #% of evasion rating": {
    "candidates": [
      {
        "id": "explicit.stat_3033371881",
        "text": "Gain Deflection Rating equal to #% of Evasion Rating",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain deflection rating equal to #% of armour": {
    "candidates": [
      {
        "id": "explicit.stat_1752419596",
        "text": "Gain Deflection Rating equal to #% of Armour",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain finality for # seconds per combo expended when using skills": {
    "candidates": [
      {
        "id": "explicit.stat_4010198893",
        "text": "Gain Finality for # seconds per Combo expended when using Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain guard equal to #% of missing energy shield for # seconds when you dodge roll": {
    "candidates": [
      {
        "id": "explicit.stat_469006068",
        "text": "Gain Guard equal to #% of missing Energy Shield for 4 seconds when you Dodge Roll",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain guard equal to current runic ward for # seconds when effect ends": {
    "candidates": [
      {
        "id": "explicit.stat_3069759106",
        "text": "Gain Guard equal to Current Runic Ward for # seconds when Effect ends",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain no inherent bonus from intelligence": {
    "candidates": [
      {
        "id": "explicit.stat_4187571952",
        "text": "Gain no inherent bonus from Intelligence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain overencumbrance for # seconds when you dodge roll": {
    "candidates": [
      {
        "id": "explicit.stat_2148576938",
        "text": "Gain Overencumbrance for 4 seconds when you Dodge Roll",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain physical thorns damage equal to #% - #% of maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_2163764037",
        "text": "Gain Physical Thorns damage equal to #% - #% of maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gain tailwind on critical hit, no more than once per second": {
    "candidates": [
      {
        "id": "explicit.stat_2459662130",
        "text": "Gain Tailwind on Critical Hit, no more than once per second",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "gains # charges per second": {
    "candidates": [
      {
        "id": "explicit.stat_1873752457",
        "text": "Gains # Charges per Second",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "giant's blood": {
    "candidates": [
      {
        "id": "explicit.stat_1875158664",
        "text": "Giant's Blood",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_3831171903|2",
        "text": "Giant's Blood",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "glorifying the defilement of # souls in tribute to amanamupassives in radius are conquered by the abyssalsdesecration makes this item unstable": {
    "candidates": [],
    "status": "unresolved"
  },
  "grants a frenzy charge on use": {
    "candidates": [
      {
        "id": "explicit.stat_280890192",
        "text": "Grants a Frenzy Charge on use",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "grants a power charge on use": {
    "candidates": [
      {
        "id": "explicit.stat_2566921799",
        "text": "Grants a Power Charge on use",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "grants effect of dreaming gloom shrine": {
    "candidates": [
      {
        "id": "explicit.stat_3742268652",
        "text": "Grants effect of Dreaming Gloom Shrine",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "grants effect of guided freezing shrine": {
    "candidates": [
      {
        "id": "explicit.stat_234657505",
        "text": "Grants effect of Guided Freezing Shrine",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "grants effect of guided meteoric shrine": {
    "candidates": [
      {
        "id": "explicit.stat_3917429943",
        "text": "Grants effect of Guided Meteoric Shrine",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "grants effect of guided tempest shrine": {
    "candidates": [
      {
        "id": "explicit.stat_2800412928",
        "text": "Grants effect of Guided Tempest Shrine",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "grants onslaught during effect": {
    "candidates": [
      {
        "id": "explicit.stat_618665892",
        "text": "Grants Onslaught during effect",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "grants up to your maximum rage on use": {
    "candidates": [
      {
        "id": "explicit.stat_1509210032",
        "text": "Grants up to your maximum Rage on use",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "has # jewel socket (hidden)": {
    "candidates": [],
    "status": "unresolved"
  },
  "has # augment sockets (hidden)": {
    "candidates": [],
    "status": "unresolved"
  },
  "has # jewel sockets (hidden)": {
    "candidates": [],
    "status": "unresolved"
  },
  "has # to # physical damage, # to # per boss's face broken": {
    "candidates": [
      {
        "id": "explicit.stat_1955786041",
        "text": "Has # to # Physical damage, # to # per Boss's Face Broken",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "has no attribute requirements": {
    "candidates": [
      {
        "id": "explicit.stat_2739148464",
        "text": "Has no Attribute Requirements",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "heavy stuns enemies that are on full life": {
    "candidates": [
      {
        "id": "explicit.stat_668076381",
        "text": "Heavy Stuns Enemies that are on Full Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "herald skills deal #% increased damage": {
    "candidates": [
      {
        "id": "explicit.stat_21071013",
        "text": "Herald Skills deal #% increased Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "historic": {
    "candidates": [
      {
        "id": "explicit.stat_3787436548",
        "text": "Historic",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "hits against you have #% reduced critical hit chance while you are chilled": {
    "candidates": [
      {
        "id": "explicit.stat_3923947492",
        "text": "Hits against you have #% increased Critical Hit Chance while you are Chilled",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "hits with this weapon have # to # added physical damage per #% block chance": {
    "candidates": [
      {
        "id": "explicit.stat_2036307261",
        "text": "Hits with this weapon have # to # Added Physical Damage per 1% Block Chance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "hits with this weapon have #% chance to trigger molten shower per # strength": {
    "candidates": [
      {
        "id": "explicit.stat_1867725690",
        "text": "Hits with this Weapon have #% chance to Trigger Molten Shower per 25 Strength",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "hits with this weapon have no critical damage bonus": {
    "candidates": [
      {
        "id": "explicit.stat_1508661598",
        "text": "Hits with this Weapon have no Critical Damage Bonus",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "hits with this weapon inflict # gruelling madness": {
    "candidates": [
      {
        "id": "explicit.stat_2526112819",
        "text": "Hits with this Weapon inflict # Gruelling Madness",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "ice crystals have #% reduced maximum life per #% cold resistance you have": {
    "candidates": [
      {
        "id": "explicit.stat_740421489",
        "text": "Ice Crystals have #% increased maximum Life per 5% Cold Resistance you have",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "if map was not previously irradiated, completing map adds irradiation instead": {
    "candidates": [
      {
        "id": "explicit.stat_2371108370",
        "text": "If Map was not previously Irradiated, completing Map adds Irradiation instead",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "ignite you inflict deals chaos damage instead of fire damage": {
    "candidates": [
      {
        "id": "explicit.stat_983582600",
        "text": "Ignite you inflict deals Chaos Damage instead of Fire Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "ignites you inflict spread to other enemies that stay within # metres for # second": {
    "candidates": [
      {
        "id": "explicit.stat_3314057862",
        "text": "Ignites you inflict spread to other Enemies that stay within 1.5 metres for 1 second",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "immobilise enemies at #% buildup instead of #%": {
    "candidates": [
      {
        "id": "explicit.stat_4238331303",
        "text": "Immobilise enemies at #% buildup instead of 100%",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "increases and reductions to mana regeneration rate alsoapply to energy shield recharge rate": {
    "candidates": [],
    "status": "unresolved"
  },
  "increases and reductions to minion attack speed also affect you": {
    "candidates": [
      {
        "id": "explicit.stat_2293111154",
        "text": "Increases and Reductions to Minion Attack Speed also affect you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "increases and reductions to minion damage also affect you": {
    "candidates": [
      {
        "id": "explicit.stat_1631928082",
        "text": "Increases and Reductions to Minion Damage also affect you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "increases and reductions to spell damage also apply to attacks": {
    "candidates": [
      {
        "id": "explicit.stat_3811649872",
        "text": "Increases and Reductions to Spell damage also apply to Attacks",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "increases movement speed by #%, plus #% per # evasion rating, up to a maximum of #%other modifiers to movement speed except for sprinting do not apply": {
    "candidates": [],
    "status": "unresolved"
  },
  "infinite parry range": {
    "candidates": [
      {
        "id": "explicit.stat_1076031760",
        "text": "Infinite Parry Range",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "inflict corrupted blood for # seconds on block, dealing #% ofyour maximum life as physical damage per second": {
    "candidates": [],
    "status": "unresolved"
  },
  "inflict elemental exposure on hit, lowering total elemental resistances by #%": {
    "candidates": [],
    "status": "unresolved"
  },
  "inflict elemental exposure to enemies # metres in front of youfor # seconds, every # seconds while raised": {
    "candidates": [],
    "status": "unresolved"
  },
  "inflicts a random curse on you when your totems die, ignoring curse limit": {
    "candidates": [
      {
        "id": "explicit.stat_2918129907",
        "text": "Inflicts a random Curse on you when your Totems die, ignoring Curse limit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "inflicts runefather's challenge on enemies # metres in front of you when raised, no more than once every # seconds": {
    "candidates": [
      {
        "id": "explicit.stat_774222208",
        "text": "Inflicts Runefather's Challenge on enemies # metres in front of you when raised, no more than once every 2 seconds",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "intimidate enemies on block for # seconds": {
    "candidates": [],
    "status": "unresolved"
  },
  "iron grip": {
    "candidates": [
      {
        "id": "explicit.stat_3528245713",
        "text": "Iron Grip",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "iron reflexes": {
    "candidates": [
      {
        "id": "explicit.stat_326965591",
        "text": "Iron Reflexes",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_3831171903|21",
        "text": "Iron Reflexes",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "iron will": {
    "candidates": [
      {
        "id": "explicit.stat_281311123",
        "text": "Iron Will",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "knockback direction is reversed": {
    "candidates": [
      {
        "id": "explicit.stat_281201999",
        "text": "Knockback direction is reversed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "knocks back enemies on hit": {
    "candidates": [
      {
        "id": "explicit.stat_3739186583",
        "text": "Knocks Back Enemies on Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "leech #% of physical attack damage as life": {
    "candidates": [
      {
        "id": "explicit.stat_2557965901",
        "text": "Leech #% of Physical Attack Damage as Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "leeches #% of physical damage as life": {
    "candidates": [
      {
        "id": "explicit.stat_55876295",
        "text": "Leeches #% of Physical Damage as Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "leeches #% of physical damage as mana": {
    "candidates": [
      {
        "id": "explicit.stat_669069897",
        "text": "Leeches #% of Physical Damage as Mana",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "leeches #% of maximum life when you cast a spell": {
    "candidates": [
      {
        "id": "explicit.stat_335699483",
        "text": "Leeches #% of maximum Life when you Cast a Spell",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "leeching life from your hits causes allies in your presence to also leech the same amount of life": {
    "candidates": [
      {
        "id": "explicit.stat_3605721598",
        "text": "Leeching Life from your Hits causes Allies in your Presence to also Leech the same amount of Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "left ring slot: projectiles from spells cannot chain": {
    "candidates": [
      {
        "id": "explicit.stat_3647242059",
        "text": "Left ring slot: Projectiles from Spells cannot Chain",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "left ring slot: projectiles from spells fork": {
    "candidates": [
      {
        "id": "explicit.stat_2437476305",
        "text": "Left ring slot: Projectiles from Spells Fork",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "legacy of mages legacy": {
    "candidates": [],
    "status": "unresolved"
  },
  "life and mana flasks can be equipped in either slot": {
    "candidates": [
      {
        "id": "explicit.stat_932866937",
        "text": "Life and Mana Flasks can be equipped in either slot",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "life flasks gain # charges per second": {
    "candidates": [
      {
        "id": "explicit.stat_1102738251",
        "text": "Life Flasks gain # charges per Second",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "life flasks used while on low life apply recovery instantly": {
    "candidates": [
      {
        "id": "explicit.stat_1200347828",
        "text": "Life Flasks used while on Low Life apply Recovery Instantly",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "life leech can overflow maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_2714890129",
        "text": "Life Leech can Overflow Maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "life leech is converted to energy shield leech": {
    "candidates": [
      {
        "id": "explicit.stat_3314050176",
        "text": "Life Leech is Converted to Energy Shield Leech",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "life leech recovers based on your chaos damage instead of physical damage": {
    "candidates": [
      {
        "id": "explicit.stat_825825364",
        "text": "Life Leech recovers based on your Chaos damage instead of Physical damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "life leech recovers based on your lightning damage as well as physical damage": {
    "candidates": [
      {
        "id": "explicit.stat_1092555766",
        "text": "Life Leech recovers based on your Lightning damage as well as Physical damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "life recharges": {
    "candidates": [
      {
        "id": "explicit.stat_3971919056",
        "text": "Life Recharges",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "life recovery from flasks also applies to energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_2812872407",
        "text": "Life Recovery from Flasks also applies to Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "life recovery from flasks can overflow maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_1245896889",
        "text": "Life Recovery from Flasks can Overflow Maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "life recovery from flasks is instant": {
    "candidates": [
      {
        "id": "explicit.stat_720388959",
        "text": "Life Recovery from Flasks is instant",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "life recovery from regeneration is not applied": {
    "candidates": [
      {
        "id": "explicit.stat_3947672598",
        "text": "Life Recovery from Regeneration is not applied",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "life recovery other than flasks cannot recover life to above low life": {
    "candidates": [
      {
        "id": "explicit.stat_451403019",
        "text": "Life Recovery other than Flasks cannot Recover Life to above Low Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "life regeneration is applied to energy shield instead": {
    "candidates": [
      {
        "id": "explicit.stat_632761194",
        "text": "Life Regeneration is applied to Energy Shield instead",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "life that would be lost by taking damage is instead reserveduntil you take no damage to life for # seconds": {
    "candidates": [],
    "status": "unresolved"
  },
  "lightning coil replace damage hit effect index [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "lightning damage from hits contributes to electrocution buildup": {
    "candidates": [
      {
        "id": "explicit.stat_1017648537",
        "text": "Lightning damage from Hits Contributes to Electrocution Buildup",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "lightning damage from hits contributes to freeze buildup instead of shock chance": {
    "candidates": [
      {
        "id": "explicit.stat_1011772129",
        "text": "Lightning Damage from Hits Contributes to Freeze Buildup instead of Shock Chance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "lightning damage of enemies hitting you is unlucky": {
    "candidates": [],
    "status": "unresolved"
  },
  "lightning damage of enemies hitting you is unlucky during effect": {
    "candidates": [],
    "status": "unresolved"
  },
  "lightning resistance does not affect lightning damage taken": {
    "candidates": [
      {
        "id": "explicit.stat_3999959974",
        "text": "Lightning Resistance does not affect Lightning damage taken",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "lightning skills chain # times": {
    "candidates": [
      {
        "id": "explicit.stat_4123841473",
        "text": "Lightning Skills Chain # times",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "local display facebreaker damage imitation weapon [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "local display grants level x molten shower [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "local display triggers level x toad on kill [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "local unique jewel break timeless jewel calculators [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "lose #% of maximum life on kill": {
    "candidates": [],
    "status": "unresolved"
  },
  "lose #% of maximum mana on kill": {
    "candidates": [],
    "status": "unresolved"
  },
  "lose # life per enemy killed": {
    "candidates": [],
    "status": "unresolved"
  },
  "lose # life when you use a skill": {
    "candidates": [
      {
        "id": "explicit.stat_1902409192",
        "text": "Lose # Life when you use a Skill",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "lose #% life per second while you have no runic ward during effect": {
    "candidates": [
      {
        "id": "explicit.stat_1147913864",
        "text": "Lose #% Life per second while you have no Runic Ward during Effect",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "lose #% of maximum life per second": {
    "candidates": [
      {
        "id": "explicit.stat_1661347488",
        "text": "Lose #% of maximum Life per second",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "lose all fragile regrowth when hit": {
    "candidates": [
      {
        "id": "explicit.stat_1306791873",
        "text": "Lose all Fragile Regrowth when Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "lose all power charges on reaching maximum power charges": {
    "candidates": [
      {
        "id": "explicit.stat_2135899247",
        "text": "Lose all Power Charges on reaching maximum Power Charges",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "lose all rage on reaching maximum rage": {
    "candidates": [
      {
        "id": "explicit.stat_3851480592",
        "text": "Lose all Rage on reaching Maximum Rage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "lose all tailwind when hit": {
    "candidates": [
      {
        "id": "explicit.stat_367897259",
        "text": "Lose all Tailwind when Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "mace fire skills are blue [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "magnitudes of curses you inflict are zero": {
    "candidates": [],
    "status": "unresolved"
  },
  "maim on critical hit": {
    "candidates": [
      {
        "id": "explicit.stat_2895144208",
        "text": "Maim on Critical Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "mana flasks gain # charges per second": {
    "candidates": [
      {
        "id": "explicit.stat_2200293569",
        "text": "Mana Flasks gain # charges per Second",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "mana flasks used while on low mana apply recovery instantly": {
    "candidates": [
      {
        "id": "explicit.stat_1839832419",
        "text": "Mana Flasks used while on Low Mana apply Recovery Instantly",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "mana recovery from flasks can overflow maximum mana during effect": {
    "candidates": [
      {
        "id": "explicit.stat_4100842845",
        "text": "Mana Recovery from Flasks can Overflow maximum Mana during Effect",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "mana recovery other than regeneration cannot recover mana": {
    "candidates": [
      {
        "id": "explicit.stat_3593063598",
        "text": "Mana Recovery other than Regeneration cannot Recover Mana",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "map abyss tower augment quantity +% final from overrun unique tablet [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "map also counts as a water map": {
    "candidates": [
      {
        "id": "explicit.stat_3271982291",
        "text": "Map also counts as a Water Map",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "map bosses are hunted by azmeri spirits": {
    "candidates": [
      {
        "id": "explicit.stat_2588474575",
        "text": "Map Bosses are Hunted by Azmeri Spirits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "map bosses have # additional modifiers": {
    "candidates": [],
    "status": "unresolved"
  },
  "map contains # additional abysses": {
    "candidates": [
      {
        "id": "explicit.stat_3490187949",
        "text": "Map contains # additional Abysses",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "map is overrun by the abyssal": {
    "candidates": [
      {
        "id": "explicit.stat_2741291867",
        "text": "Map is overrun by the Abyssal",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "maximum # fragile regrowth": {
    "candidates": [
      {
        "id": "explicit.stat_1173537953",
        "text": "Maximum # Fragile Regrowth",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "maximum amount of guard is based on maximum energy shield instead": {
    "candidates": [
      {
        "id": "explicit.stat_1338406168",
        "text": "Maximum amount of Guard is based on maximum Energy Shield instead",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "maximum chance to evade is #%": {
    "candidates": [
      {
        "id": "explicit.stat_1500744699",
        "text": "Maximum Chance to Evade is 50%",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "maximum energy shield cannot be converted": {
    "candidates": [
      {
        "id": "explicit.stat_2104359366",
        "text": "Maximum Energy Shield cannot be Converted",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "maximum honour is #": {
    "candidates": [],
    "status": "unresolved"
  },
  "maximum physical damage reduction is #%": {
    "candidates": [
      {
        "id": "explicit.stat_3960211755",
        "text": "Maximum Physical Damage Reduction is 50%",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "maximum quality is #%": {
    "candidates": [
      {
        "id": "explicit.stat_275498888",
        "text": "Maximum Quality is #%",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "minions cannot die while affected by a life flask": {
    "candidates": [
      {
        "id": "explicit.stat_4046380260",
        "text": "Minions cannot Die while affected by a Life Flask",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "minions deal #% increased damage": {
    "candidates": [
      {
        "id": "explicit.stat_1589917703",
        "text": "Minions deal #% increased Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "minions gain #% of their maximum life as extra maximum energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_943702197",
        "text": "Minions gain #% of their maximum Life as Extra maximum Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "minions have #% increased maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_770672621",
        "text": "Minions have #% increased maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "minions have #% chance to inflict gruelling madness on hit": {
    "candidates": [
      {
        "id": "explicit.stat_1486714289",
        "text": "Minions have #% chance to inflict Gruelling Madness on Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "minions have #% to chaos resistance": {
    "candidates": [
      {
        "id": "explicit.stat_3837707023",
        "text": "Minions have #% to Chaos Resistance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "minions have #% reduced maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_770672621",
        "text": "Minions have #% increased maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "minions have unholy might": {
    "candidates": [
      {
        "id": "explicit.stat_3893509584",
        "text": "Minions have Unholy Might",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "minions revive #% faster": {
    "candidates": [
      {
        "id": "explicit.stat_2639966148",
        "text": "Minions Revive #% faster",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "minions' resistances are equal to yours": {
    "candidates": [
      {
        "id": "explicit.stat_3045072899",
        "text": "Minions' Resistances are equal to yours",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "modifiers to maximum block chance instead apply to maximum resistances": {
    "candidates": [
      {
        "id": "explicit.stat_3679696791",
        "text": "Modifiers to Maximum Block Chance instead apply to Maximum Resistances",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "modifiers to stun buildup apply to freeze buildup instead for parry": {
    "candidates": [
      {
        "id": "explicit.stat_3201111383",
        "text": "Modifiers to Stun Buildup apply to Freeze Buildup instead for Parry",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "no inherent loss of rage": {
    "candidates": [
      {
        "id": "explicit.stat_4163076972",
        "text": "No Inherent loss of Rage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "no inherent loss of rage during effect": {
    "candidates": [
      {
        "id": "explicit.stat_3464644319",
        "text": "No Inherent loss of Rage during effect",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "no movement speed penalty while shield is raised": {
    "candidates": [
      {
        "id": "explicit.stat_585231074",
        "text": "No Movement Speed Penalty while Shield is Raised",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "no physical damage": {
    "candidates": [],
    "status": "unresolved"
  },
  "non-channelling spells cost an additional #% of your maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_1920747151",
        "text": "Non-Channelling Spells cost an additional #% of your maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "non-channelling spells deal #% increased damage per # maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_1027889455",
        "text": "Non-Channelling Spells deal #% increased Damage per 100 maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "non-channelling spells have #% increased critical hit chance per # maximum life": {
    "candidates": [
      {
        "id": "explicit.stat_170426423",
        "text": "Non-Channelling Spells have #% increased Critical Hit Chance per 100 maximum Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "number of stackable unique jewels [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "off-hand hits inflict runefather's challenge": {
    "candidates": [
      {
        "id": "explicit.stat_3430033313",
        "text": "Off-hand Hits inflict Runefather's Challenge",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "on hitting an enemy, gains maximum added lightning damage equal tothe enemy's power for # seconds, up to a total of #": {
    "candidates": [],
    "status": "unresolved"
  },
  "on-kill effects happen twice": {
    "candidates": [
      {
        "id": "explicit.stat_259470957",
        "text": "On-Kill Effects happen twice",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "only affects passives in medium-large ring": {
    "candidates": [
      {
        "id": "explicit.stat_3642528642|5",
        "text": "Only affects Passives in Medium-Large Ring",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "only runes can be socketed in this item": {
    "candidates": [
      {
        "id": "explicit.stat_326412910",
        "text": "Only Runes can be Socketed in this item",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "only soul cores can be socketed in this item": {
    "candidates": [
      {
        "id": "explicit.stat_250458861",
        "text": "Only Soul Cores can be Socketed in this item",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "onslaught": {
    "candidates": [
      {
        "id": "explicit.stat_1520059289",
        "text": "Onslaught",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "pain attunement": {
    "candidates": [
      {
        "id": "explicit.stat_3831171903|7",
        "text": "Pain Attunement",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_98977150",
        "text": "Pain Attunement",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "parried enemies take more spell damage instead of more attack damage": {
    "candidates": [
      {
        "id": "explicit.stat_3488640354",
        "text": "Parried enemies take more Spell Damage instead of more Attack Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "parry skill art variation from item [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "parrying applies # stacks of critical weakness": {
    "candidates": [],
    "status": "unresolved"
  },
  "passives in radius can be allocated without being connected to your tree": {
    "candidates": [
      {
        "id": "explicit.stat_4077035099",
        "text": "Passives in Radius can be Allocated without being connected to your tree",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "passives in radius of passive skill can be allocatedwithout being connected to your tree": {
    "candidates": [],
    "status": "unresolved"
  },
  "physical damage from hits contributes to chill magnitude and freeze buildup": {
    "candidates": [
      {
        "id": "explicit.stat_905072977",
        "text": "Physical damage from Hits Contributes to Chill Magnitude and Freeze Buildup",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "physical damage is pinning": {
    "candidates": [
      {
        "id": "explicit.stat_2041668411",
        "text": "Physical Damage is Pinning",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "physical damage of enemies hitting you is unlucky": {
    "candidates": [],
    "status": "unresolved"
  },
  "possessed by spirit of the [azmeri spirit] for # seconds on use": {
    "candidates": [],
    "status": "unresolved"
  },
  "power siphon unique elemental art variation [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "presence radius is doubled": {
    "candidates": [
      {
        "id": "explicit.stat_1810907437",
        "text": "Presence Radius is doubled",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "projectiles deal #% increased damage with hits for each time they have pierced": {
    "candidates": [
      {
        "id": "explicit.stat_883169830",
        "text": "Projectiles deal #% increased Damage with Hits for each time they have Pierced",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "projectiles from spells cannot pierce": {
    "candidates": [
      {
        "id": "explicit.stat_3826125995",
        "text": "Projectiles from Spells cannot Pierce",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "projectiles have #% increased critical hit chance for each time they have pierced": {
    "candidates": [
      {
        "id": "explicit.stat_1163615092",
        "text": "Projectiles have #% increased Critical Hit chance for each time they have Pierced",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "projectiles pierce all ignited enemies": {
    "candidates": [
      {
        "id": "explicit.stat_2214228141",
        "text": "Projectiles Pierce all Ignited enemies",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "projectiles split towards # targets": {
    "candidates": [
      {
        "id": "explicit.stat_3464380325",
        "text": "Projectiles Split towards # targets",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "random # keystone passive skill [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "random # unique ring modifiers": {
    "candidates": [],
    "status": "unresolved"
  },
  "rathpith surge [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "recover #% of missing life before being hit by an enemy": {
    "candidates": [
      {
        "id": "explicit.stat_1990472846",
        "text": "Recover #% of Missing Life before being Hit by an Enemy",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "recover #% of maximum life when you block": {
    "candidates": [
      {
        "id": "explicit.stat_2442647190",
        "text": "Recover #% of maximum Life when you Block",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "recover #% of maximum life for each endurance charge consumed": {
    "candidates": [
      {
        "id": "explicit.stat_939832726",
        "text": "Recover #% of maximum Life for each Endurance Charge consumed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "recover life equal to #% of mana flask's recovery amount when used": {
    "candidates": [
      {
        "id": "explicit.stat_2716923832",
        "text": "Recover Life equal to #% of Mana Flask's Recovery Amount when used",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "recover mana equal to #% of life flask's recovery amount when used": {
    "candidates": [
      {
        "id": "explicit.stat_3891350097",
        "text": "Recover Mana equal to #% of Life Flask's Recovery Amount when used",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "reflects opposite ring": {
    "candidates": [
      {
        "id": "explicit.stat_746505085",
        "text": "Reflects opposite Ring",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "regenerate #% of maximum life per second while ignited": {
    "candidates": [
      {
        "id": "explicit.stat_302024054",
        "text": "Regenerate #% of maximum Life per second while Ignited",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "regenerate #% of maximum runic ward per second during effect": {
    "candidates": [
      {
        "id": "explicit.stat_1106321864",
        "text": "Regenerate #% of maximum Runic Ward per second during Effect",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "regenerate # life per second per maximum energy shield": {
    "candidates": [
      {
        "id": "explicit.stat_3276271783",
        "text": "Regenerate # Life per second per Maximum Energy Shield",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "regenerate # life per second for every # intelligence": {
    "candidates": [
      {
        "id": "explicit.stat_1312381104",
        "text": "Regenerate # Life per second for every 10 Intelligence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "regenerate #% of maximum life per second": {
    "candidates": [
      {
        "id": "explicit.stat_836936635",
        "text": "Regenerate #% of maximum Life per second",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "regenerate #% of maximum life per second while on low life": {
    "candidates": [
      {
        "id": "explicit.stat_3942946753",
        "text": "Regenerate #% of maximum Life per second while on Low Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "regenerate # rage per second": {
    "candidates": [
      {
        "id": "explicit.stat_2853314994",
        "text": "Regenerate # Rage per second",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "regenerate #% of maximum life per second if you have been hit recently": {
    "candidates": [
      {
        "id": "explicit.stat_2201614328",
        "text": "Regenerate #% of maximum Life per second if you have been Hit Recently",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "regenerate #% of maximum life per second while surrounded": {
    "candidates": [
      {
        "id": "explicit.stat_2002533190",
        "text": "Regenerate #% of maximum Life per second while Surrounded",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "remembrancing # songworthy deeds by the line of voranapassives in radius are conquered by the kalguur": {
    "candidates": [],
    "status": "unresolved"
  },
  "remnants you create affect allies in your presence as well as you when collected": {
    "candidates": [
      {
        "id": "explicit.stat_315717203",
        "text": "Remnants you create affect Allies in your Presence as well as you when collected",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "repeatable attacks with this bow repeat # times if no enemies are in your presence": {
    "candidates": [],
    "status": "unresolved"
  },
  "require # fewer enemies to be surrounded": {
    "candidates": [],
    "status": "unresolved"
  },
  "reveal weaknesses against rare and unique enemies": {
    "candidates": [
      {
        "id": "explicit.stat_110659965",
        "text": "Reveal Weaknesses against Rare and Unique enemies",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "right ring slot: projectiles from spells cannot fork": {
    "candidates": [
      {
        "id": "explicit.stat_2933024469",
        "text": "Right ring slot: Projectiles from Spells cannot Fork",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "right ring slot: projectiles from spells chain # times": {
    "candidates": [
      {
        "id": "explicit.stat_1555918911",
        "text": "Right ring slot: Projectiles from Spells Chain +# times",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "rolls only the minimum or maximum damage value for each damage type": {
    "candidates": [
      {
        "id": "explicit.stat_3108672983",
        "text": "Rolls only the minimum or maximum Damage value for each Damage Type",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "rooms are unknown on the trial map": {
    "candidates": [],
    "status": "unresolved"
  },
  "sacrifice #% of maximum life to gain that much energy shield when you cast a spell": {
    "candidates": [
      {
        "id": "explicit.stat_613752285",
        "text": "Sacrifice #% of maximum Life to gain that much Energy Shield when you Cast a Spell",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "sacrifice # life to not consume the last bolt when firing": {
    "candidates": [
      {
        "id": "explicit.stat_76982026",
        "text": "Sacrifice # Life to not consume the last bolt when firing",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "share charges with allies in your presence": {
    "candidates": [
      {
        "id": "explicit.stat_2535267021",
        "text": "Share Charges with Allies in your Presence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "shocks you when you reach maximum power charges": {
    "candidates": [
      {
        "id": "explicit.stat_4256314560",
        "text": "Shocks you when you reach maximum Power Charges",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "skill gems have no attribute requirements": {
    "candidates": [
      {
        "id": "explicit.stat_4245256219",
        "text": "Skill Gems have no Attribute Requirements",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "skill mana costs converted to life costs": {
    "candidates": [],
    "status": "unresolved"
  },
  "skills cost divinity instead of mana or life": {
    "candidates": [
      {
        "id": "explicit.stat_467146530",
        "text": "Skills Cost Divinity instead of Mana or Life",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "skills from corrupted gems have #% increased cost efficiency during any flask effect": {
    "candidates": [
      {
        "id": "explicit.stat_2638381947",
        "text": "Skills from Corrupted Gems have #% increased Cost Efficiency during any Flask Effect",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "skills from corrupted gems have #% of mana costs converted to life costs": {
    "candidates": [
      {
        "id": "explicit.stat_2035336006",
        "text": "Skills from Corrupted Gems have #% of Mana Costs Converted to Life Costs",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "skills gain #% of damage as chaos damage per # life cost": {
    "candidates": [
      {
        "id": "explicit.stat_4117005593",
        "text": "Skills gain #% of Damage as Chaos Damage per 3 Life Cost",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "skills gain #% of mana cost as extra life cost": {
    "candidates": [
      {
        "id": "explicit.stat_3605834869",
        "text": "Skills Gain #% of Mana Cost as Extra Life Cost",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "skills have # seconds to cooldown": {
    "candidates": [
      {
        "id": "explicit.stat_396200591",
        "text": "Skills have # seconds to Cooldown",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "skills have #% longer perfect timing window during effect": {
    "candidates": [
      {
        "id": "explicit.stat_3982604001",
        "text": "Skills have #% longer Perfect Timing window during effect",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "skills have # to limit": {
    "candidates": [
      {
        "id": "explicit.stat_2942704390",
        "text": "Skills have +# to Limit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "skills have a #% longer perfect timing window": {
    "candidates": [
      {
        "id": "explicit.stat_1373370443",
        "text": "Skills have a #% longer Perfect Timing window",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "skills reserve #% less spirit": {
    "candidates": [
      {
        "id": "explicit.stat_2838161567",
        "text": "Skills reserve 50% less Spirit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "skills which empower an attack have #% chance to not count that attack": {
    "candidates": [
      {
        "id": "explicit.stat_2538411280",
        "text": "Skills which Empower an Attack have #% chance to not count that Attack",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "skills which require glory generate # glory every # seconds": {
    "candidates": [
      {
        "id": "explicit.stat_2480962043",
        "text": "Skills which require Glory generate # Glory every 2 seconds",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "slam skills you use yourself cause an additional aftershock": {
    "candidates": [],
    "status": "unresolved"
  },
  "soul eater": {
    "candidates": [
      {
        "id": "explicit.stat_1404607671",
        "text": "Soul Eater",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "spear skills inflict a bloodstone lance on hit, up to a maximum of # on each target": {
    "candidates": [
      {
        "id": "explicit.stat_4106787208",
        "text": "Spear Skills inflict a Bloodstone Lance on Hit, up to a maximum of 30 on each target",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "spell hits gain #% of damage as extra chaos damage per curse on target": {
    "candidates": [
      {
        "id": "explicit.stat_2653175601",
        "text": "Spell Hits Gain #% of Damage as Extra Chaos Damage per Curse on target",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "spell hits gain #% of damage as extra physical damage per curse on target": {
    "candidates": [
      {
        "id": "explicit.stat_1548338404",
        "text": "Spell Hits Gain #% of Damage as Extra Physical Damage per Curse on target",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "spells fire # additional projectilesspells fire projectiles in a circle": {
    "candidates": [],
    "status": "unresolved"
  },
  "spells have a #% chance to inflict withered for # seconds on hit": {
    "candidates": [
      {
        "id": "explicit.stat_2348696937",
        "text": "Spells have a #% chance to inflict Withered for 4 seconds on Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "spells which cost life gain #% of damage as extra physical damage": {
    "candidates": [
      {
        "id": "explicit.stat_1088082880",
        "text": "Spells which cost Life Gain #% of Damage as Extra Physical Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "strength can satisfy other attribute requirements of melee weapons and melee skills": {
    "candidates": [
      {
        "id": "explicit.stat_2230687504",
        "text": "Strength can satisfy other Attribute Requirements of Melee Weapons and Melee Skills",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "strikes deal splash damage": {
    "candidates": [
      {
        "id": "explicit.stat_3675300253",
        "text": "Strikes deal Splash Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "take #% of mana costs you pay for skills as physical damage": {
    "candidates": [
      {
        "id": "explicit.stat_3181887481",
        "text": "Take #% of Mana Costs you pay for Skills as Physical Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "take # chaos damage per second per endurance charge": {
    "candidates": [
      {
        "id": "explicit.stat_3164544692",
        "text": "Take # Chaos damage per second per Endurance Charge",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "take # fire damage when you ignite an enemy": {
    "candidates": [
      {
        "id": "explicit.stat_2518598473",
        "text": "Take # Fire Damage when you Ignite an Enemy",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "take no extra damage from critical hits": {
    "candidates": [
      {
        "id": "explicit.stat_4294267596",
        "text": "Take no Extra Damage from Critical Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "targets can be affected by # of your poisons at the same time": {
    "candidates": [
      {
        "id": "explicit.stat_1755296234",
        "text": "Targets can be affected by # of your Poisons at the same time",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "the bodach haunts your presence": {
    "candidates": [
      {
        "id": "explicit.stat_3783473032",
        "text": "The Bodach haunts your Presence",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "the effect of blind on you is reversed": {
    "candidates": [
      {
        "id": "explicit.stat_1010703902",
        "text": "The Effect of Blind on you is reversed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "the effect of chill on you is reversed": {
    "candidates": [
      {
        "id": "explicit.stat_2955966707",
        "text": "The Effect of Chill on you is reversed",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "the wendigo manifestation delay randomisation ms [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "the wendigo manifests +% faster per enemy power in your presence [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "this flask cannot be used but applies its effect constantly": {
    "candidates": [
      {
        "id": "explicit.stat_2980117882",
        "text": "This Flask cannot be Used but applies its Effect constantly",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "this item gains bonuses from socketed items as though it was a body armour": {
    "candidates": [
      {
        "id": "explicit.stat_1087787187",
        "text": "This item gains bonuses from Socketed Items as though it was a Body Armour",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "this item gains bonuses from socketed soul cores as though it was also a [random socketable equipment type]": {
    "candidates": [],
    "status": "unresolved"
  },
  "this item is destroyed when applied to a trial": {
    "candidates": [],
    "status": "unresolved"
  },
  "this weapon's critical hit chance is #%": {
    "candidates": [
      {
        "id": "explicit.stat_3384885789",
        "text": "This Weapon's Critical Hit Chance is #%",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "thorns can retaliate against all hits": {
    "candidates": [
      {
        "id": "explicit.stat_3414243317",
        "text": "Thorns can Retaliate against all Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "trigger decompose every # metres travelled": {
    "candidates": [
      {
        "id": "explicit.stat_3371943724",
        "text": "Trigger Decompose every 1.2 metres travelled",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "trigger ember fusillade skill on casting a spell": {
    "candidates": [
      {
        "id": "explicit.stat_826162720",
        "text": "Trigger Ember Fusillade Skill on casting a Spell",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "trigger lightning bolt skill on critical hit": {
    "candidates": [
      {
        "id": "explicit.stat_704919631",
        "text": "Trigger Lightning Bolt Skill on Critical Hit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "trigger reload infusion on reload [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "trigger skills refund half of energy spent": {
    "candidates": [],
    "status": "unresolved"
  },
  "trigger spark skill on killing a shocked enemy": {
    "candidates": [
      {
        "id": "explicit.stat_811217923",
        "text": "Trigger Spark Skill on killing a Shocked Enemy",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "unique blink sand [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "unique reveal weakness art variation [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "unstable breaches in map spawn # additional rare monsters when stabilised": {
    "candidates": [],
    "status": "unresolved"
  },
  "unstable breaches in map take # additional seconds to collapse after timer is filled": {
    "candidates": [],
    "status": "unresolved"
  },
  "unwavering stance": {
    "candidates": [
      {
        "id": "explicit.stat_1683578560",
        "text": "Unwavering Stance",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_3831171903|3",
        "text": "Unwavering Stance",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "use thunderfist art variation [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "use unique blackflame ignite effect [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "used when you release a skill with perfect timing": {
    "candidates": [
      {
        "id": "explicit.stat_3832076641",
        "text": "Used when you release a skill with Perfect Timing",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "using a mana flask grants guard equal to #% of flask's recovery amount for # seconds": {
    "candidates": [
      {
        "id": "explicit.stat_2777675751",
        "text": "Using a Mana Flask grants Guard equal to #% of Flask's recovery amount for 4 seconds",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "vaal pact": {
    "candidates": [
      {
        "id": "explicit.stat_2257118425",
        "text": "Vaal Pact",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_3831171903|20",
        "text": "Vaal Pact",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  },
  "visual use power charges elemental epk [#]": {
    "candidates": [],
    "status": "unresolved"
  },
  "warcries explode corpses dealing #% of their life as physical damage": {
    "candidates": [
      {
        "id": "explicit.stat_11014011",
        "text": "Warcries Explode Corpses dealing #% of their Life as Physical Damage",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "warcry skills have #% increased area of effect": {
    "candidates": [
      {
        "id": "explicit.stat_2567751411",
        "text": "Warcry Skills have #% increased Area of Effect",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "when a party member in your presence casts a spell, yousacrifice #% of mana and they leech that mana": {
    "candidates": [],
    "status": "unresolved"
  },
  "when you consume a charge trigger chaotic surge to gain # chaos surges": {
    "candidates": [],
    "status": "unresolved"
  },
  "when you kill a rare monster, you gain its modifiers for # seconds": {
    "candidates": [
      {
        "id": "explicit.stat_2913235441",
        "text": "When you kill a Rare monster, you gain its Modifiers for 60 seconds",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "when you reload, triggers gemini surge to alternatelygain # cold surges or # fire surges": {
    "candidates": [],
    "status": "unresolved"
  },
  "wind skills which can be boosted by elemental ground surfaces can be boosted by multiple elemental ground surfaces": {
    "candidates": [
      {
        "id": "explicit.stat_2070837434",
        "text": "Wind Skills which can be boosted by Elemental Ground Surfaces can be boosted by multiple Elemental Ground Surfaces",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "wind skills which can be boosted by elemental ground surfaces countas being boosted by chilled ground": {
    "candidates": [],
    "status": "unresolved"
  },
  "wind skills which can be boosted by elemental ground surfaces countas being boosted by ignited ground": {
    "candidates": [],
    "status": "unresolved"
  },
  "wind skills which can be boosted by elemental ground surfaces countas being boosted by ignited, shocked, and chilled ground": {
    "candidates": [],
    "status": "unresolved"
  },
  "wind skills which can be boosted by elemental ground surfaces countas being boosted by shocked ground": {
    "candidates": [],
    "status": "unresolved"
  },
  "withered does not expire on enemies ignited by you": {
    "candidates": [
      {
        "id": "explicit.stat_279110104",
        "text": "Withered does not expire on Enemies Ignited by you",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "withered you inflict also increases fire damage taken": {
    "candidates": [
      {
        "id": "explicit.stat_1910297038",
        "text": "Withered you inflict also increases Fire Damage taken",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "withered you inflict has infinite duration": {
    "candidates": [
      {
        "id": "explicit.stat_1354656031",
        "text": "Withered you inflict has infinite Duration",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you are blind": {
    "candidates": [
      {
        "id": "explicit.stat_3774577097",
        "text": "You are Blind",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you are considered on low life while at #% of maximum life or below instead": {
    "candidates": [
      {
        "id": "explicit.stat_356835700",
        "text": "You are considered on Low Life while at #% of maximum Life or below instead",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you can apply an additional curse": {
    "candidates": [],
    "status": "unresolved"
  },
  "you can have any number of companions of different types": {
    "candidates": [
      {
        "id": "explicit.stat_603573028",
        "text": "You can have any number of Companions of different types",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you can have two companions of different types": {
    "candidates": [
      {
        "id": "explicit.stat_1888024332",
        "text": "You can have two Companions of different types",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you can only socket emerald jewels in this item": {
    "candidates": [
      {
        "id": "explicit.stat_3598729471",
        "text": "You can only Socket Emerald Jewels in this item",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you can only socket ruby jewels in this item": {
    "candidates": [
      {
        "id": "explicit.stat_4031148736",
        "text": "You can only Socket Ruby Jewels in this item",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you can only socket sapphire jewels in this item": {
    "candidates": [
      {
        "id": "explicit.stat_21302430",
        "text": "You can only Socket Sapphire Jewels in this item",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you can socket # additional copies of each lineage support gem, in different skills": {
    "candidates": [],
    "status": "unresolved"
  },
  "you can wield two-handed axes, maces and swords in one hand": {
    "candidates": [
      {
        "id": "explicit.stat_3635316831",
        "text": "You can wield Two-Handed Axes, Maces and Swords in one hand",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you cannot be chilled for # seconds after being chilled": {
    "candidates": [],
    "status": "unresolved"
  },
  "you cannot be chilled or frozen": {
    "candidates": [
      {
        "id": "explicit.stat_2996245527",
        "text": "You cannot be Chilled or Frozen",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you cannot be frozen for # seconds after being frozen": {
    "candidates": [],
    "status": "unresolved"
  },
  "you cannot be ignited for # seconds after being ignited": {
    "candidates": [],
    "status": "unresolved"
  },
  "you cannot be shocked for # seconds after being shocked": {
    "candidates": [],
    "status": "unresolved"
  },
  "you cannot sprint": {
    "candidates": [
      {
        "id": "explicit.stat_1536107934",
        "text": "You cannot Sprint",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you count as on full mana while at #% of maximum mana or above": {
    "candidates": [
      {
        "id": "explicit.stat_423304126",
        "text": "You count as on Full Mana while at #% of maximum Mana or above",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you count as on low life while at #% of maximum mana or below": {
    "candidates": [
      {
        "id": "explicit.stat_3154256486",
        "text": "You count as on Low Life while at #% of maximum Mana or below",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you count as on low mana while at #% of maximum life or below": {
    "candidates": [
      {
        "id": "explicit.stat_1143240184",
        "text": "You count as on Low Mana while at #% of maximum Life or below",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you gain onslaught for # seconds on kill": {
    "candidates": [
      {
        "id": "explicit.stat_1195849808",
        "text": "You gain Onslaught for # seconds on Kill",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you have a smoke cloud around you while stationary": {
    "candidates": [
      {
        "id": "explicit.stat_2592455368",
        "text": "You have a Smoke Cloud around you while stationary",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you have consecrated ground around you while stationary": {
    "candidates": [
      {
        "id": "explicit.stat_1736538865",
        "text": "You have Consecrated Ground around you while stationary",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you have no accuracy penalty at distance": {
    "candidates": [
      {
        "id": "explicit.stat_3070990531",
        "text": "You have no Accuracy Penalty at Distance",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you have no critical damage bonus": {
    "candidates": [
      {
        "id": "explicit.stat_4058681894",
        "text": "You have no Critical Damage Bonus",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you have no elemental resistances": {
    "candidates": [
      {
        "id": "explicit.stat_1776968075",
        "text": "You have no Elemental Resistances",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you have no life regeneration": {
    "candidates": [
      {
        "id": "explicit.stat_854225133",
        "text": "You have no Life Regeneration",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you have no spirit": {
    "candidates": [
      {
        "id": "explicit.stat_3148264775",
        "text": "You have no Spirit",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you lose #% of maximum energy shield per second": {
    "candidates": [
      {
        "id": "explicit.stat_2350411833",
        "text": "You lose #% of maximum Energy Shield per second",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you take #% of damage from blocked hits": {
    "candidates": [
      {
        "id": "explicit.stat_2905515354",
        "text": "You take #% of damage from Blocked Hits",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "you take fire damage instead of physical damage from bleeding": {
    "candidates": [
      {
        "id": "explicit.stat_2022332470",
        "text": "You take Fire Damage instead of Physical Damage from Bleeding",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "your armour, evasion and energy shield are zero": {
    "candidates": [],
    "status": "unresolved"
  },
  "your base energy shield recharge delay is # seconds": {
    "candidates": [],
    "status": "unresolved"
  },
  "your critical damage bonus is #%": {
    "candidates": [
      {
        "id": "explicit.stat_2516303866",
        "text": "Your Critical Damage Bonus is 250%",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "your critical hit chance cannot be rerolled": {
    "candidates": [
      {
        "id": "explicit.stat_4159551976",
        "text": "Your Critical Hit Chance cannot be Rerolled",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "your hits can penetrate elemental resistances down to a minimum of #%": {
    "candidates": [
      {
        "id": "explicit.stat_2890792988",
        "text": "Your Hits can Penetrate Elemental Resistances down to a minimum of -50%",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "your life flask also applies to your minions": {
    "candidates": [
      {
        "id": "explicit.stat_2397460217",
        "text": "Your Life Flask also applies to your Minions",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "your maximum energy shield is equal to #% of your strength": {
    "candidates": [
      {
        "id": "explicit.stat_758226825",
        "text": "Your maximum Energy Shield is equal to #% of your Strength",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "your maximum resistances are #%": {
    "candidates": [
      {
        "id": "explicit.stat_798767971",
        "text": "Your Maximum Resistances are #%",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "your speed is unaffected by slows": {
    "candidates": [
      {
        "id": "explicit.stat_50721145",
        "text": "Your speed is unaffected by Slows",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "your speed is unaffected by slows while sprinting": {
    "candidates": [
      {
        "id": "explicit.stat_3128773415",
        "text": "Your speed is Unaffected by Slows while Sprinting",
        "type": "explicit"
      }
    ],
    "status": "resolved"
  },
  "zarokh, the temporal deals #% more damage": {
    "candidates": [],
    "status": "unresolved"
  },
  "zarokh, the temporal drops # additional baryas": {
    "candidates": [],
    "status": "unresolved"
  },
  "zarokh, the temporal drops against the darkness": {
    "candidates": [],
    "status": "unresolved"
  },
  "zarokh, the temporal drops sandstorm visage": {
    "candidates": [],
    "status": "unresolved"
  },
  "zarokh, the temporal drops sekhema's resolve": {
    "candidates": [],
    "status": "unresolved"
  },
  "zarokh, the temporal drops temporalis": {
    "candidates": [],
    "status": "unresolved"
  },
  "zarokh, the temporal takes #% less damage": {
    "candidates": [],
    "status": "unresolved"
  },
  "zealot's oath": {
    "candidates": [
      {
        "id": "explicit.stat_1315418254",
        "text": "Zealot's Oath",
        "type": "explicit"
      },
      {
        "id": "explicit.stat_3831171903|33",
        "text": "Zealot's Oath",
        "type": "explicit"
      }
    ],
    "status": "ambiguous"
  }
});
  const CORRUPTION_STATS = Object.freeze({
  "# life gained when you block": {
    "candidates": [
      {
        "id": "enchant.stat_762600725",
        "text": "# Life gained when you Block",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "# mana gained when you block": {
    "candidates": [
      {
        "id": "enchant.stat_2122183138",
        "text": "# Mana gained when you Block",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "# to accuracy rating": {
    "candidates": [
      {
        "id": "implicit.stat_803737631",
        "text": "# to Accuracy Rating",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "# to dexterity": {
    "candidates": [
      {
        "id": "implicit.stat_3261801346",
        "text": "# to Dexterity",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "# to intelligence": {
    "candidates": [
      {
        "id": "implicit.stat_328541901",
        "text": "# to Intelligence",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "# to level of all chaos spell skills": {
    "candidates": [
      {
        "id": "enchant.stat_4226189338",
        "text": "# to Level of all Chaos Spell Skills",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "# to level of all cold spell skills": {
    "candidates": [
      {
        "id": "enchant.stat_2254480358",
        "text": "# to Level of all Cold Spell Skills",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "# to level of all fire spell skills": {
    "candidates": [
      {
        "id": "enchant.stat_591105508",
        "text": "# to Level of all Fire Spell Skills",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "# to level of all lightning spell skills": {
    "candidates": [
      {
        "id": "enchant.stat_1545858329",
        "text": "# to Level of all Lightning Spell Skills",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "# to level of all melee skills": {
    "candidates": [
      {
        "id": "enchant.stat_9187492",
        "text": "# to Level of all Melee Skills",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "# to level of all minion skills": {
    "candidates": [
      {
        "id": "enchant.stat_2162097452",
        "text": "# to Level of all Minion Skills",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "# to level of all physical spell skills": {
    "candidates": [
      {
        "id": "enchant.stat_1600707273",
        "text": "# to Level of all Physical Spell Skills",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "# to level of all skills": {
    "candidates": [
      {
        "id": "enchant.stat_4283407333",
        "text": "# to Level of all Skills",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "# to maximum frenzy charges": {
    "candidates": [
      {
        "id": "enchant.stat_4078695",
        "text": "# to Maximum Frenzy Charges",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "# to maximum life": {
    "candidates": [
      {
        "id": "implicit.stat_3299347043",
        "text": "# to maximum Life",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "# to maximum mana": {
    "candidates": [
      {
        "id": "implicit.stat_1050105434",
        "text": "# to maximum Mana",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "# to maximum power charges": {
    "candidates": [
      {
        "id": "enchant.stat_227523295",
        "text": "# to Maximum Power Charges",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "# to spirit": {
    "candidates": [
      {
        "id": "implicit.stat_3981240776",
        "text": "# to Spirit",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "# to strength": {
    "candidates": [
      {
        "id": "implicit.stat_4080418644",
        "text": "# to Strength",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% additional physical damage reduction": {
    "candidates": [
      {
        "id": "enchant.stat_3771516363",
        "text": "#% additional Physical Damage Reduction",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% chance to blind enemies on hit": {
    "candidates": [
      {
        "id": "enchant.stat_2301191210",
        "text": "#% chance to Blind Enemies on hit",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% chance to cause bleeding on hit": {
    "candidates": [
      {
        "id": "implicit.stat_1519615863",
        "text": "#% chance to cause Bleeding on Hit",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to maim on hit": {
    "candidates": [
      {
        "id": "implicit.stat_2763429652",
        "text": "#% chance to Maim on Hit",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to pierce an enemy": {
    "candidates": [
      {
        "id": "implicit.stat_2321178454",
        "text": "#% chance to Pierce an Enemy",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% chance to poison on hit with this weapon": {
    "candidates": [
      {
        "id": "enchant.stat_3885634897",
        "text": "#% chance to Poison on Hit with this weapon",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased attack speed": {
    "candidates": [
      {
        "id": "implicit.stat_681332047",
        "text": "#% increased Attack Speed",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased block chance": {
    "candidates": [
      {
        "id": "enchant.stat_2481353198",
        "text": "#% increased Block chance (Local)",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased cast speed": {
    "candidates": [
      {
        "id": "implicit.stat_2891184298",
        "text": "#% increased Cast Speed",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased chance to shock": {
    "candidates": [
      {
        "id": "enchant.stat_293638271",
        "text": "#% increased chance to Shock",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased critical damage bonus": {
    "candidates": [
      {
        "id": "enchant.stat_3556824919",
        "text": "#% increased Critical Damage Bonus",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased critical hit chance for spells": {
    "candidates": [
      {
        "id": "enchant.stat_737908626",
        "text": "#% increased Critical Hit Chance for Spells",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased damage": {
    "candidates": [
      {
        "id": "enchant.stat_2154246560",
        "text": "#% increased Damage",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased elemental damage with attacks": {
    "candidates": [
      {
        "id": "enchant.stat_387439868",
        "text": "#% increased Elemental Damage with Attacks",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased energy shield": {
    "candidates": [
      {
        "id": "enchant.stat_4015621042",
        "text": "#% increased Energy Shield",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased evasion rating": {
    "candidates": [
      {
        "id": "enchant.stat_2106365538",
        "text": "#% increased Evasion Rating",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased flammability magnitude": {
    "candidates": [
      {
        "id": "implicit.stat_2968503605",
        "text": "#% increased Flammability Magnitude",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased freeze buildup": {
    "candidates": [
      {
        "id": "implicit.stat_473429811",
        "text": "#% increased Freeze Buildup",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased freeze threshold": {
    "candidates": [
      {
        "id": "enchant.stat_3780644166",
        "text": "#% increased Freeze Threshold",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased life regeneration rate": {
    "candidates": [
      {
        "id": "enchant.stat_44972811",
        "text": "#% increased Life Regeneration rate",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased mana regeneration rate": {
    "candidates": [
      {
        "id": "implicit.stat_789117908",
        "text": "#% increased Mana Regeneration Rate",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased melee strike range with this weapon": {
    "candidates": [
      {
        "id": "implicit.stat_548198834",
        "text": "#% increased Melee Strike Range with this weapon",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased movement speed": {
    "candidates": [
      {
        "id": "implicit.stat_2250533757",
        "text": "#% increased Movement Speed",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased physical damage": {
    "candidates": [
      {
        "id": "enchant.stat_1509134228",
        "text": "#% increased Physical Damage",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased quantity of gold dropped by slain enemies": {
    "candidates": [
      {
        "id": "enchant.stat_3175163625",
        "text": "#% increased Quantity of Gold Dropped by Slain Enemies",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased rarity of items found": {
    "candidates": [
      {
        "id": "implicit.stat_3917489142",
        "text": "#% increased Rarity of Items found",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased skill speed": {
    "candidates": [
      {
        "id": "enchant.stat_970213192",
        "text": "#% increased Skill Speed",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased spell damage": {
    "candidates": [
      {
        "id": "enchant.stat_2974417149",
        "text": "#% increased Spell Damage",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased spirit": {
    "candidates": [
      {
        "id": "enchant.stat_3984865854",
        "text": "#% increased Spirit",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% increased stun threshold": {
    "candidates": [
      {
        "id": "implicit.stat_680068163",
        "text": "#% increased Stun Threshold",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% increased thorns damage": {
    "candidates": [
      {
        "id": "enchant.stat_1315743832",
        "text": "#% increased Thorns damage",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% of damage taken recouped as life": {
    "candidates": [
      {
        "id": "implicit.stat_1444556985",
        "text": "#% of Damage taken Recouped as Life",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% of damage taken recouped as mana": {
    "candidates": [
      {
        "id": "enchant.stat_472520716",
        "text": "#% of Damage taken Recouped as Mana",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% reduced attribute requirements": {
    "candidates": [
      {
        "id": "enchant.stat_3639275092",
        "text": "#% increased Attribute Requirements",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% reduced slowing potency of debuffs on you": {
    "candidates": [
      {
        "id": "implicit.stat_924253255",
        "text": "#% increased Slowing Potency of Debuffs on You",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% to all elemental resistances": {
    "candidates": [
      {
        "id": "implicit.stat_2901986750",
        "text": "#% to all Elemental Resistances",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% to all maximum elemental resistances": {
    "candidates": [
      {
        "id": "implicit.stat_1978899297",
        "text": "#% to all Maximum Elemental Resistances",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% to chaos resistance": {
    "candidates": [
      {
        "id": "implicit.stat_2923486259",
        "text": "#% to Chaos Resistance",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% to cold resistance": {
    "candidates": [
      {
        "id": "implicit.stat_4220027924",
        "text": "#% to Cold Resistance",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% to critical damage bonus": {
    "candidates": [
      {
        "id": "implicit.stat_2694482655",
        "text": "#% to Critical Damage Bonus",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% to fire resistance": {
    "candidates": [
      {
        "id": "implicit.stat_3372524247",
        "text": "#% to Fire Resistance",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% to lightning resistance": {
    "candidates": [
      {
        "id": "implicit.stat_1671376347",
        "text": "#% to Lightning Resistance",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% to maximum block chance": {
    "candidates": [
      {
        "id": "enchant.stat_480796730",
        "text": "#% to maximum Block chance",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "#% to maximum cold resistance": {
    "candidates": [
      {
        "id": "implicit.stat_3676141501",
        "text": "#% to Maximum Cold Resistance",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "#% to maximum lightning resistance": {
    "candidates": [
      {
        "id": "enchant.stat_1011760251",
        "text": "#% to Maximum Lightning Resistance",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "adds # to # chaos damage": {
    "candidates": [
      {
        "id": "enchant.stat_2223678961",
        "text": "Adds # to # Chaos damage",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "adds # to # cold damage": {
    "candidates": [
      {
        "id": "enchant.stat_1037193709",
        "text": "Adds # to # Cold Damage",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "adds # to # fire damage": {
    "candidates": [
      {
        "id": "enchant.stat_709508406",
        "text": "Adds # to # Fire Damage",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "adds # to # lightning damage": {
    "candidates": [
      {
        "id": "enchant.stat_3336890334",
        "text": "Adds # to # Lightning Damage",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence deal #% increased damage": {
    "candidates": [
      {
        "id": "enchant.stat_1798257884",
        "text": "Allies in your Presence deal #% increased Damage",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence have #% increased attack speed": {
    "candidates": [
      {
        "id": "enchant.stat_1998951374",
        "text": "Allies in your Presence have #% increased Attack Speed",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence have #% increased cast speed": {
    "candidates": [
      {
        "id": "enchant.stat_289128254",
        "text": "Allies in your Presence have #% increased Cast Speed",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "allies in your presence have #% increased critical damage bonus": {
    "candidates": [
      {
        "id": "enchant.stat_3057012405",
        "text": "Allies in your Presence have #% increased Critical Damage Bonus",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "bow attacks fire # additional arrows": {
    "candidates": [
      {
        "id": "implicit.stat_3885405204",
        "text": "Bow Attacks fire # additional Arrows",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "break #% increased armour": {
    "candidates": [
      {
        "id": "enchant.stat_1776411443",
        "text": "Break #% increased Armour",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "cannot be blinded": {
    "candidates": [
      {
        "id": "enchant.stat_1436284579",
        "text": "Cannot be Blinded",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "causes #% increased stun buildup": {
    "candidates": [
      {
        "id": "implicit.stat_791928121",
        "text": "Causes #% increased Stun Buildup",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "charms gain # charge per second": {
    "candidates": [
      {
        "id": "enchant.stat_185580205",
        "text": "Charms gain # charge per Second",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "corrupted blood cannot be inflicted on you": {
    "candidates": [
      {
        "id": "enchant.stat_1658498488",
        "text": "Corrupted Blood cannot be inflicted on you",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "damage penetrates #% cold resistance": {
    "candidates": [
      {
        "id": "enchant.stat_3417711605",
        "text": "Damage Penetrates #% Cold Resistance",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "damage penetrates #% fire resistance": {
    "candidates": [
      {
        "id": "enchant.stat_2653955271",
        "text": "Damage Penetrates #% Fire Resistance",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "damage penetrates #% lightning resistance": {
    "candidates": [
      {
        "id": "enchant.stat_818778753",
        "text": "Damage Penetrates #% Lightning Resistance",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "gain # life per enemy killed": {
    "candidates": [
      {
        "id": "implicit.stat_3695891184",
        "text": "Gain # Life per enemy killed",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "gain # mana per enemy killed": {
    "candidates": [
      {
        "id": "implicit.stat_1368271171",
        "text": "Gain # Mana per enemy killed",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "grants # rage on hit": {
    "candidates": [
      {
        "id": "implicit.stat_1725749947",
        "text": "Grants # Rage on Hit",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "immune to maim": {
    "candidates": [
      {
        "id": "enchant.stat_3429557654",
        "text": "Immune to Maim",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "leech #% of physical attack damage as life": {
    "candidates": [
      {
        "id": "enchant.stat_2557965901",
        "text": "Leech #% of Physical Attack Damage as Life",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "leech #% of physical attack damage as mana": {
    "candidates": [
      {
        "id": "enchant.stat_707457662",
        "text": "Leech #% of Physical Attack Damage as Mana",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "life flasks gain # charges per second": {
    "candidates": [
      {
        "id": "enchant.stat_1102738251",
        "text": "Life Flasks gain # charges per Second",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "loads an additional bolt": {
    "candidates": [
      {
        "id": "implicit.stat_1967051901",
        "text": "Loads an additional bolt",
        "type": "implicit"
      }
    ],
    "status": "resolved"
  },
  "mana flasks gain # charges per second": {
    "candidates": [
      {
        "id": "enchant.stat_2200293569",
        "text": "Mana Flasks gain # charges per Second",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "projectiles have #% chance to chain an additional time from terrain": {
    "candidates": [
      {
        "id": "enchant.stat_4081947835",
        "text": "Projectiles have #% chance to Chain an additional time from terrain",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  },
  "you cannot be hindered": {
    "candidates": [
      {
        "id": "enchant.stat_721014846",
        "text": "You cannot be Hindered",
        "type": "enchant"
      }
    ],
    "status": "resolved"
  }
});

  function normalize(value) {
    return String(value || "")
      .replace(/\u00a0/g, " ")
      .replace(/\([+-]?\d+(?:[.,]\d+)?(?:\s*-\s*[+-]?\d+(?:[.,]\d+)?)?\)/g, "#")
      .replace(/[+-]?\d+(?:[.,]\d+)?/g, "#")
      .replace(/[+-]?#/g, "#")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function getRecord(collection, label) {
    return collection[normalize(label)] || null;
  }

  function getResolved(collection, label) {
    const record = getRecord(collection, label);
    return record?.status === "resolved" ? record.candidates[0] : null;
  }

  return {
    CORRUPTION_STATS,
    COVERAGE,
    GENERATED_AT,
    SOURCE_URL,
    UNIQUE_STATS,
    getCorruptionRecord: (label) => getRecord(CORRUPTION_STATS, label),
    getCorruptionStat: (label) => getResolved(CORRUPTION_STATS, label),
    getUniqueRecord: (label) => getRecord(UNIQUE_STATS, label),
    getUniqueStat: (label) => getResolved(UNIQUE_STATS, label),
    normalize
  };
});

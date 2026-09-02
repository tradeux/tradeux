(function exposePoe2JewelData(root, factory) {
  const data = factory();

  if (typeof module === "object" && module.exports) module.exports = data;
  root.Poe2JewelData = data;
})(typeof globalThis !== "undefined" ? globalThis : this, function createPoe2JewelData() {
  "use strict";

  // Generated from the reviewed crafting snapshot, then strictly reconciled
  // by text and stat namespace with the official PoE 2 trade catalogue. Unmapped or
  // ambiguous crafting entries are intentionally not exposed: a visible
  // preset option must always be usable by the native trade search.
  const SNAPSHOT = {
  "bases": [
    {
      "displayName": "Ruby",
      "hasCraftModifierPool": true,
      "icon": "",
      "key": "ruby",
      "modifierIds": [
        "Prefixes\u0000explicit.stat_2174054121",
        "Suffixes\u0000explicit.stat_2112395885",
        "Prefixes\u0000explicit.stat_280731498",
        "Prefixes\u0000explicit.stat_2866361420",
        "Suffixes\u0000explicit.stat_2637470878",
        "Prefixes\u0000explicit.stat_2523933828",
        "Prefixes\u0000explicit.stat_2843214518",
        "Suffixes\u0000explicit.stat_1459321413",
        "Prefixes\u0000explicit.stat_4147897060",
        "Prefixes\u0000explicit.stat_2301718443",
        "Prefixes\u0000explicit.stat_2440073079",
        "Prefixes\u0000explicit.stat_1181419800",
        "Prefixes\u0000explicit.stat_2518900926",
        "Prefixes\u0000explicit.stat_1594812856",
        "Prefixes\u0000explicit.stat_3141070085",
        "Prefixes\u0000explicit.stat_3962278098",
        "Suffixes\u0000explicit.stat_2968503605",
        "Prefixes\u0000explicit.stat_1310194496",
        "Suffixes\u0000explicit.stat_1869147066",
        "Prefixes\u0000explicit.stat_3791899485",
        "Suffixes\u0000explicit.stat_565784293",
        "Suffixes\u0000explicit.stat_44972811",
        "Prefixes\u0000explicit.stat_3166958180",
        "Prefixes\u0000explicit.stat_1002362373",
        "Prefixes\u0000explicit.stat_101878827",
        "Suffixes\u0000explicit.stat_3377888098",
        "Suffixes\u0000explicit.stat_918325986",
        "Suffixes\u0000explicit.stat_239367161",
        "Suffixes\u0000explicit.stat_872504239",
        "Suffixes\u0000explicit.stat_680068163",
        "Prefixes\u0000explicit.stat_1315743832",
        "Prefixes\u0000explicit.stat_3851254963",
        "Prefixes\u0000explicit.stat_686254215",
        "Suffixes\u0000explicit.stat_3374165039",
        "Suffixes\u0000explicit.stat_4159248054",
        "Suffixes\u0000explicit.stat_1316278494",
        "Suffixes\u0000explicit.stat_2480498143",
        "Vaal Implicits\u0000implicit.stat_3261801346",
        "Vaal Implicits\u0000implicit.stat_328541901",
        "Prefixes\u0000explicit.stat_1181501418",
        "Vaal Implicits\u0000implicit.stat_4080418644",
        "Vaal Implicits\u0000implicit.stat_2923486259",
        "Vaal Implicits\u0000implicit.stat_4220027924",
        "Vaal Implicits\u0000implicit.stat_3372524247",
        "Vaal Implicits\u0000implicit.stat_1671376347",
        "Suffixes\u0000explicit.stat_4095671657",
        "Prefixes\u0000explicit.stat_429143663",
        "Suffixes\u0000explicit.stat_2720982137",
        "Prefixes\u0000explicit.stat_1776411443",
        "Prefixes\u0000explicit.stat_2653955271",
        "Prefixes\u0000explicit.stat_1569101201",
        "Suffixes\u0000explicit.stat_2709367754",
        "Suffixes\u0000explicit.stat_3292710273",
        "Suffixes\u0000explicit.stat_3119612865",
        "Prefixes\u0000explicit.stat_3811191316",
        "Prefixes\u0000explicit.stat_770672621",
        "Desecrated\u0000desecrated.stat_4139681126",
        "Desecrated\u0000desecrated.stat_2074866941",
        "Desecrated\u0000desecrated.stat_656461285",
        "Desecrated\u0000desecrated.stat_4043376133",
        "Desecrated\u0000desecrated.stat_734614379",
        "Desecrated\u0000desecrated.stat_770672621"
      ],
      "searchText": "Ruby"
    },
    {
      "displayName": "Emerald",
      "hasCraftModifierPool": true,
      "icon": "",
      "key": "emerald",
      "modifierIds": [
        "Suffixes\u0000explicit.stat_318953428",
        "Suffixes\u0000explicit.stat_2321178454",
        "Suffixes\u0000explicit.stat_795138349",
        "Prefixes\u0000explicit.stat_624954515",
        "Prefixes\u0000explicit.stat_169946467",
        "Suffixes\u0000explicit.stat_2839066308",
        "Prefixes\u0000explicit.stat_2843214518",
        "Suffixes\u0000explicit.stat_681332047",
        "Suffixes\u0000explicit.stat_3759735052",
        "Suffixes\u0000explicit.stat_1135928777",
        "Suffixes\u0000explicit.stat_3283482523",
        "Suffixes\u0000explicit.stat_1165163804",
        "Prefixes\u0000explicit.stat_1585769763",
        "Prefixes\u0000explicit.stat_1200678966",
        "Suffixes\u0000explicit.stat_1772247089",
        "Suffixes\u0000explicit.stat_293638271",
        "Suffixes\u0000explicit.stat_3585532255",
        "Suffixes\u0000explicit.stat_1389754388",
        "Suffixes\u0000explicit.stat_1004011302",
        "Suffixes\u0000explicit.stat_3714003708",
        "Suffixes\u0000explicit.stat_2456523742",
        "Suffixes\u0000explicit.stat_2194114101",
        "Suffixes\u0000explicit.stat_3192728503",
        "Prefixes\u0000explicit.stat_627767961",
        "Prefixes\u0000explicit.stat_4188894176",
        "Prefixes\u0000explicit.stat_427684353",
        "Prefixes\u0000explicit.stat_1852872083",
        "Prefixes\u0000explicit.stat_2518900926",
        "Prefixes\u0000explicit.stat_4045894391",
        "Prefixes\u0000explicit.stat_2696027455",
        "Suffixes\u0000explicit.stat_1829102168",
        "Suffixes\u0000explicit.stat_1062710370",
        "Prefixes\u0000explicit.stat_712554801",
        "Suffixes\u0000explicit.stat_3544800472",
        "Prefixes\u0000explicit.stat_3141070085",
        "Prefixes\u0000explicit.stat_2106365538",
        "Suffixes\u0000explicit.stat_1836676211",
        "Suffixes\u0000explicit.stat_3741323227",
        "Suffixes\u0000explicit.stat_1697447343",
        "Prefixes\u0000explicit.stat_1697951953",
        "Suffixes\u0000explicit.stat_4009879772",
        "Suffixes\u0000explicit.stat_821241191",
        "Prefixes\u0000explicit.stat_2231156303",
        "Prefixes\u0000explicit.stat_1303248024",
        "Prefixes\u0000explicit.stat_440490623",
        "Prefixes\u0000explicit.stat_2487305362",
        "Prefixes\u0000explicit.stat_2527686725",
        "Suffixes\u0000explicit.stat_3590792340",
        "Suffixes\u0000explicit.stat_2222186378",
        "Prefixes\u0000explicit.stat_3028809864",
        "Suffixes\u0000explicit.stat_2250533757",
        "Suffixes\u0000explicit.stat_3401186585",
        "Prefixes\u0000explicit.stat_1569159338",
        "Suffixes\u0000explicit.stat_3473929743",
        "Suffixes\u0000explicit.stat_2011656677",
        "Prefixes\u0000explicit.stat_1839076647",
        "Prefixes\u0000explicit.stat_3596695232",
        "Prefixes\u0000explicit.stat_3759663284",
        "Suffixes\u0000explicit.stat_3668351662",
        "Suffixes\u0000explicit.stat_1405298142",
        "Suffixes\u0000explicit.stat_1911237468",
        "Vaal Implicits\u0000implicit.stat_3261801346",
        "Vaal Implicits\u0000implicit.stat_328541901",
        "Vaal Implicits\u0000implicit.stat_4080418644",
        "Vaal Implicits\u0000implicit.stat_2923486259",
        "Vaal Implicits\u0000implicit.stat_4220027924",
        "Vaal Implicits\u0000implicit.stat_3372524247",
        "Vaal Implicits\u0000implicit.stat_1671376347",
        "Suffixes\u0000explicit.stat_1011760251",
        "Prefixes\u0000explicit.stat_234296660",
        "Prefixes\u0000explicit.stat_1805182458",
        "Prefixes\u0000explicit.stat_818778753",
        "Suffixes\u0000explicit.stat_538241406",
        "Suffixes\u0000explicit.stat_1238227257",
        "Prefixes\u0000explicit.stat_21071013",
        "Suffixes\u0000explicit.stat_2594634307",
        "Suffixes\u0000explicit.stat_1714971114",
        "Suffixes\u0000explicit.stat_3003542304",
        "Suffixes\u0000explicit.stat_4081947835",
        "Desecrated\u0000desecrated.stat_4139681126",
        "Desecrated\u0000desecrated.stat_2074866941",
        "Desecrated\u0000desecrated.stat_656461285",
        "Desecrated\u0000desecrated.stat_4043376133",
        "Desecrated\u0000desecrated.stat_734614379",
        "Desecrated\u0000desecrated.stat_770672621"
      ],
      "searchText": "Emerald"
    },
    {
      "displayName": "Sapphire",
      "hasCraftModifierPool": true,
      "icon": "",
      "key": "sapphire",
      "modifierIds": [
        "Suffixes\u0000explicit.stat_1104825894",
        "Prefixes\u0000explicit.stat_1782086450",
        "Prefixes\u0000explicit.stat_280731498",
        "Prefixes\u0000explicit.stat_153777645",
        "Suffixes\u0000explicit.stat_2891184298",
        "Suffixes\u0000explicit.stat_1772247089",
        "Suffixes\u0000explicit.stat_293638271",
        "Prefixes\u0000explicit.stat_736967255",
        "Suffixes\u0000explicit.stat_3485067555",
        "Prefixes\u0000explicit.stat_3291658075",
        "Suffixes\u0000explicit.stat_3556824919",
        "Suffixes\u0000explicit.stat_587431675",
        "Suffixes\u0000explicit.stat_737908626",
        "Suffixes\u0000explicit.stat_274716455",
        "Suffixes\u0000explicit.stat_3824372849",
        "Prefixes\u0000explicit.stat_2353576063",
        "Prefixes\u0000explicit.stat_2118708619",
        "Prefixes\u0000explicit.stat_2440073079",
        "Prefixes\u0000explicit.stat_2518900926",
        "Suffixes\u0000explicit.stat_1829102168",
        "Prefixes\u0000explicit.stat_3141070085",
        "Prefixes\u0000explicit.stat_3174700878",
        "Suffixes\u0000explicit.stat_2968503605",
        "Suffixes\u0000explicit.stat_473429811",
        "Suffixes\u0000explicit.stat_1697447343",
        "Suffixes\u0000explicit.stat_3780644166",
        "Prefixes\u0000explicit.stat_3791899485",
        "Prefixes\u0000explicit.stat_1303248024",
        "Prefixes\u0000explicit.stat_440490623",
        "Prefixes\u0000explicit.stat_2527686725",
        "Suffixes\u0000explicit.stat_789117908",
        "Prefixes\u0000explicit.stat_2482852589",
        "Prefixes\u0000explicit.stat_101878827",
        "Suffixes\u0000explicit.stat_3668351662",
        "Suffixes\u0000explicit.stat_3377888098",
        "Suffixes\u0000explicit.stat_918325986",
        "Prefixes\u0000explicit.stat_2974417149",
        "Prefixes\u0000explicit.stat_3973629633",
        "Suffixes\u0000explicit.stat_458438597",
        "Suffixes\u0000explicit.stat_1444556985",
        "Vaal Implicits\u0000implicit.stat_3261801346",
        "Vaal Implicits\u0000implicit.stat_328541901",
        "Vaal Implicits\u0000implicit.stat_4080418644",
        "Vaal Implicits\u0000implicit.stat_2923486259",
        "Vaal Implicits\u0000implicit.stat_4220027924",
        "Vaal Implicits\u0000implicit.stat_3372524247",
        "Vaal Implicits\u0000implicit.stat_1671376347",
        "Suffixes\u0000explicit.stat_3676141501",
        "Prefixes\u0000explicit.stat_3417711605",
        "Suffixes\u0000explicit.stat_538241406",
        "Suffixes\u0000explicit.stat_1238227257",
        "Suffixes\u0000explicit.stat_3398301358",
        "Suffixes\u0000explicit.stat_416040624",
        "Suffixes\u0000explicit.stat_4236566306",
        "Prefixes\u0000explicit.stat_1589917703",
        "Suffixes\u0000explicit.stat_3091578504",
        "Suffixes\u0000explicit.stat_1854213750",
        "Suffixes\u0000explicit.stat_491450213",
        "Suffixes\u0000explicit.stat_1423639565",
        "Suffixes\u0000explicit.stat_3837707023",
        "Suffixes\u0000explicit.stat_2957407601",
        "Prefixes\u0000explicit.stat_3787460122",
        "Suffixes\u0000explicit.stat_2023107756",
        "Suffixes\u0000explicit.stat_1030153674",
        "Prefixes\u0000explicit.stat_3067892458",
        "Desecrated\u0000desecrated.stat_4139681126",
        "Desecrated\u0000desecrated.stat_2074866941",
        "Desecrated\u0000desecrated.stat_656461285",
        "Desecrated\u0000desecrated.stat_4043376133",
        "Desecrated\u0000desecrated.stat_734614379",
        "Desecrated\u0000desecrated.stat_770672621"
      ],
      "searchText": "Sapphire"
    },
    {
      "displayName": "Diamond",
      "hasCraftModifierPool": true,
      "icon": "",
      "key": "diamond",
      "modifierIds": [
        "Prefixes\u0000explicit.stat_2174054121",
        "Suffixes\u0000explicit.stat_2112395885",
        "Prefixes\u0000explicit.stat_280731498",
        "Prefixes\u0000explicit.stat_2866361420",
        "Suffixes\u0000explicit.stat_2637470878",
        "Prefixes\u0000explicit.stat_2523933828",
        "Prefixes\u0000explicit.stat_2843214518",
        "Suffixes\u0000explicit.stat_1459321413",
        "Prefixes\u0000explicit.stat_4147897060",
        "Prefixes\u0000explicit.stat_2301718443",
        "Prefixes\u0000explicit.stat_2440073079",
        "Prefixes\u0000explicit.stat_1181419800",
        "Prefixes\u0000explicit.stat_2518900926",
        "Prefixes\u0000explicit.stat_1594812856",
        "Prefixes\u0000explicit.stat_3141070085",
        "Prefixes\u0000explicit.stat_3962278098",
        "Suffixes\u0000explicit.stat_2968503605",
        "Prefixes\u0000explicit.stat_1310194496",
        "Suffixes\u0000explicit.stat_1869147066",
        "Prefixes\u0000explicit.stat_3791899485",
        "Suffixes\u0000explicit.stat_565784293",
        "Suffixes\u0000explicit.stat_44972811",
        "Prefixes\u0000explicit.stat_3166958180",
        "Prefixes\u0000explicit.stat_1002362373",
        "Prefixes\u0000explicit.stat_101878827",
        "Suffixes\u0000explicit.stat_3377888098",
        "Suffixes\u0000explicit.stat_918325986",
        "Suffixes\u0000explicit.stat_239367161",
        "Suffixes\u0000explicit.stat_872504239",
        "Suffixes\u0000explicit.stat_680068163",
        "Prefixes\u0000explicit.stat_1315743832",
        "Prefixes\u0000explicit.stat_3851254963",
        "Prefixes\u0000explicit.stat_686254215",
        "Suffixes\u0000explicit.stat_3374165039",
        "Suffixes\u0000explicit.stat_4159248054",
        "Suffixes\u0000explicit.stat_1316278494",
        "Suffixes\u0000explicit.stat_2480498143",
        "Vaal Implicits\u0000implicit.stat_3261801346",
        "Vaal Implicits\u0000implicit.stat_328541901",
        "Prefixes\u0000explicit.stat_1181501418",
        "Vaal Implicits\u0000implicit.stat_4080418644",
        "Vaal Implicits\u0000implicit.stat_2923486259",
        "Vaal Implicits\u0000implicit.stat_4220027924",
        "Vaal Implicits\u0000implicit.stat_3372524247",
        "Vaal Implicits\u0000implicit.stat_1671376347",
        "Suffixes\u0000explicit.stat_4095671657",
        "Prefixes\u0000explicit.stat_429143663",
        "Suffixes\u0000explicit.stat_2720982137",
        "Prefixes\u0000explicit.stat_1776411443",
        "Prefixes\u0000explicit.stat_2653955271",
        "Prefixes\u0000explicit.stat_1569101201",
        "Suffixes\u0000explicit.stat_2709367754",
        "Suffixes\u0000explicit.stat_3292710273",
        "Suffixes\u0000explicit.stat_3119612865",
        "Prefixes\u0000explicit.stat_3811191316",
        "Prefixes\u0000explicit.stat_770672621",
        "Desecrated\u0000desecrated.stat_4139681126",
        "Desecrated\u0000desecrated.stat_2074866941",
        "Desecrated\u0000desecrated.stat_656461285",
        "Desecrated\u0000desecrated.stat_4043376133",
        "Desecrated\u0000desecrated.stat_734614379",
        "Desecrated\u0000desecrated.stat_770672621",
        "Suffixes\u0000explicit.stat_318953428",
        "Suffixes\u0000explicit.stat_2321178454",
        "Suffixes\u0000explicit.stat_795138349",
        "Prefixes\u0000explicit.stat_624954515",
        "Prefixes\u0000explicit.stat_169946467",
        "Suffixes\u0000explicit.stat_2839066308",
        "Suffixes\u0000explicit.stat_681332047",
        "Suffixes\u0000explicit.stat_3759735052",
        "Suffixes\u0000explicit.stat_1135928777",
        "Suffixes\u0000explicit.stat_3283482523",
        "Suffixes\u0000explicit.stat_1165163804",
        "Prefixes\u0000explicit.stat_1585769763",
        "Prefixes\u0000explicit.stat_1200678966",
        "Suffixes\u0000explicit.stat_1772247089",
        "Suffixes\u0000explicit.stat_293638271",
        "Suffixes\u0000explicit.stat_3585532255",
        "Suffixes\u0000explicit.stat_1389754388",
        "Suffixes\u0000explicit.stat_1004011302",
        "Suffixes\u0000explicit.stat_3714003708",
        "Suffixes\u0000explicit.stat_2456523742",
        "Suffixes\u0000explicit.stat_2194114101",
        "Suffixes\u0000explicit.stat_3192728503",
        "Prefixes\u0000explicit.stat_627767961",
        "Prefixes\u0000explicit.stat_4188894176",
        "Prefixes\u0000explicit.stat_427684353",
        "Prefixes\u0000explicit.stat_1852872083",
        "Prefixes\u0000explicit.stat_4045894391",
        "Prefixes\u0000explicit.stat_2696027455",
        "Suffixes\u0000explicit.stat_1829102168",
        "Suffixes\u0000explicit.stat_1062710370",
        "Prefixes\u0000explicit.stat_712554801",
        "Suffixes\u0000explicit.stat_3544800472",
        "Prefixes\u0000explicit.stat_2106365538",
        "Suffixes\u0000explicit.stat_1836676211",
        "Suffixes\u0000explicit.stat_3741323227",
        "Suffixes\u0000explicit.stat_1697447343",
        "Prefixes\u0000explicit.stat_1697951953",
        "Suffixes\u0000explicit.stat_4009879772",
        "Suffixes\u0000explicit.stat_821241191",
        "Prefixes\u0000explicit.stat_2231156303",
        "Prefixes\u0000explicit.stat_1303248024",
        "Prefixes\u0000explicit.stat_440490623",
        "Prefixes\u0000explicit.stat_2487305362",
        "Prefixes\u0000explicit.stat_2527686725",
        "Suffixes\u0000explicit.stat_3590792340",
        "Suffixes\u0000explicit.stat_2222186378",
        "Prefixes\u0000explicit.stat_3028809864",
        "Suffixes\u0000explicit.stat_2250533757",
        "Suffixes\u0000explicit.stat_3401186585",
        "Prefixes\u0000explicit.stat_1569159338",
        "Suffixes\u0000explicit.stat_3473929743",
        "Suffixes\u0000explicit.stat_2011656677",
        "Prefixes\u0000explicit.stat_1839076647",
        "Prefixes\u0000explicit.stat_3596695232",
        "Prefixes\u0000explicit.stat_3759663284",
        "Suffixes\u0000explicit.stat_3668351662",
        "Suffixes\u0000explicit.stat_1405298142",
        "Suffixes\u0000explicit.stat_1911237468",
        "Suffixes\u0000explicit.stat_1011760251",
        "Prefixes\u0000explicit.stat_234296660",
        "Prefixes\u0000explicit.stat_1805182458",
        "Prefixes\u0000explicit.stat_818778753",
        "Suffixes\u0000explicit.stat_538241406",
        "Suffixes\u0000explicit.stat_1238227257",
        "Prefixes\u0000explicit.stat_21071013",
        "Suffixes\u0000explicit.stat_2594634307",
        "Suffixes\u0000explicit.stat_1714971114",
        "Suffixes\u0000explicit.stat_3003542304",
        "Suffixes\u0000explicit.stat_4081947835",
        "Suffixes\u0000explicit.stat_1104825894",
        "Prefixes\u0000explicit.stat_1782086450",
        "Prefixes\u0000explicit.stat_153777645",
        "Suffixes\u0000explicit.stat_2891184298",
        "Prefixes\u0000explicit.stat_736967255",
        "Suffixes\u0000explicit.stat_3485067555",
        "Prefixes\u0000explicit.stat_3291658075",
        "Suffixes\u0000explicit.stat_3556824919",
        "Suffixes\u0000explicit.stat_587431675",
        "Suffixes\u0000explicit.stat_737908626",
        "Suffixes\u0000explicit.stat_274716455",
        "Suffixes\u0000explicit.stat_3824372849",
        "Prefixes\u0000explicit.stat_2353576063",
        "Prefixes\u0000explicit.stat_2118708619",
        "Prefixes\u0000explicit.stat_3174700878",
        "Suffixes\u0000explicit.stat_473429811",
        "Suffixes\u0000explicit.stat_3780644166",
        "Suffixes\u0000explicit.stat_789117908",
        "Prefixes\u0000explicit.stat_2482852589",
        "Prefixes\u0000explicit.stat_2974417149",
        "Prefixes\u0000explicit.stat_3973629633",
        "Suffixes\u0000explicit.stat_458438597",
        "Suffixes\u0000explicit.stat_1444556985",
        "Suffixes\u0000explicit.stat_3676141501",
        "Prefixes\u0000explicit.stat_3417711605",
        "Suffixes\u0000explicit.stat_3398301358",
        "Suffixes\u0000explicit.stat_416040624",
        "Suffixes\u0000explicit.stat_4236566306",
        "Prefixes\u0000explicit.stat_1589917703",
        "Suffixes\u0000explicit.stat_3091578504",
        "Suffixes\u0000explicit.stat_1854213750",
        "Suffixes\u0000explicit.stat_491450213",
        "Suffixes\u0000explicit.stat_1423639565",
        "Suffixes\u0000explicit.stat_3837707023",
        "Suffixes\u0000explicit.stat_2957407601",
        "Prefixes\u0000explicit.stat_3787460122",
        "Suffixes\u0000explicit.stat_2023107756",
        "Suffixes\u0000explicit.stat_1030153674",
        "Prefixes\u0000explicit.stat_3067892458"
      ],
      "searchText": "Diamond"
    },
    {
      "displayName": "Time-Lost Emerald",
      "icon": "",
      "key": "time-lost-emerald",
      "hasCraftModifierPool": false,
      "modifierIds": [],
      "searchText": "Time-Lost Emerald"
    },
    {
      "displayName": "Time-Lost Diamond",
      "icon": "",
      "key": "time-lost-diamond",
      "hasCraftModifierPool": false,
      "modifierIds": [],
      "searchText": "Time-Lost Diamond"
    },
    {
      "displayName": "Time-Lost Sapphire",
      "icon": "",
      "key": "time-lost-sapphire",
      "hasCraftModifierPool": false,
      "modifierIds": [],
      "searchText": "Time-Lost Sapphire"
    },
    {
      "displayName": "Time-Lost Ruby",
      "icon": "",
      "key": "time-lost-ruby",
      "hasCraftModifierPool": false,
      "modifierIds": [],
      "searchText": "Time-Lost Ruby"
    }
  ],
  "source": {

    "generatedAt": "2026-08-30T17:04:39.337Z",
    "unmapped": [
      {
        "baseId": "26",
        "craftId": "6175",
        "group": "Prefixes",
        "matches": [],
        "text": "#% chance for Attack Hits to apply Incision"
      },
      {
        "baseId": "26",
        "craftId": "6236",
        "group": "Vaal Implicits",
        "matches": [],
        "text": "Cannot be Blinded"
      },
      {
        "baseId": "26",
        "craftId": "6235",
        "group": "Vaal Implicits",
        "matches": [],
        "text": "Corrupted Blood cannot be inflicted on you"
      },
      {
        "baseId": "26",
        "craftId": "6233",
        "group": "Vaal Implicits",
        "matches": [],
        "text": "Immune to Maim"
      },
      {
        "baseId": "26",
        "craftId": "6234",
        "group": "Vaal Implicits",
        "matches": [],
        "text": "You cannot be Hindered"
      },
      {
        "baseId": "26",
        "craftId": "5731",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Armour, #% increased Attack Damage"
      },
      {
        "baseId": "26",
        "craftId": "5728",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Armour, #% increased Spell Damage"
      },
      {
        "baseId": "26",
        "craftId": "5737",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Armour, #% increased Thorns damage"
      },
      {
        "baseId": "26",
        "craftId": "5740",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Armour, #% increased Totem Damage"
      },
      {
        "baseId": "26",
        "craftId": "5734",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Armour, Minions deal #% increased Damage"
      },
      {
        "baseId": "26",
        "craftId": "5746",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased chance to inflict Bleeding, #% increased Magnitude of Bleeding you inflict"
      },
      {
        "baseId": "26",
        "craftId": "5747",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased chance to Poison, #% increased Magnitude of Poison you inflict"
      },
      {
        "baseId": "26",
        "craftId": "5752",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Chaos Damage, #% increased Withered Magnitude"
      },
      {
        "baseId": "26",
        "craftId": "5745",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Cold Damage, Damage Penetrates #% Cold Resistance"
      },
      {
        "baseId": "26",
        "craftId": "5751",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Elemental Damage, #% increased Magnitude of Ailments you inflict"
      },
      {
        "baseId": "26",
        "craftId": "5732",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Evasion Rating, #% increased Attack Damage"
      },
      {
        "baseId": "26",
        "craftId": "5729",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Evasion Rating, #% increased Spell Damage"
      },
      {
        "baseId": "26",
        "craftId": "5738",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Evasion Rating, #% increased Thorns damage"
      },
      {
        "baseId": "26",
        "craftId": "5741",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Evasion Rating, #% increased Totem Damage"
      },
      {
        "baseId": "26",
        "craftId": "5735",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Evasion Rating, Minions deal #% increased Damage"
      },
      {
        "baseId": "26",
        "craftId": "5743",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Fire Damage, Damage Penetrates #% Fire Resistance"
      },
      {
        "baseId": "26",
        "craftId": "5750",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Global Physical Damage, Break #% increased Armour"
      },
      {
        "baseId": "26",
        "craftId": "5744",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Lightning Damage, Damage Penetrates #% Lightning Resistance"
      },
      {
        "baseId": "26",
        "craftId": "5733",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased maximum Energy Shield, #% increased Attack Damage"
      },
      {
        "baseId": "26",
        "craftId": "5730",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased maximum Energy Shield, #% increased Spell Damage"
      },
      {
        "baseId": "26",
        "craftId": "5739",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased maximum Energy Shield, #% increased Thorns damage"
      },
      {
        "baseId": "26",
        "craftId": "5742",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased maximum Energy Shield, #% increased Totem Damage"
      },
      {
        "baseId": "26",
        "craftId": "5736",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased maximum Energy Shield, Minions deal #% increased Damage"
      },
      {
        "baseId": "26",
        "craftId": "5748",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Warcry Buff Effect, #% increased Damage with Warcries"
      },
      {
        "baseId": "26",
        "craftId": "5754",
        "group": "Desecrated",
        "matches": [],
        "text": "Aura Skills have #% increased Magnitudes, #% increased Presence Area of Effect"
      },
      {
        "baseId": "26",
        "craftId": "5749",
        "group": "Desecrated",
        "matches": [],
        "text": "Companions have #% increased maximum Life, Companions deal #% increased Damage"
      },
      {
        "baseId": "27",
        "craftId": "5242",
        "group": "Suffixes",
        "matches": [],
        "text": "#% chance to Daze on Hit"
      },
      {
        "baseId": "27",
        "craftId": "5262",
        "group": "Suffixes",
        "matches": [],
        "text": "#% reduced Slowing Potency of Debuffs on You"
      },
      {
        "baseId": "27",
        "craftId": "6236",
        "group": "Vaal Implicits",
        "matches": [],
        "text": "Cannot be Blinded"
      },
      {
        "baseId": "27",
        "craftId": "6235",
        "group": "Vaal Implicits",
        "matches": [],
        "text": "Corrupted Blood cannot be inflicted on you"
      },
      {
        "baseId": "27",
        "craftId": "6233",
        "group": "Vaal Implicits",
        "matches": [],
        "text": "Immune to Maim"
      },
      {
        "baseId": "27",
        "craftId": "6234",
        "group": "Vaal Implicits",
        "matches": [],
        "text": "You cannot be Hindered"
      },
      {
        "baseId": "27",
        "craftId": "5731",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Armour, #% increased Attack Damage"
      },
      {
        "baseId": "27",
        "craftId": "5728",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Armour, #% increased Spell Damage"
      },
      {
        "baseId": "27",
        "craftId": "5737",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Armour, #% increased Thorns damage"
      },
      {
        "baseId": "27",
        "craftId": "5740",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Armour, #% increased Totem Damage"
      },
      {
        "baseId": "27",
        "craftId": "5734",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Armour, Minions deal #% increased Damage"
      },
      {
        "baseId": "27",
        "craftId": "5746",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased chance to inflict Bleeding, #% increased Magnitude of Bleeding you inflict"
      },
      {
        "baseId": "27",
        "craftId": "5747",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased chance to Poison, #% increased Magnitude of Poison you inflict"
      },
      {
        "baseId": "27",
        "craftId": "5752",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Chaos Damage, #% increased Withered Magnitude"
      },
      {
        "baseId": "27",
        "craftId": "5745",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Cold Damage, Damage Penetrates #% Cold Resistance"
      },
      {
        "baseId": "27",
        "craftId": "5751",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Elemental Damage, #% increased Magnitude of Ailments you inflict"
      },
      {
        "baseId": "27",
        "craftId": "5732",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Evasion Rating, #% increased Attack Damage"
      },
      {
        "baseId": "27",
        "craftId": "5729",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Evasion Rating, #% increased Spell Damage"
      },
      {
        "baseId": "27",
        "craftId": "5738",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Evasion Rating, #% increased Thorns damage"
      },
      {
        "baseId": "27",
        "craftId": "5741",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Evasion Rating, #% increased Totem Damage"
      },
      {
        "baseId": "27",
        "craftId": "5735",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Evasion Rating, Minions deal #% increased Damage"
      },
      {
        "baseId": "27",
        "craftId": "5743",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Fire Damage, Damage Penetrates #% Fire Resistance"
      },
      {
        "baseId": "27",
        "craftId": "5750",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Global Physical Damage, Break #% increased Armour"
      },
      {
        "baseId": "27",
        "craftId": "5744",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Lightning Damage, Damage Penetrates #% Lightning Resistance"
      },
      {
        "baseId": "27",
        "craftId": "5733",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased maximum Energy Shield, #% increased Attack Damage"
      },
      {
        "baseId": "27",
        "craftId": "5730",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased maximum Energy Shield, #% increased Spell Damage"
      },
      {
        "baseId": "27",
        "craftId": "5739",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased maximum Energy Shield, #% increased Thorns damage"
      },
      {
        "baseId": "27",
        "craftId": "5742",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased maximum Energy Shield, #% increased Totem Damage"
      },
      {
        "baseId": "27",
        "craftId": "5736",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased maximum Energy Shield, Minions deal #% increased Damage"
      },
      {
        "baseId": "27",
        "craftId": "5748",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Warcry Buff Effect, #% increased Damage with Warcries"
      },
      {
        "baseId": "27",
        "craftId": "5754",
        "group": "Desecrated",
        "matches": [],
        "text": "Aura Skills have #% increased Magnitudes, #% increased Presence Area of Effect"
      },
      {
        "baseId": "27",
        "craftId": "5749",
        "group": "Desecrated",
        "matches": [],
        "text": "Companions have #% increased maximum Life, Companions deal #% increased Damage"
      },
      {
        "baseId": "28",
        "craftId": "6236",
        "group": "Vaal Implicits",
        "matches": [],
        "text": "Cannot be Blinded"
      },
      {
        "baseId": "28",
        "craftId": "6235",
        "group": "Vaal Implicits",
        "matches": [],
        "text": "Corrupted Blood cannot be inflicted on you"
      },
      {
        "baseId": "28",
        "craftId": "6233",
        "group": "Vaal Implicits",
        "matches": [],
        "text": "Immune to Maim"
      },
      {
        "baseId": "28",
        "craftId": "6234",
        "group": "Vaal Implicits",
        "matches": [],
        "text": "You cannot be Hindered"
      },
      {
        "baseId": "28",
        "craftId": "5731",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Armour, #% increased Attack Damage"
      },
      {
        "baseId": "28",
        "craftId": "5728",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Armour, #% increased Spell Damage"
      },
      {
        "baseId": "28",
        "craftId": "5737",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Armour, #% increased Thorns damage"
      },
      {
        "baseId": "28",
        "craftId": "5740",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Armour, #% increased Totem Damage"
      },
      {
        "baseId": "28",
        "craftId": "5734",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Armour, Minions deal #% increased Damage"
      },
      {
        "baseId": "28",
        "craftId": "5746",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased chance to inflict Bleeding, #% increased Magnitude of Bleeding you inflict"
      },
      {
        "baseId": "28",
        "craftId": "5747",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased chance to Poison, #% increased Magnitude of Poison you inflict"
      },
      {
        "baseId": "28",
        "craftId": "5752",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Chaos Damage, #% increased Withered Magnitude"
      },
      {
        "baseId": "28",
        "craftId": "5745",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Cold Damage, Damage Penetrates #% Cold Resistance"
      },
      {
        "baseId": "28",
        "craftId": "5751",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Elemental Damage, #% increased Magnitude of Ailments you inflict"
      },
      {
        "baseId": "28",
        "craftId": "5732",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Evasion Rating, #% increased Attack Damage"
      },
      {
        "baseId": "28",
        "craftId": "5729",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Evasion Rating, #% increased Spell Damage"
      },
      {
        "baseId": "28",
        "craftId": "5738",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Evasion Rating, #% increased Thorns damage"
      },
      {
        "baseId": "28",
        "craftId": "5741",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Evasion Rating, #% increased Totem Damage"
      },
      {
        "baseId": "28",
        "craftId": "5735",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Evasion Rating, Minions deal #% increased Damage"
      },
      {
        "baseId": "28",
        "craftId": "5743",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Fire Damage, Damage Penetrates #% Fire Resistance"
      },
      {
        "baseId": "28",
        "craftId": "5750",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Global Physical Damage, Break #% increased Armour"
      },
      {
        "baseId": "28",
        "craftId": "5744",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Lightning Damage, Damage Penetrates #% Lightning Resistance"
      },
      {
        "baseId": "28",
        "craftId": "5733",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased maximum Energy Shield, #% increased Attack Damage"
      },
      {
        "baseId": "28",
        "craftId": "5730",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased maximum Energy Shield, #% increased Spell Damage"
      },
      {
        "baseId": "28",
        "craftId": "5739",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased maximum Energy Shield, #% increased Thorns damage"
      },
      {
        "baseId": "28",
        "craftId": "5742",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased maximum Energy Shield, #% increased Totem Damage"
      },
      {
        "baseId": "28",
        "craftId": "5736",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased maximum Energy Shield, Minions deal #% increased Damage"
      },
      {
        "baseId": "28",
        "craftId": "5748",
        "group": "Desecrated",
        "matches": [],
        "text": "#% increased Warcry Buff Effect, #% increased Damage with Warcries"
      },
      {
        "baseId": "28",
        "craftId": "5754",
        "group": "Desecrated",
        "matches": [],
        "text": "Aura Skills have #% increased Magnitudes, #% increased Presence Area of Effect"
      },
      {
        "baseId": "28",
        "craftId": "5749",
        "group": "Desecrated",
        "matches": [],
        "text": "Companions have #% increased maximum Life, Companions deal #% increased Damage"
      }
    ]
  },
  "stats": {
    "Prefixes\u0000explicit.stat_2174054121": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2174054121",
      "text": "#% chance to inflict Bleeding on Hit",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2112395885": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2112395885",
      "text": "#% increased amount of Life Leeched",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_280731498": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_280731498",
      "text": "#% increased Area of Effect",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2866361420": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2866361420",
      "text": "#% increased Armour",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2637470878": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2637470878",
      "text": "#% increased Armour Break Duration",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2523933828": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2523933828",
      "text": "#% increased Armour, Evasion and Energy Shield from Equipped Shield",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2843214518": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2843214518",
      "text": "#% increased Attack Damage",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1459321413": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1459321413",
      "text": "#% increased Bleeding Duration",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_4147897060": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_4147897060",
      "text": "#% increased Block chance",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2301718443": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2301718443",
      "text": "#% increased Damage against Enemies with Fully Broken Armour",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2440073079": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2440073079",
      "text": "#% increased Damage while Shapeshifted",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1181419800": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1181419800",
      "text": "#% increased Damage with Maces",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2518900926": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2518900926",
      "text": "#% increased Damage with Plant Skills",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1594812856": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1594812856",
      "text": "#% increased Damage with Warcries",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3141070085": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3141070085",
      "text": "#% increased Elemental Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3962278098": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3962278098",
      "text": "#% increased Fire Damage",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2968503605": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2968503605",
      "text": "#% increased Flammability Magnitude",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1310194496": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1310194496",
      "text": "#% increased Global Physical Damage",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1869147066": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1869147066",
      "text": "#% increased Glory generation for Banner Skills",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3791899485": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3791899485",
      "text": "#% increased Ignite Magnitude",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_565784293": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_565784293",
      "text": "#% increased Knockback Distance",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_44972811": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_44972811",
      "text": "#% increased Life Regeneration rate",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3166958180": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3166958180",
      "text": "#% increased Magnitude of Bleeding you inflict",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1002362373": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1002362373",
      "text": "#% increased Melee Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_101878827": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_101878827",
      "text": "#% increased Presence Area of Effect",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3377888098": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3377888098",
      "text": "#% increased Skill Effect Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_918325986": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_918325986",
      "text": "#% increased Skill Speed while Shapeshifted",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_239367161": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_239367161",
      "text": "#% increased Stun Buildup",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_872504239": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_872504239",
      "text": "#% increased Stun Buildup with Maces",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_680068163": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_680068163",
      "text": "#% increased Stun Threshold",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1315743832": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1315743832",
      "text": "#% increased Thorns damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3851254963": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3851254963",
      "text": "#% increased Totem Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_686254215": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_686254215",
      "text": "#% increased Totem Life",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3374165039": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3374165039",
      "text": "#% increased Totem Placement speed",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_4159248054": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_4159248054",
      "text": "#% increased Warcry Cooldown Recovery Rate",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1316278494": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1316278494",
      "text": "#% increased Warcry Speed",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2480498143": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2480498143",
      "text": "#% of Skill Mana Costs Converted to Life Costs",
      "type": "explicit"
    },
    "Vaal Implicits\u0000implicit.stat_3261801346": {
      "group": "Vaal Implicits",
      "id": "implicit.stat_3261801346",
      "text": "# to Dexterity",
      "type": "implicit"
    },
    "Vaal Implicits\u0000implicit.stat_328541901": {
      "group": "Vaal Implicits",
      "id": "implicit.stat_328541901",
      "text": "# to Intelligence",
      "type": "implicit"
    },
    "Prefixes\u0000explicit.stat_1181501418": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1181501418",
      "text": "# to Maximum Rage",
      "type": "explicit"
    },
    "Vaal Implicits\u0000implicit.stat_4080418644": {
      "group": "Vaal Implicits",
      "id": "implicit.stat_4080418644",
      "text": "# to Strength",
      "type": "implicit"
    },
    "Vaal Implicits\u0000implicit.stat_2923486259": {
      "group": "Vaal Implicits",
      "id": "implicit.stat_2923486259",
      "text": "#% to Chaos Resistance",
      "type": "implicit"
    },
    "Vaal Implicits\u0000implicit.stat_4220027924": {
      "group": "Vaal Implicits",
      "id": "implicit.stat_4220027924",
      "text": "#% to Cold Resistance",
      "type": "implicit"
    },
    "Vaal Implicits\u0000implicit.stat_3372524247": {
      "group": "Vaal Implicits",
      "id": "implicit.stat_3372524247",
      "text": "#% to Fire Resistance",
      "type": "implicit"
    },
    "Vaal Implicits\u0000implicit.stat_1671376347": {
      "group": "Vaal Implicits",
      "id": "implicit.stat_1671376347",
      "text": "#% to Lightning Resistance",
      "type": "implicit"
    },
    "Suffixes\u0000explicit.stat_4095671657": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_4095671657",
      "text": "#% to Maximum Fire Resistance",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_429143663": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_429143663",
      "text": "Banner Skills have #% increased Area of Effect",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2720982137": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2720982137",
      "text": "Banner Skills have #% increased Duration",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1776411443": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1776411443",
      "text": "Break #% increased Armour",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2653955271": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2653955271",
      "text": "Damage Penetrates #% Fire Resistance",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1569101201": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1569101201",
      "text": "Empowered Attacks deal #% increased Damage",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2709367754": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2709367754",
      "text": "Gain # Rage on Melee Hit",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3292710273": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3292710273",
      "text": "Gain # Rage when Hit by an Enemy",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3119612865": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3119612865",
      "text": "Minions have #% additional Physical Damage Reduction",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3811191316": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3811191316",
      "text": "Minions have #% increased Area of Effect",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_770672621": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_770672621",
      "text": "Minions have #% increased maximum Life",
      "type": "explicit"
    },
    "Desecrated\u0000desecrated.stat_4139681126": {
      "affix": "suffix",
      "group": "Desecrated",
      "id": "desecrated.stat_4139681126",
      "text": "#% increased Dexterity",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_2074866941": {
      "affix": "prefix",
      "group": "Desecrated",
      "id": "desecrated.stat_2074866941",
      "text": "#% increased Exposure Effect",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_656461285": {
      "affix": "suffix",
      "group": "Desecrated",
      "id": "desecrated.stat_656461285",
      "text": "#% increased Intelligence",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_4043376133": {
      "affix": "prefix",
      "group": "Desecrated",
      "id": "desecrated.stat_4043376133",
      "text": "#% increased Magnitude of Abyssal Wasting you inflict",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_734614379": {
      "affix": "suffix",
      "group": "Desecrated",
      "id": "desecrated.stat_734614379",
      "text": "#% increased Strength",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_770672621": {
      "affix": "prefix",
      "group": "Desecrated",
      "id": "desecrated.stat_770672621",
      "text": "Minions have #% increased maximum Life",
      "type": "desecrated"
    },
    "Suffixes\u0000explicit.stat_318953428": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_318953428",
      "text": "#% chance to Blind Enemies on Hit with Attacks",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2321178454": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2321178454",
      "text": "#% chance to Pierce an Enemy",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_795138349": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_795138349",
      "text": "#% chance to Poison on Hit",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_624954515": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_624954515",
      "text": "#% increased Accuracy Rating",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_169946467": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_169946467",
      "text": "#% increased Accuracy Rating with Bows",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2839066308": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2839066308",
      "text": "#% increased amount of Mana Leeched",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_681332047": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_681332047",
      "text": "#% increased Attack Speed",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3759735052": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3759735052",
      "text": "#% increased Attack Speed with Bows",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1135928777": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1135928777",
      "text": "#% increased Attack Speed with Crossbows",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3283482523": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3283482523",
      "text": "#% increased Attack Speed with Quarterstaves",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1165163804": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1165163804",
      "text": "#% increased Attack Speed with Spears",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1585769763": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1585769763",
      "text": "#% increased Blind Effect",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1200678966": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1200678966",
      "text": "#% increased bonuses gained from Equipped Quiver",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1772247089": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1772247089",
      "text": "#% increased chance to inflict Ailments",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_293638271": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_293638271",
      "text": "#% increased chance to Shock",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3585532255": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3585532255",
      "text": "#% increased Charm Charges gained",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1389754388": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1389754388",
      "text": "#% increased Charm Effect Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1004011302": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1004011302",
      "text": "#% increased Cooldown Recovery Rate",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3714003708": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3714003708",
      "text": "#% increased Critical Damage Bonus for Attack Damage",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2456523742": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2456523742",
      "text": "#% increased Critical Damage Bonus with Spears",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2194114101": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2194114101",
      "text": "#% increased Critical Hit Chance for Attacks",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3192728503": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3192728503",
      "text": "#% increased Crossbow Reload Speed",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_627767961": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_627767961",
      "text": "#% increased Damage while you have an active Charm",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_4188894176": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_4188894176",
      "text": "#% increased Damage with Bows",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_427684353": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_427684353",
      "text": "#% increased Damage with Crossbows",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1852872083": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1852872083",
      "text": "#% increased Damage with Hits against Rare and Unique Enemies",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_4045894391": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_4045894391",
      "text": "#% increased Damage with Quarterstaves",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2696027455": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2696027455",
      "text": "#% increased Damage with Spears",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1829102168": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1829102168",
      "text": "#% increased Duration of Damaging Ailments on Enemies",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1062710370": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1062710370",
      "text": "#% increased Duration of Ignite, Shock and Chill on Enemies",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_712554801": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_712554801",
      "text": "#% increased Effect of your Mark Skills",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3544800472": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3544800472",
      "text": "#% increased Elemental Ailment Threshold",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2106365538": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2106365538",
      "text": "#% increased Evasion Rating",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1836676211": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1836676211",
      "text": "#% increased Flask Charges gained",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3741323227": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3741323227",
      "text": "#% increased Flask Effect Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1697447343": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1697447343",
      "text": "#% increased Freeze Buildup with Quarterstaves",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1697951953": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1697951953",
      "text": "#% increased Hazard Damage",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_4009879772": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_4009879772",
      "text": "#% increased Life Flask Charges gained",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_821241191": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_821241191",
      "text": "#% increased Life Recovery from Flasks",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2231156303": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2231156303",
      "text": "#% increased Lightning Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1303248024": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1303248024",
      "text": "#% increased Magnitude of Ailments you inflict",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_440490623": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_440490623",
      "text": "#% increased Magnitude of Damaging Ailments you inflict with Critical Hits",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2487305362": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2487305362",
      "text": "#% increased Magnitude of Poison you inflict",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2527686725": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2527686725",
      "text": "#% increased Magnitude of Shock you inflict",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3590792340": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3590792340",
      "text": "#% increased Mana Flask Charges gained",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2222186378": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2222186378",
      "text": "#% increased Mana Recovery from Flasks",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3028809864": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3028809864",
      "text": "#% increased Melee Damage if you've dealt a Projectile Attack Hit in the past eight seconds",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2250533757": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2250533757",
      "text": "#% increased Movement Speed",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3401186585": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3401186585",
      "text": "#% increased Parried Debuff Duration",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1569159338": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1569159338",
      "text": "#% increased Parry Damage",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3473929743": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3473929743",
      "text": "#% increased Pin Buildup",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2011656677": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2011656677",
      "text": "#% increased Poison Duration",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1839076647": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1839076647",
      "text": "#% increased Projectile Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3596695232": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3596695232",
      "text": "#% increased Projectile Damage if you've dealt a Melee Hit in the past eight seconds",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3759663284": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3759663284",
      "text": "#% increased Projectile Speed",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3668351662": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3668351662",
      "text": "#% increased Shock Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1405298142": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1405298142",
      "text": "#% increased Stun Threshold if you haven't been Stunned Recently",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1911237468": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1911237468",
      "text": "#% increased Stun Threshold while Parrying",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1011760251": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1011760251",
      "text": "#% to Maximum Lightning Resistance",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_234296660": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_234296660",
      "text": "Companions deal #% increased Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1805182458": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1805182458",
      "text": "Companions have #% increased maximum Life",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_818778753": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_818778753",
      "text": "Damage Penetrates #% Lightning Resistance",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_538241406": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_538241406",
      "text": "Damaging Ailments deal damage #% faster",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1238227257": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1238227257",
      "text": "Debuffs on you expire #% faster",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_21071013": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_21071013",
      "text": "Herald Skills deal #% increased Damage",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2594634307": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2594634307",
      "text": "Mark Skills have #% increased Skill Effect Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1714971114": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1714971114",
      "text": "Mark Skills have #% increased Use Speed",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3003542304": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3003542304",
      "text": "Projectiles have #% chance for an additional Projectile when Forking",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_4081947835": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_4081947835",
      "text": "Projectiles have #% chance to Chain an additional time from terrain",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1104825894": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1104825894",
      "text": "#% faster Curse Activation",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1782086450": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1782086450",
      "text": "#% faster start of Energy Shield Recharge",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_153777645": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_153777645",
      "text": "#% increased Area of Effect of Curses",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2891184298": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2891184298",
      "text": "#% increased Cast Speed",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_736967255": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_736967255",
      "text": "#% increased Chaos Damage",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3485067555": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3485067555",
      "text": "#% increased Chill Duration on Enemies",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3291658075": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3291658075",
      "text": "#% increased Cold Damage",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3556824919": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3556824919",
      "text": "#% increased Critical Damage Bonus",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_587431675": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_587431675",
      "text": "#% increased Critical Hit Chance",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_737908626": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_737908626",
      "text": "#% increased Critical Hit Chance for Spells",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_274716455": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_274716455",
      "text": "#% increased Critical Spell Damage Bonus",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3824372849": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3824372849",
      "text": "#% increased Curse Duration",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2353576063": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2353576063",
      "text": "#% increased Curse Magnitudes",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2118708619": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2118708619",
      "text": "#% increased Damage if you have Consumed a Corpse Recently",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3174700878": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3174700878",
      "text": "#% increased Energy Shield from Equipped Focus",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_473429811": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_473429811",
      "text": "#% increased Freeze Buildup",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3780644166": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3780644166",
      "text": "#% increased Freeze Threshold",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_789117908": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_789117908",
      "text": "#% increased Mana Regeneration Rate",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2482852589": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2482852589",
      "text": "#% increased maximum Energy Shield",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2974417149": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2974417149",
      "text": "#% increased Spell Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3973629633": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3973629633",
      "text": "#% increased Withered Magnitude",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_458438597": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_458438597",
      "text": "#% of Damage is taken from Mana before Life",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1444556985": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1444556985",
      "text": "#% of Damage taken Recouped as Life",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3676141501": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3676141501",
      "text": "#% to Maximum Cold Resistance",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3417711605": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3417711605",
      "text": "Damage Penetrates #% Cold Resistance",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3398301358": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3398301358",
      "text": "Gain additional Ailment Threshold equal to #% of maximum Energy Shield",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_416040624": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_416040624",
      "text": "Gain additional Stun Threshold equal to #% of maximum Energy Shield",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_4236566306": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_4236566306",
      "text": "Meta Skills gain #% increased Energy",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1589917703": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1589917703",
      "text": "Minions deal #% increased Damage",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3091578504": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3091578504",
      "text": "Minions have #% increased Attack and Cast Speed",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1854213750": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1854213750",
      "text": "Minions have #% increased Critical Damage Bonus",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_491450213": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_491450213",
      "text": "Minions have #% increased Critical Hit Chance",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1423639565": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1423639565",
      "text": "Minions have #% to all Elemental Resistances",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3837707023": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3837707023",
      "text": "Minions have #% to Chaos Resistance",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2957407601": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2957407601",
      "text": "Offering Skills have #% increased Duration",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3787460122": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3787460122",
      "text": "Offerings have #% increased Maximum Life",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2023107756": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2023107756",
      "text": "Recover #% of maximum Life on Kill",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1030153674": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1030153674",
      "text": "Recover #% of maximum Mana on Kill",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3067892458": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3067892458",
      "text": "Triggered Spells deal #% increased Spell Damage",
      "type": "explicit"
    }
  }
};
  const BUNDLED_DATA = globalThis.Poe2BundledIconData || (typeof require === "function" ? require("./poe2-bundled-icon-data.js") : {});
  const BUNDLED_ICONS = BUNDLED_DATA.mappings?.jewels || {};
  const BUNDLED_FALLBACK = BUNDLED_DATA.fallbackPath || "assets/item-icons/fallback.webp";
  const JEWEL_BASES = Object.freeze(SNAPSHOT.bases.map((base) => Object.freeze({ ...base, icon: BUNDLED_ICONS[base.key] || BUNDLED_FALLBACK })));
  const JEWEL_STATS = Object.freeze(SNAPSHOT.stats);
  const JEWEL_STAT_GROUP_ORDER = Object.freeze(["Prefixes", "Suffixes", "Desecrated", "Vaal Implicits"]);
  const JEWEL_BASE_BY_KEY = new Map(JEWEL_BASES.map((base) => [base.key, base]));
  function normalize(value) { return String(value || "").replace(/\s+/g, " ").trim().toLowerCase(); }
  function getJewelBase(key) { return JEWEL_BASE_BY_KEY.get(normalize(key)) || null; }
  function getJewelStatOptions(baseKey, catalogEntries = []) {
    const base = getJewelBase(baseKey);
    if (!base) return [];
    const liveById = new Map(catalogEntries.map((entry) => [entry.id, entry]));
    return base.modifierIds.map((key) => JEWEL_STATS[key]).filter(Boolean).map((option) => {
      const live = liveById.get(option.id);
      return live ? { ...option, text: live.text || option.text, type: live.type || option.type } : option;
    }).sort((left, right) => JEWEL_STAT_GROUP_ORDER.indexOf(left.group) - JEWEL_STAT_GROUP_ORDER.indexOf(right.group) || normalize(left.text).localeCompare(normalize(right.text)));
  }

  return { JEWEL_BASES, JEWEL_GENERAL_ICON: JEWEL_BASES[0]?.icon || "", JEWEL_STATS, JEWEL_STAT_GROUP_ORDER, SOURCE: Object.freeze(SNAPSHOT.source), getJewelBase, getJewelStatOptions };
});

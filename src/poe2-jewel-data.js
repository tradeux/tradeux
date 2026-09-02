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
      "modifierIds": [
        "Prefixes\u0000explicit.stat_868556494",
        "Prefixes\u0000explicit.stat_945774314",
        "Prefixes\u0000explicit.stat_821948283",
        "Prefixes\u0000explicit.stat_1994296038",
        "Prefixes\u0000explicit.stat_1285594161",
        "Prefixes\u0000explicit.stat_1494950893",
        "Prefixes\u0000explicit.stat_1166140625",
        "Prefixes\u0000explicit.stat_533892981",
        "Prefixes\u0000explicit.stat_3065378291",
        "Prefixes\u0000explicit.stat_288364275",
        "Prefixes\u0000explicit.stat_1590846356",
        "Prefixes\u0000explicit.stat_462424929",
        "Prefixes\u0000explicit.stat_455816363",
        "Prefixes\u0000explicit.stat_2421151933",
        "Prefixes\u0000explicit.stat_3891355829|2",
        "Prefixes\u0000explicit.stat_3891355829|1",
        "Prefixes\u0000explicit.stat_517664839",
        "Prefixes\u0000explicit.stat_4180952808",
        "Prefixes\u0000explicit.stat_147764878",
        "Prefixes\u0000explicit.stat_1426522529",
        "Prefixes\u0000explicit.stat_2768899959",
        "Prefixes\u0000explicit.stat_3222402650",
        "Prefixes\u0000explicit.stat_1007380041",
        "Prefixes\u0000explicit.stat_255840549",
        "Prefixes\u0000explicit.stat_2638756573",
        "Prefixes\u0000explicit.stat_1777421941",
        "Prefixes\u0000explicit.stat_179541474",
        "Prefixes\u0000explicit.stat_3752589831",
        "Prefixes\u0000explicit.stat_4092130601",
        "Prefixes\u0000explicit.stat_2809428780",
        "Prefixes\u0000explicit.stat_2912416697",
        "Prefixes\u0000explicit.stat_1321104829",
        "Suffixes\u0000explicit.stat_2066964205",
        "Suffixes\u0000explicit.stat_1060572482",
        "Suffixes\u0000explicit.stat_3513818125",
        "Suffixes\u0000explicit.stat_3173882956",
        "Suffixes\u0000explicit.stat_2580617872",
        "Suffixes\u0000explicit.stat_1352561456",
        "Suffixes\u0000explicit.stat_2320654813",
        "Suffixes\u0000explicit.stat_654207792",
        "Suffixes\u0000explicit.stat_3700202631",
        "Suffixes\u0000explicit.stat_4234573345",
        "Suffixes\u0000explicit.stat_942519401",
        "Suffixes\u0000explicit.stat_3171212276",
        "Suffixes\u0000explicit.stat_1800303440",
        "Suffixes\u0000explicit.stat_4162678661",
        "Suffixes\u0000explicit.stat_2610562860",
        "Suffixes\u0000explicit.stat_1514844108",
        "Suffixes\u0000explicit.stat_127081978",
        "Suffixes\u0000explicit.stat_980177976",
        "Suffixes\u0000explicit.stat_3088348485",
        "Suffixes\u0000explicit.stat_3774951878",
        "Suffixes\u0000explicit.stat_2202308025",
        "Suffixes\u0000explicit.stat_3865605585",
        "Suffixes\u0000explicit.stat_2256120736",
        "Suffixes\u0000explicit.stat_1495814176",
        "Suffixes\u0000explicit.stat_1944020877",
        "Suffixes\u0000explicit.stat_3409275777",
        "Suffixes\u0000explicit.stat_138421180",
        "Suffixes\u0000explicit.stat_1773308808",
        "Suffixes\u0000explicit.stat_1266413530",
        "Suffixes\u0000explicit.stat_4258000627",
        "Suffixes\u0000explicit.stat_221701169",
        "Suffixes\u0000explicit.stat_2822644689",
        "Suffixes\u0000explicit.stat_2149603090",
        "Suffixes\u0000explicit.stat_1039268420",
        "Suffixes\u0000explicit.stat_2840989393",
        "Suffixes\u0000explicit.stat_3641543553",
        "Suffixes\u0000explicit.stat_111835965",
        "Suffixes\u0000explicit.stat_4258720395",
        "Suffixes\u0000explicit.stat_2272980012",
        "Suffixes\u0000explicit.stat_844449513",
        "Suffixes\u0000explicit.stat_715957346",
        "Suffixes\u0000explicit.stat_2334956771",
        "Suffixes\u0000explicit.stat_3856744003",
        "Suffixes\u0000explicit.stat_1323216174",
        "Suffixes\u0000explicit.stat_412709880",
        "Desecrated\u0000desecrated.stat_2748665614",
        "Desecrated\u0000desecrated.stat_458438597",
        "Desecrated\u0000desecrated.stat_472520716",
        "Desecrated\u0000desecrated.stat_983749596",
        "Desecrated\u0000desecrated.stat_1177404658",
        "Desecrated\u0000desecrated.stat_1444556985",
        "Desecrated\u0000desecrated.stat_4101445926",
        "Desecrated\u0000desecrated.stat_3566150527",
        "Desecrated\u0000desecrated.stat_1034611536",
        "Desecrated\u0000desecrated.stat_2200293569",
        "Desecrated\u0000desecrated.stat_2135541924",
        "Desecrated\u0000desecrated.stat_1102738251",
        "Corrupted Implicits\u0000enchant.stat_1658498488",
        "Corrupted Implicits\u0000enchant.stat_3429557654",
        "Corrupted Implicits\u0000enchant.stat_1671376347",
        "Corrupted Implicits\u0000enchant.stat_4220027924",
        "Corrupted Implicits\u0000enchant.stat_328541901",
        "Corrupted Implicits\u0000enchant.stat_3261801346",
        "Corrupted Implicits\u0000enchant.stat_3372524247",
        "Corrupted Implicits\u0000enchant.stat_4080418644",
        "Corrupted Implicits\u0000enchant.stat_2923486259",
        "Corrupted Implicits\u0000enchant.stat_1436284579",
        "Corrupted Implicits\u0000enchant.stat_721014846"
      ],
      "searchText": "Time-Lost Emerald"
    },
    {
      "displayName": "Time-Lost Diamond",
      "icon": "",
      "key": "time-lost-diamond",
      "hasCraftModifierPool": false,
      "modifierIds": [
        "Prefixes\u0000explicit.stat_3395186672",
        "Prefixes\u0000explicit.stat_1994296038",
        "Prefixes\u0000explicit.stat_288364275",
        "Prefixes\u0000explicit.stat_1896066427",
        "Prefixes\u0000explicit.stat_1417267954",
        "Prefixes\u0000explicit.stat_3821543413",
        "Prefixes\u0000explicit.stat_3891355829|2",
        "Prefixes\u0000explicit.stat_3891355829|1",
        "Prefixes\u0000explicit.stat_3665922113",
        "Prefixes\u0000explicit.stat_455816363",
        "Prefixes\u0000explicit.stat_1426522529",
        "Prefixes\u0000explicit.stat_4142814612",
        "Prefixes\u0000explicit.stat_1007380041",
        "Prefixes\u0000explicit.stat_1892122971",
        "Prefixes\u0000explicit.stat_139889694",
        "Prefixes\u0000explicit.stat_1852184471",
        "Prefixes\u0000explicit.stat_945774314",
        "Prefixes\u0000explicit.stat_821948283",
        "Prefixes\u0000explicit.stat_3936121440",
        "Prefixes\u0000explicit.stat_266564538",
        "Prefixes\u0000explicit.stat_1590846356",
        "Prefixes\u0000explicit.stat_318092306",
        "Prefixes\u0000explicit.stat_3429148113",
        "Prefixes\u0000explicit.stat_517664839",
        "Prefixes\u0000explicit.stat_4180952808",
        "Prefixes\u0000explicit.stat_1494950893",
        "Prefixes\u0000explicit.stat_255840549",
        "Prefixes\u0000explicit.stat_3391917254",
        "Prefixes\u0000explicit.stat_1846980580",
        "Prefixes\u0000explicit.stat_442393998",
        "Prefixes\u0000explicit.stat_2912416697",
        "Prefixes\u0000explicit.stat_1337740333",
        "Prefixes\u0000explicit.stat_2108821127",
        "Prefixes\u0000explicit.stat_1320662475",
        "Prefixes\u0000explicit.stat_1834658952",
        "Prefixes\u0000explicit.stat_1432756708",
        "Prefixes\u0000explicit.stat_3065378291",
        "Prefixes\u0000explicit.stat_253641217",
        "Prefixes\u0000explicit.stat_2421151933",
        "Prefixes\u0000explicit.stat_2442527254",
        "Prefixes\u0000explicit.stat_533892981",
        "Prefixes\u0000explicit.stat_2954360902",
        "Prefixes\u0000explicit.stat_1160637284",
        "Prefixes\u0000explicit.stat_391602279",
        "Prefixes\u0000explicit.stat_473917671",
        "Prefixes\u0000explicit.stat_378796798",
        "Prefixes\u0000explicit.stat_3859848445",
        "Prefixes\u0000explicit.stat_1137305356",
        "Prefixes\u0000explicit.stat_2107703111",
        "Prefixes\u0000explicit.stat_944643028",
        "Prefixes\u0000explicit.stat_1321104829",
        "Prefixes\u0000explicit.stat_462424929",
        "Prefixes\u0000explicit.stat_1285594161",
        "Prefixes\u0000explicit.stat_2809428780",
        "Prefixes\u0000explicit.stat_3858398337",
        "Prefixes\u0000explicit.stat_1166140625",
        "Prefixes\u0000explicit.stat_4092130601",
        "Prefixes\u0000explicit.stat_147764878",
        "Prefixes\u0000explicit.stat_1777421941",
        "Prefixes\u0000explicit.stat_4089835882",
        "Prefixes\u0000explicit.stat_3222402650",
        "Prefixes\u0000explicit.stat_3419203492",
        "Prefixes\u0000explicit.stat_2534359663",
        "Prefixes\u0000explicit.stat_2638756573",
        "Prefixes\u0000explicit.stat_4032352472",
        "Prefixes\u0000explicit.stat_179541474",
        "Prefixes\u0000explicit.stat_2770044702",
        "Prefixes\u0000explicit.stat_3752589831",
        "Prefixes\u0000explicit.stat_868556494",
        "Prefixes\u0000explicit.stat_3394832998",
        "Prefixes\u0000explicit.stat_2768899959",
        "Prefixes\u0000explicit.stat_1309799717",
        "Suffixes\u0000explicit.stat_2066964205",
        "Suffixes\u0000explicit.stat_830345042",
        "Suffixes\u0000explicit.stat_2580617872",
        "Suffixes\u0000explicit.stat_654207792",
        "Suffixes\u0000explicit.stat_3700202631",
        "Suffixes\u0000explicit.stat_2969557004",
        "Suffixes\u0000explicit.stat_2466785537",
        "Suffixes\u0000explicit.stat_61644361",
        "Suffixes\u0000explicit.stat_4234573345",
        "Suffixes\u0000explicit.stat_942519401",
        "Suffixes\u0000explicit.stat_3171212276",
        "Suffixes\u0000explicit.stat_3669820740",
        "Suffixes\u0000explicit.stat_1800303440",
        "Suffixes\u0000explicit.stat_3386297724",
        "Suffixes\u0000explicit.stat_4162678661",
        "Suffixes\u0000explicit.stat_2334956771",
        "Suffixes\u0000explicit.stat_3225608889",
        "Suffixes\u0000explicit.stat_2131720304",
        "Suffixes\u0000explicit.stat_593241812",
        "Suffixes\u0000explicit.stat_3088348485",
        "Suffixes\u0000explicit.stat_3628935286",
        "Suffixes\u0000explicit.stat_394473632",
        "Suffixes\u0000explicit.stat_484792219",
        "Suffixes\u0000explicit.stat_2976476845",
        "Suffixes\u0000explicit.stat_221701169",
        "Suffixes\u0000explicit.stat_2822644689",
        "Suffixes\u0000explicit.stat_2149603090",
        "Suffixes\u0000explicit.stat_1505023559",
        "Suffixes\u0000explicit.stat_3579898587",
        "Suffixes\u0000explicit.stat_3641543553",
        "Suffixes\u0000explicit.stat_111835965",
        "Suffixes\u0000explicit.stat_3256879910",
        "Suffixes\u0000explicit.stat_844449513",
        "Suffixes\u0000explicit.stat_715957346",
        "Suffixes\u0000explicit.stat_3856744003",
        "Suffixes\u0000explicit.stat_2849546516",
        "Suffixes\u0000explicit.stat_1266413530",
        "Suffixes\u0000explicit.stat_2392824305",
        "Suffixes\u0000explicit.stat_1756380435",
        "Suffixes\u0000explicit.stat_3173882956",
        "Suffixes\u0000explicit.stat_3106718406",
        "Suffixes\u0000explicit.stat_504915064",
        "Suffixes\u0000explicit.stat_1352561456",
        "Suffixes\u0000explicit.stat_2359002191",
        "Suffixes\u0000explicit.stat_2320654813",
        "Suffixes\u0000explicit.stat_1185341308",
        "Suffixes\u0000explicit.stat_30438393",
        "Suffixes\u0000explicit.stat_4173554949",
        "Suffixes\u0000explicit.stat_2704905000",
        "Suffixes\u0000explicit.stat_2610562860",
        "Suffixes\u0000explicit.stat_693237939",
        "Suffixes\u0000explicit.stat_2056107438",
        "Suffixes\u0000explicit.stat_138421180",
        "Suffixes\u0000explicit.stat_2709646369",
        "Suffixes\u0000explicit.stat_980177976",
        "Suffixes\u0000explicit.stat_1022759479",
        "Suffixes\u0000explicit.stat_1653682082",
        "Suffixes\u0000explicit.stat_3774951878",
        "Suffixes\u0000explicit.stat_2202308025",
        "Suffixes\u0000explicit.stat_2077117738",
        "Suffixes\u0000explicit.stat_3865605585",
        "Suffixes\u0000explicit.stat_1495814176",
        "Suffixes\u0000explicit.stat_1087108135",
        "Suffixes\u0000explicit.stat_2256120736",
        "Suffixes\u0000explicit.stat_1145481685",
        "Suffixes\u0000explicit.stat_3113764475",
        "Suffixes\u0000explicit.stat_3513818125",
        "Suffixes\u0000explicit.stat_1602294220",
        "Suffixes\u0000explicit.stat_127081978",
        "Suffixes\u0000explicit.stat_3409275777",
        "Suffixes\u0000explicit.stat_2840989393",
        "Suffixes\u0000explicit.stat_1773308808",
        "Suffixes\u0000explicit.stat_1944020877",
        "Suffixes\u0000explicit.stat_4258000627",
        "Suffixes\u0000explicit.stat_2907381231",
        "Suffixes\u0000explicit.stat_1060572482",
        "Suffixes\u0000explicit.stat_2272980012",
        "Suffixes\u0000explicit.stat_1039268420",
        "Suffixes\u0000explicit.stat_1514844108",
        "Suffixes\u0000explicit.stat_2374711847",
        "Suffixes\u0000explicit.stat_1087531620",
        "Suffixes\u0000explicit.stat_2726713579",
        "Suffixes\u0000explicit.stat_2690740379",
        "Suffixes\u0000explicit.stat_525523040",
        "Suffixes\u0000explicit.stat_3666476747",
        "Suffixes\u0000explicit.stat_4258720395",
        "Suffixes\u0000explicit.stat_1323216174",
        "Suffixes\u0000explicit.stat_412709880",
        "Desecrated\u0000desecrated.stat_2748665614",
        "Desecrated\u0000desecrated.stat_458438597",
        "Desecrated\u0000desecrated.stat_472520716",
        "Desecrated\u0000desecrated.stat_983749596",
        "Desecrated\u0000desecrated.stat_1177404658",
        "Desecrated\u0000desecrated.stat_1444556985",
        "Desecrated\u0000desecrated.stat_4101445926",
        "Desecrated\u0000desecrated.stat_3566150527",
        "Desecrated\u0000desecrated.stat_1034611536",
        "Desecrated\u0000desecrated.stat_2200293569",
        "Desecrated\u0000desecrated.stat_2135541924",
        "Desecrated\u0000desecrated.stat_1102738251",
        "Corrupted Implicits\u0000enchant.stat_1658498488",
        "Corrupted Implicits\u0000enchant.stat_3429557654",
        "Corrupted Implicits\u0000enchant.stat_1671376347",
        "Corrupted Implicits\u0000enchant.stat_4220027924",
        "Corrupted Implicits\u0000enchant.stat_328541901",
        "Corrupted Implicits\u0000enchant.stat_3261801346",
        "Corrupted Implicits\u0000enchant.stat_3372524247",
        "Corrupted Implicits\u0000enchant.stat_4080418644",
        "Corrupted Implicits\u0000enchant.stat_2923486259",
        "Corrupted Implicits\u0000enchant.stat_1436284579",
        "Corrupted Implicits\u0000enchant.stat_721014846"
      ],
      "searchText": "Time-Lost Diamond"
    },
    {
      "displayName": "Time-Lost Sapphire",
      "icon": "",
      "key": "time-lost-sapphire",
      "hasCraftModifierPool": false,
      "modifierIds": [
        "Prefixes\u0000explicit.stat_3419203492",
        "Prefixes\u0000explicit.stat_473917671",
        "Prefixes\u0000explicit.stat_3859848445",
        "Prefixes\u0000explicit.stat_2107703111",
        "Prefixes\u0000explicit.stat_3936121440",
        "Prefixes\u0000explicit.stat_266564538",
        "Prefixes\u0000explicit.stat_1590846356",
        "Prefixes\u0000explicit.stat_253641217",
        "Prefixes\u0000explicit.stat_1137305356",
        "Prefixes\u0000explicit.stat_3665922113",
        "Prefixes\u0000explicit.stat_1166140625",
        "Prefixes\u0000explicit.stat_1309799717",
        "Prefixes\u0000explicit.stat_2954360902",
        "Prefixes\u0000explicit.stat_3222402650",
        "Prefixes\u0000explicit.stat_1892122971",
        "Prefixes\u0000explicit.stat_3891355829|2",
        "Prefixes\u0000explicit.stat_3891355829|1",
        "Prefixes\u0000explicit.stat_3391917254",
        "Prefixes\u0000explicit.stat_4032352472",
        "Prefixes\u0000explicit.stat_2770044702",
        "Prefixes\u0000explicit.stat_1321104829",
        "Prefixes\u0000explicit.stat_4092130601",
        "Prefixes\u0000explicit.stat_3394832998",
        "Prefixes\u0000explicit.stat_2442527254",
        "Prefixes\u0000explicit.stat_1896066427",
        "Suffixes\u0000explicit.stat_3113764475",
        "Suffixes\u0000explicit.stat_1060572482",
        "Suffixes\u0000explicit.stat_1756380435",
        "Suffixes\u0000explicit.stat_3173882956",
        "Suffixes\u0000explicit.stat_3106718406",
        "Suffixes\u0000explicit.stat_2359002191",
        "Suffixes\u0000explicit.stat_693237939",
        "Suffixes\u0000explicit.stat_2466785537",
        "Suffixes\u0000explicit.stat_61644361",
        "Suffixes\u0000explicit.stat_4234573345",
        "Suffixes\u0000explicit.stat_3669820740",
        "Suffixes\u0000explicit.stat_2704905000",
        "Suffixes\u0000explicit.stat_3225608889",
        "Suffixes\u0000explicit.stat_2709646369",
        "Suffixes\u0000explicit.stat_593241812",
        "Suffixes\u0000explicit.stat_3628935286",
        "Suffixes\u0000explicit.stat_2077117738",
        "Suffixes\u0000explicit.stat_1087108135",
        "Suffixes\u0000explicit.stat_2256120736",
        "Suffixes\u0000explicit.stat_394473632",
        "Suffixes\u0000explicit.stat_525523040",
        "Suffixes\u0000explicit.stat_1653682082",
        "Suffixes\u0000explicit.stat_2726713579",
        "Suffixes\u0000explicit.stat_2272980012",
        "Suffixes\u0000explicit.stat_1039268420",
        "Suffixes\u0000explicit.stat_1022759479",
        "Suffixes\u0000explicit.stat_3579898587",
        "Suffixes\u0000explicit.stat_3256879910",
        "Suffixes\u0000explicit.stat_830345042",
        "Suffixes\u0000explicit.stat_3513818125",
        "Suffixes\u0000explicit.stat_127081978",
        "Suffixes\u0000explicit.stat_2374711847",
        "Suffixes\u0000explicit.stat_1087531620",
        "Suffixes\u0000explicit.stat_2849546516",
        "Suffixes\u0000explicit.stat_412709880",
        "Desecrated\u0000desecrated.stat_2748665614",
        "Desecrated\u0000desecrated.stat_458438597",
        "Desecrated\u0000desecrated.stat_472520716",
        "Desecrated\u0000desecrated.stat_983749596",
        "Desecrated\u0000desecrated.stat_1177404658",
        "Desecrated\u0000desecrated.stat_1444556985",
        "Desecrated\u0000desecrated.stat_4101445926",
        "Desecrated\u0000desecrated.stat_3566150527",
        "Desecrated\u0000desecrated.stat_1034611536",
        "Desecrated\u0000desecrated.stat_2200293569",
        "Desecrated\u0000desecrated.stat_2135541924",
        "Desecrated\u0000desecrated.stat_1102738251",
        "Corrupted Implicits\u0000enchant.stat_1658498488",
        "Corrupted Implicits\u0000enchant.stat_3429557654",
        "Corrupted Implicits\u0000enchant.stat_1671376347",
        "Corrupted Implicits\u0000enchant.stat_4220027924",
        "Corrupted Implicits\u0000enchant.stat_328541901",
        "Corrupted Implicits\u0000enchant.stat_3261801346",
        "Corrupted Implicits\u0000enchant.stat_3372524247",
        "Corrupted Implicits\u0000enchant.stat_4080418644",
        "Corrupted Implicits\u0000enchant.stat_2923486259",
        "Corrupted Implicits\u0000enchant.stat_1436284579",
        "Corrupted Implicits\u0000enchant.stat_721014846"
      ],
      "searchText": "Time-Lost Sapphire"
    },
    {
      "displayName": "Time-Lost Ruby",
      "icon": "",
      "key": "time-lost-ruby",
      "hasCraftModifierPool": false,
      "modifierIds": [
        "Prefixes\u0000explicit.stat_1834658952",
        "Prefixes\u0000explicit.stat_391602279",
        "Prefixes\u0000explicit.stat_1852184471",
        "Prefixes\u0000explicit.stat_3395186672",
        "Prefixes\u0000explicit.stat_1432756708",
        "Prefixes\u0000explicit.stat_1160637284",
        "Prefixes\u0000explicit.stat_3858398337",
        "Prefixes\u0000explicit.stat_4142814612",
        "Prefixes\u0000explicit.stat_266564538",
        "Prefixes\u0000explicit.stat_1590846356",
        "Prefixes\u0000explicit.stat_318092306",
        "Prefixes\u0000explicit.stat_3429148113",
        "Prefixes\u0000explicit.stat_3821543413",
        "Prefixes\u0000explicit.stat_253641217",
        "Prefixes\u0000explicit.stat_4032352472",
        "Prefixes\u0000explicit.stat_944643028",
        "Prefixes\u0000explicit.stat_1417267954",
        "Prefixes\u0000explicit.stat_1426522529",
        "Prefixes\u0000explicit.stat_4089835882",
        "Prefixes\u0000explicit.stat_3222402650",
        "Prefixes\u0000explicit.stat_378796798",
        "Prefixes\u0000explicit.stat_2534359663",
        "Prefixes\u0000explicit.stat_3391917254",
        "Prefixes\u0000explicit.stat_139889694",
        "Prefixes\u0000explicit.stat_442393998",
        "Prefixes\u0000explicit.stat_1846980580",
        "Prefixes\u0000explicit.stat_1337740333",
        "Prefixes\u0000explicit.stat_3891355829|2",
        "Prefixes\u0000explicit.stat_3891355829|1",
        "Prefixes\u0000explicit.stat_2108821127",
        "Prefixes\u0000explicit.stat_1320662475",
        "Suffixes\u0000explicit.stat_3113764475",
        "Suffixes\u0000explicit.stat_2392824305",
        "Suffixes\u0000explicit.stat_504915064",
        "Suffixes\u0000explicit.stat_1145481685",
        "Suffixes\u0000explicit.stat_1185341308",
        "Suffixes\u0000explicit.stat_1602294220",
        "Suffixes\u0000explicit.stat_394473632",
        "Suffixes\u0000explicit.stat_30438393",
        "Suffixes\u0000explicit.stat_484792219",
        "Suffixes\u0000explicit.stat_2976476845",
        "Suffixes\u0000explicit.stat_2907381231",
        "Suffixes\u0000explicit.stat_2056107438",
        "Suffixes\u0000explicit.stat_1505023559",
        "Suffixes\u0000explicit.stat_3386297724",
        "Suffixes\u0000explicit.stat_4173554949",
        "Suffixes\u0000explicit.stat_3579898587",
        "Suffixes\u0000explicit.stat_2969557004",
        "Suffixes\u0000explicit.stat_1060572482",
        "Suffixes\u0000explicit.stat_3666476747",
        "Suffixes\u0000explicit.stat_4234573345",
        "Suffixes\u0000explicit.stat_2690740379",
        "Suffixes\u0000explicit.stat_2131720304",
        "Desecrated\u0000desecrated.stat_2748665614",
        "Desecrated\u0000desecrated.stat_458438597",
        "Desecrated\u0000desecrated.stat_472520716",
        "Desecrated\u0000desecrated.stat_983749596",
        "Desecrated\u0000desecrated.stat_1177404658",
        "Desecrated\u0000desecrated.stat_1444556985",
        "Desecrated\u0000desecrated.stat_4101445926",
        "Desecrated\u0000desecrated.stat_3566150527",
        "Desecrated\u0000desecrated.stat_1034611536",
        "Desecrated\u0000desecrated.stat_2200293569",
        "Desecrated\u0000desecrated.stat_2135541924",
        "Desecrated\u0000desecrated.stat_1102738251",
        "Corrupted Implicits\u0000enchant.stat_1658498488",
        "Corrupted Implicits\u0000enchant.stat_3429557654",
        "Corrupted Implicits\u0000enchant.stat_1671376347",
        "Corrupted Implicits\u0000enchant.stat_4220027924",
        "Corrupted Implicits\u0000enchant.stat_328541901",
        "Corrupted Implicits\u0000enchant.stat_3261801346",
        "Corrupted Implicits\u0000enchant.stat_3372524247",
        "Corrupted Implicits\u0000enchant.stat_4080418644",
        "Corrupted Implicits\u0000enchant.stat_2923486259",
        "Corrupted Implicits\u0000enchant.stat_1436284579",
        "Corrupted Implicits\u0000enchant.stat_721014846"
      ],
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
    ],
    "timeLost": {
      "generatedAt": "2026-09-02T09:03:09.550Z",
      "statCatalogUrl": "https://www.pathofexile.com/api/trade2/data/stats",
      "uniqueStats": 183,
      "unresolved": [],
      "bases": {
        "time-lost-ruby": {
          "sourceUrl": "https://www.poe2wiki.net/wiki/List_of_modifiers_for_time-lost_ruby_jewel",
          "sourceCounts": {
            "standard": 53,
            "desecrated": 12,
            "corruption": 11
          },
          "stats": 76
        },
        "time-lost-emerald": {
          "sourceUrl": "https://www.poe2wiki.net/wiki/List_of_modifiers_for_time-lost_emerald_jewel",
          "sourceCounts": {
            "standard": 77,
            "desecrated": 12,
            "corruption": 11
          },
          "stats": 100
        },
        "time-lost-sapphire": {
          "sourceUrl": "https://www.poe2wiki.net/wiki/List_of_modifiers_for_time-lost_sapphire_jewel",
          "sourceCounts": {
            "standard": 60,
            "desecrated": 12,
            "corruption": 11
          },
          "stats": 83
        },
        "time-lost-diamond": {
          "sourceUrl": "https://www.poe2wiki.net/wiki/List_of_modifiers_for_time-lost_diamond_jewel",
          "sourceCounts": {
            "standard": 160,
            "desecrated": 12,
            "corruption": 11
          },
          "stats": 183
        }
      }
    }
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
    },
    "Prefixes\u0000explicit.stat_868556494": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_868556494",
      "text": "Small Passive Skills in Radius also grant Damage Penetrates #% Lightning Resistance",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_945774314": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_945774314",
      "text": "Small Passive Skills in Radius also grant #% increased Damage with Bows",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_821948283": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_821948283",
      "text": "Small Passive Skills in Radius also grant #% increased Damage with Quarterstaves",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1994296038": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1994296038",
      "text": "Small Passive Skills in Radius also grant #% increased Evasion Rating",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1285594161": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1285594161",
      "text": "Small Passive Skills in Radius also grant #% increased Accuracy Rating with Bows",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1494950893": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1494950893",
      "text": "Small Passive Skills in Radius also grant Companions deal #% increased Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1166140625": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1166140625",
      "text": "Notable Passive Skills in Radius also grant #% increased Magnitude of Shock you inflict",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_533892981": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_533892981",
      "text": "Small Passive Skills in Radius also grant #% increased Accuracy Rating",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3065378291": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3065378291",
      "text": "Small Passive Skills in Radius also grant Herald Skills deal #% increased Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_288364275": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_288364275",
      "text": "Small Passive Skills in Radius also grant #% increased Projectile Damage if you've dealt a Melee Hit in the past eight seconds",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1590846356": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1590846356",
      "text": "Small Passive Skills in Radius also grant #% increased Damage with Plant Skills",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_462424929": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_462424929",
      "text": "Notable Passive Skills in Radius also grant #% increased Magnitude of Poison you inflict",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_455816363": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_455816363",
      "text": "Small Passive Skills in Radius also grant #% increased Projectile Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2421151933": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2421151933",
      "text": "Small Passive Skills in Radius also grant #% increased Melee Damage if you've dealt a Projectile Attack Hit in the past eight seconds",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3891355829|2": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3891355829|2",
      "text": "Upgrades Radius to Large",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3891355829|1": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3891355829|1",
      "text": "Upgrades Radius to Medium",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_517664839": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_517664839",
      "text": "Small Passive Skills in Radius also grant #% increased Damage with Crossbows",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_4180952808": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_4180952808",
      "text": "Notable Passive Skills in Radius also grant #% increased bonuses gained from Equipped Quiver",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_147764878": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_147764878",
      "text": "Small Passive Skills in Radius also grant #% increased Damage with Hits against Rare and Unique Enemies",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1426522529": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1426522529",
      "text": "Small Passive Skills in Radius also grant #% increased Attack Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2768899959": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2768899959",
      "text": "Small Passive Skills in Radius also grant #% increased Lightning Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3222402650": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3222402650",
      "text": "Small Passive Skills in Radius also grant #% increased Elemental Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1007380041": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1007380041",
      "text": "Small Passive Skills in Radius also grant #% increased Parry Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_255840549": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_255840549",
      "text": "Small Passive Skills in Radius also grant #% increased Hazard Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2638756573": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2638756573",
      "text": "Small Passive Skills in Radius also grant Companions have #% increased maximum Life",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1777421941": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1777421941",
      "text": "Notable Passive Skills in Radius also grant #% increased Projectile Speed",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_179541474": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_179541474",
      "text": "Notable Passive Skills in Radius also grant #% increased Effect of your Mark Skills",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3752589831": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3752589831",
      "text": "Small Passive Skills in Radius also grant #% increased Damage while you have an active Charm",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_4092130601": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_4092130601",
      "text": "Notable Passive Skills in Radius also grant #% increased Magnitude of Damaging Ailments you inflict with Critical Hits",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2809428780": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2809428780",
      "text": "Small Passive Skills in Radius also grant #% increased Damage with Spears",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2912416697": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2912416697",
      "text": "Notable Passive Skills in Radius also grant #% increased Blind Effect",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1321104829": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1321104829",
      "text": "Notable Passive Skills in Radius also grant #% increased Magnitude of Ailments you inflict",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2066964205": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2066964205",
      "text": "Notable Passive Skills in Radius also grant #% increased Flask Charges gained",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1060572482": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1060572482",
      "text": "#% increased Effect of Small Passive Skills in Radius",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3513818125": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3513818125",
      "text": "Small Passive Skills in Radius also grant #% increased Shock Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3173882956": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3173882956",
      "text": "Notable Passive Skills in Radius also grant Damaging Ailments deal damage #% faster",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2580617872": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2580617872",
      "text": "Notable Passive Skills in Radius also grant #% increased Slowing Potency of Debuffs on You",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1352561456": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1352561456",
      "text": "Notable Passive Skills in Radius also grant #% increased Critical Damage Bonus for Attack Damage",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2320654813": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2320654813",
      "text": "Notable Passive Skills in Radius also grant #% increased Charm Charges gained",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_654207792": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_654207792",
      "text": "Small Passive Skills in Radius also grant #% increased Stun Threshold if you haven't been Stunned Recently",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3700202631": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3700202631",
      "text": "Small Passive Skills in Radius also grant #% increased amount of Mana Leeched",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_4234573345": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_4234573345",
      "text": "#% increased Effect of Notable Passive Skills in Radius",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_942519401": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_942519401",
      "text": "Notable Passive Skills in Radius also grant #% increased Life Flask Charges gained",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3171212276": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3171212276",
      "text": "Notable Passive Skills in Radius also grant #% increased Mana Flask Charges gained",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1800303440": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1800303440",
      "text": "Notable Passive Skills in Radius also grant #% chance to Pierce an Enemy",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_4162678661": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_4162678661",
      "text": "Small Passive Skills in Radius also grant Mark Skills have #% increased Skill Effect Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2610562860": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2610562860",
      "text": "Small Passive Skills in Radius also grant #% chance to Blind Enemies on Hit with Attacks",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1514844108": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1514844108",
      "text": "Notable Passive Skills in Radius also grant #% increased Parried Debuff Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_127081978": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_127081978",
      "text": "Notable Passive Skills in Radius also grant #% increased Freeze Buildup with Quarterstaves",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_980177976": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_980177976",
      "text": "Small Passive Skills in Radius also grant #% increased Life Recovery from Flasks",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3088348485": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3088348485",
      "text": "Small Passive Skills in Radius also grant #% increased Charm Effect Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3774951878": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3774951878",
      "text": "Small Passive Skills in Radius also grant #% increased Mana Recovery from Flasks",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2202308025": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2202308025",
      "text": "Small Passive Skills in Radius also grant Mark Skills have #% increased Use Speed",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3865605585": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3865605585",
      "text": "Notable Passive Skills in Radius also grant #% increased Critical Hit Chance for Attacks",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2256120736": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2256120736",
      "text": "Notable Passive Skills in Radius also grant Debuffs on you expire #% faster",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1495814176": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1495814176",
      "text": "Notable Passive Skills in Radius also grant #% increased Stun Threshold while Parrying",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1944020877": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1944020877",
      "text": "Notable Passive Skills in Radius also grant #% increased Pin Buildup",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3409275777": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3409275777",
      "text": "Small Passive Skills in Radius also grant #% increased Elemental Ailment Threshold",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_138421180": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_138421180",
      "text": "Notable Passive Skills in Radius also grant #% increased Critical Damage Bonus with Spears",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1773308808": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1773308808",
      "text": "Small Passive Skills in Radius also grant #% increased Flask Effect Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1266413530": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1266413530",
      "text": "Notable Passive Skills in Radius also grant #% increased Attack Speed with Spears",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_4258000627": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_4258000627",
      "text": "Small Passive Skills in Radius also grant Dazes on Hit",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_221701169": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_221701169",
      "text": "Notable Passive Skills in Radius also grant #% increased Poison Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2822644689": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2822644689",
      "text": "Notable Passive Skills in Radius also grant #% increased Attack Speed",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2149603090": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2149603090",
      "text": "Notable Passive Skills in Radius also grant #% increased Cooldown Recovery Rate",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1039268420": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1039268420",
      "text": "Small Passive Skills in Radius also grant #% increased chance to Shock",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2840989393": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2840989393",
      "text": "Small Passive Skills in Radius also grant #% chance to Poison on Hit",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3641543553": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3641543553",
      "text": "Notable Passive Skills in Radius also grant #% increased Attack Speed with Bows",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_111835965": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_111835965",
      "text": "Notable Passive Skills in Radius also grant #% increased Attack Speed with Quarterstaves",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_4258720395": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_4258720395",
      "text": "Notable Passive Skills in Radius also grant Projectiles have #% chance for an additional Projectile when Forking",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2272980012": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2272980012",
      "text": "Notable Passive Skills in Radius also grant #% increased Duration of Damaging Ailments on Enemies",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_844449513": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_844449513",
      "text": "Notable Passive Skills in Radius also grant #% increased Movement Speed",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_715957346": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_715957346",
      "text": "Notable Passive Skills in Radius also grant #% increased Attack Speed with Crossbows",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2334956771": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2334956771",
      "text": "Notable Passive Skills in Radius also grant Projectiles have #% chance to Chain an additional time from terrain",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3856744003": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3856744003",
      "text": "Notable Passive Skills in Radius also grant #% increased Crossbow Reload Speed",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1323216174": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1323216174",
      "text": "Notable Passive Skills in Radius also grant #% increased Duration of Ignite, Shock and Chill on Enemies",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_412709880": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_412709880",
      "text": "Notable Passive Skills in Radius also grant #% increased chance to inflict Ailments",
      "type": "explicit"
    },
    "Desecrated\u0000desecrated.stat_2748665614": {
      "group": "Desecrated",
      "id": "desecrated.stat_2748665614",
      "text": "#% increased maximum Mana",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_458438597": {
      "group": "Desecrated",
      "id": "desecrated.stat_458438597",
      "text": "#% of Damage is taken from Mana before Life",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_472520716": {
      "group": "Desecrated",
      "id": "desecrated.stat_472520716",
      "text": "#% of Damage taken Recouped as Mana",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_983749596": {
      "group": "Desecrated",
      "id": "desecrated.stat_983749596",
      "text": "#% increased maximum Life",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_1177404658": {
      "group": "Desecrated",
      "id": "desecrated.stat_1177404658",
      "text": "#% increased Global Armour, Evasion and Energy Shield",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_1444556985": {
      "group": "Desecrated",
      "id": "desecrated.stat_1444556985",
      "text": "#% of Damage taken Recouped as Life",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_4101445926": {
      "group": "Desecrated",
      "id": "desecrated.stat_4101445926",
      "text": "#% increased Mana Cost Efficiency",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_3566150527": {
      "group": "Desecrated",
      "id": "desecrated.stat_3566150527",
      "text": "Notable Passive Skills in Radius also grant Regenerate #% of maximum Life per second",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_1034611536": {
      "group": "Desecrated",
      "id": "desecrated.stat_1034611536",
      "text": "Notable Passive Skills in Radius also grant Charms gain # charge per Second",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_2200293569": {
      "group": "Desecrated",
      "id": "desecrated.stat_2200293569",
      "text": "Mana Flasks gain # charges per Second",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_2135541924": {
      "group": "Desecrated",
      "id": "desecrated.stat_2135541924",
      "text": "Notable Passive Skills in Radius also grant Hits have #% increased Critical Hit Chance against you",
      "type": "desecrated"
    },
    "Desecrated\u0000desecrated.stat_1102738251": {
      "group": "Desecrated",
      "id": "desecrated.stat_1102738251",
      "text": "Life Flasks gain # charges per Second",
      "type": "desecrated"
    },
    "Corrupted Implicits\u0000enchant.stat_1658498488": {
      "group": "Corrupted Implicits",
      "id": "enchant.stat_1658498488",
      "text": "Corrupted Blood cannot be inflicted on you",
      "type": "enchant"
    },
    "Corrupted Implicits\u0000enchant.stat_3429557654": {
      "group": "Corrupted Implicits",
      "id": "enchant.stat_3429557654",
      "text": "Immune to Maim",
      "type": "enchant"
    },
    "Corrupted Implicits\u0000enchant.stat_1671376347": {
      "group": "Corrupted Implicits",
      "id": "enchant.stat_1671376347",
      "text": "#% to Lightning Resistance",
      "type": "enchant"
    },
    "Corrupted Implicits\u0000enchant.stat_4220027924": {
      "group": "Corrupted Implicits",
      "id": "enchant.stat_4220027924",
      "text": "#% to Cold Resistance",
      "type": "enchant"
    },
    "Corrupted Implicits\u0000enchant.stat_328541901": {
      "group": "Corrupted Implicits",
      "id": "enchant.stat_328541901",
      "text": "# to Intelligence",
      "type": "enchant"
    },
    "Corrupted Implicits\u0000enchant.stat_3261801346": {
      "group": "Corrupted Implicits",
      "id": "enchant.stat_3261801346",
      "text": "# to Dexterity",
      "type": "enchant"
    },
    "Corrupted Implicits\u0000enchant.stat_3372524247": {
      "group": "Corrupted Implicits",
      "id": "enchant.stat_3372524247",
      "text": "#% to Fire Resistance",
      "type": "enchant"
    },
    "Corrupted Implicits\u0000enchant.stat_4080418644": {
      "group": "Corrupted Implicits",
      "id": "enchant.stat_4080418644",
      "text": "# to Strength",
      "type": "enchant"
    },
    "Corrupted Implicits\u0000enchant.stat_2923486259": {
      "group": "Corrupted Implicits",
      "id": "enchant.stat_2923486259",
      "text": "#% to Chaos Resistance",
      "type": "enchant"
    },
    "Corrupted Implicits\u0000enchant.stat_1436284579": {
      "group": "Corrupted Implicits",
      "id": "enchant.stat_1436284579",
      "text": "Cannot be Blinded",
      "type": "enchant"
    },
    "Corrupted Implicits\u0000enchant.stat_721014846": {
      "group": "Corrupted Implicits",
      "id": "enchant.stat_721014846",
      "text": "You cannot be Hindered",
      "type": "enchant"
    },
    "Prefixes\u0000explicit.stat_3395186672": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3395186672",
      "text": "Small Passive Skills in Radius also grant Empowered Attacks deal #% increased Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1896066427": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1896066427",
      "text": "Small Passive Skills in Radius also grant Damage Penetrates #% Cold Resistance",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1417267954": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1417267954",
      "text": "Small Passive Skills in Radius also grant #% increased Global Physical Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3821543413": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3821543413",
      "text": "Notable Passive Skills in Radius also grant #% increased Block chance",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3665922113": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3665922113",
      "text": "Small Passive Skills in Radius also grant #% increased maximum Energy Shield",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_4142814612": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_4142814612",
      "text": "Small Passive Skills in Radius also grant Banner Skills have #% increased Area of Effect",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1892122971": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1892122971",
      "text": "Small Passive Skills in Radius also grant #% increased Damage if you have Consumed a Corpse Recently",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_139889694": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_139889694",
      "text": "Small Passive Skills in Radius also grant #% increased Fire Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1852184471": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1852184471",
      "text": "Small Passive Skills in Radius also grant #% increased Damage with Maces",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3936121440": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3936121440",
      "text": "Notable Passive Skills in Radius also grant #% increased Withered Magnitude",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_266564538": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_266564538",
      "text": "Small Passive Skills in Radius also grant #% increased Damage while Shapeshifted",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_318092306": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_318092306",
      "text": "Small Passive Skills in Radius also grant Attack Hits apply Incision",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3429148113": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3429148113",
      "text": "Notable Passive Skills in Radius also grant #% increased Armour, Evasion and Energy Shield from Equipped Shield",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3391917254": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3391917254",
      "text": "Notable Passive Skills in Radius also grant #% increased Area of Effect",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1846980580": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1846980580",
      "text": "Notable Passive Skills in Radius also grant # to Maximum Rage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_442393998": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_442393998",
      "text": "Small Passive Skills in Radius also grant #% increased Totem Life",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1337740333": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1337740333",
      "text": "Small Passive Skills in Radius also grant #% increased Melee Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2108821127": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2108821127",
      "text": "Small Passive Skills in Radius also grant #% increased Totem Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1320662475": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1320662475",
      "text": "Small Passive Skills in Radius also grant #% increased Thorns damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1834658952": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1834658952",
      "text": "Small Passive Skills in Radius also grant #% increased Damage against Enemies with Fully Broken Armour",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1432756708": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1432756708",
      "text": "Small Passive Skills in Radius also grant Damage Penetrates #% Fire Resistance",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_253641217": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_253641217",
      "text": "Notable Passive Skills in Radius also grant #% increased Ignite Magnitude",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2442527254": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2442527254",
      "text": "Small Passive Skills in Radius also grant #% increased Cold Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2954360902": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2954360902",
      "text": "Small Passive Skills in Radius also grant Minions deal #% increased Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1160637284": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1160637284",
      "text": "Small Passive Skills in Radius also grant #% increased Damage with Warcries",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_391602279": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_391602279",
      "text": "Notable Passive Skills in Radius also grant #% increased Magnitude of Bleeding you inflict",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_473917671": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_473917671",
      "text": "Small Passive Skills in Radius also grant Triggered Spells deal #% increased Spell Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_378796798": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_378796798",
      "text": "Small Passive Skills in Radius also grant Minions have #% increased maximum Life",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3859848445": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3859848445",
      "text": "Notable Passive Skills in Radius also grant #% increased Area of Effect of Curses",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1137305356": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1137305356",
      "text": "Small Passive Skills in Radius also grant #% increased Spell Damage",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2107703111": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2107703111",
      "text": "Small Passive Skills in Radius also grant Offerings have #% increased Maximum Life",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_944643028": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_944643028",
      "text": "Small Passive Skills in Radius also grant #% chance to inflict Bleeding on Hit",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3858398337": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3858398337",
      "text": "Small Passive Skills in Radius also grant #% increased Armour",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_4089835882": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_4089835882",
      "text": "Small Passive Skills in Radius also grant Break #% increased Armour",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3419203492": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3419203492",
      "text": "Notable Passive Skills in Radius also grant #% increased Energy Shield from Equipped Focus",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2534359663": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2534359663",
      "text": "Notable Passive Skills in Radius also grant Minions have #% increased Area of Effect",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_4032352472": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_4032352472",
      "text": "Notable Passive Skills in Radius also grant #% increased Presence Area of Effect",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_2770044702": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_2770044702",
      "text": "Notable Passive Skills in Radius also grant #% increased Curse Magnitudes",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_3394832998": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_3394832998",
      "text": "Notable Passive Skills in Radius also grant #% faster start of Energy Shield Recharge",
      "type": "explicit"
    },
    "Prefixes\u0000explicit.stat_1309799717": {
      "affix": "prefix",
      "group": "Prefixes",
      "id": "explicit.stat_1309799717",
      "text": "Small Passive Skills in Radius also grant #% increased Chaos Damage",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_830345042": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_830345042",
      "text": "Small Passive Skills in Radius also grant #% increased Freeze Threshold",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2969557004": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2969557004",
      "text": "Notable Passive Skills in Radius also grant Gain # Rage on Melee Hit",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2466785537": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2466785537",
      "text": "Notable Passive Skills in Radius also grant #% increased Critical Spell Damage Bonus",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_61644361": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_61644361",
      "text": "Notable Passive Skills in Radius also grant #% increased Chill Duration on Enemies",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3669820740": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3669820740",
      "text": "Notable Passive Skills in Radius also grant #% of Damage taken Recouped as Life",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3386297724": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3386297724",
      "text": "Notable Passive Skills in Radius also grant #% of Skill Mana Costs Converted to Life Costs",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3225608889": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3225608889",
      "text": "Small Passive Skills in Radius also grant Minions have #% to all Elemental Resistances",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2131720304": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2131720304",
      "text": "Notable Passive Skills in Radius also grant Gain # Rage when Hit by an Enemy",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_593241812": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_593241812",
      "text": "Notable Passive Skills in Radius also grant Minions have #% increased Critical Damage Bonus",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3628935286": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3628935286",
      "text": "Notable Passive Skills in Radius also grant Minions have #% increased Critical Hit Chance",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_394473632": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_394473632",
      "text": "Small Passive Skills in Radius also grant #% increased Flammability Magnitude",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_484792219": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_484792219",
      "text": "Small Passive Skills in Radius also grant #% increased Stun Threshold",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2976476845": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2976476845",
      "text": "Notable Passive Skills in Radius also grant #% increased Knockback Distance",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1505023559": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1505023559",
      "text": "Notable Passive Skills in Radius also grant #% increased Bleeding Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3579898587": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3579898587",
      "text": "Notable Passive Skills in Radius also grant #% increased Skill Speed while Shapeshifted",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3256879910": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3256879910",
      "text": "Small Passive Skills in Radius also grant #% increased Mana Regeneration Rate",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2849546516": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2849546516",
      "text": "Notable Passive Skills in Radius also grant Meta Skills gain #% increased Energy",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2392824305": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2392824305",
      "text": "Notable Passive Skills in Radius also grant #% increased Stun Buildup with Maces",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1756380435": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1756380435",
      "text": "Small Passive Skills in Radius also grant Minions have #% to Chaos Resistance",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3106718406": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3106718406",
      "text": "Notable Passive Skills in Radius also grant Minions have #% increased Attack and Cast Speed",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_504915064": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_504915064",
      "text": "Notable Passive Skills in Radius also grant #% increased Armour Break Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2359002191": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2359002191",
      "text": "Notable Passive Skills in Radius also grant #% increased Critical Damage Bonus",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1185341308": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1185341308",
      "text": "Notable Passive Skills in Radius also grant #% increased Life Regeneration rate",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_30438393": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_30438393",
      "text": "Small Passive Skills in Radius also grant Minions have #% additional Physical Damage Reduction",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_4173554949": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_4173554949",
      "text": "Notable Passive Skills in Radius also grant #% increased Stun Buildup",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2704905000": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2704905000",
      "text": "Notable Passive Skills in Radius also grant #% increased Critical Hit Chance for Spells",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_693237939": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_693237939",
      "text": "Small Passive Skills in Radius also grant Gain additional Ailment Threshold equal to #% of maximum Energy Shield",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2056107438": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2056107438",
      "text": "Notable Passive Skills in Radius also grant #% increased Warcry Cooldown Recovery Rate",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2709646369": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2709646369",
      "text": "Notable Passive Skills in Radius also grant #% of Damage is taken from Mana before Life",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1022759479": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1022759479",
      "text": "Notable Passive Skills in Radius also grant #% increased Cast Speed",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1653682082": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1653682082",
      "text": "Small Passive Skills in Radius also grant Gain additional Stun Threshold equal to #% of maximum Energy Shield",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2077117738": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2077117738",
      "text": "Notable Passive Skills in Radius also grant #% increased Critical Hit Chance",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1087108135": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1087108135",
      "text": "Small Passive Skills in Radius also grant #% increased Curse Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1145481685": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1145481685",
      "text": "Small Passive Skills in Radius also grant #% increased Totem Placement speed",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3113764475": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3113764475",
      "text": "Notable Passive Skills in Radius also grant #% increased Skill Effect Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1602294220": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1602294220",
      "text": "Small Passive Skills in Radius also grant #% increased Warcry Speed",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2907381231": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2907381231",
      "text": "Notable Passive Skills in Radius also grant #% increased Glory generation for Banner Skills",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2374711847": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2374711847",
      "text": "Notable Passive Skills in Radius also grant Offering Skills have #% increased Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_1087531620": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_1087531620",
      "text": "Notable Passive Skills in Radius also grant #% increased Freeze Buildup",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2726713579": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2726713579",
      "text": "Notable Passive Skills in Radius also grant Recover #% of maximum Life on Kill",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_2690740379": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_2690740379",
      "text": "Small Passive Skills in Radius also grant Banner Skills have #% increased Duration",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_525523040": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_525523040",
      "text": "Notable Passive Skills in Radius also grant Recover #% of maximum Mana on Kill",
      "type": "explicit"
    },
    "Suffixes\u0000explicit.stat_3666476747": {
      "affix": "suffix",
      "group": "Suffixes",
      "id": "explicit.stat_3666476747",
      "text": "Small Passive Skills in Radius also grant #% increased amount of Life Leeched",
      "type": "explicit"
    }
  }
};
  const BUNDLED_DATA = globalThis.Poe2BundledIconData || (typeof require === "function" ? require("./poe2-bundled-icon-data.js") : {});
  const BUNDLED_ICONS = BUNDLED_DATA.mappings?.jewels || {};
  const BUNDLED_FALLBACK = BUNDLED_DATA.fallbackPath || "assets/item-icons/fallback.webp";
  const JEWEL_BASES = Object.freeze(SNAPSHOT.bases.map((base) => Object.freeze({ ...base, icon: BUNDLED_ICONS[base.key] || BUNDLED_FALLBACK })));
  const JEWEL_STATS = Object.freeze(SNAPSHOT.stats);
  const JEWEL_STAT_GROUP_ORDER = Object.freeze(["Prefixes", "Suffixes", "Desecrated", "Vaal Implicits", "Corrupted Implicits"]);
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

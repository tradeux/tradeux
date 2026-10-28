# PoE1 and PoE2 support: implementation requirements and plan

Prepared: 2026-10-28. Target PoE1 catalogue: Allflame, version 3.29.
Status: implementation specification; application changes have not started.

## 1. Objective and agreed scope

Maintain one extension, one shared interface and separate game adapters/data for
PoE1 `/trade/*` and PoE2 `/trade2/*`. Preserve existing PoE2 behavior and settings.
The page determines the game automatically. Reuse the existing menus, cards,
selectors, settings controls, styling and native-form interactions.

PoE1 presets: **Uniques, Bases, Flasks, Maps, Beasts, Gems and Jewels**.
Prepare curated preset properties only for **Maps and Flasks** in this pass.
Beasts contain named red beasts and one generic Yellow Beast option.
Maps exclude Charts in this pass. Exclude Standard-only legacy entries from
the PoE1 catalogue and curated properties.

The current user instructions supersede older documentation requiring PoE1
to remain disabled. Update those obsolete requirements during implementation;
retain the other architectural and testing rules.

## 2. Boundaries and non-goals

- No replacement interface, separate catalogue panel, redesigned modal,
  manual game switch, or new interaction pattern without user approval.
- Add the agreed presets and quick filters through existing component patterns.
- Preserve native trade search as the source of truth. Do not create a parallel
  query engine or automatically submit trades/messages.
- No Charts, separate Charms/Tablets presets, or extra content presets in PoE1.
- No curated gear, jewel, gem, beast or unique modifier pools in this pass.
  This does not disable native stat search, existing item-detail display or
  generic result-modifier actions when a valid PoE1 mapping is available.
- No PoE2 catalogue cleanup or feature removals as a side effect of PoE1 work.
- No automatic league switching, new legacy toggle or silently selected league.
  Respect the site's selected league; this delivery's PoE1 data targets Allflame.
- Do not publish an extension/store update as part of implementation without
  separate authorization. Local builds and a reviewable package are deliverables.

## 3. Architecture requirements

Suggested source layout, preserving current feature boundaries:

```text
C:/TradeStyler/src/
  content/                  shared features, UI and composition
  games/
    types.ts                common typed contracts
    poe1/
      config.ts             capabilities, presets, routes and source metadata
      filters.ts            native field mappings and quick-filter definitions
      native-form.ts        PoE1-specific host form behavior
      data/                 generated runtime catalogues
    poe2/
      config.ts
      filters.ts
      native-form.ts
      data/
  entrypoints/
    poe1.ts                 start shared app with PoE1 dependencies
    poe2.ts                 start shared app with PoE2 dependencies
```

Use separate entry bundles in one manifest/package. Each site's script entry
loads only its own game data plus shared code. Shared code may be bundled into
both outputs; do not maintain copied feature source files. Existing generated
PoE2 modules can remain behind adapters during migration rather than forcing
an unrelated data-format rewrite.

The game contract must expose:

- game identity and supported search/exchange route classification;
- official stats/items/filter endpoints and wiki link builder;
- preset definitions, available capabilities and catalogue providers;
- quick-filter definitions, native field identities and applicability;
- native group policies and host-form adapter;
- data version, target league metadata and storage/cache namespace.

Prefer configuration for labels, lists and capabilities; use adapter functions
for actual behavioral differences. Avoid scattered `isPoe1`/`isPoe2` branches,
fake empty PoE2 data dependencies, a general plugin framework, or a giant shared
controller. Do not initialize unsupported feature modules.

Use stable native filter IDs/group IDs where available. Keep any required
label/selector matching inside the adapter. A missing or ambiguous host control
must not silently bind to a similar field. Preserve the site's normal controls
when decoration cannot be safely applied.

Keep existing rules: strict types, small injected ports, no explicit `any` or
TypeScript suppression, composition-owned cross-feature wiring, idempotent DOM
decoration, and complete teardown of listeners/observers/timers.

### Existing integration points

| Current location | Required change |
| --- | --- |
| `manifest.json` | Site-specific script declarations; retain narrow permissions. |
| `src/content/index.ts`, `composition/app.ts` | Accept game dependencies; replace hardcoded PoE2 preset construction. |
| `composition/legacy-dependencies.ts`, `ports.ts` | Isolate legacy globals; add typed game/capability contracts. |
| `src/styler.js` | Centralize route detection and extract game-specific quick bounds. |
| `quick-filter-definitions.ts`, `quick-filters.ts` | Receive game definitions and field adapters. |
| `presets/state.ts`, `controller.ts`, `base-menu.ts` | Support Maps/Beasts and hybrid/utility flasks through existing UI. |
| `presets/native-form.ts`, `group-policy.ts` | Implement each game's native field/group behavior. |
| `stat-filters/catalog.ts` | Remove hardcoded `/api/trade2/data/stats`; isolate caches. |
| Gear/Gem/Jewel/Unique helpers | Remove repeated PoE2-only guards and hardcoded source URLs. |
| `settings/controller.ts`, `settings/model.ts` | Versioned settings migration and game isolation. |
| `package.json`, `tsconfig.json`, `.gitignore`, packaging script | Build/typecheck/include both entry bundles and all referenced assets. |

Maintenance scripts, source snapshots, provenance and tests remain in
`C:/TradeStylerWork`. Only required runtime data/assets belong in the extension.

## 4. Catalogue requirements

| Preset | Required content and behavior |
| --- | --- |
| Uniques | Current obtainable PoE1 uniques, including obtainable Replica and other legitimate variants. Preserve exact name/base/discriminator identity. Reuse helper search, type navigation, favourites and cards. PoE2 Runeforged handling is disabled for PoE1. |
| Bases | Current equipment bases using existing slot/category navigation. Include PoE1 distinctions such as Rune Daggers, Thrusting Swords, Warstaves and applicable defence families. Remove PoE2-only classes. Classify PoE1 Talismans as amulets. |
| Flasks | Verified 48 non-unique bases: 12 life, 12 mana, 6 hybrid and 18 utility. Preserve valid Sanctified Life/Mana Flask bases. Include applicable unique flask selection through existing unique integration. |
| Maps | Regular tier-based Map items and currently obtainable special maps. Cover Nightmare, guardian/influenced, Blighted, Blight-ravaged, Valdo, Vaal Temple and unique maps as supported by exact native identities. Separate their eligible modifier pools. No Charts or historical map series. |
| Beasts | Currently obtainable named red beasts plus generic Yellow Beast, using `monster.redbeast`/`monster.yellowbeast` as appropriate. Use current names, including Craicic Croaker. No ordinary-monster-name expansion or recipe UI. |
| Gems | Current skill/support gems and obtainable Vaal, Transfigured, Awakened, Exceptional, Trarthan and other current variants. Use exact official identities, current details and PoE1 wiki links. Do not carry over PoE2 gem tiers/socket assumptions. |
| Jewels | Crimson/Cobalt/Viridian, Abyss and Small/Medium/Large Cluster bases. Handle special unique-derived bases according to their real acquisition rules; do not infer craftable base status merely from missing API flags. |

Remove Charms and Tablets only from the PoE1 preset configuration. Preserve
their PoE2 implementations. No arbitrary PoE1 catalogue-size targets or
hand-picked market-only subsets.

### Source and legacy policy

1. Use official trade catalogues for exact searchable identities, category IDs
   and stat IDs. They contain historical content and are not league whitelists.
2. Validate current acquisition/rollability against patch notes, wiki and PoEDB.
   Check source dates and reconcile conflicts; current explicit patch changes
   override outdated summary tables.
3. Current Allflame listings corroborate availability. Missing listings or
   absence from poe.ninja is not evidence that an item should be excluded.
4. Exclude explicit legacy variants and confirmed unobtainable entries. Do not
   filter by the word "Legacy" in names. Boss drops, recipes, corruption outcomes,
   divination cards and other obtainable restricted sources remain eligible.
5. Track unresolved candidates in an audit report with reasons. Do not silently
   guess or present an incomplete catalogue as fully validated.
6. Store source URLs, retrieval date, game/patch/league, inclusion/exclusion
   reasons and source identifiers outside runtime bundles. Provide deterministic
   generators and a human-readable added/removed/changed report.
7. Use current artwork from verified sources or the existing fallback asset.
   Never substitute an unrelated item icon. Preserve source attribution/license
   requirements when redistributing assets or descriptions.

Allflame regression examples: current Talisman bases instead of old bases;
current Blightwell on Shield Crab Talisman; no Untainted Paradise map item;
current Craicic Croaker name; tier-based ordinary Maps rather than the old
named-area map catalogue. Atlas area names must not be mistaken for current
regular map item bases.

## 5. Preset properties and native groups

Map properties: current prefix/suffix pools and eligible corruption/special-map
modifiers, with exact native IDs and tier/type restrictions. Include relevant
build restrictions such as no regeneration, no leech, reduced recovery, curses,
maximum-resistance penalties and current Thorns. Do not import old reflect
modifiers or PoE2 Waystone modifiers. Nightmare, Valdo and other special maps
must not expose an indiscriminate union of every map modifier.

Flask properties: eligible recovery, duration/effect, charge-use/recovery,
maximum-charge, charge-generation, defensive, movement and ailment modifiers;
applicable crafted modifiers and Instilling/Enkindling enchantments. Respect
base family, item level, affix group and source restrictions. Exclude legacy
attack/cast-speed utility-flask suffixes. Validate reduced/increased sign and
min/max direction; identical numeric stat suffixes across games do not prove
identical meaning or applicability.

Keep existing compact rows, ordering, prefix/suffix badges where valid, native
autocomplete handoff and include/exclude behavior. Do not label enchantments
as prefixes or suffixes. Preparation of preset properties does not imply new UI.

Native-group policy:

- Maps: Type where needed, Map/Chart group for map fields, Miscellaneous,
  Stat/NOT as applicable, and Trade. Chart-specific controls are not promoted
  or changed by this implementation.
- Flasks: Type, Miscellaneous for quality/item level, relevant requirements,
  Stat/NOT as applicable, and Trade.
- Bases/Uniques: category-appropriate Weapon/Armour/Socket groups plus relevant
  Type, Requirements, Miscellaneous, native Stats and Trade.
- Gems/Jewels/Beasts: only relevant native groups; no equipment groups for beasts.
- Heist/Sanctum/Ultimatum groups are outside these preset configurations.

Use the existing enable/disable and expand/collapse mechanism, keeping native
groups visible. Restore prior presentation on leaving a preset while retaining
native selected values according to current behavior. Do not create empty NOT
groups unnecessarily. General trade controls remain available.

## 6. PoE1 quick-filter requirements

| Control | Requirement |
| --- | --- |
| Rarity | Keep; use PoE1 native options and supported applicability. |
| Corrupted / Crafted / Mirrored | Keep. |
| Fractured | Bind to PoE1 Fractured Item. |
| Desecrated / Sanctified | Remove from PoE1 only. |
| Item Quality | Bind to Quality in Miscellaneous; preserve existing value-entry pattern. |
| Minimum Item Level | Bind to Item Level in Miscellaneous. |
| Maximum required Level / STR / DEX / INT | Keep on relevant items. |
| Augmentable Sockets | Replace with equipment Sockets for PoE1; preserve PoE2 control. |
| Links | Add through existing numeric-control pattern for socketed equipment. |
| Gem Level | Keep for gems; validate legal item-level values, including exceptional cases. Do not blindly retain a 1-21 ceiling. |
| Gem Sockets | Remove from PoE1. |
| Identified / Synthesised Item / Split | Add through existing boolean-control pattern with appropriate applicability. |
| Vaal Gem / Transfigured Gem | Add gem-specific controls using native option values. |

Preserve the existing Any/Yes/No semantics, native synchronization, clear/reset,
settings toggles and wrapping behavior. Avoid displaying useless controls for
a selected item category. Hiding an inapplicable shortcut must not silently
clear a native user-selected value.

Keep native Price, currency, availability, Seller Account, listing age, Sale
Type, account collapsing and Gold Fee. Resolve currencies against PoE1 data.
Do not copy PoE2 Reload Time, Spirit, Runic Ward semantics, augment sockets,
Waystone Revives/Drop Chance or gem sockets into PoE1.

Specialised native controls remain native. This phase does not expand the bar
with every influence, league mechanic or historical flag in the trade API.

## 7. Settings, caches and lifecycle

- Version the stored schema. Share appearance preferences; isolate enabled
  presets/quick filters, favourites and any persisted selections per game.
- Migrate the existing `poe-tradeux-settings` contents into the PoE2 namespace
  and shared appearance preferences. Initialize PoE1 with its own defaults.
- Migration must be idempotent and preserve the original data until a successful
  migration. Opening PoE1 first must not misclassify old PoE2 settings.
- Prevent concurrent PoE1/PoE2 tabs from overwriting each other's preferences.
  Prefer separate game storage keys and scoped writes; handle external changes
  without repeated write loops. Preserve existing valid favourite IDs.
- Cache by game and catalogue version; include league for league-dependent data.
  Do not reuse stat/item caches solely because names or numeric IDs match.
- Reinjection, search-route transitions and teardown must not duplicate controls,
  listeners or observers. Search features must not mount onto exchange forms.
- Shared CSS changes must be tested in both games. Scope genuine game-specific
  adjustments under the game context and reuse existing design tokens.

## 8. Implementation sequence and exit criteria

### Phase 0: baseline and contract

- Record existing working changes without resetting them. Capture PoE2 fixture
  behavior, settings format, package contents and representative screenshots.
- Read current architecture, WAYSTONES and testing instructions. Mark obsolete
  PoE1 prohibition as superseded in the implementation documentation.
- Inventory routes, native selectors, feature capabilities and legacy globals.
- Run the existing extension suite with Node.js 20+; record pre-existing failures.

Exit: agreed contracts and reproducible PoE2 baseline, before behavior changes.

### Phase 1: extract PoE2 configuration

- Introduce typed game contracts and a PoE2 adapter around current data/features.
- Move endpoint, wiki URL, preset, quick-filter and native-group decisions out
  of shared controllers. Consolidate game detection.
- Extend TypeScript coverage to new source directories.

Exit: PoE2 passes its existing behavior checks; UI and catalogue content are
unchanged. No PoE1 runtime enabled yet.

### Phase 2: settings and bundle isolation

- Implement and test settings migration, game-specific keys and caches.
- Add build entry points and manifest/package support for distinct bundles.
- Test unsupported routes and game resolution; keep incomplete PoE1 features
  out of a release package until their validation passes.

Exit: both entry paths use the shared app, load only appropriate data, and
cannot overwrite each other's state.

### Phase 3: generate and audit PoE1 catalogues

- Build source snapshots/generators in TradeStylerWork for the seven presets.
- Produce provenance, identity, variant and legacy-exclusion reports.
- Validate base counts and categories; resolve missing identities/artwork.
- Generate separate map/flask property pools and exact native stat mappings.

Exit: all shipped entries have traceable eligibility; no unresolved candidate
is silently treated as approved. Any completeness gap is reported explicitly.

### Phase 4: integrate PoE1 native behavior

- Implement PoE1 native form/group adapter and the agreed quick filters.
- Connect seven presets using existing controls. Add Maps/Beasts and broader
  flask families without introducing a new UI pattern.
- Enable curated properties only for Maps/Flasks. Preserve generic native stat
  access for other presets and normal searches.
- Verify select/change/clear/deactivate behavior and result-modifier actions.

Exit: each preset produces the intended native selection/filter state and
PoE2 continues to pass regression checks.

### Phase 5: verification, documentation and package

- Add independent PoE1 and PoE2 fixtures based on observed native controls.
- Run focused behavior/data tests, then the extension suite and relevant E2E.
- Validate real search pages for both games, including existing user search
  state and exchange-route isolation. Use authorised browser tooling; no
  credential/session inspection or unsupported script injection.
- Update README, architecture, testing notes and obsolete PoE2-only guidance.
- Rebuild shipped outputs and verify the ZIP contains every manifest-referenced
  bundle, catalogue and asset, with no maintenance snapshots or unrelated files.
- Deliver a local reviewable package, test report and remaining limitations.

Exit: acceptance checklist below passes. Store publication remains separate.

## 9. Acceptance checklist

- [ ] One extension works on both supported search sites with automatic routing.
- [ ] PoE2 visuals, presets, data, quick filters and saved preferences are preserved.
- [ ] PoE1 displays exactly the seven agreed presets; no Charts/Charms/Tablets.
- [ ] Beasts contain named red entries plus one generic Yellow Beast option.
- [ ] Current ordinary map identity is tier-based; special pools stay separate.
- [ ] All 48 verified flask bases are available; properties respect eligibility.
- [ ] PoE1 quick filters match the approved matrix and native form state.
- [ ] Only Maps/Flasks use new curated property pools; native stats remain usable.
- [ ] Legacy examples are excluded and legitimate restricted-source items remain.
- [ ] Data reports expose provenance, exclusions, unresolved records and diffs.
- [ ] Settings migration survives repeated startup and concurrent game tabs.
- [ ] Invalid selectors/unsupported fields do not trigger unrelated native inputs.
- [ ] No duplicated controls after navigation, rerender or reinjection.
- [ ] Both fixtures pass at 1920x1080 and 1440x900 at 100% zoom for affected layouts.
- [ ] Real PoE1/PoE2 checks confirm native handoff and result modifier behavior.
- [ ] Typecheck/build/tests pass, or any pre-existing failures are clearly separated.
- [ ] Package integrity passes; no extra permissions added without justification.
- [ ] No unapproved interface redesign or external publication.

Tests should cover observable behavior and meaningful failure cases, not merely
assert that source code contains particular strings. Update obsolete manifest
tests that forbid PoE1 while retaining unsupported-route coverage. Ensure newly
added tests are included in the explicitly enumerated test script.

## 10. Sources and maintenance guidance

Recheck these at implementation time rather than treating this plan as a frozen
dump of every item or modifier:

- [PoE1 item identities](https://www.pathofexile.com/api/trade/data/items)
- [PoE1 native filters](https://www.pathofexile.com/api/trade/data/filters)
- [PoE1 stat catalogue](https://www.pathofexile.com/api/trade/data/stats)
- [PoE2 native filters](https://www.pathofexile.com/api/trade2/data/filters)
- [Allflame patch notes](https://www.pathofexile.com/forum/view-thread/3985332)
- [Allflame item additions](https://www.pathofexile.com/forum/view-thread/3986972)
- [Map mechanics and migration history](https://www.poewiki.net/wiki/Map)
- [Map modifier eligibility](https://www.poewiki.net/wiki/List_of_map_mods)
- [Flask mechanics and historical changes](https://www.poewiki.net/wiki/Flask)
- [Flask bases](https://poedb.tw/us/Flasks)
- [Utility flask data and enchantments](https://poedb.tw/us/Utility_Flasks)
- [Jewel families and special bases](https://www.poewiki.net/wiki/Jewel)
- [Chrome content script declarations](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts)

For a league refresh: update the game-specific source snapshot, regenerate data,
review additions/removals and eligibility changes, validate native IDs, run that
game's data/behavior checks plus shared regressions, and record the new version.
Routine data updates should not require editing shared UI controllers.

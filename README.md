# POE TradeUX

POE TradeUX is a Chrome extension that improves the Path of Exile 2 trade-search interface. It adds compact search helpers, item presets, stat-filter tools, and optional layout changes while continuing to use the site's native trade form.

The extension supports Path of Exile 2 pages under `/trade2/*`. It does not run on Path of Exile 1 `/trade/*` pages.

## Features

### Layout and appearance

- Two-column layout with filters on the left and results on the right.
- Full-width layout up to 1920 pixels.
- Sticky filters and search controls.
- Optional removal of the page background.
- Optional hiding of ornamental corner artwork across modals and popovers.
- Optional 400-pixel space for the Better Trading extension.
- Experimental hiding of prefixes and suffixes that are not relevant to the current preset.

Open **TradeUX** on a supported trade page to change these settings. Preferences and favorites are saved through Chrome storage.

### Faster trade filters

- Quick rarity selection.
- One-click toggles for corrupted, fractured, desecrated, crafted, mirrored, and sanctified items.
- Quick minimum values for item quality and augmentable sockets.
- Gem-level and gem-socket controls when a gem is selected.
- A clear-search action for quickly resetting the native form.

### Item presets and helpers

- Presets for Waystones, Tablets, Charms, Flasks, Gems, Gear, and Jewels.
- Tier or base selection that hands the choice to the site's native controls.
- Gear browser organized by equipment slot and base type.
- Skill Gem browser with search, tags, attributes, sorting, and favorites.
- Jewel selection helper.
- Unique Helper with item-type navigation, search, required-level filters, favorites, and Runeforged variants.
- Corruption implicit information for supported item bases.

### Stat-filter tools

- Favorite commonly used stat filters.
- Cleaner grouping and ordering of stat options for active presets.
- Native autocomplete integration rather than replacing the trade form.
- Compact `+` and `−` actions on result modifiers to add a stat to a positive group or a `NOT` group.

## Install in Chrome

The repository includes the compiled browser bundle. Installing the extension
does not require Node.js, npm, or a build step.

### Requirements

- Google Chrome or another Chromium browser that supports unpacked Manifest V3 extensions.

### Load the unpacked extension

1. Download or clone the project and extract it if necessary.
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode**.
4. Select **Load unpacked**.
5. Choose the project folder containing `manifest.json`.
6. Open or refresh a Path of Exile 2 trade-search page under `https://www.pathofexile.com/trade2/`.
7. Open **TradeUX** in the upper-right area of the trade page to configure the layout.

If the extension was already loaded, select its reload button on `chrome://extensions`, then refresh the trade page.

## Development

Node.js 20 or newer and npm are needed only when changing the TypeScript
source. Install the development dependencies once:

```powershell
npm install
```

Available development commands:

```powershell
npm run build              # Build dist/content.js once
npm run build:watch        # Rebuild when TypeScript files change
npm run typecheck          # Run TypeScript checks
npm test                   # Run the extension suite from TradeStylerWork
npm run package:extension  # Write a Chrome package to TradeStylerWork/release
```

Maintenance scripts, source metadata, design prototypes, product-site pages,
store media, screenshots, and browser-test tooling live in the sibling
`TradeStylerWork` workspace. Generated files needed by Chrome remain here.

After changing TypeScript, include the rebuilt `dist/content.js` with the
source change so downloaded copies remain directly installable.

Typical development loop:

1. Run `npm run build:watch`.
2. Make changes under `src/`.
3. Reload the unpacked extension on `chrome://extensions`.
4. Refresh the trade page.
5. Run `npm test` before finishing the change.

## Project structure

```text
assets/             Bundled icons, fonts, and item artwork
dist/               Included, ready-to-load content-script bundle
scripts/            Extension packaging
src/content/        TypeScript feature modules
src/*.js            Runtime data and compatibility modules
manifest.json       Chrome Manifest V3 configuration
```

The extension is injected only into supported Path of Exile 2 trade pages. Its only Chrome permission is `storage`, used for settings and favorites.

## Privacy

POE TradeUX does not request access to browsing history, cookies, credentials,
or account session data. See the published [privacy policy](https://tradeux.github.io/tradeux/privacy-policy.html)
for the complete statement.

## Troubleshooting

- **The TradeUX control does not appear:** confirm the URL contains `/trade2/`, reload the extension, and refresh the page.
- **Chrome reports a missing file:** download or extract the complete project again and confirm that `dist/content.js` exists.
- **Changes do not appear:** rebuild, reload the extension from `chrome://extensions`, and refresh the trade page.
- **The extension appears on PoE 1 trade:** remove and reload the unpacked extension; the current manifest is intentionally limited to `/trade2/*`.

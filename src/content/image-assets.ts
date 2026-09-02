const FALLBACK_PATH = "assets/item-icons/fallback.webp";

function resolveAssetBaseUrl(): string {
  const extensionRuntime = (globalThis as typeof globalThis & {
    chrome?: { runtime?: { getURL?: (path: string) => string } };
  }).chrome?.runtime;

  const pageOrigin = (globalThis as typeof globalThis & {
    location?: { origin?: string };
  }).location?.origin || "https://www.pathofexile.com";

  if (extensionRuntime?.getURL) {
    try {
      return extensionRuntime.getURL("");
    } catch {
      // Chrome invalidates runtime APIs when an unpacked extension is reloaded.
      // Falling back keeps an already-open trade tab from flooding extension
      // errors until the user refreshes it.
    }
  }

  return new URL("/", pageOrigin).href;
}

const ASSET_BASE_URL = resolveAssetBaseUrl();

function extensionAssetUrl(path: string): string {
  return new URL(path, ASSET_BASE_URL).href;
}

export const GENERIC_ITEM_FALLBACK_ICON = extensionAssetUrl(FALLBACK_PATH);

export function getSafeItemImageUrl(source: unknown): string {
  const value = String(source || "").trim();
  if (value === "assets/ui/user-level-requirement.png") {
    return extensionAssetUrl(value);
  }
  if (
    /^assets\/item-icons\/(?:[a-f0-9-]+|quick-filter-(?:strength|dexterity|intelligence))\.webp$/i.test(
      value
    )
  ) {
    return extensionAssetUrl(value);
  }
  if (
    /^https:\/\/web\.poecdn\.com\/gen\/image\/[A-Za-z0-9_-]+\/[a-f0-9]+\/[A-Za-z0-9._-]+$/i.test(value)
  ) {
    return value;
  }
  return GENERIC_ITEM_FALLBACK_ICON;
}

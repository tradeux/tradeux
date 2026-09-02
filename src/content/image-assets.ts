const FALLBACK_PATH = "assets/item-icons/fallback.webp";
const INERT_IMAGE_DATA_URL =
  "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";

function resolveAssetBaseUrl(): string | null {
  const extensionRuntime = (globalThis as typeof globalThis & {
    chrome?: { runtime?: { getURL?: (path: string) => string } };
  }).chrome?.runtime;

  if (extensionRuntime?.getURL) {
    try {
      return extensionRuntime.getURL("");
    } catch {
      // Chrome invalidates runtime APIs when an unpacked extension is reloaded.
      // An inert data URL below keeps a stale trade tab from making page-origin
      // image requests until the user refreshes it.
    }
  }

  return null;
}

const ASSET_BASE_URL = resolveAssetBaseUrl();

function extensionAssetUrl(path: string): string {
  return ASSET_BASE_URL
    ? new URL(path, ASSET_BASE_URL).href
    : INERT_IMAGE_DATA_URL;
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
  return GENERIC_ITEM_FALLBACK_ICON;
}

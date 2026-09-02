import type { GemDefinition } from "../ports";
import type { StylerSettings } from "../settings/model";

export type GemFavoritesSettings = Pick<StylerSettings, "gemItemFavorites">;

export function createGemFavorites({
  onChange,
  persistSettings,
  settings
}: {
  onChange(): void;
  persistSettings(): void;
  settings: GemFavoritesSettings;
}) {
  function has(item: GemDefinition): boolean {
    return settings.gemItemFavorites.includes(item.key);
  }

  function getItems(items: readonly GemDefinition[]): GemDefinition[] {
    const favoriteKeys = new Set(settings.gemItemFavorites);
    return items.filter((item) => favoriteKeys.has(item.key));
  }

  function createButton(doc: Document, item: GemDefinition): HTMLButtonElement {
    const button = doc.createElement("button");
    const isFavorite = has(item);
    button.className = "poe-trade-styler-gem-item-favorite";
    button.type = "button";
    button.classList.toggle("is-active", isFavorite);
    button.textContent = isFavorite ? "★" : "☆";
    button.title = isFavorite ? "Remove from Favorites" : "Add to Favorites";
    button.setAttribute(
      "aria-label",
      isFavorite
        ? `Remove ${item.name} from Favorites`
        : `Add ${item.name} to Favorites`
    );
    button.setAttribute("aria-pressed", String(isFavorite));
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const favoriteKeys = new Set(settings.gemItemFavorites);
      if (favoriteKeys.has(item.key)) favoriteKeys.delete(item.key);
      else favoriteKeys.add(item.key);
      settings.gemItemFavorites = [...favoriteKeys];
      persistSettings();
      onChange();
    });
    return button;
  }

  return { createButton, getItems, has };
}

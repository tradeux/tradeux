import type { UniqueItemDefinition } from "../ports";
import type { StylerSettings } from "../settings/model";

export const UNIQUE_FAVORITES_TYPE = "__favorites__";

export type UniqueFavoritesSettings = Pick<
  StylerSettings,
  "uniqueItemFavorites"
>;

export function createUniqueFavorites({
  onChange,
  persistSettings,
  settings
}: {
  onChange(): void;
  persistSettings(): void;
  settings: UniqueFavoritesSettings;
}) {
  function getItems(
    items: readonly UniqueItemDefinition[]
  ): UniqueItemDefinition[] {
    const favoriteKeys = new Set(settings.uniqueItemFavorites);
    return items.filter((item) => favoriteKeys.has(item.key));
  }

  function createButton(
    doc: Document,
    item: UniqueItemDefinition
  ): HTMLButtonElement {
    const button = doc.createElement("button");
    const isFavorite = settings.uniqueItemFavorites.includes(item.key);
    button.className = "poe-trade-styler-unique-result-favorite";
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
      const favoriteKeys = new Set(settings.uniqueItemFavorites);
      if (favoriteKeys.has(item.key)) {
        favoriteKeys.delete(item.key);
      } else {
        favoriteKeys.add(item.key);
      }
      settings.uniqueItemFavorites = [...favoriteKeys];
      persistSettings();
      onChange();
    });
    return button;
  }

  return { createButton, getItems };
}

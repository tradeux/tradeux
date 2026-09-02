import { usesCompactPresetCatalog, type PresetMode } from "../presets/state";

export function restoreNativeStatFilters(document: Document): void {
  document
    .querySelectorAll<HTMLElement>(
      ".poe-trade-styler-corruption-option, " +
        ".poe-trade-styler-waystone-stat-option, " +
        ".poe-trade-styler-waystone-stat-group"
    )
    .forEach((element) => element.remove());

  document
    .querySelectorAll<HTMLElement>(
      '#trade > .top input[placeholder="+ Add Stat Filter"]'
    )
    .forEach((input) => {
      const statFilter = input.closest(".multiselect");
      const statList = statFilter?.querySelector<HTMLElement>(
        ".multiselect__content"
      );

      statList?.classList.remove("poe-trade-styler-stat-filter-list");
      if (statList) {
        delete statList.dataset.poeTradeStylerCorruptionSignature;
        delete statList.dataset.poeTradeStylerWaystoneSignature;
      }

      statFilter
        ?.querySelectorAll<HTMLElement>(".multiselect__element")
        .forEach((element) => {
          element.classList.remove(
            "poe-trade-styler-preset-stat-hidden",
            "poe-trade-styler-stat-option-favorite"
          );
          delete element.dataset.poeTradeStylerStatKey;
        });

      statFilter
        ?.querySelectorAll(".poe-trade-styler-stat-favorite")
        .forEach((element) => element.remove());
    });
}

export function filterFocusedStatOptions({
  document,
  hideIrrelevantAffixes,
  isFocusedFilterActive,
  normalizeText,
  preset
}: {
  document: Document;
  hideIrrelevantAffixes: boolean;
  isFocusedFilterActive: boolean;
  normalizeText(value: string): string;
  preset: PresetMode | null;
}): void {
  document
    .querySelectorAll<HTMLInputElement>(
      '#trade > .top input[placeholder="+ Add Stat Filter"]'
    )
    .forEach((input) => {
      const statFilter = input.closest(".multiselect");
      const query = normalizeText(input.value);
      const optionSelector =
        hideIrrelevantAffixes && usesCompactPresetCatalog(preset)
          ? ".poe-trade-styler-waystone-stat-option, " +
            ".poe-trade-styler-waystone-stat-group"
          : ".multiselect__element";

      statFilter
        ?.querySelectorAll<HTMLElement>(optionSelector)
        .forEach((element) => {
          if (!isFocusedFilterActive || !hideIrrelevantAffixes) {
            element.classList.remove("poe-trade-styler-preset-stat-hidden");
            return;
          }

          const isPresetOption = element.classList.contains(
            "poe-trade-styler-waystone-stat-option"
          );
          const isPresetGroup = element.classList.contains(
            "poe-trade-styler-waystone-stat-group"
          );
          const isCorruptionOption = element.classList.contains(
            "poe-trade-styler-corruption-option"
          );
          const isRelevant = (isPresetOption || isCorruptionOption) && (
            !query ||
            element.dataset.poeTradeStylerWaystoneSearch?.includes(query)
          );

          element.classList.toggle(
            "poe-trade-styler-preset-stat-hidden",
            !isRelevant && !isPresetGroup
          );
        });

      statFilter
        ?.querySelectorAll<HTMLElement>(
          ".poe-trade-styler-waystone-stat-group"
        )
        .forEach((header) => {
          if (!hideIrrelevantAffixes) {
            header.classList.remove("poe-trade-styler-preset-stat-hidden");
            return;
          }

          const group = header.dataset.poeTradeStylerWaystoneGroup;
          const hasVisibleOption = [
            ...statFilter.querySelectorAll<HTMLElement>(
              ".poe-trade-styler-waystone-stat-option"
            )
          ].some(
            (option) =>
              option.dataset.poeTradeStylerWaystoneGroup === group &&
              !option.classList.contains("poe-trade-styler-preset-stat-hidden")
          );
          header.classList.toggle(
            "poe-trade-styler-preset-stat-hidden",
            !hasVisibleOption
          );
        });
    });
}

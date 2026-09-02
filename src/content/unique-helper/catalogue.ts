import type {
  UniqueItemDefinition,
  UniqueRuneforgingDefinition
} from "../ports";

export interface UniqueResultEntry {
  item: UniqueItemDefinition;
  variantIndex: number;
}

export interface UniqueEntryFilters {
  maximumRequiredLevel: number | null;
  minimumRequiredLevel: number | null;
  searchQuery: string;
}

export function getEntryVariant(
  entry: UniqueResultEntry
): UniqueRuneforgingDefinition | null {
  return entry.variantIndex >= 0
    ? entry.item.runeforging[entry.variantIndex] || null
    : null;
}

export function getEntryLevel(entry: UniqueResultEntry): number {
  const variant = getEntryVariant(entry);
  const requirementLevel = variant?.requirements.match(/\bLevel\s+(\d+)/i);
  return variant?.level ??
    (requirementLevel ? Number(requirementLevel[1]) : entry.item.level);
}

function getDistinctVariantIndexes(item: UniqueItemDefinition): number[] {
  const seen = new Set<string>();
  return item.runeforging.flatMap((variant, index) => {
    const identity = JSON.stringify([
      variant.key,
      variant.label,
      variant.requirements,
      variant.properties,
      variant.implicitMods,
      variant.cost
    ]);
    if (seen.has(identity)) return [];
    seen.add(identity);
    return [index];
  });
}

function createEntries(
  item: UniqueItemDefinition,
  listForgedSeparately: boolean
): UniqueResultEntry[] {
  const entries = [{ item, variantIndex: -1 }];
  if (!listForgedSeparately) return entries;
  return entries.concat(
    getDistinctVariantIndexes(item).map((variantIndex) => ({
      item,
      variantIndex
    }))
  );
}

function matchesFilters(
  entry: UniqueResultEntry,
  filters: UniqueEntryFilters
): boolean {
  const item = entry.item;
  const variant = getEntryVariant(entry);
  const level = getEntryLevel(entry);
  if (
    filters.minimumRequiredLevel !== null &&
    level < filters.minimumRequiredLevel
  ) {
    return false;
  }
  if (
    filters.maximumRequiredLevel !== null &&
    level > filters.maximumRequiredLevel
  ) {
    return false;
  }
  if (!filters.searchQuery) return true;

  const searchableText = [
    item.name,
    item.base,
    item.type,
    item.requirements,
    ...item.baseProperties,
    ...item.baseImplicitMods,
    ...item.mods,
    ...item.flavourText,
    ...(variant
      ? [
          variant.label,
          variant.requirements,
          ...variant.properties,
          ...variant.implicitMods,
          variant.cost
        ]
      : [])
  ]
    .join(" ")
    .toLocaleLowerCase();
  return searchableText.includes(filters.searchQuery);
}

export function filterUniqueEntries(
  items: readonly UniqueItemDefinition[],
  listForgedSeparately: boolean,
  filters: UniqueEntryFilters
): UniqueResultEntry[] {
  return items
    .flatMap((item) => createEntries(item, listForgedSeparately))
    .filter((entry) => matchesFilters(entry, filters));
}

export function sortUniqueEntries(
  entries: UniqueResultEntry[]
): UniqueResultEntry[] {
  return entries.sort(
    (left, right) =>
      getEntryLevel(left) - getEntryLevel(right) ||
      left.item.name.localeCompare(right.item.name) ||
      (getEntryVariant(left)?.label || left.item.base).localeCompare(
        getEntryVariant(right)?.label || right.item.base
      )
  );
}

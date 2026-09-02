export interface StatFiltersFeature {
  activateModifierStatFilter(
    statGroup: Element,
    statDetails: { id: string; label: string; type: string }
  ): Promise<boolean>;
  createStatGroup(type: string): Promise<Element | null>;
  decorateOptions(): void;
  decorateResultModifiers(): void;
  filterForPreset(): void;
  findStatGroupByType(type: string): Element | null;
  getStatGroupType(statGroup: Element): string | null;
  normalizeText(value: string): string;
  setCharmBase(baseKey: string): void;
  setFlaskBase(baseKey: string): void;
  setGearSelection(
    slotKey: string,
    baseKey: string | null,
    itemKey: string | null
  ): void;
  setJewelBase(baseKey: string): void;
  setTabletBase(baseKey: string): void;
  waitForElement<T>(
    findElement: () => T | null,
    attempts?: number
  ): Promise<T | null>;
}

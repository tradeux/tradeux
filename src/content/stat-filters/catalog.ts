import type {
  CharmDataPort,
  FlaskDataPort,
  GearDataPort,
  JewelDataPort,
  PresetStatOption,
  StylerPort,
  TabletDataPort,
  TradeStatCatalog,
  WaystoneDataPort
} from "../ports";
import type { PresetMode } from "../presets/state";

export interface ModifierStatDetails {
  id: string | null;
  label: string;
  type: string;
}

export interface PresetStatCatalogService {
  getModifierDetails(
    label: string,
    statId: string | null
  ): Promise<ModifierStatDetails>;
  getOptions(mode: PresetMode): readonly PresetStatOption[];
  requestCharmCatalog(baseKey: string): void;
  requestFlaskCatalog(baseKey: string): void;
  requestGearCatalog(
    slotKey: string,
    baseKey: string | null,
    itemKey: string | null
  ): void;
  requestJewelCatalog(baseKey: string): void;
  requestTabletCatalog(baseKey: string): void;
  requestWaystoneCatalog(): void;
  setCharmBase(baseKey: string): void;
  setFlaskBase(baseKey: string): void;
  setGearSelection(
    slotKey: string,
    baseKey: string | null,
    itemKey: string | null
  ): void;
  setJewelBase(baseKey: string): void;
  setTabletBase(baseKey: string): void;
}

export interface PresetStatCatalogDependencies {
  charmData: CharmDataPort;
  flaskData: FlaskDataPort;
  gearData: GearDataPort;
  jewelData: JewelDataPort;
  onChange(): void;
  styler: StylerPort;
  tabletData: TabletDataPort;
  waystoneData: WaystoneDataPort;
  fetch?: typeof fetch;
}

function normalizeOptionText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function isPseudoStatOption(option: PresetStatOption): boolean {
  return String(option.type || option.id.split(".")[0] || "")
    .trim()
    .toLowerCase() === "pseudo";
}

function excludePseudoStatOptions(
  options: readonly PresetStatOption[]
): PresetStatOption[] {
  return options.filter((option) => !isPseudoStatOption(option));
}

function comparePseudoStatOptions(
  left: PresetStatOption,
  right: PresetStatOption
): number {
  const sortText = (text: string) =>
    text.normalize("NFKD").replace(/[^\p{L}\p{N}]+/gu, " ").trim();

  return (
    sortText(left.text).localeCompare(sortText(right.text), undefined, {
      numeric: true,
      sensitivity: "base"
    }) ||
    left.text.localeCompare(right.text, undefined, { sensitivity: "base" }) ||
    left.id.localeCompare(right.id)
  );
}

function getPseudoStatOptions(
  catalog: TradeStatCatalog
): PresetStatOption[] {
  const options = new Map<string, PresetStatOption>();

  Object.values(catalog).forEach((entry) => {
    const id = String(entry.id || "").replace(/^stat\./, "");
    const type = String(entry.type || id.split(".")[0] || "")
      .trim()
      .toLowerCase();
    const text = normalizeOptionText(String(entry.text || ""));

    if (type !== "pseudo" || !text) return;

    const key = id || `${type}::${text.toLowerCase()}`;
    if (!options.has(key)) {
      options.set(key, { id, text, type: "pseudo", group: "pseudo" });
    }
  });

  return [...options.values()].sort(comparePseudoStatOptions);
}

function appendPseudoStatOptions(
  itemOptions: readonly PresetStatOption[],
  catalog: TradeStatCatalog
): PresetStatOption[] {
  const nonPseudoOptions: PresetStatOption[] = [];
  const pseudoOptions = new Map<string, PresetStatOption>();
  const addPseudoOption = (option: PresetStatOption) => {
    const text = normalizeOptionText(option.text);
    const key = option.id || `pseudo::${text.toLowerCase()}`;
    pseudoOptions.set(key, {
      ...option,
      text,
      type: "pseudo",
      group: "pseudo"
    });
  };

  itemOptions.forEach((option) => {
    if (isPseudoStatOption(option)) {
      addPseudoOption(option);
    } else {
      nonPseudoOptions.push(option);
    }
  });
  getPseudoStatOptions(catalog).forEach(addPseudoOption);

  return [
    ...nonPseudoOptions,
    ...[...pseudoOptions.values()].sort(comparePseudoStatOptions)
  ];
}

export function createPresetStatCatalogService({
  charmData,
  fetch: fetchCatalog = fetch,
  flaskData,
  gearData,
  jewelData,
  onChange,
  styler,
  tabletData,
  waystoneData
}: PresetStatCatalogDependencies): PresetStatCatalogService {
  const catalogRequests = new Map<string, Promise<TradeStatCatalog | null>>();
  let charmOptions: PresetStatOption[] = [];
  let flaskOptions: PresetStatOption[] = [];
  let gearOptions: PresetStatOption[] = [];
  let jewelOptions: PresetStatOption[] = [];
  let waystoneOptions = excludePseudoStatOptions(
    waystoneData.getWaystoneStatOptions()
  );
  let tabletOptions: PresetStatOption[] = [];
  let waystoneCatalogRequested = false;
  let charmBaseKey: string | null = null;
  let charmCatalogBaseKey: string | null = null;
  let flaskBaseKey: string | null = null;
  let flaskCatalogBaseKey: string | null = null;
  let gearSelectionKey: string | null = null;
  let gearCatalogSelectionKey: string | null = null;
  let gearSlotKey: string | null = null;
  let gearBaseKey: string | null = null;
  let gearItemKey: string | null = null;
  let jewelBaseKey: string | null = null;
  let jewelCatalogBaseKey: string | null = null;
  let tabletBaseKey: string | null = null;
  let tabletCatalogBaseKey: string | null = null;

  function loadCatalog(): Promise<TradeStatCatalog | null> {
    const catalogUrl = "/api/trade2/data/stats";

    if (!catalogRequests.has(catalogUrl)) {
      catalogRequests.set(
        catalogUrl,
        fetchCatalog(catalogUrl, { credentials: "same-origin" })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Stat catalog request failed: ${response.status}`);
            }
            return response.json();
          })
          .then((payload) => styler.indexTradeStats(payload))
          .catch(() => null)
      );
    }

    return catalogRequests.get(catalogUrl)!;
  }

  function setTabletBase(baseKey: string): void {
    tabletBaseKey = baseKey;
    tabletOptions = excludePseudoStatOptions(
      tabletData.getTabletStatOptions(baseKey)
    );
    tabletCatalogBaseKey = null;
  }

  function setCharmBase(baseKey: string): void {
    charmBaseKey = baseKey;
    charmOptions = excludePseudoStatOptions(
      charmData.getCharmStatOptions(baseKey)
    );
    charmCatalogBaseKey = null;
  }

  function setFlaskBase(baseKey: string): void {
    flaskBaseKey = baseKey;
    flaskOptions = excludePseudoStatOptions(
      flaskData.getFlaskStatOptions(baseKey)
    );
    flaskCatalogBaseKey = null;
  }

  function setGearSelection(
    slotKey: string,
    baseKey: string | null,
    itemKey: string | null
  ): void {
    gearSlotKey = slotKey;
    gearBaseKey = baseKey;
    gearItemKey = itemKey;
    gearSelectionKey = JSON.stringify([slotKey, baseKey, itemKey]);
    gearOptions = [];
    gearCatalogSelectionKey = null;
  }

  function setJewelBase(baseKey: string): void {
    jewelBaseKey = baseKey;
    jewelOptions = jewelData.getJewelStatOptions(baseKey);
    jewelCatalogBaseKey = null;
  }

  function requestWaystoneCatalog(): void {
    if (waystoneCatalogRequested) return;
    waystoneCatalogRequested = true;

    void loadCatalog().then((catalog) => {
      if (!catalog) return;
      waystoneOptions = excludePseudoStatOptions(
        waystoneData.getWaystoneStatOptions(Object.values(catalog))
      );
      onChange();
    });
  }

  function requestTabletCatalog(baseKey: string): void {
    if (!baseKey || tabletCatalogBaseKey === baseKey) return;
    tabletCatalogBaseKey = baseKey;

    void loadCatalog().then((catalog) => {
      if (!catalog || tabletBaseKey !== baseKey) return;
      tabletOptions = excludePseudoStatOptions(
        tabletData.getTabletStatOptions(baseKey, Object.values(catalog))
      );
      onChange();
    });
  }

  function requestCharmCatalog(baseKey: string): void {
    if (!baseKey || charmCatalogBaseKey === baseKey) return;
    charmCatalogBaseKey = baseKey;

    void loadCatalog().then((catalog) => {
      if (!catalog || charmBaseKey !== baseKey) return;
      charmOptions = excludePseudoStatOptions(
        charmData.getCharmStatOptions(baseKey, Object.values(catalog))
      );
      onChange();
    });
  }

  function requestFlaskCatalog(baseKey: string): void {
    if (!baseKey || flaskCatalogBaseKey === baseKey) return;
    flaskCatalogBaseKey = baseKey;

    void loadCatalog().then((catalog) => {
      if (!catalog || flaskBaseKey !== baseKey) return;
      flaskOptions = excludePseudoStatOptions(
        flaskData.getFlaskStatOptions(baseKey, Object.values(catalog))
      );
      onChange();
    });
  }

  function requestGearCatalog(
    slotKey: string,
    baseKey: string | null,
    itemKey: string | null
  ): void {
    const selectionKey = JSON.stringify([slotKey, baseKey, itemKey]);
    if (!slotKey || gearCatalogSelectionKey === selectionKey) return;
    gearCatalogSelectionKey = selectionKey;

    void loadCatalog().then((catalog) => {
      if (!catalog || gearSelectionKey !== selectionKey) return;
      gearOptions = appendPseudoStatOptions(
        gearData.getGearStatOptions(
          slotKey,
          baseKey,
          itemKey,
          Object.values(catalog)
        ),
        catalog
      );
      onChange();
    });
  }

  function requestJewelCatalog(baseKey: string): void {
    if (!baseKey || jewelCatalogBaseKey === baseKey) return;
    jewelCatalogBaseKey = baseKey;
    void loadCatalog().then((catalog) => {
      if (!catalog || jewelBaseKey !== baseKey) return;
      jewelOptions = appendPseudoStatOptions(
        jewelData.getJewelStatOptions(baseKey, Object.values(catalog)),
        catalog
      );
      onChange();
    });
  }

  async function getModifierDetails(
    label: string,
    statId: string | null
  ): Promise<ModifierStatDetails> {
    const fallback: ModifierStatDetails = {
      id: statId,
      label: styler.getModifierStatTemplate(label),
      type: statId?.split(".")[0] || "explicit"
    };

    if (!statId) return fallback;

    const entry = (await loadCatalog())?.[statId];
    return entry
      ? { id: entry.id, label: entry.text, type: entry.type || fallback.type }
      : fallback;
  }

  return {
    getModifierDetails,
    getOptions: (mode) =>
      mode === "charms"
        ? charmOptions
        : mode === "flasks"
          ? flaskOptions
        : mode === "gems"
          ? []
        : mode === "gear"
          ? gearOptions
        : mode === "jewels"
          ? jewelOptions
        : mode === "tablets"
          ? tabletOptions
          : waystoneOptions,
    requestCharmCatalog,
    requestFlaskCatalog,
    requestGearCatalog,
    requestJewelCatalog,
    requestTabletCatalog,
    requestWaystoneCatalog,
    setCharmBase,
    setFlaskBase,
    setGearSelection,
    setJewelBase,
    setTabletBase
  };
}

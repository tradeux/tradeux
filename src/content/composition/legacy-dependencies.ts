import type { ContentDependencies } from "../ports";

const REQUIRED_GLOBALS = {
  charmData: "Poe2CharmData",
  corruptionData: "Poe2CorruptionData",
  flaskData: "Poe2FlaskData",
  gemData: "Poe2GemData",
  gearData: "Poe2GearData",
  jewelData: "Poe2JewelData",
  styler: "PoeTradeStyler",
  tabletData: "Poe2TabletData",
  uniqueData: "Poe2UniqueData",
  waystoneData: "Poe2WaystoneData"
} as const;

function requireLegacyGlobal(
  root: typeof globalThis,
  globalName: string
): Record<string, unknown> {
  const value = Reflect.get(root, globalName);

  if (!value || typeof value !== "object") {
    throw new Error(
      `[POE TradeUX] Required dependency ${globalName} was not loaded.`
    );
  }

  return value as Record<string, unknown>;
}

/**
 * Adapts the generated/UMD data files loaded by manifest.json to typed ports.
 * This is the only module allowed to know their global names.
 */
export function getLegacyDependencies(
  root: typeof globalThis = globalThis
): ContentDependencies {
  return Object.fromEntries(
    Object.entries(REQUIRED_GLOBALS).map(([key, globalName]) => [
      key,
      requireLegacyGlobal(root, globalName)
    ])
  ) as unknown as ContentDependencies;
}

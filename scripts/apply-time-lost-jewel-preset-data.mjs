import { readFileSync, writeFileSync } from "fs";

const SOURCE_PATH = "src/poe2-jewel-data.js";
const BASE_POOLS_PATH = "scripts/time-lost-jewel-base-pools.generated.json";

const source = readFileSync(SOURCE_PATH, "utf8");
const snapshotStartMarker = "  const SNAPSHOT = ";
const snapshotEndMarker = "\n  const BUNDLED_DATA =";
const snapshotStart = source.indexOf(snapshotStartMarker);
const snapshotEnd = source.indexOf(snapshotEndMarker, snapshotStart);
if (snapshotStart < 0 || snapshotEnd < 0) {
  throw new Error("Could not locate the generated jewel snapshot");
}

const snapshotJsonStart = snapshotStart + snapshotStartMarker.length;
const snapshotJsonEnd = source.lastIndexOf(";", snapshotEnd);
const snapshot = JSON.parse(source.slice(snapshotJsonStart, snapshotJsonEnd));
const generated = JSON.parse(readFileSync(BASE_POOLS_PATH, "utf8"));
const basePools = generated.bases || {};
const timeLostKeys = new Set(Object.keys(basePools));
const previousManagedKeys = new Set(
  snapshot.bases
    .filter((base) => timeLostKeys.has(base.key))
    .flatMap((base) => base.modifierIds)
);
const otherBaseKeys = new Set(
  snapshot.bases
    .filter((base) => !timeLostKeys.has(base.key))
    .flatMap((base) => base.modifierIds)
);

// Remove options that belonged only to an older generated Time-Lost pool.
for (const key of previousManagedKeys) {
  if (!otherBaseKeys.has(key)) delete snapshot.stats[key];
}

const uniqueStats = new Map();
for (const base of snapshot.bases) {
  const pool = basePools[base.key];
  if (!pool) continue;
  if (pool.unresolved.length > 0) {
    throw new Error(`${base.displayName} has ${pool.unresolved.length} unresolved modifiers`);
  }

  base.modifierIds = pool.stats.map((option) => `${option.group}\u0000${option.id}`);
  base.searchText = base.displayName;
  for (const option of pool.stats) {
    const key = `${option.group}\u0000${option.id}`;
    uniqueStats.set(key, option);
    snapshot.stats[key] = {
      ...(option.affix ? { affix: option.affix } : {}),
      group: option.group,
      id: option.id,
      text: option.text,
      type: option.type
    };
  }
}

snapshot.source.timeLost = {
  generatedAt: generated.generatedAt,
  statCatalogUrl: generated.statCatalogUrl,
  uniqueStats: uniqueStats.size,
  unresolved: [],
  bases: Object.fromEntries(Object.entries(basePools).map(([key, pool]) => [key, {
    sourceUrl: pool.sourceUrl,
    sourceCounts: pool.sourceCounts,
    stats: pool.stats.length
  }]))
};

const updated =
  source.slice(0, snapshotJsonStart) +
  JSON.stringify(snapshot, null, 2) +
  ";" +
  source.slice(snapshotEnd);
writeFileSync(SOURCE_PATH, updated, "utf8");
console.log(JSON.stringify({
  appliedBases: Object.fromEntries(Object.entries(basePools).map(([key, pool]) => [
    key,
    pool.stats.length
  ])),
  uniqueStats: uniqueStats.size
}, null, 2));

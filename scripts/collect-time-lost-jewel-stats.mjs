import https from "https";
import { existsSync, readFileSync, writeFileSync } from "fs";

const API_ROOT = "https://www.pathofexile.com/api/trade2";
const DEFAULT_LEAGUE = "Runes of Aldur";
const REQUEST_INTERVAL_MS = 1800;
const FETCH_BATCH_SIZE = 10;
const MAX_ITERATIONS = 200;
const DEFAULT_MAX_EXCLUSIONS = 35;
const DEFAULT_STALE_PASSES = 10;

const BASES = Object.freeze([
  "Time-Lost Emerald",
  "Time-Lost Diamond",
  "Time-Lost Sapphire",
  "Time-Lost Ruby"
]);

const league = process.argv.find((value) => value.startsWith("--league="))
  ?.slice("--league=".length) || DEFAULT_LEAGUE;
const onlyBase = process.argv.find((value) => value.startsWith("--base="))
  ?.slice("--base=".length);
const outputPath = process.argv.find((value) => value.startsWith("--output="))
  ?.slice("--output=".length) || "scripts/time-lost-jewel-stats.generated.json";
const maxExclusions = Number(
  process.argv.find((value) => value.startsWith("--max-exclusions="))
    ?.slice("--max-exclusions=".length) || DEFAULT_MAX_EXCLUSIONS
);
const stalePassLimit = Number(
  process.argv.find((value) => value.startsWith("--stale-passes="))
    ?.slice("--stale-passes=".length) || DEFAULT_STALE_PASSES
);
const selectedBases = onlyBase ? BASES.filter((base) => base === onlyBase) : BASES;

if (selectedBases.length === 0) {
  throw new Error(`Unknown Time-Lost jewel base: ${onlyBase}`);
}

let nextRequestAt = 0;

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function requestJson(path, options = {}) {
  const wait = Math.max(0, nextRequestAt - Date.now());
  if (wait) await sleep(wait);

  for (let attempt = 1; attempt <= 4; attempt += 1) {
    const response = await new Promise((resolve, reject) => {
      const request = https.request(`${API_ROOT}${path}`, {
        method: options.method || "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "User-Agent": "TradeStyler/0.1.6 (local preset data maintenance)",
          ...(options.headers || {})
        }
      }, (incoming) => {
        let body = "";
        incoming.setEncoding("utf8");
        incoming.on("data", (chunk) => { body += chunk; });
        incoming.on("end", () => resolve({
          body,
          headers: incoming.headers,
          ok: incoming.statusCode >= 200 && incoming.statusCode < 300,
          status: incoming.statusCode,
          statusText: incoming.statusMessage || ""
        }));
      });
      request.on("error", reject);
      if (options.body) request.write(options.body);
      request.end();
    });
    nextRequestAt = Date.now() + REQUEST_INTERVAL_MS;

    if (response.ok) return JSON.parse(response.body);

    if (response.status !== 429 || attempt === 4) {
      throw new Error(`${response.status} ${response.statusText}: ${response.body}`);
    }

    const retryAfter = Number(response.headers["retry-after"]) || attempt * 5;
    await sleep(retryAfter * 1000);
  }
}

function indexStatCatalog(payload) {
  const catalog = new Map();
  for (const group of payload?.result || []) {
    for (const entry of group?.entries || []) {
      if (entry?.id && entry?.text) catalog.set(entry.id, entry);
    }
  }
  return catalog;
}

function normalizeItemStatHash(hash) {
  return String(hash || "").replace(/^stat\./, "");
}

function getAffix(modifier) {
  const names = (modifier?.mods || [])
    .map((mod) => String(mod?.name || "").trim())
    .filter(Boolean);
  if (names.length === 0) return null;
  if (names.every((name) => /^of\s/i.test(name))) return "suffix";
  if (names.every((name) => !/^of\s/i.test(name))) return "prefix";
  return null;
}

function getGroup(id, affix) {
  const type = id.split(".")[0];
  if (type === "desecrated") return "Desecrated";
  if (type === "implicit") return "Vaal Implicits";
  if (type === "fractured") return "Fractured";
  if (affix === "prefix") return "Prefixes";
  if (affix === "suffix") return "Suffixes";
  return "Modifiers";
}

function collectExplicitModifiers(item, catalog, collected) {
  let added = 0;
  for (const modifier of item?.explicitMods || []) {
    const id = normalizeItemStatHash(modifier?.hash);
    const catalogEntry = catalog.get(id);
    if (!id || !catalogEntry) continue;

    const affix = getAffix(modifier);
    const existing = collected.get(id);
    if (existing) {
      if (!existing.affix && affix) {
        existing.affix = affix;
        existing.group = getGroup(id, affix);
      }
      continue;
    }

    collected.set(id, {
      ...(affix ? { affix } : {}),
      group: getGroup(id, affix),
      id,
      text: catalogEntry.text,
      type: catalogEntry.type || id.split(".")[0]
    });
    added += 1;
  }
  return added;
}

function createSearchPayload(base, excludedIds) {
  const stats = [{ type: "and", filters: [] }];
  if (excludedIds.length > 0) {
    stats.push({
      type: "not",
      filters: excludedIds.map((id) => ({ id, disabled: false })),
      disabled: false
    });
  }

  return {
    query: {
      status: { option: "any" },
      type: base,
      stats,
      filters: {
        type_filters: {
          filters: { rarity: { option: "nonunique" } }
        }
      }
    },
    sort: { price: "asc" }
  };
}

async function search(base, excludedIds) {
  return requestJson(`/search/poe2/${encodeURIComponent(league)}`, {
    method: "POST",
    body: JSON.stringify(createSearchPayload(base, excludedIds))
  });
}

async function fetchItems(searchId, ids) {
  if (ids.length === 0) return [];
  const payload = await requestJson(
    `/fetch/${ids.join(",")}?query=${encodeURIComponent(searchId)}`
  );
  return (payload?.result || []).filter(Boolean).map((result) => result.item);
}

function compareOptions(left, right) {
  const groups = ["Prefixes", "Suffixes", "Modifiers", "Desecrated", "Fractured"];
  return groups.indexOf(left.group) - groups.indexOf(right.group) ||
    left.text.localeCompare(right.text, undefined, { numeric: true, sensitivity: "base" }) ||
    left.id.localeCompare(right.id);
}

function selectExclusions(ids, iteration) {
  if (ids.length <= maxExclusions) return ids;

  // Keep recent discoveries excluded while deterministically rotating older
  // ones. Different windows expose different result sets without exceeding
  // the anonymous trade-query complexity ceiling.
  const recentCount = Math.min(12, maxExclusions);
  const recent = ids.slice(-recentCount);
  const older = ids.slice(0, -recentCount);
  const selected = [];
  const wanted = maxExclusions - recent.length;
  const start = ((iteration - 1) * Math.max(1, wanted)) % older.length;
  for (let index = 0; index < wanted; index += 1) {
    selected.push(older[(start + index) % older.length]);
  }
  return [...selected, ...recent];
}

async function collectBase(base, catalog, checkpoint, onProgress) {
  const collected = new Map(
    (checkpoint?.stats || []).map((option) => [option.id, option])
  );
  const iterations = [...(checkpoint?.iterations || [])];
  let stalePasses = checkpoint?.stalePasses || 0;

  for (
    let iteration = iterations.length + 1;
    iteration <= MAX_ITERATIONS;
    iteration += 1
  ) {
    const excludedIds = selectExclusions([...collected.keys()], iteration);
    const result = await search(base, excludedIds);
    const ids = (result?.result || []).slice(0, FETCH_BATCH_SIZE);
    const items = await fetchItems(result.id, ids);
    let added = 0;
    for (const item of items) {
      added += collectExplicitModifiers(item, catalog, collected);
    }

    iterations.push({
      iteration,
      excluded: excludedIds.length,
      returned: result?.total || 0,
      inspected: items.length,
      added,
      stalePasses: added === 0 ? stalePasses + 1 : 0
    });
    console.log(
      `${base}: pass ${iteration}, ${result?.total || 0} matches, ` +
      `${items.length} inspected, ${added} new, ${collected.size} total`
    );

    if (ids.length === 0) break;
    stalePasses = added === 0 ? stalePasses + 1 : 0;
    const progress = {
      base,
      complete: ids.length === 0 || stalePasses >= stalePassLimit,
      iterations,
      modifierIds: [...collected.keys()],
      stalePasses,
      stats: [...collected.values()].sort(compareOptions)
    };
    onProgress(progress);
    if (progress.complete) return progress;
  }

  return {
    base,
    complete: true,
    iterations,
    modifierIds: [...collected.keys()],
    stalePasses,
    stats: [...collected.values()].sort(compareOptions)
  };
}

const catalog = indexStatCatalog(await requestJson("/data/stats"));
const checkpoint = existsSync(outputPath)
  ? JSON.parse(readFileSync(outputPath, "utf8"))
  : null;
const resumable = checkpoint?.league === league &&
  checkpoint?.maxExclusions === maxExclusions &&
  checkpoint?.stalePassLimit === stalePassLimit;
const checkpointByBase = new Map(
  (resumable ? checkpoint.bases : []).map((result) => [result.base, result])
);
const results = [];
function saveResults(current) {
  const bases = current ? [...results, current] : results;
  writeFileSync(outputPath, `${JSON.stringify({
    generatedAt: new Date().toISOString(),
    league,
    maxExclusions,
    stalePassLimit,
    bases
  }, null, 2)}\n`, "utf8");
}
for (const base of selectedBases) {
  const previous = checkpointByBase.get(base);
  if (previous?.complete) {
    console.log(`${base}: reusing ${previous.stats.length} checkpointed stats`);
    results.push(previous);
    continue;
  }
  const result = await collectBase(
    base,
    catalog,
    previous,
    (progress) => saveResults(progress)
  );
  results.push(result);
  saveResults();
}

const output = {
  generatedAt: new Date().toISOString(),
  league,
  maxExclusions,
  stalePassLimit,
  bases: results
};

writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(`Saved ${results.reduce((sum, result) => sum + result.stats.length, 0)} stats to ${outputPath}`);

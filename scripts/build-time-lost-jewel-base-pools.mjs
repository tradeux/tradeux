import https from "https";
import { readFileSync, writeFileSync } from "fs";
import { parseHTML } from "linkedom";

const STATS_URL = "https://www.pathofexile.com/api/trade2/data/stats";
const REFERENCE_PATH = "scripts/time-lost-jewel-reference.generated.json";
const OUTPUT_PATH = "scripts/time-lost-jewel-base-pools.generated.json";
const BASES = Object.freeze({
  "time-lost-ruby": "ruby",
  "time-lost-emerald": "emerald",
  "time-lost-sapphire": "sapphire",
  "time-lost-diamond": "diamond"
});
const OFFICIAL_ID_OVERRIDES = Object.freeze({
  "desecrated\0Regenerate (0.03-0.07)% of maximum Life per second":
    "desecrated.stat_3566150527",
  "desecrated\0Charms gain 0.1 charges per Second":
    "desecrated.stat_1034611536",
  "desecrated\0Hits have (5-3)% reduced Critical Hit Chance against you":
    "desecrated.stat_2135541924"
});

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function requestText(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, {
      headers: {
        Accept: "text/html,application/json",
        "User-Agent": "TradeStyler/0.1.6 (local preset data maintenance)"
      }
    }, (response) => {
      let body = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => { body += chunk; });
      response.on("end", () => resolve({
        body,
        headers: response.headers,
        status: response.statusCode
      }));
    });
    request.on("error", reject);
  });
}

async function getText(url) {
  for (let attempt = 1; attempt <= 6; attempt += 1) {
    const response = await requestText(url);
    if (response.status >= 200 && response.status < 300) return response.body;
    if (response.status !== 429 || attempt === 6) {
      throw new Error(`${response.status}: ${response.body}`);
    }
    await sleep((Number(response.headers["retry-after"]) || attempt * 10) * 1000);
  }
}

function cleanText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function normalizeTemplate(value) {
  return cleanText(value)
    .normalize("NFKD")
    .replace(/\(\s*[+-]?\d+(?:\.\d+)?\s*[—–-]\s*[+-]?\d+(?:\.\d+)?\s*\)/g, "#")
    .replace(/[+-]?\d+(?:\.\d+)?/g, "#")
    .replace(/\+#/g, "#")
    .replace(/\s*([%.,:;()])\s*/g, "$1")
    .toLowerCase();
}

function compactRadiusTemplate(value) {
  return normalizeTemplate(value)
    .replace(/^(?:small|notable) passive skills in radius also grant /, "")
    .replace(/^minions have /, "minions have ");
}

function parseModifierSections(html) {
  const { document } = parseHTML(html);
  const sections = {
    standard: [],
    desecrated: [],
    corruption: []
  };
  let section = null;

  for (const element of document.querySelectorAll("h3, table.modifier-table")) {
    if (element.tagName === "H3") {
      const heading = cleanText(element.textContent).toLowerCase();
      section = heading.startsWith("standard")
        ? "standard"
        : heading.startsWith("desecrated")
          ? "desecrated"
          : heading.startsWith("corruption implicit")
            ? "corruption"
            : null;
      continue;
    }
    if (!section) continue;

    for (const row of [...element.querySelectorAll("tr")].slice(1)) {
      const cells = row.querySelectorAll("td");
      const name = cleanText(cells[0]?.textContent);
      const text = cleanText(cells[2]?.textContent);
      if (name && text) sections[section].push({ name, text });
    }
  }
  return sections;
}

function indexOfficialStats(payload) {
  const byTypeAndTemplate = new Map();
  const byId = new Map();
  for (const group of payload?.result || []) {
    for (const entry of group?.entries || []) {
      if (!entry?.id || !entry?.text || !entry?.type) continue;
      byId.set(entry.id, entry);
      const key = `${entry.type}\0${normalizeTemplate(entry.text)}`;
      if (!byTypeAndTemplate.has(key)) byTypeAndTemplate.set(key, []);
      byTypeAndTemplate.get(key).push(entry);
    }
  }
  return { byId, byTypeAndTemplate };
}

function resolveStandard(row, referenceStats) {
  const candidates = referenceStats.filter((entry) => entry.names.includes(row.name));
  if (candidates.length === 1) return candidates[0];
  if (candidates.length > 1) {
    const target = compactRadiusTemplate(row.text);
    return candidates.find((entry) => {
      const candidate = compactRadiusTemplate(entry.text);
      return candidate === target || candidate.includes(target) || target.includes(candidate);
    }) || null;
  }
  return null;
}

function resolveOfficial(row, type, group, official) {
  const overridden = official.byId.get(OFFICIAL_ID_OVERRIDES[`${type}\0${row.text}`]);
  if (overridden) {
    return { group, id: overridden.id, text: overridden.text, type: overridden.type };
  }
  const candidates = official.byTypeAndTemplate.get(
    `${type}\0${normalizeTemplate(row.text)}`
  ) || [];
  if (candidates.length !== 1) return null;
  return {
    group,
    id: candidates[0].id,
    text: candidates[0].text,
    type: candidates[0].type
  };
}

const reference = JSON.parse(readFileSync(REFERENCE_PATH, "utf8"));
const official = indexOfficialStats(JSON.parse(await getText(STATS_URL)));
const outputBases = {};

for (const [baseKey, slug] of Object.entries(BASES)) {
  const sourceUrl = `https://www.poe2wiki.net/wiki/List_of_modifiers_for_time-lost_${slug}_jewel`;
  const sections = parseModifierSections(await getText(sourceUrl));
  const unresolved = [];
  const statsById = new Map();
  const addResolved = (section, row, stat) => {
    if (!stat) {
      unresolved.push({ section, ...row });
      return;
    }
    statsById.set(stat.id, stat);
  };

  sections.standard.forEach((row) =>
    addResolved("standard", row, resolveStandard(row, reference.stats))
  );
  sections.desecrated.forEach((row) =>
    addResolved("desecrated", row, resolveOfficial(row, "desecrated", "Desecrated", official))
  );
  sections.corruption.forEach((row) =>
    addResolved("corruption", row, resolveOfficial(row, "enchant", "Corrupted Implicits", official))
  );

  outputBases[baseKey] = {
    sourceUrl,
    sourceCounts: Object.fromEntries(
      Object.entries(sections).map(([section, rows]) => [section, rows.length])
    ),
    stats: [...statsById.values()],
    unresolved
  };
}

const output = {
  generatedAt: new Date().toISOString(),
  statCatalogUrl: STATS_URL,
  bases: outputBases
};
writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(JSON.stringify({
  output: OUTPUT_PATH,
  bases: Object.fromEntries(Object.entries(outputBases).map(([key, value]) => [key, {
    resolved: value.stats.length,
    sourceCounts: value.sourceCounts,
    unresolved: value.unresolved.length
  }]))
}, null, 2));

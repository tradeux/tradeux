import https from "https";
import { writeFileSync } from "fs";
import { parseHTML } from "linkedom";

const REFERENCE_URL = "https://poe2db.tw/us/Time-Lost_Jewels";
const STATS_URL = "https://www.pathofexile.com/api/trade2/data/stats";
const OUTPUT_PATH = "scripts/time-lost-jewel-reference.generated.json";
const OFFICIAL_ID_OVERRIDES = Object.freeze({
  Incise: "explicit.stat_318092306",
  "of Acclimatisation": "explicit.stat_3225608889",
  "of Dazing": "explicit.stat_4258000627",
  "of Hastening": "explicit.stat_2580617872",
  "of Righteousness": "explicit.stat_1756380435"
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
      response.on("end", () => {
        if (response.statusCode >= 200 && response.statusCode < 300) {
          resolve({ body, headers: response.headers, status: response.statusCode });
        } else resolve({ body, headers: response.headers, status: response.statusCode });
      });
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
    const retryAfter = Number(response.headers["retry-after"]) || attempt * 10;
    await sleep(retryAfter * 1000);
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
    .replace(/\s*([%.,:;()])\s*/g, "$1")
    .toLowerCase();
}

function extractReferenceRows(html) {
  const { document } = parseHTML(html);
  const heading = [...document.querySelectorAll("h5")].find((element) =>
    element.textContent.includes("Time-Lost Jewel Mods")
  );
  const table = heading?.parentElement?.querySelector("table") ||
    heading?.nextElementSibling?.nextElementSibling?.querySelector("table");
  if (!table) throw new Error("Could not locate the Time-Lost modifier table");

  return [...table.querySelectorAll("tbody tr")].map((row) => {
    const cells = row.querySelectorAll("td");
    const descriptionCell = cells[3]?.cloneNode(true);
    descriptionCell?.querySelectorAll(".badge").forEach((badge) => badge.remove());
    const description = cleanText(descriptionCell?.textContent)
      .replace(/\s*local jewel effect base radius \[\d+\]\s*$/i, "")
      .trim();
    return {
      affix: cleanText(cells[2]?.textContent).toLowerCase(),
      description,
      name: cleanText(cells[0]?.textContent)
    };
  }).filter((row) => row.description);
}

function indexOfficialStats(payload) {
  const byTemplate = new Map();
  const byId = new Map();
  for (const group of payload?.result || []) {
    for (const entry of group?.entries || []) {
      if (!entry?.id || !entry?.text || entry.type !== "explicit") continue;
      const key = normalizeTemplate(entry.text);
      byId.set(entry.id, entry);
      if (!byTemplate.has(key)) byTemplate.set(key, []);
      byTemplate.get(key).push(entry);
    }
  }
  return { byId, byTemplate };
}

const referenceHtml = await getText(REFERENCE_URL);
await sleep(3000);
const officialPayloadText = await getText(STATS_URL);
const rows = extractReferenceRows(referenceHtml);
const official = indexOfficialStats(JSON.parse(officialPayloadText));
const statsById = new Map();
const unmatched = [];
const ambiguous = [];

for (const row of rows) {
  const overridden = official.byId.get(OFFICIAL_ID_OVERRIDES[row.name]);
  const candidates = overridden
    ? [overridden]
    : official.byTemplate.get(normalizeTemplate(row.description)) || [];
  if (candidates.length === 0) {
    unmatched.push(row);
    continue;
  }
  if (candidates.length > 1) {
    ambiguous.push({ ...row, candidates });
    continue;
  }

  const candidate = candidates[0];
  const affix = row.affix === "prefix" || row.affix === "suffix"
    ? row.affix
    : undefined;
  const existing = statsById.get(candidate.id);
  if (!existing) {
    statsById.set(candidate.id, {
      ...(affix ? { affix } : {}),
      group: affix === "prefix" ? "Prefixes" : affix === "suffix" ? "Suffixes" : "Modifiers",
      id: candidate.id,
      names: [row.name],
      text: candidate.text,
      type: candidate.type
    });
  } else if (!existing.names.includes(row.name)) {
    existing.names.push(row.name);
  }
}

const groupRank = new Map([["Prefixes", 0], ["Suffixes", 1], ["Modifiers", 2]]);
const stats = [...statsById.values()].sort((left, right) =>
  groupRank.get(left.group) - groupRank.get(right.group) ||
  left.text.localeCompare(right.text, undefined, { numeric: true, sensitivity: "base" }) ||
  left.id.localeCompare(right.id)
);
const output = {
  generatedAt: new Date().toISOString(),
  sourceUrl: REFERENCE_URL,
  statCatalogUrl: STATS_URL,
  referenceRows: rows.length,
  matchedRows: rows.length - unmatched.length - ambiguous.length,
  uniqueStats: stats.length,
  unmatched,
  ambiguous,
  stats
};

writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(JSON.stringify({
  referenceRows: output.referenceRows,
  matchedRows: output.matchedRows,
  uniqueStats: output.uniqueStats,
  unmatched: unmatched.length,
  ambiguous: ambiguous.length,
  output: OUTPUT_PATH
}, null, 2));

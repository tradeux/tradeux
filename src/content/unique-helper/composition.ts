import type { UniqueRuneforgingDefinition } from "../ports";

interface Roll {
  high: number;
  low: number;
}

interface DamageRoll {
  maximum: Roll;
  minimum: Roll;
}

export interface ComposedRuneforgedView {
  properties: string[];
  propertyStyles: (number | null)[];
  requirements: string;
}

const DAMAGE_TYPES = ["Physical", "Fire", "Cold", "Lightning", "Chaos"];
const DEFENCE_NAMES = ["Armour", "Evasion Rating", "Energy Shield"];
const ROLL_SOURCE = String.raw`(\([^)]+\)|[+\-]?\d+(?:\.\d+)?)`;

function parseRoll(value: string): Roll | null {
  const normalized = String(value || "").trim().replace(/^\(|\)$/g, "");
  const range = normalized.match(
    /^([+\-]?\d+(?:\.\d+)?)\s*-\s*([+\-]?\d+(?:\.\d+)?)$/
  );
  if (range) return { low: Number(range[1]), high: Number(range[2]) };
  const number = normalized.match(/^[+\-]?\d+(?:\.\d+)?/);
  return number
    ? { low: Number(number[0]), high: Number(number[0]) }
    : null;
}

function parseDamage(value: string): DamageRoll | null {
  const abstract = value.match(/^\s*(\([^)]+\))\s+to\s+(\([^)]+\))\s*$/i);
  if (abstract) {
    const minimum = parseRoll(abstract[1]);
    const maximum = parseRoll(abstract[2]);
    return minimum && maximum ? { minimum, maximum } : null;
  }
  const exact = value.match(/^\s*([\d.]+)\s*-\s*([\d.]+)\s*$/);
  return exact
    ? {
        minimum: { low: Number(exact[1]), high: Number(exact[1]) },
        maximum: { low: Number(exact[2]), high: Number(exact[2]) }
      }
    : null;
}

function addRoll(left: Roll, right: Roll): Roll {
  return { low: left.low + right.low, high: left.high + right.high };
}

function multiplyRoll(left: Roll, percent: Roll): Roll {
  return {
    low: left.low * (1 + percent.low / 100),
    high: left.high * (1 + percent.high / 100)
  };
}

function addPercent(target: Roll, amount: Roll, direction: string): void {
  const sign = direction.toLowerCase() === "reduced" ? -1 : 1;
  target.low += sign * amount.low;
  target.high += sign * amount.high;
}

function cleanNumber(value: number, decimals = 2): string {
  const factor = 10 ** decimals;
  const rounded = Math.round((value + Number.EPSILON) * factor) / factor;
  return String(rounded);
}

function formatRoll(
  roll: Roll,
  { decimals = 2, round = false }: { decimals?: number; round?: boolean } = {}
): string {
  const format = (value: number) =>
    cleanNumber(round ? Math.round(value) : value, decimals);
  return roll.low === roll.high
    ? format(roll.low)
    : `${format(roll.low)}-${format(roll.high)}`;
}

function formatDamage(damage: DamageRoll): string {
  const minimum = formatRoll(damage.minimum, { round: true });
  const maximum = formatRoll(damage.maximum, { round: true });
  return damage.minimum.low === damage.minimum.high &&
    damage.maximum.low === damage.maximum.high
    ? `${minimum}-${maximum}`
    : `(${minimum}) to (${maximum})`;
}

function splitProperties(properties: readonly string[]): Record<string, string> {
  return Object.fromEntries(
    properties.flatMap((property) => {
      const separator = property.indexOf(":");
      return separator === -1
        ? []
        : [[property.slice(0, separator).trim(), property.slice(separator + 1).trim()]];
    })
  );
}

function composeProperties(
  baseProperties: readonly string[],
  uniqueMods: readonly string[]
): string[] {
  const rawStats = splitProperties(baseProperties);
  const damages = new Map<string, DamageRoll>();
  const defences = new Map<string, Roll>();
  const defencePercents = new Map(
    DEFENCE_NAMES.map((name) => [name, { low: 0, high: 0 }])
  );
  const physicalPercent = { low: 0, high: 0 };
  const attackSpeedPercent = { low: 0, high: 0 };
  const criticalPercent = { low: 0, high: 0 };
  const blockPercent = { low: 0, high: 0 };
  let criticalFlat = { low: 0, high: 0 };
  let criticalOverride: Roll | null = null;
  let blockFlat = { low: 0, high: 0 };
  let forceZeroDefences = false;

  for (const type of DAMAGE_TYPES) {
    const damage = parseDamage(rawStats[`${type} Damage`] || "");
    if (damage) damages.set(type, damage);
  }
  for (const name of DEFENCE_NAMES) {
    const defence = parseRoll(rawStats[name] || "");
    if (defence) defences.set(name, defence);
  }

  for (const rawMod of uniqueMods) {
    const mod = rawMod.replace(/\s*,\s*/g, ", ");
    let match = mod.match(
      new RegExp(
        `^Adds\\s+${ROLL_SOURCE}\\s+to\\s+${ROLL_SOURCE}\\s+` +
          `(Physical|Fire|Cold|Lightning|Chaos)\\s+Damage$`,
        "i"
      )
    );
    if (match && damages.size > 0) {
      const type = match[3][0].toUpperCase() + match[3].slice(1).toLowerCase();
      const minimum = parseRoll(match[1]);
      const maximum = parseRoll(match[2]);
      if (!minimum || !maximum) continue;
      const damage = damages.get(type) || {
        minimum: { low: 0, high: 0 },
        maximum: { low: 0, high: 0 }
      };
      damage.minimum = addRoll(damage.minimum, minimum);
      damage.maximum = addRoll(damage.maximum, maximum);
      damages.set(type, damage);
      continue;
    }

    match = mod.match(
      new RegExp(`^${ROLL_SOURCE}\\s*%\\s+(increased|reduced)\\s+Physical Damage$`, "i")
    );
    if (match && damages.has("Physical")) {
      const amount = parseRoll(match[1]);
      if (amount) addPercent(physicalPercent, amount, match[2]);
      continue;
    }

    match = mod.match(
      new RegExp(`^${ROLL_SOURCE}\\s*%\\s+(increased|reduced)\\s+Attack Speed$`, "i")
    );
    if (match && rawStats["Attacks per Second"]) {
      const amount = parseRoll(match[1]);
      if (amount) addPercent(attackSpeedPercent, amount, match[2]);
      continue;
    }

    match = mod.match(new RegExp(`^\\+${ROLL_SOURCE}\\s*%\\s+to\\s+Critical Hit Chance$`, "i"));
    if (match && rawStats["Critical Hit Chance"]) {
      const amount = parseRoll(match[1]);
      if (amount) criticalFlat = addRoll(criticalFlat, amount);
      continue;
    }

    match = mod.match(new RegExp(`^${ROLL_SOURCE}\\s*%\\s+increased\\s+Critical Hit Chance$`, "i"));
    if (match && rawStats["Critical Hit Chance"]) {
      const amount = parseRoll(match[1]);
      if (amount) addPercent(criticalPercent, amount, "increased");
      continue;
    }

    match = mod.match(
      new RegExp(`^This Weapon's Critical Hit Chance is ${ROLL_SOURCE}\\s*%$`, "i")
    );
    if (match && rawStats["Critical Hit Chance"]) {
      criticalOverride = parseRoll(match[1]);
      continue;
    }

    match = mod.match(
      new RegExp(
        `^\\+${ROLL_SOURCE}\\s+to\\s+` +
          `(Armour|Evasion Rating|(?:maximum )?Energy Shield)$`,
        "i"
      )
    );
    if (match) {
      const defenceName = /^maximum Energy Shield$/i.test(match[2])
        ? "Energy Shield"
        : match[2];
      const amount = parseRoll(match[1]);
      if (amount && defences.has(defenceName)) {
        defences.set(defenceName, addRoll(defences.get(defenceName)!, amount));
        continue;
      }
    }

    match = mod.match(new RegExp(`^${ROLL_SOURCE}\\s*%\\s+(increased|reduced)\\s+(.+)$`, "i"));
    if (match && !/\b(?:Global|when|while|per)\b/i.test(mod)) {
      const amount = parseRoll(match[1]);
      const affected = DEFENCE_NAMES.filter((name) =>
        match![3].includes(name === "Evasion Rating" ? "Evasion" : name)
      );
      if (amount && affected.length > 0) {
        for (const name of affected) {
          addPercent(defencePercents.get(name)!, amount, match[2]);
        }
        continue;
      }
    }

    match = mod.match(new RegExp(`^\\+${ROLL_SOURCE}\\s*%\\s+to\\s+Block chance$`, "i"));
    if (match && rawStats["Block chance"]) {
      const amount = parseRoll(match[1]);
      if (amount) blockFlat = addRoll(blockFlat, amount);
      continue;
    }

    match = mod.match(new RegExp(`^${ROLL_SOURCE}\\s*%\\s+increased\\s+Block chance$`, "i"));
    if (match && rawStats["Block chance"]) {
      const amount = parseRoll(match[1]);
      if (amount) addPercent(blockPercent, amount, "increased");
      continue;
    }

    if (/^(?:Your )?Armour\s*,?\s*Evasion and Energy Shield are zero$/i.test(mod)) {
      forceZeroDefences = true;
    }
  }

  if (damages.has("Physical")) {
    const physical = damages.get("Physical")!;
    physical.minimum = multiplyRoll(physical.minimum, physicalPercent);
    physical.maximum = multiplyRoll(physical.maximum, physicalPercent);
  }

  const properties: string[] = [];
  for (const type of DAMAGE_TYPES) {
    const damage = damages.get(type);
    if (damage) properties.push(`${type} Damage: ${formatDamage(damage)}`);
  }

  const critical = parseRoll(rawStats["Critical Hit Chance"] || "");
  if (critical) {
    const value = criticalOverride ||
      multiplyRoll(addRoll(critical, criticalFlat), criticalPercent);
    properties.push(`Critical Hit Chance: ${formatRoll(value)}%`);
  }
  const attacks = parseRoll(rawStats["Attacks per Second"] || "");
  if (attacks) {
    properties.push(
      `Attacks per Second: ${formatRoll(multiplyRoll(attacks, attackSpeedPercent))}`
    );
  }
  if (rawStats["Reload Time"]) properties.push(`Reload Time: ${rawStats["Reload Time"]}`);
  if (rawStats["Weapon Range"]) properties.push(`Weapon Range: ${rawStats["Weapon Range"]}`);

  for (const name of DEFENCE_NAMES) {
    const defence = defences.get(name);
    if (!defence) continue;
    const value = forceZeroDefences
      ? { low: 0, high: 0 }
      : multiplyRoll(defence, defencePercents.get(name)!);
    properties.push(`${name}: ${formatRoll(value, { round: true })}`);
  }

  const block = parseRoll(rawStats["Block chance"] || "");
  if (block) {
    properties.push(
      `Block Chance: ${formatRoll(multiplyRoll(addRoll(block, blockFlat), blockPercent))}%`
    );
  }

  for (const [name, value] of Object.entries(rawStats)) {
    if (DAMAGE_TYPES.some((type) => name === `${type} Damage`)) continue;
    if (
      [
        "Critical Hit Chance",
        "Attacks per Second",
        "Reload Time",
        "Weapon Range",
        "Block chance",
        ...DEFENCE_NAMES
      ].includes(name)
    ) {
      continue;
    }
    properties.push(`${name}: ${value}`);
  }
  return properties;
}

function getPropertyStyle(property: string): number | null {
  if (/^Physical Damage:/i.test(property)) return 1;
  if (/^Fire Damage:/i.test(property)) return 4;
  if (/^Cold Damage:/i.test(property)) return 5;
  if (/^Lightning Damage:/i.test(property)) return 6;
  if (/^Chaos Damage:/i.test(property)) return 7;
  return property.includes(":") ? 0 : null;
}

function composeRequirements(
  requirements: string,
  uniqueMods: readonly string[]
): string {
  const values = new Map<string, Roll>();
  const order: string[] = [];
  for (const part of requirements.replace(/^Requires:\s*/i, "").split(/,\s*/)) {
    const match = part.match(/^(?:Level\s+)?(-?\d+(?:\.\d+)?)\s*(Str|Dex|Int)?$/i);
    if (!match) continue;
    const key = match[2] || "Level";
    values.set(key, { low: Number(match[1]), high: Number(match[1]) });
    order.push(key);
  }

  const attributeNames = new Map([
    ["Strength", "Str"],
    ["Dexterity", "Dex"],
    ["Intelligence", "Int"]
  ]);
  const allPercent = { low: 0, high: 0 };
  const attributePercents = new Map(
    [...attributeNames.values()].map((key) => [key, { low: 0, high: 0 }])
  );
  const attributeFlats = new Map(
    [...attributeNames.values()].map((key) => [key, { low: 0, high: 0 }])
  );
  let noAttributeRequirements = false;

  for (const mod of uniqueMods) {
    if (/^Has no Attribute Requirements$/i.test(mod)) {
      noAttributeRequirements = true;
      continue;
    }
    let match = mod.match(
      new RegExp(
        `^(?:Equipment and Skill Gems have\\s+)?${ROLL_SOURCE}\\s*%\\s+` +
          `(increased|reduced)\\s+Attribute Requirements$`,
        "i"
      )
    );
    if (match) {
      const amount = parseRoll(match[1]);
      if (amount) addPercent(allPercent, amount, match[2]);
      continue;
    }
    match = mod.match(
      new RegExp(`^${ROLL_SOURCE}\\s*%\\s+(increased|reduced)\\s+(Strength|Dexterity|Intelligence) Requirement$`, "i")
    );
    if (match) {
      const amount = parseRoll(match[1]);
      if (amount) addPercent(attributePercents.get(attributeNames.get(match[3])!)!, amount, match[2]);
      continue;
    }
    match = mod.match(
      /^([+\-](?:\([^)]+\)|\d+(?:\.\d+)?))\s+(Strength|Dexterity|Intelligence) Requirement$/i
    );
    if (match) {
      const amount = parseRoll(match[1]);
      const key = attributeNames.get(match[2]);
      if (amount && key) attributeFlats.set(key, addRoll(attributeFlats.get(key)!, amount));
    }
  }

  if (noAttributeRequirements) {
    for (const key of attributeNames.values()) values.delete(key);
  } else {
    for (const key of attributeNames.values()) {
      const flat = attributeFlats.get(key)!;
      if (!values.has(key) && flat.low === 0 && flat.high === 0) continue;
      const base = values.get(key) || { low: 0, high: 0 };
      const percent = addRoll(allPercent, attributePercents.get(key)!);
      values.set(key, addRoll(multiplyRoll(base, percent), flat));
      if (!order.includes(key)) order.push(key);
    }
  }

  const parts = order
    .filter((key, index) => order.indexOf(key) === index && values.has(key))
    .map((key) => {
      const value = formatRoll(values.get(key)!);
      return key === "Level" ? `Level ${value}` : `${value} ${key}`;
    });
  return `Requires: ${parts.join(", ")}`;
}

export function composeRuneforgedView(
  variant: UniqueRuneforgingDefinition,
  uniqueMods: readonly string[]
): ComposedRuneforgedView {
  const properties = composeProperties(variant.properties, uniqueMods);
  return {
    properties,
    propertyStyles: properties.map(getPropertyStyle),
    requirements: composeRequirements(variant.requirements, uniqueMods)
  };
}

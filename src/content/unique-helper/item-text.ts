export function appendTextElement(
  doc: Document,
  parent: ParentNode,
  tagName: string,
  className: string,
  text: string
): HTMLElement {
  const element = doc.createElement(tagName);
  element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
}

const ITEM_NUMBER_PATTERN =
  /[+\-]?(?:\([+\-]?\d+(?:\.\d+)?-[+\-]?\d+(?:\.\d+)?\)|\d+(?:\.\d+)?-[+\-]?\d+(?:\.\d+)?|\d+(?:\.\d+)?)(?:%|m)?/g;

export function appendModifierText(
  doc: Document,
  parent: HTMLElement,
  value: string
): void {
  let cursor = 0;
  for (const match of value.matchAll(ITEM_NUMBER_PATTERN)) {
    const index = match.index ?? 0;
    if (index > cursor) parent.append(doc.createTextNode(value.slice(cursor, index)));
    const token = doc.createElement("span");
    token.className =
      "poe-trade-styler-item-token poe-trade-styler-item-token-value";
    token.textContent = match[0];
    parent.append(token);
    cursor = index + match[0].length;
  }
  if (cursor < value.length) parent.append(doc.createTextNode(value.slice(cursor)));
}

export function appendPropertyText(
  doc: Document,
  parent: HTMLElement,
  value: string,
  style: number | null
): void {
  const colon = value.indexOf(":");
  if (colon === -1) {
    parent.textContent = value;
    return;
  }
  parent.append(doc.createTextNode(value.slice(0, colon + 1)));
  const propertyValue = doc.createElement("span");
  const styleClass = new Map<number | null, string>([
    [0, "default"],
    [1, "augmented"],
    [4, "fire"],
    [5, "cold"],
    [6, "lightning"],
    [7, "chaos"]
  ]).get(style) || "default";
  propertyValue.className =
    `poe-trade-styler-property-value poe-trade-styler-property-value-${styleClass}`;
  propertyValue.textContent = value.slice(colon + 1);
  parent.append(propertyValue);
}

export function appendRequirementText(
  doc: Document,
  parent: HTMLElement,
  value: string
): void {
  const colon = value.indexOf(":");
  if (colon === -1) {
    parent.textContent = value;
    return;
  }
  parent.append(doc.createTextNode(value.slice(0, colon + 1)));
  const requirementValue = doc.createElement("span");
  requirementValue.className = "poe-trade-styler-requirement-value";
  requirementValue.textContent = value.slice(colon + 1);
  parent.append(requirementValue);
}

export function appendImplicitText(
  doc: Document,
  parent: HTMLElement,
  value: string
): void {
  const skill = value.match(/^(Grants Skill:)(.*)$/i);
  if (!skill) {
    appendModifierText(doc, parent, value);
    return;
  }
  parent.append(doc.createTextNode(skill[1]));
  const skillName = doc.createElement("span");
  skillName.className = "poe-trade-styler-skill-value";
  skillName.textContent = skill[2];
  parent.append(skillName);
}

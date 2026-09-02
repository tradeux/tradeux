import type { GemDefinition } from "../ports";
import { GENERATED_WIKI_GEM_DETAILS } from "./generated-wiki-details";

export interface SkillGemProgressionColumn {
  label: string;
  title: string;
}

export interface SkillGemProgression {
  columns: readonly SkillGemProgressionColumn[];
  rows: readonly (readonly string[])[];
}

export interface SkillGemDetail {
  description: string;
  effects: readonly SkillGemEffectSection[];
  progression: SkillGemProgression | null;
  properties: readonly SkillGemProperty[];
  qualityEffects: readonly string[];
  requirement: string;
  revisionId: number;
  tags: readonly string[];
  wikiTitle: string;
}

interface SkillGemEffectSection {
  lines: readonly string[];
  title: string;
}

interface SkillGemProperty {
  label: string;
  value: string;
}

const DETAILS_BY_KEY: Readonly<Record<string, SkillGemDetail>> =
  GENERATED_WIKI_GEM_DETAILS;

export function getSkillGemDetail(gem: GemDefinition): SkillGemDetail {
  return DETAILS_BY_KEY[gem.key] || {
    description:
      "Open the Path of Exile 2 Wiki for the complete skill description and level progression.",
    effects: [],
    progression: null,
    properties: [
      { label: "Tier", value: String(gem.tier) },
      { label: "Required Level", value: String(gem.requiredLevel) }
    ],
    qualityEffects: [],
    requirement: "",
    revisionId: 0,
    tags: gem.tags,
    wikiTitle: gem.name
  };
}

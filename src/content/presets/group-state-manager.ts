import { getPresetGroupPolicy, type GroupPolicyMode } from "./group-policy";

interface SavedGroupState {
  enabled: boolean;
  expanded: boolean;
}

export function createPresetGroupStateManager({
  getGearSlotKey,
  getGroupKey
}: {
  getGearSlotKey(): string | null;
  getGroupKey(group: Element): string;
}) {
  const savedStates = new Map<Element, SavedGroupState>();

  function getGroups(): Element[] {
    return [...document.querySelectorAll(
      "#trade .search-advanced-pane .filter-group"
    )];
  }

  function getToggle(group: Element): HTMLElement | null {
    return group.querySelector<HTMLElement>(
      ":scope > .filter-group-header .toggle-btn"
    );
  }

  function setEnabled(group: Element, enabled: boolean): boolean {
    const toggle = getToggle(group);
    if (!toggle || toggle.classList.contains("off") !== enabled) return false;
    toggle.click();
    return true;
  }

  function setExpanded(group: Element, expanded: boolean): void {
    if (group.classList.contains("expanded") === expanded) return;
    group.querySelector<HTMLElement>(
      ":scope > .filter-group-header .filter-title-clickable, " +
        ":scope > .filter-group-header .filter-title"
    )?.click();
  }

  function remember(group: Element): void {
    if (savedStates.has(group)) return;
    const toggle = getToggle(group);
    savedStates.set(group, {
      enabled: !toggle || !toggle.classList.contains("off"),
      expanded: group.classList.contains("expanded")
    });
  }

  async function waitForStage(): Promise<void> {
    await new Promise<void>((resolve) => setTimeout(resolve, 100));
  }

  async function collapseEnabledGroups(): Promise<void> {
    // Let the native Clear action finish its Vue render before touching groups.
    await waitForStage();
    for (const group of getGroups()) {
      remember(group);
      const toggle = getToggle(group);
      // Collapse while the group is still enabled. The live trade form can
      // ignore header clicks after its enable toggle has been switched off.
      setExpanded(group, false);
      // Only click enabled toggles. Clicking already-disabled groups can invert
      // state when a delayed native render lands between reads and clicks.
      if (!toggle || !toggle.classList.contains("off")) setEnabled(group, false);
    }
    // Keep group disabling separate from preset-specific enabling.
    await waitForStage();
  }

  async function apply(mode: GroupPolicyMode): Promise<void> {
    let toggled = false;
    for (const group of getGroups()) {
      remember(group);
      const policy = getPresetGroupPolicy(mode, getGroupKey(group), {
        gearSlotKey: getGearSlotKey()
      });
      // Clean up classes from older builds. Presets now manipulate existing
      // native groups exclusively through their own controls.
      group.classList.remove("poe-trade-styler-preset-collapsed");
      group.classList.remove("poe-trade-styler-preset-hidden");
      // Native disabled headers are not consistently clickable. Close every
      // unwanted body before disabling it, including groups left open by a
      // previous preset or a manual user selection.
      if (!policy.enabled || policy.expanded === false) {
        setExpanded(group, false);
      }
      toggled = setEnabled(group, policy.enabled) || toggled;
    }

    // Vue may replace a header after an enable click. Re-query once after its
    // bounded render and click the current native headers to expand them.
    if (toggled) await waitForStage();
    for (const group of getGroups()) {
      const policy = getPresetGroupPolicy(mode, getGroupKey(group), {
        gearSlotKey: getGearSlotKey()
      });
      group.classList.remove("poe-trade-styler-preset-collapsed");
      group.classList.remove("poe-trade-styler-preset-hidden");
      if (!policy.enabled || policy.expanded === false) {
        setExpanded(group, false);
      }
      setEnabled(group, policy.enabled);
      setExpanded(group, policy.enabled && policy.expanded !== false);
    }
  }

  function restore(restorePrevious = true): void {
    for (const group of getGroups()) {
      group.classList.remove("poe-trade-styler-preset-collapsed");
      group.classList.remove("poe-trade-styler-preset-hidden");
      const previous = savedStates.get(group);
      if (!previous || !restorePrevious) continue;
      setEnabled(group, previous.enabled);
      setExpanded(group, previous.expanded);
    }
    savedStates.clear();
  }

  return { apply, collapseEnabledGroups, restore };
}

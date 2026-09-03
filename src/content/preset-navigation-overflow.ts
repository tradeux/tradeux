export const PRESET_ACCOUNT_OVERFLOW_CLASS =
  "poe-trade-styler-preset-account-overflow";

export function isPresetAccountOverflow(item: Element | null): boolean {
  return Boolean(item?.classList.contains(PRESET_ACCOUNT_OVERFLOW_CLASS));
}

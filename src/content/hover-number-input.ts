export interface HoverNumberInputController {
  enable(input: HTMLInputElement): void;
  handleKeyDown(event: KeyboardEvent): boolean;
}

export function createHoverNumberInputController(): HoverNumberInputController {
  let hoveredInput: HTMLInputElement | null = null;

  return {
    enable(input): void {
      input.addEventListener("pointerenter", () => {
        hoveredInput = input;
      });
      input.addEventListener("pointerleave", () => {
        if (hoveredInput === input) hoveredInput = null;
      });
    },

    handleKeyDown(event): boolean {
      const input = hoveredInput;
      const isDigit = event.key.length === 1 && event.key >= "0" && event.key <= "9";

      if (
        !input ||
        !input.isConnected ||
        input.disabled ||
        input.readOnly ||
        input === input.ownerDocument.activeElement ||
        event.isComposing ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        (!isDigit && event.key !== "Backspace")
      ) {
        return false;
      }

      input.value = isDigit
        ? `${input.value}${event.key}`
        : input.value.slice(0, -1);
      input.dispatchEvent(new Event("input", { bubbles: true }));
      event.preventDefault();
      event.stopPropagation();
      return true;
    }
  };
}

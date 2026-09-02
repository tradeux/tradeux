export interface HoverPopoverBinding {
  dismiss(): void;
}

interface InternalHoverPopoverBinding extends HoverPopoverBinding {
  cancelClose(): void;
  container: Element;
  isPinned(): boolean;
}

const bindingsByContainer = new WeakMap<Element, InternalHoverPopoverBinding>();
const bindingsByDocument = new WeakMap<
  Document,
  Set<InternalHoverPopoverBinding>
>();
const documentsWithOutsidePointerHandler = new WeakSet<Document>();

export function bindHoverPopover({
  button,
  close,
  container,
  open
}: {
  button: Element;
  close(): void;
  container: Element;
  open(): void;
}): HoverPopoverBinding {
  const existingBinding = bindingsByContainer.get(container);
  if (existingBinding) return existingBinding;

  let closeTimer: ReturnType<typeof setTimeout> | null = null;
  let pinned = false;
  const ownerDocument = container.ownerDocument;
  const bindings = bindingsByDocument.get(ownerDocument) || new Set();
  bindingsByDocument.set(ownerDocument, bindings);

  if (!documentsWithOutsidePointerHandler.has(ownerDocument)) {
    documentsWithOutsidePointerHandler.add(ownerDocument);
    ownerDocument.addEventListener("pointerdown", (event) => {
      const target = event.target;
      const NodeConstructor = ownerDocument.defaultView?.Node;
      for (const binding of bindings) {
        if (!binding.container.isConnected) {
          bindings.delete(binding);
          continue;
        }
        if (
          binding.isPinned() &&
          (!NodeConstructor ||
            !(target instanceof NodeConstructor) ||
            !binding.container.contains(target))
        ) {
          binding.dismiss();
        }
      }
    }, true);
  }

  const cancelClose = () => {
    if (closeTimer === null) return;
    clearTimeout(closeTimer);
    closeTimer = null;
  };
  const dismiss = () => {
    pinned = false;
    cancelClose();
    close();
  };
  const openNow = () => {
    cancelClose();
    if (button.getAttribute("aria-expanded") === "false") {
      pinned = false;
    }
    for (const binding of bindings) {
      if (binding === currentBinding) continue;
      if (!binding.container.isConnected) {
        bindings.delete(binding);
        continue;
      }
      binding.cancelClose();
      binding.dismiss();
    }
    open();
  };
  const pinOpen = () => {
    openNow();
    pinned = true;
  };
  const closeSoon = () => {
    if (pinned) return;
    cancelClose();
    closeTimer = setTimeout(() => {
      closeTimer = null;
      close();
    }, 120);
  };
  const currentBinding: InternalHoverPopoverBinding = {
    cancelClose,
    container,
    dismiss,
    isPinned: () => pinned
  };
  bindings.add(currentBinding);
  bindingsByContainer.set(container, currentBinding);

  button.addEventListener("pointerenter", openNow);
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    pinOpen();
  });
  container.addEventListener("pointerenter", openNow);
  container.addEventListener("pointerleave", closeSoon);
  container.addEventListener("focusin", openNow);
  container.addEventListener("focusout", (event) => {
    const relatedTarget = (event as FocusEvent).relatedTarget;
    const NodeConstructor = ownerDocument.defaultView?.Node;
    if (
      NodeConstructor &&
      relatedTarget instanceof NodeConstructor &&
      container.contains(relatedTarget)
    ) return;
    closeSoon();
  });
  container.addEventListener("click", (event) => {
    const target = event.target;
    const ElementConstructor = ownerDocument.defaultView?.Element;
    if (!ElementConstructor || !(target instanceof ElementConstructor)) return;
    const selectedButton = target.closest("button");
    if (
      !selectedButton ||
      selectedButton === button ||
      !container.contains(selectedButton)
    ) return;
    dismiss();
  }, true);

  return currentBinding;
}

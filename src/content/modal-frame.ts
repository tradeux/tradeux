export type ModalFrameKind = "settings" | "unique" | "gear" | "gems";

export interface ModalFrameOptions {
  kind: ModalFrameKind;
  overlayId: string;
  dialogClassName: string;
  headerClassName?: string;
  titleClassName?: string;
  closeButtonClassName: string;
  titleId: string;
  titleText: string;
  closeLabel: string;
  showFooterCrest?: boolean;
  dialogTag?: "div" | "section";
  dialogTabIndex?: number;
}

export interface ModalFrameElements {
  overlay: HTMLDivElement;
  dialog: HTMLElement;
  header: HTMLElement;
  title: HTMLHeadingElement;
  closeButton: HTMLButtonElement;
}

const ORNAMENTS: ReadonlyArray<{ name: string; asset?: string }> = [
  { name: "texture" },
  { name: "sigil", asset: "assets/ui/frame/v2/arcane-sigil-v2.png" },
  { name: "corner-tl", asset: "assets/ui/frame/v2/corner-filigree-v2.png" },
  { name: "corner-tr", asset: "assets/ui/frame/v2/corner-filigree-v2.png" },
  { name: "corner-bl", asset: "assets/ui/frame/v2/corner-filigree-v2.png" },
  { name: "corner-br", asset: "assets/ui/frame/v2/corner-filigree-v2.png" },
  { name: "footer-crest", asset: "assets/ui/frame/v2/footer-crest-v2.png" }
] as const;

function joinClassNames(...classNames: (string | undefined)[]): string {
  return classNames.filter(Boolean).join(" ");
}

function getExtensionAssetUrl(path: string): string {
  try {
    return chrome.runtime.getURL(path);
  } catch {
    return path;
  }
}

/**
 * Builds the common accessible shell used by the settings and preset modals.
 * Feature controllers keep ownership of their content and open/close behavior.
 */
export function createModalFrame(
  doc: Document,
  options: ModalFrameOptions
): ModalFrameElements {
  const overlay = doc.createElement("div");
  overlay.id = options.overlayId;
  overlay.className = "poe-trade-styler-modal-backdrop";
  overlay.dataset.poeTradeStylerModal = options.kind;
  overlay.hidden = true;
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", options.titleId);

  const dialog = doc.createElement(options.dialogTag ?? "div");
  dialog.className = joinClassNames(
    options.dialogClassName,
    "poe-trade-styler-modal-frame"
  );
  if (options.dialogTabIndex !== undefined) {
    dialog.tabIndex = options.dialogTabIndex;
  }

  for (const { name, asset } of ORNAMENTS) {
    if (name === "footer-crest" && !options.showFooterCrest) {
      continue;
    }
    const ornament: HTMLElement = asset
      ? doc.createElement("img")
      : doc.createElement("span");
    ornament.className =
      `poe-trade-styler-modal-ornament is-${name}`;
    ornament.setAttribute("aria-hidden", "true");
    if (asset) {
      const image = ornament as HTMLImageElement;
      image.alt = "";
      image.src = getExtensionAssetUrl(asset);
      image.referrerPolicy = "no-referrer";
    }
    dialog.append(ornament);
  }

  const header = doc.createElement("header");
  header.className = joinClassNames(
    options.headerClassName,
    "poe-trade-styler-modal-title-system"
  );

  const title = doc.createElement("h2");
  title.id = options.titleId;
  title.className = joinClassNames(
    options.titleClassName,
    "poe-trade-styler-modal-title"
  );
  title.textContent = options.titleText;

  const closeButton = doc.createElement("button");
  closeButton.className = joinClassNames(
    options.closeButtonClassName,
    "poe-trade-styler-modal-close"
  );
  closeButton.type = "button";
  closeButton.textContent = "×";
  closeButton.setAttribute("aria-label", options.closeLabel);

  header.append(title, closeButton);
  dialog.append(header);
  overlay.append(dialog);

  return { overlay, dialog, header, title, closeButton };
}

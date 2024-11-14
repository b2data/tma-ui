import {
  AllHTMLAttributes,
  ClipboardEvent,
  FocusEvent,
  useRef,
  useState,
} from "react";
import type { TypographyProps } from "./Typography";

import TurndownService from "turndown";

const turndownService = new TurndownService({
  headingStyle: "atx",
  hr: "* * *",
  br: "\n",
  bulletListMarker: "-",
  codeBlockStyle: "indented",
  emDelimiter: "_",
  fence: "```",
  strongDelimiter: "**",
  linkStyle: "inlined",
  linkReferenceStyle: "full",
  // preformattedCode: true,
});

export const handlePasteAsPlainText = (e: React.ClipboardEvent) => {
  e.preventDefault();
  const text = e.clipboardData.getData("text/plain");
  const selection = window.getSelection();
  if (!selection?.rangeCount) return;
  selection.deleteFromDocument();
  selection.getRangeAt(0).insertNode(document.createTextNode(text));
  selection.collapseToEnd();
};

export const handlePasteAsMarkdown = (e: React.ClipboardEvent) => {
  e.preventDefault();
  const text = turndownService.turndown(e.clipboardData.getData("text/html"));
  const selection = window.getSelection();
  if (!selection?.rangeCount) return;
  selection.deleteFromDocument();
  selection.getRangeAt(0).insertNode(document.createTextNode(text));
  selection.collapseToEnd();
};

export const useEditableConfig = (
  {
    enabled,
    placeholder,
    plain,
    markdown,
    markdownRaw,
  }: TypographyProps["editableProps"] & { markdownRaw?: string } = {},
  { onBlur, onFocus, onPaste }: AllHTMLAttributes<HTMLElement>,
) => {
  const [state, setState] = useState(0);
  const ref = useRef<HTMLElement>(null);

  if (enabled) {
    return {
      ref,
      state,
      contentEditable: true,
      "data-placeholder": placeholder,
      onFocus: (e: FocusEvent<HTMLElement>) => {
        if (markdown) {
          e.target.innerHTML =
            markdownRaw || turndownService.turndown(e.target.innerHTML);
        }
        onFocus?.(e);
      },
      onBlur: (e: FocusEvent<HTMLElement>) => {
        if (e.target.innerHTML === "<br>") {
          e.target.innerHTML = "";
        }
        setState((prev) => prev + 1);
        onBlur?.(e);
      },
      onPaste: (e: ClipboardEvent<HTMLElement>) => {
        if (plain) {
          handlePasteAsPlainText(e);
        }
        if (markdown) {
          handlePasteAsMarkdown(e);
        }
        onPaste?.(e);
      },
    };
  }

  return {};
};

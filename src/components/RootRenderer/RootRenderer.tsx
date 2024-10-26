import { isValidElement, ReactNode, RefObject } from "react";
import { createPortal } from "react-dom";

export interface RootRendererProps {
  children?: ReactNode;
  portalContainer?: RefObject<HTMLDivElement>;
}

export const RootRenderer = ({
  children,
  portalContainer,
}: RootRendererProps) => {
  if (!portalContainer?.current) {
    return isValidElement(children) ? children : null;
  }

  return createPortal(children, portalContainer.current);
};

import { forwardRef, useMemo } from "react";
import styles from "./ModalOverlay.module.css";

import { classNames, hexToRGB } from "@/helpers";

import { Drawer } from "vaul";

export interface ModalOverlayProps {
  className?: string;
  hexBgColor?: string; // should be HEX
}

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
  ({ className, hexBgColor, ...props }, ref) => {
    const [r, g, b] = useMemo(() => {
      if (hexBgColor) {
        return hexToRGB(hexBgColor);
      }

      if (window.Telegram?.WebApp?.themeParams?.bg_color) {
        return hexToRGB(window.Telegram?.WebApp?.themeParams?.bg_color);
      }

      return [255, 255, 255];
    }, [window.Telegram?.WebApp, hexBgColor]);

    return (
      <Drawer.Overlay
        ref={ref}
        // Opacity on overlay is dynamically calculated based on the percentage of opened drawers
        // This is why we use rgba here and not background: token + opacity
        style={{ background: `rgba(${r}, ${g}, ${b}, .85)` }}
        className={classNames(styles.wrapper, className)}
        {...props}
      />
    );
  },
);

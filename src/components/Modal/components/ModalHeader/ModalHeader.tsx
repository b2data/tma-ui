import { forwardRef, HTMLAttributes, ReactNode } from "react";
import styles from "./ModalHeader.module.css";

import { classNames } from "@/helpers";
import { usePlatform } from "@/hooks";
import { Typography } from "@/components/Typography";

export interface ModalHeaderProps extends HTMLAttributes<HTMLElement> {
  /** Inserts a component before the header text, e.g. Icon */
  startAdornment?: ReactNode;
  /** Inserts a component after the header text, e.g. Icon */
  endAdornment?: ReactNode;
}

export const ModalHeader = forwardRef<HTMLElement, ModalHeaderProps>(
  ({ startAdornment, endAdornment, className, children, ...props }, ref) => {
    const platform = usePlatform();

    return (
      <header
        ref={ref}
        className={classNames(styles.wrapper, className)}
        {...props}
      >
        <div className={styles.startAdornment}>{startAdornment}</div>
        {platform === "ios" && (
          <Typography className={styles.children}>{children}</Typography>
        )}
        <div className={styles.endAdornment}>{endAdornment}</div>
      </header>
    );
  },
);

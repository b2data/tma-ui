import { HTMLAttributes, ReactElement, ReactNode, useState } from "react";
import styles from "./Snackbar.module.css";

import { classNames, hasReactNode } from "@/helpers";

import { usePlatform, useTimeout } from "@/hooks";
import { LinkProps } from "@/components/Link";
import { RootRenderer } from "@/components/RootRenderer";
import { Typography } from "@/components/Typography";
import useOnMount from "@/hooks/useOnMount";

export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  /** Element or component to be displayed on the left side of the snackbar. */
  startAdornment?: ReactNode;
  /** Element or component to be displayed on the right side of the snackbar. */
  endAdornment?: ReactNode;
  /** The main content of the snackbar, typically text or a message. */
  children?: ReactNode;
  /** Additional content displayed below the main message. */
  description?: ReactNode;
  /** A link component to be included in the snackbar for user interaction. */
  link?: ReactElement<LinkProps>;
  /** The duration in milliseconds after which the snackbar will automatically close. */
  duration?: number;
  /** Callback function invoked when the snackbar is closed. */
  onClose: () => void;
}

const TRANSITION_FINISH_DURATION = 320;

/**
 * Displays a brief message at the bottom of the screen, which can contain actions and other content.
 * It automatically dismisses after a set duration, providing feedback or interaction prompts to users.
 */
export const Snackbar = ({
  startAdornment,
  endAdornment,
  description,
  link,
  children,
  className,
  duration = 4000,
  onClose,
  ...restProps
}: SnackbarProps) => {
  const platform = usePlatform();
  const [closing, setClosing] = useState(false);
  const timer = useTimeout();

  const close = () => {
    setClosing(true);
    setTimeout(onClose, TRANSITION_FINISH_DURATION);
  };

  const startTimer = () => timer.start(duration, close);

  useOnMount(startTimer);

  return (
    <RootRenderer>
      <div
        className={classNames(
          styles.wrapper,
          platform === "ios" && styles["wrapper--ios"],
          closing && styles["wrapper--closing"],
          className,
        )}
        {...restProps}
      >
        <div className={styles.body}>
          {hasReactNode(startAdornment) && (
            <div className={styles.startAdornment}>{startAdornment}</div>
          )}
          <div className={styles.middle}>
            {hasReactNode(children) && (
              <Typography variant="caption" weight="bold">
                {children}
              </Typography>
            )}
            {hasReactNode(description) && (
              <Typography variant="caption">{description}</Typography>
            )}
            {hasReactNode(link) && (
              <Typography variant="caption">{link}</Typography>
            )}
          </div>
          {hasReactNode(endAdornment) && (
            <div className={styles.endAdornment}>{endAdornment}</div>
          )}
        </div>
      </div>
    </RootRenderer>
  );
};

import { HTMLAttributes } from "react";
import styles from "./Badge.module.css";

import { classNames, hasReactNode } from "@/helpers";
import { Typography } from "../Typography";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** The visual style of the badge: 'text' displays the content, 'dot' shows a simple dot. */
  type?: "text" | "dot";
  /** The color scheme of the badge, affecting its background and text color. */
  mode?: "primary" | "critical" | "secondary" | "gray" | "white";
  /** Increases the size of the badge. Applicable only when `type` is 'number'. */
  large?: boolean;
}

const typeStyles = {
  text: styles["wrapper--text"],
  dot: styles["wrapper--dot"],
};

const modeStyles = {
  primary: styles["wrapper--primary"],
  critical: styles["wrapper--critical"],
  secondary: styles["wrapper--secondary"],
  gray: styles["wrapper--gray"],
  white: styles["wrapper--white"],
};

/**
 * The `Badge` component renders a small numeric or dot indicator, typically used for notifications, statuses, or counts.
 * It supports several visual modes for different contexts (e.g., critical, primary) and can be sized normally or enlarged.
 */
export const Badge = ({
  type = "text",
  mode = "primary",
  large,
  className,
  children,
  ...restProps
}: BadgeProps) => {
  const isDot = type === "dot";
  return (
    <span
      className={classNames(
        styles.wrapper,
        typeStyles[type],
        modeStyles[mode],
        !isDot && large && styles["wrapper--large"],
        className,
      )}
      {...restProps}
    >
      {hasReactNode(children) && !isDot && (
        <>
          {large && (
            <Typography variant="subHeadline" small Component="span">
              {children}
            </Typography>
          )}
          {!large && (
            <Typography variant="caption" small>
              {children}
            </Typography>
          )}
        </>
      )}
    </span>
  );
};

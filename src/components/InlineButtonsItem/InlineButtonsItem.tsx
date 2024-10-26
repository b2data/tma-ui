import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./InlineButtonsItem.module.css";

import { Badge } from "@/components/Badge";
import { Tappable } from "@/components/Tappable";
import { classNames, hasReactNode } from "@/helpers";
import { usePlatform } from "@/hooks";

import { Typography } from "../Typography";

export interface InlineButtonsItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Text displayed inside the button. */
  text?: string;
  /** Indicate that the button is selected. */
  selected?: boolean;
  /** Indicate that the button is disabled. */
  disabled?: boolean;
  /** Showing the page for image with presented content. */
  badgeContent?: string | number;
  /** Typically an Icon, to be rendered inside the button. */
  children?: ReactNode;
}

/**
 * `InlineButtonsItem` is designed for use within an InlineButtons container but can also serve as a standalone button
 * if used by itself. It supports displaying optional text and selected mode.
 */
export const InlineButtonsItem = ({
  className,
  text,
  children,
  selected,
  disabled,
  badgeContent,
  onClick,
  ...restProps
}: InlineButtonsItemProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      Component="button"
      className={classNames(
        styles.wrapper,
        platform === "ios" && styles["wrapper--ios"],
        selected && styles["wrapper--selected"],
        className,
      )}
      selected={selected}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...restProps}
    >
      {children}
      {hasReactNode(text) && (
        <Typography className={styles.text} variant="caption">
          {text}
        </Typography>
      )}
      {badgeContent ? (
        <Badge className={styles.badge}>{badgeContent}</Badge>
      ) : undefined}
    </Tappable>
  );
};

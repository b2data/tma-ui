import { ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./IconButton.module.css";

import { classNames } from "@/helpers";
import { Tappable } from "@/components/Tappable";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Specifies the button size, affecting icon scaling. Recommended icon sizes are 20px for 'small', 24px for 'medium', and 28px for 'large'. */
  size?: "small" | "medium" | "large";
  /** Defines the button's background and text color. */
  color?: "primary" | "secondary" | "error" | "warning" | "default";
  /** Defines the button's visual style. */
  variant?: "contained" | "outlined";
}

const variantStyles = {
  contained: styles["wrapper--contained"],
  outlined: styles["wrapper--outlined"],
};

const colorStyles = {
  primary: styles["wrapper--primary"],
  secondary: styles["wrapper--secondary"],
  error: styles["wrapper--error"],
  warning: styles["wrapper--warning"],
  default: styles["wrapper--default"],
};

const sizeStyles = {
  small: styles["wrapper--small"],
  medium: styles["wrapper--medium"],
  large: styles["wrapper--large"],
};

/**
 * Renders an icon button with customizable size, variant, and color.
 */
export const IconButton = forwardRef(
  (
    {
      size = "medium",
      variant = "outlined",
      color = "primary",
      className,
      children,
      ...restProps
    }: IconButtonProps,
    ref,
  ) => (
    <Tappable
      Component="button"
      className={classNames(
        styles.wrapper,
        sizeStyles[size],
        variantStyles[variant],
        colorStyles[color],
        className,
      )}
      {...restProps}
      ref={ref}
    >
      {children}
    </Tappable>
  ),
);

import { ElementType, forwardRef, ReactNode } from "react";
import styles from "./Button.module.css";

import { classNames } from "@/helpers";
import { usePlatform } from "@/hooks";
import { Spinner } from "@/components/Spinner";
import { Tappable, TappableProps } from "@/components/Tappable";
import { Typography } from "../Typography";

export interface ButtonProps
  extends Omit<TappableProps<HTMLButtonElement>, "size"> {
  /** Controls the size of the button, influencing padding and font size. */
  size?: "small" | "medium" | "large";
  /** If true, stretches the button to fill the width with its container. */
  fullWidth?: boolean;
  /** Defines the button's background and text color. */
  color?: "primary" | "secondary" | "error" | "warning" | "default";
  /** Defines the button's visual style. */
  variant?: "contained" | "outlined" | "text";
  /** Displays a loading indicator in place of the button content when true. */
  loading?: boolean;
  /** Disables the button, preventing user interactions, when true. */
  disabled?: boolean;
  /** Inserts a component before the button text, typically an icon. */
  startAdornment?: ReactNode;
  /** Inserts a component after the button text, such as a badge or indicator. */
  endAdornment?: ReactNode;
  /** Specifies the root element type for the button, allowing for semantic customization or integration with routing libraries. */
  Component?: ElementType;
  /** Additional class to pass to elements */
  classes?: {
    spinner?: string;
    startAdornment?: string;
    endAdornment?: string;
  };
}

const variantStyles = {
  contained: styles["wrapper--contained"],
  outlined: styles["wrapper--outlined"],
  text: styles["wrapper--text"],
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
 * Renders a button or a button-like element with customizable properties, such as size, variant, color, loading, disable states. Supports adding icons or other elements before and after the text.
 */
export const Button = forwardRef(
  (
    {
      type,
      variant = "contained",
      color = "primary",
      size = "medium",
      startAdornment,
      endAdornment,
      fullWidth,
      children,
      className,
      loading,
      Component = "button",
      classes = {},
      ...restProps
    }: ButtonProps,
    ref,
  ) => {
    const platform = usePlatform();

    return (
      <Tappable
        ref={ref}
        type={type || "button"}
        Component={Component}
        className={classNames(
          styles.wrapper,
          variantStyles[variant],
          colorStyles[color],
          sizeStyles[size],
          platform === "ios" && styles["wrapper--ios"],
          fullWidth && styles["wrapper--fullWidth"],
          loading && styles["wrapper--loading"],
          className,
        )}
        {...restProps}
      >
        {loading && (
          <Spinner
            className={classNames(styles.spinner, classes.spinner)}
            size="small"
          />
        )}
        {startAdornment && (
          <div
            className={classNames(
              styles.startAdornment,
              classes.startAdornment,
            )}
          >
            {startAdornment}
          </div>
        )}
        <Typography
          variant={size === "large" ? "text" : "subHeadline"}
          small
          Component="span"
        >
          {children}
        </Typography>
        {endAdornment && (
          <div
            className={classNames(styles.endAdornment, classes.endAdornment)}
          >
            {endAdornment}
          </div>
        )}
      </Tappable>
    );
  },
);

Button.displayName = "Button";

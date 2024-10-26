import { ReactNode } from "react";
import styles from "./Chip.module.css";

import { classNames, hasReactNode } from "@/helpers";

import { usePlatform } from "@/hooks";
import { Typography } from "@/components/Typography";
import { Tappable, TappableProps } from "@/components/Tappable";

export interface ChipProps extends Omit<TappableProps<HTMLDivElement>, "size"> {
  /** Defines the visual style of the chip, affecting its background, border, and shadow. */
  mode?: "elevated" | "mono" | "outline";
  /** Defines the visual size of the chip. */
  size?: "small" | "medium";
  /** Content or component to be placed before the main text, typically an icon or avatar. */
  startAdornment?: ReactNode;
  /** Content or component to be placed after the main text, such as an icon indicating an action. */
  endAdornment?: ReactNode;
  /** The main text content of the chip. */
  children?: ReactNode;
}

const modeStyles = {
  elevated: styles["wrapper--elevated"],
  mono: styles["wrapper--mono"],
  outline: styles["wrapper--outline"],
};

const sizeStyles = {
  small: styles["wrapper--small"],
  medium: styles["wrapper--medium"],
};

/**
 * Renders a compact element representing an input, attribute, or action. Chips can include icons, text, or both,
 * and are used to trigger actions, input information, or represent a complex piece of information in a compact form.
 */
export const Chip = ({
  mode = "elevated",
  size = "medium",
  startAdornment,
  endAdornment,
  className,
  children,
  ...restProps
}: ChipProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      Component="div"
      interactiveAnimation="opacity"
      className={classNames(
        styles.wrapper,
        modeStyles[mode],
        sizeStyles[size],
        className,
      )}
      {...restProps}
    >
      {hasReactNode(startAdornment) && (
        <div className={styles.startAdornment}>{startAdornment}</div>
      )}
      <Typography
        variant={size === "small" ? "caption" : "subHeadline"}
        Component="span"
        small={platform === "ios"}
        className={styles.text}
      >
        {children}
      </Typography>
      {hasReactNode(endAdornment) && (
        <div className={styles.endAdornment}>{endAdornment}</div>
      )}
    </Tappable>
  );
};

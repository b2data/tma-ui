import { HTMLAttributes } from "react";
import styles from "./Divider.module.css";

import { classNames } from "@/helpers";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** If `true` the divider will be stretch to height  */
  flexItem?: boolean;
}

/**
 * Represents a horizontal line used to separate content within a layout or component.
 * The component allows for customization through additional HTML attributes and custom CSS classes.
 */
export const Divider = ({
  className,
  flexItem,
  ...restProps
}: DividerProps) => (
  <hr
    className={classNames(
      styles.wrapper,
      flexItem && styles["wrapper--flex"],
      className,
    )}
    {...restProps}
  />
);

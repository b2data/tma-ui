import { HTMLAttributes } from "react";
import styles from "./List.module.css";

import { classNames } from "@/helpers";
import { usePlatform } from "@/hooks";

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
  /** If set, the grid layout will be used */
  gridTemplateColumns?: string;
}

/**
 * Renders a container for list items, applying platform-specific styles for consistency across different operating systems.
 * This component serves as a foundational element for creating lists in a user interface.
 */
export const List = ({
  className,
  children,
  gridTemplateColumns,
  style,
  ...restProps
}: ListProps) => {
  const platform = usePlatform();

  return (
    <div
      className={classNames(
        styles.wrapper,
        platform === "ios" && styles["wrapper--ios"],
        gridTemplateColumns && styles["wrapper--grid"],
        className,
      )}
      style={{ ...style, gridTemplateColumns }}
      {...restProps}
    >
      {children}
    </div>
  );
};

import { ButtonHTMLAttributes } from "react";
import styles from "./SegmentedControlItem.module.css";

import { classNames } from "@/helpers";
import { usePlatform } from "@/hooks";
import { Tappable } from "@/components/Tappable";
import { Typography } from "@/components/Typography";

export interface SegmentedControlItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the item is selected. Used by the parent SegmentedControl to style accordingly. */
  selected?: boolean;
}

/**
 * A component representing an individual item within a SegmentedControl.
 * It leverages the Tappable component for handling interactions and supports platform-specific styles.
 */
export const SegmentedControlItem = ({
  selected,
  className,
  children,
  ...restProps
}: SegmentedControlItemProps) => {
  const platform = usePlatform();
  return (
    <Tappable
      role="tab"
      Component="button"
      className={classNames(
        styles.wrapper,
        platform === "ios" && styles["wrapper--ios"],
        className,
      )}
      {...restProps}
    >
      <Typography variant="caption" weight={selected ? "bold" : "regular"}>
        {children}
      </Typography>
    </Tappable>
  );
};

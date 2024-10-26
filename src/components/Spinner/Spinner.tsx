import { HTMLAttributes } from "react";
import styles from "./Spinner.module.css";

import { classNames } from "@/helpers";
import { usePlatform } from "@/hooks";

import { BaseSpinner } from "./BaseSpinner";
import { IOSSpinner } from "./IOSSpinner";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** Determines the size of the spinner. Can be 'small' (s), 'medium' (m), or 'large' (l), with 'medium' being the default size. */
  size?: "small" | "medium" | "large";
}

const sizeStyles = {
  small: styles["wrapper--small"],
  medium: styles["wrapper--medium"],
  large: styles["wrapper--large"],
};

/**
 * Provides a visual indicator for loading states across different platforms. It automatically selects
 * an appropriate spinner style based on the current platform, allowing for a consistent user experience.
 */
export const Spinner = ({ size = "medium", className }: SpinnerProps) => {
  const platform = usePlatform();

  const Component = platform === "ios" ? IOSSpinner : BaseSpinner;

  return (
    <div
      role="status"
      className={classNames(
        styles.wrapper,
        platform === "ios" && styles["wrapper--ios"],
        sizeStyles[size],
        className,
      )}
    >
      <Component size={size} />
    </div>
  );
};

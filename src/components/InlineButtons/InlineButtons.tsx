import { ForwardedRef, forwardRef, HTMLAttributes, ReactElement } from "react";
import styles from "./InlineButtons.module.css";

import { classNames } from "@/helpers";
import { usePlatform } from "@/hooks";
import { InlineButtonsItemProps } from "../InlineButtonsItem";

export interface InlineButtonsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Children should be `InlineButtonsItem` components.
   */
  children: ReactElement<InlineButtonsItemProps>[];
}

/**
 * `InlineButtons` acts as a container for `InlineButtonsItem` components.
 */
export const InlineButtons = forwardRef(
  (
    { className, children, ...restProps }: InlineButtonsProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const platform = usePlatform();

    return (
      <div
        ref={ref}
        className={classNames(
          styles.wrapper,
          platform === "ios" && styles["wrapper--ios"],
          className,
        )}
        {...restProps}
      >
        {children}
      </div>
    );
  },
);

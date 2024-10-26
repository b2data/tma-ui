import { forwardRef, HTMLAttributes, InputHTMLAttributes } from "react";
import styles from "./SliderThumb.module.css";

import { classNames } from "@/helpers";
import { usePlatform } from "@/hooks";
import { VisuallyHidden } from "@/components/VisuallyHidden";

export interface SliderThumbProps extends HTMLAttributes<HTMLSpanElement> {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export const SliderThumb = forwardRef<HTMLSpanElement, SliderThumbProps>(
  ({ className, inputProps, ...restProps }, ref) => {
    const platform = usePlatform();

    return (
      <span
        className={classNames(
          styles.wrapper,
          platform === "ios" && styles["wrapper--ios"],
          className,
        )}
        {...restProps}
      >
        <VisuallyHidden
          {...inputProps}
          Component="input"
          type="range"
          ref={ref}
          className={classNames(styles.input, className)}
          aria-orientation="horizontal"
        />
      </span>
    );
  },
);

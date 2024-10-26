import { AllHTMLAttributes, ElementType, forwardRef } from "react";
import styles from "./VisuallyHidden.module.css";

import { classNames } from "@/helpers";

export interface VisuallyHiddenProps<T> extends AllHTMLAttributes<T> {
  /** The component type to render, allowing for semantic HTML use. Defaults to 'span'. */
  Component?: ElementType;
}

/** Component is using for hide children element that should be visible such `input[type=file]`. */
export const VisuallyHidden = forwardRef<
  HTMLSpanElement,
  VisuallyHiddenProps<HTMLSpanElement>
>(({ Component = "span", className, ...restProps }, ref) => (
  <Component
    {...restProps}
    ref={ref}
    className={classNames(styles.wrapper, className)}
  />
));

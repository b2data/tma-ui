import { InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

import { classNames } from "@/helpers";
import { VisuallyHidden } from "@/components/VisuallyHidden";

import { IconCheckbox } from "./icons/checkbox";
import { IconCheckboxChecked } from "./icons/checkbox_checked";
import { IconCheckboxIndeterminate } from "./icons/checkbox_indeterminate";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /** If true, displays the checkbox with an indeterminate icon instead of checked or unchecked. */
  indeterminate?: boolean;
  size?: number;
}

/**
 * Renders a checkbox input with custom styling and optional indeterminate state.
 * The component visually hides the actual input element for accessibility while providing a custom styled appearance.
 */
export const Checkbox = ({
  style,
  className,
  disabled,
  indeterminate,
  size,
  ...restProps
}: CheckboxProps) => (
  <label
    className={classNames(
      styles.wrapper,
      disabled && styles["wrapper--disabled"],
      className,
    )}
    style={style}
  >
    <VisuallyHidden
      Component="input"
      type="checkbox"
      className={styles.input}
      disabled={disabled}
      {...restProps}
    />
    <IconCheckbox size={size} className={styles.icon} aria-hidden />
    <div aria-hidden className={styles.checkedIcon}>
      {indeterminate ? (
        <IconCheckboxIndeterminate size={size} />
      ) : (
        <IconCheckboxChecked size={size} />
      )}
    </div>
  </label>
);

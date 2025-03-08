import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  RefObject,
  useState,
} from "react";
import styles from "./FormInput.module.css";

import { classNames, callMultiple, hasReactNode } from "@/helpers";
import { usePlatform } from "@/hooks";
import { Typography } from "@/components/Typography";

export interface FormPublicProps {
  /** Defines the visual state of the form input (e.g., error, focused). */
  status?: "default" | "error" | "focused";
  /** Optional header content, displayed above the form input on `base` platform. */
  header?: ReactNode;
  /** Content to be displayed before the form input, such as icons or labels. */
  startAdornment?: ReactNode;
  /** Content to be displayed after the form input, often used for action icons or additional information. */
  endAdornment?: ReactNode;
  /** Indicates if the form input is disabled. */
  disabled?: boolean;
  /** Additional class name for the root element. */
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
  /** Helper text */
  helperText?: ReactNode;
  /** Indicates if the input is required. */
  required?: boolean;
}

export interface FormInputProps
  extends FormPublicProps,
    HTMLAttributes<HTMLLabelElement> {
  labelRef?: RefObject<HTMLLabelElement | null>;
}

const platformStyles = {
  base: styles["wrapper--base"],
  ios: styles["wrapper--ios"],
};

const formStatusStyles = {
  default: styles["wrapper--default"],
  error: styles["wrapper--error"],
  focused: styles["wrapper--focused"],
};

/**
 * Wraps an input element with additional layout for headers, icons, or actions, providing a consistent look and feel across the form.
 * It supports conditional rendering based on the platform and the state of the form element.
 */
export const FormInput = forwardRef<HTMLDivElement, FormInputProps>(
  (
    {
      status,
      header,
      startAdornment,
      endAdornment,
      disabled,
      children,
      className,
      wrapperProps = {},
      onFocus: onFocusProp,
      onBlur: onBlurProp,
      labelRef,
      helperText,
      required,
      ...restProps
    },
    ref,
  ) => {
    const platform = usePlatform();
    const [isFocused, setIsFocused] = useState(false);

    const formStatus = status || (isFocused ? "focused" : "default");

    const onFocus = callMultiple(onFocusProp, () => {
      if (disabled) {
        return;
      }

      setIsFocused(true);
    });

    const onBlur = callMultiple(onBlurProp, () => setIsFocused(false));

    const isEmptyHeader =
      typeof header === "string" ? !header.trim() : !hasReactNode(header);

    return (
      <div
        {...wrapperProps}
        ref={ref}
        className={classNames(
          styles.wrapper,
          platformStyles[platform === "ios" ? "ios" : "base"],
          platform !== "ios" &&
            !hasReactNode(header) &&
            styles["wrapper--dense"],
          formStatusStyles[formStatus],
          disabled && styles["wrapper--disabled"],
          wrapperProps.className,
        )}
        aria-disabled={disabled}
      >
        <label
          aria-disabled={disabled}
          className={classNames(styles.body, className)}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={labelRef}
          {...restProps}
        >
          {hasReactNode(startAdornment) && (
            <div className={styles.startAdornment}>{startAdornment}</div>
          )}
          {children}
          {hasReactNode(endAdornment) && (
            <div className={styles.endAdornment}>{endAdornment}</div>
          )}
        </label>
        {!isEmptyHeader && platform !== "ios" && (
          <Typography variant="subHeadline" small className={styles.title}>
            {header}
            {required && (
              <span
                aria-hidden="true"
                style={{ color: "var(--tg-theme-destructive-text-color)" }}
              >
                *
              </span>
            )}
          </Typography>
        )}
        {hasReactNode(helperText) && (
          <Typography variant="caption" small className={styles.helperText}>
            {helperText}
          </Typography>
        )}
      </div>
    );
  },
);

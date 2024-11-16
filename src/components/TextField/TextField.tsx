import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styles from "./TextField.module.css";

import { classNames } from "@/helpers";
import { usePlatform } from "@/hooks";
import { FormInput, FormPublicProps } from "@/components/FormInput";
import { Typography } from "@/components/Typography";

type TextFieldHTMLAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement> &
    TextareaHTMLAttributes<HTMLTextAreaElement>,
  "color"
>;

export interface TextFieldProps
  extends FormPublicProps,
    TextFieldHTMLAttributes {
  /** Indicated for `textarea` component and allows to enter text in multiline. */
  multiline?: boolean;
}

/**
 * Renders a text input/textarea field with enhanced styling and integration into a form structure.
 * Supports customization through `FormPublicProps` and standard input attributes.
 */
export const TextField = forwardRef(
  (
    {
      type = "text",
      header,
      startAdornment,
      endAdornment,
      status,
      className,
      wrapperProps,
      disabled,
      multiline,
      ...restProps
    }: TextFieldProps,
    ref,
  ) => {
    const platform = usePlatform();

    return (
      <FormInput
        header={header}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        status={status}
        disabled={disabled}
        wrapperProps={wrapperProps}
        className={classNames(
          styles.wrapper,
          platform === "ios" && styles["wrapper--ios"],
          multiline && styles["wrapper--multiline"],
          className,
        )}
      >
        <Typography
          ref={ref}
          variant={platform === "ios" ? "text" : "subHeadline"}
          Component={multiline ? "textarea" : "input"}
          className={multiline ? styles.textarea : styles.input}
          type={type}
          disabled={disabled}
          {...restProps}
        />
      </FormInput>
    );
  },
);

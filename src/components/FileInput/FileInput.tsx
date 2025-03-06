import { InputHTMLAttributes } from "react";

import { AttachIcon } from "@/icons";
import { VisuallyHidden } from "@/components/VisuallyHidden";
import { SectionItem, SectionItemProps } from "@/components/SectionItem";

export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Text label for the file input, used as the button label. */
  label?: string;
  /** Additional props for label to overwrite */
  labelProps?: SectionItemProps;
  /** Additional content to be displayed inside the button. */
  multiple?: boolean;
}

/**
 * Renders a file input disguised as a button, enhancing the user interface and improving usability.
 * It leverages the `ButtonCell` component for consistent styling across the application.
 */
export const FileInput = ({
  label = "Attach file",
  children,
  required,
  labelProps,
  ...restProps
}: FileInputProps) => (
  <>
    {children}
    <SectionItem
      Component="label"
      startAdornment={<AttachIcon />}
      {...labelProps}
      disabled={labelProps?.disabled || restProps.disabled}
      readOnly={labelProps?.readOnly || restProps.readOnly}
    >
      <VisuallyHidden>
        <input
          type="file"
          placeholder={label}
          required={required}
          {...restProps}
          disabled={restProps.disabled || restProps.readOnly}
        />
      </VisuallyHidden>
      {label}
      {required && (
        <span
          aria-hidden="true"
          style={{ color: "var(--tg-theme-destructive-text-color)" }}
        >
          *
        </span>
      )}
    </SectionItem>
  </>
);

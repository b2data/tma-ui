import { InputHTMLAttributes } from "react";

import { AttachIcon } from "@/icons";
import { VisuallyHidden } from "@/components/VisuallyHidden";
import { SectionItem } from "@/components/SectionItem";

export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Text label for the file input, used as the button label. */
  label?: string;
}

/**
 * Renders a file input disguised as a button, enhancing the user interface and improving usability.
 * It leverages the `ButtonCell` component for consistent styling across the application.
 */
export const FileInput = ({
  label = "Attach file",
  children,
  ...restProps
}: FileInputProps) => (
  <>
    {children}
    <SectionItem Component="label" startAdornment={<AttachIcon />}>
      <VisuallyHidden>
        <input type="file" placeholder={label} {...restProps} />
      </VisuallyHidden>
      {label}
    </SectionItem>
  </>
);

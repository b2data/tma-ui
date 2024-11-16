import { ReactNode, SelectHTMLAttributes } from "react";
import styles from "./Select.module.css";

import { classNames } from "@/helpers";
import { usePlatform } from "@/hooks";
import { ChevronDownIcon } from "@/icons";
import { FormInput, FormPublicProps } from "@/components/FormInput";
import { Typography } from "@/components/Typography";

export interface SelectProps
  extends Omit<FormPublicProps, "endAdornment">,
    Omit<SelectHTMLAttributes<HTMLSelectElement>, "color"> {
  /** Children elements, typically `option` elements to be rendered within the select. */
  children: ReactNode;
}

/**
 * Renders a custom styled select input within a `FormInput` container. This component is designed to integrate seamlessly
 * with the form input styles, providing a consistent look and enhanced features such as a custom dropdown arrow and support
 * for platform-specific typography. The `FormInput` wrapper facilitates the inclusion of headers and status messages.
 */
export const Select = ({
  header,
  startAdornment,
  status,
  className,
  disabled,
  wrapperProps,
  ...restProps
}: SelectProps) => {
  const platform = usePlatform();

  return (
    <FormInput
      header={header}
      startAdornment={startAdornment}
      status={status}
      disabled={disabled}
      className={classNames(
        styles.wrapper,
        platform === "ios" && styles["wrapper--ios"],
        className,
      )}
      wrapperProps={wrapperProps}
    >
      <Typography
        variant={platform === "ios" ? "text" : "subHeadline"}
        Component="select"
        className={styles.select}
        multiple={false}
        disabled={disabled}
        {...restProps}
      />
      <ChevronDownIcon aria-hidden className={styles.chevron} />
    </FormInput>
  );
};

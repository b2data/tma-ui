import {
  Children,
  ElementType,
  Fragment,
  HTMLAttributes,
  ReactNode,
  useMemo,
} from "react";
import styles from "./Section.module.css";

import { classNames, isPrimitiveReactNode } from "@/helpers";
import { usePlatform } from "@/hooks";
import { SectionHeader } from "@/components/SectionHeader";
import { Divider } from "@/components/Divider";
import { SectionFooter } from "@/components/SectionFooter";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Custom component or HTML tag to be used as the root element, `section` by default */
  Component?: ElementType;
  /**
   * The content for the section header. If a string is passed, `SectionHeader` is automatically used.
   * For more control or a large title, use `<SectionHeader large header={headerText}>Right BTN</SectionHeader>`.
   */
  header?: ReactNode;
  /**
   * The content for the section footer. If a string is passed, `SectionFooter` is automatically used.
   * For a centered footer, use `<SectionFooter centered>{footerText}</SectionFooter>`.
   */
  footer?: ReactNode;
}

/**
 * Organizes content into distinct sections with optional headers and footers. It automatically wraps
 * primitive header and footer content in the appropriate sub-components, and inserts dividers between
 * children when rendering multiple elements.
 */
export const Section = ({
  Component = "section",
  header,
  footer,
  className,
  children,
  ...restProps
}: SectionProps) => {
  const platform = usePlatform();

  const headerWithWrapper = isPrimitiveReactNode(header) ? (
    <SectionHeader header={header} />
  ) : (
    header
  );

  const footerWithWrapper = isPrimitiveReactNode(footer) ? (
    <SectionFooter>{footer}</SectionFooter>
  ) : (
    footer
  );

  const ValidChildren = useMemo(
    () => Children.toArray(children).filter(Boolean),
    [children],
  );

  return (
    <Component
      className={classNames(
        styles.wrapper,
        platform === "ios" ? styles["wrapper--ios"] : styles["wrapper--base"],
        className,
      )}
      {...restProps}
    >
      <div className={styles.bodyWithHeader}>
        {headerWithWrapper}
        <div className={styles.body}>
          {ValidChildren.map((child, index) => (
            <Fragment key={index}>
              {child}
              {index < ValidChildren.length - 1 && (
                <Divider className={styles.divider} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
      {footerWithWrapper}
    </Component>
  );
};

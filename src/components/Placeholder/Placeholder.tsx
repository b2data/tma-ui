import { HTMLAttributes, ReactNode } from "react";
import styles from "./Placeholder.module.css";

import { classNames, hasReactNode } from "@/helpers";
import { Typography } from "@/components/Typography";

export interface PlaceholderProps extends HTMLAttributes<HTMLElement> {
  /** Element(s) to be displayed as the primary visual content, typically an image or an animation. */
  children?: ReactNode;
  /** The primary text, usually a title or a header, for the placeholder. */
  header?: ReactNode;
  /** Additional descriptive text to provide more details or context. */
  description?: ReactNode;
  /** An actionable element, such as a button, to be placed in the placeholder for user interaction. */
  action?: ReactNode;
}

/** A versatile component designed to display a placeholder with optional text, images, and actions. */
export const Placeholder = ({
  children,
  header,
  description,
  className,
  action,
  ...restProps
}: PlaceholderProps) => {
  const hasHeader = hasReactNode(header);
  const hasDescription = hasReactNode(description);

  return (
    <section className={classNames(styles.wrapper, className)} {...restProps}>
      {hasReactNode(children) && children}
      {(hasHeader || hasDescription) && (
        <dl className={styles.fields}>
          {hasHeader && (
            <Typography variant="h4" Component="dt">
              {header}
            </Typography>
          )}
          {hasDescription && (
            <Typography className={styles.description} Component="dd">
              {description}
            </Typography>
          )}
        </dl>
      )}
      {hasReactNode(action) && action}
    </section>
  );
};

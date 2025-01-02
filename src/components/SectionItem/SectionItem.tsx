import {
  ElementType,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";
import styles from "./SectionItem.module.css";

import { classNames, hasReactNode } from "@/helpers";
import { Tappable, TappableProps } from "@/components/Tappable";
import { BadgeProps } from "@/components/Badge";
import { Typography } from "@/components/Typography";

export interface SectionItemProps extends Omit<TappableProps, "Component"> {
  /** Content displayed above the main content as a subheading */
  subhead?: ReactNode;
  /** Main content displayed as a header */
  children?: ReactNode;
  /** Content displayed alongside the header as a hint */
  hint?: ReactNode;
  /** A badge component to be displayed next to the header */
  titleBadge?: ReactElement<BadgeProps>;
  /** Content displayed below the header as a subtitle */
  subtitle?: ReactNode;
  /** Additional description displayed below the subtitle */
  description?: ReactNode;
  /** Content or elements to be displayed on the left side */
  startAdornment?: ReactNode;
  /** Content or elements to be displayed on the right side */
  endAdornment?: ReactNode;
  /** Custom component or HTML tag to be used as the root element, div by default */
  Component?: ElementType;
  /** Controls the hover state of the component externally, useful for keyboard navigation */
  hovered?: boolean;
  /** Allows for multiline content without truncation */
  multiline?: boolean;
  /** Reduce padding in the item */
  dense?: boolean;
}

/**
 * `SectionItem` component acts as a flexible and interactive container for various types of content,
 * enabling the creation of complex list items, form fields, and more. It leverages the `Tappable`
 * component for interaction and is designed to be flexible and extensible.
 */
export const SectionItem = forwardRef(
  (
    {
      children,
      titleBadge,
      hint,
      subhead,
      subtitle,
      description,
      className,
      startAdornment,
      endAdornment,
      Component,
      hovered,
      multiline,
      dense,
      readOnly,
      disabled,
      ...restProps
    }: SectionItemProps,
    ref,
  ) => {
    const hasTitle =
      hasReactNode(children) || hasReactNode(hint) || hasReactNode(titleBadge);

    return (
      <Tappable
        ref={ref}
        Component={Component || "div"}
        className={classNames(
          styles.wrapper,
          hovered && styles["wrapper--hovered"],
          multiline && styles["wrapper--multiline"],
          dense && styles["wrapper--dense"],
          (readOnly || disabled) && styles["wrapper--no-clickable"],
          disabled && styles["wrapper--disabled"],
          className,
        )}
        readOnly={readOnly}
        disabled={disabled}
        {...restProps}
      >
        {hasReactNode(startAdornment) && (
          <div className={styles.startAdornment}>{startAdornment}</div>
        )}
        <div className={styles.middle}>
          {isValidElement(subhead)
            ? subhead
            : hasReactNode(subhead) && (
                <Typography
                  variant="subHeadline"
                  small
                  className={styles.subhead}
                >
                  {subhead}
                </Typography>
              )}
          {hasTitle &&
            (isValidElement(children) && !hint && !titleBadge ? (
              children
            ) : (
              <Typography variant="text" Component="h6" className={styles.head}>
                {hasReactNode(children) && (
                  <span className={styles.title}>{children}</span>
                )}
                {hasReactNode(hint) && (
                  <span className={styles.hint}>{hint}</span>
                )}
                {hasReactNode(titleBadge) && titleBadge}
              </Typography>
            ))}
          {isValidElement(subtitle)
            ? subtitle
            : hasReactNode(subtitle) && (
                <Typography
                  variant="subHeadline"
                  small
                  className={styles.subtitle}
                >
                  {subtitle}
                </Typography>
              )}
          {isValidElement(description)
            ? description
            : hasReactNode(description) && (
                <Typography
                  variant="caption"
                  small={dense}
                  className={styles.description}
                >
                  {description}
                </Typography>
              )}
        </div>
        {hasReactNode(endAdornment) && (
          <div className={styles.endAdornment}>{endAdornment}</div>
        )}
      </Tappable>
    );
  },
);

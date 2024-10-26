import { AllHTMLAttributes, ElementType, forwardRef } from "react";
import styles from "./Typography.module.css";

import { classNames } from "@/helpers";

export interface TypographyProps extends AllHTMLAttributes<HTMLElement> {
  /** Determines the component and styles of text: h1, h2, h3, h4, h5, h6, span .*/
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "headline"
    | "subHeadline"
    | "text"
    | "caption";
  /** Controls the font weight of the text, with options ranging from light to bold. */
  weight?: "light" | "regular" | "bold";
  /** If true, transforms the text to uppercase for stylistic emphasis. */
  caps?: boolean;
  /** Specifies the HTML tag or React component used to render the text, defaulting to `span`. */
  Component?: ElementType;
  /** When true, removes the default margins around the text, useful for inline styling or custom layouts. */
  plain?: boolean;
  /** When true, reduce font-size of the component. Applies only for `subHeadline` and `caption`. */
  small?: boolean;
}

const elementTagMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  headline: "h5",
  subHeadline: "h6",
  text: "span",
  caption: "span",
};

const stylesType = {
  h1: styles["wrapper--h1"],
  h2: styles["wrapper--h2"],
  h3: styles["wrapper--h3"],
  h4: styles["wrapper--h4"],
  headline: styles["wrapper--headline"],
  subHeadline: styles["wrapper--subHeadline"],
  text: styles["wrapper--text"],
  caption: styles["wrapper--caption"],
};

const stylesSmall: Record<string, string> = {
  subHeadline: styles["wrapper--subHeadline-small"],
  caption: styles["wrapper--caption-small"],
};

const stylesWeight = {
  light: styles["wrapper--light"],
  regular: styles["wrapper--regular"],
  bold: styles["wrapper--bold"],
};

export const Typography = forwardRef(
  (
    {
      variant = "text",
      weight = "regular",
      plain = true,
      small,
      caps,
      className,
      Component: OverwriteComponent,
      ...restProps
    }: TypographyProps,
    ref,
  ) => {
    const Component = OverwriteComponent || elementTagMap[variant];

    return (
      <Component
        ref={ref}
        className={classNames(
          styles.wrapper,
          stylesType[variant],
          small && stylesSmall[variant],
          plain && styles["wrapper--plain"],
          caps && styles["wrapper--caps"],
          weight && stylesWeight[weight],
          className,
        )}
        {...restProps}
      />
    );
  },
);

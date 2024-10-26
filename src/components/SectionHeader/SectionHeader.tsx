import { HTMLAttributes, ReactNode } from "react";
import styles from "./SectionHeader.module.css";

import { classNames } from "@/helpers";
import { usePlatform } from "@/hooks";

import { Typography } from "@/components/Typography";

export interface SectionHeaderProps extends HTMLAttributes<HTMLHeadElement> {
  /** Text content */
  header?: ReactNode;
  /** Large title, changes font size, padding and color */
  large?: boolean;
  /** Show divider */
  divider?: boolean;
}

export const SectionHeader = ({
  large,
  className,
  children,
  header,
  divider,
  ...restProps
}: SectionHeaderProps) => {
  const platform = usePlatform();

  return (
    <header
      className={classNames(
        styles.wrapper,
        platform === "ios" && styles["wrapper--ios"],
        large && styles["wrapper--large"],
        platform !== "ios" && divider && styles["wrapper--divider"],
        className,
      )}
      {...restProps}
    >
      <Typography
        variant={
          platform === "ios"
            ? large
              ? "subHeadline"
              : "caption"
            : large
              ? "text"
              : "subHeadline"
        }
        caps={platform === "ios" && !large}
        small={platform !== "ios" && !large}
        Component="h1"
        className={styles.title}
      >
        {header}
      </Typography>
      {children}
    </header>
  );
};

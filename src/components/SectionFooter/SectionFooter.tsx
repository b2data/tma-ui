import { HTMLAttributes } from "react";
import styles from "./SectionFooter.module.css";

import { classNames } from "@/helpers";
import { usePlatform } from "@/hooks";
import { Typography } from "@/components/Typography";

export interface SectionFooterProps extends HTMLAttributes<HTMLElement> {
  /** Centering text, adding additional indents */
  centered?: boolean;
}

export const SectionFooter = ({
  className,
  children,
  centered,
  ...restProps
}: SectionFooterProps) => {
  const platform = usePlatform();

  return (
    <footer
      className={classNames(
        styles.wrapper,
        platform === "ios" && styles["wrapper--ios"],
        centered && styles["wrapper--centered"],
        className,
      )}
      {...restProps}
    >
      <Typography
        variant={platform === "ios" ? "caption" : "subHeadline"}
        small={platform !== "ios"}
      >
        {children}
      </Typography>
    </footer>
  );
};

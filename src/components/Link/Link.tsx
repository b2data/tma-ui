import styles from "./Link.module.css";

import { classNames } from "@/helpers";
import { Typography, TypographyProps } from "../Typography";

export interface LinkProps extends TypographyProps {}

export const Link = ({ className, children, ...restProps }: LinkProps) => (
  <Typography
    Component="a"
    variant="caption"
    className={classNames(styles.wrapper, className)}
    {...restProps}
  >
    {children}
  </Typography>
);

import { HTMLAttributes } from "react";
import styles from "./Skeleton.module.css";

import { classNames } from "@/helpers";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Used as a placeholder during the loading state of a component or page. It can visually mimic
 * the layout that will be replaced by the actual content once loaded, improving user experience by reducing perceived loading times.
 */
export const Skeleton = ({
  className,
  children,
  ...restProps
}: SkeletonProps) => (
  <div className={classNames(styles.wrapper, className)} {...restProps}>
    {children}
  </div>
);

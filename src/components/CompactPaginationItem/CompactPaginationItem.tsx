import { ButtonHTMLAttributes } from "react";
import styles from "./CompactPaginationItem.module.css";

import { classNames, hasReactNode } from "@/helpers";
import { VisuallyHidden } from "@/components/VisuallyHidden";

export interface CompactPaginationItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

/** CompactPaginationItem is just a child for CompactPagination component, it exists separately for passing area labels (It is really just a dot) */
export const CompactPaginationItem = ({
  selected,
  className,
  children,
  ...restProps
}: CompactPaginationItemProps) => (
  <button
    type="button"
    role="tab"
    aria-selected={selected}
    className={classNames(
      styles.wrapper,
      selected && styles["wrapper--selected"],
      className,
    )}
    {...restProps}
  >
    {hasReactNode(children) ? (
      <VisuallyHidden>{children}</VisuallyHidden>
    ) : undefined}
  </button>
);

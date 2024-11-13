import { HTMLAttributes, ReactNode } from "react";
import styles from "./AvatarStack.module.css";

import { classNames } from "@/helpers";

export interface AvatarStackProps extends HTMLAttributes<HTMLDivElement> {
  /** An array of `Avatar` components to be rendered within the stack. */
  children: ReactNode;
}

/**
 * Renders a container for displaying avatars in a stacked layout. This component
 * allows for the creation of visually grouped avatar representations, often used
 * to indicate multiple users or participants.
 */
export const AvatarStack = ({ children, ...restProps }: AvatarStackProps) => {
  return (
    <div {...restProps} className={classNames(styles.wrapper)}>
      {children}
    </div>
  );
};

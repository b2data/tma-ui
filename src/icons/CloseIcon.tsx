import { FC } from "react";
import { Icon } from "./types";

export const CloseIcon: FC<Icon> = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" width={size} height={size} {...props}>
    <path
      d="M4.5 4.44a.9.9 0 0 1 1.27 0L12 10.56l6.22-6.14a.9.9 0 0 1 1.27 1.28l-6.21 6.13 6.2 6.13a.9.9 0 0 1-1.26 1.28L12 13.1l-6.23 6.15a.9.9 0 1 1-1.26-1.28l6.2-6.13-6.2-6.13a.9.9 0 0 1-.01-1.27Z"
      fill="currentColor"
    />
  </svg>
);

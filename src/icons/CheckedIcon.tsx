import { FC } from "react";
import { Icon } from "./types";

export const CheckedIcon: FC<Icon> = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path
      d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
      fill="currentColor"
    />
  </svg>
);

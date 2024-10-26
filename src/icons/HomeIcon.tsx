import { FC } from "react";
import { Icon } from "./types";

export const HomeIcon: FC<Icon> = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" width={size} height={size} {...props}>
    <path
      d="m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81zM12 3 2 12h3v8h6v-6h2v6h6v-8h3z"
      fill="currentColor"
    />
  </svg>
);

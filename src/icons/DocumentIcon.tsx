import { FC } from "react";
import { Icon } from "./types";

export const DocumentIcon: FC<Icon> = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" width={size} height={size} {...props}>
    <path
      d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z"
      fill="currentColor"
    />
  </svg>
);

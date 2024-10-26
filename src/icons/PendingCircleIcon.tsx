import { FC } from "react";
import { Icon } from "./types";

export const PendingCircleIcon: FC<Icon> = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
    />
    <circle fill="currentColor" cx="7" cy="12" r="1.5" />
    <circle fill="currentColor" cx="12" cy="12" r="1.5" />
    <circle fill="currentColor" cx="17" cy="12" r="1.5" />
  </svg>
);

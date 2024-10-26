import { Icon } from "./types";

export const WarningIcon = ({ size = 24, ...props }: Icon) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 5.99 19.53 19H4.47zM12 2 1 21h22zm1 14h-2v2h2zm0-6h-2v4h2z"
      fill="currentColor"
    />
  </svg>
);

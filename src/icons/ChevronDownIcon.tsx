import { Icon } from "./types";

export const ChevronDownIcon = ({ size = 24, ...props }: Icon) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4.3 7.54a1 1 0 0 1 1.4 0l6.8 6.8 6.8-6.8a1 1 0 1 1 1.4 1.42l-7.5 7.5a1 1 0 0 1-1.4 0l-7.5-7.5a1 1 0 0 1 0-1.42Z"
      fill="currentColor"
    />
  </svg>
);

import { Icon } from "./types";

export const RemoveIcon = ({ size = 24, ...props }: Icon) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M19 13H5v-2h14z" fill="currentColor" />
  </svg>
);

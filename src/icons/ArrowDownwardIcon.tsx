import { Icon } from "./types";

export const ArrowDownwardIcon = ({
  size = 24,
  fill = "currentColor",
  ...props
}: Icon) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <path d="m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z" />
  </svg>
);

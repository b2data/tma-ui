import { Icon } from "./types";

export const ArrowDropDownIcon = ({
  size = 24,
  fill = "currentColor",
  ...props
}: Icon) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <path d="m7 10 5 5 5-5z" />
  </svg>
);

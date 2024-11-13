import { Icon } from "./types";

export const RemoveIcon = ({
  size = 24,
  fill = "currentColor",
  ...props
}: Icon) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <path d="M19 13H5v-2h14z" />
  </svg>
);

import { Icon } from "./types";

export const AddIcon = ({
  size = 24,
  fill = "currentColor",
  ...props
}: Icon) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
  </svg>
);

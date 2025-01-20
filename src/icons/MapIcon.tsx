import { FC } from "react";
import { Icon } from "./types";

export const MapIcon: FC<Icon> = ({
  size = 24,
  fill = "currentColor",
  ...props
}) => (
  <svg viewBox="0 0 24 24" fill={fill} width={size} height={size} {...props}>
    <path d="m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99 3-1.01v11.7l-3 1.16zm14 11.08-3 1.01V6.86l3-1.16z" />
  </svg>
);

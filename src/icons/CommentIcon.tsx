import { FC } from "react";
import { Icon } from "./types";

export const CommentIcon: FC<Icon> = ({
  size = 24,
  fill = "currentColor",
  ...props
}) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM20 4v13.17L18.83 16H4V4zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" />
  </svg>
);

import { FC } from "react";
import { Icon } from "../types";

export const FormatPhpIcon: FC<Icon> = ({ size = 24, ...props }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    {...props}
  >
    <path d="M13 9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2zm-5 1.5v1c0 .8-.7 1.5-1.5 1.5h-2v2H3V9h3.5c.8 0 1.5.7 1.5 1.5m-1.5 0h-2v1h2zm15 0v1c0 .8-.7 1.5-1.5 1.5h-2v2h-1.5V9H20c.8 0 1.5.7 1.5 1.5m-1.5 0h-2v1h2z" />
  </svg>
);

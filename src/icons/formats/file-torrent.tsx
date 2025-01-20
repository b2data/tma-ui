import { FC } from "react";
import { Icon } from "../types";

export const FormatTorrentIcon: FC<Icon> = ({
  size = 24,
  fill = "currentColor",
  ...props
}) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 100 100"
    {...props}
  >
    <g transform="translate(0,100) scale(0.1,-0.1)" fill={fill} stroke="none">
      <path d="M158 859 c-32 -18 -38 -78 -37 -364 0 -319 4 -343 59 -362 49 -17 591 -17 640 0 55 19 59 43 59 362 1 290 -5 347 -39 365 -25 13 -659 13 -682 -1z m632 -359 l0 -290 -290 0 -290 0 0 290 0 290 290 0 290 0 0 -290z" />
      <path d="M417 672 c-42 -42 -77 -81 -77 -85 0 -4 27 -7 60 -7 l60 0 0 -80 0 -79 -60 -3 -59 -3 79 -81 80 -81 80 81 79 81 -59 3 -60 3 0 79 0 80 60 0 c33 0 60 3 60 8 0 8 -152 162 -160 162 -3 0 -40 -35 -83 -78z" />
    </g>
  </svg>
);

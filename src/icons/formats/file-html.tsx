import { FC } from "react";
import { Icon } from "../types";

export const FormatHtmlIcon: FC<Icon> = ({
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
      <path d="M208 904 c-34 -18 -37 -32 -41 -169 l-2 -110 -43 -6 c-71 -9 -77 -21 -80 -174 l-4 -135 30 -30 c23 -22 40 -30 66 -30 l36 0 0 -57 c1 -110 9 -113 330 -113 320 0 329 3 330 110 0 52 2 56 33 70 48 22 57 50 57 178 0 129 -12 164 -60 180 -27 10 -30 15 -30 54 0 41 -4 47 -102 145 l-103 103 -195 0 c-153 -1 -201 -4 -222 -16z m372 -154 l0 -80 85 0 c84 0 85 0 85 -25 l0 -25 -250 0 -250 0 0 105 0 105 165 0 165 0 0 -80z m-410 -250 l0 -40 40 0 40 0 0 40 c0 33 3 40 20 40 19 0 20 -7 20 -105 0 -98 -1 -105 -20 -105 -17 0 -20 7 -20 45 l0 45 -39 0 c-40 0 -40 0 -43 -42 -2 -31 -8 -44 -20 -46 -16 -3 -18 7 -18 102 0 99 1 106 20 106 17 0 20 -7 20 -40z m290 20 c0 -13 -7 -20 -20 -20 -17 0 -19 -8 -22 -82 -3 -70 -6 -83 -20 -86 -16 -3 -18 6 -18 82 0 85 0 86 -25 86 -18 0 -25 5 -25 20 0 18 7 20 65 20 58 0 65 -2 65 -20z m105 8 c2 -7 12 -40 21 -73 l18 -60 21 70 c20 66 23 70 53 73 l32 3 0 -105 c0 -99 -1 -106 -20 -106 -18 0 -20 7 -21 68 l0 67 -26 -68 c-32 -84 -48 -85 -77 -2 l-21 60 -3 -62 c-3 -55 -6 -63 -22 -63 -19 0 -20 8 -20 105 l0 105 30 0 c17 0 33 -6 35 -12z m225 -69 c0 -72 2 -81 20 -86 11 -3 20 -14 20 -24 0 -15 -7 -19 -40 -19 l-40 0 0 105 c0 98 1 105 20 105 18 0 20 -7 20 -81z m-40 -249 l0 -40 -250 0 -250 0 0 40 0 40 250 0 250 0 0 -40z" />
    </g>
  </svg>
);

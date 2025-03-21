import { FC } from "react";
import { Icon } from "../types";

export const FormatLogIcon: FC<Icon> = ({
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
      <path d="M215 908 c-40 -23 -44 -40 -45 -161 l0 -118 -30 -11 c-48 -16 -60 -51 -60 -180 0 -128 9 -156 57 -178 31 -14 33 -18 33 -70 1 -61 13 -84 54 -100 36 -13 516 -13 552 0 53 21 53 23 54 335 l0 290 -102 102 -103 103 -195 0 c-128 -1 -202 -5 -215 -12z m365 -158 l0 -80 85 0 c84 0 85 0 85 -25 l0 -25 -250 0 -250 0 0 105 0 105 165 0 165 0 0 -80z m-370 -295 l0 -85 40 0 c33 0 40 -3 40 -20 0 -18 -7 -20 -60 -20 l-60 0 0 105 c0 98 1 105 20 105 18 0 20 -7 20 -85z m260 67 c27 -22 38 -98 20 -141 -22 -53 -96 -64 -137 -19 -28 32 -25 119 6 152 29 31 78 35 111 8z m214 -1 c18 -19 17 -20 -35 -23 -48 -3 -55 -6 -63 -30 -6 -18 -6 -38 0 -55 8 -23 16 -29 47 -31 29 -3 37 0 37 13 0 9 -9 19 -20 22 -11 3 -20 14 -20 24 0 15 7 19 40 19 l40 0 0 -51 c0 -48 -1 -51 -36 -65 -74 -31 -125 4 -132 90 -4 48 -1 57 21 80 33 33 95 36 121 7z m66 -311 l0 -40 -250 0 -250 0 0 40 0 40 250 0 250 0 0 -40z" />
      <path d="M393 498 c-33 -42 -18 -128 23 -128 13 0 28 9 34 19 31 59 -20 156 -57 109z" />
    </g>
  </svg>
);

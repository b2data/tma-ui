import { FC } from "react";
import { Icon } from "../types";

export const FormatPdfIcon: FC<Icon> = ({
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
      <path d="M215 908 c-40 -23 -44 -40 -45 -161 l0 -118 -30 -11 c-48 -16 -60 -51 -60 -180 0 -128 9 -156 57 -178 31 -14 33 -18 33 -70 1 -61 13 -84 54 -100 36 -13 516 -13 552 0 53 21 53 23 54 335 l0 290 -102 102 -103 103 -195 0 c-128 -1 -202 -5 -215 -12z m365 -158 l0 -80 85 0 c84 0 85 0 85 -25 l0 -25 -250 0 -250 0 0 105 0 105 165 0 165 0 0 -80z m-308 -227 c37 -33 11 -103 -39 -103 -21 0 -23 -4 -23 -45 0 -38 -3 -45 -20 -45 -19 0 -20 7 -20 105 l0 105 42 0 c24 0 49 -7 60 -17z m199 -12 c39 -39 41 -109 5 -146 -25 -25 -76 -39 -117 -33 -23 3 -24 6 -27 106 l-3 102 56 0 c49 0 60 -4 86 -29z m199 9 c0 -17 -7 -20 -45 -20 -38 0 -45 -3 -45 -20 0 -16 7 -20 35 -20 28 0 35 -4 35 -19 0 -15 -8 -21 -32 -23 -31 -3 -33 -6 -36 -45 -3 -35 -7 -43 -23 -43 -18 0 -19 8 -19 105 l0 105 65 0 c58 0 65 -2 65 -20z m80 -310 l0 -40 -250 0 -250 0 0 40 0 40 250 0 250 0 0 -40z" />
      <path d="M210 480 c0 -15 5 -20 18 -18 9 2 17 10 17 18 0 8 -8 16 -17 18 -13 2 -18 -3 -18 -18z" />
      <path d="M374 486 c-3 -7 -4 -35 -2 -62 3 -48 4 -49 33 -46 16 2 35 8 42 14 18 15 16 73 -3 92 -19 20 -63 21 -70 2z" />
    </g>
  </svg>
);

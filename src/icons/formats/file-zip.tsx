import { FC } from "react";
import { Icon } from "../types";

export const FormatZipIcon: FC<Icon> = ({
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
      <path d="M215 908 c-40 -23 -44 -40 -45 -161 l0 -118 -30 -11 c-48 -16 -60 -51 -60 -180 0 -128 9 -156 57 -178 31 -14 33 -18 33 -70 1 -61 13 -84 54 -100 36 -13 516 -13 552 0 53 21 53 23 54 335 l0 290 -102 102 -103 103 -195 0 c-128 -1 -202 -5 -215 -12z m365 -158 l0 -80 85 0 85 0 0 -250 0 -250 -250 0 -250 0 0 40 0 40 159 0 c153 0 161 1 187 23 25 21 27 30 32 119 6 117 -3 183 -29 209 -17 17 -34 19 -184 19 l-165 0 0 105 0 105 165 0 165 0 0 -80z m-290 -232 c0 -12 -13 -45 -30 -75 -16 -29 -30 -57 -30 -63 0 -5 14 -10 30 -10 23 0 30 -4 30 -20 0 -18 -7 -20 -60 -20 -57 0 -60 1 -60 25 0 14 14 49 30 78 17 30 30 57 30 60 0 4 -13 7 -30 7 -23 0 -30 4 -30 20 0 18 7 20 60 20 55 0 60 -2 60 -22z m80 -84 c0 -95 -2 -105 -17 -102 -16 3 -18 17 -21 106 -3 97 -2 102 18 102 19 0 20 -6 20 -106z m152 89 c37 -33 11 -103 -39 -103 -21 0 -23 -4 -23 -45 0 -38 -3 -45 -20 -45 -19 0 -20 7 -20 105 l0 105 42 0 c24 0 49 -7 60 -17z" />
      <path d="M460 480 c0 -15 5 -20 18 -18 9 2 17 10 17 18 0 8 -8 16 -17 18 -13 2 -18 -3 -18 -18z" />
    </g>
  </svg>
);

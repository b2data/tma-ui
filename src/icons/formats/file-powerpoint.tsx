import { FC } from "react";
import { Icon } from "../types";

export const FormatPowerpointIcon: FC<Icon> = ({
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
      <path d="M305 830 c-121 -22 -221 -39 -222 -39 -2 -1 -3 -131 -3 -291 l0 -290 23 -5 c40 -9 445 -75 461 -75 12 0 16 10 16 40 l0 40 160 0 c147 0 160 1 170 19 6 12 10 117 10 271 0 154 -4 259 -10 271 -10 18 -23 19 -170 19 l-160 0 0 40 c0 50 14 50 -275 0z m195 -328 l0 -279 -142 24 c-79 13 -153 25 -165 28 -23 5 -23 5 -23 225 0 121 1 220 3 221 1 0 74 13 162 29 88 15 161 28 163 29 1 1 2 -124 2 -277z m330 -2 l0 -210 -125 0 -125 0 0 40 0 40 85 0 85 0 0 45 0 45 -85 0 -85 0 0 49 0 49 29 -29 c43 -42 106 -34 130 18 15 33 16 33 -28 33 -40 0 -40 0 -43 43 -3 36 -6 42 -23 39 -11 -2 -30 -14 -42 -28 l-23 -25 0 50 0 51 125 0 125 0 0 -210z" />
      <path d="M210 501 l0 -171 30 0 30 0 0 65 0 65 55 0 c66 0 102 15 121 51 17 34 18 60 2 93 -20 45 -55 60 -150 64 l-88 4 0 -171z m158 103 c12 -8 22 -26 22 -39 0 -36 -26 -55 -76 -55 l-44 0 0 55 0 55 38 0 c21 0 48 -7 60 -16z" />
    </g>
  </svg>
);

import { FC } from "react";
import { Icon } from "./types";

export const BoxAddIcon: FC<Icon> = ({
  size = 24,
  fill = "currentColor",
  ...props
}) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    width={size}
    height={size}
    {...props}
  >
    <g style={{ transform: "translate(2px, 2px) scale(0.9)" }}>
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.145 0.7960714285714285v6.368571428571428"
        strokeWidth="1.71"
      />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M0.7960714285714285 7.164642857142857h20.697857142857142v12.737142857142857c0 0.4222362857142857 -0.16781185714285712 0.8272774285714285 -0.4663386428571428 1.125804214285714s-0.7035679285714286 0.4663386428571428 -1.125804214285714 0.4663386428571428h-17.513571428571428c-0.4222681285714286 0 -0.8272296642857142 -0.16781185714285712 -1.1258153592857143 -0.4663386428571428C0.9638148235714286 20.729063142857143 0.7960714285714285 20.324022 0.7960714285714285 19.901785714285715v-12.737142857142857Z"
        strokeWidth="1.71"
      />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M0.7960714285714285 7.164642857142857 3.184285714285714 2.5633500000000002c0.25746542142857143 -0.5186086928571428 0.6514570928571428 -0.9571962857142856 1.1395921714285713 -1.2685955464285714C4.812012964285714 0.983358377142857 5.375806671428571 0.8109484114285714 5.954614285714285 0.7960714285714285h10.380771428571428c0.5924363571428571 0.0003136521428571428 1.1729316428571428 0.16588218 1.6765264285714283 0.47808706500000003 0.5034355714285714 0.3122064771428571 0.9097504285714285 0.758673585 1.1734092857142857 1.2891915064285715L21.49392857142857 7.164642857142857"
        strokeWidth="1.71"
      />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.125357142857142 14.329285714285714h-7.960714285714285"
        strokeWidth="1.71"
      />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.145 10.348928571428571v7.960714285714285"
        strokeWidth="1.71"
      />
    </g>
  </svg>
);

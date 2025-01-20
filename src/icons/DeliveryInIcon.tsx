import { FC } from "react";
import { Icon } from "./types";

export const DeliveryInIcon: FC<Icon> = ({
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
    <g style={{ transform: "translate(1px, -1px)" }}>
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.582054314285712 17.338117285714283V6.5345523214285715c0 -0.8793245785714284 -0.7128182785714285 -1.592142857142857 -1.592142857142857 -1.592142857142857H2.7104480785714284c-0.8793086571428571 0 -1.5921380807142858 0.7128182785714285 -1.5921380807142858 1.592142857142857v10.548981321428572c0 0.8793405 0.7128294235714285 1.592142857142857 1.5921380807142858 1.592142857142857h1.1941071428571428"
        strokeWidth="1.71"
      />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.171678857142854 12.477098164285714H14.584283314285713"
        strokeWidth="1.71"
      />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.029132214285713 18.378582642857143h0.5488116428571429c0.8793405 0 1.592142857142857 -0.7128023571428571 1.592142857142857 -1.592142857142857V12.0085146L18.953187 7.469538214285714c-0.26700235714285714 -0.5466781714285714 -0.8221825714285713 -0.8933991214285715 -1.4306995714285713 -0.8933991214285715H14.869197278571427"
        strokeWidth="1.71"
      />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.983541428571428 18.723599999999998a2.2226314285714284 2.2226314285714284 0 1 0 4.445262857142857 0 2.2226314285714284 2.2226314285714284 0 1 0 -4.445262857142857 0"
        strokeWidth="1.71"
      />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.072950714285714 18.723599999999998a2.2226314285714284 2.2226314285714284 0 1 0 4.445262857142857 0 2.2226314285714284 2.2226314285714284 0 1 0 -4.445262857142857 0"
        strokeWidth="1.71"
      />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.656048107142857 18.67535807142857h-4.6769196428571425"
        strokeWidth="1.71"
      />
      <g style={{ transform: "translate(-2px, -2px) scale(0.9)" }}>
        <path
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.144267614285713 10.674856135714286 0 7.342787721428571"
          strokeWidth="1.71"
        />
        <path
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.931249999999999 15.277932192857142 11.14466565 18.064452857142857l-2.7865684285714285 -2.7865206642857143"
          strokeWidth="1.71"
        />
      </g>
    </g>
  </svg>
);

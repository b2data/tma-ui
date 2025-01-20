import { FC } from "react";
import { Icon } from "../types";

export const FormatAudioIcon: FC<Icon> = ({ size = 24, ...props }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    {...props}
  >
    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zM6 20V4h7v5h5v11zm10-9h-4v3.88c-.36-.24-.79-.38-1.25-.38-1.24 0-2.25 1.01-2.25 2.25S9.51 19 10.75 19 13 17.99 13 16.75V13h3z" />
  </svg>
);

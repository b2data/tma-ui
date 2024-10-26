import { Icon } from "./types";

export const ChevronLeftIcon = ({ size = 24, ...props }: Icon) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M15.7071 3.79289c-.3905-.39052-1.0237-.39052-1.4142 0L6.79289 11.2929c-.39052.3905-.39052 1.0237 0 1.4142l7.50001 7.5c.3905.3905 1.0237.3905 1.4142 0 .3905-.3905.3905-1.0237 0-1.4142L8.91421 12l6.79289-6.79289c.3905-.39053.3905-1.02369 0-1.41422Z"
      fill="currentColor"
    />
  </svg>
);

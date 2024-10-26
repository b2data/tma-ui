import { IconLarge } from "./large";
import { IconMedium } from "./medium";
import { IconSmall } from "./small";

interface IOSSpinnerProps {
  size: "small" | "medium" | "large";
}

export const IOSSpinner = ({ size }: IOSSpinnerProps) => {
  switch (size) {
    case "large":
      return <IconLarge />;
    case "medium":
      return <IconMedium />;
    default:
      return <IconSmall />;
  }
};

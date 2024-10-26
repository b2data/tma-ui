import { IconLarge } from "./large";
import { IconMedium } from "./medium";
import { IconSmall } from "./small";

interface BaseSpinnerProps {
  size: "small" | "medium" | "large";
}

const componentBySize = {
  small: IconSmall,
  medium: IconMedium,
  large: IconLarge,
};

const rotateCenterBySize = {
  small: 12,
  medium: 18,
  large: 22,
};

export const BaseSpinner = ({ size }: BaseSpinnerProps) => {
  const Component = componentBySize[size];
  const rotateCenter = rotateCenterBySize[size];

  return (
    <Component>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from={`0 ${rotateCenter} ${rotateCenter}`}
        to={`360 ${rotateCenter} ${rotateCenter}`}
        dur="0.7s"
        repeatCount="indefinite"
      />
    </Component>
  );
};

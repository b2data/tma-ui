import styles from "./SliderSteps.module.css";

import { classNames } from "@/helpers";
import { usePlatform } from "@/hooks";

import { Step } from "../../hooks/types";

export interface SliderStepsProps {
  steps: Step[];
}

export const SliderSteps = ({ steps }: SliderStepsProps) => {
  const platform = usePlatform();

  return (
    <>
      {steps.map(({ isPassed, XCoordinate }) => (
        <div
          key={XCoordinate}
          className={classNames(styles.step, {
            [styles["step--ios"]]: platform === "ios",
            [styles["step--passed"]]: isPassed,
          })}
          style={{ left: `${XCoordinate}%` }}
        />
      ))}
    </>
  );
};

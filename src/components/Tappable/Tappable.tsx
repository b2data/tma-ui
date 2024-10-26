import { AllHTMLAttributes, ElementType, forwardRef } from "react";
import styles from "./Tappable.module.css";

import { classNames } from "@/helpers";
import { usePlatform } from "@/hooks";
import { Ripple, useRipple } from "../Ripple";

export interface TappableProps<E = HTMLElement> extends AllHTMLAttributes<E> {
  /** The component type to render, allowing for semantic HTML use. Defaults to 'div'. */
  Component?: ElementType;
  /** Animation that will be shown when component will be tapped. */
  interactiveAnimation?: "opacity" | "background";
}

export const Tappable = forwardRef(
  (
    {
      Component = "div",
      children,
      className,
      interactiveAnimation = "background",
      readOnly,
      disabled,
      ...restProps
    }: TappableProps,
    ref,
  ) => {
    const platform = usePlatform();
    const { clicks, onPointerCancel, onPointerDown } = useRipple();

    const hasRippleEffect =
      platform !== "ios" &&
      interactiveAnimation === "background" &&
      !readOnly &&
      !disabled;

    return (
      <Component
        ref={ref}
        className={classNames(
          styles.wrapper,
          platform === "ios" && styles["wrapper--ios"],
          interactiveAnimation === "opacity" && styles["wrapper--opacity"],
          className,
        )}
        onPointerCancel={onPointerCancel}
        onPointerDown={onPointerDown}
        readOnly={readOnly}
        disabled={disabled}
        {...restProps}
      >
        {hasRippleEffect && <Ripple clicks={clicks} />}
        {children}
      </Component>
    );
  },
);

import {
  ElementType,
  forwardRef,
  HTMLAttributes,
  RefObject,
  useEffect,
} from "react";
import styles from "./Popper.module.css";

import { classNames, multipleRef } from "@/helpers";

import { useFloating, VirtualElement } from "@floating-ui/react-dom";

import { autoUpdateFloatingElement } from "./helpers/autoUpdateFloatingElement";
import {
  useFloatingMiddlewares,
  UseFloatingMiddlewaresOptions,
} from "./hooks/useFloatingMiddlewares";
import { RootRenderer } from "@/components/RootRenderer";

export interface PopperProps
  extends Omit<
      UseFloatingMiddlewaresOptions,
      "arrowHeight" | "arrowPadding" | "arrowRef"
    >,
    HTMLAttributes<HTMLDivElement> {
  /** Reference to the target element or virtual element for precise positioning. */
  targetRef: RefObject<HTMLElement> | VirtualElement;

  /** Defines the root element type of the Popper, allowing for semantic customization. */
  Component?: ElementType;
  /** Opt-in feature to automatically update Popper's position when the target element resizes. */
  autoUpdateOnTargetResize?: boolean;
}

/**
 * Renders a Popper component, leveraging floating UI for dynamic, responsive positioning.
 * Supports advanced configurations like virtual elements, custom arrows, and auto-position updates.
 */
export const Popper = forwardRef(
  (
    {
      // UseFloatingMiddlewaresOptions
      placement = "auto",
      sameWidth,
      offsetByMainAxis = 8,
      offsetByCrossAxis = 0,

      customMiddlewares,

      // UseFloatingProps
      autoUpdateOnTargetResize = false,

      Component = "div",
      style,
      targetRef,
      className,
      children,
      ...restProps
    }: PopperProps,
    ref,
  ) => {
    const { strictPlacement, middlewares } = useFloatingMiddlewares({
      placement,
      sameWidth,
      offsetByMainAxis,
      offsetByCrossAxis,
      customMiddlewares,
    });

    const { refs, floatingStyles } = useFloating({
      placement: strictPlacement,
      middleware: middlewares,
      whileElementsMounted(...args) {
        return autoUpdateFloatingElement(...args, {
          elementResize: autoUpdateOnTargetResize,
        });
      },
    });

    useEffect(() => {
      refs.setReference("current" in targetRef ? targetRef.current : targetRef);
    }, [refs.setReference, targetRef]);

    return (
      <RootRenderer>
        <Component
          {...restProps}
          ref={multipleRef(ref, refs.setFloating)}
          style={{ ...style, ...floatingStyles }}
          className={classNames(styles.wrapper, className)}
        >
          {children}
        </Component>
      </RootRenderer>
    );
  },
);

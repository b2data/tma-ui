import styles from "./Collapsible.module.css";
import { FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import { useTimeout } from "@/hooks";
import { classNames } from "@/helpers";

export type CollapsibleProps = HTMLAttributes<HTMLDivElement> & {
  /** Whether the content is visible or not. */
  open?: boolean;
};

export const Collapsible: FC<CollapsibleProps> = ({
  open,
  children,
  ...props
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const timer = useTimeout();
  const [state, setState] = useState(0);

  const handleClosing = () => {
    rootRef.current?.style.setProperty(
      "height",
      `${wrapperRef?.current?.scrollHeight}px`,
    );
    setTimeout(() => {
      rootRef.current?.style.setProperty("height", "0px");
    }, 1);
  };

  const handleOpening = () => {
    rootRef.current?.style.setProperty(
      "height",
      `${wrapperRef?.current?.scrollHeight}px`,
    );
  };

  useEffect(() => {
    setState((prev) => prev + 1);
    rootRef.current?.style.setProperty("overflow", "hidden");

    if (open) {
      handleOpening();
    } else {
      handleClosing();
    }

    timer.start(3000, () => {
      rootRef.current?.style.setProperty("height", open ? "auto" : "0px");
      rootRef.current?.style.setProperty(
        "overflow",
        open ? "visible" : "hidden",
      );
    });
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={classNames(
        styles.root,
        !open && state === 0 && styles["root--hidden"],
      )}
    >
      <div ref={wrapperRef} className={styles.wrapper}>
        <div {...props}>{children}</div>
      </div>
    </div>
  );
};

import { PropsWithChildren, useEffect, useRef } from "react";
import { useDeepEqualMemo } from "../../hooks";
import { pullToRefresh } from "./helpers/pullToRefresh";
import { PullToRefreshArgs } from "./helpers/model";
import { Spinner } from "../Spinner";
import styles from "./PullToRefresh.module.css";

export interface PullToRefreshProps
  extends PropsWithChildren<
    Partial<Omit<PullToRefreshArgs, "container" | "elControl" | "refresh">> &
      Pick<PullToRefreshArgs, "refresh">
  > {}

export const PullToRefresh = ({ children, ...props }: PullToRefreshProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const destroy = ref.current
      ? pullToRefresh({
          container: ref.current,
          elControl: ref.current?.childNodes[0] as HTMLElement,
          scrollable: document.body,
          threshold: 150,
          onStateChange: () => {},
          ...props,
        })
      : null;

    return () => {
      destroy?.();
    };
  }, [useDeepEqualMemo(props)]);

  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.control}>
        <Spinner className={styles.spinner} />
      </div>
      {children}
    </div>
  );
};

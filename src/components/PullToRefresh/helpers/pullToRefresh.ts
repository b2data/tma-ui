import { onTouchPan } from "./onTouchPan";
import * as animates from "./animates";
import styles from "../PullToRefresh.module.css";
import { PullToRefreshArgs, PullToRefreshState } from "./model";

export const pullToRefresh = (props: PullToRefreshArgs) => {
  const { container, scrollable, threshold, refresh, onStateChange } = props;

  let distance: number | null = null;
  let offset: number | null = null;
  let state: PullToRefreshState = null;

  const addClass = (state: PullToRefreshState) => {
    if (state) {
      container.classList.add(styles[state]);
    }
  };

  const removeClass = (state: PullToRefreshState) => {
    if (state) {
      container.classList.remove(styles[state]);
    }
  };

  const scrollTop = () => {
    if (
      !scrollable ||
      [window, document, document.body, document.documentElement].includes(
        scrollable,
      )
    ) {
      return document.documentElement.scrollTop || document.body.scrollTop;
    } else {
      return scrollable.scrollTop;
    }
  };

  const handlePanMove = (e: any) => {
    let d = e.deltaY;

    if (
      scrollTop() > 0 ||
      (d < 0 && !state) ||
      (state && state in { aborting: 1, refreshing: 1, restoring: 1 })
    ) {
      return;
    }

    if (e.cancelable) {
      e.preventDefault();
    }

    if (distance === null) {
      offset = d;
      state = "pulling";
      addClass(state);
      onStateChange(state);
    }

    d = d - offset!;
    if (d < 0) d = 0;
    distance = d;

    if (
      (d >= threshold && state !== "reached") ||
      (d < threshold && state !== "pulling")
    ) {
      removeClass(state);
      state = state === "reached" ? "pulling" : "reached";
      addClass(state);
      onStateChange(state);
    }

    animates.pulling(d, props);
  };

  const handlePanEnd = () => {
    if (state === null) return;

    if (state === "pulling") {
      removeClass(state);
      state = "aborting";
      onStateChange(state);
      addClass(state);
      animates.aborting(props).then(() => {
        removeClass(state);
        distance = state = offset = null;
        onStateChange(state);
      });
    } else if (state === "reached") {
      removeClass(state);
      state = "refreshing";
      addClass(state);
      onStateChange(state);
      animates.refreshing(props);

      refresh().then(() => {
        removeClass(state);
        state = "restoring";
        addClass(state);
        onStateChange(state);

        animates.restoring(props).then(() => {
          removeClass(state);
          distance = state = offset = null;
          onStateChange(state);
        });
      });
    }
  };

  return onTouchPan({
    element: container,
    onPanMove: handlePanMove,
    onPanEnd: handlePanEnd,
  });
};

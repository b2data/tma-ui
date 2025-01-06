import { PullToRefreshArgs } from "./model";

export const pulling = (
  d: number,
  opts: Pick<PullToRefreshArgs, "elControl" | "container" | "threshold">,
) => {
  if (!opts.container) {
    return;
  }
  const { container, threshold, elControl } = opts;

  let p = d / threshold;
  if (p > 1) p = 1;
  else p = p * p * p;

  const y = d / 2.5;
  container.style.transform = y ? `translate3d(0, ${y}px, 0)` : "";
  if (elControl) {
    elControl.style.opacity = `${p}`;
    elControl.style.transform = `translate3d(-50%, 0, 0) rotate(${360 * p}deg)`;
  }
};

export const refreshing = ({
  container,
  threshold,
}: Pick<PullToRefreshArgs, "container" | "threshold">) => {
  if (container) {
    container.style.transition = "transform 0.2s";
    container.style.transform = `translate3d(0, ${threshold / 3}px, 0)`;
  }
};

export const restoring = ({
  container,
}: Pick<PullToRefreshArgs, "container">) => {
  return new Promise((resolve) => {
    if (container && container.style.transform) {
      container.style.transition = "transform 0.3s";
      container.style.transform = "translate3d(0, 0, 0)";
      container.addEventListener("transitionend", () => {
        container.style.transition = "";
        resolve("done");
      });
    } else {
      resolve("done");
    }
  });
};

export const aborting = restoring;

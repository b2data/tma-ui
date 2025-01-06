export type PullToRefreshState =
  | "pulling"
  | "aborting"
  | "reached"
  | "refreshing"
  | "restoring"
  | null;

export type PullToRefreshArgs = {
  container: HTMLElement;
  elControl: HTMLElement;

  refresh: () => Promise<void>;
  scrollable?: HTMLElement;
  threshold: number;
  onStateChange: (state: PullToRefreshState) => void;
};

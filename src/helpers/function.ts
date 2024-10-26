export const callMultiple =
  (...fns: any) =>
  (...args: any) =>
    fns
      .filter((f: any) => typeof f === "function")
      .forEach((f: any) => f(...args));

// eslint-disable-next-line
export function isFunction(value: unknown): value is Function {
  return typeof value === "function";
}

export function throttle<T extends any[]>(
  fn: (...args: T) => unknown,
  threshold = 50,
) {
  let prevDate: number = Date.now() - threshold;
  let timeoutId: ReturnType<typeof setTimeout>;

  const throttledFn = (...args: T) => {
    const timeLeft = prevDate + threshold - Date.now();

    clearTimeout(timeoutId);
    if (timeLeft > 0) {
      timeoutId = setTimeout(() => {
        prevDate = Date.now();
        fn.apply(window, args);
      }, timeLeft);
      return;
    }

    prevDate = Date.now();
    fn.apply(window, args);
  };

  throttledFn.cancel = () => {
    clearTimeout(timeoutId);
  };

  return throttledFn;
}

export function debounce<T extends any[]>(
  fn: (...args: T) => unknown,
  delay: number,
) {
  let timeoutId: ReturnType<typeof setTimeout>;
  let args: T;

  const later = () => fn.apply(window, args);
  const debouncedFn = (...a: T) => {
    args = a;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);
  };

  debouncedFn.cancel = () => {
    clearTimeout(timeoutId);
  };

  return debouncedFn;
}

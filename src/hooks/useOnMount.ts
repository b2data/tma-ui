import { EffectCallback, useEffect } from "react";

const EMPTY = [] as unknown[];

/**
 * A React.useEffect equivalent that runs once, when the component is mounted.
 */
export default function useOnMount(fn: EffectCallback) {
  useEffect(fn, EMPTY);
}

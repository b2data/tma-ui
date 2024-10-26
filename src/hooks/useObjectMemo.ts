import { isEqual } from "@/helpers";
import { useRef } from "react";

export const useObjectMemo = <T>(object: T): T => {
  const cache = useRef(object);

  if (!isEqual(cache.current, object)) {
    cache.current = object;
  }

  return cache.current;
};

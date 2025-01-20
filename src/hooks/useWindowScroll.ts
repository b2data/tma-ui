import { useEffect } from "react";

export const useWindowScroll = (
  element: HTMLElement | Window | null = window,
  handleScroll: () => void,
) => {
  useEffect(() => {
    element?.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => element?.removeEventListener("scroll", handleScroll);
  }, [element, handleScroll]);
};

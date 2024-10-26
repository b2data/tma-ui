import { useEffect } from "react";

export const useScroll = (key: string, storage: Storage = sessionStorage) => {
  const handleScroll = () => {
    storage.setItem(key, `${window.scrollY || 0}`);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, +(storage.getItem(key) || 0));
    }, 0);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [key]);
};

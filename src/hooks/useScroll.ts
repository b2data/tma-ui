import { useEffect } from "react";

export const useScroll = (key: string, storage: Storage = sessionStorage) => {
  const handleScroll = () => {
    storage.setItem(key, `${document.body.scrollTop || 0}`);
  };

  useEffect(() => {
    setTimeout(() => {
      document.body.scroll(0, +(storage.getItem(key) || 0));
    }, 0);

    document.body.addEventListener("scroll", handleScroll);
    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, [key]);

  return () => {
    storage.removeItem(key);
  };
};

export const useScrollToTop = (key?: string) => {
  useEffect(() => {
    document.body.scroll(0, 0);
  }, [key]);
};

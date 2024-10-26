let platform: string | undefined = undefined;

export const usePlatform = (): string => {
  return platform || "base";
};

export const setPlatform = (p: string) => {
  platform = p;
};

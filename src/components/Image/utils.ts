export const getBorderRadius = (size: number | string) => {
  if (typeof size === "string") {
    return "inherit";
  }

  if (size < 40) {
    return 4;
  }

  if (size < 96) {
    return 8;
  }

  return 12;
};

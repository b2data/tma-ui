export const getCircleAttributes = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "large":
      return {
        size: 44,
        strokeWidth: 4,
        radius: 18,
      };

    case "medium":
      return {
        size: 36,
        strokeWidth: 3,
        radius: 14,
      };

    case "small":
      return {
        size: 28,
        strokeWidth: 3,
        radius: 10,
      };

    default:
      return undefined;
  }
};

export const getTextAttributes = (
  size: "small" | "medium" | "large",
  progress: number,
) => {
  switch (size) {
    case "large":
      return {
        fontSize: 18,
        x: progress < 10 ? 18 : progress < 100 ? 13 : 8,
        y: -16,
      };

    case "medium":
      return {
        fontSize: 14,
        x: progress < 10 ? 15 : progress < 100 ? 11 : 7,
        y: -13,
      };

    case "small":
      return {
        fontSize: 10,
        x: progress < 10 ? 12 : progress < 100 ? 9 : 6.5,
        y: -11,
      };

    default:
      return undefined;
  }
};

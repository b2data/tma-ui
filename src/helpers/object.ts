export const isObjectLike = (object: any): boolean => {
  return typeof object === "object" && object !== null;
};

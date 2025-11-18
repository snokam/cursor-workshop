import { Padding } from "./types";

export const getPaddingValue = (padding: Padding) => {
  switch (padding) {
    case Padding.None:
      return "0";
    case Padding.Large:
      return "6rem";
    case Padding.Medium:
      return "4rem";
    case Padding.Small:
    default:
      return "2rem";
  }
};

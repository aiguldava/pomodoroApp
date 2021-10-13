import { CHANGE_BACKGROUND } from "../actionTypes";

export const changeBackground = (color, title) => ({
  type: CHANGE_BACKGROUND,
  color,
  title,
});

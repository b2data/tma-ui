import { MultiSelectOption } from "../types";

export type FocusActionType = "next" | "prev";

export const DEFAULT_SELECTED_BEHAVIOR = "highlight";

export const DEFAULT_EMPTY_TEXT = "Nothing found";

export const FOCUS_ACTION_NEXT: FocusActionType = "next";

export const FOCUS_ACTION_PREV: FocusActionType = "prev";

export const isCreateNewOptionPreset = (option: MultiSelectOption) => {
  return option && "actionText" in option;
};

export const isEmptyOptionPreset = (option: MultiSelectOption) => {
  return option && "placeholder" in option;
};

export const isServicePreset = (option: MultiSelectOption) =>
  isCreateNewOptionPreset(option) || isEmptyOptionPreset(option);

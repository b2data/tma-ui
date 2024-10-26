import { MultiSelectOption, MultiSelectOptionValue } from "../../types";

export const isValueLikeOption = <O extends MultiSelectOption>(
  value: O | MultiSelectOptionValue,
): value is O => typeof value === "object" && "value" in value;

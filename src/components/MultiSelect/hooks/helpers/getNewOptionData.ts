import {
  MultiSelectOption,
  MultiSelectOptionLabel,
  MultiSelectOptionValue,
} from "../../types";

export const getNewOptionData = (
  value: MultiSelectOptionValue,
  label: MultiSelectOptionLabel,
): MultiSelectOption => ({
  value,
  label,
});

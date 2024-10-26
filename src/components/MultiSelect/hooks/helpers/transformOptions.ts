import { MultiSelectOption } from "../../types";
import { isServicePreset } from "../constants";
import { getNewOptionData } from "./getNewOptionData";
import { UseMultiSelectProps } from "../useMultiSelect";

export const transformOptions = ({
  value,
  inputValue = "",
  emptyText,
  creatable,
  filterFn,
  options: optionsProp,
  selectedBehavior,
}: Required<Pick<UseMultiSelectProps, "value" | "options" | "emptyText">> &
  Pick<
    UseMultiSelectProps,
    | "inputValue"
    | "emptyText"
    | "creatable"
    | "filterFn"
    | "options"
    | "selectedBehavior"
  >): MultiSelectOption[] => {
  const filteredOptionsProp = filterFn
    ? optionsProp.filter((option) => filterFn(inputValue, option))
    : optionsProp;

  if (filteredOptionsProp.length === 0) {
    if (inputValue !== "" && typeof creatable === "function") {
      return [
        {
          ...getNewOptionData("", ""),
          actionText: creatable(inputValue),
        },
      ];
    }

    return [
      {
        ...getNewOptionData("", ""),
        placeholder: emptyText,
      },
    ];
  }

  if (selectedBehavior === "hide") {
    const selected = value.map((item) => item.value);
    return filteredOptionsProp.filter((item) => {
      return !isServicePreset(item) ? !selected.includes(item.value) : false;
    });
  }

  return filteredOptionsProp;
};

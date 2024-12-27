import { ReactElement } from "react";

export type MultiSelectOptionValue = string | number;
export type MultiSelectOptionLabel = ReactElement | string | number;

export type MultiSelectOption = {
  value: MultiSelectOptionValue;
  label: MultiSelectOptionLabel;
  disabled?: boolean;
  [index: string]: any;
};

import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { isEqual } from "@/helpers";

import { MultiSelectOption } from "../types";

import {
  filterFn as defaultFilterFn,
  FilterFn,
  transformOptions,
} from "./helpers";

import { DEFAULT_EMPTY_TEXT, DEFAULT_SELECTED_BEHAVIOR } from "./constants";

import {
  useMultiSelectInput,
  type UseMultiSelectInputProps,
} from "./useMultiSelectInput";

export interface UseMultiSelectProps extends UseMultiSelectInputProps {
  /** Array of options available for selection. */
  options?: MultiSelectOption[];
  /**
   * Enables the creation of new options that are not in the initial list.
   */
  creatable?: (inputValue: string) => void;
  /** Text displayed when no options are available or match the filter criteria. */
  emptyText?: string;
  /** Determines how selected options are treated: either hidden from the list or highlighted within it. */
  selectedBehavior?: "hide" | "highlight";
  /** Custom function to filter options based on the input value. */
  filterFn?: false | FilterFn;
}

/**
 * Hook to manage the state and interactions of a multiselect component.
 * It encapsulates logic for option selection, input change handling, dropdown visibility, and focused option management.
 */
export const useMultiSelect = ({
  // Common props
  disabled,

  // Options props
  value: valueProp,
  defaultValue,
  onChange,

  // Input props
  inputValue: inputValueProp = "",
  onInputChange: onInputChangeProp,

  // Dropdown props
  creatable,
  emptyText = DEFAULT_EMPTY_TEXT,
  filterFn = defaultFilterFn,
  selectedBehavior = DEFAULT_SELECTED_BEHAVIOR,
  options: optionsProp = [],
}: UseMultiSelectProps) => {
  const { value, inputValue, onInputChange, ...restMultiSelectProps } =
    useMultiSelectInput({
      // Option props
      value: valueProp,
      defaultValue,
      onChange,

      // Input Props
      inputValue: inputValueProp,
      onInputChange: onInputChangeProp,

      // Other Props
      disabled,
    });

  const [opened, setOpened] = useState(false);
  const [options, setOptions] = useState<MultiSelectOption[]>(() =>
    opened
      ? transformOptions({
          value,
          inputValue,
          emptyText,
          creatable,
          filterFn,
          options: optionsProp,
          selectedBehavior,
        })
      : [],
  );

  const [focusedOptionIndex, setFocusedOptionIndex] = useState<number | null>(
    0,
  );
  const [focusedOption, setFocusedOption] = useState<MultiSelectOption | null>(
    null,
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onInputChange(event);

      if (!opened) {
        return;
      }

      setOpened(true);
      setFocusedOptionIndex(0);
    },
    [onInputChange, opened],
  );

  useEffect(() => {
    if (!opened) {
      return;
    }

    setOptions((prevOptions) => {
      const nextOptions = transformOptions({
        value,
        inputValue,
        emptyText,
        creatable,
        filterFn,
        options: optionsProp,
        selectedBehavior,
      });

      if (isEqual(prevOptions, nextOptions)) {
        return prevOptions;
      }

      return nextOptions;
    });
  }, [
    opened,
    value,
    inputValue,
    optionsProp,
    creatable,
    selectedBehavior,
    filterFn,
  ]);

  return {
    ...restMultiSelectProps,

    // Options props
    value,

    // Input props
    inputValue,
    onInputChange: handleInputChange,

    // States for dropdown
    options,
    opened,
    setOpened,
    focusedOption,
    focusedOptionIndex,
    setFocusedOption,
    setFocusedOptionIndex,
  };
};

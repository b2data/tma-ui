import {
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  KeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
} from "react";
import styles from "./MultiSelect.module.css";

import { Keys } from "@/helpers";
import { classNames, callMultiple } from "@/helpers";
import { useGlobalClicks } from "@/hooks";

import { ChevronDownIcon } from "@/icons";

import { FormInput, FormPublicProps } from "../FormInput";
import {
  MultiSelectDropdown,
  MultiSelectDropdownProps,
} from "./components/MultiSelectDropdown";
import { useMultiSelect, UseMultiSelectProps } from "./hooks/useMultiSelect";
import {
  MultiSelectBase,
  MultiSelectBaseProps,
} from "./components/MultiSelectBase";
import { MultiSelectOption } from "./types";
import {
  FOCUS_ACTION_NEXT,
  FOCUS_ACTION_PREV,
  FocusActionType,
  isServicePreset,
} from "./hooks/constants";

export type { MultiSelectOption };

export interface MultiSelectProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "value" | "defaultValue" | "onChange"
    >,
    FormPublicProps,
    Pick<MultiSelectDropdownProps, "closeDropdownAfterSelect" | "renderOption">,
    Pick<
      UseMultiSelectProps,
      | "value"
      | "defaultValue"
      | "onChange"
      | "filterFn"
      | "onInputChange"
      | "inputValue"
      | "selectedBehavior"
      | "emptyText"
      | "creatable"
      | "onOpen"
      | "onClose"
    >,
    Pick<MultiSelectBaseProps, "renderChip"> {
  /**
   * The `options` property defines the available options within the multiselect dropdown.
   * Each option is represented as an object conforming to the `MultiSelectOption` structure,
   * which typically includes properties like `value` (the option's value) and `label` (the human-readable text associated with the option).
   */
  options: MultiSelectOption[];
}

/**
 * A comprehensive component for rendering a multiselect input field with customizable options, dropdown behaviors, and chip display.
 * It integrates functionality for selecting multiple options, searching, and even creating new options based on user input.
 */
export const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      // FormInput options
      header,
      startAdornment,
      endAdornment,
      status,
      wrapperProps,
      className,
      disabled,
      onOpen,
      onClose,

      // CustomSelectDropdownProps
      options: optionsProp,
      closeDropdownAfterSelect = false,
      selectedBehavior,
      emptyText,
      creatable,
      filterFn,

      // MultiSelectInputProps
      value: valueProp = [],
      defaultValue,
      inputValue: inputValueProp,
      renderChip,
      renderOption,
      onInputChange: onInputChangeProp,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      ...restProps
    },
    ref,
  ) => {
    const {
      // Option props
      value,
      addOptionFromInput,
      addOption,
      removeOption,

      // Input props
      inputRef,
      inputValue,
      clearInput,
      onInputChange,

      // Dropdown props
      options,
      opened,
      setOpened,
      focusedOption,
      focusedOptionIndex,
      setFocusedOption,
      setFocusedOptionIndex,
    } = useMultiSelect({
      // Option props
      value: valueProp,
      defaultValue,
      onChange,

      // Input props
      inputValue: inputValueProp,
      onInputChange: onInputChangeProp,

      // Dropdown props
      options: optionsProp,
      emptyText,
      creatable,
      filterFn,
      selectedBehavior,

      // Other props
      disabled,
      onOpen,
      onClose,
    });

    const labelRef = useRef(null);
    const rootRef = useRef(null);

    const dropdownAriaId = useId();
    const dropdownScrollBoxRef = useRef<HTMLDivElement>(null);

    const handleFocus = () => {
      setOpened(true);
      setFocusedOptionIndex(null);
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      if (!event.defaultPrevented && !creatable) {
        event.preventDefault();
      }
    };

    const optionsNodes = useRef<HTMLElement[]>([]).current;
    const scrollToElement = (index: number, center = false) => {
      const dropdown = dropdownScrollBoxRef.current;
      const item = optionsNodes[index];

      if (!item || !dropdown) {
        return;
      }

      const dropdownHeight = dropdown.offsetHeight;
      const { scrollTop } = dropdown;
      const itemTop = item.offsetTop;
      const itemHeight = item.offsetHeight;

      if (center) {
        dropdown.scrollTop = itemTop - dropdownHeight / 2 + itemHeight / 2;
      } else if (itemTop + itemHeight > dropdownHeight + scrollTop) {
        dropdown.scrollTop = itemTop - dropdownHeight + itemHeight;
      } else if (itemTop < scrollTop) {
        dropdown.scrollTop = itemTop;
      }
    };

    const focusOptionByIndex = (index: number, oldIndex: number | null) => {
      let focusedIndex = index;
      const { length } = options;

      if (index < 0) {
        focusedIndex = length - 1;
      } else if (index >= length) {
        focusedIndex = 0;
      }

      if (focusedIndex === oldIndex) {
        return;
      }

      scrollToElement(focusedIndex);
      setFocusedOptionIndex(focusedIndex);
    };

    const focusOption = (nextIndex: number | null, type: FocusActionType) => {
      let index = nextIndex === null ? -1 : nextIndex;

      if (type === FOCUS_ACTION_NEXT) {
        index += 1;
      }

      if (type === FOCUS_ACTION_PREV) {
        index -= 1;
      }

      focusOptionByIndex(index, focusedOptionIndex);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.defaultPrevented) {
        return;
      }

      switch (event.key) {
        case Keys.ARROW_UP:
        case Keys.ARROW_DOWN:
          event.preventDefault();

          if (opened) {
            focusOption(
              focusedOptionIndex,
              event.key === Keys.ARROW_UP
                ? FOCUS_ACTION_PREV
                : FOCUS_ACTION_NEXT,
            );
            return;
          }

          setOpened(true);
          setFocusedOptionIndex(0);
          break;

        case Keys.ENTER: {
          if (!opened) {
            break;
          }

          if (!creatable) {
            event.preventDefault();
          }

          if (focusedOptionIndex === null) {
            break;
          }

          const foundOption = options[focusedOptionIndex];
          if (!foundOption || isServicePreset(foundOption)) {
            break;
          }

          event.preventDefault();
          addOption(foundOption);
          setFocusedOptionIndex(null);
          clearInput();

          if (closeDropdownAfterSelect) {
            setOpened(false);
          }
          break;
        }

        case Keys.ESCAPE:
        case Keys.TAB:
          if (opened) {
            setOpened(false);
          }
          break;

        default:
          break;
      }
    };

    useEffect(() => {
      if (focusedOptionIndex === null) {
        setFocusedOption(null);
        return;
      }

      const foundFocusedOptionIndex = options[focusedOptionIndex];
      if (
        foundFocusedOptionIndex &&
        !isServicePreset(foundFocusedOptionIndex)
      ) {
        setFocusedOption(foundFocusedOptionIndex);
      }
    }, [options, focusedOptionIndex, setFocusedOption]);

    const onDropdownMouseLeave = useCallback(() => {
      setFocusedOptionIndex(null);
    }, [setFocusedOptionIndex]);

    const toggleOpened = () => {
      setOpened(!opened);
    };

    const handleClickOutside = useCallback(() => {
      setOpened(false);
    }, [setOpened]);

    const setOptionNode = (index: number, node: HTMLElement) => {
      optionsNodes[index] = node;
    };

    useGlobalClicks(
      handleClickOutside,
      opened ? rootRef : null,
      opened ? dropdownScrollBoxRef : null,
    );

    const controlledStatus = status || (opened ? "focused" : "default");

    return (
      <FormInput
        ref={ref}
        labelRef={labelRef}
        header={header}
        startAdornment={startAdornment}
        endAdornment={
          <>
            {endAdornment}
            <ChevronDownIcon
              aria-hidden
              onClick={toggleOpened}
              className={styles.chevron}
              style={{ transform: opened ? "rotate(180deg)" : "rotate(0)" }}
            />
          </>
        }
        status={controlledStatus}
        disabled={disabled}
        wrapperProps={wrapperProps}
        className={classNames(styles.wrapper, className)}
      >
        <MultiSelectBase
          {...restProps}
          // FormFieldProps
          ref={rootRef}
          // Option props
          onAddChipOption={addOptionFromInput}
          onRemoveChipOption={removeOption}
          renderChip={renderChip}
          chipsValue={value}
          // Input props
          value={inputValue}
          inputRef={inputRef}
          onChange={onInputChange}
          onFocus={callMultiple(handleFocus, onFocus)}
          onBlur={callMultiple(handleBlur, onBlur)}
          onKeyDown={callMultiple(handleKeyDown, onKeyDown)}
          // a11y props
          role="combobox"
          aria-expanded={opened}
          aria-controls={dropdownAriaId}
          aria-haspopup="listbox"
        />
        {opened && (
          <MultiSelectDropdown
            ref={dropdownScrollBoxRef}
            dropdownAriaId={dropdownAriaId}
            options={options}
            onMouseLeave={onDropdownMouseLeave}
            targetRef={labelRef}
            addOptionFromInput={() => addOptionFromInput(inputValue)}
            setFocusedOptionIndex={setFocusedOptionIndex}
            renderOption={renderOption}
            focusedOption={focusedOption}
            value={value}
            setOptionNode={setOptionNode}
            setOpened={setOpened}
            closeDropdownAfterSelect={closeDropdownAfterSelect}
            addOption={addOption}
            clearInput={clearInput}
            focusedOptionIndex={focusedOptionIndex}
          />
        )}
      </FormInput>
    );
  },
);

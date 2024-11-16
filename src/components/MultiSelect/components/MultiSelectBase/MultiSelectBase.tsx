import {
  forwardRef,
  Fragment,
  InputHTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  RefObject,
} from "react";
import styles from "./MultiSelectBase.module.css";

import {
  getHorizontalSideByKey,
  Keys,
  classNames,
  getHTMLElementByChildren,
  getHTMLElementSiblingByDirection,
} from "@/helpers";
import { isHTMLElement } from "@floating-ui/utils/dom";

import { useExternRef } from "@/hooks";

import { CloseIcon } from "@/icons";
import { ChipProps } from "@/components/Chip";
import { Typography } from "@/components/Typography";
import { Tappable } from "@/components/Tappable";

import { MultiSelectOption } from "../../types";
import { getValueOptionByHTMLElement, renderChipDefault } from "./utils";

export interface MultiSelectBaseProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "color"> {
  /** Custom function to render Chip component. */
  renderChip?: (props: ChipProps) => JSX.Element;
  /** Ref to the input element within the multiselect base. */
  inputRef: RefObject<HTMLInputElement>;
  /** Array of selected options (chips). */
  chipsValue: MultiSelectOption[];
  /** Callback function to add an option based on text input. */
  onAddChipOption: (optionText: string) => void;
  /** Callback function to remove a selected chip. */
  onRemoveChipOption: (option: MultiSelectOption) => void;
}

/**
 * Renders the base layout of the multiselect including the chips (selected options) and the input field.
 */
export const MultiSelectBase = forwardRef<HTMLDivElement, MultiSelectBaseProps>(
  (
    {
      inputRef,
      className,

      // Option props
      chipsValue,
      onAddChipOption,
      onRemoveChipOption,
      renderChip = renderChipDefault,

      // Input props
      placeholder,
      disabled,
      readOnly,
      ...restProps
    },
    ref,
  ) => {
    const listRef = useExternRef<HTMLDivElement>(ref);

    const valueLength = chipsValue.length;
    const withPlaceholder = valueLength === 0;
    const isDisabled = disabled || readOnly;

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      const targetEl = event.target;
      const inputEl = inputRef.current;

      if (event.defaultPrevented || !inputEl || !isHTMLElement(targetEl)) {
        return;
      }

      const lastOptionIndex = valueLength - 1;

      const nextInputValue = inputEl.value;
      const isInputEl = targetEl === inputEl;
      const isInputValueEmpty = nextInputValue === "";

      switch (event.key) {
        case Keys.ENTER: {
          if (isInputEl && !isInputValueEmpty) {
            event.preventDefault();
            onAddChipOption(nextInputValue);
          }
          break;
        }

        case Keys.BACKSPACE: {
          if (valueLength) {
            const option =
              isInputEl && isInputValueEmpty
                ? chipsValue[lastOptionIndex]
                : getValueOptionByHTMLElement(chipsValue, targetEl);

            if (!option) {
              return;
            }

            event.preventDefault();
            inputRef.current.focus();
            onRemoveChipOption(option);
          }
          break;
        }

        case Keys.ARROW_UP:
        case Keys.ARROW_LEFT:
        case Keys.ARROW_DOWN:
        case Keys.ARROW_RIGHT: {
          if (!valueLength || !listRef.current) {
            break;
          }

          const isSelectionOnFirstLetter = inputEl.selectionStart === 0;

          if (!isInputValueEmpty && !isSelectionOnFirstLetter) {
            break;
          }

          event.preventDefault();
          let foundEl: HTMLElement | null = null;
          const horizontalSide = getHorizontalSideByKey(event.key);

          if (
            isInputEl &&
            (event.key === Keys.ARROW_UP || event.key === Keys.ARROW_LEFT)
          ) {
            foundEl = getHTMLElementByChildren(
              listRef.current.children,
              lastOptionIndex,
            );
          } else if (horizontalSide) {
            foundEl = getHTMLElementSiblingByDirection(
              targetEl,
              horizontalSide,
            );
          }

          if (foundEl) {
            foundEl.focus();
          }
          break;
        }

        default:
          break;
      }
    };

    const handleChipRemove = (
      event: MouseEvent,
      optionToRemove: MultiSelectOption,
    ) => {
      event.preventDefault();
      event.stopPropagation();
      onRemoveChipOption(optionToRemove);
    };

    const handleClick = () => {
      const isFocused = document.activeElement === inputRef.current;
      if (!isFocused && inputRef.current) {
        inputRef.current.focus();
      }
    };

    return (
      <div
        ref={listRef}
        className={classNames(
          styles.wrapper,
          withPlaceholder && styles["wrapper--withPlaceholder"],
          className,
        )}
        onClick={isDisabled ? undefined : handleClick}
        role="listbox"
        aria-orientation="horizontal"
        aria-disabled={disabled}
        aria-readonly={readOnly}
        onKeyDown={isDisabled ? undefined : handleKeyDown}
      >
        {chipsValue.map((option, index) => (
          <Fragment key={`${typeof option.value}-${option.label}`}>
            {renderChip({
              children: option.label,
              className: styles.chip,
              value: option.value,
              tabIndex: -1,
              endAdornment: (
                <Tappable
                  Component="div"
                  interactiveAnimation="opacity"
                  onClick={(event) => handleChipRemove(event, option)}
                  className={styles.closeIcon}
                >
                  <CloseIcon size={16} />
                </Tappable>
              ),
              role: "option",
              "aria-selected": true,
              "aria-posinset": index + 1,
              "aria-setsize": valueLength,
            })}
          </Fragment>
        ))}
        <Typography
          variant="subHeadline"
          ref={inputRef}
          aria-autocomplete="list"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          {...restProps}
          Component="input"
          type="text"
          className={styles.input}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={withPlaceholder ? placeholder : undefined}
        />
      </div>
    );
  },
);

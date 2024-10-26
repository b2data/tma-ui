import { Chip, ChipProps } from "@/components/Chip";
import { MultiSelectOption } from "../../types";

export const renderChipDefault = (props: ChipProps) => {
  const { ...rest } = props;
  return <Chip mode="mono" {...rest} />;
};

export const getValueOptionByHTMLElement = (
  options: MultiSelectOption[],
  el: HTMLElement,
) => {
  const value = el.getAttribute("value");
  return options.find((v) => v.value === value);
};

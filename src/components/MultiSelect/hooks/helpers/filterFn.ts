import { getTextFromChildren } from "@/helpers";
import { MultiSelectOption } from "../../types";

export type FilterFn = (
  inputValue: string,
  option: MultiSelectOption,
) => boolean;

export function filterFn(...args: Parameters<FilterFn>): ReturnType<FilterFn> {
  const [rawSearchQuery = "", option] = args;

  if (option?.label === undefined) {
    return false;
  }

  const searchQuery = rawSearchQuery.trim().toLocaleLowerCase();
  const label = getTextFromChildren(option.label).toLocaleLowerCase();

  if (label.startsWith(searchQuery)) {
    return true;
  }

  const findAllIncludes = (target = "", search = "") => {
    const includes = [];
    let i = target.indexOf(search);
    while (i !== -1) {
      includes.push(i);
      i = target.indexOf(search, i + 1);
    }
    return includes;
  };

  const includes = findAllIncludes(label, searchQuery);
  if (includes.length === 0) {
    return false;
  }

  return includes.some(
    (index) => index === 0 || !/\p{L}/u.test(label[index - 1]),
  );
}

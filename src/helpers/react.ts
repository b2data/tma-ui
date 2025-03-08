import { Children, isValidElement, ReactNode, Ref, RefObject } from "react";

export const hasReactNode = (value: ReactNode): boolean => {
  return (
    value !== undefined && value !== false && value !== null && value !== ""
  );
};

export function isPrimitiveReactNode(node: ReactNode): boolean {
  return typeof node === "string" || typeof node === "number";
}

// @see https://github.com/fernandopasik/react-children-utilities/tree/main
export const childToString = (child?: ReactNode): string => {
  if (
    typeof child === "undefined" ||
    child === null ||
    typeof child === "boolean"
  ) {
    return "";
  }

  if (JSON.stringify(child) === "{}") {
    return "";
  }

  return (child as number | string).toString();
};

// @see https://github.com/fernandopasik/react-children-utilities/tree/main
export const getTextFromChildren = (
  children: ReactNode | ReactNode[],
): string => {
  if (!(children instanceof Array) && !isValidElement(children)) {
    return childToString(children);
  }

  return Children.toArray(children).reduce(
    (text: string, child: ReactNode): string => {
      let newText = "";
      const isValidElementResult = isValidElement<{
        children?: ReactNode | ReactNode[];
      }>(child);
      const hasChildren = isValidElementResult && "children" in child.props;

      if (isValidElementResult && hasChildren) {
        newText = getTextFromChildren(child.props.children);
      } else if (isValidElementResult && !hasChildren) {
        newText = "";
      } else {
        newText = childToString(child);
      }

      return text.concat(newText);
    },
    "",
  );
};

export const setRef = <T>(element: T, ref?: Ref<T>): void => {
  if (ref) {
    if (typeof ref === "function") {
      ref(element);
    } else {
      (ref as RefObject<T>).current = element;
    }
  }
};

export const multipleRef = <T>(
  ...refs: Array<Ref<T> | undefined>
): RefObject<T | null> => {
  let current: T | null = null;
  return {
    get current() {
      return current;
    },
    set current(element) {
      current = element;
      refs.forEach((ref) => ref && setRef(element, ref));
    },
  };
};

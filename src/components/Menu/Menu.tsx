import { ReactNode, useState } from "react";

import styles from "./Menu.module.css";

import { Tappable, TappableProps } from "../Tappable";
import { MoreHorizIcon } from "../../icons";
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { classNames } from "@/helpers";

export interface MenuProps extends Omit<TappableProps, "action"> {
  /** The action element or component that triggers the menu to open */
  action?: ReactNode;
  /** If `true` the popover will be closed once child content is clicked */
  closeOnClick?: boolean;
}

export const Menu = ({
  action = <MoreHorizIcon />,
  className,
  closeOnClick = true,
  children,
  ...restProps
}: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const headingId = useId();

  return (
    <>
      <Tappable ref={refs.setReference} {...getReferenceProps()}>
        {action}
      </Tappable>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className={classNames(styles.menu, className)}
            ref={refs.setFloating}
            style={floatingStyles}
            aria-labelledby={headingId}
            {...getFloatingProps()}
            {...(closeOnClick
              ? {
                  onClick: () => setIsOpen(false),
                }
              : {})}
            {...restProps}
          >
            {children}
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};

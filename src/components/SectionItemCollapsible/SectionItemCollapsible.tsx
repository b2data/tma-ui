import { FC, isValidElement, ReactNode, useEffect, useState } from "react";
import styles from "./SectionItemCollapsible.module.css";

import { classNames, hasReactNode } from "@/helpers";
import { Tappable, TappableProps } from "@/components/Tappable";
import { Typography } from "@/components/Typography";
import { ChevronDownIcon } from "@/icons";
import { Collapsible } from "../Collapsible";

export interface SectionItemCollapsibleProps {
  /** Title of the Collapsible section */
  title: ReactNode;
  /** Main content inside Collapsible */
  children: ReactNode;
  /** Content displayed alongside the header as a hint */
  hint?: ReactNode;
  /** Content or elements to be displayed on the left side */
  startAdornment?: ReactNode;
  /** Content or elements to be displayed on the right side */
  endAdornment?: ReactNode;
  /** Controls the open state of the Collapsible */
  open?: boolean;
  /** Callback function invoked when the Collapsible is opened or closed */
  onToggle?: (open: boolean) => void;
  /** Default open state of the Collapsible */
  defaultOpen?: boolean;
  /** Additional class name */
  className?: string;
  /** Props to be passed to the header */
  headerProps?: Omit<TappableProps, "Component">;
  /** Rotate degreed of ChevronIcon. */
  chevronIconRotate?: { collapsed?: number; shown?: number };
}

/**
 * `SectionItemCollapsible` component acts as a flexible and interactive container for various types of content,
 * enabling the creation of complex list items, form fields, and more. It leverages the `Tappable`
 * component for interaction and is designed to be flexible and extensible.
 */
export const SectionItemCollapsible: FC<SectionItemCollapsibleProps> = ({
  children,
  title,
  hint,
  className,
  startAdornment,
  endAdornment,
  open,
  onToggle,
  defaultOpen,
  headerProps,
  chevronIconRotate = { collapsed: 0, shown: -180 },
}) => {
  const [isOpened, setIsOpened] = useState(Boolean(defaultOpen || open));

  const handleCollapse = () => {
    setIsOpened(!isOpened);
    onToggle?.(!isOpened);
  };

  useEffect(() => {
    if (open !== undefined) {
      setIsOpened(open);
    }
  }, [open]);

  return (
    <div className={classNames(styles.wrapper, className)}>
      <Tappable
        Component="div"
        className={styles.header}
        onClick={handleCollapse}
        {...headerProps}
      >
        {hasReactNode(startAdornment) && (
          <div className={styles["header--adornment"]}>{startAdornment}</div>
        )}
        <div className={styles["header--content"]}>
          <Typography variant="text" Component="h6" className={styles.head}>
            {title}
          </Typography>
          {isValidElement(hint)
            ? hint
            : hasReactNode(hint) && (
                <Typography
                  variant="caption"
                  className={styles["header--hint"]}
                >
                  {hint}
                </Typography>
              )}
        </div>
        <div
          className={classNames(
            styles["header--adornment"],
            !hasReactNode(endAdornment) && styles["header--endAdornmentEmpty"],
          )}
        >
          {endAdornment}
          <ChevronDownIcon
            className={styles["header--chevronDown"]}
            style={{
              transform: `rotate(${isOpened ? `${chevronIconRotate.shown}deg` : `${chevronIconRotate.collapsed}deg`})`,
            }}
          />
        </div>
      </Tappable>
      <Collapsible open={isOpened} className={styles["collapsible"]}>
        {children}
      </Collapsible>
    </div>
  );
};

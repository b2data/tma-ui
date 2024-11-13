import { SectionItem, SectionItemProps } from "@/components/SectionItem";
import styles from "./MultiSelectDropdown.module.css";

import { CheckedIcon } from "@/icons";

export const renderOptionDefault = (props: SectionItemProps) => {
  return (
    <SectionItem
      {...props}
      endAdornment={
        props.selected ? (
          <CheckedIcon size={20} className={styles.selectedIcon} />
        ) : undefined
      }
    />
  );
};

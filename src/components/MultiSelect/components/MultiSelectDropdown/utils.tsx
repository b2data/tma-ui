import { SectionItem, SectionItemProps } from "@/components/SectionItem";
import styles from "./MultiSelectDropdown.module.css";

import { usePlatform } from "@/hooks";

import { SelectIcon } from "@/icons";

export const renderOptionDefault = (props: SectionItemProps) => {
  const platform = usePlatform();

  return (
    <SectionItem
      {...props}
      endAdornment={
        props.selected ? (
          <SelectIcon
            size={20}
            isIOS={platform === "ios"}
            className={styles.selectedIcon}
          />
        ) : undefined
      }
    />
  );
};

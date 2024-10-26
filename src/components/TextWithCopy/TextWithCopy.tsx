import { CheckedIcon, CopyIcon } from "@/icons";
import { classNames } from "@/helpers";
import { MutableRefObject, FC, useRef, useState, useMemo } from "react";
import { Typography, TypographyProps } from "../Typography";

import styles from "./TextWithCopy.module.css";

const handleInputCopy = (
  inputRef?: MutableRefObject<HTMLInputElement | null>,
) => {
  const value = inputRef?.current?.value;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(value || "");
  } else if (inputRef?.current) {
    inputRef.current.select();
    document.execCommand("copy");
  }
};

export const TextWithCopy: FC<
  TypographyProps & {
    /**
     * Shows the secondary background color for absolute icon
     */
    secondaryBgColor?: boolean;
    /**
     * Text that should be copied and shown
     */
    text: string;
    /**
     * Overwrite copy text by custom text
     */
    shownText?: string;
    /**
     * Crop length of the text
     */
    cropLength?: number;
    /**
     * Show inline copy icon
     */
    inlineIcon?: boolean;
  }
> = ({
  secondaryBgColor,
  text,
  shownText,
  inlineIcon,
  cropLength = 8,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    handleInputCopy(inputRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayText = useMemo(() => {
    const t = shownText || text;
    return t.length > cropLength + 3
      ? `${t.substring(0, cropLength)}…${t.substring(
          t.length - cropLength,
          t.length,
        )}`
      : t;
  }, [shownText, text]);

  if (!displayText) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Typography Component="span" {...props} className={styles.text}>
        {displayText}
        <span
          className={classNames(
            styles.icon,
            inlineIcon && styles["icon--inline"],
            !inlineIcon && styles["icon--absolute"],
            copied && styles["icon--success"],
            secondaryBgColor && styles["icon--secondary-bg-color"],
          )}
          onClick={handleCopy}
        >
          {copied ? <CheckedIcon size={14} /> : <CopyIcon size={14} />}
        </span>
      </Typography>
      <input
        value={text}
        ref={inputRef}
        readOnly
        style={{
          height: 0,
          margin: 0,
          padding: 0,
          border: 0,
          position: "absolute",
          left: -99999,
          top: -99999,
        }}
      />
    </div>
  );
};

import { useState, FC, PropsWithChildren, useMemo } from "react";
import { Snackbar } from "../Snackbar";
import { useDeepEqualMemo } from "../../hooks";
import { WarningIcon } from "../../icons";
import { SnackbarContext, SnackbarMessage } from "./context";

export const SnackbarProvider: FC<
  PropsWithChildren<{
    getErrorMsg?: (err: any) => string;
  }>
> = ({ children, getErrorMsg }) => {
  const [messages, setMessages] = useState<SnackbarMessage[]>([]);

  const current = useMemo(() => messages[0], [useDeepEqualMemo(messages)]);

  const enqueueSnackbar = (message: SnackbarMessage) => {
    setMessages((p) => [...p, message]);
  };

  const enqueueSnackbarError = (err: any) => {
    enqueueSnackbar({
      children:
        getErrorMsg?.(err) ||
        (typeof err === "string"
          ? err
          : err?.error?.message || err?.err.statusText),
      startAdornment: (
        <WarningIcon
          style={{ color: "var(--tg-theme-destructive-text-color)" }}
        />
      ),
    });
  };

  const handleClose = () => {
    setMessages((p) => {
      p.shift();
      return [...p];
    });
  };

  return (
    <SnackbarContext.Provider
      value={{ messages, enqueueSnackbar, enqueueSnackbarError }}
    >
      {children}
      {Boolean(current) && <Snackbar {...current} onClose={handleClose} />}
    </SnackbarContext.Provider>
  );
};

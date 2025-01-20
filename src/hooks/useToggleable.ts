import { useState } from "react";

export type Toggleable = ReturnType<typeof useToggleable>;

export const useToggleable = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((o) => !o),
  };
};

export const useToggleableDialog = () => {
  const [type, setType] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  return {
    dialogType: type,
    dialogData: data,
    openDialog: (t: string | null, d?: any) => {
      setType(t);
      setData(d || null);
    },
    closeDialog: () => {
      setType(null);
      setData(null);
    },
  };
};

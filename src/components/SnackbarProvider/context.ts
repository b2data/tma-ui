import { createContext, useContext } from "react";
import { SnackbarProps } from "../Snackbar";

export type SnackbarMessage = Omit<SnackbarProps, "onClose">;

interface SnackbarContextType {
  messages: SnackbarMessage[];
  enqueueSnackbar: (message: SnackbarMessage) => void;
  enqueueSnackbarError: (err: any) => void;
}

export const SnackbarContext = createContext<SnackbarContextType>({
  messages: [],
  enqueueSnackbar: () => {},
  enqueueSnackbarError: () => {},
});

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};

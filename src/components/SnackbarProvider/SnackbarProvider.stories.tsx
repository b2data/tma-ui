import type { Meta, StoryObj } from "@storybook/react";

import { SnackbarProvider } from "./SnackbarProvider";
import { Button } from "@/components/Button";
import { useSnackbar } from "./context";
import { IconButton } from "../IconButton";

const meta = {
  title: "Overlays/SnackbarProvider",
  component: SnackbarProvider,
} satisfies Meta<typeof SnackbarProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const Content = () => {
  const { enqueueSnackbar, enqueueSnackbarError } = useSnackbar();

  return (
    <>
      <Button onClick={() => enqueueSnackbar({ children: "Snackbar" })}>
        Show snackbar
      </Button>
      <Button onClick={() => enqueueSnackbarError("Test error")}>
        Show error snackbar
      </Button>

      <Button
        onClick={() =>
          enqueueSnackbar({
            children: "With close",
            endAdornment: <IconButton>X</IconButton>,
            closeOnEndAdornmentClick: true,
          })
        }
      >
        Show with close
      </Button>
    </>
  );
};

export const Playground: Story = {
  render: (args) => (
    <SnackbarProvider {...args}>
      <Content />
    </SnackbarProvider>
  ),
} satisfies Story;

import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { hideControls, setControlsTypes } from "@/storybook";

import { Snackbar } from "./Snackbar";
import { HomeIcon } from "@/icons";
import { Button } from "@/components/Button";
import { Link } from "@/components/Link";

const meta = {
  title: "Overlays/Snackbar",
  component: Snackbar,
  argTypes: {
    ...hideControls("startAdornment", "endAdornment", "onClose", "link"),
    ...setControlsTypes(["description", "children"], "text"),
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    startAdornment: <HomeIcon />,
    description: "Restore the message within 4 seconds",
    children: "Message deleted",
    onClose: () => {},
  },
  render: (args) => {
    const [isDeleteSnackbarShown, setIsDeleteSnackbarShown] = useState(false);
    const [isUndoSnackbarShown, setIsUndoSnackbarShown] = useState(false);

    return (
      <>
        <Button onClick={() => setIsDeleteSnackbarShown(true)}>
          Show snackbar
        </Button>
        {isDeleteSnackbarShown && (
          <Snackbar
            {...args}
            endAdornment={
              <Button
                variant="text"
                size="small"
                onClick={() => setIsUndoSnackbarShown(true)}
              >
                Undo
              </Button>
            }
            onClose={() => setIsDeleteSnackbarShown(false)}
          />
        )}
        {isUndoSnackbarShown && (
          <Snackbar
            {...args}
            description="Message returned to the list"
            link={
              <Link href="https://telegram.org" target="_blank">
                Open
              </Link>
            }
            onClose={() => setIsUndoSnackbarShown(false)}
          >
            Message restored
          </Snackbar>
        )}
      </>
    );
  },
} satisfies Story;

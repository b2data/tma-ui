import type { Meta, StoryObj } from "@storybook/react";
import { HomeIcon } from "@/icons";

import { IconButton } from "./IconButton";
import { hideControls } from "@/storybook";

const meta = {
  title: "Blocks/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  argTypes: hideControls("children"),
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: <HomeIcon />,
  },
} satisfies Story;

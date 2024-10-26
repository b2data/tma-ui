import type { Meta, StoryObj } from "@storybook/react";

import { InlineButtonsItem } from "./InlineButtonsItem";

import { HomeIcon } from "@/icons";
import { hideControls } from "@/storybook";

const meta = {
  title: "Blocks/InlineButtonsItem",
  component: InlineButtonsItem,
  parameters: {
    layout: "centered",
  },
  argTypes: hideControls("children"),
} satisfies Meta<typeof InlineButtonsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    text: "Default",
    children: <HomeIcon />,
  },
} satisfies Story;

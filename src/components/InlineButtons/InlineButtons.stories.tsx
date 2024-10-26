import type { Meta, StoryObj } from "@storybook/react";

import { InlineButtons } from "./InlineButtons";

import { HomeIcon } from "@/icons";
import { hideControls } from "@/storybook";
import { InlineButtonsItem } from "../InlineButtonsItem";

const meta = {
  title: "Blocks/InlineButtons",
  component: InlineButtons,
  parameters: {
    layout: "centered",
  },
  argTypes: hideControls("children"),
} satisfies Meta<typeof InlineButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: [
      <InlineButtonsItem key="1" text="Default">
        <HomeIcon />
      </InlineButtonsItem>,
      <InlineButtonsItem key="2" text="Selected" selected>
        <HomeIcon />
      </InlineButtonsItem>,
      <InlineButtonsItem key="3" text="Disabled" disabled>
        <HomeIcon />
      </InlineButtonsItem>,
    ],
  },
} satisfies Story;

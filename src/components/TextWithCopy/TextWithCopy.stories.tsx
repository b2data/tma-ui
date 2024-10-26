import type { Meta, StoryObj } from "@storybook/react";

import { TextWithCopy } from "./TextWithCopy";

import { hideControls } from "@/storybook";

const meta = {
  title: "Blocks/TextWithCopy",
  component: TextWithCopy,
  argTypes: hideControls("children"),
} satisfies Meta<typeof TextWithCopy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    text: "0:c424531feb64afeb46607e0aff5609628207213308b62c123891d817389fc35b",
  },
} satisfies Story;

export const SecondaryBgColor: Story = {
  args: {
    text: "0:c424531feb64afeb46607e0aff5609628207213308b62c123891d817389fc35b",
    secondaryBgColor: true,
  },
} satisfies Story;

export const Inline: Story = {
  args: {
    text: "0:c424531feb64afeb46607e0aff5609628207213308b62c123891d817389fc35b",
    inlineIcon: true,
    secondaryBgColor: false,
  },
} satisfies Story;

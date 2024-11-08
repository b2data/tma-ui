import type { Meta, StoryObj } from "@storybook/react";
import { AddIcon } from "@/icons";

import { Image } from "./Image";
import { hideControls } from "@/storybook";

const meta = {
  title: "Blocks/Image",
  component: Image,
  argTypes: hideControls("fallbackIcon", "children"),
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ValidImage: Story = {
  args: {
    size: 96,
    src: "https://avatars.githubusercontent.com/u/84640980?v=4",
  },
} satisfies Story;

export const InvalidImage: Story = {
  args: {
    size: 96,
    src: "https://avatars.gitontent.com/u/84640980?v=4",
  },
} satisfies Story;

export const WithFallback: Story = {
  args: {
    size: 96,
    src: "https://avatars.gitontent.com/u/84640980?v=4",
    fallbackIcon: <span>😕</span>,
  },
} satisfies Story;

export const WithBadge: Story = {
  args: {
    size: 48,
    src: "https://avatars.githubusercontent.com/u/84640980?v=4",
    fallbackIcon: <span>😕</span>,
    badgeContent: 42,
  },
} satisfies Story;

export const WithChildren: Story = {
  args: {
    size: 48,
    children: <AddIcon />,
  },
} satisfies Story;

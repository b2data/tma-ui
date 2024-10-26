import type { Meta, StoryObj } from "@storybook/react";
import { HomeIcon } from "@/icons";

import { Avatar } from "./Avatar";
import { hideControls } from "@/storybook";

const meta = {
  title: "Blocks/Avatar",
  component: Avatar,
  argTypes: hideControls("fallbackIcon", "children"),
} satisfies Meta<typeof Avatar>;

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

export const WithAcronym: Story = {
  args: {
    size: 96,
    src: "https://avatars.gitontent.com/u/84640980?v=4",
    acronym: "IS",
  },
} satisfies Story;

export const WithChildren: Story = {
  args: {
    size: 48,
    children: <HomeIcon />,
  },
} satisfies Story;

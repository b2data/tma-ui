import type { Meta, StoryObj } from "@storybook/react";
import { hideControls, setControlsTypes } from "@/storybook";

import { SectionItem } from "./SectionItem";
import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";

const meta = {
  title: "Layouts/SectionItem",
  component: SectionItem,
  argTypes: {
    ...hideControls("startAdornment", "endAdornment", "titleBadge"),
    ...setControlsTypes(
      ["Component", "subhead", "subtitle", "children", "hint", "description"],
      "text",
    ),
  },
} satisfies Meta<typeof SectionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    subhead: "Subhead",
    children: "Title",
    subtitle: "Subtitle",
    description: "Description",
    hint: "Hint",
    titleBadge: <Badge type="dot" />,
    startAdornment: <Avatar size={48} />,
    endAdornment: <Badge>99</Badge>,
  },
} satisfies Story;

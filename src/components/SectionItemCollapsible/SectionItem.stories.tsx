import type { Meta, StoryObj } from "@storybook/react";
import { hideControls } from "@/storybook";

import { SectionItemCollapsible } from "./SectionItemCollapsible";
import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";
import { useState } from "react";
import { Typography } from "../Typography";

const meta = {
  title: "Layouts/SectionItemCollapsible",
  component: SectionItemCollapsible,
  argTypes: {
    ...hideControls("startAdornment", "endAdornment", "children"),
  },
} satisfies Meta<typeof SectionItemCollapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    title: "Collapsible Title",
    hint: "Some helper text",
    children: "Title",
    startAdornment: <Avatar size={24} />,
    endAdornment: <Badge>99</Badge>,
    defaultOpen: false,
  },
} satisfies Story;

export const Collapsed: Story = {
  args: {
    title: "Collapsed Title",
    hint: "Some helper text",
    children: "Title",
  },
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <SectionItemCollapsible {...args} open={open} onToggle={setOpen}>
        <Typography
          editableProps={{
            enabled: true,
            markdown: true,
            placeholder: "Content here",
          }}
        />
      </SectionItemCollapsible>
    );
  },
} satisfies Story;

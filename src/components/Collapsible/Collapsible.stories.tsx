import type { Meta, StoryObj } from "@storybook/react";

import { Collapsible } from "./Collapsible";
import { useState } from "react";

const meta = {
  title: "Misc/Collapsible",
  component: Collapsible,
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: (
      <>
        <div>Collapsible content</div>
        <div>Collapsible content</div>
        <div>Collapsible content</div>
        <div>Collapsible content</div>
        <div>Collapsible content</div>
      </>
    ),
  },
  render: (args) => {
    const [open, setIsOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setIsOpen(!open)}>Click me</button>
        <Collapsible open={open} {...args} />
      </div>
    );
  },
} satisfies Story;

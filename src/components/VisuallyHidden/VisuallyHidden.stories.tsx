import type { Meta, StoryObj } from "@storybook/react";
import { hideControls } from "@/storybook";
import { VisuallyHidden } from "./VisuallyHidden";

const meta = {
  title: "Services/VisuallyHidden",
  component: VisuallyHidden,
  argTypes: hideControls("children", "style"),
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: <div>Hidden content</div>,
  },
} satisfies Story;

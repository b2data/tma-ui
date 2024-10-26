import type { Meta, StoryObj } from "@storybook/react";
import { hideControls } from "@/storybook";
import { Touch } from "./Touch";

const meta = {
  title: "Services/Touch",
  component: Touch,
  argTypes: hideControls("children", "style"),
} satisfies Meta<typeof Touch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    style: { padding: 16, background: "var(--tg-theme-bg-color)" },
    children: <div>Some content</div>,
  },
} satisfies Story;

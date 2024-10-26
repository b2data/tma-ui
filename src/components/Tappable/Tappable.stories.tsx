import type { Meta, StoryObj } from "@storybook/react";
import { hideControls } from "@/storybook";
import { Tappable } from "./Tappable";

const meta = {
  title: "Services/Tappable",
  component: Tappable,
  argTypes: hideControls("children", "style"),
} satisfies Meta<typeof Tappable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    style: { padding: 16, background: "var(--tg-theme-bg-color)" },
    children: <div>Some content</div>,
  },
} satisfies Story;

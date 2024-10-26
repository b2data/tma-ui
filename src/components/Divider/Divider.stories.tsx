import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "./Divider";

const meta = {
  title: "Misc/Divider",
  component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ padding: 16, background: "var(--tg-theme-bg-color)" }}>
      <div style={{ background: "var(--tg-theme-secondary-bg-color)" }}>
        <div style={{ padding: 8 }}>Divider is under</div>
        <Divider {...args} />
        <div style={{ padding: 8 }}>Divider is above</div>
      </div>
    </div>
  ),
} satisfies Story;

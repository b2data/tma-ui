import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "./Skeleton";

const meta = {
  title: "Misc/Skeleton",
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    style: { height: 100, width: 240 },
  },
  render: (props) => (
    <div style={{ background: "var(--tg-theme-bg-color)", padding: 20 }}>
      <Skeleton {...props} />
    </div>
  ),
} satisfies Story;

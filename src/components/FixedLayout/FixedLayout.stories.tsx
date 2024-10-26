import type { Meta, StoryObj } from "@storybook/react";

import { FixedLayout } from "./FixedLayout";

const meta = {
  title: "Layouts/FixedLayout",
  component: FixedLayout,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FixedLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <div style={{ height: 200, width: 400 }}>
      <FixedLayout
        vertical="top"
        style={{ padding: 16, border: "1px solid red" }}
      >
        This is FixedLayout with top vertical
      </FixedLayout>
      <FixedLayout style={{ padding: 16, border: "1px solid red" }}>
        This is FixedLayout with default vertical
      </FixedLayout>
    </div>
  ),
} satisfies Story;

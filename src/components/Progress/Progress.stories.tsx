import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "./Progress";
import { hideControls } from "@/storybook";

const meta = {
  title: "Misc/Progress",
  component: Progress,
  argTypes: hideControls("value"),
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div
      style={{
        width: "400px",
        border: "1px dashed #9747FF",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      <Progress value={20} {...args} /> <br />
      <Progress value={40} {...args} /> <br />
      <Progress value={60} {...args} /> <br />
      <Progress value={80} {...args} /> <br />
      <Progress value={100} {...args} />
    </div>
  ),
} satisfies Story;

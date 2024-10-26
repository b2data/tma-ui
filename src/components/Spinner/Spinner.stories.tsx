import type { Meta, StoryObj } from "@storybook/react";

import { Spinner, SpinnerProps } from "./Spinner";
import { hideControls } from "@/storybook";

const meta = {
  title: "Misc/Spinner",
  component: Spinner,
  argTypes: hideControls("size"),
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: StoryObj<SpinnerProps> = {
  render: (args) => (
    <div
      style={{
        width: "400px",
        border: "1px dashed #9747FF",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      <Spinner {...args} size="small" /> <br />
      <Spinner {...args} /> <br />
      <Spinner {...args} size="large" /> <br />
    </div>
  ),
} satisfies Story;

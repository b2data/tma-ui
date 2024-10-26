import type { Meta, StoryObj } from "@storybook/react";
import { hideControls, setControlsTypes } from "@/storybook";

import { Placeholder } from "./Placeholder";
import { Button } from "@/components/Button";

const meta = {
  title: "Layouts/Placeholder",
  component: Placeholder,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...hideControls("children", "action"),
    ...setControlsTypes(["header", "description"], "text"),
  },
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: (
      <img
        alt="Telegram sticker"
        src="https://xelene.me/telegram.gif"
        style={{ display: "block", width: 144, height: 144 }}
      />
    ),
    header: "Title",
    description: "Description",
  },
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Placeholder {...args} />
    </div>
  ),
} satisfies Story;

export const WithAction: Story = {
  args: {
    ...Playground.args,
    action: (
      <Button fullWidth size="large">
        Action
      </Button>
    ),
  },
  render: Playground.render,
} satisfies Story;

export const OnlyDescription: Story = {
  args: {
    children: Playground.args?.children,
    description:
      "Only you can see archived stories unless you choose to post them to your profile.",
  },
  render: Playground.render,
};

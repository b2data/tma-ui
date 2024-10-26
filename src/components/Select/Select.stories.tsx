import type { Meta, StoryObj } from "@storybook/react";

import { Select, SelectProps } from "./Select";
import { List } from "@/components/List";

const meta = {
  title: "Forms/Select",
  component: Select,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: StoryObj<SelectProps> = {
  args: {
    header: "Select",
    children: [<option key={1}>Hello</option>, <option key={2}>Okay</option>],
  },
  render: (props) => (
    <List style={{ padding: 16, background: "var(--tg-theme-bg-color)" }}>
      <Select {...props} />
    </List>
  ),
} satisfies Story;

export const Variants: StoryObj<SelectProps> = {
  args: {
    header: "Select",
    children: Playground.args?.children,
  },
  render: (props) => (
    <List style={{ padding: 16, background: "var(--tg-theme-bg-color)" }}>
      <Select {...props} />
      <Select {...props} status="error" />
      <Select {...props} status="focused" />
      <Select {...props} disabled />
    </List>
  ),
} satisfies Story;

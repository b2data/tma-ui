import type { Meta, StoryObj } from "@storybook/react";
import { hideControls } from "@/storybook";

import { Link } from "./Link";

const meta = {
  title: "Navigation/Link",
  component: Link,
  argTypes: hideControls("children"),
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Link content",
  },
} satisfies Story;

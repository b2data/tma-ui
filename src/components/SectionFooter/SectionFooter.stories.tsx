import type { Meta, StoryObj } from "@storybook/react";
import { setControlsTypes } from "@/storybook";

import { SectionFooter } from "./SectionFooter";

const meta = {
  title: "Layouts/SectionFooter",
  component: SectionFooter,
  argTypes: setControlsTypes(["children"], "text"),
} satisfies Meta<typeof SectionFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "SectionFooter",
  },
} satisfies Story;

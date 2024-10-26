import type { Meta, StoryObj } from "@storybook/react";
import { setControlsTypes } from "@/storybook";

import { SectionHeader } from "./SectionHeader";

const meta = {
  title: "Layouts/SectionHeader",
  component: SectionHeader,
  argTypes: setControlsTypes(["children"], "text"),
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {},
  render: (args) => (
    <>
      <SectionHeader {...args} header="Usual title" />
      <SectionHeader {...args} large header="Large title" />
    </>
  ),
} satisfies Story;

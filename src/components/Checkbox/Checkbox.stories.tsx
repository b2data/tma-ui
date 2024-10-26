import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";
import { Placeholder, Section, SectionItem } from "@/components";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    defaultChecked: true,
    disabled: false,
  },
  render: (args) => (
    <Placeholder description="This component wraps input with type=checkbox, see usage example on the `InSection` story">
      <Checkbox {...args} />
    </Placeholder>
  ),
} satisfies Story;

export const InSection: Story = {
  render: (args) => (
    <Section Component="form">
      <SectionItem
        Component="label"
        startAdornment={<Checkbox name="checkbox" value="1" {...args} />}
        description="Pass Component='label' to Cell to make it clickable."
        multiline
      >
        Apples
      </SectionItem>
      <SectionItem
        Component="label"
        startAdornment={<Checkbox name="checkbox" value="2" {...args} />}
        description="Pass Component='label' to Cell to make it clickable."
        multiline
      >
        Milk
      </SectionItem>
    </Section>
  ),
} satisfies Story;

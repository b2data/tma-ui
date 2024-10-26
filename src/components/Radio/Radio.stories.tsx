import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "./Radio";
import { Placeholder } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { SectionItem } from "@/components/SectionItem";

const meta = {
  title: "Forms/Radio",
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    defaultChecked: true,
    disabled: false,
  },
  render: (args) => (
    <Placeholder description="This component wraps input with type=radio, see usage example on the `InSection` story">
      <Radio {...args} />
    </Placeholder>
  ),
} satisfies Story;

export const InSection: Story = {
  render: (args) => (
    <Section Component="form">
      <SectionItem
        Component="label"
        startAdornment={<Radio name="radio" value="1" {...args} />}
        multiline
      >
        First radio
      </SectionItem>
      <SectionItem
        Component="label"
        startAdornment={<Radio name="radio" value="2" {...args} />}
        multiline
      >
        Second radio
      </SectionItem>
    </Section>
  ),
} satisfies Story;

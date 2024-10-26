import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch";
import { Placeholder } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { SectionItem } from "@/components/SectionItem";

const meta = {
  title: "Forms/Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    defaultChecked: true,
    disabled: false,
  },
  render: (args) => (
    <Placeholder description="This component wraps input with type=checkbox, see usage example on the `InSection` story">
      <div style={{ display: "flex", gap: "6px" }}>
        <Switch {...args} /> <br />
        <Switch defaultChecked {...args} /> <br />
        <Switch disabled {...args} /> <br />
        <Switch disabled checked {...args} /> <br />
      </div>
    </Placeholder>
  ),
} satisfies Story;

export const InSection: Story = {
  render: (args) => (
    <Section>
      <SectionItem
        Component="label"
        endAdornment={<Switch defaultChecked {...args} />}
        multiline
      >
        First radio
      </SectionItem>
    </Section>
  ),
} satisfies Story;

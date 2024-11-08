import type { Meta, StoryObj } from "@storybook/react";
import { AddIcon } from "@/icons";
import { hideControls } from "@/storybook";

import { Rating } from "./Rating";
import { Section } from "@/components/Section";

const meta = {
  title: "Forms/Rating",
  component: Rating,
  argTypes: hideControls("IconContainer"),
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Section
      header="Navigate with tabs!"
      footer="Use the keyboard to navigate between the stars and also click on them"
    >
      <Rating {...args} />
    </Section>
  ),
} satisfies Story;

export const CustomIcon: Story = {
  render: (args) => (
    <Section header="We use custom icon here">
      <Rating IconContainer={AddIcon} {...args} />
    </Section>
  ),
} satisfies Story;

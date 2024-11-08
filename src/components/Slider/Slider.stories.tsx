import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import { List } from "@/components/List";
import { Section } from "@/components/Section";
import { AddIcon } from "@/icons";

const meta = {
  title: "Forms/Slider",
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <List>
      <Section header="Slider" footer="Slider with no props">
        <Slider />
      </Section>
      <Section
        header="Slider with icons"
        footer="Slider with before and after props"
      >
        <Slider startAdornment={<AddIcon />} endAdornment={<AddIcon />} />
      </Section>
      <Section header="Stepped Slider" footer="Slider with step={20} prop">
        <Slider step={25} />
      </Section>
      <Section header="Range Slider" footer="Slider with multiple={true} prop">
        <Slider multiple />
      </Section>
      <Section
        header="Stepped Range Slider"
        footer="Slider with multiple={true},step={20} props"
      >
        <Slider step={20} multiple />
      </Section>
    </List>
  ),
} satisfies Story;

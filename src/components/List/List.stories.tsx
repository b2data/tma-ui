import type { Meta, StoryObj } from "@storybook/react";
import { hideControls } from "@/storybook";

import { List } from "./List";
import { Section } from "../Section";
import { TextField } from "@/components/TextField";

const meta = {
  title: "Layouts/List",
  component: List,
  argTypes: hideControls("children"),
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const PreparedSection = () => (
  <Section
    header="Personal Information"
    footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
  >
    <TextField
      header="First name"
      placeholder="21 y.o. designer from San Francisco"
    />
  </Section>
);

export const Playground: Story = {
  args: {},
  render: () => (
    <List>
      <PreparedSection />
      <PreparedSection />
      <PreparedSection />
    </List>
  ),
} satisfies Story;

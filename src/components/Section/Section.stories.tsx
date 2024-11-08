import type { Meta, StoryObj } from "@storybook/react";
import { AddIcon } from "@/icons";
import { setControlsTypes } from "@/storybook";

import { Section } from "./Section";
import { List } from "../List";
import { SectionItem } from "../SectionItem";
import { TextField } from "@/components/TextField";

const meta = {
  title: "Layouts/Section",
  component: Section,
  argTypes: setControlsTypes(["header", "footer"], "text"),
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

const cells = [
  {
    id: 1,
    icon: <AddIcon />,
    text: "Chat Settings",
  },
  {
    id: 2,
    icon: <AddIcon />,
    text: "Data and Storage",
  },
  {
    id: 3,
    icon: <AddIcon />,
    text: "Devices",
  },
];

export const Playground: Story = {
  render: (args) => (
    <List style={{ padding: "40px", width: 500 }}>
      <Section
        header="Main Settings"
        footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
        {...args}
      >
        {cells.map((cell) => (
          <SectionItem key={cell.id} startAdornment={cell.icon}>
            {cell.text}
          </SectionItem>
        ))}
      </Section>
      <Section
        header="Personal Information"
        footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
        {...args}
      >
        <TextField
          header="First name"
          placeholder="21 y.o. designer from San Francisco"
        />
        <TextField
          header="Last name"
          placeholder="21 y.o. designer from San Francisco"
        />
      </Section>
    </List>
  ),
} satisfies Story;

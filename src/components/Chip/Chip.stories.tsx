import type { Meta, StoryObj } from "@storybook/react";
import { CloseIcon } from "@/icons";
import { hideControls, setControlsTypes } from "@/storybook";

import { Chip } from "./Chip";
import { List } from "@/components/List";
import { Avatar } from "@/components/Avatar";

const meta = {
  title: "Forms/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...hideControls("startAdornment", "endAdornment"),
    ...setControlsTypes(["children"], "text"),
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

const chips = ["Chip", "'n'", "Dale"];

export const Playground: Story = {
  render: (args) => (
    <List style={{ padding: 20, background: "var(--tg-theme-section-bg-color)" }}>
      <div style={{ display: "flex", gap: 16 }}>
        {chips.map((text) => (
          <Chip key={text} {...args}>
            {text}
          </Chip>
        ))}
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        {chips.map((text) => (
          <Chip mode="mono" key={text} {...args}>
            {text}
          </Chip>
        ))}
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        {chips.map((text) => (
          <Chip mode="outline" key={text} {...args}>
            {text}
          </Chip>
        ))}
      </div>
    </List>
  ),
} satisfies Story;

export const WithEndAdornment: Story = {
  render: () => (
    <List style={{ padding: 20 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <Chip mode="elevated" endAdornment={<CloseIcon />}>
          Elevated
        </Chip>
        <Chip mode="mono" endAdornment={<CloseIcon />}>
          Mono
        </Chip>
        <Chip mode="outline" endAdornment={<CloseIcon />}>
          Outline
        </Chip>
      </div>
    </List>
  ),
};

export const WithStartAdornment: Story = {
  render: () => (
    <List style={{ padding: 20 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <Chip mode="elevated" startAdornment={<Avatar size={20} />}>
          Elevated
        </Chip>
        <Chip mode="mono" startAdornment={<Avatar size={20} />}>
          Mono
        </Chip>
        <Chip mode="outline" startAdornment={<Avatar size={20} />}>
          Outline
        </Chip>
      </div>
    </List>
  ),
};

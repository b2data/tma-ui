import type { Meta, StoryObj } from "@storybook/react";
import { AddIcon } from "@/icons";
import { hideControls, setControlsTypes } from "@/storybook";

import { Button } from "./Button";
import { FC } from "react";

const meta = {
  title: "Blocks/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...hideControls("startAdornment", "endAdornment", "Component"),
    ...setControlsTypes(["children"], "text"),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Action",
  },
} satisfies Story;

const ButtonVariants: FC = ({ label, ...props }: any) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    }}
  >
    <div style={{ width: 100 }}>{label}</div>
    <Button color="primary" {...props} />
    <Button color="secondary" {...props} />
    <Button color="error" {...props} />
    <Button color="default" {...props} />
  </div>
);

export const Variants: Story = {
  args: {
    children: "Action",
  },
  render: (props) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <ButtonVariants label="Contained" {...props} />
      <ButtonVariants label="Outlined" variant="outlined" {...props} />
      <ButtonVariants label="Text" variant="text" {...props} />
    </div>
  ),
} satisfies Story;

export const WithIcon: Story = {
  args: {
    startAdornment: <AddIcon />,
    endAdornment: <AddIcon />,
    children: "Create channel",
  },
  render: (args) => <Button {...args} />,
} satisfies Story;

export const Link: Story = {
  args: {
    variant: "text",
    children: "No hello",
    target: "_blank",
    href: "https://nohello.net/en/",
    Component: "a",
  },
} satisfies Story;

import type { Meta, StoryObj } from "@storybook/react";
import { hideControls } from "@/storybook";

import { Menu } from "./Menu";
import { Section } from "../Section";
import { SectionItem } from "../SectionItem";
import { DownloadIcon } from "../../icons";

const meta = {
  title: "Layouts/Menu",
  component: Menu,
  argTypes: hideControls("children"),
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const Content = () => (
  <Section>
    <SectionItem dense startAdornment={<DownloadIcon size={20} />}>
      Download
    </SectionItem>
  </Section>
);

export const Playground: Story = {
  args: {},
  render: () => (
    <div style={{ height: 300 }}>
      <Menu style={{ marginLeft: "auto", width: 24 }}>
        <Content />
      </Menu>
    </div>
  ),
} satisfies Story;

export const WithCustomAction: Story = {
  args: {},
  render: () => (
    <div style={{ height: 300 }}>
      <Menu
        style={{ background: "red", display: "inline" }}
        action={"Open menu"}
      >
        <Content />
      </Menu>
    </div>
  ),
} satisfies Story;

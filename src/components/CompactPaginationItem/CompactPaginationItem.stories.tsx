import type { Meta, StoryObj } from "@storybook/react";
import { hideControls } from "@/storybook";

import {
  CompactPaginationItem,
  CompactPaginationItemProps,
} from "./CompactPaginationItem";

const meta = {
  title: "Navigation/CompactPaginationItem",
  component: CompactPaginationItem,
  argTypes: hideControls("children"),
} satisfies Meta<typeof CompactPaginationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: StoryObj<CompactPaginationItemProps> = {
  args: {},
} satisfies Story;

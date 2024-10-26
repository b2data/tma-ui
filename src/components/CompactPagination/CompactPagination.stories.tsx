import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { hideControls } from "@/storybook";

import { CompactPagination, CompactPaginationProps } from "./CompactPagination";
import { CompactPaginationItem } from "../CompactPaginationItem";

const meta = {
  title: "Navigation/CompactPagination",
  component: CompactPagination,
  argTypes: hideControls("children"),
} satisfies Meta<typeof CompactPagination>;

export default meta;

const paginationItems = Array.from({ length: 8 }, (_, i) => i + 1);

export const Playground: StoryObj<CompactPaginationProps> = {
  render: (args) => {
    const [selected, setSelected] = useState(1);

    return (
      <CompactPagination {...args}>
        {paginationItems.map((item) => (
          <CompactPaginationItem
            key={item}
            onClick={() => setSelected(item)}
            selected={item === selected}
          >
            {item}
          </CompactPaginationItem>
        ))}
      </CompactPagination>
    );
  },
};

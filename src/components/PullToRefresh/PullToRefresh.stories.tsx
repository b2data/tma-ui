import type { Meta, StoryObj } from "@storybook/react";
import { PullToRefresh } from "./PullToRefresh";
import { useRef } from "react";

const meta = {
  title: "Misc/PullToRefresh",
  component: PullToRefresh,
  argTypes: {
    getScrollable: {
      description: "Function to get scrollable component",
      table: { defaultValue: { summary: "() => document.body" } },
    },

    refresh: {
      description: "Async callback for refresh",
    },
    threshold: {
      description: "Threshold to call refresh",
      type: "number",
      table: { defaultValue: { summary: "150" } },
    },
    onStateChange: {
      description:
        "Callback fires when state changed. PullToRefreshState in [pulling,aborting,reached,refreshing,restoring,null]",
    },
  },
} satisfies Meta<typeof PullToRefresh>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    refresh: () => {
      return new Promise((resolve) => {
        // here to fetch the data and rerender the contents.
        setTimeout(resolve, 2000);
      });
    },
  },
  render: (props) => {
    const ref = useRef<HTMLDivElement | null>(null);

    return (
      <div
        ref={ref}
        style={{ height: 300, border: "1px solid", overflowY: "auto" }}
      >
        <PullToRefresh
          {...props}
          getScrollable={() => ref.current as HTMLDivElement}
        >
          <div style={{ padding: 100 }}>Content 1</div>
          <div style={{ padding: 100 }}>Content 2</div>
          <div style={{ padding: 100 }}>Content 3</div>
          <div style={{ padding: 100 }}>Content 4</div>
        </PullToRefresh>
      </div>
    );
  },
} satisfies Story;

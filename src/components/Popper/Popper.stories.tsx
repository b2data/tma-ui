import { MouseEvent, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { hideControls } from "@/storybook";
import { Popper } from "./Popper";

import { Placeholder } from "@/components/Placeholder";
import { Touch } from "@/components/Touch";

const meta = {
  title: "Overlays/Popper",
  component: Popper,
  argTypes: hideControls("targetRef", "Component"),
} satisfies Meta<typeof Popper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    targetRef: "" as any,
  },
  render: (args) => {
    const [virtualElement, setVirtualElement] = useState(() =>
      DOMRect.fromRect({
        x: -200,
        y: -200,
        width: 10,
        height: 10,
      }),
    );

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
      setVirtualElement(({ width, height }) =>
        DOMRect.fromRect({
          x: event.clientX,
          y: event.clientY,
          width,
          height,
        }),
      );
    };

    return (
      <Touch
        style={{
          position: "relative",
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClickCapture={handleClick}
      >
        <Placeholder
          header="Click anywhere in this window"
          description="A low-level component for rendering a dropdown block. It's positioning itself correctly next to the target element."
        />
        <Popper
          {...args}
          style={{
            padding: "10px 12px",
            background: "var(--tg-theme-button-color)",
            color: "#fff",
          }}
          targetRef={{
            getBoundingClientRect() {
              return virtualElement;
            },
          }}
        >
          Hello
        </Popper>
      </Touch>
    );
  },
};

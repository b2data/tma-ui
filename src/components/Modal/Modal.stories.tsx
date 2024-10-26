import { useState } from "react";

import { Decorator, Meta, StoryObj } from "@storybook/react";
import { hideControls } from "@/storybook";
import { Modal, ModalProps } from "./Modal";
import { Button } from "@/components/Button";
import { Placeholder } from "@/components/Placeholder";
import { ModalHeader } from "./components";

const meta = {
  title: "Overlays/Modal",
  component: Modal,
  argTypes: hideControls(
    "header",
    "trigger",
    "children",
    "overlayComponent",
    "snapPoints",
    "fadeFromIndex",
  ),
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const DecoratorFullScreen: Decorator = (StoryComponent) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 600,
      maxHeight: "96vh",
    }}
  >
    <StoryComponent />
  </div>
);

export const Playground: Story = {
  args: {
    header: <ModalHeader>Only iOS header</ModalHeader>,
    trigger: <Button>Open modal</Button>,
    children: (
      <Placeholder header="Title" description="Description">
        <img
          alt="Telegram sticker"
          src="https://xelene.me/telegram.gif"
          style={{ display: "block", width: "144px", height: "144px" }}
        />
      </Placeholder>
    ),
  },
  decorators: [DecoratorFullScreen],
} satisfies Story;

const PlaceholderForNestedModal = (props: ModalProps) => (
  <Placeholder
    header="Title"
    description="Description"
    action={
      <Modal {...props} nested>
        <PlaceholderForNestedModal {...props} />
      </Modal>
    }
  />
);

export const NestedModals: Story = {
  args: Playground.args,
  render: (args) => (
    <Modal {...args}>
      <PlaceholderForNestedModal trigger={args.trigger} {...args} />
    </Modal>
  ),
  decorators: [DecoratorFullScreen],
} satisfies Story;

export const SnapPoints: Story = {
  args: {
    ...Playground.args,
    snapPoints: [0.33, 0.66, 1],
    children: (
      <>
        <div style={{ height: "33vh", background: "blue" }} />
        <div style={{ height: "33vh", background: "green" }} />
        <div style={{ height: "33vh", background: "bisque" }} />
      </>
    ),
  },
  decorators: [DecoratorFullScreen],
} satisfies Story;

export const Controlled: Story = {
  args: {
    ...Playground.args,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.open);
    const [isFetching, setIsFetching] = useState(false);

    const fetchAndClose = () => {
      setIsFetching(true);
      setTimeout(() => {
        setIsFetching(false);
        setIsOpen(false);
      }, 1000);
    };

    return (
      <Placeholder
        header="This modal will be closed after 1000ms, click fetch"
        description="Click fetch"
        action={<Button onClick={() => setIsOpen(true)}>Open again</Button>}
      >
        <Modal
          {...args}
          trigger={undefined}
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <Placeholder
            action={
              <Button loading={isFetching} onClick={fetchAndClose}>
                Fetch data and close
              </Button>
            }
          />
        </Modal>
      </Placeholder>
    );
  },
  decorators: [DecoratorFullScreen],
} satisfies Story;

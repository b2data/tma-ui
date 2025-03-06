import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { CloseIcon } from "@/icons";
import { TextField } from "./TextField";
import { List } from "@/components/List";
import { Tappable } from "@/components/Tappable";

const meta = {
  title: "Forms/TextField",
  component: TextField,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (DecoratorStory) => (
      <List
        style={{
          width: 400,
          maxWidth: "100%",
          margin: "auto",
          padding: 10,
        }}
      >
        <DecoratorStory />
      </List>
    ),
  ],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    header: "Input",
    placeholder: "Placeholder",
  },
} satisfies Story;

export const Inputs: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <>
        <TextField
          header="Input"
          startAdornment="a"
          placeholder="I am usual input, just leave me alone"
        />
        <TextField
          status="error"
          header="Input"
          placeholder="I am error input, don't make my mistakes..."
        />
        <TextField
          status="focused"
          header="Input"
          placeholder="I am focused input, are u focused on me?"
        />
        <TextField
          disabled
          header="Input"
          placeholder="I am disabled input"
          value="DDD"
        />
        <TextField
          header="Input"
          helperText="Helper Text"
        />
        <TextField type="datetime-local" header="Datetime" />
        <TextField
          status="focused"
          header="Input"
          placeholder="Write and clean me"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          endAdornment={
            value ? (
              <Tappable
                onClick={() => setValue("")}
                Component="div"
                style={{ display: "flex", borderRadius: "50%", padding: 4 }}
              >
                <CloseIcon size={16} />
              </Tappable>
            ) : undefined
          }
        />
      </>
    );
  },
} satisfies Story;

export const Textarea: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <>
        <TextField
          multiline
          header="Textarea"
          placeholder="I am usual input, just leave me alone"
        />
        <TextField
          status="error"
          multiline
          header="Textarea"
          placeholder="I am error input, don't make my mistakes..."
        />
        <TextField
          status="focused"
          multiline
          header="Textarea"
          placeholder="I am focused input, are u focused on me?"
        />
        <TextField
          disabled
          multiline
          header="Textarea"
          placeholder="I am disabled placeholder"
        />
        <TextField
          disabled
          multiline
          header="Textarea"
          value="I am disabled value"
        />
        <TextField
          header="Textarea"
          multiline
          helperText="Helper Text"
        />
        <TextField
          status="focused"
          multiline
          header="Textarea"
          placeholder="Write and clean me"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          endAdornment={
            value ? (
              <Tappable
                onClick={() => setValue("")}
                Component="div"
                style={{ display: "flex", borderRadius: "50%", padding: 4 }}
              >
                <CloseIcon size={16} />
              </Tappable>
            ) : undefined
          }
        />
      </>
    );
  },
} satisfies Story;

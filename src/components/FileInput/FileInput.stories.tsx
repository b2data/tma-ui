import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { FileInput } from "./FileInput";
import { List } from "@/components/List";
import { Section } from "@/components/Section";
import { SectionItem } from "@/components/SectionItem";

const meta = {
  title: "Forms/FileInput",
  component: FileInput,
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [files, setFiles] = useState<FileList | null>(null);

    return (
      <FileInput
        multiple
        readOnly
        onChange={(event) => setFiles(event.target.files)}
        {...args}
      >
        {files &&
          Array.from(files).map((file) => (
            <SectionItem key={file.name} subtitle={`${file.size} bytes`}>
              {file.name}
            </SectionItem>
          ))}
      </FileInput>
    );
  },
  decorators: [
    (DecoratorStory) => (
      <List>
        <Section
          header="Component includes only logic of input and label"
          footer="Listen to the onChange event to get the selected files. You can pass children to display the selected files."
        >
          <DecoratorStory />
        </Section>
      </List>
    ),
  ],
} satisfies Story;

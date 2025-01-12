import { useState } from "react";

import { Decorator, Meta, StoryObj } from "@storybook/react";
import { hideControls, setControlsTypes } from "@/storybook";
import { MultiSelect, MultiSelectProps } from "./MultiSelect";

import { List } from "@/components/List";
import { Section } from "@/components/Section";
import { MultiSelectOption } from "./types";

const meta = {
  title: "Forms/MultiSelect",
  component: MultiSelect,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    ...hideControls(
      "options",
      "startAdornment",
      "renderOption",
      "value",
      "defaultValue",
      "filterFn",
      "creatable",
    ),
    ...setControlsTypes(["header"], "text"),
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;

const PLATFORM_OPTIONS: MultiSelectOption[] = [
  { value: "mac", label: "macOS" },
  { value: "linux", label: "Linux", description: "Open-source OS" },
  { value: "windows", label: "Windows", disabled: true },
  { value: "ios", label: "iOS", startAdornment: "🍏" },
  { value: "android", label: "Android" },
  { value: "web", label: "Web" },
  { value: "other", label: "Other" },
];

const decorator: Decorator = (Story) => (
  <List
    style={{
      minHeight: "360px",
      width: "360px",
      background: "var(--tg-theme-secondary-bg-color)",
    }}
  >
    <Story />
  </List>
);

const StoryBookComponent = (
  props: MultiSelectProps & { sectionHeader: string },
) => {
  const [value, setValue] = useState<MultiSelectOption[]>([]);
  const { sectionHeader, ...MultiSelectProps } = props;

  return (
    <Section header={sectionHeader}>
      <MultiSelect
        header="Platforms"
        {...MultiSelectProps}
        placeholder="Select platform"
        options={PLATFORM_OPTIONS}
        value={value}
        onChange={(newOptions) => setValue(newOptions)}
      />
    </Section>
  );
};

export const Pick: StoryObj<MultiSelectProps> = {
  render: (props) => (
    <StoryBookComponent sectionHeader="Pick from existed options" {...props} />
  ),
  decorators: [decorator],
};

export const PickAndHideDropdown: StoryObj<MultiSelectProps> = {
  args: {
    closeDropdownAfterSelect: true,
  },
  render: (props) => (
    <StoryBookComponent
      sectionHeader="Pick from existed options and hide"
      {...props}
    />
  ),
  decorators: [decorator],
};

export const CreateOptionInInput: StoryObj<MultiSelectProps> = {
  args: {
    creatable: (val) => `Create new platform: ${val}`,
  },
  render: (props) => (
    <StoryBookComponent
      sectionHeader="Type something inside and press enter or option in list"
      {...props}
    />
  ),
  decorators: [decorator],
};

import { Fragment } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { hideControls } from "@/storybook";

import { Typography } from "./Typography";

const meta = {
  title: "Blocks/Typography",
  component: Typography,
  argTypes: hideControls("Component"),
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { children: "Text" },
} satisfies Story;

export const H1: Story = {
  args: {
    variant: "h1",
    plain: false,
  },
  render: (props) => (
    <>
      {["light", "regular", "bold"].map((weight) => (
        <Typography key={weight} weight={weight as any} {...props}>
          H1 - {weight}
        </Typography>
      ))}
    </>
  ),
} satisfies Story;

export const H2: Story = {
  args: {
    variant: "h2",
    plain: false,
  },
  render: (props) => (
    <>
      {["light", "regular", "bold"].map((weight) => (
        <Typography key={weight} weight={weight as any} {...props}>
          H2 - {weight}
        </Typography>
      ))}
    </>
  ),
} satisfies Story;

export const H3: Story = {
  args: {
    variant: "h3",
    plain: false,
  },
  render: (props) => (
    <>
      {["light", "regular", "bold"].map((weight) => (
        <Typography key={weight} weight={weight as any} {...props}>
          H3 - {weight}
        </Typography>
      ))}
    </>
  ),
} satisfies Story;

export const H4: Story = {
  args: {
    variant: "h4",
    plain: false,
  },
  render: (props) => (
    <>
      {["light", "regular", "bold"].map((weight) => (
        <Typography key={weight} weight={weight as any} {...props}>
          H4 - {weight}
        </Typography>
      ))}
    </>
  ),
} satisfies Story;

export const Headline: Story = {
  args: {
    variant: "headline",
    plain: false,
  },
  render: (props) => (
    <>
      {["light", "regular", "bold"].map((weight) => (
        <Typography key={weight} weight={weight as any} {...props}>
          headline - {weight}
        </Typography>
      ))}
    </>
  ),
} satisfies Story;

export const SubHeadline: Story = {
  args: {
    variant: "subHeadline",
    plain: false,
  },
  render: (props) => (
    <>
      {["light", "regular", "bold"].map((weight) => (
        <Typography key={weight} weight={weight as any} {...props}>
          subHeadline - {weight}
        </Typography>
      ))}
      {["light", "regular", "bold"].map((weight) => (
        <Typography key={weight} weight={weight as any} {...props} small>
          subHeadline - {weight} + small
        </Typography>
      ))}
    </>
  ),
} satisfies Story;

export const Text: Story = {
  args: {
    variant: "text",
    plain: false,
  },
  render: (props) => (
    <>
      {["light", "regular", "bold"].map((weight) => (
        <Fragment key={weight}>
          <Typography weight={weight as any} {...props}>
            text - {weight}
          </Typography>
          <br />
        </Fragment>
      ))}
    </>
  ),
} satisfies Story;

export const Caption: Story = {
  args: {
    variant: "caption",
    plain: false,
  },
  render: (props) => (
    <>
      {["light", "regular", "bold"].map((weight) => (
        <Fragment key={weight}>
          <Typography weight={weight as any} {...props}>
            caption - {weight}
          </Typography>
          <br />
        </Fragment>
      ))}
      {["light", "regular", "bold"].map((weight) => (
        <Fragment key={weight}>
          <Typography weight={weight as any} {...props} small>
            caption - {weight} + small
          </Typography>
          <br />
        </Fragment>
      ))}
    </>
  ),
} satisfies Story;

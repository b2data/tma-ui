import type { Meta, StoryObj } from "@storybook/react";
import { hideControls } from "@/storybook";

import { AvatarStack } from "./AvatarStack";
import { Avatar, AvatarProps } from "../Avatar";

const AVATAR_URL = "https://avatars.githubusercontent.com/u/84640980?v=4";

const meta = {
  title: "Blocks/AvatarStack",
  component: AvatarStack,
  argTypes: hideControls("children"),
} satisfies Meta<typeof AvatarStack>;

export default meta;

export const Playground: StoryObj<AvatarProps> = {
  args: {
    children: (
      <>
        <Avatar size={48} src={AVATAR_URL} />
        <Avatar size={48} src={AVATAR_URL} />
        <Avatar size={48} src={AVATAR_URL} />
        <Avatar size={48} src={AVATAR_URL} />
      </>
    ),
  },
};

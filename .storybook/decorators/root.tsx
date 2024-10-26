import React from "react";
import { Decorator } from "@storybook/react";
import { setPlatform } from "../../src/hooks/usePlatform";

export const AppRootDecorator: Decorator = (Story, context) => {
  setPlatform(context.globals.platform);
  return <Story />;
};

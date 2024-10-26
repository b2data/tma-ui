import React from "react";
import { Decorator } from "@storybook/react";

export const StrictDecorator: Decorator = (Story) => (
  <React.StrictMode>
    <Story />
  </React.StrictMode>
);

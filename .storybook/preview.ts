import type { Preview } from "@storybook/react";
import {
  AppRootDecorator,
  StrictDecorator,
  StyleDecorator,
} from "./decorators";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    docs: {
      inlineStories: true,
      source: {
        state: "open",
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    centered: true,
  },
  globalTypes: {
    platform: {
      name: "Platform",
      description: "Platform for components",
      defaultValue: "base",
      toolbar: {
        icon: "mobile",
        items: ["base", "ios"],
        title: "Platform",
        dynamicTitle: true,
      },
    },
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  decorators: [StrictDecorator, AppRootDecorator, StyleDecorator],
};

export default preview;

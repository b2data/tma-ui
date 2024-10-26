import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/components/**/*.@(mdx|stories.@(ts|tsx))"],
  staticDirs: ["../public"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
      },
    },
  ],
  framework: "@storybook/react-vite",
  docs: {
    defaultName: "docs",
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      // makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @mui packages
      propFilter: (prop) => {
        if (prop.parent) {
          return prop.parent.fileName.includes("src/components");
        }

        if (!prop.declarations || prop.declarations.length === 0) {
          return false;
        }

        return prop.declarations[0].fileName.includes("src/components");
      },
    },
  },
};

export default config;

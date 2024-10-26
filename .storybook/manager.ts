import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "B2Data TMA",
  }),
  toolbar: {
    zoom: { hidden: true },
  },
});

import React, { useEffect } from "react";
import { Decorator } from "@storybook/react";

const darkTheme = `
  --tg-theme-text-color: #ffffff;
  --tg-theme-button-text-color: #ffffff;
  --tg-theme-subtitle-text-color: #b1c3d5;
  --tg-theme-section-header-text-color: #b1c3d5;
  --tg-theme-accent-text-color: #2ea6ff;
  --tg-theme-destructive-text-color: #ef5b5b;

  --tg-theme-bg-color: #18222d;
  --tg-theme-header-bg-color: #131415;
  --tg-theme-secondary-bg-color: #131415;
  --tg-theme-section-bg-color: #18222d;

  --tg-theme-link-color: #62bcf9;
  --tg-theme-button-color: #2ea6ff;
  --tg-theme-hint-color: #b1c3d5;
  --tg-theme-section-separator-color: #545458; 
`;

const lightTheme = `
  --tg-theme-text-color: #000000;
  --tg-theme-button-text-color: #ffffff;
  --tg-theme-subtitle-text-color: #999999;
  --tg-theme-section-header-text-color: #6d6d71;
  --tg-theme-accent-text-color: #2481cc;  
  --tg-theme-destructive-text-color: #ff3b30;

  --tg-theme-bg-color: #ffffff;
  --tg-theme-header-bg-color: #efeff3;
  --tg-theme-secondary-bg-color: #efeff3;
  --tg-theme-section-bg-color: #ffffff;
  
  --tg-theme-button-color: #2481cc;
  --tg-theme-link-color: #2481cc;
  --tg-theme-hint-color: #999999;
  --tg-theme-section-separator-color: #c8c7cc;
`;

export const StyleDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme || "light";

  useEffect(() => {
    const html = document.querySelector("html");
    html?.setAttribute("style", theme === "dark" ? darkTheme : lightTheme);
  }, [theme]);

  useEffect(() => {
    const docsStories = document.querySelectorAll(".docs-story");

    docsStories.forEach((item) => {
      item.setAttribute(
        "style",
        `
          background: var(--tg-theme-secondary-bg-color, white);
          color: var(--tg-theme-text-color, black);
        `,
      );
    });
  }, []);

  return <Story />;
};

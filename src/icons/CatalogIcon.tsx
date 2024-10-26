import { Icon } from "./types";

export const CatalogIcon = ({ size = 24, ...props }: Icon) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" {...props}>
    <path
      fill="currentColor"
      d="M95.3 2.4C89 5.4 84.6 11.1 83 18.3c-.8 3.8-1 60.2-.8 201.7.3 217.9-.3 199.8 6.9 206.9 5.3 5.4 8.9 6.4 23.6 6.9l13.2.4.3 30.7c.3 29.4.4 30.8 2.5 34.8 2.7 5.1 8.2 9.6 13.2 11.2 2.8.8 40 1.1 136.7 1.1h132.9l5.1-2.4C427 504.8 430 497.4 430 477c0-15.2-.9-19.2-4.6-20.9-3.5-1.6-4.7-1.4-7.8 1l-2.6 2v15.5c0 16.1-.9 20.4-4.5 21.8-.9.3-60.8.6-133.1.6H145.9l-2.4-2.5-2.5-2.4V295.5 98.8l2.9-2.9 3-2.9 131.5.2 131.5.3 2.3 2.3 2.3 2.3.5 167 2.4 168.5c2.8 2 6.9 1.7 9.7-.5l2.4-1.9V263.3l-1.9-171.6c-2.4-4.9-7.1-9.6-11.6-11.5-2.3-1-7.9-1.7-16.7-2l-13.2-.4-.3-30.7c-.3-29.4-.4-30.8-2.5-34.8-2.7-5.1-8.2-9.6-13.2-11.2C367.3.3 340.2 0 273.8 0c-92.1 0-92.5 0-95.2 2.1-3.3 2.6-3.6 7.7-.5 10.5 2 1.8 5.2 1.9 83 2.4l80.9.5-101.3 32.3-104.9 34.8c-2 1.3-5 4.5-6.5 7.1l-2.8 4.8-.3 162.3-.2 162.4-12-.4c-10.9-.3-12.2-.5-14.2-2.6l-2.3-2.3-.3-195.2.3-197.5c.3-1.2 1.4-3.1 2.5-4.2 1.9-1.9 3.4-2 26.4-2 22.3 0 24.6-.2 26.7-1.9 3.2-2.6 3.2-8.6 0-11.2C151 .2 148.7 0 125.6 0c-24.4 0-25.2.1-30.3 2.4zM371 50v28l-86.7-.1c-47.8 0-86.1-.3-85.3-.7 2-.8 170.3-54.9 171.3-55.1.4-.1.7 12.5.7 27.9zm-198.4 65c-1.6.5-4 1.9-5.4 3.2-5.1 4.7-5.2 5.9-5.2 47 0 36.5.1 38.4 2.1 42.4 1.5 3.1 3.2 4.8 6.3 6.3 4.1 2 5.9 2.1 45.7 2.1 46.2 0 46 0 50.6-6.9 2.3-3.4 2.3-3.4 2.3-44 0-38.5-.1-40.8-2-43.8-4.1-6.8-3.9-6.8-50-7-22.8-.1-42.8.2-44.4.7zm81.4 50v36h-38.5H177v-35.3c0-19.5.3-35.7.7-36 .3-.4 17.7-.7 38.5-.7H254v36zm36.4-20.6c-4.8 2.1-6 7.5-2.4 11.4l2.1 2.2h49.8c48.6 0 49.8 0 51.6-2 2.5-2.8 2.3-7.6-.4-10.3-2.2-2.2-2.2-2.2-49.9-2.4-38.5-.2-48.3 0-50.8 1.1zm-2.2 29.9c-2.7 2.9-2.8 6.7-.3 9.8 1.9 2.4 2.3 2.4 21.9 2.7 19.8.3 20 .3 22.7-2.1 3.6-3.1 3.9-8.2.6-10.9-2.1-1.6-4.4-1.8-22.5-1.8-19.9 0-20.3 0-22.4 2.3zm-120.1 77.4c-6 4.8-6.1 5.3-6.1 47.6 0 37.7 0 38.3 2.3 42.7 4.1 8.1 3.3 8 51.2 8 46.8 0 46.6 0 51.2-6.9 2.3-3.4 2.3-3.5 2.3-43.8 0-44.6 0-44.5-6.3-48.3-3-1.9-5.3-2-47.2-2h-44l-3.4 2.7zm85.9 47.8V335h-38.5H177v-35.5V264h38.5H254v35.5zm34-19.3c-4.2 4.5-1.5 11.1 5.2 12.3 1.8.3 24.1.5 49.5.3 46.1-.3 46.3-.3 48.4-2.5 2.7-2.7 2.9-7.5.4-10.3-1.8-2-3-2-51.6-2h-49.8l-2.1 2.2zm.5 28.3c-1.4 1.3-2.5 3.6-2.5 5s1.1 3.7 2.5 5c2.4 2.5 2.6 2.5 21.4 2.5 20.8 0 23.4-.5 25-5.2 1.2-3.4-.6-8.1-3.4-9.2-.9-.3-10.4-.6-21.1-.6-19.4 0-19.5 0-21.9 2.5zm-119.6 68.8c-6.9 4.6-6.9 4.8-6.9 47.7 0 38 0 38.6 2.3 43 4.1 8.1 3.3 8 51.2 8 46.8 0 46.6 0 51.2-6.9 2.3-3.4 2.3-3.5 2.3-43.8 0-44.6 0-44.5-6.3-48.3-3-1.9-5.3-2-46.8-2h-43.6l-3.4 2.3zm85.1 48.2V461h-38.5H177v-35.5V390h38.5H254v35.5zm34-19.3c-3.9 4.2-1.6 10.9 4.2 12.3 1.3.3 23.6.4 49.5.3 47.1-.3 47.3-.3 49.4-2.5 2.7-2.7 2.9-7.5.4-10.3-1.8-2-3-2-51.6-2h-49.8l-2.1 2.2zm.5 28.3c-1.4 1.3-2.5 3.6-2.5 5s1.1 3.7 2.5 5c2.4 2.5 2.5 2.5 22.2 2.5 21.3-.1 22.3-.3 24.3-5.4 1.1-3.1-.7-7.9-3.5-9-.9-.3-10.4-.6-21.1-.6-19.4 0-19.5 0-21.9 2.5z"
    />
  </svg>
);

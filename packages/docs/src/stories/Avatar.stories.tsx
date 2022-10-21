import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@lopes-ui/react";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/marcell0lopes.png",
    alt: "Marcello Lopes",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};

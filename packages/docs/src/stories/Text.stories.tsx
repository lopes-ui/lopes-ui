import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@lopes-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, labore ullam voluptate, voluptatibus et facilis!",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "<strong> text",
    as: "strong",
    size: "lg",
  },
};

import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@lopes-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Custom title",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão o elemento de Heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.",
      },
    },
  },
};

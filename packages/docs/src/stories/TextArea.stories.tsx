import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@lopes-ui/react";

export default {
  title: "Form/TextArea",
  component: TextArea,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text>Say something:</Text>
          {Story()}
        </Box>
      );
    },
  ],
  argTypes: {
    color: {
      options: ["primary", "secondary", "accent"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Username",
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};

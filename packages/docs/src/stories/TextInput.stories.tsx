import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@lopes-ui/react";
import { PawPrint } from "phosphor-react";

export default {
  title: "Form/TextInput",
  component: TextInput,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text>Input label:</Text>
          {Story()}
        </Box>
      );
    },
  ],
  args: {},
  argTypes: {
    color: {
      options: ["primary", "secondary", "accent"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Username",
  },
};
export const Secondary: StoryObj<TextInputProps> = {
  args: { color: "primary", placeholder: "e-mail" },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "lopes.com/",
  },
};

export const WithIcon: StoryObj<TextInputProps> = {
  args: {
    icon: <PawPrint size={21} />,
    placeholder: "What is the name of your cat?",
  },
};

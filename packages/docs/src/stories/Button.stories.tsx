import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps, Text } from "@lopes-ui/react";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
  },
  argTypes: {
    color: {
      options: ["primary", "secondary", "accent"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <Text>Next step</Text>
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    children: "Cancel",
  },
};

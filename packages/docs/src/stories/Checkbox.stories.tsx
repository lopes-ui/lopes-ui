import type { StoryObj, Meta } from "@storybook/react";
import { Box, Checkbox, CheckboxProps, Text } from "@lopes-ui/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "row", gap: "$2" }}
        >
          {Story()}
          <Text>Yes, I do love cats.</Text>
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
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};

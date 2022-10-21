import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@lopes-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando Box</Text>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};

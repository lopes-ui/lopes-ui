import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, MultiStep, MultiStepProps } from "@lopes-ui/react";
import { PawPrint } from "phosphor-react";

export default {
  title: "Form/MultiStep",
  component: MultiStep,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          {Story()}
        </Box>
      );
    },
  ],
  args: {
    size: 6,
    currentStep: 1,
  },
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    size: 6,
    currentStep: 6,
  },
};

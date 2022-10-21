import { styled } from "@stitches/react";
import { Text } from "../Text";

export const MultiStepContainer = styled("div", {});

export const MultiStepLabel = styled(Text, {
  color: "$dark200",
  defaultVariants: {
    size: "xs",
  },
});

export const Steps = styled("div", {
  display: "grid",
  gap: "$2",
  marginTop: "$1",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
});

export const Step = styled("div", {
  height: 3,
  borderRadius: "$px",
  backgroundColor: "$dark600",

  variants: {
    active: {
      true: {
        backgroundColor: "$dark100",
      },
    },
  },
});

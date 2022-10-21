import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Box = styled("div", {
  padding: 16,
  borderRadius: "$md",
  backgroundColor: "$dark800",
  border: "1px solid $dark600",
});

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
}

Box.displayName = "Box";

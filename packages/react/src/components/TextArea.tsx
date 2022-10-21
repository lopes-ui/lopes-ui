import { ComponentProps } from "react";
import { styled } from "../styles";

export const TextArea = styled("textarea", {
  backgroundColor: "$dark900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $dark900",

  fontFamily: "$default",
  fontSize: "$sm",
  color: "$dark100",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,

  "&:placeholder": {
    color: "$dark400",
  },

  "&:disabled": {
    border: "2px solid $dark500",
    background: "$dark400",
    cursor: "not-allowed",
  },

  variants: {
    color: {
      primary: {
        "&:focus-within": {
          border: "2px solid $crimson200",
          outline: 0,
        },
      },
      secondary: {
        "&:focus-within": {
          border: "2px solid $indigo200",
          outline: 0,
        },
      },
      accent: {
        "&:focus-within": {
          border: "2px solid $teal200",
          outline: 0,
        },
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = "TextArea";

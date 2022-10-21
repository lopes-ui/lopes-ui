import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$bold",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "0 $4",
  filter: "brightness(1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",

  cursor: "pointer",
  transition: "all 0.3s ease-in-out",

  svg: {
    width: "$4",
    height: "$4",
  },

  "&:disabled": {
    backgroundColor: "$dark300",
    color: "$dark100",
    cursor: "not-allowed",
  },

  "&:not(:disabled):hover": {
    filter: "brightness(1.1)",
    transition: "all 0.3s ease-in-out",
  },

  variants: {
    color: {
      primary: {
        color: "$crimson600",
        background: "$crimson200",
      },
      secondary: {
        color: "$indigo600",
        background: "$indigo200",
      },
      accent: {
        color: "$teal600",
        background: "$teal200",
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

Button.displayName = "Button";

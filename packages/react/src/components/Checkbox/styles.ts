import * as Checkbox from "@radix-ui/react-checkbox";
import { keyframes, styled } from "../../styles";

export const CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "%6",
  backgroundColor: "$dark500",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid $dark500",

  variants: {
    color: {
      primary: {
        '&[data-state="checked"]': {
          backgroundColor: "$crimson200",
        },

        "&:focus": {
          border: "2px solid $crimson200",
        },
      },
      secondary: {
        '&[data-state="checked"]': {
          backgroundColor: "$indigo200",
        },
        "&:focus": {
          border: "2px solid $indigo200",
        },
      },
      accent: {
        '&[data-state="checked"]': {
          backgroundColor: "$teal200",
        },
        "&:focus": {
          border: "2px solid $teal200",
        },
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

const slideIn = keyframes({
  from: {
    transform: "translateY(-100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

const slideOut = keyframes({
  from: {
    transform: "translateY(0)",
  },
  to: {
    transform: "translateY(-100%)",
  },
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  width: "$4",
  height: "$4",
  transition: "all 200ms ease",
  transform: "translateY(0)",

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },

  variants: {
    color: {
      primary: { color: "$crimson100" },
      secondary: { color: "$indigo100" },
      accent: { color: "$teal100" },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

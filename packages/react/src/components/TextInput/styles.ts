import { styled } from "../../styles";

export const TextInputContainer = styled("div", {
  backgroundColor: "$dark900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $dark900",
  display: "flex",

  variants: {
    color: {
      primary: {
        "&:focus-within": {
          border: "2px solid $crimson200",
        },
      },
      secondary: {
        "&:focus-within": {
          border: "2px solid $indigo200",
        },
      },
      accent: {
        "&:focus-within": {
          border: "2px solid $teal200",
        },
      },
    },
    variant: {
      default: { alignItems: "baseline" },
      icon: { alignItems: "center" },
    },
  },

  defaultVariants: {
    color: "primary",
    variant: "default",
  },

  "&.disabled": {
    border: "2px solid $dark500",
    background: "$dark400",
    cursor: "not-allowed",
  },
});

export const Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$dark200",
  fontWeight: "regular",
});

export const Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$dark100",
  fontWeight: "regular",
  width: "100%",
  background: "transparent",
  border: 0,

  "&:focus": {
    outline: 0,
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&:placeholder": {
    color: "$dark300",
  },
});

export const Icon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$dark100",
  marginRight: "$2",

  svg: {
    color: "$crimson200",
  },

  variants: {
    color: {
      primary: {
        svg: {
          color: "$crimson200",
        },
      },
      secondary: {
        svg: {
          color: "$indigo200",
        },
      },
      accent: {
        svg: {
          color: "$teal200",
        },
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

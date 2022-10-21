import * as Avatar from "@radix-ui/react-avatar";
import { styled } from "@stitches/react";

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  minWidth: "$12",
  minHeight: "$12",
  overflow: "hidden",
});

export const AvatarImage = styled(Avatar.Image, {
  width: "100%",
  cover: "100%",
  borderRadius: "inherit",
  objectFit: "cover",
});

export const AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$dark600",
  color: "$dark800",

  svg: {
    width: "$6",
    height: "$6",
  },
});

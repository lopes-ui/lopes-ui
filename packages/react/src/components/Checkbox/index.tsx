import { Check } from "phosphor-react";
import { ComponentProps } from "react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer
      color={!!props.color ? props.color : "primary"}
      {...props}
    >
      <CheckboxIndicator
        color={!!props.color ? props.color : "primary"}
        asChild
      >
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
}

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {
  color?: "primary" | "secondary" | "accent";
}

Checkbox.displayName = "Checkbox";

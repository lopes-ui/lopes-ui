import { ComponentProps, ReactNode } from "react";
import { TextInputContainer, Prefix, Input, Icon } from "./styles";

export function TextInput({
  prefix,
  icon,
  color = "primary",
  ...props
}: TextInputProps) {
  const isDisabled = props.disabled;

  return (
    <TextInputContainer
      color={color}
      variant={!!icon ? "icon" : "default"}
      className={isDisabled ? "disabled" : ""}
    >
      {!!prefix && <Prefix>{prefix}</Prefix>}
      {!!icon && <Icon color={color}>{icon}</Icon>}
      <Input {...props} />
    </TextInputContainer>
  );
}

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
  icon?: ReactNode;
  color?: "primary" | "secondary" | "accent";
}

TextInput.displayName = "TextInput";

import { FC, ReactNode } from "react";
import { Container, Label, RequiredIcon } from "./index.styles";

type Props = {
  label: string;
  htmlFor: string;
  required: boolean;
  children: ReactNode;
}

const FormControl: FC<Props> = ({
  label,
  htmlFor,
  required,
  children,
}) => {
  return (
    <Container>
      <Label htmlFor={htmlFor}>
        {label}
        {required && <RequiredIcon>*</RequiredIcon>}
      </Label>
      {children}
    </Container>
  );
}

export default FormControl;
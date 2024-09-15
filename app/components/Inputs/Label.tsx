import React, { PropsWithChildren } from "react";
import Text from "../Generics/Text";

interface Props {
  label: string;
  labelFor?: string;
}
const Label = ({
  label,
  labelFor,
  children,
}: Readonly<PropsWithChildren<Props>>) => {
  return (
    <div>
      <label htmlFor={labelFor}>
        <Text>{label}</Text>
      </label>
      {children}
    </div>
  );
};

export default Label;

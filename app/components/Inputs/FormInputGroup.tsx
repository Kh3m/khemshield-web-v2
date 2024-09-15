import { PropsWithChildren } from "react";
import Button from "../Buttons/Button";
import Heading from "../Generics/Heading";
import BaseSpacing from "../Spacing/BaseSpacing";

interface Props {
  heading: string;
  withClear?: boolean;
}
const FormInputGroup = ({
  heading,
  withClear,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <section>
      <header className="flex justify-between items-center">
        <Heading variant="h4">
          <span className="font-semibold">{heading}</span>
        </Heading>
        {withClear && <Button variant="primary">Clear</Button>}
      </header>
      <BaseSpacing />
      <section>{children}</section>
    </section>
  );
};

export default FormInputGroup;

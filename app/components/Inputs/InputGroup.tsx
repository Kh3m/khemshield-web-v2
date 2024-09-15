import { PropsWithChildren } from "react";
interface Props {
  label: string;
}
const InputGroup = ({ children, label }: PropsWithChildren<Props>) => {
  return (
    <div>
      <label htmlFor={label} className="my-4">
        {label}{" "}
      </label>
      {children}
    </div>
  );
};

export default InputGroup;

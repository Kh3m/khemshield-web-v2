import { PropsWithChildren } from "react";

const Highlight = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <div
      className="p-2 rounded-md bg-primary-light 
    text-primary-normal w-max"
    >
      <p>{children}</p>
    </div>
  );
};

export default Highlight;

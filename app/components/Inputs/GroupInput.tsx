import { PropsWithChildren } from "react";

const GroupInput = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <div className="flex flex-col gap-4 md:items-center md:flex-row">
      {children}
    </div>
  );
};

export default GroupInput;

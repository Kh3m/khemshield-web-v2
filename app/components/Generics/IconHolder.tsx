import { PropsWithChildren } from "react";

const IconHolder = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <div
      className="w-9 h-9 rounded-full bg-primary-normal text-white
              hover:bg-primary-dark flex items-center justify-center 
              duration-200"
    >
      {children}
    </div>
  );
};

export default IconHolder;

import React, { PropsWithChildren } from "react";

interface Props {
  styles?: string;
}
const Wrapper = ({ children, styles }: Readonly<PropsWithChildren<Props>>) => {
  return (
    <section
      className={`${styles} px-6 
    lg:px-24`}
    >
      {children}
    </section>
  );
};

export default Wrapper;

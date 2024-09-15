import { PropsWithChildren } from "react";

interface Props {
  variant: "h1" | "h2" | "h3" | "h4";
  bold?: boolean;
}
const Heading = ({
  variant,
  children,
  bold = true,
}: Readonly<PropsWithChildren<Props>>) => {
  const baseStyle = `text-secondary-normal ${bold && "font-semibold"}`;

  switch (variant) {
    case "h1":
      return (
        <h1
          className={`${baseStyle} text-[2rem]/[2.5rem] md:text-[3.5rem]/[4.35rem]`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`${baseStyle} text-[1.5rem]/[2.25rem] md:text-[2.5rem]/[3rem]`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`${baseStyle} text-[1.25rem]/[2rem] md:text-[1.5rem]/[2.25rem]`}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={`${baseStyle} text-[1.25rem]/[2rem]`}>{children}</h4>
      );
  }
  return <h1></h1>;
};

export default Heading;

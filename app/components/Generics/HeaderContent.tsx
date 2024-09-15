import { PropsWithChildren } from "react";
import BaseSpacing from "../Spacing/BaseSpacing";
import Heading from "./Heading";
import Text from "./Text";

interface Props {
  heading: string;
  center?: boolean;
  isPlainText?: boolean;
}

const HeaderContent = ({
  heading,
  center,
  children,
  isPlainText = true,
}: Readonly<PropsWithChildren<Props>>) => {
  return (
    <header className={`${center && "text-center"} max-w-[800px] m-auto`}>
      <Heading variant="h3">{heading}</Heading>
      <BaseSpacing />
      {isPlainText ? <Text>{children}</Text> : <>{children}</>}
    </header>
  );
};

export default HeaderContent;

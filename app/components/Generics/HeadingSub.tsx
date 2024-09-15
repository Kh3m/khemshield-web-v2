import React, { PropsWithChildren } from "react";
import Text from "./Text";
import Heading from "./Heading";
import BaseSpacing from "../Spacing/BaseSpacing";

interface Props {
  subheading: string;
}
const HeadingSub = ({
  subheading,
  children,
}: Readonly<PropsWithChildren<Props>>) => {
  return (
    <header className=" text-center">
      <Text color="primary" styles=" font-semibold">
        {subheading}
      </Text>
      <BaseSpacing />
      <Heading variant={"h2"}>{children}</Heading>
    </header>
  );
};

export default HeadingSub;

import { PropsWithChildren } from "react";
import Heading from "../Generics/Heading";
import Text from "../Generics/Text";
import BaseSpacing from "../Spacing/BaseSpacing";

interface Props {
  heading: string;
  number: number;
}
const CircledListItem = ({
  number,
  heading,
  children,
}: Readonly<PropsWithChildren<Props>>) => {
  return (
    <li className="flex gap-4 my-2">
      <div
        className="h-9 min-h-9 min-w-9 w-9 rounded-full bg-primary-light flex 
        items-center justify-center text-primary-normal font-semibold"
      >
        {number}
      </div>
      <div>
        <Heading variant="h4">{heading}</Heading>
        <BaseSpacing />
        <Text>{children}</Text>
      </div>
    </li>
  );
};

export default CircledListItem;

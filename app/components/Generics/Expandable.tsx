"use client";

import { ArrowDown2 } from "iconsax-react";
import { PropsWithChildren, useState } from "react";
import Text from "./Text";

interface Props {
  heading: string;
}
const Expandable = ({
  heading,
  children,
}: Readonly<PropsWithChildren<Props>>) => {
  const [expand, setExpand] = useState(false);

  return (
    <section>
      <header
        onClick={() => setExpand((prevExp) => !prevExp)}
        className="flex items-center justify-between py-6 px-4
       border rounded-lg cursor-pointer"
      >
        <Text>{heading}</Text>
        <ArrowDown2
          variant="Bold"
          className={`${expand ? "-rotate-180" : "rotate-0"} duration-200`}
        />
      </header>

      <div
        className={`${
          expand ? "max-h-[200px]" : "max-h-0"
        } overflow-hidden duration-200`}
      >
        <div className=" py-6 px-4 bg-support border rounded-b-lg my-2">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Expandable;

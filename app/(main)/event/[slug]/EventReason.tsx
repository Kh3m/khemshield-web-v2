import React from "react";
import Image, { StaticImageData } from "next/image";
import Text from "@/app/components/Generics/Text";

interface Props {
  reason: string;
  icon: StaticImageData;
  number: number;
}
const EventReason = ({ reason, icon, number }: Readonly<Props>) => {
  return (
    <div className=" flex flex-col items-center justify-center gap-4">
      <div
        className=" w-44 h-44 flex items-center justify-center 
            bg-primary-normal/5 rounded-full relative"
      >
        <Image src={icon} alt={reason} className=" w-20 h-20 object-contain" />
        <div
          className=" h-12 w-12 rounded-full bg-primary-normal absolute
               flex items-center justify-center text-white font-semibold
               top-8 -right-4 border-4 border-white"
        >
          {number}
        </div>
      </div>
      <Text color="secondary" styles="font-semibold text-lg">
        {reason}
      </Text>
    </div>
  );
};

export default EventReason;

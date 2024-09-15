import Image, { StaticImageData } from "next/image";
import React from "react";
import Heading from "../Generics/Heading";
import Text from "../Generics/Text";
import BaseSpacing from "../Spacing/BaseSpacing";

interface Props {
  image: StaticImageData;
  heading: string;
  description: string;
}
const Service = ({ image, heading, description }: Readonly<Props>) => {
  return (
    <section className="h-[350px] lg:max-w-[350px] xl:max-w-[450px] gap-5 shadow-khemshadow">
      <Image
        src={image}
        alt={heading}
        className=" rounded-t-lg h-[165px] w-full object-cover"
      />
      <BaseSpacing />
      <div className=" p-3">
        <Heading variant="h4">{heading}</Heading>
        <BaseSpacing />
        <Text>{description}</Text>
      </div>
    </section>
  );
};

export default Service;

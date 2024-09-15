import Heading from "@/app/components/Generics/Heading";
import Text from "@/app/components/Generics/Text";
import Image from "next/image";
import React from "react";

import cybersecurity_1 from "@/public/assets/images/cybersecurity_1.jpeg";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";

const OurMission = () => {
  return (
    <article
      className=" flex flex-col gap-6
    lg:flex-row"
    >
      <section>
        <Heading variant="h3">Our Mission</Heading>
        <BaseSpacing />
        <Text>
          Our mission is twofold: to protect businesses from the ever-evolving
          landscape of cyber threats and to equip aspiring IT professionals with
          the skills they need to succeed. We believe that security and
          knowledge go hand-in-hand, and we are committed to delivering
          high-quality services and training that make a real impact.
        </Text>
      </section>
      <section>
        <Image
          src={cybersecurity_1}
          alt="Cybersecutiy"
          className="  h-[275px] object-cover rounded-lg
          lg:max-w-[610px]"
        />
      </section>
    </article>
  );
};

export default OurMission;

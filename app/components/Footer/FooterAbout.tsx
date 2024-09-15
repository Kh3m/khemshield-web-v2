import React from "react";
import Text from "../Generics/Text";
import Logo from "../Generics/Logo";
import BaseSpacing from "../Spacing/BaseSpacing";
import Socials, { SocialType } from "./Socials";

import linkedin from "@/public/assets/images/linkedin.png";
import facebook from "@/public/assets/images/facebook.png";
import twitter from "@/public/assets/images/twitter.png";

const socials: SocialType[] = [
  { src: linkedin, alt: "linkedin", href: "" },
  { src: facebook, alt: "facebook", href: "" },
  { src: twitter, alt: "twitter", href: "" },
];

const FooterAbout = () => {
  return (
    <section
      className=" min-w-[250px] 
    lg:max-w-[250px]
    xl:max-w-[300px]"
    >
      <Logo withText />
      <BaseSpacing />
      <Text>
        we specialize in secure web and mobile application development,
        comprehensive cybersecurity solutions, and professional training
        programs. Our mission is to protect your business and empower future IT
        professionals with the skills they need.
      </Text>
      <BaseSpacing />
      <Socials socials={socials} />
    </section>
  );
};

export default FooterAbout;

import React from "react";
import Wrapper from "../Generics/Wrapper";
import FooterAbout from "./FooterAbout";
import FooterCompany from "./FooterCompany";
import FooterServices from "./FooterServices";
import FooterLegal from "./FooterLegal";

const Footer = () => {
  return (
    <Wrapper
      styles="hidden justify-between border-t py-[80px] 
    lg:flex"
    >
      <FooterAbout />
      <FooterCompany />
      <FooterServices />
      <FooterLegal />
    </Wrapper>
  );
};

export default Footer;

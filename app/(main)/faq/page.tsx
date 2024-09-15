import Breadcrumb from "@/app/components/Generics/Breadcrumb";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import React from "react";
import FAQs from "./FAQs";
import Wrapper from "@/app/components/Generics/Wrapper";
import Link from "next/link";

const FAQPage = () => {
  return (
    <section>
      <Breadcrumb crumbs={[{ href: "", text: "FAQs" }]} />
      <ContentSpacing />
      <Wrapper>
        <FAQs />
        <ContentSpacing />
        <p className=" text-center">
          Do you have any other questions, comments, or complaints?{" "}
          <Link href="/contact" className=" text-primary-normal font-semibold">
            Contact Us
          </Link>
        </p>
      </Wrapper>
    </section>
  );
};

export default FAQPage;

import Breadcrumb from "@/app/components/Generics/Breadcrumb";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import EventRegisterForm from "./EventRegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Register for Empowerment Series 2024: Advance Your Cybersecurity and Software Engineering Skills",
  description: `Join the Empowerment Series 2024, a two-week training event by Khemshield and Jidem Foundation. Gain practical skills in cybersecurity and software engineering to excel in remote work environments. Secure your spot today!`,
  openGraph: {
    title:
      "Register for Empowerment Series 2024: Advance Your Cybersecurity and Software Engineering Skills",
    description: `Join the Empowerment Series 2024, a two-week training event by Khemshield and Jidem Foundation. Gain practical skills in cybersecurity and software engineering to excel in remote work environments. Secure your spot today!`,
    type: "website",
  },
  twitter: {
    title:
      "Register for Empowerment Series 2024: Advance Your Cybersecurity and Software Engineering Skills",
    description: `Join the Empowerment Series 2024, a two-week training event by Khemshield and Jidem Foundation. Gain practical skills in cybersecurity and software engineering to excel in remote work environments. Secure your spot today!`,
  },
};

const page = () => {
  return (
    <section>
      <Breadcrumb
        crumbs={[
          {
            text: "Event",
            href: "/event",
          },
          {
            text: "Web Development and Cybersecurity",
            href: "/event/1",
          },
          {
            text: "Register",
            href: "",
          },
        ]}
        heading=""
      />
      <SectionSpacing />
      <section className=" max-w-[620px] m-auto px-4">
        <EventRegisterForm />
      </section>
    </section>
  );
};

export default page;

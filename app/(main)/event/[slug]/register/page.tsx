import Breadcrumb from "@/app/components/Generics/Breadcrumb";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import EventRegisterForm from "./EventRegisterForm";

const page = () => {
  return (
    <section>
      <Breadcrumb
        crumbs={[
          {
            text: "Event Registeration",
            href: "",
          },
        ]}
        heading="Web Development and Cybersecurity"
      />
      <SectionSpacing />
      <section className=" max-w-[620px] m-auto px-4">
        <EventRegisterForm />
      </section>
    </section>
  );
};

export default page;

import Button from "@/app/components/Buttons/Button";
import Breadcrumb from "@/app/components/Generics/Breadcrumb";
import FormInput from "@/app/components/Inputs/FormInput";
import FormInputGroup from "@/app/components/Inputs/FormInputGroup";
import GroupInput from "@/app/components/Inputs/GroupInput";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";

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
        <form action="">
          <FormInputGroup heading={"Contact Information"}>
            <GroupInput>
              <FormInput variant="email" />
              <FormInput variant="phone" />
            </GroupInput>
            <BaseSpacing />
            <GroupInput>
              <FormInput variant="name" placeholder="Enter your first name" />
              <FormInput variant="name" placeholder="Enter your last name" />
            </GroupInput>
            <BaseSpacing />
            <FormInput variant="address" />
            <BaseSpacing />
            <GroupInput>
              <FormInput variant="address_select" placeholder="State" />
              <FormInput variant="address_select" placeholder="City" />
            </GroupInput>
          </FormInputGroup>
          <ContentSpacing />
          <Button variant="primary" full>
            Register
          </Button>
        </form>
      </section>
    </section>
  );
};

export default page;

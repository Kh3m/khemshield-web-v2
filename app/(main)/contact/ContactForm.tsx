import Button from "@/app/components/Buttons/Button";
import FormInput from "@/app/components/Inputs/FormInput";
import Label from "@/app/components/Inputs/Label";
import SelectInput from "@/app/components/Inputs/SelectInput";
import TextArea from "@/app/components/Inputs/TextArea";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import ContactFormHeader from "./ContactFormHeader";

const ContactForm = () => {
  return (
    <section
      className="m-auto max-w-[95%] px-8 py-16 shadow-khemshadow
    lg:max-w-[830px] lg:px-32"
    >
      <ContactFormHeader />
      <ContentSpacing />
      <form>
        <Label label="Full Name" labelFor="name">
          <FormInput
            variant="name"
            placeholder="Enter your full name"
            id="name"
          />
        </Label>
        <BaseSpacing />
        <Label label="Email Address" labelFor="email">
          <FormInput variant="email" id="email" />
        </Label>
        <BaseSpacing />
        <Label label="Phone Number" labelFor="phone">
          <FormInput variant="phone" id="phone" />
        </Label>
        <BaseSpacing />
        <Label label="What Can we help you with" labelFor="helpwith">
          <SelectInput
            name="helpwith"
            id="helpwith"
            options={[
              {
                label: "Personalized Training",
                value: "Personalized Training",
              },
              {
                label: "Others",
                value: "Others",
              },
            ]}
          />
        </Label>
        <BaseSpacing />
        <Label label="Send Us a Message" labelFor="description">
          <TextArea placeholder="Write Your Message" />
        </Label>
        <ContentSpacing />
        <Button variant="primary" full>
          Send
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;

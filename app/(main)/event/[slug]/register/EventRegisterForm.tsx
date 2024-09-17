import { eventRegisterAction } from "@/app/actions/events";
import Button from "@/app/components/Buttons/Button";
import FormInput from "@/app/components/Inputs/FormInput";
import FormInputGroup from "@/app/components/Inputs/FormInputGroup";
import GroupInput from "@/app/components/Inputs/GroupInput";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";

const EventRegisterForm = () => {
  return (
    <form action={eventRegisterAction}>
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
  );
};

export default EventRegisterForm;

"use client";

import { eventRegisterAction } from "@/app/actions/events";
import FormInput from "@/app/components/Inputs/FormInput";
import FormInputGroup from "@/app/components/Inputs/FormInputGroup";
import GroupInput from "@/app/components/Inputs/GroupInput";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import EventRegisterSubmit from "./EventRegisterSubmit";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const EventRegisterForm = () => {
  const router = useRouter();

  const [state, eventRegisterActionForm] = useFormState(eventRegisterAction, {
    message: "",
  });
  // Local state to manually reset the message
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (state.message && state.message.toLowerCase() !== "ok") {
      toast.error(state.message, { position: "top-center" });
      // Set the error state to true to trigger the reset
      setHasError(true);
    }

    if (state.message.toLowerCase() === "ok") {
      toast.success(
        `Thank you for registering for the Virtual Training in Web Development and Cybersecurity!`,
        {
          position: "top-center",
          duration: 5000,
        }
      );
      router.replace("/event/1");
    }
  }, [state.message]);

  useEffect(() => {
    if (hasError) {
      // Reset the message after showing the error
      state.message = "";
      setHasError(false);
    }
  }, [hasError, state]);

  return (
    <form action={eventRegisterActionForm}>
      <FormInputGroup heading={"Contact Information"}>
        <GroupInput>
          <FormInput variant="email" name="email" />
          <FormInput variant="phone" name="phone" />
        </GroupInput>
        <BaseSpacing />
        <GroupInput>
          <FormInput
            variant="name"
            name="firstName"
            placeholder="Enter your first name"
          />
          <FormInput
            variant="name"
            name="lastName"
            placeholder="Enter your last name"
          />
        </GroupInput>
        <BaseSpacing />
        <FormInput variant="address" name="address" />
        <BaseSpacing />
        {/* <GroupInput>
          <FormInput
            variant="address_select"
            name="state"
            placeholder="State"
          />
          <FormInput variant="address_select" name="city" placeholder="City" />
        </GroupInput> */}
      </FormInputGroup>
      <ContentSpacing />
      <EventRegisterSubmit />
    </form>
  );
};

export default EventRegisterForm;

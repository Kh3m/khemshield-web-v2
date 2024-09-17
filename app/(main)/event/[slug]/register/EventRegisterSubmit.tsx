"use client";

import Button from "@/app/components/Buttons/Button";
import { useFormStatus } from "react-dom";

const EventRegisterSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <Button variant="primary" full disabled={pending}>
      {pending ? <span>Loading...</span> : <span>Register</span>}
    </Button>
  );
};

export default EventRegisterSubmit;

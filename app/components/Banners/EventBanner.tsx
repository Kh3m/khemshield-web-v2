import Heading from "../Generics/Heading";
import BaseSpacing from "../Spacing/BaseSpacing";
import Text from "../Generics/Text";
import Button from "../Buttons/Button";
import Image from "next/image";

import eventBanner from "@/public/assets/images/events/event_1.jpg";
import CountdownTimer from "@/app/(main)/event/CountdownTimer";
import ContentSpacing from "../Spacing/ContentSpacing";

const EventBanner = () => {
  return (
    <section
      className="flex flex-col justify-between gap-24
    lg:flex-row"
    >
      <section className="lg:w-1/2 lg:pr-6">
        <p className=" text-primary-normal font-semibold">
          Virtual Training in Web Development and Cybersecurity
        </p>
        <BaseSpacing />
        <Heading variant="h2">
          Empowering Warriors with On-Demand Skills for Stress-Free Remote Work
        </Heading>
        <Text styles="my-6">
          Led by industry experts, each session offers practical, hands-on
          experience in building secure applications and defending against cyber
          threats. This immersive training ensures that by the end, you&apos;ll
          not only be skilled but also confident in your ability to navigate the
          digital landscape.
        </Text>
        <CountdownTimer targetDate="2024-09-24T04:00:00" />
        <ContentSpacing />
        <div className="flex items-center gap-4">
          <Button
            elementType="link"
            href="/consultation"
            variant="primary"
            styles="text-xs md:text-sm lg:text-base py-4 lg:py-2"
          >
            Register for this event
          </Button>
        </div>
      </section>
      <section className="lg:w-1/2">
        <Image
          src={eventBanner}
          alt="Banner Event"
          className="rounded-xl w-full"
        />
      </section>
    </section>
  );
};

export default EventBanner;

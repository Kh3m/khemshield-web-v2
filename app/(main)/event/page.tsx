import Breadcrumb from "@/app/components/Generics/Breadcrumb";
import HeaderContent from "@/app/components/Generics/HeaderContent";
import Heading from "@/app/components/Generics/Heading";
import Text from "@/app/components/Generics/Text";
import Wrapper from "@/app/components/Generics/Wrapper";
import SearchInput from "@/app/components/Inputs/SearchInput";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Image from "next/image";

import BaseSpacing from "@/app/components/Spacing/BaseSpacing";

import event_1 from "@/public/assets/images/events/event_1.jpg";
import speaker_1 from "@/public/assets/images/events/felix.jpg";
import speaker_2 from "@/public/assets/images/events/jonathan.jpeg";
import speaker_3 from "@/public/assets/images/events/saud.jpeg";
import speaker_4 from "@/public/assets/images/events/speaker_dummy.png";
import speaker_5 from "@/public/assets/images/events/abdulkareem.jpeg";

import StackedImages from "./StackedImages";
import Dot from "./Dot";
import { Clock, Timer } from "iconsax-react";
import CountdownTimer from "./CountdownTimer";
import Button from "@/app/components/Buttons/Button";

const speakersImages = [
  {
    src: speaker_1,
    alt: "Speaker",
  },
  {
    src: speaker_2,
    alt: "Speaker",
  },
  {
    src: speaker_3,
    alt: "Speaker",
  },
  {
    src: speaker_4,
    alt: "Speaker",
  },
  {
    src: speaker_5,
    alt: "Speaker",
  },
  {
    src: speaker_2,
    alt: "Speaker",
  },
];

const EventPage = () => {
  return (
    <section>
      <Breadcrumb crumbs={[{ href: "", text: "Events and Webinars" }]} />
      <ContentSpacing />
      <Wrapper>
        <HeaderContent heading="Events and Lectures" center isPlainText={false}>
          <p>
            Stay updated with Khemshield’s latest webinars, workshops, and
            lectures. Our events are designed to provide practical insights into
            cybersecurity, software engineering, and more.
          </p>
          <ContentSpacing />
          <SearchInput placeholder="Search For Events" />
        </HeaderContent>
        <ContentSpacing />
        <section
          className="flex flex-col gap-12
        lg:flex-row"
        >
          <section className="min-w-[50%] relative ">
            <div
              className=" bg-white rounded-xl absolute 
              top-6 left-6 h-20 w-20 flex items-center justify-center 
              flex-col"
            >
              <span className=" leading-6 text-xl font-semibold">24</span>
              <span className=" leading-6 text-xl font-semibold">Sept</span>
            </div>
            <Image
              src={event_1}
              alt="2-Week Webinar"
              className="w-full max-h-[500px] object-cover rounded-2xl"
            />
          </section>

          <section className="min-w-[50%]">
            <Heading variant={"h3"}>
              Empowering Warriors with On-Demand Skills for Stress-Free Remote
              Work
            </Heading>
            <BaseSpacing />
            <Text
              color="primary"
              styles="text-sm uppercase font-semibold
              lg:text-base"
            >
              Virtual Training in Web Development and Cybersecurity
            </Text>
            <BaseSpacing />
            <section className=" flex items-center gap-3">
              <Text>Free</Text>
              <Dot />
              <StackedImages images={speakersImages} />
              <Text color="primary">Facilitators</Text>
            </section>
            <BaseSpacing />
            <section className="flex gap-2 items-center">
              <Clock className=" text-secondary-normal w-5" />
              <div>Sept 24th - Oct 5th</div> (Flexible Time)
            </section>
            <BaseSpacing />
            <Text>
              Step into the future with our two-week virtual training program,
              designed to turn aspiring tech warriors into skilled
              professionals. With a focus on high-demand web development and
              cybersecurity skills, this program empowers you to thrive in
              remote work environments while reducing the stress of uncertain
              times
            </Text>
            <BaseSpacing />
            <CountdownTimer targetDate="2024-09-24T04:00:00" />
            <ContentSpacing />
            <Button variant="primary" elementType="link" href="/event/1">
              Learn More
            </Button>
          </section>
        </section>
      </Wrapper>
    </section>
  );
};

export default EventPage;

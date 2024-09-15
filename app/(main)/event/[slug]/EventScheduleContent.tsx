import Heading from "@/app/components/Generics/Heading";
import Text from "@/app/components/Generics/Text";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import { Clock, Coffee, Location } from "iconsax-react";
import Image, { StaticImageData } from "next/image";
import { IoVideocamOutline } from "react-icons/io5";

import HR from "@/app/components/Generics/HR";
import { ReactNode } from "react";

interface Props {
  facilitator: {
    name: string;
    image: StaticImageData;
  };
  curriculum: {
    topic: string;
    subject: string;
    content: string;
  };

  time: {
    from: string;
    to: string;
  };
  location: string;
  perks: { icon: string | ReactNode; title: string }[];
}
const EventScheduleContent = ({
  facilitator: { image, name },
  time: { from, to },
  curriculum: { topic, subject, content },
  location,
  perks,
}: Readonly<Props>) => {
  return (
    <section className=" flex flex-col lg:flex-row">
      <aside className=" lg:px-8 lg:w-1/5">
        <Image
          src={image}
          alt="Abdul Kareem"
          className=" w-16 h-16 rounded-full object-cover"
        />
        <Text styles="mt-2">{name}</Text>
        <Text color="primary" styles=" text-sm">
          {topic}
        </Text>
        <BaseSpacing />
        <HR />
        <BaseSpacing />

        <ul>
          {perks.map(({ icon, title }) => (
            <li className="flex gap-2 items-center text-gray-400 text-sm my-3">
              {icon} <p>{title}</p>
            </li>
          ))}
        </ul>
      </aside>

      <article
        className=" bg-primary-light/20 p-2 self-start
        hover:bg-primary-normal duration-200 lg:w-[80%]"
      >
        <section className=" relative overflow-hidden">
          <section className=" bg-white px-10 py-12">
            <div
              className="flex items-center
          text-primary-normal gap-6"
            >
              <span className="flex items-center gap-2">
                <Clock size={18} />{" "}
                <Text color="primary">
                  {from} - {to}
                </Text>
              </span>
              <span className="flex items-center gap-2">
                <Location size={18} /> <Text color="primary">{location}</Text>
              </span>
            </div>
            <ContentSpacing />
            <Heading variant="h4">{subject}</Heading>
            <BaseSpacing />
            <Text>{content}</Text>
            <SectionSpacing />
          </section>
          <div
            className=" h-32 w-32 bg-primary-normal rounded-full p-9
           absolute -bottom-8 -right-8"
          >
            <IoVideocamOutline
              size={32}
              className=" text-white animate-bounce"
            />
          </div>
        </section>
      </article>
    </section>
  );
};

export default EventScheduleContent;

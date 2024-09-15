import Heading from "@/app/components/Generics/Heading";
import Text from "@/app/components/Generics/Text";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import { Clock, Location } from "iconsax-react";
import Image from "next/image";
import { IoVideocamOutline } from "react-icons/io5";

import HR from "@/app/components/Generics/HR";
import abdulkareem from "@/public/assets/images/events/abdulkareem.jpeg";
const EventScheduleContent = () => {
  return (
    <section className=" flex flex-col lg:flex-row">
      <aside className=" lg:px-8 lg:w-1/5">
        <Image
          src={abdulkareem}
          alt="Abdul Kareem"
          className=" w-16 h-16 rounded-full object-cover"
        />
        <Text styles="mt-2">Abdul Kareem Adamu</Text>
        <Text color="primary" styles=" text-sm">
          Web Development
        </Text>
        <BaseSpacing />
        <HR />
        <BaseSpacing />
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
                <Clock size={18} /> <Text color="primary">04PM - 06PM</Text>
              </span>
              <span className="flex items-center gap-2">
                <Location size={18} /> <Text color="primary">Zoom</Text>
              </span>
            </div>
            <ContentSpacing />
            <Heading variant="h4">
              Introduction to HTML, CSS, and JavaScript
            </Heading>
            <BaseSpacing />
            <Text>
              In this session, we will introduce the core technologies of web
              development: HTML, CSS, and JavaScript. HTML provides the basic
              structure of web pages, using tags to organize content. CSS
              enhances this structure with styles for colors, fonts, and
              layouts, including responsive design techniques. JavaScript adds
              interactivity by allowing you to manipulate content and handle
              events dynamically. This overview will equip you with the
              essential skills to create and style functional web pages.
            </Text>
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

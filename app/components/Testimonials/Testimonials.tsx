"use client";

import { testimonialsData } from "@/app/data/testimonials";
import { useRef, useState } from "react";
import Wrapper from "../Generics/Wrapper";
import ContentSpacing from "../Spacing/ContentSpacing";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonScroll = () => {
    const testimonialsElement = testimonialsRef.current;
    if (testimonialsElement) {
      // Get the entire width of the scroll container
      const testimonialsScrollWidth = testimonialsElement.scrollWidth;
      // Get the size of each item inside the testimonials section
      const testimonialsItemSize =
        testimonialsScrollWidth / testimonialsData.length;
      // Get the scroll horizontal scroll value
      const testimonialsItemSizeScrollLeft = testimonialsElement.scrollLeft;
      //  Get the active index
      const activeIndex = Math.round(
        testimonialsItemSizeScrollLeft / testimonialsItemSize
      );
      // Set the state
      setActiveIndex(activeIndex);
    }
  };

  return (
    <Wrapper>
      <section
        onScroll={handleButtonScroll}
        ref={testimonialsRef}
        className=" flex overflow-x-auto has-hidden-scrollbar
        scroll-snap-type-inline-mandatory overscroll-behavior-inline-contain"
      >
        {testimonialsData.map((testimonial) => (
          <Testimonial key={testimonial.user.name} testimonial={testimonial} />
        ))}
      </section>
      <ContentSpacing />
      <div className=" w-max m-auto flex gap-2">
        {testimonialsData.map((_, i) => (
          <div
            key={i}
            className={`${
              activeIndex === i
                ? "bg-primary-normal w-8 h-3"
                : "bg-primary-light  w-3 h-3"
            }  rounded-lg duration-200`}
          ></div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Testimonials;

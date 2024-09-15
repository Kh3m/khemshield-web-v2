"use client";

import { testimonials } from "@/app/data/testimonials";
import Wrapper from "../Generics/Wrapper";
import ContentSpacing from "../Spacing/ContentSpacing";
import Testimonial from "./Testimonial";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonScroll = () => {
    const testimonialsElement = testimonialsRef.current;

    if (testimonialsElement) {
      const testimonialsScrollWidth = testimonialsElement.scrollWidth;
      // Size of each item inside the testimonials section
      const testimonialsItemSizeScrollLeft = testimonialsElement.scrollLeft;

      const testimonialsItemSize =
        testimonialsScrollWidth / testimonials.length;

      const activeIndex = Math.round(
        testimonialsItemSizeScrollLeft / testimonialsItemSize
      );

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
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.user.name} testimonial={testimonial} />
        ))}
      </section>
      <ContentSpacing />
      <div className=" w-max m-auto flex gap-2">
        {testimonials.map((_, i) => (
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

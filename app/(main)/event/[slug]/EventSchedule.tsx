"use client";

import HeadingSub from "@/app/components/Generics/HeadingSub";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import EventScheduleContent from "./EventScheduleContent";
import ScheduleButton from "./ScheduleButton";
import { useState, useRef, useEffect } from "react";

const days = [
  { day: "First Day", date: "24th September 2024" },
  { day: "Second Day", date: "26th September 2024" },
  { day: "Third Day", date: "28th September 2024" },
  { day: "Fourth Day", date: "1st October 2024" },
  { day: "Fifth Day", date: "3rd October 2024" },
  { day: "Sixth Day", date: "5th October 2024" },
];

const EventSchedule = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Start from 0
  const buttonListRef = useRef<HTMLUListElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll the content when the selected tab changes
  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement)
      contentElement.style.transform = `translateX(-${selectedTab * 100}%)`;
  }, [selectedTab]);

  // Scroll event for the button list to synchronize with the content
  const handleButtonScroll = () => {
    const buttonListElement = buttonListRef.current;
    if (buttonListElement) {
      const scrollLeft = buttonListElement.scrollLeft;
      const buttonWidth = buttonListElement.scrollWidth / days.length; // Calculate button width
      const newSelectedTab = Math.round(scrollLeft / buttonWidth);
      if (newSelectedTab !== selectedTab) {
        setSelectedTab(newSelectedTab); // Update selected tab only if necessary
      }
    }
  };

  // Scroll the button list when the tab changes
  useEffect(() => {
    const buttonListElement = buttonListRef.current;
    if (buttonListElement) {
      const buttonWidth = buttonListElement.scrollWidth / days.length;
      const targetScrollLeft = selectedTab * buttonWidth;
      buttonListElement.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  }, [selectedTab]);

  return (
    <div className="lg:px-10">
      <HeadingSub subheading="Explore">Event Schedule</HeadingSub>
      <ContentSpacing />

      {/* Scrollable Schedule Button Tabs */}
      <ul
        ref={buttonListRef}
        className="flex gap-4 has-hidden-scrollbar overflow-x-auto scroll-snap-type-inline-mandatory overscroll-behavior-inline-contain"
        onScroll={handleButtonScroll} // Detect scrolling
      >
        {days.map(({ day, date }, i) => (
          <ScheduleButton
            key={i}
            onClick={() => setSelectedTab(i)} // Set the selected tab by index
            day={day}
            date={date}
          />
        ))}
      </ul>

      <ContentSpacing />

      {/* Scrollable Event Sections */}
      <section className="overflow-hidden relative">
        <section
          ref={contentRef}
          className="flex transition-transform duration-500 ease-in-out has-hidden-scrollbar"
        >
          {days.map((_, i) => (
            <section key={i} className="min-w-full">
              {/* {i + 1} */}
              {/* Displaying corresponding content */}
              <EventScheduleContent />
            </section>
          ))}
        </section>
      </section>
    </div>
  );
};

export default EventSchedule;

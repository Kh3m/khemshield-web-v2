"use client";

import HeadingSub from "@/app/components/Generics/HeadingSub";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import EventScheduleContent from "./EventScheduleContent";
import ScheduleButton from "./ScheduleButton";
import { useState, useRef, useEffect } from "react";
import { eventScheduleData } from "@/app/data/events";

const eventSchedules = eventScheduleData;

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

  //   // Scroll event for the button list to synchronize with the content
  const handleButtonScroll = () => {
    const buttonListElement = buttonListRef.current;
    if (buttonListElement) {
      const scrollLeft = buttonListElement.scrollLeft;
      const buttonWidth = buttonListElement.scrollWidth / eventSchedules.length; // Calculate button width
      const newSelectedTab = Math.round(scrollLeft / buttonWidth);
      if (newSelectedTab !== selectedTab) {
        setSelectedTab(newSelectedTab); // Update selected tab only if necessary
      }
    }
  };

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
        {eventSchedules.map(({ day, date }, i) => (
          <ScheduleButton
            key={i}
            onClick={() => setSelectedTab(i)} // Set the selected tab by index
            day={day}
            date={date}
            isActive={i === selectedTab}
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
          {eventSchedules.map(
            ({ facilitator, time, curriculum, location, perks }, i) => (
              <section key={i} className="min-w-full">
                {/* Displaying corresponding content */}
                <EventScheduleContent
                  location={location}
                  facilitator={facilitator}
                  time={time}
                  curriculum={curriculum}
                  perks={perks}
                />
              </section>
            )
          )}
        </section>
      </section>
    </div>
  );
};

export default EventSchedule;

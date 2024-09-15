import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import EventSpeakerCard from "./EventSpeakerCard";

import HeadingSub from "@/app/components/Generics/HeadingSub";
import { eventSpeakersData } from "@/app/data/events";

const EventSpeakers = () => {
  return (
    <section>
      <HeadingSub subheading="Meet">Facilitators and Speakers</HeadingSub>
      <ContentSpacing />
      <section>
        <ul
          className=" grid gap-8
        md:grid-cols-2 lg:grid-cols-4"
        >
          {eventSpeakersData.map((speaker) => (
            <li key={speaker.name}>
              <EventSpeakerCard speaker={speaker} />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default EventSpeakers;

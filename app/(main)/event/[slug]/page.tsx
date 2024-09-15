import BannerBackground from "@/app/components/Banners/BannerBackground";
import EventBanner from "@/app/components/Banners/EventBanner";
import Wrapper from "@/app/components/Generics/Wrapper";
import WhyJoinEvent from "./WhyJoinEvent";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import EventSpeakers from "./EventSpeakers";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import EventSchedule from "./EventSchedule";

const EventDetailPage = () => {
  return (
    <main>
      <Wrapper>
        <BannerBackground minHeight={"min-h-[670px]"}>
          <EventBanner />
        </BannerBackground>
        <WhyJoinEvent />
        <SectionSpacing />
        <EventSpeakers />
        <SectionSpacing />
        <EventSchedule />
      </Wrapper>
    </main>
  );
};

export default EventDetailPage;

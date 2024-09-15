import BannerBackground from "@/app/components/Banners/BannerBackground";
import EventBanner from "@/app/components/Banners/EventBanner";
import Wrapper from "@/app/components/Generics/Wrapper";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import EventSchedule from "./EventSchedule";
import EventSpeakers from "./EventSpeakers";
import WhyJoinEvent from "./WhyJoinEvent";
import ButtonRegEvent from "@/app/components/Buttons/ButtonRegEvent";

const EventDetailPage = () => {
  return (
    <main>
      <Wrapper>
        <BannerBackground minHeight={"min-h-[1070px] lg:min-h-[670px]"}>
          <EventBanner />
        </BannerBackground>
        <WhyJoinEvent />
        <SectionSpacing />
        <EventSpeakers />
        <SectionSpacing />
        <EventSchedule />
        <SectionSpacing />
        <div className="flex items-center justify-center">
          <ButtonRegEvent>Claim Your Seat</ButtonRegEvent>
        </div>
      </Wrapper>
    </main>
  );
};

export default EventDetailPage;

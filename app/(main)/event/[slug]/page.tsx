import BannerBackground from "@/app/components/Banners/BannerBackground";
import EventBanner from "@/app/components/Banners/EventBanner";
import Wrapper from "@/app/components/Generics/Wrapper";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import EventSchedule from "./EventSchedule";
import EventSpeakers from "./EventSpeakers";
import WhyJoinEvent from "./WhyJoinEvent";
import ButtonRegEvent from "@/app/components/Buttons/ButtonRegEvent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Empowerment Series 2024: Empowering Warriors with On-Demand Skills for Remote Work - Khemshield & Jidem Foundation",
  description: `Join the Empowerment Series 2024, a collaboration with the Jidem Foundation, designed to enhance your skills in cybersecurity and software engineering for remote work success`,
  openGraph: {
    title:
      "Empowerment Series 2024: Empowering Warriors with On-Demand Skills for Remote Work - Khemshield & Jidem Foundation",
    description: `Join the Empowerment Series 2024, a collaboration with the Jidem Foundation, designed to enhance your skills in cybersecurity and software engineering for remote work success`,
    images: [
      {
        url: "/assets/images/events/khemshield_jidem.jpg", // Make sure the path is correct
        width: 800,
        height: 600,
        alt: "Khemshield Events Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Empowerment Series 2024: Empowering Warriors with On-Demand Skills for Remote Work - Khemshield & Jidem Foundation",
    description: `Join the Empowerment Series 2024, a collaboration with the Jidem Foundation, designed to enhance your skills in cybersecurity and software engineering for remote work success`,
    images: ["/assets/images/events/khemshield_jidem.jpg"], // Path to the image
  },
};

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

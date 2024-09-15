import Breadcrumb from "@/app/components/Generics/Breadcrumb";
import Wrapper from "@/app/components/Generics/Wrapper";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import WhoWeAre from "./WhoWeAre";
import OurMission from "./OurMission";
import OurTeam from "@/app/components/Team/OurTeam";

const AboutPage = () => {
  return (
    <section>
      <Breadcrumb crumbs={[{ href: "", text: "About" }]} />
      <ContentSpacing />
      <Wrapper>
        <WhoWeAre />
        <ContentSpacing />
        <OurMission />
        <ContentSpacing />
        <OurTeam />
      </Wrapper>
      <ContentSpacing />
    </section>
  );
};

export default AboutPage;

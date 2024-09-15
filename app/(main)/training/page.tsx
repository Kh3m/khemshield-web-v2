import Breadcrumb from "@/app/components/Generics/Breadcrumb";
import HeaderContent from "@/app/components/Generics/HeaderContent";
import Wrapper from "@/app/components/Generics/Wrapper";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import Course from "./Course";
import SearchFilter from "./SearchFilter";
import Courses from "./Courses";

const TraininPage = () => {
  return (
    <section>
      <Breadcrumb crumbs={[{ href: "", text: "Training Program" }]} />
      <Wrapper>
        <ContentSpacing />
        <HeaderContent
          heading="Empower Your Future with Industry-Leading IT Skills"
          center
        >
          At khemshield, we believe that the key to staying ahead in the rapidly
          evolving tech industry is continuous learning. Our training programs
          are designed to equip students, professionals, and organizations with
          the practical skills and knowledge needed to excel in cybersecurity,
          IT development, and beyond.
        </HeaderContent>
        <ContentSpacing />
        <SearchFilter />
        <ContentSpacing />
        <Courses />
      </Wrapper>
    </section>
  );
};

export default TraininPage;

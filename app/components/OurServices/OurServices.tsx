import HeaderContent from "../Generics/HeaderContent";
import Wrapper from "../Generics/Wrapper";
import ContentSpacing from "../Spacing/ContentSpacing";
import Services from "./Services";

const OurServices = () => {
  return (
    <Wrapper>
      <HeaderContent heading="Services we offer for you" center>
        We provide a comprehensive set of end-to-end IT services & support, by
        enabling our intelligent automation and implementing agility
      </HeaderContent>
      <ContentSpacing />
      <Services />
    </Wrapper>
  );
};

export default OurServices;

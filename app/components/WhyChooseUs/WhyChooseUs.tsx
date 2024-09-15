import HeaderContent from "../Generics/HeaderContent";
import Image from "next/image";

import training_2 from "@/public/assets/images/training_2.jpg";
import ContentSpacing from "../Spacing/ContentSpacing";
import Reasons from "./Reasons";
import Wrapper from "../Generics/Wrapper";

const WhyChooseUs = () => {
  return (
    <Wrapper styles=" bg-support py-24 ">
      <HeaderContent heading="Why Choose Us" center>
        Our dedicated team of experts ensures that your organization not only
        adopts the latest technologies but also successfully integrates and
        sustains them, making us the preferred choice for those who strive for
        technological excellence.
      </HeaderContent>
      <ContentSpacing />
      <section
        className="flex flex-col gap-20  justify-center
       lg:flex-row"
      >
        <Image
          src={training_2}
          alt="Students in Workshop"
          className=" h-[340px] object-cover rounded-md
          lg:w-[480px] lg:h-[480px]"
        />
        <div className=" max-w-[550px]">
          <Reasons />
        </div>
      </section>
    </Wrapper>
  );
};

export default WhyChooseUs;

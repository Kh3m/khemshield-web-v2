import testimonial_1 from "@/public/assets/images/testimonial_1.png";
import Testimonial, { TestimonialType } from "./Testimonial";
import ContentSpacing from "../Spacing/ContentSpacing";
import Wrapper from "../Generics/Wrapper";

const testimonials: TestimonialType[] = [
  {
    review: {
      rating: 5,
      text: "“Their dedication to understanding our business and tailoring solutions to our specific needs was impressive. From application development to infrastructure protection, they delivered beyond our expectations. We couldn't have asked for a better partner in securing our operations",
    },
    user: {
      image: testimonial_1,
      name: "Franklin Hicks",
      role: "Project Manager",
      company: "Leptons Multiconcept",
    },
  },
];

const Testimonials = () => {
  return (
    <Wrapper>
      <section className=" flex items-center justify-center">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.user.name} testimonial={testimonial} />
        ))}
      </section>
      <ContentSpacing />
      <div className=" w-max m-auto flex gap-2">
        <div className=" w-8 h-3 rounded-lg bg-primary-normal"></div>
        <div className=" w-3 h-3 rounded-lg bg-primary-light"></div>
        <div className=" w-3 h-3 rounded-lg bg-primary-light"></div>
      </div>
    </Wrapper>
  );
};

export default Testimonials;

import testimonial_1 from "@/public/assets/images/testimonial_1.png";
import adesola from "@/public/assets/images/testimonials/adesola.jpg";
import olabobo1 from "@/public/assets/images/testimonials/olabobo1.jpg";
import { TestimonialType } from "../components/Testimonials/Testimonial";

export const testimonials: TestimonialType[] = [
  {
    review: {
      rating: 5,
      text: `“Khem, your cybersecurity course has been a game-changer for me. Your
    dedication to teaching and shaping the curriculum has been invaluable.
    Thanks to your mentorship, I feel well-equipped to embark on my journey in
    this field.`,
    },
    user: {
      image: adesola,
      name: "Raphael Adelana Adesola",
      role: "Student",
      company: "",
    },
  },
  {
    review: {
      rating: 4,
      text: "“Their dedication to understanding our business and tailoring solutions to our specific needs was impressive. From application development to infrastructure protection, they delivered beyond our expectations. We couldn't have asked for a better partner in securing our operations",
    },
    user: {
      image: testimonial_1,
      name: "Franklin Hicks",
      role: "Project Manager",
      company: "Leptons Multiconcept",
    },
  },

  {
    review: {
      rating: 4.5,
      text: `“I appreciate Khemshield's commitment to the success of our E-TopUp project.
    Surprisingly, the work arrived earlier than expected, despite the initial 
    promise for the end of January. I had anticipated its delivery around January 28th, 
    29th, or 30th, or even allowing for an additional week.`,
    },
    user: {
      image: olabobo1,
      name: "Bello Abdulsobur Olalekan",
      role: "CEO",
      company: "Universal Top-Up Communication",
    },
  },
];

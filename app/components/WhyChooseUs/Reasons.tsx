import { title } from "process";
import CircledListItem from "./CircledListItem";

const reasons = [
  {
    title: "Proven Expertise",
    description:
      "With years of experience in secure application development and cybersecurity, we bring a deep understanding of IT challenges and solutions to every project.",
  },
  {
    title: "Comprehensive Services",
    description:
      "From web and mobile app development to infrastructure protection and cybersecurity training, we offer end-to-end solutions tailored to your needs.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize your business goals and security, providing customized strategies and ongoing support to ensure your success.",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Quality is at the core of everything we do. We are dedicated to delivering secure, reliable, and innovative IT solutions that protect your business and help you grow.",
  },
];
const Reasons = () => {
  return (
    <ul>
      {reasons.map((reason, i) => (
        <CircledListItem
          key={reason.title}
          heading={reason.title}
          number={i + 1}
        >
          {reason.description}
        </CircledListItem>
      ))}
    </ul>
  );
};

export default Reasons;

import service_cyber from "@/public/assets/images/services/service_cybersecurity.jpeg";
import service_mobile from "@/public/assets/images/services/service_mobile.png";
import service_training from "@/public/assets/images/training_1.jpg";
import Service from "./Service";

const services = [
  {
    image: service_cyber,
    title: "Comprehensive Cybersecurity Solutions",
    description:
      "From consulting to infrastructure protection, we safeguard your digital assets with top-tier cybersecurity strategies",
  },

  {
    image: service_mobile,
    title: "Secure Application Development",
    description:
      "We build secure, reliable web and mobile applications tailored to your business needs",
  },

  {
    image: service_training,
    title: "Professional Training Programs",
    description:
      "We offer specialized training for businesses and students, empowering them with the skills needed to excel in IT and cybersecurity",
  },
];

const Services = () => {
  return (
    <ul
      className="flex flex-col justify-between gap-4
    lg:flex-row"
    >
      {services.map(({ image, title, description }) => (
        <li key={title}>
          <Service image={image} heading={title} description={description} />
        </li>
      ))}
    </ul>
  );
};

export default Services;

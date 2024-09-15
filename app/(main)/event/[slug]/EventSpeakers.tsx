import Heading from "@/app/components/Generics/Heading";
import Text from "@/app/components/Generics/Text";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import EventSpeakerCard from "./EventSpeakerCard";
import linkedin from "@/public/assets/images/linkedin.png";
import instagram from "@/public/assets/images/instagram.png";
import { SocialType } from "@/app/components/Footer/Socials";
import { StaticImageData } from "next/image";

import jonathan from "@/public/assets/images/events/jonathan.jpeg";
import saud from "@/public/assets/images/events/saud.jpeg";
import felix from "@/public/assets/images/events/felix.jpg";
import abdulkareem from "@/public/assets/images/events/abdulkareem.jpeg";
import ahmedoo from "@/public/assets/images/events/ahmedoo.jpg";
import HeadingSub from "@/app/components/Generics/HeadingSub";

export type SpeakerType = {
  image: StaticImageData;
  name: string;
  description: string;
  socials: SocialType[];
  role: string;
  eventRole: string;
  company: string;
  isHost?: boolean;
};

const speakers: SpeakerType[] = [
  {
    image: jonathan,
    name: "Jonathan Ayodele",
    description: `ISO 27001 Lead Implementer, Security+, CCNA, CompTIA A+, Microsoft
        certifications, complemented by a Master’s degree in Cybersecurity from
        Cardiff University, UK.`,
    socials: [
      {
        src: linkedin,
        alt: "linkedin",
        href: "https://www.linkedin.com/in/jonatayo/",
      },
      { src: instagram, alt: "instagram", href: "" },
    ],
    role: "Cybersecurity Engineer",
    eventRole: "Facilitator",
    company: "Chevening Scholar",
  },

  {
    image: saud,
    name: "Saud Adam",
    description: `Master’s in Information Security and Cyber Forensics (SRM University, India). 
    Chief Consulting Officer, Information Security Analyst, and System Analyst`,
    socials: [
      {
        src: linkedin,
        alt: "linkedin",
        href: "https://www.linkedin.com/in/saud-adam-89a78660/",
      },
      { src: instagram, alt: "instagram", href: "" },
    ],
    role: "Lecturer Bayero University Kano (BUK)",
    eventRole: "Facilitator",
    company: "Coprime Ltd.",
  },

  {
    image: abdulkareem,
    name: "Abdul Kareem Adamu",
    description: `CTO at Khemshield, leading the development of secure web and mobile applications, 
    providing cybersecurity consulting, and offering specialized training programs.`,
    socials: [
      {
        src: linkedin,
        alt: "linkedin",
        href: "https://www.linkedin.com/in/etzkhem/",
      },
      { src: instagram, alt: "instagram", href: "" },
    ],
    role: "CTO at Khemshield",
    eventRole: "Host",
    company: "Khemshield Ltd.",
    isHost: true,
  },

  {
    image: felix,
    name: "Felix Fomengia",
    description: `Chevening Alumnus, MSc in Cybersecurity & Forensics, Ethical Hacker, Cybersecurity Professional, 
    Copywriter, and Award-winning Techpreneur.`,
    socials: [
      {
        src: linkedin,
        alt: "linkedin",
        href: "https://www.linkedin.com/in/felix-fomengia-10105b155/",
      },
      { src: instagram, alt: "instagram", href: "" },
    ],
    eventRole: "Facilitator",
    role: "Ethical Hacker",
    company: "Chevening Alumnus",
  },

  {
    image: ahmedoo,
    name: "Ahmad Sheikh",
    description: `Chevening Alumnus, MSc in Cybersecurity & Forensics, Ethical Hacker, Cybersecurity Professional, 
    Copywriter, and Award-winning Techpreneur.`,
    socials: [
      {
        src: linkedin,
        alt: "linkedin",
        href: "https://www.linkedin.com/in/felix-fomengia-10105b155/",
      },
      { src: instagram, alt: "instagram", href: "" },
    ],
    eventRole: "Facilitator",
    role: "Fullstack Webdeveloper",
    company: "DooTech",
  },
];

const EventSpeakers = () => {
  return (
    <section>
      <HeadingSub subheading="Meet">Facilitators and Speakers</HeadingSub>
      <ContentSpacing />
      <section>
        <ul
          className=" grid gap-8
        md:grid-cols-2 lg:grid-cols-4"
        >
          {speakers.map((speaker) => (
            <li key={speaker.name}>
              <EventSpeakerCard speaker={speaker} />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default EventSpeakers;

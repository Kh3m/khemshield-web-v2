import { Coffee, PresentionChart } from "iconsax-react";
import { IoVideocamOutline } from "react-icons/io5";
import linkedin from "@/public/assets/images/linkedin.png";
import instagram from "@/public/assets/images/instagram.png";
import { SocialType } from "@/app/components/Footer/Socials";
import { StaticImageData } from "next/image";

import abdulkareem from "@/public/assets/images/events/abdulkareem.jpeg";
import ahmedoo from "@/public/assets/images/events/ahmedoo.jpg";
import jonathan from "@/public/assets/images/events/jonathan.jpeg";
import felix from "@/public/assets/images/events/felix.jpg";
import saud from "@/public/assets/images/events/saud.jpeg";
import elon from "@/public/assets/images/events/elon.jpg";
import hafsat from "@/public/assets/images/events/hafsat.jpg";

export const jidemTalks = [
  {
    subject: "Jidem's Introductory Speech",
    content:
      "Kick off the event with Jidem's welcoming address, setting the tone and expectations for the insightful sessions ahead.",
  },
  {
    subject: "Jidem's Concluding Remarks",
    content:
      "Wrap up the two-week journey with Jidem’s closing remarks, summarizing key takeaways and extending gratitude to participants and collaborators.",
  },
];

export const eventScheduleData = [
  {
    day: "First Day",
    date: "24th September 2024",
    facilitator: {
      image: abdulkareem,
      name: "Abdul Kareem Adamu",
    },
    curriculum: {
      topic: "Web Development",
      subject: "Introduction to HTML, CSS, and JavaScript",
      content: `In the "Introduction to HTML, CSS, and JavaScript" session, participants will explore the core technologies for building websites. They will start with HTML to structure web content using elements like headings, paragraphs, lists, and images. Next, they'll learn CSS to style and format the website, focusing on colors, fonts, layout, and responsiveness. Finally, JavaScript will be introduced to add interactivity, enabling dynamic elements such as buttons, form validation, and animations. By the end of the session, attendees will understand how these three technologies work together to create functional, interactive, and visually appealing websites.`,
    },
    time: {
      from: "04PM",
      to: "06:30PM",
    },
    location: "Zoom",
    perks: [
      { title: "Coffee & Snacks", icon: <Coffee size={18} /> },
      { title: "Video Streaning", icon: <IoVideocamOutline size={18} /> },
    ],
  },
  {
    day: "Second Day",
    date: "26th September 2024",
    facilitator: {
      image: ahmedoo,
      name: "Ahmad Sheikh",
    },
    curriculum: {
      topic: "Web Development",
      subject: "Building a basic website using HTML and CSS",
      content:
        'In the "Building a Basic Website using HTML and CSS" session, participants will learn the foundational skills for web development. The course will cover structuring a webpage with HTML by utilizing elements such as headings, paragraphs, images, and links. Participants will also explore CSS to style and enhance the visual appeal of their webpage, focusing on layout, typography, colors, and responsive design principles. By the end of the session, attendees will have created a fully functional, visually appealing website using these fundamental technologies.',
    },
    time: {
      from: "04PM",
      to: "06PM",
    },
    location: "Zoom",
    perks: [
      { title: "Coffee & Snacks", icon: <Coffee size={18} /> },
      { title: "Video Streaning", icon: <IoVideocamOutline size={18} /> },
    ],
  },
  {
    day: "Third Day",
    date: "28th September 2024",
    facilitator: {
      image: abdulkareem,
      name: "Abdul Kareem Adamu",
    },
    curriculum: {
      topic: "Web Development",
      subject: "Introduction to front-end frameworks (ReactJs, TailwindCss)",
      content:
        "In this session, participants will be introduced to two essential front-end development tools: ReactJs and TailwindCss. They will learn how ReactJs enables developers to build dynamic and interactive web applications using a component-based architecture. TailwindCss will be explored as a utility-first CSS framework that simplifies styling by allowing developers to apply pre-defined classes directly to HTML elements. By the end, attendees will understand how these frameworks streamline the development process and make it easier to build responsive, maintainable, and visually appealing web interfaces.",
    },

    time: {
      from: "04PM",
      to: "06PM",
    },
    location: "Zoom",
    perks: [
      { title: "Coffee & Snacks", icon: <Coffee size={18} /> },
      { title: "Video Streaning", icon: <IoVideocamOutline size={18} /> },
    ],
  },
  {
    day: "Fourth Day",
    date: "1st October 2024",
    facilitator: {
      image: jonathan,
      name: "Jonathan Ayodele",
    },

    curriculum: {
      topic: "Cybersecurity",
      subject:
        "Introduction to cybersecurity fundamentals (threats, vulnerabilities, risk management)",
      content:
        "This session will cover the basics of cybersecurity, starting with an overview of common cyber threats such as malware, phishing, and ransomware. Participants will also learn about vulnerabilities—weak points in systems or software that attackers can exploit. The session will dive into risk management, focusing on how organizations assess and prioritize risks to protect their digital assets. By the end of this session, attendees will have a strong foundation in identifying threats, understanding vulnerabilities, and implementing risk management strategies to safeguard their systems.",
    },

    time: {
      from: "06PM",
      to: "08PM",
    },
    location: "Zoom",
    perks: [
      { title: "Coffee & Snacks", icon: <Coffee size={18} /> },
      { title: "Video Streaning", icon: <IoVideocamOutline size={18} /> },
    ],
  },
  {
    day: "Fifth Day",
    date: "3rd October 2024",
    facilitator: {
      image: saud,
      name: "Saud Adam",
    },
    curriculum: {
      topic: "Cybersecurity",
      subject:
        "Web application security (OWASP Top 10, secure coding practices)",
      content:
        "In this session, participants will explore key principles of web application security. They will be introduced to the OWASP Top 10, a widely recognized list of the most critical security risks to web applications, including issues like SQL injection and cross-site scripting (XSS). The session will also focus on secure coding practices, teaching attendees how to write code that minimizes vulnerabilities and adheres to security best practices. By the end of the session, participants will understand how to protect web applications from common threats and build secure, robust systems.",
    },
    time: {
      from: "04PM",
      to: "06PM",
    },
    location: "Zoom",
    perks: [
      { title: "Coffee & Snacks", icon: <Coffee size={18} /> },
      { title: "Video Streaning", icon: <IoVideocamOutline size={18} /> },
    ],
  },
  {
    day: "Sixth Day",
    date: "5th October 2024",
    facilitator: {
      image: felix,
      name: "Felix Fomengia",
    },
    curriculum: {
      topic: "Cybersecurity",
      subject: "Introduction to penetration testing and ethical hacking",
      content:
        "This session introduces the basics of penetration testing and ethical hacking, focusing on simulating cyberattacks to identify and exploit vulnerabilities in systems. Participants will learn about various tools and techniques used in ethical hacking, such as network scanning, vulnerability assessment, and exploiting security gaps. The session will also cover the ethical and legal frameworks guiding penetration testers, ensuring that attendees understand how to responsibly use their skills to improve system security. By the end of the session, participants will have a foundational understanding of how ethical hackers help organizations strengthen their defenses against cyberattacks.",
    },
    time: {
      from: "04PM",
      to: "06PM",
    },
    location: "Zoom",
    perks: [
      { title: "Coffee & Snacks", icon: <Coffee size={18} /> },
      { title: "Video Streaning", icon: <IoVideocamOutline size={18} /> },
    ],
  },
  {
    day: "Certification Day",
    date: "19th October 2024",
    facilitator: {
      image: elon,
      name: "Engr. Abdul Jamiu Adeiza",
    },
    curriculum: {
      topic: "Certification Distribution",
      subject: "Getting to Meet Warriors and Sharing Personalized Experiences",
      content:
        "This session serves as the culmination of the training, where participants will have the opportunity to share their personalized experiences, challenges, and successes throughout the program. Attendees will get to meet and engage with fellow 'warriors,' exchange ideas, and reflect on the key takeaways from the sessions. The event will conclude with the formal distribution of certificates, recognizing the commitment and achievements of all participants.",
    },
    time: {
      from: "04PM",
      to: "06:30PM",
    },
    location: "Abuja, Nigeria.",
    perks: [
      { title: "Coffee Break", icon: <Coffee size={18} /> },
      { title: "Live Presentation", icon: <PresentionChart size={18} /> },
    ],
  },
];

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

export const eventSpeakersData: SpeakerType[] = [
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
      {
        src: instagram,
        alt: "instagram",
        href: "https://www.instagram.com/ayodelejona?igsh=bWZ1ZjA4ZW1kY3Ju",
      },
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
      {
        src: instagram,
        alt: "instagram",
        href: "https://www.instagram.com/etz_khem?igsh=OXN0N3M2bHhtNnA4",
      },
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
      {
        src: instagram,
        alt: "instagram",
        href: "https://www.instagram.com/felixfomengia?igsh=M3Q5NzVmNGNzaGV2",
      },
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
        href: "https://www.linkedin.com/in/ahmedootech",
      },
      {
        src: instagram,
        alt: "instagram",
        href: "https://www.instagram.com/ahmedootech",
      },
    ],
    eventRole: "Facilitator",
    role: "Fullstack Webdeveloper",
    company: "Digital Cloud Solutions Ltd.",
  },
  {
    image: hafsat,
    name: "Hafsat Rabiu Haruna",
    description: `Chevening Alumnus, MSc in Cybersecurity & Forensics, Ethical Hacker, Cybersecurity Professional, 
    Copywriter, and Award-winning Techpreneur.`,
    socials: [
      {
        src: linkedin,
        alt: "linkedin",
        href: "",
      },
      {
        src: instagram,
        alt: "instagram",
        href: "https://www.instagram.com/nana_hafserh?igsh=MXVteGUyZnV5dmhqbw==",
      },
    ],
    eventRole: "Program Director",
    role: "Disability Advocate",
    company: "Special GEMS Foundation",
  },
];

export const speakersImagesData = [
  {
    src: felix,
    alt: "Speaker",
  },
  {
    src: jonathan,
    alt: "Speaker",
  },
  {
    src: saud,
    alt: "Speaker",
  },
  {
    src: hafsat,
    alt: "Speaker",
  },
  {
    src: ahmedoo,
    alt: "Speaker",
  },
  {
    src: abdulkareem,
    alt: "Speaker",
  },
];

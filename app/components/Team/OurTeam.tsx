import HeaderContent from "../Generics/HeaderContent";
import Text from "../Generics/Text";
import BaseSpacing from "../Spacing/BaseSpacing";

import patrick from "@/public/assets/images/team/team_1.jpeg";
import khem from "@/public/assets/images/team/team_2.jpeg";
import placeholder from "@/public/assets/images/team/team_3.jpeg";
import muazat from "@/public/assets/images/team/team_4.jpg";
import Image from "next/image";
import ContentSpacing from "../Spacing/ContentSpacing";

const teams = [
  {
    image: patrick,
    name: "Patrick Chukwudifu",
    role: "Lead Product Designer",
  },
  {
    image: muazat,
    name: "Muazat Kabarat",
    role: "Business Development Manager",
  },
  {
    image: khem,
    name: "Abdul Kareem Adamu",
    role: "Cyber Security Engineer",
  },
  {
    image: placeholder,
    name: "Daniella Cutie",
    role: "Lead Software Engineer",
  },
];
const OurTeam = () => {
  return (
    <section>
      <HeaderContent heading="Meet the Team" center>
        <Text>
          Our KhemShield team offers cybersecurity and software engineering
          expertise, plus training programs for security and development. We
          focus on innovation and practical solutions to help you thrive in
          technology&apos;s ever-evolving world.
        </Text>
      </HeaderContent>
      <ContentSpacing />
      <ul className="flex gap-16 justify-between has-scrollbar overflow-x-scroll">
        {teams.map(({ image, name, role }) => (
          <li key={name}>
            <article className=" text-center ">
              <Image
                src={image}
                alt={`Team ${name}`}
                className="h-[250px] w-[250px] min-w-[250px] rounded-full object-cover"
              />
              <BaseSpacing />
              <Text variant="semibold">{name}</Text>
              <Text type="caption">{role}</Text>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurTeam;

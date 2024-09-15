import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import Image from "next/image";
import Text from "@/app/components/Generics/Text";
import Heading from "@/app/components/Generics/Heading";
import Socials from "@/app/components/Footer/Socials";
import { SpeakerType } from "./EventSpeakers";
import HR from "@/app/components/Generics/HR";

interface Props {
  speaker: SpeakerType;
}

const EventSpeakerCard = ({
  speaker: {
    name,
    description,
    socials,
    role,
    image,
    isHost,
    eventRole,
    company,
  },
}: Readonly<Props>) => {
  return (
    <article
      className=" shadow-khemshadow py-12 flex relative
    flex-col justify-center items-center px-8 text-center"
    >
      {isHost && (
        <div
          className="px-6 py-2 bg-primary-container 
            absolute top-2 right-2 text-xs font-semibold"
        >
          GOLD
        </div>
      )}
      <Image
        src={image}
        alt="Jonathan"
        className=" w-36 h-36 rounded-full my-4 object-cover"
      />
      <Heading variant="h4">{name}</Heading>
      {/* <div className="h-[120px]">
        <Text styles="my-2 text-sm">{description}</Text>
      </div> */}
      <Text color="primary" styles=" italic text-xs my-2 font-semibold">
        {role}
      </Text>
      <Text>{company}</Text>
      <BaseSpacing />
      <Socials socials={socials} />
      <BaseSpacing />
      <HR />
      <Text color="primary" styles="my-4 font-semibold">
        {eventRole}
      </Text>
    </article>
  );
};

export default EventSpeakerCard;

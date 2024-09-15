import Heading from "../Generics/Heading";
import BaseSpacing from "../Spacing/BaseSpacing";

const items = [
  {
    text: "Cyber Security",
  },
  {
    text: "Web Development",
  },
  {
    text: "Mobile Development",
  },
  {
    text: "UX Design",
  },
  {
    text: "Graphic Design",
  },
];

const FooterServices = () => {
  return (
    <div>
      <Heading variant="h4">Services</Heading>
      <BaseSpacing />
      <ul>
        {items.map(({ text }) => (
          <li key={text} className="my-2">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterServices;

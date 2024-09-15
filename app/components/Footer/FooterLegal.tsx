import Heading from "../Generics/Heading";
import NavLink from "../Navigation/NavLink";
import BaseSpacing from "../Spacing/BaseSpacing";

const items = [
  {
    text: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    text: "Terms & Conditions",
    href: "/terms-conditions",
  },
  {
    text: "Return Policy",
    href: "/return-policy",
  },
];

const FooterLegal = () => {
  return (
    <div>
      <Heading variant="h4">Legal</Heading>
      <BaseSpacing />
      <ul>
        {items.map(({ text, href }) => (
          <li key={text} className="my-2">
            <NavLink href={href}>{text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLegal;

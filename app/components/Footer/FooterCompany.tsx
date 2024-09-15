import Link from "next/link";
import Heading from "../Generics/Heading";
import BaseSpacing from "../Spacing/BaseSpacing";
import NavLink from "../Navigation/NavLink";

const items = [
  {
    text: "About Us",
    href: "/about",
  },
  {
    text: "Contact us",
    href: "/contact",
  },
  {
    text: "Service",
    href: "/service",
  },
];
const FooterCompany = () => {
  return (
    <section>
      <Heading variant="h4">Company</Heading>
      <BaseSpacing />
      <ul>
        {items.map(({ text, href }) => (
          <li key={text} className="my-2">
            <NavLink href={href}>{text}</NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterCompany;

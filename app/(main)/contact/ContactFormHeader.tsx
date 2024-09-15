import Heading from "@/app/components/Generics/Heading";
import Link from "next/link";
import Text from "@/app/components/Generics/Text";
import HeaderContent from "@/app/components/Generics/HeaderContent";

const ContactFormHeader = () => {
  return (
    <HeaderContent heading="Contact Us" center isPlainText={false}>
      <Heading variant="h4" bold={false}>
        <span className="mx-1">Reach out to our</span>
        <Link href="/faq">
          <Text color="primary" inline>
            FAQ
          </Text>
        </Link>
        <span className="mx-1">or contact our team</span>
      </Heading>
    </HeaderContent>
  );
};

export default ContactFormHeader;

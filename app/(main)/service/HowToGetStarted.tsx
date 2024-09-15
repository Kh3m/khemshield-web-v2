import HeaderContent from "@/app/components/Generics/HeaderContent";
import Heading from "@/app/components/Generics/Heading";
import ProgressBar from "@/app/components/Generics/ProgressBar";
import Text from "@/app/components/Generics/Text";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";

const steps = [
  {
    heading: "Request a Quote",
    description:
      "Fill out our quick and easy form to request a quote. Share details about your project or training needs, and we'll get back to you with a personalized proposal tailored to your requirements.",
  },
  {
    heading: "Check your Email",
    description:
      "Once you've submitted your request, keep an eye on your inbox. We'll send you a detailed quote and plan, along with any follow-up questions or additional information we may need to get started.",
  },
  {
    heading: "Track your project progress",
    description:
      "After we begin working together, you'll have access to a dedicated portal or regular updates to track the progress of your project. From design to development we keep you in the loop at all times.",
  },
];
const HowToGetStarted = () => {
  return (
    <section>
      <HeaderContent heading="How to Get Started" center>
        Ready to work with us? Follow these simple steps to kick off your
        project or training journey. From requesting a quote to tracking your
        progress, we&apos;re here to ensure a smooth and transparent process
        every step of the way.
      </HeaderContent>
      <ContentSpacing />
      <ProgressBar progress={25} />
      <ContentSpacing />
      <ul
        className="flex flex-col justify-between gap-8
      lg:flex-row"
      >
        {steps.map(({ heading, description }) => (
          <li key={heading} className=" lg:min-w-[300px] lg:max-w-[300px]">
            <HeaderContent heading={heading} center>
              {description}
            </HeaderContent>
            <BaseSpacing />
            <div className="flex justify-center">
              <Link
                href="/request"
                className=" flex gap-2 text-primary-normal group w-max"
              >
                <span>Get started</span>
                <ArrowRight className=" group-hover:translate-x-1 duration-200" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HowToGetStarted;

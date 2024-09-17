import { Metadata } from "next";
import React, { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title:
    "Empowerment Series 2024: Empowering Warriors with On-Demand Skills for Remote Work - Khemshield & Jidem Foundation",
  description: `Join the Empowerment Series 2024, a collaboration with the Jidem Foundation, designed to enhance your skills in cybersecurity and software engineering for remote work success`,
  openGraph: {
    title:
      "Empowerment Series 2024: Empowering Warriors with On-Demand Skills for Remote Work - Khemshield & Jidem Foundation",
    description: `Join the Empowerment Series 2024, a collaboration with the Jidem Foundation, designed to enhance your skills in cybersecurity and software engineering for remote work success`,
    images: [
      {
        url: "/assets/images/events/khemshield_jidem.jpg", // Make sure the path is correct
        width: 800,
        height: 600,
        alt: "Khemshield Events Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Empowerment Series 2024: Empowering Warriors with On-Demand Skills for Remote Work - Khemshield & Jidem Foundation",
    description: `Join the Empowerment Series 2024, a collaboration with the Jidem Foundation, designed to enhance your skills in cybersecurity and software engineering for remote work success`,
    images: ["/assets/images/events/khemshield_jidem.jpg"], // Path to the image
  },
};

const EventDetailLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return <main>{children}</main>;
};

export default EventDetailLayout;

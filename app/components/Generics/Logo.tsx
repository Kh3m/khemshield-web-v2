import React from "react";
import Image from "next/image";

import konlylogo from "@/public/konlylogo.png";
import Link from "next/link";

interface Props {
  withText?: boolean;
}
const Logo = ({ withText }: Readonly<Props>) => {
  return (
    <Link href="/" className="flex gap-2">
      <Image src={konlylogo} alt="Khemshield Logo" />
      {withText && <span className=" text-xl  uppercase">hemshield</span>}
    </Link>
  );
};

export default Logo;

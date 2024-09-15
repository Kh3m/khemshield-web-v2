import Link from "next/link";
import React from "react";

const CallToActionBanner = () => {
  return (
    <header
      className="px-12 h-24 bg-primary-normal text-white flex justify-center items-center
    lg:px-0"
    >
      <div className="flex items-center gap-4 lg:gap-0">
        <span
          className="text-primary-normal bg-white h-7 min-w-12 w-12 rounded-xl 
         inline-flex items-center justify-center font-semibold"
        >
          New
        </span>
        <div>
          <span className="lg:pl-2">Let’s Secure Your Future Together</span>
          <span className="px-1">–</span>
          <Link href="/request">Request a Quote Today!</Link>
        </div>
      </div>
    </header>
  );
};

export default CallToActionBanner;

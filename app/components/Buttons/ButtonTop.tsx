"use client";

import React, { useEffect, useState } from "react";
import IconHolder from "../Generics/IconHolder";
import { ArrowUp2 } from "iconsax-react";
import useNavStore from "@/app/store/nav-store";

const ButtonTop = () => {
  const { topRef } = useNavStore();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMoveUp = () => {
    topRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showButton = scrollPosition > 1000;

  return (
    <button
      onClick={handleMoveUp}
      className={`${
        showButton ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
      } fixed bottom-[460px] duration-300 right-2 z-40
      lg:right-12`}
    >
      <IconHolder>{<ArrowUp2 />}</IconHolder>
    </button>
  );
};

export default ButtonTop;

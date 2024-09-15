"use client";

import { useEffect, useRef } from "react";
import useNavStore from "@/app/store/nav-store";

const TopElement = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const { setTopRef } = useNavStore();

  useEffect(() => {
    setTopRef(topRef);
  }, [setTopRef]);

  return <div ref={topRef}></div>;
};

export default TopElement;

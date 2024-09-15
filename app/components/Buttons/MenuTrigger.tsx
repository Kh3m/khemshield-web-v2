"use client";

import useSideDrawerStore from "@/app/store/side-drawer";
import { PropsWithChildren } from "react";

const MenuTrigger = ({ children }: Readonly<PropsWithChildren>) => {
  const { handleOpen } = useSideDrawerStore();
  return <button onClick={handleOpen}>{children}</button>;
};

export default MenuTrigger;

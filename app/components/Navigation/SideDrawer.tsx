"use client";

import useSideDrawerStore from "@/app/store/side-drawer";
import { CloseSquare } from "iconsax-react";
import { ReactNode } from "react";
import NavLink from "./NavLink";

interface Props {
  items: { text: string; href: string; icon: ReactNode }[];
}

const SideDrawer = ({ items }: Readonly<Props>) => {
  const { handleClose, open } = useSideDrawerStore();
  return (
    <div className=" lg:hidden">
      <div
        onClick={handleClose}
        className={`${
          open ? "min-w-full" : " min-w-0"
        } fixed bottom-0 top-0 bg-black/30 z-50 duration-100`}
      ></div>
      <nav
        className={`${
          open ? "max-w-[90%] min-w-[80%]" : "max-w-0 min-w-0"
        }  bg-white duration-200 fixed top-0 bottom-0 z-50 rounded-lg overflow-x-hidden`}
      >
        <section className="p-8">
          <header className="flex justify-end">
            <CloseSquare
              onClick={handleClose}
              className=" text-secondary-normal"
              variant="Bulk"
            />
          </header>
          <ul>
            {items.map(({ href, text }) => (
              <li onClick={handleClose} key={text} className="my-4">
                <NavLink href={href} bold>
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default SideDrawer;

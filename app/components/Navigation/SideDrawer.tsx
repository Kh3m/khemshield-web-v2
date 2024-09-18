"use client";

import useSideDrawerStore from "@/app/store/side-drawer";
import { Add } from "iconsax-react";
import { ReactNode } from "react";
import RequestQuoteButton from "../Buttons/RequestQuoteButton";
import NavLink from "./NavLink";
import Image from "next/image";

import chaf_event_1 from "@/public/assets/images/events/chaf_event_1.jpg";
import chaf_event_2 from "@/public/assets/images/events/chaf_event_2.jpg";
import chaf_event_3 from "@/public/assets/images/events/chaf_event_3.jpg";
import chaf_event_4 from "@/public/assets/images/events/chaf_event_4.jpg";

interface Props {
  items: { text: string; href: string; icon: ReactNode }[];
}

const chafEvents = [chaf_event_1, chaf_event_2, chaf_event_3, chaf_event_4];

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
            <Add size={32} onClick={handleClose} className=" rotate-45" />
          </header>
          <ul>
            {items.map(({ href, text }) => (
              <li onClick={handleClose} key={text} className="my-4">
                <NavLink href={href} bold>
                  {text}
                </NavLink>
              </li>
            ))}

            <li className="block xs:hidden my-12">
              <RequestQuoteButton />
            </li>
          </ul>
        </section>
        <section className="grid grid-cols-2 p-8 gap-2">
          {chafEvents.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt="Latest Event"
              className=" rounded-xl h-full w-full object-cover"
            />
          ))}
        </section>
      </nav>
    </div>
  );
};

export default SideDrawer;

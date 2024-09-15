import React from "react";
import Wrapper from "../Generics/Wrapper";
import Logo from "../Generics/Logo";
import NavItems from "./NavItems";
import Button from "../Buttons/Button";
import { Menu } from "iconsax-react";
import MenuTrigger from "../Buttons/MenuTrigger";
import RequestQuoteButton from "../Buttons/RequestQuoteButton";

const TopNav = () => {
  return (
    <header>
      <Wrapper styles="flex items-center justify-between h-[100px]">
        <Logo withText />
        <NavItems />
        <div className="flex items-center gap-4">
          <div className="hidden xs:block">
            <RequestQuoteButton />
          </div>
          <MenuTrigger>
            <Menu
              size={32}
              variant="Bulk"
              className="text-primary-normal
            lg:hidden"
            />
          </MenuTrigger>
        </div>
      </Wrapper>
    </header>
  );
};

export default TopNav;

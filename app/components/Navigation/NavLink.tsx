"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface Props {
  href: string;
  bold?: boolean;
  disabled?: boolean;
}

const NavLink = ({
  href,
  bold,
  disabled,
  children,
}: Readonly<PropsWithChildren<Props>>) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${bold && "font-bold"} ${isActive && "text-primary-normal"} ${
        disabled ? "pointer-events-none" : "hover:text-primary-normal"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;

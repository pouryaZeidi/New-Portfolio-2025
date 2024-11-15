import Link from "next/link";
import React from "react";

interface NavbarItemsProps {
  href: string;
  txt: string;
  className?: string;
}

const NavbarItems: React.FC<NavbarItemsProps> = ({ href, txt, className }) => {
  return (
    <Link
      href={href}
      className={`text-textColor transition-transform transform hover:scale-110 hover:text-secondary hover:drop-shadow-[0_0_10px_rgb(234,179,8)] ${className}`}
    >
      {txt}
    </Link>
  );
};

export default NavbarItems;

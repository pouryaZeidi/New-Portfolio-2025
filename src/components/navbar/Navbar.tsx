import React, { useState } from "react";
import NavbarItems from "./NavbarItems";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-6 z-50 bg-opacity-90 backdrop-blur-md shadow-lg">
      <img
        src="/Logo.png"
        alt="Logo"
        className="w-[80px] bg-white rounded-full shadow-deep"
      />
    
      <div className="hidden sm:flex w-[70%] p-4 shadow-custombox bg-primary bg-opacity-70 border-tertiary border-[1px] backdrop-blur-2xl rounded-2xl items-center justify-between m-auto">
        <NavbarItems href={"/"} txt={"Home"} />
        <NavbarItems href={"/skills"} txt={"Skills"} />
        <NavbarItems href={"/blog"} txt={"Blog"} />
        <NavbarItems href={"/projects"} txt={"Projects"} />
        <NavbarItems href={"/aboutme"} txt={"About Me"} />
      </div>
      
      <div className="sm:hidden">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} color="rgb(245, 245, 245)" />
        {isOpen && (
          <div className="absolute top-24 right-6 w-[200px] h-[250px] z-50 bg-primary bg-opacity-90 border-tertiary border-[1px] backdrop-blur-2xl shadow-lg rounded-2xl flex flex-col justify-between items-center p-4">
            <NavbarItems href={"/skills"} txt={"Skills"} />
            <NavbarItems href={"/blog"} txt={"Blog"} />
            <NavbarItems href={"/projects"} txt={"Projects"} />
            <NavbarItems href={"/aboutme"} txt={"About Me"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

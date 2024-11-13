import React, { useState } from 'react';
import NavbarItems from './NavbarItems';
import { Spin as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-6 z-50">
      <img src="/Logo.png" alt="Logo" className="w-[80px] bg-white rounded-full" />
      <div className="hidden sm:flex w-[70%] p-4 shadow-custombox  bg-black bg-opacity-70 border-white border-[1px] backdrop-blur-2xl  rounded-2xl items-center justify-between m-auto">
        <NavbarItems href={'/'} txt={'About Me'} />
        <NavbarItems href={'/'} txt={'Projects Codes'} />
        <NavbarItems href={'/'} txt={'On Versel'} />
      </div>
      <div className="sm:hidden ">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} color='white'  />
        {isOpen && (
          <div className="absolute top-24 right-6 w-[150px] h-[200px] bg-black bg-opacity-90 border-white border-[1px] backdrop-blur-2xl shadow-lg rounded-2xl flex flex-col justify-between items-center p-4">
            <NavbarItems href={'/'} txt={'About Me'} />
            <NavbarItems href={'/'} txt={'Projects Codes'} />
            <NavbarItems href={'/'} txt={'On Versel'} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

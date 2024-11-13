import React from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative z-50 bg-gray-900 text-white p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo and Description */}
        <div className="mb-5 md:mb-0 md:w-1/3">
          <h1 className="text-2xl font-bold">
            <span className="text-yellow-300">Pourya</span> Zeydi
          </h1>
          <p className="mt-2 text-gray-400 text-sm">
            Frontend Developer | Passionate about building responsive and user-friendly web applications. Let’s connect and create something amazing!
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start md:items-center md:w-1/3">
          <h2 className="text-lg font-semibold mb-3">Follow Me</h2>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/pouryaZeidi"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-2xl transition-transform transform cursor-pointer hover:scale-110 hover:text-yellow-300"
            >
              <FaGithub className="group-hover:drop-shadow-[0_0_10px_rgb(234,179,8)]" />
            </Link>
            <Link
              href="https://www.instagram.com/mit_poriz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-2xl transition-transform transform hover:scale-110 hover:text-yellow-300"
            >
              <FaInstagram className="group-hover:drop-shadow-[0_0_10px_rgb(234,179,8)]" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/pourya-zeydi-b6b440260/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-2xl transition-transform transform hover:scale-110 hover:text-yellow-300"
            >
              <FaLinkedin className="group-hover:drop-shadow-[0_0_10px_rgb(234,179,8)]" />
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-5 md:mt-0 md:w-1/3">
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-gray-400 text-sm">
            Email:{" "}
            <Link
              href="mailto:zeidipourya@gmail.com"
              className="hover:text-yellow-300 transition-colors"
            >
              zeidipourya@gmail.com
            </Link>
          </p>
          <p className="text-gray-400 text-sm">Location: Antalya, Turkey</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10"></div>

      {/* Copyright */}
      <div className="mt-5 text-center text-sm text-gray-500">
        © 2024 Pourya Zeydi. All rights reserved. | Built with{" "}
        <span className="text-red-500">❤</span> using Next.js & Tailwind CSS
      </div>
    </footer>
  );
};

export default Footer;

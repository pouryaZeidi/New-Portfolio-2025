import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/PouryaCV.pdf";
    link.download = "PouryaCV.pdf";
    link.click();
  };

  return (
    <footer className="relative z-40 bg-primary text-textColor p-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          <div className="w-full md:w-1/3">
            <h1 className="text-2xl font-bold">
              <span className="text-secondary">Pourya</span> Zeydi
            </h1>
            <p className="mt-2 text-secondary text-sm leading-relaxed">
              Frontend Developer | Passionate about building responsive and user-friendly web applications. Let’s connect and create something amazing!
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <h2 className="text-lg font-semibold mb-3">Follow Me</h2>
            <div className="flex justify-center space-x-6">
              <Link
                href="https://github.com/pouryaZeidi"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-2xl transition-transform transform hover:scale-110 hover:text-secondary"
              >
                <FaGithub className="group-hover:drop-shadow-[0_0_10px_rgb(234,179,8)]" />
              </Link>
              <Link
                href="https://www.instagram.com/mit_poriz/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-2xl transition-transform transform hover:scale-110 hover:text-secondary"
              >
                <FaInstagram className="group-hover:drop-shadow-[0_0_10px_rgb(234,179,8)]" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/pourya-zeydi-b6b440260/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-2xl transition-transform transform hover:scale-110 hover:text-secondary"
              >
                <FaLinkedin className="group-hover:drop-shadow-[0_0_10px_rgb(234,179,8)]" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-right">
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <p className="text-tertiary text-sm">
              Email:{" "}
              <Link
                href="mailto:zeidipourya@gmail.com"
                className="hover:text-secondary transition-colors">
                zeidipourya@gmail.com
              </Link>
            </p>
            <p className="text-tertiary text-sm">Location: Antalya, Turkey</p>
          </div>
        </div>
        <div className="border-t border-tertiary mt-10"></div>
        <div className="mt-5 text-center">
        
        </div>
        <div className="mt-5 text-center text-sm text-secondary">
          © 2025 Pourya Zeydi. All rights reserved. | Built with{" "}
          <span className="text-red-500">❤</span> using Next.js & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;

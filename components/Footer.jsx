import React from "react";
import Image from "next/image";
import Link from "next/link";

// Using Next.js path alias to point directly to your app assets folder
import logo from "../assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 py-4 mt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Image
            src={logo}
            alt="Logo"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </div>

        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; {currentYear} PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

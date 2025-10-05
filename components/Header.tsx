"use client";

import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";


export default function Header() {
  return (
    <header className="">
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-20">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
            <img src={'/logo.svg'} alt="Logo" className="w-full h-full" />
          </div>
          <Link href={'/'} className="text-black font-bold text-sm lg:text-xl">
            AADI SR Production
          </Link>
          <div className="hidden lg:flex items-center space-x-8">
          </div>
        </div>
        <div className="flex items-center space-x-6">
          {/* Desktop Login Button & Mobile Menu Button 
          */}
          <Link href={'/Events'} className="text-white">
          Events
          </Link>
          <Link
            href={'/Login'}
            className=""
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-black text-white flex items-center space-x-2"
            >
              Login
            </HoverBorderGradient>
          </Link>


        </div>
      </nav >

    </header >
  );
};
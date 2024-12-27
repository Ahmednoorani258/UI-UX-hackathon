"use client";

import { useState, useEffect } from "react";

import { BsPersonExclamation } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartDropDown from "@/components/CartDropDown"


export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`z-10 shadow-sm w-full mx-auto px-4 sm:px-6 text-xl fixed md:px-16 lg:px-32 ${isScrolled?" bg-white/70 backdrop-blur-sm shadow-md":"bg-transparent"}`}>
      <div className=" flex items-center justify-between h-16">
        {/* Left: Logo and Navigation Links */}
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-gray-900">
          <Image src={"/logo.png"} alt="Logo" width={50} height={50}></Image>
        </Link>
        <div className="hidden md:flex items-center gap-12">
          <nav className="hidden md:flex gap-x-12 justify-center">
            <Link href="/" className="text-gray-800 hover:text-black">
              Home
            </Link>
            <Link href="/shop" className="text-gray-800 hover:text-black">
              Shop
            </Link>
            <Link href="/blog" className="text-gray-800 hover:text-black">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-black">
              Contact
            </Link>
          </nav>
        </div>

        {/* Right: Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/myaccount" className="text-gray-800 hover:text-black">
            <BsPersonExclamation size={20} />
          </Link>
          <Link href="/" className="text-gray-800 hover:text-black">
            <FiSearch size={20} />
          </Link>
          <Link href="/shop" className="text-gray-800 hover:text-black">
            <IoMdHeartEmpty size={20} />
          </Link>
            <Sheet>
            <SheetTrigger>
            <IoCartOutline size={20} className="text-gray-800 hover:text-black"/>
            </SheetTrigger>

            {/* Sheet Content */}
            <SheetContent className="p-4">
                <CartDropDown/>
            </SheetContent>
          </Sheet>
          
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            {/* Hamburger Icon to Open the Sheet */}
            <SheetTrigger>
              <RxHamburgerMenu size={20} />
            </SheetTrigger>

            {/* Sheet Content */}
            <SheetContent className="p-4">
              {/* Mobile Icons */}
              <div className="mt-6 flex items-center justify-around">
                <Link href="/myaccount" className="text-gray-800 hover:text-black">
                  <BsPersonExclamation size={24} />
                </Link>
                <Link href="/" className="text-gray-800 hover:text-black">
                  <FiSearch size={24} />
                </Link>
                <Link
                  href="/shop"
                  className="text-gray-800 hover:text-black"
                >
                  <IoMdHeartEmpty size={24} />
                </Link>
                <Link href="/cart" className="text-gray-800 hover:text-black">
                  <IoCartOutline size={24} />
                </Link>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-8 tex-lg mt-12 p-5">
                <Link
                  href="/"
                  className="text-lg font-medium text-gray-900 block"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="text-lg font-medium text-gray-900 block"
                >
                  Shop
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium text-gray-900 block"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium text-gray-900 block"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

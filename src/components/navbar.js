"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-12 lg:px-20 xl:px-48">
      {/* Link */}
      <div className="hidden md:flex justify-between w-1/3">
        {links.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Titi</span>
          <span className="bg-white w-12 h-8 rounded flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      <div className="hidden md:flex w-1/3 gap-4">
        <Link href="#">
          <Image src="/github.png" width={24} height={24} alt="1"></Image>
        </Link>
        <Link href="#">
          <Image src="/dribbble.png" width={24} height={24} alt="2"></Image>
        </Link>
        <Link href="#">
          <Image src="/instagram.png" width={24} height={24} alt="3"></Image>
        </Link>
        <Link href="#">
          <Image src="/facebook.png" width={24} height={24} alt="4"></Image>
        </Link>
        <Link href="#">
          <Image src="/pinterest.png" width={24} height={24} alt="5"></Image>
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" width={24} height={24} alt="6"></Image>
        </Link>
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu button */}
        <button
          className="w-10 h-8 flex flex-col justify-between  z-50 relative"
          onClick={() =>
            setOpen((prev) => {
              console.log(prev);
              return !prev;
            })
          }
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

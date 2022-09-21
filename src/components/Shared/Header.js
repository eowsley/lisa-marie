import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const { pathname } = router;
  const [isOpen, setIsOpen] = useState(false);
  const itemStyle =
    "playfair font-playfair text-black-600 hover:text-gray-600 px-3 py-2 text-md font-medium";
  return (
    <div>
      <nav className=" shadow-lg fixed w-full z-10 bg-white">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className="font-playfair text-3xl text-opera-mauve playfair font-playfair text-contact ">
                  <em> Lisa Marie Whitney</em>
                </h1>
              </div>
              <div className="hidden sm:block">
                <div className="ml-10 flex space-x-5 position-relative">
                  <Link
                    activeClass="Home"
                    to="home"
                    href="/"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="mr-5 "
                  >
                    <a className={`${itemStyle} ${pathname === '/'?'text-contact':''}`}>Impact</a>
                  </Link>
                  <Link
                    activeClass="about"
                    to="about"
                    href="/about"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="playfair font-playfair text-black-600 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium m-0"
                  >
                    <a className={`${itemStyle} ${pathname === '/about'?'text-contact':''}`}>About</a>
                  </Link>
                  <Link
                    activeClass="work"
                    to="work"
                    href="/work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="playfair font-playfair text-black-600 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium m-0"
                  >
                    <a className={`${itemStyle} ${pathname === '/work'?'text-contact':''}`}>Regain Your Joy</a>
                  </Link>

                  <Link
                    activeClass="Services"
                    to="services"
                    href="/services"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="playfair font-playfair text-black-600 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium m-0"
                  >
                    <a className={`${itemStyle} ${pathname === '/services'?'text-contact':''}`}>What They`&apos;`'re Saying</a>
                  </Link>

                  <Link
                    activeClass="contact"
                    to="contact"
                    href="/contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="playfair font-playfair text-black-600 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium m-0"
                  >
                    <a className={`${itemStyle} ${pathname === '/contact'?'text-contact':''}`}>Say Hello!</a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={clsx(
                "relative mx-auto z-50 flex items-center  h-10 w-24 px-4 justify-end sm:hidden tham tham-e-spin tham-w-8",
                { "tham-active": isOpen }
              )}
            >
              <div className="tham-box">
                <div className="tham-inner " />
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right">
              <Link href="/">
                <a className="playfair font-playfair hover:bg-medium-turquoise text-black hover:text-white block px-8 py-2 rounded-md text-base font-medium ">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="playfair font-playfair hover:bg-melon text-black hover:text-white block px-8 py-2 rounded-md text-base font-medium">
                  About
                </a>
              </Link>

              <Link href="/work">
                <a className="playfair font-playfair hover:bg-medium-turquoise text-black hover:text-white block px-8 py-2 rounded-md text-base font-medium">
                  Work
                </a>
              </Link>
              <Link href="/services">
                <a className="playfair font-playfair hover:bg-melon text-black hover:text-white block px-8 py-2 rounded-md text-base font-medium">
                  Services
                </a>
              </Link>

              <Link href="/contact">
                <a className="playfair font-playfair hover:bg-opera-mauve text-black hover:text-white block px-8 py-2 rounded-md text-base font-medium">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;

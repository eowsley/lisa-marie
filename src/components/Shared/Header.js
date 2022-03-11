import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className=" shadow-lg fixed w-full z-10 bg-white">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className="font-playfair text-2xl text-opera-mauve playfair font-playfair ">
                  Lisa Marie Whitney
                </h1>
              </div>
              <div className="hidden sm:block">
                <div className="ml-10 flex space-x-5 position-relative">
                  <Link
                    activeClass="Home"
                    to="home"
                    href="/Home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="mr-5 "
                  >
                    <a className="playfair font-playfair text-black-600 hover:text-gray-600 px-3 py-2 text-md font-medium ">
                      Home
                    </a>
                  </Link>
                  <Link
                    activeClass="about"
                    to="about"
                    href="/About"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="playfair font-playfair text-black-600 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium m-0"
                  >
                    <a className="playfair font-playfair text-black-600 hover:text-gray-600 px-3 py-2 text-md font-medium">
                      About
                    </a>
                  </Link>
                  <Link
                    activeClass="work"
                    to="work"
                    href="/Work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="playfair font-playfair text-black-600 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium m-0"
                  >
                    <a className="playfair font-playfair text-black-600 hover:text-gray-600 px-3 py-2 text-md font-medium">
                      Work
                    </a>
                  </Link>

                  <Link
                    activeClass="Services"
                    to="services"
                    href="/Services"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="playfair font-playfair text-black-600 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium m-0"
                  >
                    <a className="playfair font-playfair text-black-600 hover:text-gray-600 px-3 py-2 text-md font-medium">
                      Services
                    </a>
                  </Link>

                  <Link
                    activeClass="contact"
                    to="contact"
                    href="/Contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="playfair font-playfair text-black-600 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium m-0"
                  >
                    <a className="playfair font-playfair text-black-600 hover:text-gray-600 px-3 py-2 text-md font-medium">
                      Contact
                    </a>
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
              {
                isOpen &&         <div className="sm:hidden" id="mobile-menu">
                <div className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right">
                  <Link href="/Home">
                    <a className="playfair font-playfair hover:bg-medium-turquoise text-black hover:text-white block px-8 py-2 rounded-md text-base font-medium ">
                      Home
                    </a>
                  </Link>
                  <Link href="/About">
                    <a className="playfair font-playfair hover:bg-melon text-black hover:text-white block px-8 py-2 rounded-md text-base font-medium">
                      About
                    </a>
                  </Link>
      
                  <Link href="/Work">
                    <a className="playfair font-playfair hover:bg-medium-turquoise text-black hover:text-white block px-8 py-2 rounded-md text-base font-medium">
                      Work
                    </a>
                  </Link>
                  <Link href="/Services">
                    <a className="playfair font-playfair hover:bg-melon text-black hover:text-white block px-8 py-2 rounded-md text-base font-medium">
                      Services
                    </a>
                  </Link>
      
                  <Link href="/Contact">
                    <a className="playfair font-playfair hover:bg-opera-mauve text-black hover:text-white block px-8 py-2 rounded-md text-base font-medium">
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
              }

      </nav>
    </div>
  );
}

export default Header;

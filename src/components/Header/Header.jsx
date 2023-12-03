import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  //
  const Navbar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <nav className="w-full h-auto lg:px-24 md:px-16 sm:px-14 px-12 py-2 bg-slate-800 shadow-md">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* This is the nav logo and toggle button section */}
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link className="text-3xl text-orange-500 font-semibold tracking-[0.1rem]">
                Navbar
              </Link>
              {/* This is the nav toggle icon button section (later we will do here) */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaTimes
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  ) : (
                    <FaBars
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* This is the nav items section */}
          <div
            className={`flex justify-self-center md:block 
            ${navbar ? "block" : "hidden"}`}
          >
            <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
              {Navbar.map((item, index) => (
                <li
                  key={index}
                  to={item.link}
                  className="text-gray-400 text-[1.15rem] font-medium tracking-wide hover:text-gray-200 ease-out duration-700 cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
              <button className="bg-orange-500 py-1.5 px-4 rounded-md lg:ml-10 md:ml-8 sm:ml-0 ml-0 text-[1.1rem] font-normal text-white">
                Sign in
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

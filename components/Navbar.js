import React, { useState } from "react";
import LogoTitle from "./LogoTitle";
import MobileMenu from "./mobilemenu";
import DesktopMenu from "./DesktopMenu";


function MobileButton({setIsOpen}) {
  return (
    <button
      className="flex items-center px-6 py-1 border rounded text-gray-500 border-gray-600 hover:text-black hover:border-black"
      onClick={() => {
        setIsOpen(true);
      }}
    >
      <svg
        className=" w-9 h-9 sm:w-6 sm:h-6 fill-current"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path
          d="M1,2.5 L11,2.5 M1,6 L11,6 M1,9.5 L11,9.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function Navbar({ title }) {
  const links = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Projects",
      path: "/projects",
    },
    {
      text: "Profile",
      path: "/profile",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <header>
          <nav className="px-5 2xl:px-10 sm:px-5 flex justify-between py-1 w-full dark:bg-slate-900 bg-slate-100 md:space-x-8 fixed z-10 top-0">
            <LogoTitle title={title} />
            <div className="hidden lg:block" >
              <DesktopMenu links={links} />
            </div>
            <div className="block lg:hidden mt-1 flex space-x-4 px-1">
              <MobileButton setIsOpen={setIsOpen}/>
              {isOpen ? <MobileMenu close={() => setIsOpen(false)} /> : <></>}
            </div>
          </nav>
        </header>
      </div>
      <div>
        <h1>Hello!!!</h1>
      </div>
    </>
  );
}

export default Navbar;

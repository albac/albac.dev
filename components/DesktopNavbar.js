import React from "react";
import LogoTitle from "./LogoTitle";
import DesktopMenu from "./DesktopMenu";

function DesktopNavbar({ title }) {

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



  return (
    <>
      <div>
        <header>
          <nav className="px-1 2xl:px-10 sm:px-5 flex justify-between py-1 w-full dark:bg-slate-900 bg-slate-100 md:space-x-8 fixed z-10 top-0">
            <LogoTitle title={title} />
            <div>
              <DesktopMenu links={links} />
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

export default DesktopNavbar;

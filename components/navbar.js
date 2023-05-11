import { Auth } from "@aws-amplify/auth";
import React, { useState } from "react";
import Link from "next/link";
import LogoTitle from "./LogoTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useAuthenticator } from "@aws-amplify/ui-react";
import dynamic from "next/dynamic";

const MobileMenu = dynamic(() => import("./mobilemenu"));

function SignInButton() {
  return (
    <Link className="text-white" href="/signin">
      <button className="dark:bg-slate-900 bg-cyan-700 border dark:border-white dark:hover:bg-gray-800 hover:bg-teal-900 py-1 px-5 2xl:px-6 rounded">
        <div className="text-slate-100 lg:text-sm 2xl:text-lg xl:text-md text-xs font-sans font-normal">
          Sign In
        </div>
      </button>
    </Link>
  );
}
function Protected() {
  return (
    <button
      onClick={() => Auth.signOut()}
      className="dark:bg-slate-900 bg-cyan-700 border dark:border-white dark:hover:bg-gray-800 hover:bg-teal-900 py-1 px-5 2xl:px-6 rounded"
    >
      <div className="text-slate-100 lg:text-sm 2xl:text-lg xl:text-sm text-xs font-sans font-normal">
        Sign Out
      </div>
    </button>
  );
}

function Navbar({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useAuthenticator((context) => [context.user]);

  return (
    <div>
      <header>
        <nav className="px-1 2xl:px-10 sm:px-5 flex justify-between py-1 w-full dark:bg-slate-900 bg-slate-100 md:space-x-8 fixed z-10 top-0">
          <LogoTitle title={title} />
          <div className="hidden lg:block">
            <ul className="flex flex-row 2xl:space-x-16 lg:space-x-10 space-x-16 pr-10 pt-5 lg:pt-2">
              <li>
                <Link
                  href="/"
                  className="dark:text-slate-400 text-black font-light font-sans text-base 2xl:text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="dark:text-slate-400 text-black font-light font-sans text-base 2xl:text-lg"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="dark:text-slate-400 text-black font-light font-sans text-base 2xl:text-lg"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/abaldoceda/"
                  className="dark:text-slate-400 text-black font-light font-sans text-base 2xl:text-xl"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/albac"
                  className="dark:text-slate-400 text-black font-light font-sans text-base 2xl:text-xl"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/albac"
                  className="dark:text-slate-400 text-black font-light font-sans text-base 2xl:text-xl"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li>
                {user ? (
                  <Protected username={user.username} />
                ) : (
                  <SignInButton />
                )}
              </li>
            </ul>
          </div>
          <div className="block lg:hidden mt-1 flex space-x-4 px-1">
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
            {isOpen ? <MobileMenu close={() => setIsOpen(false)} /> : <></>}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

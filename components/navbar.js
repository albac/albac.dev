import { Auth } from "aws-amplify";
import React, { useState } from "react";
import Link from "next/link";
import LogoTitle from "./LogoTitle";
import MobileMenu from "./mobilemenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useAuthenticator } from "@aws-amplify/ui-react";

function SignInButton() {
  return (
    <Link className="text-white" href="/signin">
      <button className="dark:bg-slate-900 bg-cyan-700 border dark:border-white dark:hover:bg-gray-800 hover:bg-teal-900 py-1 px-5 rounded">
        <div className="text-slate-100 text-lg font-sans">Sign In</div>
      </button>
    </Link>
  );
}
function Protected() {
  return (
    <Link className="text-white" href="/signin">
      <button
        onClick={() => Auth.signOut()}
        className="dark:bg-slate-900 bg-cyan-700 border dark:border-white dark:hover:bg-gray-800 hover:bg-teal-900 py-1 px-5 rounded"
      >
        <div className="text-slate-100 text-lg font-sans">Sign Out</div>
      </button>
    </Link>
  );
}

function Navbar({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useAuthenticator((context) => [context.user]);

  return (
    <div>
      <header>
        <nav className="px-1 sm:px-5 flex justify-between py-1 w-full dark:bg-slate-900 bg-slate-100 fixed z-10 top-0">
          <LogoTitle title={title} />
          <div className="hidden lg:block">
            <ul className="flex flex-row space-x-16 pr-20 pt-5 lg:pt-2">
              <li>
                <Link href="/">
                  <a className="dark:text-slate-400 text-black font-light font-sans text-base">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="dark:text-slate-400 text-black font-light font-sans text-base">
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <a className="dark:text-slate-400 text-black font-light font-sans text-base">
                    Profile
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/abaldoceda/">
                  <a className="dark:text-slate-400 text-black font-light font-sans text-base">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/albac">
                  <a className="dark:text-slate-400 text-black font-light font-sans text-base">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/albac">
                  <a className="dark:text-slate-400 text-black font-light font-sans text-base">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
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
          <div className="block lg:hidden mt-1">
            <button
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-black hover:border-black"
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

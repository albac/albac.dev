import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoCloseOutline } from "react-icons/io5";
import { useAuthenticator } from "@aws-amplify/ui-react";
import dynamic from "next/dynamic";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin, faGithub);

const SignInButton = dynamic(() => import("../components/SignInButton"));

const SignOutButton = dynamic(() => import("../components/SignOutButton"));

function MobileMenu({ close }) {
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

  const [animation, setAnimation] = useState(false);

  const { user } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    setAnimation(true);
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth >= 640) {
        close();
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div>
      <div className="fixed inset-0 top-0 l-0 h-screen w-full backdrop-blur-sm bg-gray-500 bg-opacity-60"></div>
      <div className="fixed inset-0 top-0 l-0 p-5">
        <div
          className={`w-full bg-slate-100 rounded-xl p-5 transition-all ${
            animation ? "scale-100" : "scale-90"
          }`}
        >
          <div className="flex items-center justify-between">
            <IoCloseOutline
              className="w-12 h-12 sm:w-7 sm:h-7 hover:scale-110 transition-all cursor-pointer"
              onClick={close}
            />
          </div>
          <div className="mt-5 divide-y">
            {user ? <SignOutButton /> : <SignInButton />}
            {links.map(({ text, path }, index) => {
              return (
                <Link
                  href={path}
                  key={index}
                  className="block py-2 dark:text-slate-500 text-black font-light font-sans sm:text-base text-2xl"
                  onClick={close}
                >
                  {text}
                </Link>
              );
            })}
            <Link
              href="https://www.linkedin.com/in/abaldoceda/"
              className="dark:text-slate-500 block py-2 text-black font-light font-sans sm:text-base text-2xl"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Link>
            <Link
              href="https://github.com/albac"
              className="dark:text-slate-500 block py-2 text-black font-light font-sans text-base"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
            <Link
              href="https://twitter.com/albac"
              className="dark:text-slate-500 block py-2 text-black font-light font-sans text-base"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;

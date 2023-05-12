import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useAuthenticator } from "@aws-amplify/ui-react";
import SignInButton from "../components/SignInButton";
import SignOutButton from "../components/SignOutButton";

function DesktopMenu({ links }) {
  const { user } = useAuthenticator((context) => [context.user]);

  return (
    <>
      <ul className="flex flex-row 2xl:space-x-16 lg:space-x-10 space-x-16 pr-10 pt-5 lg:pt-2">
        {links.map(({ text, path }, index) => {
          return (
            <li key={index}>
              <Link
                href={path}
                index={index}
                className="dark:text-slate-400 text-black font-light font-sans text-base 2xl:text-lg"
              >
                {text}
              </Link>
            </li>
          );
        })}
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
          {user ? <SignOutButton username={user.username} /> : <SignInButton />}
        </li>
      </ul>
    </>
  );
}

export default DesktopMenu;

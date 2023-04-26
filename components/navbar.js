import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoAlbac from "../public/1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function navbar({ title }) {
  return (
    <div>
      <header>
        <nav className="px-5 flex justify-between py-1 w-full dark:bg-slate-900 bg-slate-100 fixed z-10 top-0">
          <div className="flex flex-row text-3xl lg:py-2 pl-2">
            <div
              style={{
                position: "relative",
                width: "68px",
                height: "68px",
              }}
            >
              <h1>
                <Image
                  alt="albac"
                  src={LogoAlbac}
                  layout="fill"
                  objectFit="cover"
                />
              </h1>
            </div>
            <h2>
              <div className="pl-5 pt-4 font-thin font-sans text-2xl lg:text-xl lg:pt-4">
                {title}
              </div>
            </h2>
          </div>
          <div>
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
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default navbar;

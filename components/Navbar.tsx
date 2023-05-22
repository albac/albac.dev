'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const links = [
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'Projects',
    path: '/projects',
  },
  {
    text: 'Profile',
    path: '/profile',
  },
];

export default function Navbar({ imageLogo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center gap-5">
      <div className="flex items-center">
        <Image
          src={imageLogo}
          alt="logo"
          width={80}
          height={80}
          unoptimized={true}
          priority={true}
        />
        {/* <h1> {title}</h1> */}
      </div>
      <button
        aria-label="open-menu"
        className={`${
          isOpen ? 'hidden' : 'flex flex-col gap-2 p-5'
        } lg:hidden min-w-[80px] max-h-[80px] border py-5 hover:opacity-70`}
        onClick={() => setIsOpen(true)}
      >
        <div className="h-[4px] w-full bg-slate-800 dark:bg-white"></div>
        <div className="h-[4px] w-full bg-slate-800 dark:bg-white"></div>
        <div className="h-[4px] w-full bg-slate-800 dark:bg-white"></div>
      </button>
      <ul
        className={`${
          isOpen
            ? 'flex dark:bg-white dark:text-slate-700 top-0 mt-5 w-[90%] mx-auto bg-slate-200 p-8 gap-4 shadow-sm'
            : 'hidden'
        } flex-col absolute w-full lg:bg-slate-100 lg:mx-0 lg:dark:bg-slate-900 lg:static  lg:flex lg:flex-row lg:justify-between lg:items-center lg:w-[40%]`}
      >
        <button
          aria-label="close-menu"
          className={`${
            isOpen ? 'block w-5 text-start dark:text-slate-400 text-slate-700' : 'hidden'
          } lg:hidden`}
          onClick={() => setIsOpen(false)}
        >
          <span className="text-4xl">x</span>
        </button>

        {links.map((link) => (
          <li key={link.path}>
            <Link
              className="font-medium dark:text-slate-400 text-slate-700 hover:text-sky-800 dark:hover:text-slate-300"
              onClick={() => setIsOpen(false)}
              href={link.path}
            >
              {link.text}
            </Link>
          </li>
        ))}
        {/* Links social */}
        <li>
          <Link
            href="https://www.linkedin.com/in/abaldoceda/"
            className=" dark:text-slate-400 text-black"
            aria-label="link to linkedin"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/albac"
            className="dark:text-slate-400 text-slate-700 hover:text-sky-800 dark:hover:text-slate-300"
            aria-label="link to github"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </Link>
        </li>
        <li className="w-2">
          <Link
            href="https://twitter.com/albac"
            className="dark:text-slate-400 text-slate-700 hover:text-sky-800 dark:hover:text-slate-300"
            aria-label="link to twitter"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

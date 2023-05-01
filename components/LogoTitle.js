import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoAlbac from "../public/1.png";

function LogoTitle({ title }) {
  return (
    <div className="flex flex-row text-3xl py-2 lg:py-2 pl-1 sm:pl-2">
      <Link href="/">
        <div
          className="hover:cursor-pointer"
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
      </Link>
      <h2>
        <div className="pl-5 pt-2 sm:pt-4 pr-2 font-thin font-sans text-2xl lg:text-xl lg:pt-4">
          {title}
        </div>
      </h2>
    </div>
  );
}

export default LogoTitle;

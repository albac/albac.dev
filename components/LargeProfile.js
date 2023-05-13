import React from "react";
import Image from "next/image";
import ProfilePic from "../public/albac_summer1.png";
import ProfileMessage from "./ProfileMessage";

function LargeProfile() {
  return (
    <div className="flex 2xl:mt-80 xl:mt-40 mt-24 sm:mt-10 lg:mt-36 h-screen 2xl:px-10 xl:px-5 lg:px-10 px-8 2xl:space-x-36 xl:space-x-16 lg:space-x-20 sm:space-x-8">
      <div className="justify-center dark:text-indigo-20 xl:mt-20 lg:mt-10 sm:mt-8 text-zinc-600 lg:pl-20 sm:px-8 space-y-2">
        <ProfileMessage />
      </div>
      <div className="xl:pr-20 lg:pr-24 sm:pr-10 lg:mt-20 mt-28 pr-5">
        <Image
          src={ProfilePic}
          width={820}
          height={900}
          alt="albac"
          className="rounded-full overflow-hidden"
        />
      </div>
    </div>
  );
}

export default LargeProfile;

import Image from "next/image";
import ProfilePic from "../public/albac_summer1.png";
import ProfileMessage from "./ProfileMessage";

export default function MobileProfile() {
  return (
    <div className="flex 2xl:mt-80 xl:mt-40 mt-20 sm:mt-14 lg:mt-36 h-screen 2xl:px-10 xl:px-5 lg:px-10 px-3 2xl:space-x-36 xl:space-x-16 lg:space-x-20 sm:space-x-8">
      <div className="justify-center dark:text-indigo-20 xl:mt-20 lg:mt-10 sm:mt-8 text-zinc-600 lg:pl-20 sm:px-8 sm:space-y-8 space-y-1 min-h">
        <Image
          src={ProfilePic}
          width={300}
          height={380}
          alt="albac"
          className="rounded-full p-16 overflow-hidden"
        />
        <ProfileMessage />
      </div>
    </div>
  );
}

import Image from "next/image";
import ProfilePic from "../public/albac_summer1.png";
import ProfileMessage from "./ProfileMessage";

export default function MobileProfile() {
  return (
    <div className="flex 2xl:mt-80 xl:mt-40 mt-24 sm:mt-14 lg:mt-36 h-screen 2xl:px-10 xl:px-5 lg:px-10 px-5 2xl:space-x-36 xl:space-x-16 lg:space-x-20 sm:space-x-8">
      <div className="justify-center dark:text-indigo-20 xl:mt-20 lg:mt-10 sm:mt-8 text-zinc-600 lg:pl-20 sm:px-8 sm:space-y-8 space-y-4 min-h">
        <Image
          src={ProfilePic}
          width={140}
          height={200}
          alt="albac"
          className="rounded-full p-4 mx-12 overflow-hidden"
        />
        <ProfileMessage />
      </div>
    </div>
  );
}

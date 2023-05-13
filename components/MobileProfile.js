import Image from "next/image";
import ProfilePic from "../public/albac_summer1_mobile.png";
import ProfileMessage from "./ProfileMessage";

export default function MobileProfile() {
  return (
    <div className="flex 2xl:mt-80 xl:mt-40 mt-12 sm:mt-14 lg:mt-36 h-screen 2xl:px-10 xl:px-5 lg:px-10 px-5 2xl:space-x-36 xl:space-x-16 lg:space-x-20 sm:space-x-8">
      <div className="justify-center dark:text-indigo-20 xl:mt-20 lg:mt-10 sm:mt-8 text-zinc-600 lg:pl-20 px-2 sm:px-8 sm:space-y-8 space-y-2 min-h-0">
    <div className="px-10 mt-10 py-4">
        <Image
          src={ProfilePic}
          alt="albac"
          className="rounded-full overflow-hidden px-10 py-5"
          priority={true}
        />
    </div>
        <ProfileMessage />
      </div>
    </div>
  );
}

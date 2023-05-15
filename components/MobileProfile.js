import Image from "next/image";
import ProfilePic from "../public/albac_summer1_mobile.png";

export default function MobileProfile() {
  return (
    <>
      <div className="px-16 mt-1 py-4">
        <Image
          src={ProfilePic}
          alt="albac"
          className="rounded-full overflow-hidden sm:px-22 px-8 py-6"
          priority={true}
        />
      </div>
    </>
  );
}

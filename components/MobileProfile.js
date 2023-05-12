import Image from "next/image";
import ProfilePic from "../public/albac_summer1.png";

export default function MobileProfile() {
  return (
    <>
      <Image
        src={ProfilePic}
        width={220}
        height={280}
        alt="albac"
        className="rounded-full overflow-hidden"
      />
    </>
  );
}

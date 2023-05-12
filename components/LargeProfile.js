import Image from "next/image";
import ProfilePic from "../public/albac_summer1.png";

export default function LargeProfile() {
  return (
    <>
      <Image
        src={ProfilePic}
        width={820}
        height={900}
        alt="albac"
        className="rounded-full overflow-hidden"
      />
    </>
  );
}

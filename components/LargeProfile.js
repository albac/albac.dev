import React from "react";
import Image from "next/image";
import ProfilePic from "../public/albac_summer1.png";

function LargeProfile() {
  return (
      <div className="xl:mt-2 lg:mt-2 mt-28">
        <Image
          src={ProfilePic}
          alt="albac"
          className="rounded-full overflow-hidden lg:py-28 lg:px-32"
        />
      </div>
  );
}

export default LargeProfile;

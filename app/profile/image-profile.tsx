"use client";

import Image from "next/image";
import ImageS3Url from "../../utils/ImageS3Url";

export default function ImageProfile() {

  const imageURL = ImageS3Url("albac_summer1_desktop.webp");

  return (
    <div className="hidden lg:block lg:w-[40%]">
      {
        imageURL ?
          <Image
            className="mx-auto rounded-full"
            src={imageURL}
            alt="alfredo-img"
            height={300}
            width={300}
            unoptimized={true}
          /> : <></>
      }
    </div>
  );
}

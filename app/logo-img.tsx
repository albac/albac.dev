"use client";

import Image from "next/image";
import ImageS3Url from "../utils/ImageS3Url";

export default function LogoImage() {

  const imageURL = ImageS3Url("albac_logo")

  return (
    <div className="flex items-center">
      <Image
        src={imageURL}
        alt="logo"
        width={80}
        height={80}
        unoptimized={true}
        priority={true}
      />
    </div>
  );
}

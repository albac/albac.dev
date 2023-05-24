"use client";

import Image from 'next/image';
import ImageS3Url from '../utils/ImageS3Url';


export default function HomePageImage() {

  const imageURL = ImageS3Url("albac_summer1_desktop.webp");

  return (
    <div className="w-[65%] md:w-[50%] lg:w-[35%]">
      <Image
        className="mx-auto w-[70%] rounded-full lg:max-w-[200px] lg:scale-125"
        src={imageURL}
        alt="alfredo-img"
        height={200}
        width={200}
        unoptimized={true}
        priority={true}
      />
    </div>
  );
}

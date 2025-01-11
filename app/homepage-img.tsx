"use client";

import { StorageImage } from "@aws-amplify/ui-react-storage";

export default function HomePageImage() {
  return (
    <div className="w-[65%] md:w-[50%] lg:w-[35%]">
      <StorageImage
        className="mx-auto w-[70%] rounded-full lg:max-w-[200px] lg:scale-125"
        path="public/albac_summer1_desktop.webp"
        alt="alfredo-img"
        height={200}
        width={200}
      />
    </div>
  );
}

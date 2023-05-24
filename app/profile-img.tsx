'use client';

import { Amplify } from 'aws-amplify';
import awsExports from "../src/aws-exports";

import Image from 'next/image';

Amplify.configure({ ...awsExports, ssr: true });

export default async function ProfileImage() {

  const imageURL = await Storage.get('albac_summer1_desktop.webp', {
    level: "public",
  });

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

'use client';

import { Amplify } from 'aws-amplify';
import awsExports from "../src/aws-exports";

import Image from 'next/image';
import ImageS3Url from '../utils/ImageS3Url';

Amplify.configure({ ...awsExports, ssr: true });

export default async function ProfileImage() {
  const alfredoImg = await ImageS3Url('albac_summer1_desktop.webp');

  return (
        <div className="w-[65%] md:w-[50%] lg:w-[35%]">
          <Image
            className="mx-auto w-[70%] rounded-full lg:max-w-[200px] lg:scale-125"
            src={alfredoImg}
            alt="alfredo-img"
            height={200}
            width={200}
            unoptimized={true}
            priority={true}
          />
        </div>
  );
}

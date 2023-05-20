import Image from "next/image";
import { AuthModeStrategyType } from "@aws-amplify/datastore";
import ProfileMessage from "../components/ProfileMessage";
//import LargeProfile from "../components/LargeProfile";

import { Amplify, Storage } from "aws-amplify";
import awsconfig from "../src/aws-exports";

Amplify.configure({
  ...awsconfig,
  ssr: true,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});

export default async function HomePage() {
  const src = await Storage.get("albac_summer1_desktop.png", {
    level: "public",
  });

  return (
    <div className="hidden lg:block mt-28">
      <div className="flex px-5 space-x-2 ">
        <div className="dark:text-indigo-20 lg:px-5 lg:mt-28 xl:mt-20 sm:mt-8 text-zinc-600 space-y-2">
          <ProfileMessage />
        </div>
        <div className="xl:mt-2 lg:mt-2 mt-28 lg:w-[90%]">
          <Image
            src={src}
            quality={100}
            unoptimized={true}
            blurDataURL={`data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48RXJyb3I+PENvZGU+SHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ8L0NvZGU+PE1lc3NhZ2U+VGhlIEhUVFAgdmVyc2lvbiBzcGVjaWZpZWQgaXMgbm90IHN1cHBvcnRlZC48L01lc3NhZ2U+PFJlcXVlc3RJZD43MkQ4NUVCQkMxQjg3QUVGPC9SZXF1ZXN0SWQ+PEhvc3RJZD5FdWxFc05sTWVLYnBHNStSVlc1bWFFTWlENzJNQ1pCTW8zbytGWmJuVnBYVVJrV1RQZkxoZC9iSWpoa0pUWDJ3czBOSVJQQVcyNGY1U3BwdUNEVkQwK25qQVkvbDNsVDQ8L0hvc3RJZD48L0Vycm9yPg==`}
            placeholder="blur"
            alt="albac"
            height="300"
            width="300"
            className="rounded-full overflow-hidden sm:px-22 px-8 py-6 w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

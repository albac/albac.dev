import { Storage } from "aws-amplify";
import Image from "next/image";

async function getImage() { }

async function LargeProfile() {
  const src = await Storage.get("albac_summer1_desktop.png", {
    level: "public",
  });

  return (
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
        {...props}
      />
    </div>
  );
}

export default LargeProfile;

import Link from "next/link";
import ImageS3 from "./ImageS3";

function LogoTitle({ title }) {
  return (
    <div className="flex flex-row text-3xl py-2 lg:py-1 xl:py-2 pl-1 sm:pl-2">
      <Link href="/">
        <div
          className="hover:cursor-pointer 2xl:w-20 2xl:h-20 lg:w-14 lg:h-14 md:w-14 md:h-14 sm:w-12 sm:h-12 w-16 h-16"
          style={{
            position: "relative",
          }}
        >
          <h1>
            <ImageS3
              src="albac_logo"
              alt="albac"
            />
          </h1>
        </div>
      </Link>
      <h2>
        <div className="pl-5 pt-2 sm:pt-4 pr-2 font-thin font-sans text-xl sm:text-xl lg:text-xl 2xl:text-2xl xl:pt-4 lg:pt-2">
          {title}
        </div>
      </h2>
    </div>
  );
}

export default LogoTitle;

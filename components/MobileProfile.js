import ImageS3 from "./ImageS3";

export default function MobileProfile() {
  return (
      <div className="px-16 mt-1 py-4">
        <ImageS3
          src="albac_summer1_mobile.png"
          alt="albac"
          className="rounded-full overflow-hidden sm:px-22 px-8 py-6 w-[434px] "
          priority={true}
          />
      </div>
  );
}
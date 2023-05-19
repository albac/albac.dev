import ImageS3 from "./ImageS3";

function LargeProfile() {
  return (
        <div className="xl:mt-2 lg:mt-2 mt-28">
          <ImageS3
            src="albac_summer1_mobile.png"
            alt="albac"
            className="rounded-full overflow-hidden sm:px-22 px-8 py-6 w-[434px] "
            priority={true}
          />
        </div>
  );
}

export default LargeProfile;

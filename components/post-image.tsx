import Image from "next/image";
import ImageS3Url from "../utils/ImageS3Url";

export default function PostImage({
  imagename = "albac_summer1_desktop.webp",
  heigh = "300",
  width = "300",
  alt = "alfredo-img",
}) {
  const imageURL = ImageS3Url(imagename);

  var heigh_n: number = +heigh;

  var width_n: number = +width;

  return imageURL ? (
    <Image
      className="mx-auto rounded-full"
      src={imageURL}
      alt={alt}
      height={heigh_n}
      width={width_n}
      unoptimized={true}
    />
  ) : (
    <></>
  );
}

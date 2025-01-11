import { Storage } from "aws-amplify";
import { useEffect, useState } from "react";

export default function ImageS3URL(src: string): string {
  const [imageURL, setImage] = useState("");

  // Put the function inside the useEffect
  useEffect(() => {
    const getUploadedImage = async () => {
      const file = await Storage.get(src, {
        level: "public",
      });
      setImage(file);
    };

    // call the function
    getUploadedImage()
      // catching error
      .catch(console.error);
  }, []);

  return imageURL;
}

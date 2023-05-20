import { Storage } from "aws-amplify";

export default async function ImageS3Url(name) {
  const imageURL = await Storage.get(name, {
    level: "public",
  });

  return imageURL;
}
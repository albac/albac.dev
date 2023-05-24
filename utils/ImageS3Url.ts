import { Amplify, withSSRContext, Storage } from "aws-amplify";
import awsExports from "../src/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });


export default async function ImageS3Url(name: string) {

  const imageURL = await Storage.get(name, {
    level: "public",
  });

  return imageURL;

}

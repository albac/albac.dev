import awsconfig from "../src/aws-exports";
import { Amplify } from "aws-amplify";
import { AuthModeStrategyType } from "@aws-amplify/datastore";

const configureAmplify = () => {
  awsconfig.oauth.redirectSignIn =
    process.env.NEXT_PUBLIC_OAUTH_SIGN_IN_URL || awsconfig.oauth.redirectSignIn;
  awsconfig.oauth.redirectSignOut =
    process.env.NEXT_PUBLIC_OAUTH_SIGN_OUT_URL ||
    awsconfig.oauth.redirectSignOut;

  Amplify.configure({
    ...awsconfig,
    ssr: true,
    DataStore: {
      authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
    },
  });
};

export default configureAmplify;

import { Authenticator } from '@aws-amplify/ui-react';
import awsconfig from '../src/aws-exports';
import { Amplify, AuthModeStrategyType } from 'aws-amplify';

const configureAmplify = () => {

  awsconfig.oauth.redirectSignIn = process.env.NEXT_PUBLIC_OAUTH_SIGN_IN_URL || awsconfig.oauth.redirectSignIn;
  awsconfig.oauth.redirectSignOut = process.env.NEXT_PUBLIC_OAUTH_SIGN_OUT_URL || awsconfig.oauth.redirectSignOut;

  Amplify.configure({
    ...awsconfig,
    ssr: true,
    DataStore: {
      authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
    },
  });
};

export default configureAmplify;


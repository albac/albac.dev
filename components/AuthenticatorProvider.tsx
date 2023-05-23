'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import awsconfig from '../src/aws-exports';
import { Amplify, AuthModeStrategyType } from 'aws-amplify';

if (process.env.USER_BRANCH === 'prod') {
  awsconfig.oauth.redirectSignIn = 'https://albac.dev/';
  awsconfig.oauth.redirectSignOut = 'https://albac.dev/';
} else if (process.env.USER_BRANCH === 'stage') {
  awsconfig.oauth.redirectSignIn = 'https://beta.albac.dev/';
  awsconfig.oauth.redirectSignOut = 'https://beta.albac.dev/';
} else {
  awsconfig.oauth.redirectSignIn = 'http://localhost:3000/';
  awsconfig.oauth.redirectSignOut = 'http://localhost:3000/';
}

Amplify.configure({
  ...awsconfig,
  ssr: true,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});

export default function AuthenticatorProvider({ children }) {
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
}

'use client';

import {
  Authenticator,
  defaultDarkModeOverride,
  Theme,
  ThemeProvider,
  useTheme,
  View,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';
import { Amplify, AuthModeStrategyType } from 'aws-amplify';
import awsconfig from '../../src/aws-exports';
import ImageS3 from '../../components/ImageS3';

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

export default function SigninPage() {
  const theme: Theme = {
    name: 'my-theme',
    overrides: [defaultDarkModeOverride],
  };

  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <div className="mx-32">
          <View textAlign="center" padding={tokens.space.large}>
            <ImageS3 alt="Amplify logo" src="albac_logo" />
          </View>
        </div>
      );
    },
  };

  return (
    <main className="bg-cover bg-accent-dark bg-slate-100 dark:bg-slate-900 ">
      <div className="mt-28 px-4 h-full w-screen text-xs">
        <Authenticator components={components}>
          {/* Typescript error */}
          <ThemeProvider theme={theme} colorMode="system">
            <div>Estas autenticado</div>
          </ThemeProvider>
        </Authenticator>
      </div>
    </main>
  );
}

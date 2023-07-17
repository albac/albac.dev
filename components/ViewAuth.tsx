'use client';

import React, { ReactNode } from 'react';
import {
  Authenticator,
  Theme,
  ThemeProvider,
  View,
  defaultDarkModeOverride,
  useTheme,
} from '@aws-amplify/ui-react';
import ImageS3 from './ImageS3';
import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';

export default function ViewAuth(props: {children: ReactNode}) {
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
    <Authenticator components={components}>
      <ThemeProvider theme={theme} colorMode="system">
        {props.children}
      </ThemeProvider>
    </Authenticator>
  );
}

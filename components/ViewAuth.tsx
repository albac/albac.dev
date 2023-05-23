'use client';

import {
  Authenticator,
  Theme,
  ThemeProvider,
  View,
  defaultDarkModeOverride,
  useTheme,
} from '@aws-amplify/ui-react';
import ImageS3 from './ImageS3';

export default function ViewAuth({ children }) {
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
        {children}
      </ThemeProvider>
    </Authenticator>
  );
}

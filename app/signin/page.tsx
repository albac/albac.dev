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
import ImageS3 from '../../components/ImageS3';

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

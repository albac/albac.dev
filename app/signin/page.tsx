'use client';

import { Amplify } from 'aws-amplify';
import {
  Authenticator,
  defaultDarkModeOverride,
  ThemeProvider,
  useTheme,
  View,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';

import awsExports from '../../src/aws-exports';
import ImageS3 from '../../components/ImageS3';
Amplify.configure(awsExports);

export default function EditBlogPage() {
  const theme = {
    name: 'my-theme',
    overrides: [defaultDarkModeOverride],
    tokens: {
      components: {
        textareafield: {
          optional: {
            rows: { value: '{20}' },
            size: { value: 'large' },
            resize: { value: 'vertical' },
          },
        },
      },
    },
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
    <main className="bg-cover bg-accent-dark dark:bg-black">
      <div className="mt-28 px-4 h-full w-screen text-xs">
        <Authenticator components={components}>
          {/* Typescript error */}
          <ThemeProvider theme={theme} colorMode="system" />
        </Authenticator>
      </div>
    </main>
  );
}

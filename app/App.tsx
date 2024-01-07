import React from 'react';
import '../styles/globals.css';
import configureAmplify from '../utils/configureAmplify';
import RootLayout from './layout';

configureAmplify();

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

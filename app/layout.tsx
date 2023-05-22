import { AuthModeStrategyType } from '@aws-amplify/datastore';
import { Amplify } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import ImageS3Url from '../utils/ImageS3Url';
import AuthenticatorProvider from '../components/AuthenticatorProvider';

Amplify.configure({
  ...awsconfig,
  ssr: true,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const imageLogo = await ImageS3Url('albac_logo');

  return (
    <html lang="en">
      <body className="h-screen dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-5 md:px-[3vw]">
        <AuthenticatorProvider>
          <header className="pt-5">
            <Navbar imageLogo={imageLogo} />
          </header>
          {children}
        </AuthenticatorProvider>
      </body>
    </html>
  );
}

import { AuthModeStrategyType } from '@aws-amplify/datastore';
import { Amplify } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import { ImageS3Url } from '../components/ImageS3';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

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
        <header className="pt-5">
          <Navbar imageLogo={imageLogo} />
        </header>
        {children}
      </body>
    </html>
  );
}

import Navbar from "../components/Navbar";
import awsconfig from "../src/aws-exports";
import { Amplify, AuthModeStrategyType } from "aws-amplify";
import "../styles/globals.css";
import AuthenticatorProvider from "../components/AuthenticatorProvider";

interface RootLayoutProps {
  children: React.ReactNode;
}

if (process.env.USER_BRANCH === "prod") {
  awsconfig.oauth.redirectSignIn = "https://albac.dev/";
  awsconfig.oauth.redirectSignOut = "https://albac.dev/";
} else if (process.env.USER_BRANCH === "stage") {
  awsconfig.oauth.redirectSignIn = "https://beta.albac.dev/";
  awsconfig.oauth.redirectSignOut = "https://beta.albac.dev/";
} else {
  awsconfig.oauth.redirectSignIn = "http://localhost:3000/";
  awsconfig.oauth.redirectSignOut = "http://localhost:3000/";
}

Amplify.configure({
  ...awsconfig,
  ssr: true,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="h-screen dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-5 md:px-[3vw]">
        <AuthenticatorProvider>
          <header className="pt-5">
            <Navbar />
          </header>
          {children}
          <footer className="text-center text-slate-600 dark:text-slate-400 p-4">
            <p>
              All rights reserved &copy; albac.dev {new Date().getFullYear()}{" "}
            </p>
          </footer>
        </AuthenticatorProvider>
      </body>
    </html>
  );
}

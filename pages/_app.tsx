import "../styles/globals.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "@aws-amplify/core";
import { AuthModeStrategyType } from "@aws-amplify/datastore";
import awsconfig from "../src/aws-exports";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above }

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

function MyApp({ Component, pageProps }: AppProps) {
  //console.log(process.env.USER_BRANCH)
  return (
    <div>
      <div className="h-screen dark:text-slate-300 bg-slate-100 dark:bg-slate-900">
        <div className="flex flex-col mx-auto tracking-tight">
          <div className="dark:bg-transparent">
            <Authenticator.Provider>
              <Component {...pageProps} />
            </Authenticator.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;

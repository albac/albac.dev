import "../styles/globals.css";
import { Amplify, AuthModeStrategyType } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above }
Amplify.configure({
    ...awsconfig,
    ssr: true,
    DataStore: {
        authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
    }
})

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <div className="h-screen dark:text-slate-300 bg-slate-100 dark:bg-slate-900">
                <div className="flex flex-col mx-auto tracking-tight">
                    <div className="dark:bg-transparent">
                        <Component {...pageProps} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyApp;

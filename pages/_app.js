import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above }

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <div className="h-screen dark:text-slate-300 dark:bg-slate-900 bg-white">
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

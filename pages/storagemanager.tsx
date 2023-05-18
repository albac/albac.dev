import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter/variable.css";
import {
  Authenticator,
  defaultDarkModeOverride,
  ThemeProvider,
  useTheme,
  View,
} from "@aws-amplify/ui-react";
import MainHeader from "../components/mainheader";
import Navbar from "../components/Navbar";
import { StorageManager as Uploader } from "@aws-amplify/ui-react-storage";

export default function StorageManager() {
  let title: string = "Storage Manager";

  const { user } = useAuthenticator((context) => [context.user]);


  return (
    <div className="bg-cover bg-accent-dark dark:bg-black">
      <MainHeader
        title="AlbacDev: Edit Blog Form"
        keywords="Storage Amplify"
        description="Form to update current available logs"
      />

      <main>
        <div>
          <Navbar title={title} />
        </div>
        <div className="mt-28 px-4 h-full w-screen text-xs">
          <Uploader
            accessLevel="public"
            acceptedFileTypes={["image/*"]}
            maxFileCount={5}
          />
        </div>
      </main>
    </div>
  );
}

import { Amplify } from "aws-amplify";
import {
  Authenticator,
  defaultDarkModeOverride,
  ThemeProvider,
  useTheme,
  View,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter/variable.css";
import { useState } from "react";
import LogoAlbac from "../public/1.png";
import Image from "next/image";
import MainHeader from "../components/mainheader";

import awsExports from "../src/aws-exports";
Amplify.configure(awsExports);

import dynamic from "next/dynamic";

const MobileNavbar = dynamic(() => import("../components/MobileNavbar"), {
  ssr: false,
});

const DesktopNavbar = dynamic(() => import("../components/DesktopNavbar"), {
  ssr: false,
});

export default function EditBlogPage() {
  const [errorMessage, setErrorMessage] = useState(false);

  const title = "SignIn"

  const theme = {
    name: "my-theme",
    overrides: [defaultDarkModeOverride],
    tokens: {
      components: {
        textareafield: {
          rows: { value: "{20}" },
          size: { value: "large" },
          resize: { value: "vertical" },
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
          <Image alt="Amplify logo" src={LogoAlbac} />
        </View>
        </div>
      );
    },
  };

  return (
    <div className="bg-cover bg-accent-dark dark:bg-black">
      <MainHeader
        title="AlbacDev: Edit Blog Form"
        description="Form to update current available logs"
      />

      <main>
        <div className="hidden lg:block">
          <DesktopNavbar title={title} />
        </div>
        <div className="block lg:hidden">
          <MobileNavbar title={title} />
        </div>
        <div className="mt-28 px-4 h-full w-screen text-xs">
          <Authenticator components={components}>
            <>{errorMessage && <p>Error: {errorMessage}</p>}</>
            <ThemeProvider theme={theme} colorMode="system" />
          </Authenticator>
        </div>
      </main>
    </div>
  );
}

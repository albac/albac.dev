import Head from "next/head";
import "@aws-amplify/ui-react/styles.css";
import { defaultDarkModeOverride, ThemeProvider } from "@aws-amplify/ui-react";
import NavBar from "../../components/navbar";
import "@fontsource/inter/variable.css";
import { useRouter } from "next/router";
import { NewPostsUpdateForm } from "../../components";
import { useState } from "react";

export default function EditBlogPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const router = useRouter();
  const { id } = router.query;

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

  return (
    <div className="bg-cover bg-accent-dark dark:bg-black">
      <Head>
        <title>albac: home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar title="Portfolio" />
        <div className="mt-28 px-8 h-full w-screen text-xs">
          <>{errorMessage && <p>Error: {errorMessage}</p>}</>
          <ThemeProvider theme={theme} colorMode="system">
            <NewPostsUpdateForm
              mode="Dark"
              id={id}
              onSuccess={() => router.push("/blog/" + id)}
              onError={(error) => {
                setErrorMessage(error);
              }}
            />
          </ThemeProvider>
        </div>
      </main>
    </div>
  );
}

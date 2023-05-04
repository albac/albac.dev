import Head from "next/head";
import NavBar from "../components/navbar";
import React, { useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

export default function Login() {
  const [user, setUser] = useState(null);
  const [customState, setCustomState] = useState(null);

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          setUser(data);
          break;
        case "signOut":
          setUser(null);
          break;
        case "customOAuthState":
          setCustomState(data);
      }
    });

    Auth.currentAuthenticatedUser()
      .then((currentUser) => setUser(currentUser))
      .catch(() => console.log("Not signed in"));

    return unsubscribe;
  }, []);

  return (
    <div className="bg-cover bg-accent-dark">
      <Head>
        <title>albac: Login Page</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar title="Login" />
        <div className="h-screen bg-slate-100 dark:bg-slate-900 scroll-smooth overflow-auto">
          <div className="flex flex-grow justify-between 2xl:mt-32 mt-10 h-screen space-x-4 sm:space-x-10 lg:space-x-4">
            <div className="flex-auto w-96 mt-20 dark:text-indigo-200 text-zinc-600 space-y-2 px-4 pr-10 text-sm lg:text-lg sm:text-md sm:px-10 lg:pr-32 2xl:pr-20 text-justify">
              <button onClick={() => Auth.federatedSignIn()}>
                Open Hosted UI
              </button>
              <button
                onClick={() =>
                  Auth.federatedSignIn({
                    provider: CognitoHostedUIIdentityProvider.Google,
                  })
                }
              >
                Open Google
              </button>
              <button onClick={() => Auth.signOut()}>Sign Out</button>

              <div>{user && user.getUsername()}</div>

              <p className="dark:text-indigo-200 text-lg sm:text-xl lg:text-2xl font-light">
                Hello, my name is Alfredo Baldoceda ..
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";

export default function AuthBtn({ setter }) {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  return (
    <>
      {authStatus && authStatus !== "authenticated" ? (
        <SignInButton setter={setter} />
      ) : (
        <SignOutButton setter={setter} />
      )}
    </>
  );
}

function SignInButton({ setter }) {
  return (
    <Link className="text-white" href="/signin" onClick={() => setter(false)}>
      <button className="dark:bg-slate-900 bg-cyan-700 border dark:border-white dark:hover:bg-gray-800 hover:bg-teal-900 py-1 px-5 2xl:px-6 rounded">
        <div className="text-slate-100 lg:text-sm 2xl:text-lg xl:text-sm text-xs font-sans font-normal">
          Sign In
        </div>
      </button>
    </Link>
  );
}

function SignOutButton({ setter }) {
  return (
    <button
      onClick={() => {
        setter(false);
        Auth.signOut();
      }}
      className="dark:bg-slate-900 bg-cyan-700 border dark:border-white dark:hover:bg-gray-800 hover:bg-teal-900 py-1 px-5 2xl:px-6 rounded"
    >
      <div className="text-slate-100 lg:text-sm 2xl:text-lg xl:text-sm text-xs font-sans font-normal">
        Sign Out
      </div>
    </button>
  );
}

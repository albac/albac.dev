'use client';

import Link from 'next/link';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

export default function AuthBtn() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  return <>{authStatus !== 'authenticated' ? <SignInButton /> : <SignOutButton />}</>;
}

function SignInButton() {
  return (
    <Link className="text-white" href="/signin">
      <button className="dark:bg-slate-900 bg-cyan-700 border dark:border-white dark:hover:bg-gray-800 hover:bg-teal-900 py-1 px-5 2xl:px-6 rounded">
        <div className="text-slate-100 lg:text-sm 2xl:text-lg xl:text-md text-md font-sans font-normal">
          Sign In
        </div>
      </button>
    </Link>
  );
}

function SignOutButton() {
  return (
    <button
      onClick={() => Auth.signOut()}
      className="dark:bg-slate-900 bg-cyan-700 border dark:border-white dark:hover:bg-gray-800 hover:bg-teal-900 py-1 px-5 2xl:px-6 rounded"
    >
      <div className="text-slate-100 lg:text-sm 2xl:text-lg xl:text-sm text-xs font-sans font-normal">
        Sign Out
      </div>
    </button>
  );
}

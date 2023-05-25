"use client";

import { useAuthenticator } from "@aws-amplify/ui-react";
import Link from "next/link";

export default function EditButton({ slug }) {
  const { user, authStatus } = useAuthenticator((context) => [
    context.authStatus,
  ]);
  return (
    <div className="border-b-2 2xl:mx-20 mx-5 border-gray-400 dark:bg-slate-900">
      {authStatus && authStatus === "authenticated" ? (
        <>
          <p>Welcome {user.username}! </p>
          <Link className="text-white" href={`/blog-edit/${slug}`}>
            <button className="dark:bg-slate-900 bg-cyan-700 border dark:border-white dark:hover:bg-gray-800 hover:bg-teal-900 py-2 px-6 rounded mb-4 mt-4">
              <div className="text-white text-lg font-sans">Edit</div>
            </button>
          </Link>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

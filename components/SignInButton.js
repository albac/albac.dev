import React from "react";
import Link from "next/link";

function SignInButton() {
  return (
    <Link className="text-white" href="/signin">
      <button className="dark:bg-slate-900 bg-cyan-700 border dark:border-white dark:hover:bg-gray-800 hover:bg-teal-900 py-1 px-5 2xl:px-6 rounded">
        <div className="text-slate-100 lg:text-sm 2xl:text-lg xl:text-md text-xs font-sans font-normal">
          Sign In
        </div>
      </button>
    </Link>
  );
}

export default SignInButton;

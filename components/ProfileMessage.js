import React from "react";

export default function ProfileMessage() {
  return (
    <div className="block xl:space-y-6 lg:space-y-4 space-y-2 2xl:text-2xl xl:text-xl lg:text-lg">
      <div>
        <p className="dark:text-indigo-200 lg:text-xl text-md sm:text-sm font-light">
          Welcome to my portfolio! I am Alfredo Baldoceda,
        </p>
      </div>
      <div>
        <p className="text-xl 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg">
          A cloud engineer consultant, software and infrastructure developer.
        </p>
      </div>
      <div>
        <p className="text-zinc-900 dark:text-white text-m sm:text-md font-thin text-justify md:text-left">
          Passionate about technology and its potential for innovation. I am
          constantly seeking new ways to leverage technology to drive innovation
          and push the boundaries of what is possible. Through my work, I hope
          to inspire others to do the same and help bring about a more
          innovative future. Thank you for visiting my portfolio, I hope to have
          the opportunity to work with you and help bring your ideas to life!
        </p>
      </div>
    </div>
  );
}

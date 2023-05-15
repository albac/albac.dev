import React from "react";
import MainHeader from "../components/mainheader";
import Navbar from "../components/Navbar";
import ProfileMessage from "../components/ProfileMessage";
import MobileProfile from "../components/MobileProfile";
import dynamic from "next/dynamic";

const LargeProfile = dynamic(() => import("../components/LargeProfile"));

export default function Home() {
  // console.log(process.versions)
  //var pjson = require("../package.json");
  //console.log(pjson.dependencies.next);

  return (
    <div className="bg-cover bg-accent-dark">
      <MainHeader
        title="Albac Dev - Cloud infrastructure Engineer Consultant & Full Stack Developer Portfolio"
        description="Albac Dev is the online portfolio for Alfredo Baldoceda, a Cloud Consultant Engineer, Full Stack $ Infrastructure Developer.Explore the projects and experience of a skilled developer, proficient in various technologies including React, Node.js, AWS, and more.  See examples of custom web applications, responsive designs, and scalable solutions. Contact Alfredo to discuss your next project and see how your ideas can come to life."
        keywords=""
      />
      <main>
        <div>
          <Navbar title="Portfolio" />
        </div>
        <div className="h-screen bg-slate-100 dark:bg-slate-900 scroll-smooth overflow-auto">
          <div className="flex 2xl:mt-80 xl:mt-40 mt-12 sm:mt-10 lg:mt-5 h-screen 2xl:px-10 xl:px-5 lg:px-1 px-5 2xl:space-x-36 xl:space-x-16 lg:space-x-10 sm:space-x-8">
            <div className="block lg:hidden">
              <MobileProfile />
              <div className="min-h-full">
                <ProfileMessage />
              </div>
            </div>
            <div className="hidden lg:block mt-28">
              <div className="flex px-5 space-x-2 ">
                <div className="dark:text-indigo-20 lg:px-5 lg:mt-28 xl:mt-20 sm:mt-8 text-zinc-600 space-y-2">
                  <ProfileMessage />
                </div>
                <LargeProfile />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

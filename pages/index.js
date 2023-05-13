import React from "react";
import MainHeader from "../components/mainheader";
import dynamic from "next/dynamic";

const MobileProfile = dynamic(() => import("../components/MobileProfile"));

const LargeProfile = dynamic(() => import("../components/LargeProfile"));

const MobileNavbar = dynamic(() => import("../components/MobileNavbar"));

const DesktopNavbar = dynamic(() => import("../components/DesktopNavbar"));

export default function Home() {
  // console.log(process.versions)
  var pjson = require("../package.json");
  console.log(pjson.dependencies.next);

  return (
    <div className="bg-cover bg-accent-dark">
      <MainHeader
        title="Albac Dev - Cloud infrastructure Engineer Consultant & Full Stack Developer Portfolio"
        description="Albac Dev is the online portfolio for Alfredo Baldoceda, a Cloud Consultant Engineer, Full Stack $ Infrastructure Developer.Explore the projects and experience of a skilled developer, proficient in various technologies including React, Node.js, AWS, and more.  See examples of custom web applications, responsive designs, and scalable solutions. Contact Alfredo to discuss your next project and see how your ideas can come to life."
        keywords=""
      />
      <main>
        <div className="hidden lg:block">
          <DesktopNavbar title="Portfolio" />
        </div>
        <div className="block lg:hidden">
          <MobileNavbar title="Portfolio" />
        </div>
        <div className="h-screen bg-slate-100 dark:bg-slate-900 scroll-smooth overflow-auto">
          <div className="block lg:hidden my-6 px-5">
            <MobileProfile />
          </div>
        <div className="hidden lg:block xl:pr-20 lg:pr-24 sm:pr-10 lg:mt-20 mt-28 pr-5">
          <LargeProfile />
        </div>
        </div>
      </main>
    </div>
  );
}

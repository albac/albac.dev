import NavBar from "../components/navbar";
import MainHeader from "../components/mainheader";
import dynamic from "next/dynamic";

const MobileProfile = dynamic(() => import('../components/MobileProfile'), {
  ssr: false,
})

const LargeProfile = dynamic(() => import('../components/LargeProfile'), {
  ssr: false,
})

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
        <NavBar
          title="Portfolio"
        />
        <div className="h-screen bg-slate-100 dark:bg-slate-900 scroll-smooth overflow-auto">
          <div className="flex 2xl:mt-80 xl:mt-40 mt-24 sm:mt-10 lg:mt-36 h-screen 2xl:px-10 xl:px-5 lg:px-10 px-8 2xl:space-x-36 xl:space-x-16 lg:space-x-20 sm:space-x-8">
            <div className="justify-center dark:text-indigo-20 xl:mt-20 lg:mt-10 sm:mt-8 text-zinc-600 lg:pl-20 sm:px-8 space-y-2">
              <div className="block lg:hidden my-6 px-20">
                <MobileProfile />
              </div>
              <div className="block xl:space-y-6 lg:space-y-4 space-y-2 2xl:text-2xl xl:text-xl lg:text-lg">
                <p className="dark:text-indigo-200 lg:text-xl text-md sm:text-sm font-light">
                  Welcome to my portfolio! I am Alfredo Baldoceda,
                </p>
                <p className="text-xl 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg">
                  A cloud engineer consultant, software and infrastructure
                  developer.
                </p>
                <p className="text-zinc-900 dark:text-white text-m sm:text-md font-thin">
                  Passionate about technology and its potential for innovation.
                  I am constantly seeking new ways to leverage technology to
                  drive innovation and push the boundaries of what is possible.
                  Through my work, I hope to inspire others to do the same and
                  help bring about a more innovative future. Thank you for
                  visiting my portfolio, I hope to have the opportunity to work
                  with you and help bring your ideas to life!
                </p>
              </div>
            </div>
            <div className="hidden lg:block xl:pr-20 lg:pr-24 sm:pr-10 lg:mt-20 mt-28 pr-5">
              <LargeProfile />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

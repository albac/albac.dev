import Head from "next/head";
import NavBar from "../components/navbar";
import Image from "next/image";
import ProfilePic from "../public/albac_summer1.png";

export default function Home() {
  // console.log(process.versions)
  var pjson = require("../package.json");
  console.log(pjson.dependencies.next);

  return (
    <div className="bg-cover bg-accent-dark">
      <Head>
        <title>
          Albac Dev - Cloud infrastructure Engineer Consultant & Full Stack
          Developer Portfolio
        </title>
        <meta
          name="description"
          content="Albac Dev is the online portfolio for Alfredo Baldoceda, a Cloud Consultant Engineer, Full Stack $ Infrastructure Developer. Explore the projects and experience of a skilled developer, proficient in various technologies including React, Node.js, AWS, and more. See examples of custom web applications, responsive designs, and scalable solutions. Contact Alfredo to discuss your next project and see how your ideas can come to life."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar title="Portfolio" />
        <div className="h-screen bg-slate-100 dark:bg-slate-900 scroll-smooth overflow-auto">
          <div className="flex flex-grow justify-between mt-24 sm:mt-8 lg:mt-36 h-screen px-8 lg:space-x-10 sm:space-x-8">
            <div className="dark:text-indigo-200 lg:mt-10 sm:mt-8 text-zinc-600 lg:pl-20 sm:pl-10 space-y-2">
              <div className="block lg:hidden my-6 px-20">
                <Image
                  src={ProfilePic}
                  width={220}
                  height={280}
                  alt="albac"
                  className="rounded-full overflow-hidden"
                />
              </div>
              <div>
                <p className="dark:text-indigo-200 lg:text-2xl text-md sm:text-sm font-light">
                  Hello, I am Alfredo Baldoceda
                </p>
                <p className="text-xl lg:text-4xl sm:text-lg">
                  Cloud engineer consultant,
                  <br />
                  software & infrastructure developer.
                </p>
                <p className="text-zinc-900 dark:text-white lg:text-xl text-m sm:text-md font-thin py-2">
                  As a systems engineer, I build Infrastructure as code and
                  integrate systems. <br />
                  I had been a system administrator, a lead DevOps engineer, a
                  software developer,
                  <br />a network administrator and a problem solver.
                  <br />
                  &quot;Inspired by technology, I only wish to promote
                  innovation&quot;
                </p>
              </div>
            </div>
            <div className="hidden lg:block lg:pr-28 sm:pr-10 mt-10 pr-5">
              <Image
                src={ProfilePic}
                width={320}
                height={380}
                alt="albac"
                className="rounded-full overflow-hidden"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

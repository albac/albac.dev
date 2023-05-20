import Image from "next/image";
import ProfilePic from "../public/albac_summer1.png";
import MainHeader from "../components/mainheader";
import Navbar from "../components/Navbar";


export default function Profile() {
  const title = 'Profile'
  return (
    <div className="bg-cover bg-accent-dark">
    <MainHeader title="Albac Dev Profile Bio" description="Bio and background" keywords="AWS Portfolio Bio" />
      <main>
        <div>
          <Navbar title={title} />
        </div>
        <div className="h-screen bg-slate-100 dark:bg-slate-900 scroll-smooth overflow-auto">
          <div className="flex flex-grow justify-between 2xl:mt-32 mt-10 h-screen space-x-4 sm:space-x-10 lg:space-x-4 2xl:space-x-1">
            <div className="hidden lg:block flex-auto w-40 pl-28 pt-28 2xl:pl-40">
              <Image
                src={ProfilePic}
                width={320}
                height={380}
                className="rounded-full overflow-hidden"
                alt="Profile picture: albac.dev"
              />
            </div>
            <div className="flex-auto w-96 mt-20 dark:text-indigo-200 text-zinc-600 space-y-2 px-4 pr-10 text-sm 2xl:text-xl lg:text-lg sm:text-md sm:px-10 lg:pr-32 2xl:pr-20 2xl:pl-2 text-justify">
              <p className="dark:text-indigo-200 text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-light">
                Hello, my name is Alfredo Baldoceda ..
              </p>

              <p className="text-zinc-900 dark:text-white font-thin">
                With years of experience in the tech industry, I have built a
                diverse skillset that allows me to take on any technical
                challenge.
              </p>

              <p className="text-zinc-900 dark:text-white text-m sm:text-md font-thin">
                As a systems engineer, I specialize in building infrastructure
                as code and integrating systems. I have also worked in various
                roles such as system administrator, lead DevOps engineer,
                software developer, network administrator and problem solver. My
                experience has given me a deep understanding of the complexities
                of the tech industry and the ability to navigate them with ease.
              </p>

              <p className="text-zinc-900 dark:text-white font-thin py-2 text-justify">
                Originally from Peru, I received my bachelor&#39;s degree in Systems
                Engineering. Before moving to the US in 2003, I already had
                experience working as a Unix/Linux systems and network
                administrator. In 2006, I started working with automation using
                Perl, and in 2010, I began working with configuration management
                using Puppet, transitioning completely to DevOps by 2013 when I
                moved to California to work for VMware.
              </p>
              <p className="text-zinc-900 dark:text-white font-thin py-2 text-justify">
                In 2015, I took a job as a lead DevOps engineer, focusing on
                AWS, Python, and containers. In 2018, I designed and implemented
                a full-stack application utilizing serverless AWS Amplify,
                Python, and Node.js.
              </p>
              <p className="text-zinc-900 dark:text-white font-thin py-2 text-justify">
                In 2022, I moved back to the East Coast and continue to look for
                new challenges. My new interest is in AI, and I have been
                training myself on data science. I have worked in different
                industries, such as healthcare, advertising, finance, and
                high-tech virtualization. I have been a system administrator, a
                lead DevOps engineer, a software developer, a network
                administrator, and a problem solver.
              </p>
              <p className="text-zinc-900 dark:text-white font-thin py-2 text-justify">
                Currently, I am working on serverless and edge runtime
                development projects.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
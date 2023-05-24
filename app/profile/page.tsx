import Image from "next/image";
import ImageProfile from "./image-profile";

export const metadata = {
  title: "Albac Dev Profile Bio",
  description: "Bio and background",
  keywords: ["AWS", "Portfolio", "Bio"],
};

export default async function ProfilePage() {
  //const alfredoImg = await ImageS3Url('albac_summer1_desktop.webp');

  return (
    <main className="xl:h-4/5 py-10 sm:py-4 sm:mt-5 lg:mt-auto flex flex-col lg:flex-row justify-center items-center">
      <ImageProfile />
      <div className="lg:w-[60%]">
        <p className="dark:text-indigo-200 text-sky-800 font-bold text-2xl sm:text-3xl">
          Hello,{" "}
          <span className="block lg:inline-block">my name is Alfredo</span>
        </p>

        <div className="space-y-3 mt-5 sm:text-lg">
          <p>
            With years of experience in the tech industry, I have built a
            diverse skillset that allows me to take on any technical challenge.
          </p>

          <p>
            As a systems engineer, I specialize in building infrastructure as
            code and integrating systems. I have also worked in various roles
            such as system administrator, lead DevOps engineer, software
            developer, network administrator and problem solver. My experience
            has given me a deep understanding of the complexities of the tech
            industry and the ability to navigate them with ease.
          </p>

          <p>
            Originally from Peru, I received my bachelor&#39;s degree in Systems
            Engineering. Before moving to the US in 2003, I already had
            experience working as a Unix/Linux systems and network
            administrator. In 2006, I started working with automation using
            Perl, and in 2010, I began working with configuration management
            using Puppet, transitioning completely to DevOps by 2013 when I
            moved to California to work for VMware.
          </p>
          <p>
            In 2015, I took a job as a lead DevOps engineer, focusing on AWS,
            Python, and containers. In 2018, I designed and implemented a
            full-stack application utilizing serverless AWS Amplify, Python, and
            Node.js.
          </p>
          <p>
            In 2022, I moved back to the East Coast and continue to look for new
            challenges. My new interest is in AI, and I have been training
            myself on data science. I have worked in different industries, such
            as healthcare, advertising, finance, and high-tech virtualization. I
            have been a system administrator, a lead DevOps engineer, a software
            developer, a network administrator, and a problem solver.
          </p>
          <p>
            Currently, I am working on serverless and edge runtime development
            projects.
          </p>
        </div>
      </div>
    </main>
  );
}

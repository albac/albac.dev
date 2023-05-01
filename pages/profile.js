import Head from "next/head";
import NavBar from "../components/navbar";
import Image from 'next/image'
import ProfilePic from "../public/albac_summer1.png"

export default function Profile() {
    return (
        <div className="bg-cover bg-accent-dark">
            <Head>
                <title>albac: home</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <NavBar title="Profile" />
                <div className="h-screen bg-slate-100 dark:bg-slate-900 scroll-smooth overflow-auto" >
                        <div className="flex flex-grow justify-between mt-10 h-screen space-x-4 sm:space-x-10">
                            <div className="hidden lg:block flex-auto w-40 pl-28 pt-28"> 
                               <Image src={ProfilePic} width={320} height={380} className="rounded-full overflow-hidden" />
                            </div>
                            <div className="flex-auto w-96 mt-20 dark:text-indigo-200 text-zinc-600 space-y-2 px-4 pr-1 sm:px-10 lg:pr-10">
                                <p className="dark:text-indigo-200 text-lg sm:text-xl lg:text-2xl font-light">
                                    Hello, I am Alfredo Baldoceda
                                </p>

                                <p className="text-zinc-900 dark:text-white text-lg sm:text-lg lg:text-xl font-thin py-2 pr-10 sm:pr-10 text-justify">
                                    Originally from Peru, where I received my bachellor degree on Systems engineering.<br/>
                                    Before moving to the US in 2003, I already had experience working as a Unix/Linux systems and network administrator.<br/>
                                    In 2006 I already started working doing automation with Perl and in 2010 I started working with configuration management, Puppet, 
                                    and transition as DevOps completely by 2013 when I moved to California to work for VMware.<br/>
                                    At 2015 I took a job as a lead DevOps and focus on AWS, python and containers.<br/>
                                    In 2018 I designed and implemented a full stack application utilizing serverless AWS Amplify, Python and nodejs.<br/>
                                    Moved back to the east coast on 2022 and continue looking for new challenges.
                                    My new interest is definitely AI and I have been training myself on data science.<br/>
                                    Have worked on different industries, like healthcare, advertisign, finance and high tech virtualization.
                                    I had been a system administror, a lead DevOps, a software developer, a network administrator and a problem solver.
                                </p>
                            </div>
                        </div>
                </div>
            </main>
        </div>
    );
}

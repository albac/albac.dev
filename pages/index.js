import Head from "next/head";
import NavBar from "../components/navbar";
import Image from 'next/image'
import ProfilePic from "../public/albac_summer1.png"


export default function Home() {

    // console.log(process.versions)
    var pjson = require('../package.json');
    console.log(pjson.dependencies.next);


    return (
        <div className="bg-cover bg-accent-dark">
            <Head>
                <title>Albac Dev - Cloud infrastructure Engineer Consultant & Full Stack Developer Portfolio</title>
                <meta
                    name="description"
                    content="Albac Dev is the online portfolio for Alfredo Baldoceda, a Cloud Consultant Engineer, Full Stack $ Infrastructure Developer. Explore the projects and experience of a skilled developer, proficient in various technologies including React, Node.js, AWS, and more. See examples of custom web applications, responsive designs, and scalable solutions. Contact Alfredo to discuss your next project and see how your ideas can come to life."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <NavBar title="Portfolio" />
                <div className="h-screen bg-slate-100 dark:bg-slate-900 scroll-smooth overflow-auto" >
                        <div className="flex flex-grow justify-between mt-16 h-screen space-x-10">
                            <div className="mt-36 dark:text-indigo-200 text-zinc-600 pl-20 space-y-2">
                                <p className="dark:text-indigo-200 text-2xl font-light">
                                    Hello, I am Alfredo Baldoceda
                                </p>
                                <p className="text-4xl">
                                    Cloud engineer consultant,<br/>software & infrastructure developer.
                                </p>
                                <p className="text-zinc-900 dark:text-white text-xl font-thin py-2">
                                    As a systems engineer, I build Infrastructure as code and integrate systems. <br/>
                                    I had been a system administrator, a lead DevOps engineer, a software developer,
                                    <br />a network administrator and a problem solver.
                                    <br />
                                    &quot;Inspired by technology, I only wish to promote innovation&quot;
                                </p>
                            </div>
                            <div className="pt-20 pr-28"> 
                               <Image src={ProfilePic} width={320} height={380} alt="albac" className="rounded-full overflow-hidden" />
                            </div>
                        </div>
                </div>
            </main>
        </div>
    );
}

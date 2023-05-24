import ImageS3 from '../components/ImageS3';

export const metadata = {
  title:
    'Albac Dev - Cloud infrastructure Engineer Consultant & Full Stack Developer Portfolio',
  description:
    'Albac Dev is the online portfolio for Alfredo Baldoceda, a Cloud Consultant Engineer, Full Stack $ Infrastructure Developer.Explore the projects and experience of a skilled developer, proficient in various technologies including React, Node.js, AWS, and more.  See examples of custom web applications, responsive designs, and scalable solutions. Contact Alfredo to discuss your next project and see how your ideas can come to life.',
  keyboard: [
    'react',
    'next',
    'aws',
    'amplify',
    'developer',
    'devops',
    'fullstack',
    'alfredo',
    'alfredo baldoceda',
  ],
};

export default async function HomePage() {
  return (
    <main className="flex items-center justify-center h-4/5">
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row py-5 w-full">
        <div className="w-[90%] md:w-[65%] mt-5 sm:mt-10 lg:max-w-[650px]">
          <p className="dark:text-indigo-200 text-sky-800 font-extrabold text-2xl sm:text-3xl lg:text-4xl">
            Welcome to my portfolio!{' '}
            <span className="block dark:text-white text-slate-700 font-bold text-base sm:text-lg lg:text-2xl mt-2 lg:mt-5">
              I am Alfredo Baldoceda, A cloud engineer consultant, software and
              infrastructure developer.
            </span>
          </p>
          <p className="dark:text-slate-400 text-slate-600 text-sm sm:text-base lg:text-lg mt-1 lg:mt-2">
            Passionate about technology and its potential for innovation. I am
            constantly seeking new ways to leverage technology to drive
            innovation and push the boundaries of what is possible. Through my
            work, I hope to inspire others to do the same and help bring about a
            more innovative future. Thank you for visiting my portfolio, I hope
            to have the opportunity to work with you and help bring your ideas
            to life!
          </p>
        </div>
        <div className="w-[65%] md:w-[50%] lg:w-[35%]">
          <ImageS3
            className="mx-auto w-[70%] rounded-full lg:max-w-[200px] lg:scale-125"
            src="albac_summer1_desktop.webp"
            alt="alfredo-img"
            height={200}
            width={200}
            unoptimized={true}
            priority={true}
          />
        </div>
      </div>
    </main>
  );
}

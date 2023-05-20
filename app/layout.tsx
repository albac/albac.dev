import Link from "next/link";
import Image from "next/image";
import ImageS3Url from "../components/ImageS3";
import "../styles/globals.css";


const links = [
  {
    text: "Home",
    path: "/",
    },
    {
      text: "Projects",
      path: "/projects",
    },
    {
      text: "Profile",
      path: "/profile",
    },
];

interface RootLayoutProps {
  children: React.ReactNode;
  title: string;
}
  
export default async function RootLayout({children, title}: RootLayoutProps ) {
    const ImageLogo = await ImageS3Url("albac_logo");

    return (
    <html lang="en">
      <body className="h-screen dark:text-slate-300 bg-slate-100 dark:bg-slate-900">
        <header className="px-5 pt-5">
          <nav className="flex justify-between items-center">
            <div>
                <Image src={ImageLogo} alt="logo" width={80} height={80} quality={100} />
                <h1>{ title}</h1>
            </div>
            <ul className="flex justify-between w-[30%]">
              {links.map(link => (
                <li>
                  <Link className="font-medium" key={link.path} href={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

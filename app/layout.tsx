import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import AuthenticatorProvider from "../components/AuthenticatorProvider";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <title>Alfredo's Portfolio</title>
      </Head>
      <body className="h-screen dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-5 md:px-[3vw]">
        <AuthenticatorProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthenticatorProvider>
      </body>
    </html>
  );
}

export default RootLayout;

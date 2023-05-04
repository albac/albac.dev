import Head from "next/head";

function MainHeader({ title, description, keywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/albacdevlogo.ico" />
    </Head>
  );
}

export default MainHeader;

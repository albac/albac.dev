import Head from "next/head";
import { format, parseISO } from "date-fns";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getAllPosts } from "../../lib/data";
import NavBar from "../../components/navbar";

export default function BlogPage({ title, date, content }) {
  return (
    <div className="flex max-h-fit bg-slate-50 dark:bg-black pt-3">
      <Head>
        <title>albac: {title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar title={title} />
        <div className="container dark:bg-black mt-28 ml-24">
          <div className="border-b-2 border-gray-400">
            <h2 className="dark:text-white text-3xl font-bold">{title}</h2>
            <div className="text-sm text-gray-600 dark:text-gray-200 mt-4">
              {format(parseISO(date), "MMMM do, uuu")}
            </div>
          </div>
          <article className="prose dark:prose-invert prose-pre:bg-slate-800 prose-img:rounded text-slate-600 dark:text-slate-300 font-light font-sans">
            <MDXRemote {...content} />
          </article>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  // console.log(context);
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.slug === params.slug);
  // console.log(data, content);
  const mdxSource = await serialize(content);

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

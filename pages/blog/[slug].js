import Head from "next/head";
import { withSSRContext } from 'aws-amplify'
import { Posts } from '../../src/models';
import { format, parseISO } from "date-fns";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import NavBar from "../../components/navbar";
import matter from "gray-matter";
import { useRouter } from 'next/router'

export default function BlogPage({ title, date, content }) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
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
  const { DataStore } = withSSRContext(context)
  const { params } = context;
  const { slug } = params
  const post = await DataStore.query(Posts, slug)
  const { data, content } = matter(post.content)
  console.log(data, content);
  const mdxSource = await serialize(content);

  return {
    props: {
      ...data,
      date: post.createdAt,
      content: mdxSource,
    },
    revalidate: 60
  };
}

export async function getStaticPaths(context) {
  const { DataStore } = withSSRContext(context)
  const posts = await DataStore.query(Posts)
  const paths = posts.map(post => ({ params: { slug: post.id }}))
  return {
    paths,
    fallback: false,
  };
}

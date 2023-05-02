import Head from "next/head";
import Link from "next/link";
import { withSSRContext } from "aws-amplify";
import { Posts } from "../../src/models";
import { format, parseISO } from "date-fns";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import NavBar from "../../components/navbar";
import matter from "gray-matter";
import { useRouter } from "next/router";

export default function BlogPage({ slug, title, date, content }) {
  return (
    <div className="flex max-h-fit bg-slate-50 dark:bg-black pt-3">
      <Head>
        <title>albac: {title}</title>
        <meta name="description" content={title} />
        <meta
          name="keywords"
          content="nextjs, nodejs, website, amplify, aws, cloud, AWS Amplify, CloudFormation, Serverless, GraphQL, AppSync, DynamoDB, S3 bucket, Mobile app development, Cross-platform development, AWS services, Backend development, Frontend development, Full-stack development, Amplify CLI, Continuous deployment, Git-based workflow"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="dark:bg-black bg-slate-100">
          <NavBar title={title} />
          <div className="flex flex-col 2xl:mx-90 xl:mx-72 lg:mx-40 md:mx-36 sm:mx-20 dark:bg-black mt-20 sm:mt-28">
            <div className="border-b-2 mx-5 border-gray-400 dark:bg-black">
              <Link className="text-white" href={`/blog-edit/${slug}`}>
                <button className="bg-cyan-700 hover:bg-teal-900 py-2 px-6 rounded mb-4 mt-4">
                  <div className="text-white font-sans font-bold">Edit</div>
                </button>
              </Link>
            </div>
            <div className="mx-5">
              <h2 className="dark:text-white text-3xl mt-8 font-bold">
                {title}
              </h2>
              <div className="text-sm text-gray-600 dark:text-gray-200 mt-4">
                Published {format(parseISO(date), "MMMM do, uuu")}
              </div>
              <article
                className="
    prose dark:prose-invert
    prose-a:text-blue-600 
    prose-a:font-light
    prose-a:italic
    prose-pre:bg-slate-800
    prose-img:rounded
    xl:prose-pre:prose-md
    lg:prose-pre:prose-sm
    xl:prose-xl
    lg:prose-lg
    prose-xl
    max-w-sm
    sm:max-w-lg
    md:max-w-2xl
    lg:max-w-3xl
    xl:max-w-5xl
    2xl:max-w-7xl
    lg:prose-img:max-w-5xl
    pt-6 text-slate-600 dark:text-slate-300 font-light font-sans"
              >
                <MDXRemote {...content} />
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  // console.log(context);
  const { DataStore } = withSSRContext(context);
  const { params } = context;
  const { slug } = params;
  const post = await DataStore.query(Posts, slug);
  const { data, content } = matter(post.content);
  console.log(data, content);
  const mdxSource = await serialize(content);

  return {
    props: {
      ...data,
      date: post.createdAt,
      content: mdxSource,
      slug: post.id,
    },
    revalidate: 60 * 60,
  };
}

export async function getStaticPaths(context) {
  const { DataStore } = withSSRContext(context);
  const posts = await DataStore.query(Posts);
  const paths = posts.map((post) => ({ params: { slug: post.id } }));
  return {
    paths,
    fallback: true,
  };
}

import Link from "next/link";
import { withSSRContext } from "aws-amplify";
import { Posts } from "../../src/models";
import { format, parseISO } from "date-fns";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import MainHeader from "../../components/mainheader";
import { useRouter } from "next/router";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Navbar from "../../components/Navbar";


export default function BlogPage({ title, date, content }) {
  const { user } = useAuthenticator((context) => [context.user]);

  const router = useRouter();
  const { slug } = router.query;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex max-h-fit bg-slate-50 dark:bg-slate-900 pt-3">
      <MainHeader
        title={"AlbacDev: " + title}
        description={title}
        keywords="nextjs, nodejs, website, amplify, aws, cloud, AWS Amplify, CloudFormation, Serverless, GraphQL, AppSync, DynamoDB, S3 bucket, Mobile app development, Cross-platform development, AWS services, Backend development, Frontend development, Full-stack development, Amplify CLI, Continuous deployment, Git-based workflow"
      />

      <main>
        <div className="dark:bg-slate-900 bg-slate-50">
          <div>
            <Navbar title={title} />
          </div>
          <div className="flex flex-col 2xl:mx-92 xl:mx-72 lg:mx-60 md:mx-36 sm:mx-20 dark:bg-slate-900 mt-20 sm:mt-28">
            <div className="border-b-2 2xl:mx-20 mx-5 border-gray-400 dark:bg-slate-900">
              {user ? (
                <>
                  <p>Welcome {user.username}! </p>
                  <Link className="text-white" href={`/blog-edit/${slug}`}>
                    <button className="dark:bg-slate-900 bg-cyan-700 border dark:border-white dark:hover:bg-gray-800 hover:bg-teal-900 py-2 px-6 rounded mb-4 mt-4">
                      <div className="text-white text-lg font-sans">Edit</div>
                    </button>
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="2xl:mx-20 mx-5">
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
    prose-hr:border-gray-300
    prose-img:rounded
    xl:prose-pre:prose-md
    lg:prose-pre:prose-sm
    xl:prose-lg
    lg:prose-base
    2xl:prose-xl
    prose-xl
    max-w-sm
    sm:max-w-lg
    md:max-w-xl
    lg:max-w-2xl
    xl:max-w-4xl
    2xl:max-w-4xl
    lg:prose-img:max-w-2xl
    xl:prose-img:max-2-3xl
    2xl:prose-img:max-w-4xl
    pt-6 text-slate-700 dark:text-slate-300 font-light font-sans"
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
  const mdxSource = await serialize(post.content);

  return {
    props: {
      date: post.createdAt,
      title: post.title,
      content: mdxSource,
    },
    revalidate: 60 * 30,
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

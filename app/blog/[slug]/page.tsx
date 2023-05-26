import { Amplify, withSSRContext } from "aws-amplify";
import { serializeModel } from "@aws-amplify/datastore/ssr";
import { serialize } from "next-mdx-remote/serialize";
import { Posts } from "../../../src/models";
import { format, parseISO } from "date-fns";
import EditButton from "./EditButton";
import MdxToHtml from "./MdxToHtml";
import { headers } from 'next/headers';

import awsconfig from "../../../src/aws-exports";

Amplify.configure({ ...awsconfig, ssr: true });


  interface PostProps {
    date: string,
    title: string,
    content: any,
  }

  interface DataProps {
    createdAt: string,
    title: string,
    content: any,
  }

export const revalidate = 30;

export default async function SlugPage({ params }) {

  const { slug } = params;

 // Construct a req object & prepare an SSR enabled version of Amplify
  const req = {
    headers: {
      cookie: headers().get('cookie'),
    },
  };

  const SSR = withSSRContext({ req })

  const post: DataProps = await SSR.DataStore.query(Posts, slug);

  const mdxSource = await serialize(post.content);

  const PostData: PostProps = {
    date: post.createdAt,
    title: post.title,
    content: mdxSource,
  };

  const { date, title, content } = PostData;

  return (
    <div className="flex max-h-fit bg-slate-50 dark:bg-slate-900 pt-3">
      <main>
        <div className="dark:bg-slate-900 bg-slate-50">
          <div className="flex flex-col 2xl:mx-92 xl:mx-72 lg:mx-60 md:mx-36 sm:mx-20 dark:bg-slate-900 mt-20 sm:mt-28">
            <EditButton slug={slug} />
            <div className="2xl:mx-20 mx-5">
              <h2 className="dark:text-white text-3xl mt-8 font-bold">
                {title}
              </h2>
              <div className="text-sm text-gray-600 dark:text-gray-200 mt-4">
                Published {format(parseISO(date), "MMMM do, uuu")}
              </div>
              <MdxToHtml content={content} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import { Predicates, SortDirection } from "@aws-amplify/datastore";
import { Posts } from "../src/models";
import BlogListItem from "../components/BlogListItem";
import MainHeader from "../components/mainheader";
import { withSSRContext } from "aws-amplify";
import { serializeModel } from "@aws-amplify/datastore/ssr";
import Navbar from "../components/Navbar";


async function fetchPostsPublic(DataStore) {
  const posts = await DataStore.query(
    Posts,
    (c) => c.and((c) => [c.state.eq(true)]),
    {
      sort: (s) => s.updatedAt(SortDirection.DESCENDING),
    }
  );
  return posts;
}

async function fetchPostsPrivate(DataStore) {
  const posts = await DataStore.query(Posts, Predicates.ALL, {
    sort: (s) => s.updatedAt(SortDirection.DESCENDING),
  });
  return posts;
}

export async function getServerSideProps({ req }) {
  const { Auth, DataStore } = withSSRContext({ req });
  const user = await Auth.currentAuthenticatedUser().catch(() => null);

  const posts = user ? await fetchPostsPrivate(DataStore) : await fetchPostsPublic(DataStore);

  return {
    props: {
      posts: serializeModel(posts),
    },
  };
}

export default function Projects({ posts }) {

  return (
    <div className="bg-accent-dark">
      <MainHeader
        title="AlbacDev: Projects"
        description="Blogs posted by AlbacDev"
        keywords="Aws,amplify,s3,cognito,dynamodb,tailwind,nextjs,javascript,react"
      />
      <main>
        <div>
          <Navbar title="Projects" />
        </div>
        <div className="pt-20 pb-10 md:py-10 bg-slate-100 dark:bg-slate-900 scroll-smooth">
          <div className="flex justify-center flex-grow">
              <div className="space-y-10 2xl:space-y-16 mt-10 md:mt-20 w-[90%] sm:w-[60%] md:max-w-[950px]">
                {posts.map((item) => (
                  <BlogListItem key={item.id} {...item} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

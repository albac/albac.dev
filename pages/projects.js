import { Predicates, SortDirection } from "@aws-amplify/datastore";
import { Posts } from "../src/models";
import BlogListItem from "../components/BlogListItem";
import MainHeader from "../components/mainheader";
import { withSSRContext } from "aws-amplify";
import { serializeModel } from "@aws-amplify/datastore/ssr";
import dynamic from "next/dynamic";

const MobileNavbar = dynamic(() => import("../components/MobileNavbar"), {
  ssr: false,
});

const DesktopNavbar = dynamic(() => import("../components/DesktopNavbar"), {
  ssr: false,
});


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
        <div className="hidden lg:block">
          <DesktopNavbar title="Projects" />
        </div>
        <div className="block lg:hidden">
          <MobileNavbar title="Projects" />
        </div>
        <div className="mt-24 h-screen bg-slate-100 dark:bg-slate-900 bg-daytime dark:bg-hero overflow-auto scroll-smooth">
          <div className="flex justify-center flex-grow">
            <div className="flex px-5 sm:px-24 2xl:mx-64 xl:mx-44 lg:mx-28">
              <div className="space-y-10 mt-10 sm:mt-16 2xl:mt-20 2xl:space-y-16">
                {posts.map((item) => (
                  <BlogListItem key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

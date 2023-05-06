import { useState, useEffect } from "react";
import NavBar from "../components/navbar";
import { DataStore, Predicates, SortDirection } from "@aws-amplify/datastore";
import { Posts } from "../src/models";
import BlogListItem from "../components/BlogListItem";
import MainHeader from "../components/mainheader";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function Projects() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      if (!user) {
        const models = await DataStore.query(
          Posts,
          (c) => c.and((c) => [c.state.eq(true)]),
          {
            sort: (s) => s.updatedAt(SortDirection.DESCENDING),
          }
        );
        console.log(models);
        setPosts(models);

      } else {
        const models = await DataStore.query(Posts, Predicates.ALL, {
          sort: (s) => s.updatedAt(SortDirection.DESCENDING),
        });
        console.log(models);
        setPosts(models);
      }
    }

    const subscription = DataStore.observe(Posts).subscribe(() => fetchPosts());
    return () => subscription.unsubscribe();
  }, []);
  return (
    <div className="bg-accent-dark">
      <MainHeader
        title="AlbacDev: Projects"
        description="Blogs posted by AlbacDev"
        keywords="Aws,amplify,s3,cognito,dynamodb,tailwind,nextjs,javascript,react"
      />
      <main>
        <NavBar title="Projects" />
        <div className="mt-24 h-screen bg-slate-100 dark:bg-slate-900 bg-daytime dark:bg-hero overflow-auto scroll-smooth">
          <div className="flex justify-center flex-grow">
            <div className="flex px-3 sm:px-20 lg:mx-40">
              <div className="space-y-10 mt-10 ">
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

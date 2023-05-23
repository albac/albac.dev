import { withSSRContext } from 'aws-amplify';
import { serialize } from 'next-mdx-remote/serialize';
import { Posts } from '../../../src/models';
import Post from '../../../components/Post';

async function fetchPost(slug) {
  const { DataStore } = withSSRContext();
  const post = await DataStore.query(Posts, slug);
  const mdxSource = await serialize(post.content);

  return {
    date: post.createdAt,
    title: post.title,
    content: mdxSource,
    slug,
  };
}

export default async function SlugPage({ params }) {
  const { slug } = params;
  const post = await fetchPost(slug);
  return <Post {...post} />;
}

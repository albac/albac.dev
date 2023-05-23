'use client';

import { Predicates, SortDirection, withSSRContext } from 'aws-amplify';
import { Posts } from '../src/models';
import { useAuthenticator } from '@aws-amplify/ui-react';
import BlogListItem from '../components/BlogListItem';
import { useEffect, useState } from 'react';

async function fetchPostsPublic(DataStore) {
  const posts = await DataStore.query(Posts, (c) => c.and((c) => [c.state.eq(true)]), {
    sort: (s) => s.updatedAt(SortDirection.DESCENDING),
  });
  return posts;
}

async function fetchPostsPrivate(DataStore) {
  const posts = await DataStore.query(Posts, Predicates.ALL, {
    sort: (s) => s.updatedAt(SortDirection.DESCENDING),
  });
  return posts;
}

interface PostITem {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  summary: string;
  title: string;
}

export default function PostsComponent() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const { DataStore } = withSSRContext();
  const [posts, setPost] = useState<PostITem[]>([]);

  async function getPosts() {
    const posts =
      authStatus && authStatus === 'authenticated'
        ? await fetchPostsPrivate(DataStore)
        : await fetchPostsPublic(DataStore);

    setPost(posts);
  }

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>{posts.length ? posts.map((item) => <BlogListItem key={item.id} {...item} />) : <></>}</>
  );
}

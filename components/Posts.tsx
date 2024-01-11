'use client';

import { useEffect, useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import BlogListItem from './BlogListItem';
import { fetchPublicPosts, fetchPrivatePosts, getUserGroups } from '../utils/apiUtils';

interface PostItem {
  id: string;
  title: string;
  content: string;
  summary: string;
  state: boolean;
  createdAt: string;
  updatedAt: string;
}

interface PostsComponentProps {
  initialPosts?: PostItem[];
}

export default function PostsComponent({ initialPosts }: PostsComponentProps) {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [posts, setPosts] = useState<PostItem[]>(initialPosts || []);

  async function getPosts() {
    const userGroups = await getUserGroups();
    const isAdminOrEditor = userGroups.includes('Admin') || userGroups.includes('Editors');

    const fetchedPosts = isAdminOrEditor
      ? await fetchPrivatePosts()
      : await fetchPublicPosts();

    setPosts(fetchedPosts as PostItem[]);
  }

  useEffect(() => {
    if (!initialPosts || initialPosts.length === 0) {
      getPosts();
    }
  }, [authStatus]);

  return (
    <>
      {posts.length ? posts.map(item => <BlogListItem key={item.id} {...item} />) : <p>No posts available.</p>}
    </>
  );
}

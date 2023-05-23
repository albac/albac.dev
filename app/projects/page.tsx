import { Predicates, SortDirection } from 'aws-amplify';
import { Posts } from '../../src/models';

export const metadata = {
  title: 'AlbacDev: Projects',
  description: 'Blogs posted by AlbacDev',
  keywords: [
    'Aws',
    'amplify',
    's3',
    'cognito',
    'dynamodb',
    'tailwind',
    'nextjs',
    'javascript',
    'react',
  ],
};

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

export default function ProjectsPage() {
  return <div>Projects Page</div>;
}

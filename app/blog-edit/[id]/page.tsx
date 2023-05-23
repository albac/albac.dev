'use client';

import { useRouter } from 'next/router';
import NewPostsUpdateForm from '../../../components/NewPostsUpdateForm';
import ViewAuth from '../../../components/ViewAuth';

export default function EditPage({ params }) {
  const { id } = params;
  const router = useRouter();

  console.log(id);
  console.log(router);

  return (
    <ViewAuth>
      <main>
        <NewPostsUpdateForm mode="Dark" id={id} onSuccess={() => router.push('/blog/' + id)} />
      </main>
    </ViewAuth>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import NewPostsUpdateForm from '../../../components/NewPostsUpdateForm';
import ViewAuth from '../../../components/ViewAuth';

export default function EditPage({ params }) {
  const { id } = params;
  const router = useRouter();

  return (
    <ViewAuth>
      <main className="mt-28 px-8 h-full w-full bg-cover bg-accent-dark dark:bg-black">
        <NewPostsUpdateForm mode="Dark" id={id} onSuccess={() => router.push('/blog/' + id)} />
      </main>
    </ViewAuth>
  );
}

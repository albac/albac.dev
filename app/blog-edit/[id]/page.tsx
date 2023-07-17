'use client';

import { useRouter } from 'next/navigation';
import NewPostsUpdateForm from '../../../components/NewPostsUpdateForm';
import ViewAuth from '../../../components/ViewAuth';

type Params = {
  id: string;
};

type Props = {
  params: Params;
};


export default function EditPage({ params }: Props) {
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

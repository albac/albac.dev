'use client';

import { StorageManager as Uploader } from '@aws-amplify/ui-react-storage';
import ViewAuth from '../../components/ViewAuth';

export default function StorageManager() {
  return (
    <ViewAuth>
      <div className="mt-28 px-4 h-full w-screen text-xs">
        <Uploader accessLevel="public" acceptedFileTypes={['image/*']} maxFileCount={5} />
      </div>
    </ViewAuth>
  );
}

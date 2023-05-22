'use client';

import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter/variable.css";
import { StorageManager as Uploader } from "@aws-amplify/ui-react-storage";

export default function StorageManager() {

  return (
        <div className="mt-28 px-4 h-full w-screen text-xs">
          <Uploader
            accessLevel="public"
            acceptedFileTypes={["image/*"]}
            maxFileCount={5}
          />
        </div>
  );
}

"use client";

import { StorageImage } from "@aws-amplify/ui-react-storage";

export default function LogoImage() {
  return (
    <div className="flex items-center">
      <StorageImage
        alt="logo"
        path="public/albac_logo.png"
        width={80}
        height={80}
      />
    </div>
  );
}

import { Storage } from 'aws-amplify';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageS3({ src, alt, ...props }) {
  const [image, setImage] = useState('');

  const getUploadedImage = async () => {
    const file = await Storage.get(src, {
      level: 'public',
    });
    setImage(file);
  };

  useEffect(() => {
    getUploadedImage();
  }, []);

  return image ? (
    <Image src={image} unoptimized={true} alt={alt} height="250" width="250" {...props} />
  ) : (
    <></>
  );
}

import { Storage } from "aws-amplify";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function ImageS3({ src, alt,...props }) {
    const [image, setImage] = useState("");

    const getUploadedImage = async () => {
        const file = await Storage.get(src, {
            level: "public",
        });
        setImage(file);
    };

    if (image) {
        console.log("se cargó la imagen",src,image);
    }
    

    useEffect(() => {
        getUploadedImage();
    }, []);

    return (
        image && (
            <Image
                src={image}
                quality={100}
                unoptimized={true}
                blurDataURL={`data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48RXJyb3I+PENvZGU+SHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ8L0NvZGU+PE1lc3NhZ2U+VGhlIEhUVFAgdmVyc2lvbiBzcGVjaWZpZWQgaXMgbm90IHN1cHBvcnRlZC48L01lc3NhZ2U+PFJlcXVlc3RJZD43MkQ4NUVCQkMxQjg3QUVGPC9SZXF1ZXN0SWQ+PEhvc3RJZD5FdWxFc05sTWVLYnBHNStSVlc1bWFFTWlENzJNQ1pCTW8zbytGWmJuVnBYVVJrV1RQZkxoZC9iSWpoa0pUWDJ3czBOSVJQQVcyNGY1U3BwdUNEVkQwK25qQVkvbDNsVDQ8L0hvc3RJZD48L0Vycm9yPg==`}
                placeholder="blur"
                alt={alt}
                height="300"
                width="300"
                {...props}
            />
        )
    );
}

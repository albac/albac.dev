import { MDXRemote } from "next-mdx-remote";

export default function MdxToHtml({ content }) {
  return (
    <article
      className="
    prose dark:prose-invert
    prose-a:text-blue-600 
    prose-a:font-light
    prose-a:italic
    prose-pre:bg-slate-800
    prose-hr:border-gray-300
    prose-img:rounded
    xl:prose-pre:prose-md
    lg:prose-pre:prose-sm
    xl:prose-lg
    lg:prose-base
    2xl:prose-xl
    prose-xl
    max-w-sm
    sm:max-w-lg
    md:max-w-xl
    lg:max-w-2xl
    xl:max-w-4xl
    2xl:max-w-4xl
    lg:prose-img:max-w-2xl
    xl:prose-img:max-2-3xl
    2xl:prose-img:max-w-4xl
    pt-6 text-slate-700 dark:text-slate-300 font-light font-sans"
    >
      <MDXRemote {...content} />
    </article>
  );
}

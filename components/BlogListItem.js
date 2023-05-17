import Link from "next/link";
import { format, parseISO } from "date-fns";


function BlogListItem(item) {
  const slug = item.id;

  return (
    <div className="border font-light 2xl:space-y-6 space-y-2 dark:hover:border-slate-400 bg-slate-100/75 dark:bg-slate-800/75 dark:border-white/5 hover:border-white border-gray-400 rounded p-4 sm:p-8 lg:p-10 2xl:p-12 lg:px-12 xl:px-16 2xl:px-20">
      <div>
        <Link href={`/blog/${slug}`}>
          <button className="italic text-lg lg:text-xl 2xl:text-2xl text-rose-800 hover:text-rose-700 dark:hover:text-sky-400 dark:text-sky-600 font-semibold antialiased">
            {item.title}
          </button>
        </Link>
      </div>
      <div className="text-xs sm:text-base 2xl:text-base text-gray-800 dark:text-gray-200">
        Published {format(parseISO(item.createdAt), "MMMM do, uuu")} <br/>
        Last updated on {format(parseISO(item.updatedAt), "MMMM do, uuu")}
      </div>
      <p className="italic text-[14px] sm:text-base 2xl:text-xl xl:text-lg lg:text-lg font-sans dark:text-slate-400 text-indigo-900" >{item.summary}</p>

    </div>
  );
}

export default BlogListItem;

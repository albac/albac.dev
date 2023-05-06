import Link from "next/link";
import { format, parseISO } from "date-fns";


function BlogListItem(item) {
  const slug = item.id;

  return (
    <div className="border font-light space-y-2 hover:border-slate-400 dark:bg-slate-800 dark:border-white/5 border-black-400 rounded p-1 lg:p-4">
      <div>
        <Link href={`/blog/${slug}`}>
          <button className="text-lg lg:text-xl 2xl:text-2xl text-blue-600 hover:text-blue-500 dark:text-sky-400 font-semibold antialiased">
            {item.title}
          </button>
        </Link>
      </div>
      <div className="text-sm lg:text-xs 2xl:text-base text-gray-600 dark:text-gray-200">
        Published {format(parseISO(item.createdAt), "MMMM do, uuu")} <br/>
        Last updated on {format(parseISO(item.updatedAt), "MMMM do, uuu")}
      </div>
      <div className="italic text-base 2xl:text-xl xl-text-xl lg:text-md">{item.summary}</div>
    </div>
  );
}

export default BlogListItem;

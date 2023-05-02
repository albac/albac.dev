import Link from "next/link";
import { format, parseISO } from "date-fns";
import matter from "gray-matter";


function BlogListItem(item) {
  const slug = item.id;
  const { data } = matter(item.content);

  return (
    <div className="border font-light space-y-2 hover:border-slate-400 dark:bg-slate-800 dark:border-white/5 border-black-400 rounded p-1 lg:p-4">
      <div>
        <Link href={`/blog/${slug}`}>
          <button className="text-lg lg:text-2xl text-blue-600 hover:text-blue-500 dark:text-sky-400 font-semibold antialiased">
            {data.title}
          </button>
        </Link>
      </div>
      <div className="text-sm lg:text-base text-gray-600 dark:text-gray-200">
        Published {format(parseISO(item.createdAt), "MMMM do, uuu")} <br/>
        Last updated on {format(parseISO(item.updatedAt), "MMMM do, uuu")}
      </div>
      <div className="italic text-base lg:text-xl">{item.summary}</div>
    </div>
  );
}

export default BlogListItem;

import Link from 'next/link';
import { format, parseISO } from 'date-fns';

function BlogListItem({ id, title, createdAt, updatedAt, summary }) {
  const slug = id;

  return (
    <div className="border font-light 2xl:space-y-6 space-y-2 dark:hover:border-slate-400 bg-white dark:bg-slate-800/75 dark:border-white/5 hover:border-gray-400 border-gray-200 rounded p-4 sm:p-8 lg:p-10 2xl:p-12 lg:px-12 xl:px-16 2xl:px-20">
      <div>
        <Link href={`/blog/${slug}`}>
          <button className="italic text-start text-lg sm:text-[22px] 2xl:text-[26px] text-sky-800 hover:text-sky-950 dark:hover:text-sky-400 dark:text-sky-600 font-semibold antialiased">
            {title}
          </button>
        </Link>
      </div>
      <div className="text-xs sm:text-base 2xl:text-base text-gray-600 dark:text-gray-200">
        Published {format(parseISO(createdAt), 'MMMM do, uuu')} <br />
        Last updated on {format(parseISO(updatedAt), 'MMMM do, uuu')}
      </div>
      <p className="italic text-[14px] sm:text-base 2xl:text-xl xl:text-lg lg:text-lg font-sans dark:text-slate-400 text-gray-800">
        {summary}
      </p>
    </div>
  );
}

export default BlogListItem;

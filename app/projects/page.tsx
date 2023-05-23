import Posts from '../../components/Posts';

export const metadata = {
  title: 'AlbacDev: Projects',
  description: 'Blogs posted by AlbacDev',
  keywords: [
    'Aws',
    'amplify',
    's3',
    'cognito',
    'dynamodb',
    'tailwind',
    'nextjs',
    'javascript',
    'react',
  ],
};

export default async function ProjectsPage() {
  return (
    <div className="bg-accent-dark">
      <main>
        <div className="pt-20 pb-10 md:py-10 bg-slate-100 dark:bg-slate-900 scroll-smooth">
          <div className="flex justify-center flex-grow">
            <div className="space-y-10 2xl:space-y-16 mt-10 md:mt-20 w-[90%] sm:w-[60%] md:max-w-[950px]">
              <Posts />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import { MDXRemote } from "next-mdx-remote";
import getMdxData from "../../utils/getMdxData";
import MainHeader from "../../components/mainheader";

export default function PrivacyPolicy({ source }) {
    return (
        <div className="bg-slate-50 dark:bg-slate-900">
            <MainHeader
                title={"AlbacDev - PrivacyPolicy "}
                description={"privacy-policy"}
                keywords="privacy, policy, rules, order"
            />
            <main className="max-w-[100ch] mx-auto py-5">
                <article
                    className="prose dark:prose-invert
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
                    <MDXRemote {...source} />
                </article>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const { mdxSource } = await getMdxData({ mdxName: "privacy-policy" });

    return {
        props: {
            source: mdxSource,
        },
    };
}

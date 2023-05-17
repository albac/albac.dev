import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

export default async function getMdxData({ mdxName }) {
    const dir = "mdxfiles";
    const postFilePath = path.join(process.cwd(), `${dir}/${mdxName}.mdx`);
    const source = fs.readFileSync(postFilePath);

    // Puedes extraer la data opcionalmente
    // const {content, data} = matter(source);
    const { content } = matter(source);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        // scope: data
    });

    // return {mdxSource, data}
    return { mdxSource };
}

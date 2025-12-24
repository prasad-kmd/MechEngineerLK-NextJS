import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CodeBlockWithCopy } from "@/components/code-block-with-copy";
import { MathWithButtons } from "@/components/math-with-buttons";

export async function generateStaticParams() {
  const posts = await getAllPosts("projects");
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  try {
    const { meta, source } = await getPostBySlug(params.slug, "projects");

    return (
      <article className="prose prose-zinc mx-auto dark:prose-invert">
        <h1 className="font-heading">{meta.title}</h1>
        {meta.featuredImage && (
          <Image
            alt={meta.title}
            className="rounded-lg"
            height="450"
            src={meta.featuredImage}
            width="800"
          />
        )}
        <MDXRemote
          source={source}
          components={{
            pre: CodeBlockWithCopy,
            inlineMath: (props: any) => <MathWithButtons {...props} inline />,
            math: (props: any) => <MathWithButtons {...props} />,
          }}
        />
      </article>
    );
  } catch (error) {
    notFound();
  }
}

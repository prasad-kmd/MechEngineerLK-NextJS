import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CodeBlockWithCopy } from "@/components/code-block-with-copy";
import { MathWithButtons } from "@/components/math-with-buttons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export async function generateStaticParams() {
  const posts = await getAllPosts("blog");
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const { meta, source } = await getPostBySlug(params.slug, "blog");

    return (
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <article className="prose prose-zinc mx-auto dark:prose-invert">
            <h1 className="font-heading">{meta.title}</h1>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={meta.authorAvatar} />
                <AvatarFallback>{meta.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{meta.author}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(meta.date).toLocaleDateString()}
                  {meta.updated && ` (Updated ${new Date(meta.updated).toLocaleDateString()})`}
                  <span className="mx-2">•</span>
                  {meta.readingTime} min read
                </p>
              </div>
            </div>
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
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h2 className="text-lg font-semibold">Table of Contents</h2>
              {/* Table of Contents will go here */}
            </div>
          </aside>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

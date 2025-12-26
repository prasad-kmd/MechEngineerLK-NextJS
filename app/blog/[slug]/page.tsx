import { getPostData, getSortedPostsData } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import PostHeader from '@/components/mdx/post-header';
import ShareButtons from '@/components/blog/share-buttons';
import { useMDXComponents } from '@/mdx-components';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);
  const components = useMDXComponents({});
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const postUrl = `${baseUrl}/blog/${params.slug}`;

  return (
    <article className="container py-8 max-w-3xl mx-auto">
      <PostHeader
        title={post.title}
        author={post.author}
        date={post.date}
        tags={post.tags}
      />

      <div className="prose dark:prose-invert">
        <MDXRemote source={post.content} components={components} />
      </div>

      <ShareButtons
        title={post.title}
        text={post.summary}
        url={postUrl}
      />
    </article>
  );
}
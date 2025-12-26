import { getSortedPostsData } from '@/lib/posts';
import BlogClientPage from '@/components/blog/blog-client-page';

export default function BlogPage() {
  const posts = getSortedPostsData();

  return <BlogClientPage posts={posts} />;
}
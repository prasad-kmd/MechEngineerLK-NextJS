"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import BlogToolbar from '@/components/blog/blog-toolbar';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from '@/components/ui/pagination';
import { Card, CardContent } from '@/components/ui/card';
import { Post } from '@/lib/posts'; // Assuming Post type is exported from lib/posts

export default function BlogClientPage({ posts }: { posts: Post[] }) {
  const [view, setView] = useState('list');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState<{ type: 'tag' | 'category'; value: string }[]>([]);
  const postsPerPage = 6;

  const allTags = useMemo(() => Array.from(new Set(posts.flatMap(p => p.tags || []))), [posts]);
  const allCategories = useMemo(() => Array.from(new Set(posts.map(p => p.category).filter(Boolean))), [posts]);

  const filteredPosts = useMemo(() => {
    if (activeFilters.length === 0) {
      return posts;
    }
    return posts.filter(post => {
      return activeFilters.every(filter => {
        if (filter.type === 'tag') {
          return post.tags?.includes(filter.value);
        }
        if (filter.type === 'category') {
          return post.category === filter.value;
        }
        return true;
      });
    });
  }, [posts, activeFilters]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleFilterChange = (type: 'tag' | 'category', value: string) => {
    if (!activeFilters.some(f => f.type === type && f.value === value)) {
      setActiveFilters([...activeFilters, { type, value }]);
      setCurrentPage(1); // Reset to first page on filter change
    }
  };

  const handleRemoveFilter = (type: 'tag' | 'category', value: string) => {
    setActiveFilters(activeFilters.filter(f => !(f.type === type && f.value === value)));
    setCurrentPage(1); // Reset to first page on filter change
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <BlogToolbar
        onViewChange={setView}
        onFilterChange={handleFilterChange}
        tags={allTags}
        categories={allCategories}
        activeFilters={activeFilters}
        onRemoveFilter={handleRemoveFilter}
      />

      {currentPosts.length > 0 ? (
        <>
          <div className={`grid gap-8 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : ''}`}>
            {currentPosts.map((post) => (
              <article key={post.id} className={view === 'list' ? 'border-b pb-8' : 'border rounded-lg p-4'}>
                <h2 className="text-2xl font-bold mb-2">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground mb-4">{post.summary}</p>
                <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                  Read more
                </Link>
              </article>
            ))}
          </div>

          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(prev => Math.max(prev - 1, 1));
                  }}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(i + 1);
                    }}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(prev => Math.min(prev + 1, totalPages));
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      ) : (
        <Card>
          <CardContent className="text-center py-12">
            <h2 className="text-2xl font-bold">No Posts Found</h2>
            <p className="text-muted-foreground mt-2">
              Try adjusting your filters or check back later for new content.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
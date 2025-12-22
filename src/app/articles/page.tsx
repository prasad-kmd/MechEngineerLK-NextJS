"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutGrid, List } from "lucide-react";

export default function Articles() {
  const [posts, setPosts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState("list");
  const postsPerPage = 6;

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getAllPosts("blog");
      const articles = allPosts.filter((post: any) => post.category === "article");
      setPosts(articles);
    }
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="flex justify-between items-center mb-8">
        <div className="text-center flex-1">
          <h1 className="text-3xl font-bold font-heading sm:text-5xl">Articles</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            In-depth technical articles on mechanical engineering.
          </p>
        </div>
        <ToggleGroup type="single" value={view} onValueChange={(value) => setView(value || "list")}>
          <ToggleGroupItem value="list" aria-label="List view">
            <List className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="grid" aria-label="Grid view">
            <LayoutGrid className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className={`grid gap-8 ${view === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : ""}`}>
        {currentPosts.map((post: any) => (
          <Card key={post.slug} className={view === "list" ? "flex flex-col md:flex-row" : ""}>
            <Link href={`/blog/${post.slug}`} className={view === "list" ? "md:w-1/3" : ""}>
              <Image
                alt={post.title}
                className={`object-cover ${view === "list" ? "rounded-l-xl" : "rounded-t-xl"}`}
                height="310"
                src={post.featuredImage || "/placeholder.svg"}
                width="550"
              />
            </Link>
            <div className={view === "list" ? "md:w-2/3 flex flex-col" : ""}>
              <CardHeader>
                <Link href={`/blog/${post.slug}`}>
                  <CardTitle>{post.title}</CardTitle>
                </Link>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readingTime} min read</span>
                </div>
                <div>
                  {post.tags?.map((tag: string) => (
                    <span key={tag} className="text-sm text-muted-foreground mr-2">#{tag}</span>
                  ))}
                </div>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
                }}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === i + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(i + 1);
                  }}
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
                  setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

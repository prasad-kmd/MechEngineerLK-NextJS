import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default async function Projects() {
  const projects = await getAllPosts("projects");

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-heading sm:text-5xl">My Projects</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          A collection of my public engineering projects.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: any) => (
          <Card key={project.slug}>
            <Link href={`/projects/${project.slug}`}>
              <CardHeader>
                <Image
                  alt={project.title}
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                  height="310"
                  src={project.featuredImage || "/placeholder.svg"}
                  width="550"
                />
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.excerpt}</p>
              </CardContent>
            </Link>
            <CardFooter className="flex justify-between">
              <Link href={project.github} target="_blank" rel="noreferrer">
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              {project.liveDemo && (
                <Link href={project.liveDemo} target="_blank" rel="noreferrer">
                  <Button>Live Demo</Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

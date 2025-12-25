import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { RecentArticles } from "@/components/home/RecentArticles";
import { ServicesExpertise } from "@/components/home/ServicesExpertise";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
            John Engineer
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
            A Mechanical Engineering Professional Specializing in FEA, CAD, and Thermodynamics
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/portfolio">
              <Button size="lg">View Projects</Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="secondary">Read Articles</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Contact Me</Button>
            </Link>
          </div>
        </div>
      </section>

      <FeaturedProjects />
      <RecentArticles />
      <ServicesExpertise />
    </div>
  );
}

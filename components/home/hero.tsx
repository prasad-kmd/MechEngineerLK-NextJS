import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-repeat"></div>

      <div className="relative z-10 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold">
          Mechanical Engineer
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Designing, developing, and testing innovative mechanical devices and solutions.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/articles">Read Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

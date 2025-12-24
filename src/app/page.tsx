import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold font-heading tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Mechanical Engineer &amp; Innovator
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Designing, building, and analyzing the future of mechanical systems.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projects">
                  <Button>View Projects</Button>
                </Link>
                <Link href="/articles">
                   <Button variant="outline">Read Articles</Button>
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      {/* Placeholder for Featured Projects */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
          {/* Projects will be listed here */}
        </div>
      </section>
      {/* Placeholder for Latest Articles */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Articles</h2>
          {/* Articles will be listed here */}
        </div>
      </section>
    </div>
  );
}

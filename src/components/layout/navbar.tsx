import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              MechEngineerLK
            </span>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a
              href="/portfolio"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Portfolio
            </a>
            <a
              href="/blog"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Blog
            </a>
            <a
              href="/about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </a>
            <a
              href="/services"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Services
            </a>
            <a
              href="/contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* Theme Toggle will go here */}
        </div>
      </div>
    </header>
  );
}

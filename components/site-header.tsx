"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MainNav from "@/components/main-nav";
import MobileNav from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import SearchDialog from "@/components/search-dialog";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="material-icons-outlined text-2xl text-primary">
              engineering
            </span>
            <span className="font-bold text-lg">Mech Engineer LK</span>
          </Link>
          <MainNav />
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <span className="material-icons-outlined">search</span>
            </Button>
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </header>
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
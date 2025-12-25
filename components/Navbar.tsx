"use client";

import React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-16 max-w-screen-2xl mx-auto flex items-center justify-between">
        <a href="/" className="font-heading text-lg font-bold">
          MechEngineer.LK
        </a>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-md border"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </nav>
  );
}

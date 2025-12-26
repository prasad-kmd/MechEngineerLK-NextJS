"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative bg-primary-foreground text-primary text-center py-2 px-4 transition-transform duration-300 ease-in-out",
        !isVisible && "-translate-y-full"
      )}
    >
      <p className="text-sm">
        Welcome! This site is currently under active construction.
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-1/2 right-4 -translate-y-1/2"
        aria-label="Dismiss announcement"
      >
        <span className="material-icons-outlined text-lg">close</span>
      </button>
    </div>
  );
}
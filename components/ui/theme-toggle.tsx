"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      <span className="material-icons inline dark:hidden">light_mode</span>
      <span className="material-icons hidden dark:inline">dark_mode</span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
"use client"

import * as React from "react"
import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function CodeBlockWithCopy({ ...props }) {
  const ref = React.useRef<HTMLPreElement>(null)
  const { toast } = useToast()

  const handleCopy = () => {
    if (ref.current?.textContent) {
      navigator.clipboard.writeText(ref.current.textContent)
      toast({
        title: "Copied code to clipboard",
      })
    }
  }

  return (
    <div className="relative">
      <pre ref={ref} {...props} />
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-8 w-8"
        onClick={handleCopy}
      >
        <Copy className="h-4 w-4" />
        <span className="sr-only">Copy code</span>
      </Button>
    </div>
  )
}

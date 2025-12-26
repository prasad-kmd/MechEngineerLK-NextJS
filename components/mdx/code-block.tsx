"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface CodeBlockProps {
  "data-language"?: string;
  "data-theme"?: string;
  children: React.ReactNode;
}

export default function CodeBlock({
  "data-language": language,
  children,
}: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  const rawCode = React.Children.toArray(children)
    .map((child: any) => child.props.children)
    .join('');

  const handleCopy = () => {
    navigator.clipboard.writeText(rawCode).then(() => {
      setIsCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    }, () => {
      toast.error("Failed to copy!");
    });
  };

  return (
    <div className="relative my-4 rounded-lg bg-muted/50">
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <span className="text-sm font-semibold">{language}</span>
        <Button variant="ghost" size="sm" onClick={handleCopy}>
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre>
          <code>
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
}
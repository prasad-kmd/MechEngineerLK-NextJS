"use client";

import { useEffect, useRef } from "react";
import katex from "katex";
import temml from "temml";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface MathEquationProps {
  children: string;
  inline?: boolean;
}

export default function MathEquation({ children, inline = false }: MathEquationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      katex.render(children, containerRef.current, {
        throwOnError: false,
        displayMode: !inline,
      });
    }
  }, [children, inline]);

  const copyLaTeX = () => {
    navigator.clipboard.writeText(children).then(() => {
      toast.success("LaTeX copied!");
    }, () => {
      toast.error("Failed to copy LaTeX!");
    });
  };

  const copyMathML = () => {
    const mathml = temml.renderToString(children, { displayMode: !inline });
    navigator.clipboard.writeText(mathml).then(() => {
      toast.success("MathML copied!");
    }, () => {
      toast.error("Failed to copy MathML!");
    });
  };

  if (inline) {
    return <span ref={containerRef} />;
  }

  return (
    <div className="my-4 text-center">
      <div ref={containerRef} />
      <div className="mt-2 space-x-2">
        <Button variant="outline" size="sm" onClick={copyLaTeX}>Copy LaTeX</Button>
        <Button variant="outline" size="sm" onClick={copyMathML}>Copy MathML</Button>
      </div>
    </div>
  );
}
"use client"

import "katex/dist/katex.min.css"
import { BlockMath, InlineMath } from "react-katex"
import temml from "temml"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface MathWithButtonsProps {
  expression: string
  inline?: boolean
}

export function MathWithButtons({
  expression,
  inline = false,
}: MathWithButtonsProps) {
  const { toast } = useToast()

  const handleCopyLatex = () => {
    navigator.clipboard.writeText(expression)
    toast({
      title: "Copied LaTeX to clipboard",
    })
  }

  const handleCopyMathML = () => {
    const mathml = temml.renderToString(expression, {
      displayMode: !inline,
    })
    navigator.clipboard.writeText(mathml)
    toast({
      title: "Copied MathML to clipboard",
    })
  }

  const MathComponent = inline ? InlineMath : BlockMath

  return (
    <div className="group relative">
      <MathComponent math={expression} />
      <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopyLatex}
          className="mr-2"
        >
          Copy LaTeX
        </Button>
        <Button variant="ghost" size="sm" onClick={handleCopyMathML}>
          Copy MathML
        </Button>
      </div>
    </div>
  )
}

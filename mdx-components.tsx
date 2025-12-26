import type { MDXComponents } from 'mdx/types'
import CodeBlock from '@/components/mdx/code-block'
import MathEquation from '@/components/mdx/math-equation'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CodeBlock,
    InlineMath: (props) => <MathEquation {...props} inline />,
    BlockMath: (props) => <MathEquation {...props} />,
    ...components,
  }
}
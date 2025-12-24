import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

const contentDirectory = path.join(process.cwd(), "content")

export async function getPostBySlug(slug: string, type: "blog" | "projects") {
  const realSlug = slug.replace(/\.mdx$/, "")
  const filePath = path.join(contentDirectory, type, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" })

  const { data, content } = matter(fileContent)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypePrettyCode,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
      ],
    },
    parseFrontmatter: false,
  })

  return {
    meta: { ...data, slug: realSlug },
    source: mdxSource,
  }
}

export async function getAllPosts(type: "blog" | "projects") {
  const files = fs.readdirSync(path.join(contentDirectory, type))

  const posts = await Promise.all(
    files.map(async (file) => {
      const { meta } = await getPostBySlug(file, type)
      return meta
    })
  )

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

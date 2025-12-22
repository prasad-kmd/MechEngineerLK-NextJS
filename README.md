# Mechanical Engineer Portfolio

This is a complete, production-ready Next.js 14+ (App Router) web application for a mechanical engineer’s personal portfolio, blog, and engineering article platform.

## Tech Stack & Tools

- **Next.js:** Latest (App Router, server components, server actions)
- **Tailwind CSS:** Latest
- **shadcn/ui:** Components installed and configured
- **KaTeX:** For beautiful LaTeX math rendering
- **temml:** For converting LaTeX to MathML
- **Google Fonts:** Mozillazine Headline, Inter, JetBrains Mono, Roboto, Noto Sans
- **PWA Support:** `next-pwa` for manifest and service worker

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding New Content

### Blog Posts & Articles

To add a new blog post or article, create a new `.mdx` file in the `content/blog` directory. The file name will be used as the slug for the post.

The frontmatter of the `.mdx` file should include the following fields:

- `title`: The title of the post.
- `slug`: The slug for the post.
- `date`: The publication date of the post.
- `author`: The author of the post.
- `authorAvatar`: The URL of the author's avatar.
- `excerpt`: a short summary of the post.
- `featuredImage`: The URL of the featured image.
- `readingTime`: The estimated reading time in minutes.
- `tags`: An array of tags for the post.
- `category`: The category of the post. Can be either `blog` or `article`.

### Projects

To add a new project, create a new `.mdx` file in the `content/projects` directory. The file name will be used as the slug for the project.

The frontmatter of the `.mdx` file should include the following fields:

- `title`: The title of the project.
- `slug`: The slug for the project.
- `date`: The date the project was completed.
- `author`: The author of the project.
- `excerpt`: a short summary of the project.
- `featuredImage`: The URL of the featured image.
- `github`: The URL of the project's GitHub repository.
- `liveDemo`: The URL of the project's live demo.

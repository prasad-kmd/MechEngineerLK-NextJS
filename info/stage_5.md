
### Stage 5 Prompt: Blog and Articles System


> Implement the **Blog and Articles system** for the existing Next.js 16 + Tailwind project without re-initializing or altering file structure.  
> 
> - **Data model & metadata:**
>   - Each post/article must support: author, published date, updated date, categories, tags, summary, reading time, cover image, canonical URL.  
> 
> - **Listing views:**
>   - Provide both **list view** and **grid view** for posts/articles.  
>   - Add a toggle to switch between views; remember user preference.  
>   - Implement **pagination** (client-side or server-side) with accessible controls and URL reflecting current page.  
>   - Add filters by category and tag; show clear filter chips with remove action.  
> 
> - **Post detail page:**
>   - Render content using MDX/Markdown.  
>   - **Math equations:**  
>     - Render inline and block LaTeX with KaTeX.  
>     - Immediately after each rendered equation, show two buttons:  
>       - “Copy LaTeX” (copies original LaTeX source).  
>       - “Copy MathML” (uses Tamml to convert and copies MathML string).  
>   - **Code blocks:**  
>     - Custom code box with header showing language and optional filename.  
>     - Copy button with success/failure toast.  
>     - Syntax highlighting styled with JetBrains Mono.  
>   - **Metadata header:**  
>     - Author avatar/name.  
>     - Published date, updated date if available.  
>     - Categories and tags as interactive chips.  
>   - **Share & notifications:**  
>     - Web Share API button (title, text, URL).  
>     - Notification opt-in for updates to this post (subscribe/unsubscribe UI).  
> 
> - **Empty states:**  
>   - Graceful empty listings with helpful copy.  
> 
> - **Design requirements:**  
>   - Use shadcn UI components styled with Tailwind.  
>   - Apply brand-fusion design (subtle gradients, soft shadows, backdrop blur).  
>   - Respect dark/light theme toggle.  
>   - Ensure accessibility: ARIA labels, keyboard navigation, focus states.  
> 
> Acceptance criteria:  
> - List/grid toggle works and persists.  
> - Pagination updates view without layout shifts and is keyboard-accessible.  
> - Math equations render correctly with working “Copy LaTeX” and “Copy MathML” buttons.  
> - Code blocks styled elegantly with functional copy button.  
> - Post metadata displays accurately.  
> - Share and notifications UI works where permissions allow.  
> - Empty states are user-friendly and consistent with design.

---

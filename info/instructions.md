
> Context: Continue from the current Next.js 16 + Tailwind project without initializing a new app or altering the existing file structure. Implement an elegant, brand-fusion design (not minimalistic) with dark/light themes, PWA capabilities, sophisticated navbar/footer, hero sections, About/Contact/Services pages, and a blog/articles system featuring pagination, list/grid views, KaTeX-rendered math with LaTeX/MathML copy actions, and custom code boxes with copy. Use shadcn UI, Tailwind CSS, KaTeX, Tamml (LaTeX→MathML), and Material Icons. Use local fonts from public/fonts/*.woff/*.woff2 (Mozilla Headline, Inter, JetBrains Mono, Roboto, Google Sans, etc.). Optimize content and performance throughout.

---

## Stage 1: Dependencies, configuration, and design foundations

- **Goal:** Ensure the project is ready with required libraries and base configs, without re-initializing or removing current content.
- **Do:**
  - **Install:** Tailwind plugins if needed, shadcn UI, KaTeX, Tamml, Material Icons, and PWA support.
    - Ensure compatibility with Next.js 16 and App Router where applicable.
    - Use `npm install` with the latest versions that support Next.js 16. Do not run any command that re-initializes Next.js.
  - **Theme config:** Extend Tailwind theme for brand-fusion aesthetics (rich contrasts, layered accents, subtle gradients, glass/satin finishes).
  - **Color tokens:** Define semantic color tokens (e.g., brandPrimary, brandAccent, surface, muted, success, warning, error) with dark/light variants.
  - **Typography:** Register local fonts from `public/fonts/*.woff2/*.woff` (Mozilla Headline, Inter, JetBrains Mono, Roboto, Google Sans). Use CSS `@font-face` and Tailwind font stacks. Do not use the default Next.js font loader.
  - **Icon system:** Use Material Icons via `npm install material-icons@latest`. Provide a utility to render outlined/rounded/filled variants.
  - **shadcn UI:** Add components for Button, Input, Select, Dialog, Dropdown, Tabs, Card, Toast, Alert, Tooltip, Pagination, and ThemeToggle; style to match brand-fusion design.
  - **Global styles:** Ensure Tailwind base, components, and utilities are loaded; add smooth typography, focus rings, transitions, and reduced motion fallbacks.
- **KaTeX & Tamml:**
  - Add KaTeX CSS globally.
  - Prepare a math rendering utility that:
    - Detects inline and block LaTeX.
    - Renders with KaTeX.
    - Uses Tamml to generate MathML from the same LaTeX source.
- **Acceptance criteria:**
  - No change to project initialization or file structure.
  - Dark/light tokens available through CSS variables and Tailwind.
  - Local fonts applied across the site; JetBrains Mono used in code blocks.
  - Material Icons render correctly.
  - KaTeX renders sample inline/block equations; MathML conversion works via Tamml.

---

## Stage 2: Theming, brand-fusion aesthetics, and typography polish

- **Goal:** Implement an elegant, layered visual style with theme toggling and accessible color contrast.
- **Do:**
  - **Theme toggle:** Implement a persistent dark/light theme toggle with system preference detection and user override (store in localStorage).
  - **Brand fusion look:** 
    - Subtle gradients on hero surfaces.
    - Soft shadows and depth for Cards.
    - Micro-interactions: hover lifts, gentle scale, ambient border glow for focus.
    - Satin/glass panels for nav, footer, and CTAs with backdrop blur in supported themes.
  - **Spacing rhythm:** Establish consistent vertical rhythm (4/6/8px scale) and responsive typography sizes.
  - **Accessibility:** Ensure WCAG AA+ color contrast; visible focus states; logical heading hierarchy.
- **Acceptance criteria:**
  - Theme toggle updates CSS variables without layout shifts.
  - Typography is legible, elegant; headings use Mozilla Headline or Google Sans; body uses Inter/Roboto; code uses JetBrains Mono.
  - All interactive components have clear focus styles and meet contrast requirements.

---

## Stage 3: Layout, sophisticated navbar, and footer

- **Goal:** Create a polished site chrome with responsive behavior, PWA-friendly app-feel, and deep navigation.
- **Do:**
  - **Layout shell:** Implement a shared layout with:
    - Sticky, translucent navbar with scroll-aware behavior (e.g., compact on scroll).
    - Footer with multi-column links, brand statement, contact info, social, and legal.
    - Global announcement/notification bar (dismissible) for updates.
  - **Navbar features:**
    - Logo/brand mark, primary navigation (Home, Projects, Blog, Articles, About, Services, Contact).
    - Secondary actions: ThemeToggle, Search, Share, Notifications opt-in/status.
    - Material Icons for menu, search, share, notifications, theme.
    - Mobile: Animated drawer with nested items and quick actions.
  - **Footer features:**
    - Newsletter signup (shadcn Input + Button).
    - Quick links to categories/tags.
    - Contact microform (email-only, spam-safe).
    - Attribution and last build timestamp.
  - **Search:** Implement client-side search scaffolding (UI, input, results list) for posts/projects with room for future indexing.
- **Acceptance criteria:**
  - Navbar transitions smoothly; mobile menu is accessible and keyboard-navigable.
  - Footer content structured, balanced, and responsive.
  - Search UI functional (even with placeholder data); no console errors.
  - Announcement bar and toast notifications in place.

---

## Stage 4: Home, About, Services, and Contact pages

- **Goal:** Build branded pages that present the mechanical engineer’s profile and offerings.
- **Do:**
  - **Home (Hero):**
    - Hero section with name, title (“Mechanical Engineer”), brief value proposition, CTA buttons (View Projects, Read Articles).
    - Background treatment (gradient + abstract geometry hinting at mechanics: arcs, stress lines, mesh).
    - Stats band (years experience, publications, projects, certifications).
    - Featured content carousels: highlighted public projects and latest blog/articles.
  - **About:**
    - Biography, skills (materials, CAD/CAE, thermodynamics, control systems), tools (MATLAB, Simulink, SolidWorks, ANSYS).
    - Timeline of education and milestones.
    - Downloadable CV button; badges for certifications.
  - **Services:**
    - Cards for consulting, design & simulation, prototyping, data analysis & visualization, documentation.
    - Each with icon, description, pricing note (“on request”), CTA to contact.
  - **Contact:**
    - Form with name, email, message; validation and success/error toasts.
    - Optional file attachment hint (future scope, do not implement upload now).
    - Social links and location snippet.
- **Acceptance criteria:**
  - Hero is visually striking but performant (optimized images, CSS-only effects where possible).
  - Pages responsive and accessible; forms validate and provide clear feedback.
  - All CTAs navigate to relevant sections.

---

## Stage 5: Blog and articles system with math, code, metadata, and pagination

- **Goal:** Implement robust listing and detail views for posts and articles, with math/code support and copy utilities.
- **Do:**
  - **Data model & metadata:** Support author, published date, updated date, categories, tags, summary, reading time, cover image, canonical URL.
  - **List and grid views:** Toggle between list and grid; remember user preference.
  - **Pagination:** Client-side or server-side pagination that is accessible; show page count and current page; URL reflects page.
  - **Filters:** By category and tag; combinable; clear filter chips with remove action.
  - **Post detail (MDX or markdown compatible):**
    - Render KaTeX for inline and block math.
    - Immediately after any rendered equation, show two small action buttons:
      - “Copy LaTeX” (copies the original LaTeX source).
      - “Copy MathML” (uses Tamml to convert and copies the MathML string).
    - Code blocks:
      - Custom code box with header showing language and optional filename.
      - Copy button with success/failure toast.
      - Syntax highlighting compatible with JetBrains Mono.
    - Metadata header:
      - Author avatar/name.
      - Published date, and updated date if present.
      - Categories and tags as interactive chips.
    - Share and notifications:
      - Web Share API button (title, text, URL).
      - Notification opt-in for updates to this post (subscribe/unsubscribe UI).
  - **Empty states:** Graceful empty listings with helpful copy.
- **Acceptance criteria:**
  - List/grid toggle works and persists.
  - Pagination updates view without layout shifts and is keyboard-accessible.
  - Math renders correctly, with working “Copy LaTeX” and “Copy MathML” buttons placed immediately after each equation.
  - Code blocks have functioning copy and clean visual styling.
  - Post metadata displays accurately; share and notifications UI works where permissions allow.

---

## Stage 6: PWA, APIs (notifications/share), performance, SEO, and accessibility

- **Goal:** Make the site installable, app-like, and optimized.
- **Do:**
  - **PWA:**
    - Manifest with name/short_name, icons (dark/light friendly), theme_color/background_color, display: standalone.
    - Service worker for offline caching of critical routes and assets; graceful fallback for dynamic content.
    - Install prompt UI and “Add to Home Screen” affordance.
  - **Notifications API:**
    - Permission request flow: clear, respectful, and cancellable.
    - Topic-based subscription (e.g., “New Articles”, “Project Updates”) using client-side stubs and local storage for state; provide toasts for status.
    - Handle denied and default states with informative messages.
  - **Web Share API:** Consolidate share actions on posts and project pages; feature-detect availability.
  - **Performance:**
    - Optimize images with Next/Image where already used.
    - Preload key fonts; use `font-display: swap`.
    - Route-level code splitting; lazy-load heavy components (carousels, charts).
    - Avoid layout shifts; reserve image space; use CSS containment where beneficial.
  - **SEO:**
    - Structured metadata (title, description, canonical, Open Graph/Twitter cards).
    - JSON-LD for Articles and Projects.
    - Clean URL slugs; breadcrumbs.
  - **Accessibility:**
    - ARIA where needed; labels for form controls.
    - Skip-to-content link; logical tab order; reduced motion respect.
    - Validate color contrast for both themes.
- **Acceptance criteria:**
  - App is installable; manifest and service worker pass audits.
  - Notifications and share UIs behave correctly with permissions and feature detection.
  - Lighthouse shows strong scores for Performance, Accessibility, Best Practices, and SEO.
  - No regressions to existing content; all optimizations maintain visual quality.

---

### Global constraints and notes

- **Do not initialize a new Next.js project** or alter the existing file structure. All changes must integrate with current files.
- **Next.js version:** Continue on Next.js 16; avoid any steps that require downgrading.
- **Design ethos:** Elegant brand-fusion (layered textures/tones, refined typography, micro-interactions), not minimalistic.
- **Fonts:** Use only local fonts from `public/fonts` for all typography; no external font loaders.
- **Icons:** Use Material Icons, not Lucide.
- **Math & code:** KaTeX for rendering; Tamml to produce MathML; copy buttons immediately follow equations; custom code boxes with copy.
- **Content optimization:** Prioritize performance, accessibility, and SEO without sacrificing visual richness.
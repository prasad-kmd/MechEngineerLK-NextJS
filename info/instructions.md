
## **Project Overview**
Create a responsive, high-performance web application combining portfolio, blog, and PWA features for a mechanical engineering professional. The application should showcase engineering projects, technical articles with mathematical equations, and professional information in an aesthetically pleasing interface with dark/light themes.

## **Technical Stack**
- **Framework:** Next.js latest (App Router) with TypeScript [do not change the nextjs & tailwind version, just keep it nextjs 16 as given in `package.json`]
- **Styling:** Tailwind CSS with CSS variables for theming
- **UI Components:** shadcn/ui components with custom modifications
- **Math Rendering:** KaTeX for LaTeX display, Tamml for LaTeX-to-MathML conversion
- **Fonts:** use fonts given in public/fonts/*.woff or *.woff2
- **PWA:** Next-PWA for progressive web app features
- **Content:** MDX for blog posts with frontmatter support
- **State Management:** Zustand for global state (theme, UI preferences)
- **Icons:** Material icons `npm install material-icons@latest`
- **Code Highlighting:** Prism.js or Shiki with custom styling

## **Core Requirements**

### **1. Project Structure**
Use default nextjs project structure

### **2. Theme System**
- Implement dark/light mode with system preference detection
- Theme toggle in navbar with smooth transitions
- CSS custom properties for consistent theming
- Separate color schemes for engineering aesthetic (industrial colors)

### **3. Layout Components**

#### **Sophisticated Navbar:**
- Logo/Name with engineering-themed design
- Responsive mobile menu with animation
- Theme toggle
- Search bar for blog/articles
- User menu (if authentication added later)
- Sticky behavior with backdrop blur

#### **Advanced Footer:**
- Multi-column layout
- Contact information
- Social media links
- Quick links to portfolio sections
- Copyright and legal information
- Back-to-top button

### **4. Home Page Structure**

Hero Section:
- Engineering-themed hero image/video background
- Name, title, specialization
- Call-to-action buttons (View Projects, Contact, Blog)
- Animated technical elements (gears, graphs, etc.)

Featured Projects Section:
- Grid of 3-4 highlighted engineering projects
- Hover effects with project details
- Links to full portfolio

Recent Articles Section:
- Latest 3-6 blog posts
- Preview cards with categories/tags

Services/Expertise Section:
- Engineering domains (FEA, CAD, Thermodynamics, etc.)
- Icons and brief descriptions

Testimonials/Client Logos Section


### **5. Portfolio Pages**
- `/portfolio` - Grid view of all projects
- `/portfolio/[slug]` - Detailed project view with:
  - Project gallery (images, CAD models, diagrams)
  - Technical specifications table
  - Engineering calculations/renderings
  - Related projects

### **6. Blog System**

#### **Blog Listing Page (`/blog`):**
- Toggle between list/grid view
- Pagination (10-12 posts per page)
- Filter by categories/tags
- Search functionality
- Sort by date, popularity, category

#### **Blog Post Page (`/blog/[slug]`):**
- Post header with:
  - Title
  - Author (with bio/avatar)
  - Published date
  - Updated date (if different)
  - Categories and tags (clickable)
  - Estimated reading time

- Content area with:
  - KaTeX-rendered equations with copy buttons
  - Custom code blocks with:
    - Language label
    - Copy button
    - Syntax highlighting
  - Responsive images/videos
  - Engineering diagrams/charts

- Post footer:
  - Share buttons (with Web Share API)
  - Author bio
  - Related posts
  - Comments section (optional)

#### **Math Equation Component:**
- user will add latex equation within $(one dollar marks) for inline math and $$(two dollar marks) for display math.
- Renders KaTeX and MathML simultaneously
- Copy buttons for LaTeX source and MathML
- Accessible with proper ARIA labels

### **7. Additional Pages**
- `/about` - Professional bio, education, certifications, timeline
- `/services` - Detailed engineering services
- `/contact` - Contact deatils(not a form), location map, direct contact info
- `/articles` - Technical articles (separate from blog)

### **8. PWA Features**
- Install prompt with custom engineering-themed install UI
- Service worker for offline capabilities
- Background sync for forms
- Push notifications (with user permission)
- Web Share API integration
- App manifest with engineering-themed icons
- Splash screens

### **9. API Routes**
use necessary API routes whenever needed.

## **Design Specifications**

### **Typography Hierarchy:**
- **Mozilla Headline:** Headers (h1-h3)
- **Google Sans:** Body text, navigation
- **JetBrains Mono:** Code blocks, technical data
- **Roboto:** UI elements, buttons
- **Noto Sans:** Fallback for symbols/equations

### **Color Palette (Light Theme):**
- Primary: Industrial blue (#2A6EBB)
- Secondary: Steel gray (#4A5568)
- Accent: Engineering orange (#DD6B20)
- Background: Light gray (#F7FAFC)
- Surface: White (#FFFFFF)

### **Color Palette (Dark Theme):**
- Primary: Engineering cyan (#38B2AC)
- Secondary: Cool gray (#CBD5E0)
- Accent: Safety yellow (#ECC94B)
- Background: Dark charcoal (#1A202C)
- Surface: Dark gray (#2D3748)

### **Animation & Interactions:**
- Smooth page transitions
- Hover effects on cards/buttons
- Loading skeletons
- Scroll-triggered animations for technical elements
- Physics-based animations for engineering concepts

## **Performance Optimizations**
- Image optimization with Next.js Image component
- Font optimization with next/font/google
- Code splitting and lazy loading
- Dynamic imports for heavy components
- Static generation for blog posts
- Incremental Static Regeneration for frequently updated content
- Optimized math rendering (client-side only for equations)

## **Accessibility Requirements**
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support for equations (via MathML)
- Proper ARIA labels
- Focus management
- Reduced motion preferences

## **SEO Features**
- Semantic HTML structure
- Open Graph tags for social sharing
- JSON-LD structured data for:
  - Person (engineer)
  - Blog posts
  - Portfolio projects
- Sitemap generation
- Robots.txt configuration

## **Content Management**
- MDX files with frontmatter:
```yaml
---
title: "Finite Element Analysis of Composite Materials"
author: "John Engineer"
date: "2024-01-15"
updated: "2024-01-20"
categories: ["FEA", "Composite Materials"]
tags: ["ANSYS", "Carbon Fiber", "Simulation"]
excerpt: "Analysis of composite material behavior under stress..."
mathPreview: true
featuredImage: "/images/composite-analysis.jpg"
---
```

## Important - no testing or verifications needed at this point. i'll do it manually.
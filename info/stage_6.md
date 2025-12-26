
### Stage 6 Prompt: PWA, APIs, Performance, SEO, and Accessibility

> Implement **Progressive Web App (PWA) features, APIs (notifications/share), performance optimizations, SEO, and accessibility improvements** for the existing Next.js 16 + Tailwind project without re-initializing or altering file structure.  
> 
> - **PWA:**
>   - Add a manifest with name/short_name, icons (dark/light friendly), theme_color/background_color, display: standalone.  
>   - Implement a service worker for offline caching of critical routes and assets; provide graceful fallback for dynamic content.  
>   - Add install prompt UI and “Add to Home Screen” affordance.  
> 
> - **Notifications API:**
>   - Implement permission request flow: clear, respectful, cancellable.  
>   - Add topic-based subscription (e.g., “New Articles”, “Project Updates”) using client-side stubs and local storage for state.  
>   - Provide toasts for subscription status.  
>   - Handle denied/default states with informative messages.  
> 
> - **Web Share API:**
>   - Add share actions on posts and project pages.  
>   - Feature-detect availability before showing UI.  
> 
> - **Performance:**
>   - Optimize images with Next/Image where already used.  
>   - Preload key fonts; use `font-display: swap`.  
>   - Route-level code splitting; lazy-load heavy components (carousels, charts).  
>   - Avoid layout shifts; reserve image space; use CSS containment where beneficial.  
> 
> - **SEO:**
>   - Add structured metadata (title, description, canonical, Open Graph/Twitter cards).  
>   - Implement JSON-LD for Articles and Projects.  
>   - Ensure clean URL slugs and breadcrumbs.  
> 
> - **Accessibility:**
>   - Add ARIA attributes where needed; labels for form controls.  
>   - Provide skip-to-content link; logical tab order; respect reduced motion preferences.  
>   - Validate color contrast for both dark and light themes.  
> 
> Acceptance criteria:  
> - App is installable; manifest and service worker pass audits.  
> - Notifications and share UIs behave correctly with permissions and feature detection.  
> - Lighthouse shows strong scores for Performance, Accessibility, Best Practices, and SEO.  
> - No regressions to existing content; all optimizations maintain visual quality.  


---

## Stage 3A: Layout Shell
- Create a shared layout component that wraps all pages.  
- Include:
  - Sticky, translucent **navbar** at the top.  
  - Responsive **footer** at the bottom.  
  - Global **announcement bar** above the navbar (dismissible).  
- Ensure scroll-aware behavior (navbar shrinks/compacts on scroll).  
- Use shadcn UI + Tailwind for structure and styling.

---

## Stage 3B: Navbar Features
- Add brand logo/title on the left.  
- Navigation links: Home, Projects, Blog, Articles, About, Services, Contact.  
- Secondary actions: ThemeToggle, Search, Share, Notifications.  
- Use **Material Icons** for menu, search, share, notifications, theme.  
- Mobile: Animated drawer with nested items and quick actions.  
- Accessibility: keyboard navigation, ARIA labels.

---

## Stage 3C: Footer Features
- Multi-column layout:  
  - Column 1: Brand statement + contact info.  
  - Column 2: Quick links (categories/tags).    
  - Column 3: Social links + legal info.  
- Include attribution and last build timestamp.  
- Responsive design with stacked layout on mobile.

---

## Stage 3D: Search UI
- Add a search bar in navbar or modal.  
- Client-side search scaffolding (input + results list).  
- Placeholder data for now; ensure UI works.  
- Accessible: focus trap, keyboard navigation, ARIA roles.

---

## Stage 3E: Acceptance Criteria
- Navbar transitions smoothly; mobile menu accessible.  
- Footer structured, balanced, responsive.  
- Search UI functional with placeholder data.  
- Announcement bar and toast notifications in place.

---

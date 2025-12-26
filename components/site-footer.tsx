import Link from "next/link";

const socialLinks = [
  { name: "GitHub", href: "#", icon: "code" },
  { name: "Twitter", href: "#", icon: "alternate_email" },
  { name: "LinkedIn", href: "#", icon: "work" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand Statement */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="material-icons-outlined text-2xl text-primary">
                engineering
              </span>
              <span className="font-bold text-lg text-foreground">
                Mech Engineer LK
              </span>
            </Link>
            <p className="text-sm">
              Solving complex mechanical engineering challenges with innovative
              and efficient solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <span className="material-icons-outlined">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm">
          <p>
            &copy; {currentYear} Mech Engineer LK. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
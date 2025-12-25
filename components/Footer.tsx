import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">MechEngineer.LK</h3>
            <p className="text-muted-foreground">
              Engineering solutions for a better tomorrow.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-foreground">Portfolio</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-muted-foreground">Email: contact@mechengineer.lk</p>
            <p className="text-muted-foreground">Phone: +94 11 234 5678</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">GitHub</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MechEngineer.LK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

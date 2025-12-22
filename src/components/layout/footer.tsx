import React from "react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">MechEngineerLK</h3>
            <p className="text-foreground/60">
              A Mechanical Engineering professional showcasing projects and technical articles.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/portfolio" className="text-foreground/60 hover:text-foreground">Portfolio</a></li>
              <li><a href="/blog" className="text-foreground/60 hover:text-foreground">Blog</a></li>
              <li><a href="/about" className="text-foreground/60 hover:text-foreground">About</a></li>
              <li><a href="/services" className="text-foreground/60 hover:text-foreground">Services</a></li>
              <li><a href="/contact" className="text-foreground/60 hover:text-foreground">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-foreground/60">Email: placeholder@example.com</li>
              <li className="text-foreground/60">Phone: +1 234 567 890</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Social Media</h3>
            {/* Social media links will go here */}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} MechEngineerLK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-heading sm:text-5xl">Contact Me</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an
          innovative team.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-muted-foreground" />
              <a href="mailto:engineer@example.com" className="hover:underline">
                engineer@example.com
              </a>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Follow Me</CardTitle>
          </CardHeader>
          <CardContent className="flex space-x-4">
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="h-8 w-8" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="h-8 w-8" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="h-8 w-8" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Code, Layers } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16 animate-slide-in">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <header className="text-center my-16">
        <h1 className="text-5xl lg:text-7xl font-bold brand-gradient-text">
          Brand Fusion Aesthetic
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of the new design system, featuring layered elements, glass panels, and rich, authentic textures.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Layered Card */}
        <div className="layered-card bg-card rounded-lg p-6 shadow-soft-lg">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-6">
            <Layers className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-heading mb-3">Layered Depth</h3>
          <p className="text-muted-foreground mb-6">
            The layered-card effect adds a subtle sense of dimension and physicality to the interface.
          </p>
          <Button variant="outline" className="w-full">Learn More</Button>
        </div>

        {/* Glass Panel */}
        <div className="glass-panel rounded-lg p-6 shadow-soft-lg">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary/10 mb-6">
            <Code className="h-6 w-6 text-secondary" />
          </div>
          <h3 className="text-2xl font-heading mb-3">Glass Panels</h3>
          <p className="text-muted-foreground mb-6">
            Translucent glass panels create a modern, elegant feel, allowing the background to subtly peek through.
          </p>
          <Button variant="outline" className="w-full">Explore Features</Button>
        </div>

        {/* Standard Card with New Accents */}
        <Card className="shadow-soft-lg">
          <CardHeader>
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent/10 mb-4">
              <Settings className="h-6 w-6 text-accent" />
            </div>
            <CardTitle className="font-heading text-2xl">Customizable</CardTitle>
            <CardDescription>
              A standard card, enhanced with new button styles and gradient accents.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge className="mb-6 bg-brand-gradient text-primary-foreground border-transparent">
              New & Improved
            </Badge>
            <Button className="w-full bg-primary text-primary-foreground satin-finish shadow-soft hover:shadow-soft-md transition-shadow">
              Primary Action
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

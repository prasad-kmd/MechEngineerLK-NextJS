import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-background to-secondary">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="text-center mb-12">
        <h1>Mozilla Headline Font (Heading)</h1>
        <p className="mt-4 text-lg">
          Inter Font (Sans-serif Body)
        </p>
      </div>
      <Card className="w-full max-w-md shadow-soft-lg">
        <CardHeader>
          <CardTitle>Branded Card</CardTitle>
          <CardDescription>This card showcases the new aesthetic.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>It features soft shadows and rests on a subtle gradient background.</p>
          <Button className="mt-6 w-full bg-gradient-primary text-primary-foreground">
            Primary Action
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            I'm currently working on compiling my project portfolio. Please check back later to see a showcase of my work in mechanical engineering.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
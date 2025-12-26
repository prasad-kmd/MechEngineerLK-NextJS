import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const services = [
  {
    icon: "engineering",
    title: "Consulting",
    description: "Expert advice on mechanical design, analysis, and manufacturing processes.",
  },
  {
    icon: "model_training",
    title: "Design & Simulation",
    description: "Advanced CAD modeling and finite element analysis (FEA) to optimize your designs.",
  },
  {
    icon: "build",
    title: "Prototyping",
    description: "Rapid prototyping services to bring your concepts to life for testing and validation.",
  },
  {
    icon: "analytics",
    title: "Data Analysis & Visualization",
    description: "Interpreting complex data sets to provide actionable insights for your projects.",
  },
  {
    icon: "description",
    title: "Documentation",
    description: "Comprehensive technical documentation, including manuals and reports.",
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg text-muted-foreground mt-4">
          Providing a wide range of mechanical engineering services to meet your project's needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <span className="material-icons-outlined text-3xl text-primary">{service.icon}</span>
                <CardTitle>{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">Pricing: On Request</p>
              <Button asChild variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

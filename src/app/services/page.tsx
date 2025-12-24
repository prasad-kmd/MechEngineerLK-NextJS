import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-heading sm:text-5xl">Consulting Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Leveraging expertise in mechanical engineering to provide innovative and effective solutions.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>CAD Modeling & Design</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                3D Modeling and 2D Drafting
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Product Design and Development
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Finite Element Analysis (FEA)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Structural and Thermal Analysis
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Stress and Strain Simulation
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Prototyping & Manufacturing</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                3D Printing and Rapid Prototyping
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                CNC Machining and Fabrication
              </li>
            </ul>
          </CardContent>
        </Card>
        {/* Add more services as needed */}
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Materials Science", "CAD/CAE", "Thermodynamics",
  "Control Systems", "MATLAB", "Simulink", "SolidWorks", "ANSYS"
];

const timeline = [
  { year: "2022", event: "Senior Mechanical Engineer at Innovatech" },
  { year: "2020", event: "Mechanical Engineer at Future Systems Inc." },
  { year: "2018", event: "M.Sc. in Mechanical Engineering, Stanford University" },
  { year: "2016", event: "B.Sc. in Mechanical Engineering, MIT" },
];

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-muted-foreground mb-8">
          A passionate and innovative mechanical engineer with over five years of experience in designing, developing, and testing mechanical devices across various industries. My expertise lies in creating efficient and reliable solutions to complex engineering challenges.
        </p>

        <div className="mb-12">
          <Button>
            Download CV
            <span className="material-icons-outlined ml-2">download</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Skills & Tools</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.map(skill => <Badge key={skill}>{skill}</Badge>)}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Career Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {timeline.map(item => (
                  <li key={item.event}>
                    <span className="font-semibold">{item.year}</span> - {item.event}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, GraduationCap, Star } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
            <h1 className="mt-4 text-3xl font-bold font-heading">A Mechanical Engineer</h1>
            <p className="mt-2 text-muted-foreground">Innovator | Designer | Problem Solver</p>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold">About Me</h2>
            <p className="mt-4 text-muted-foreground">
              A passionate and dedicated mechanical engineer with a proven track record of designing, developing, and
              implementing innovative solutions. Skilled in CAD, simulation, and project management, with a strong
              focus on quality and efficiency.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl font-bold">Skills</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">SolidWorks</CardTitle>
                    <Star className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">CAD</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">ANSYS</CardTitle>
                    <Star className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">FEA</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Python</CardTitle>
                    <Code className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">Programming</Badge>
                  </CardContent>
                </Card>
                {/* Add more skills as needed */}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Experience</h2>
              <div className="mt-4 space-y-8">
                <div className="flex gap-4">
                  <Briefcase className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <h3 className="font-bold">Lead Mechanical Engineer</h3>
                    <p className="text-muted-foreground">Innovate Corp. | 2020 - Present</p>
                    <p className="mt-2">
                      Leading a team of engineers in the design and development of next-generation robotic systems.
                    </p>
                  </div>
                </div>
                {/* Add more experience as needed */}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Education</h2>
              <div className="mt-4 space-y-8">
                <div className="flex gap-4">
                  <GraduationCap className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <h3 className="font-bold">Master of Science in Mechanical Engineering</h3>
                    <p className="text-muted-foreground">University of Innovation | 2018 - 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

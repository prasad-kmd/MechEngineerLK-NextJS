import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const socialLinks = [
  { name: "GitHub", href: "#", icon: "code" },
  { name: "Twitter", href: "#", icon: "alternate_email" },
  { name: "LinkedIn", href: "#", icon: "work" },
];

const contactDetails = [
  { icon: "email", label: "Email", value: "contact@mechengineer.lk" },
  { icon: "phone", label: "Phone", value: "+1 (123) 456-7890" },
  { icon: "location_on", label: "Location", value: "Colombo, Sri Lanka" },
];

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-lg text-muted-foreground mt-4">
          Feel free to reach out for collaborations or inquiries.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-center space-x-4">
                <span className="material-icons-outlined text-primary">{detail.icon}</span>
                <div>
                  <p className="font-semibold">{detail.label}</p>
                  <p className="text-muted-foreground">{detail.value}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center space-x-4 pt-4">
              <span className="material-icons-outlined text-primary">group</span>
              <div>
                <p className="font-semibold">Social Media</p>
                <div className="flex space-x-4 mt-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={link.name}
                    >
                      <span className="material-icons-outlined">{link.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "12", label: "Publications" },
  { value: "30+", label: "Projects Completed" },
  { value: "3", label: "Certifications" },
];

export default function Stats() {
  return (
    <section className="bg-muted">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

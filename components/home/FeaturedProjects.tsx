import React from 'react';

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder for project cards */}
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p className="text-muted-foreground">A brief description of the first featured project.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Project 2</h3>
            <p className="text-muted-foreground">A brief description of the second featured project.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Project 3</h3>
            <p className="text-muted-foreground">A brief description of the third featured project.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

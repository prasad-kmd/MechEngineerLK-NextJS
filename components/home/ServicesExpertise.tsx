import React from 'react';

export function ServicesExpertise() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Services & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-card p-6 rounded-lg shadow-md">
            {/* Icon Placeholder */}
            <div className="h-12 w-12 bg-primary/10 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Finite Element Analysis (FEA)</h3>
            <p className="text-muted-foreground">Advanced structural and thermal analysis.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            {/* Icon Placeholder */}
            <div className="h-12 w-12 bg-primary/10 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Computer-Aided Design (CAD)</h3>
            <p className="text-muted-foreground">3D modeling and product design.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            {/* Icon Placeholder */}
            <div className="h-12 w-12 bg-primary/10 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Thermodynamics</h3>
            <p className="text-muted-foreground">Heat transfer and energy systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

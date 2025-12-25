import React from 'react';

export function RecentArticles() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder for article cards */}
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Article 1</h3>
            <p className="text-muted-foreground">A brief description of the first recent article.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Article 2</h3>
            <p className="text-muted-foreground">A brief description of the second recent article.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Article 3</h3>
            <p className="text-muted-foreground">A brief description of the third recent article.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

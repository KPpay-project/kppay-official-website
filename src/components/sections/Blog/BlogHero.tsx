import React from 'react';

const BlogHero = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-br from-brand-primary to-brand-secondary">
      <div className="container-padding max-w-7xl mx-auto text-center">
        <h1 className="hero-heading text-3xl md:text-4xl lg:text-5xl mb-4">
          KPPAY Insights
        </h1>
        <p className="hero-description text-sm md:text-base max-w-2xl mx-auto">
          Explore the latest in payment technology, security best practices,
          and fintech innovation. Stay ahead with expert insights and
          integration guides.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;

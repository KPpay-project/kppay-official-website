import React from 'react';
import { Button, images, ROUTES } from '@/types';
import Image from 'next/image';

const ResourcesHeroSection = () => {
  return (
    <section className="relative -mt-24 overflow-hidden">
      {/* Hero Container */}
      <div className="relative h-[680px] sm:h-[550px] md:h-[600px]">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src={images.hero.gradient}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20 z-[1]"></div>

        {/* Content Layer */}
        <div className="relative z-10 container-padding pt-24 sm:pt-0 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="hero-heading">Resources and Documentation</h1>
            <p className="hero-description">
              Everything you need to build, integrate and scale with KP Pay.
              From API docs to best practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href={ROUTES.DEV_API_DOCS}>
                API Documentation
              </Button>
              <Button variant="outlined-white" size="lg" href={ROUTES.CONTACT}>
                Get Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesHeroSection;

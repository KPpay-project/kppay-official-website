import React from 'react';
import { Button } from '@/types';

const PartnersHeroSection = () => {
  return (
    <section className="relative -mt-24 overflow-hidden pb-32">
      {/* Background Gradient - CSS gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-green"></div>

      {/* Dark overlay for better text contrast */}
      {/* <div className="absolute inset-0 bg-black/20 z-[1]"></div> */}

      {/* Hero Container */}
      <div className="relative z-10">
        {/* Top Hero Section */}
        <div className="relative pt-40 pb-20 flex items-center justify-center">
          <div className="container-padding px-6 sm:px-8">
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="hero-heading px-4">Partners Program</h1>
              <p className="hero-description px-4">
                KP Pay Gateway processes payments across cards, mobile money,
                and bank transfers with intelligent routing and local currency
                support across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="md" href="#become-partner">
                  Become a Partner
                </Button>
                <Button variant="outlined-white" size="md" href="#register">
                  Register Here
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersHeroSection;

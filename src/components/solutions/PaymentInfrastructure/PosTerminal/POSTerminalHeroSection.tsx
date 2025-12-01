import React from 'react';
import { Button } from '@/types';

const POSTerminalHeroSection = () => {
  return (
    <section className="relative -mt-24 overflow-hidden">
      {/* Hero Container */}
      <div className="relative h-[680px] sm:h-[550px] md:h-[600px]">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, #00577A 0%, #153794 100%)',
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 container-padding pt-24 sm:pt-0 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="hero-heading">POS Terminal Solutions</h1>
            <p className="hero-description">
              KP Pay Gateway processes payments across cards, mobile money, and
              bank transfers with intelligent routing and local currency support
              across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="md" href="#get-pos-terminal">
                Get POS Terminal
              </Button>
              <Button
                variant="outlined-white"
                size="md"
                href="#integration-guide"
              >
                Integration Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default POSTerminalHeroSection;

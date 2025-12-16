import React from 'react';
import { Button, images, ROUTES } from '@/types';
import Image from 'next/image';

const VirtualCardsHeroSection = () => {
  return (
    <section className="relative overflow-hidden -mt-24">
      {/* Hero Container */}
      <div className="relative min-h-[900px] sm:min-h-[800px] md:min-h-[850px]">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, #00577A 0%, #153794 100%)',
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 container-padding pt-40 sm:pt-48 md:pt-52 h-full flex flex-col items-center justify-center">
          <div className="text-center max-w-4xl mb-12">
            <h1 className="hero-heading text-white">
              Virtual Cards and Issuing
            </h1>
            <p className="hero-description text-white/90">
              KP Pay Gateway processes payments across cards, mobile money, and
              bank transfers with intelligent routing and local currency support
              across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button variant="secondary" size="md" href={ROUTES.SIGNUP}>
                Start Issuing Cards
              </Button>
              <Button
                variant="outlined-white"
                size="md"
                href={ROUTES.RESOURCES}
              >
                API Documentation
              </Button>
            </div>
          </div>

          {/* Card Image */}
          <div className="w-full max-w-2xl mt-8">
            <Image
              src={images.Icons.iconCardHolder}
              alt="Virtual Card"
              width={600}
              height={380}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualCardsHeroSection;

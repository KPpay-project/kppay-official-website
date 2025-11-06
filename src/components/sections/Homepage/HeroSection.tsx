import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button, images } from '@/types';

export default function HeroSection() {
  return (
    <section className="relative -mt-24 overflow-hidden">
      {/* Hero Container */}
      <div className="relative h-[680px] sm:h-[700px] md:h-[750px] lg:h-[800px]">
        {/* Dark overlay for better text contrast - covers entire hero section */}
        <div className="absolute inset-0 bg-black/40 z-[0]"></div>

        {/* Main Dashboard Image - Background Layer - Now smaller and starts below header */}
        <div className="absolute top-[120px] left-0 right-0 bottom-[80px]">
          <Image
            src={images.hero.main}
            alt="KP Pay Platform Dashboard"
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Gradient Overlay - Blends with main image */}
        <div className="absolute inset-0 z-[1]">
          <Image
            src={images.hero.gradient}
            alt=""
            fill
            className="object-cover opacity-90 mix-blend-multiply"
            priority
          />
        </div>

        {/* Additional gradient for depth */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/30 via-transparent to-black/20"></div>

        {/* Content Layer */}
        <div className="relative z-10 container-padding pt-24 sm:pt-0 h-full flex flex-col items-center justify-center">
          <div className="text-center">
            {/* Heading */}
            <h1 className="hero-heading">
              THE SAFEST AND MOST RELIABLE
              <br />
              MONEY TRANSACTION PLATFORM
            </h1>

            {/* Description */}
            <p className="hero-description">
              Send money globally, receive payments, deposit and request funds,
              invest
              <br className="hidden sm:block" />
              and exchange across multiple currencies with low fees, speed and
              safety.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg">
                Get started for free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outlined-white" size="lg">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

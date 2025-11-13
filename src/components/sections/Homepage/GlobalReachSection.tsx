import React from 'react';
import Image from 'next/image';
import { images } from '@/types';

export default function GlobalReachSection() {
  const stats = [
    {
      value: '4.5K+',
      label: 'Daily new users',
    },
    {
      value: '$15.5K+',
      label: 'worthy of cash transferred',
    },
    {
      value: '1000+',
      label: 'Total entrepreneurs in the world',
    },
  ];

  return (
    <section className="relative pt-40 lg:pt-40 py-16 md:py-20 lg:py-24 bg-surface-primary overflow-hidden">
      <div className="container-padding">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-bebas text-[28px] md:text-[34px] lg:text-[40px] text-text-primary leading-[1.1] mb-3 max-w-[900px] mx-auto">
            UNLOCKING FINANCIAL FREEDOM, EMPOWERING PAN-AFRICAN OPPORTUNITIES.
          </h2>
          <p className="text-sm md:text-base text-text-secondary">
            Popular Countries Our Customers Send Money
          </p>
        </div>

        {/* Map Image */}
        <div className="relative w-full max-w-[1100px] mx-auto mb-12 md:mb-16">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={images.homepage.map}
              alt="Global reach map showing countries where customers send money"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="heading-bebas text-[40px] md:text-[48px] lg:text-[56px] text-text-primary leading-none mb-2">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-text-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

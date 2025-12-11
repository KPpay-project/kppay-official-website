'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

// Country data with actual flag images and positions
const countries = [
  // High Senders
  {
    id: 'canada',
    name: 'Canada',
    flagPath: '/assets/images/flags/canada.png',
    position: { top: '15%', left: '18%' },
    category: 'High Senders',
    continent: 'North America',
    width: 47250,
    height: 47250,
  },
  {
    id: 'usa',
    name: 'United States',
    flagPath: '/assets/images/flags/United State of America.png',
    position: { top: '28%', left: '17%' },
    category: 'High Senders',
    continent: 'North America',
    width: 2528,
    height: 2528,
  },
  {
    id: 'brazil',
    name: 'Brazil',
    flagPath: '/assets/images/flags/Brazil.png',
    position: { top: '65%', left: '27%' },
    category: 'High Senders',
    continent: 'South America',
    width: 2990,
    height: 2990,
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flagPath: '/assets/images/flags/United Kingdom.png',
    position: { top: '18%', left: '49.5%' },
    category: 'High Senders',
    continent: 'Europe',
    width: 2301,
    height: 2301,
  },
  {
    id: 'russia',
    name: 'Russia',
    flagPath: '/assets/images/flags/Russia.png',
    position: { top: '16%', left: '67%' },
    category: 'High Senders',
    continent: 'Europe/Asia',
    width: 2782,
    height: 2782,
  },
  {
    id: 'china',
    name: 'China',
    flagPath: '/assets/images/flags/China.png',
    position: { top: '31%', left: '72%' },
    category: 'High Senders',
    continent: 'Asia',
    width: 3955,
    height: 3955,
  },
  {
    id: 'japan',
    name: 'Japan',
    flagPath: '/assets/images/flags/Japan.png',
    position: { top: '29%', left: '84%' },
    category: 'High Senders',
    continent: 'Asia',
    width: 3679,
    height: 3679,
  },
  {
    id: 'australia',
    name: 'Australia',
    flagPath: '/assets/images/flags/Australia.png',
    position: { top: '77%', left: '84%' },
    category: 'High Senders',
    continent: 'Oceania',
    width: 4248,
    height: 4248,
  },
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    flagPath: '/assets/images/flags/Dubai.png',
    position: { top: '36%', left: '62%' },
    category: 'High Senders',
    continent: 'Middle East',
    width: 47956,
    height: 47956,
  },
  {
    id: 'india',
    name: 'India',
    flagPath: '/assets/images/flags/india.png',
    position: { top: '37%', left: '69%' },
    category: 'High Senders',
    continent: 'South Asia',
    width: 49347,
    height: 49347,
  },

  // High Receivers
  {
    id: 'togo',
    name: 'Togo',
    flagPath: '/assets/images/flags/Togo.png',
    position: { top: '51%', left: '48.2%' },
    category: 'High Receivers',
    continent: 'West Africa',
    width: 2012,
    height: 2012,
  },

  // Senders and Receivers
  {
    id: 'nigeria',
    name: 'Nigeria',
    flagPath: '/assets/images/flags/Nigeria.png',
    position: { top: '52.5%', left: '49.8%' },
    category: 'Senders & Receivers',
    continent: 'West Africa',
    width: 1540,
    height: 1540,
  },
  {
    id: 'kenya',
    name: 'Kenya',
    flagPath: '/assets/images/flags/Kenya.png',
    position: { top: '58%', left: '59.5%' },
    category: 'Senders & Receivers',
    continent: 'East Africa',
    width: 2418,
    height: 2418,
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    flagPath: '/assets/images/flags/Tanzania.png',
    position: { top: '63.5%', left: '60.5%' },
    category: 'Senders & Receivers',
    continent: 'East Africa',
    width: 1914,
    height: 1914,
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    flagPath: '/assets/images/flags/South Africa.png',
    position: { top: '76%', left: '54.5%' },
    category: 'Senders & Receivers',
    continent: 'Southern Africa',
    width: 2990,
    height: 2990,
  },
  {
    id: 'france',
    name: 'France',
    flagPath: '/assets/images/flags/France.png',
    position: { top: '22.5%', left: '50.2%' },
    category: 'Senders & Receivers',
    continent: 'Europe',
    width: 1526,
    height: 1526,
  },
  {
    id: 'belgium',
    name: 'Belgium',
    flagPath: '/assets/images/flags/Belgium.png',
    position: { top: '20.5%', left: '51%' },
    category: 'Senders & Receivers',
    continent: 'Europe',
    width: 1471,
    height: 1471,
  },
  {
    id: 'germany',
    name: 'Germany',
    flagPath: '/assets/images/flags/germany.png',
    position: { top: '19.5%', left: '52.2%' },
    category: 'Senders & Receivers',
    continent: 'Europe',
    width: 42333,
    height: 42333,
  },
  {
    id: 'cameroon',
    name: 'Cameroon',
    flagPath: '/assets/images/flags/Cameroon.png',
    position: { top: '54%', left: '52.5%' },
    category: 'Senders & Receivers',
    continent: 'Central Africa',
    width: 2054,
    height: 2054,
  },
  {
    id: 'zambia',
    name: 'Zambia',
    flagPath: '/assets/images/flags/zambia.png',
    position: { top: '70%', left: '56%' },
    category: 'Senders & Receivers',
    continent: 'Southern Africa',
    width: 47454,
    height: 47454,
  },
  {
    id: 'drc',
    name: 'DR Congo',
    flagPath: '/assets/images/flags/drc.png',
    position: { top: '61%', left: '54.5%' },
    category: 'Senders & Receivers',
    continent: 'Central Africa',
    width: 59675,
    height: 59675,
  },
  {
    id: 'car',
    name: 'Central African Republic',
    flagPath: '/assets/images/flags/car.png',
    position: { top: '55.5%', left: '57%' },
    category: 'Senders & Receivers',
    continent: 'Central Africa',
    width: 55388,
    height: 55388,
  },
];

// Smart tooltip position calculator
const getTooltipPosition = (position: { top: string; left: string }) => {
  const top = parseFloat(position.top);
  const left = parseFloat(position.left);

  // Default to bottom
  let verticalPosition: 'top' | 'bottom' = 'bottom';
  let horizontalAlign: 'left' | 'center' | 'right' = 'center';

  // If in top 30% of map, show tooltip below
  if (top < 30) {
    verticalPosition = 'bottom';
  }
  // If in bottom 30% of map, show tooltip above
  else if (top > 70) {
    verticalPosition = 'top';
  }

  // Horizontal alignment based on left position
  if (left < 25) {
    horizontalAlign = 'left';
  } else if (left > 75) {
    horizontalAlign = 'right';
  }

  return { verticalPosition, horizontalAlign };
};

export default function GlobalReachSection() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

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
    <section className="relative py-8 md:py-12 lg:py-16 bg-surface-primary overflow-hidden">
      <div className="container-padding">
        {/* Heading */}
        <div className="text-center mb-4 md:mb-8">
          <h2 className="heading-bebas text-[28px] md:text-[34px] lg:text-[40px] text-text-primary leading-[1.1] mb-3 max-w-[900px] mx-auto">
            UNLOCKING FINANCIAL FREEDOM, EMPOWERING PAN-AFRICAN OPPORTUNITIES.
          </h2>
          <p className="text-sm md:text-base text-text-secondary">
            Popular Countries Our Customers Send Money
          </p>
        </div>

        {/* Interactive Map */}
        <div className="relative w-full max-w-[1100px] mx-auto mb-6 md:mb-10">
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#A52A2A]"></div>
              <span className="text-xs md:text-sm text-text-secondary">
                High Senders
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#4169E1]"></div>
              <span className="text-xs md:text-sm text-text-secondary">
                High Receivers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#2E8B57]"></div>
              <span className="text-xs md:text-sm text-text-secondary">
                Senders & Receivers
              </span>
            </div>
          </div>

          {/* Map Container */}
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
            {/* Background World Map Image */}
            <Image
              src="/assets/images/theworldmap.png"
              alt="World map background"
              fill
              className="object-contain"
              priority
              unoptimized
            />

            {/* Interactive Country Markers */}
            {countries.map((country) => {
              const isHovered = hoveredCountry === country.id;
              const categoryColor =
                country.category === 'High Senders'
                  ? '#A52A2A'
                  : country.category === 'High Receivers'
                  ? '#4169E1'
                  : '#2E8B57';

              const { verticalPosition, horizontalAlign } = getTooltipPosition(
                country.position
              );

              return (
                <div
                  key={country.id}
                  className="absolute"
                  style={{
                    top: country.position.top,
                    left: country.position.left,
                    transform: 'translate(-50%, -50%)',
                    zIndex: isHovered ? 100 : 10,
                  }}
                >
                  {/* Country Marker */}
                  <div
                    className="relative cursor-pointer group"
                    onMouseEnter={() => setHoveredCountry(country.id)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  >
                    {/* 3D Flag Circle Container */}
                    <div
                      className="relative flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full transition-all duration-700 ease-out"
                      style={{
                        backgroundColor: categoryColor,
                        transform: isHovered
                          ? 'scale(1.25) translateY(-3px)'
                          : 'scale(1)',
                        boxShadow: isHovered
                          ? `0 10px 25px ${categoryColor}50, 0 0 30px ${categoryColor}30, inset 0 -3px 8px rgba(0,0,0,0.15)`
                          : '0 4px 12px rgba(0, 0, 0, 0.12), inset 0 -2px 4px rgba(0,0,0,0.08)',
                        animation: isHovered
                          ? 'none'
                          : 'float 4s ease-in-out infinite',
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    >
                      {/* Flag Image */}
                      <div className="relative w-5 h-5 md:w-6 md:h-6 rounded-full overflow-hidden border border-white/40">
                        <Image
                          src={country.flagPath}
                          alt={`${country.name} flag`}
                          width={country.width}
                          height={country.height}
                          className="object-cover w-full h-full"
                          unoptimized
                        />
                      </div>

                      {/* Rotating Ring Effect */}
                      <div
                        className="absolute inset-0 rounded-full border border-white/30"
                        style={{
                          animation: 'rotate 10s linear infinite',
                          borderStyle: 'dashed',
                        }}
                      />
                    </div>

                    {/* Pulse Animation Rings */}
                    {!isHovered && (
                      <>
                        <div
                          className="absolute inset-0 rounded-full animate-ping opacity-30"
                          style={{
                            backgroundColor: categoryColor,
                            animationDuration: '4s',
                          }}
                        />
                        <div
                          className="absolute inset-0 rounded-full animate-pulse"
                          style={{
                            backgroundColor: categoryColor,
                            opacity: 0.15,
                            animationDuration: '3s',
                          }}
                        />
                      </>
                    )}

                    {/* Hover Tooltip with Smart Positioning */}
                    {isHovered && (
                      <div
                        className="absolute z-[200] pointer-events-none"
                        style={{
                          ...(verticalPosition === 'bottom'
                            ? { top: '100%', marginTop: '12px' }
                            : { bottom: '100%', marginBottom: '12px' }),
                          ...(horizontalAlign === 'center' && {
                            left: '50%',
                            transform: 'translateX(-50%)',
                          }),
                          ...(horizontalAlign === 'left' && {
                            left: '0',
                            transform: 'translateX(0)',
                          }),
                          ...(horizontalAlign === 'right' && {
                            right: '0',
                            transform: 'translateX(0)',
                          }),
                          animation:
                            'tooltipFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      >
                        {/* Arrow */}
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2"
                          style={{
                            ...(verticalPosition === 'bottom'
                              ? { top: '-8px' }
                              : { bottom: '-8px' }),
                            width: 0,
                            height: 0,
                            borderLeft: '8px solid transparent',
                            borderRight: '8px solid transparent',
                            ...(verticalPosition === 'bottom'
                              ? { borderBottom: '8px solid white' }
                              : { borderTop: '8px solid white' }),
                            filter: 'drop-shadow(0 -1px 2px rgba(0,0,0,0.06))',
                          }}
                        />

                        {/* Tooltip Card with Subtle 3D effect */}
                        <div
                          className="bg-white rounded-lg p-3.5 min-w-[200px] border border-gray-100/80 backdrop-blur-sm"
                          style={{
                            boxShadow:
                              '0 10px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
                          }}
                        >
                          {/* Country Name */}
                          <h4 className="font-bold text-gray-900 text-sm mb-2.5 pb-2 border-b border-gray-100">
                            {country.name}
                          </h4>

                          {/* Category */}
                          <div className="mb-2">
                            <div className="flex items-center gap-2">
                              <div
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: categoryColor }}
                              />
                              <span
                                className="text-[11px] font-semibold"
                                style={{ color: categoryColor }}
                              >
                                {country.category}
                              </span>
                            </div>
                          </div>

                          {/* Location */}
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-3 h-3" strokeWidth={2.5} />
                            <span className="text-[11px] font-medium">
                              {country.continent}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="heading-bebas-light text-[40px] md:text-[48px] lg:text-[56px] text-text-primary leading-none mb-2">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-text-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes tooltipFadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}

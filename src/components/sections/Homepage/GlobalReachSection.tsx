'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

// Country data with accurate geographic positions (based on standard world map projection)
const countries = [
  // Senders & Receivers - North America
  {
    id: 'canada',
    name: 'Canada',
    flagPath: '/assets/images/flags/canada.png',
    position: { top: '22%', left: '17%' }, // Northern Canada (adjusted for visibility)
    category: 'Senders & Receivers',
    continent: 'North America',
    width: 47250,
    height: 47250,
  },
  {
    id: 'usa',
    name: 'United States',
    flagPath: '/assets/images/flags/United State of America.png',
    position: { top: '33%', left: '18%' }, // Central US
    category: 'Senders & Receivers',
    continent: 'North America',
    width: 2528,
    height: 2528,
  },

  // High Senders - South America
  {
    id: 'brazil',
    name: 'Brazil',
    flagPath: '/assets/images/flags/Brazil.png',
    position: { top: '64%', left: '28%' }, // Central Brazil
    category: 'High Senders',
    continent: 'South America',
    width: 2990,
    height: 2990,
  },

  // Senders & Receivers - Europe
  {
    id: 'uk',
    name: 'United Kingdom',
    flagPath: '/assets/images/flags/United Kingdom.png',
    position: { top: '24%', left: '48.5%' }, // UK position
    category: 'Senders & Receivers',
    continent: 'Europe',
    width: 2301,
    height: 2301,
  },
  {
    id: 'russia',
    name: 'Russia',
    flagPath: '/assets/images/flags/Russia.png',
    position: { top: '28%', left: '65%' }, // Central Russia
    category: 'High Senders',
    continent: 'Europe/Asia',
    width: 2782,
    height: 2782,
  },

  // High Senders - Asia
  {
    id: 'china',
    name: 'China',
    flagPath: '/assets/images/flags/China.png',
    position: { top: '35%', left: '73%' }, // Eastern China
    category: 'High Senders',
    continent: 'Asia',
    width: 3955,
    height: 3955,
  },
  {
    id: 'japan',
    name: 'Japan',
    flagPath: '/assets/images/flags/Japan.png',
    position: { top: '34%', left: '82%' }, // Japan islands
    category: 'High Senders',
    continent: 'Asia',
    width: 3679,
    height: 3679,
  },
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    flagPath: '/assets/images/flags/Dubai.png',
    position: { top: '38%', left: '60%' }, // UAE/Dubai
    category: 'High Senders',
    continent: 'Middle East',
    width: 47956,
    height: 47956,
  },
  {
    id: 'india',
    name: 'India',
    flagPath: '/assets/images/flags/india.png',
    position: { top: '41%', left: '67%' }, // Central India
    category: 'High Senders',
    continent: 'South Asia',
    width: 49347,
    height: 49347,
  },

  // High Senders - Oceania
  {
    id: 'australia',
    name: 'Australia',
    flagPath: '/assets/images/flags/Australia.png',
    position: { top: '72%', left: '81%' }, // Eastern Australia
    category: 'High Senders',
    continent: 'Oceania',
    width: 4248,
    height: 4248,
  },

  // High Receivers - West Africa
  {
    id: 'togo',
    name: 'Togo',
    flagPath: '/assets/images/flags/Togo.png',
    position: { top: '49%', left: '49%' }, // Togo coast (adjusted)
    category: 'High Receivers',
    continent: 'West Africa',
    width: 2012,
    height: 2012,
  },

  // Senders and Receivers - West Africa
  {
    id: 'nigeria',
    name: 'Nigeria',
    flagPath: '/assets/images/flags/Nigeria.png',
    position: { top: '50.5%', left: '52%' }, // Nigeria (east of Togo, more spacing)
    category: 'Senders & Receivers',
    continent: 'West Africa',
    width: 1540,
    height: 1540,
  },

  // Senders and Receivers - East Africa
  {
    id: 'kenya',
    name: 'Kenya',
    flagPath: '/assets/images/flags/Kenya.png',
    position: { top: '53%', left: '58.5%' }, // Kenya (adjusted)
    category: 'Senders & Receivers',
    continent: 'East Africa',
    width: 2418,
    height: 2418,
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    flagPath: '/assets/images/flags/Tanzania.png',
    position: { top: '59%', left: '59%' }, // Tanzania (south of Kenya, more spacing)
    category: 'Senders & Receivers',
    continent: 'East Africa',
    width: 1914,
    height: 1914,
  },

  // Senders and Receivers - Central Africa
  {
    id: 'cameroon',
    name: 'Cameroon',
    flagPath: '/assets/images/flags/Cameroon.png',
    position: { top: '51%', left: '54.5%' }, // Cameroon (adjusted)
    category: 'Senders & Receivers',
    continent: 'Central Africa',
    width: 2054,
    height: 2054,
  },
  {
    id: 'car',
    name: 'Central African Republic',
    flagPath: '/assets/images/flags/car.png',
    position: { top: '51%', left: '57.5%' }, // CAR (east of Cameroon, more spacing)
    category: 'Senders & Receivers',
    continent: 'Central Africa',
    width: 55388,
    height: 55388,
  },
  {
    id: 'drc',
    name: 'DR Congo',
    flagPath: '/assets/images/flags/drc.png',
    position: { top: '57%', left: '56.5%' }, // DRC (south of CAR, adjusted)
    category: 'Senders & Receivers',
    continent: 'Central Africa',
    width: 59675,
    height: 59675,
  },

  // Senders and Receivers - Southern Africa
  {
    id: 'zambia',
    name: 'Zambia',
    flagPath: '/assets/images/flags/zambia.png',
    position: { top: '65%', left: '55.5%' }, // Zambia
    category: 'Senders & Receivers',
    continent: 'Southern Africa',
    width: 47454,
    height: 47454,
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    flagPath: '/assets/images/flags/South Africa.png',
    position: { top: '73%', left: '55%' }, // South Africa
    category: 'Senders & Receivers',
    continent: 'Southern Africa',
    width: 2990,
    height: 2990,
  },

  // Senders and Receivers - Europe (clustered, separated for visibility)
  {
    id: 'france',
    name: 'France',
    flagPath: '/assets/images/flags/France.png',
    position: { top: '28%', left: '49%' }, // France (adjusted for more space)
    category: 'Senders & Receivers',
    continent: 'Europe',
    width: 1526,
    height: 1526,
  },
  {
    id: 'belgium',
    name: 'Belgium',
    flagPath: '/assets/images/flags/Belgium.png',
    position: { top: '24%', left: '51%' }, // Belgium (north of France, more spacing)
    category: 'Senders & Receivers',
    continent: 'Europe',
    width: 1471,
    height: 1471,
  },
  {
    id: 'germany',
    name: 'Germany',
    flagPath: '/assets/images/flags/germany.png',
    position: { top: '26%', left: '53%' }, // Germany (east of Belgium, more spacing)
    category: 'Senders & Receivers',
    continent: 'Europe',
    width: 42333,
    height: 42333,
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
          <div className="flex flex-row justify-center gap-3 md:gap-6 mb-6 flex-nowrap">
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#A52A2A]"></div>
              <span className="text-[10px] md:text-sm text-text-secondary whitespace-nowrap">
                High Senders
              </span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#4169E1]"></div>
              <span className="text-[10px] md:text-sm text-text-secondary whitespace-nowrap">
                High Receivers
              </span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#2E8B57]"></div>
              <span className="text-[10px] md:text-sm text-text-secondary whitespace-nowrap">
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
                    {/* Flag Container - No Background */}
                    <div
                      className="relative flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full transition-all duration-500 ease-out"
                      style={{
                        transform: isHovered ? 'scale(1.4)' : 'scale(1)',
                        filter: isHovered ? 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))' : 'none',
                      }}
                    >
                      {/* Flag Image */}
                      <img
                        src={country.flagPath}
                        alt={`${country.name} flag`}
                        className="w-full h-full rounded-full object-cover"
                        loading="eager"
                      />
                    </div>

                    {/* Glow Effect - Only on Hover */}
                    {isHovered && (
                      <div
                        className="absolute inset-0 rounded-full animate-pulse"
                        style={{
                          backgroundColor: categoryColor,
                          opacity: 0.4,
                          animationDuration: '1.5s',
                          filter: 'blur(8px)',
                          transform: 'scale(1.5)',
                        }}
                      />
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

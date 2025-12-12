'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

// Country data with accurate geographic positions based on dotted world map
const countries = [
  // Senders & Receivers - North America
  {
    id: 'canada',
    name: 'Canada',
    flagCode: 'ca',
    position: { top: '25%', left: '14%' }, // Northern North America
    category: 'Senders & Receivers',
    continent: 'North America',
  },
  {
    id: 'usa',
    name: 'United States',
    flagCode: 'us',
    position: { top: '35%', left: '13%' }, // Central North America
    category: 'Senders & Receivers',
    continent: 'North America',
  },

  // High Senders - South America
  {
    id: 'brazil',
    name: 'Brazil',
    flagCode: 'br',
    position: { top: '62%', left: '26%' }, // Eastern South America
    category: 'High Senders',
    continent: 'South America',
  },

  // Senders & Receivers - Europe
  {
    id: 'uk',
    name: 'United Kingdom',
    flagCode: 'gb',
    position: { top: '28%', left: '46.5%' }, // Northwest Europe
    category: 'Senders & Receivers',
    continent: 'Europe',
  },
  {
    id: 'france',
    name: 'France',
    flagCode: 'fr',
    position: { top: '31%', left: '47.5%' }, // Western Europe
    category: 'Senders & Receivers',
    continent: 'Europe',
  },
  {
    id: 'belgium',
    name: 'Belgium',
    flagCode: 'be',
    position: { top: '29%', left: '48.8%' }, // Between UK and Germany
    category: 'Senders & Receivers',
    continent: 'Europe',
  },
  {
    id: 'germany',
    name: 'Germany',
    flagCode: 'de',
    position: { top: '29.5%', left: '50.5%' }, // Central Europe
    category: 'Senders & Receivers',
    continent: 'Europe',
  },
  {
    id: 'russia',
    name: 'Russia',
    flagCode: 'ru',
    position: { top: '25%', left: '67%' }, // Northern Eurasia
    category: 'High Senders',
    continent: 'Europe/Asia',
  },

  // High Senders - Middle East & Asia
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    flagCode: 'ae',
    position: { top: '39%', left: '57%' }, // Arabian Peninsula
    category: 'High Senders',
    continent: 'Middle East',
  },
  {
    id: 'india',
    name: 'India',
    flagCode: 'in',
    position: { top: '40%', left: '70%' }, // South Asia
    category: 'High Senders',
    continent: 'South Asia',
  },
  {
    id: 'china',
    name: 'China',
    flagCode: 'cn',
    position: { top: '35%', left: '76%' }, // East Asia
    category: 'High Senders',
    continent: 'Asia',
  },
  {
    id: 'japan',
    name: 'Japan',
    flagCode: 'jp',
    position: { top: '36%', left: '85%' }, // Far East
    category: 'High Senders',
    continent: 'Asia',
  },

  // High Senders - Oceania
  {
    id: 'australia',
    name: 'Australia',
    flagCode: 'au',
    position: { top: '68%', left: '82%' }, // Southern Oceania
    category: 'High Senders',
    continent: 'Oceania',
  },

  // High Receivers - West Africa
  {
    id: 'togo',
    name: 'Togo',
    flagCode: 'tg',
    position: { top: '51%', left: '47%' }, // West African coast
    category: 'High Receivers',
    continent: 'West Africa',
  },

  // Senders & Receivers - West Africa
  {
    id: 'nigeria',
    name: 'Nigeria',
    flagCode: 'ng',
    position: { top: '51.5%', left: '49.5%' }, // West Africa, east of Togo
    category: 'Senders & Receivers',
    continent: 'West Africa',
  },

  // Senders & Receivers - Central Africa
  {
    id: 'cameroon',
    name: 'Cameroon',
    flagCode: 'cm',
    position: { top: '52%', left: '51.5%' }, // Central Africa
    category: 'Senders & Receivers',
    continent: 'Central Africa',
  },
  {
    id: 'car',
    name: 'Central African Republic',
    flagCode: 'cf',
    position: { top: '51%', left: '54.5%' }, // Central Africa
    category: 'Senders & Receivers',
    continent: 'Central Africa',
  },
  {
    id: 'drc',
    name: 'DR Congo',
    flagCode: 'cd',
    position: { top: '56%', left: '54%' }, // Central Africa, south of CAR
    category: 'Senders & Receivers',
    continent: 'Central Africa',
  },

  // Senders & Receivers - East Africa
  {
    id: 'kenya',
    name: 'Kenya',
    flagCode: 'ke',
    position: { top: '54%', left: '57%' }, // East Africa
    category: 'Senders & Receivers',
    continent: 'East Africa',
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    flagCode: 'tz',
    position: { top: '59%', left: '57%' }, // East Africa, south of Kenya
    category: 'Senders & Receivers',
    continent: 'East Africa',
  },

  // Senders & Receivers - Southern Africa
  {
    id: 'zambia',
    name: 'Zambia',
    flagCode: 'zm',
    position: { top: '63%', left: '54.5%' }, // Southern Africa
    category: 'Senders & Receivers',
    continent: 'Southern Africa',
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    flagCode: 'za',
    position: { top: '69%', left: '54%' }, // Southern tip of Africa
    category: 'Senders & Receivers',
    continent: 'Southern Africa',
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
                    {/* Flag Container */}
                    <div
                      className="relative flex items-center justify-center transition-all duration-500 ease-out"
                      style={{
                        transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                        filter: isHovered ? 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))' : 'none',
                      }}
                    >
                      {/* Flag Image from CDN */}
                      <img
                        src={`https://flagcdn.com/w20/${country.flagCode}.png`}
                        srcSet={`https://flagcdn.com/w40/${country.flagCode}.png 2x`}
                        alt={`${country.name} flag`}
                        className="w-3 h-2 md:w-3.5 md:h-2.5 object-cover rounded-[1px] shadow-sm"
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

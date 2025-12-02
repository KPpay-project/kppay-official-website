import { images } from '@/types';
import React from 'react';
import Link from 'next/link';

const PlatformBusinessSection: React.FC = () => {
  const platforms = [
    {
      title: 'Marketplace',
      description: 'Calculate how much to save for your goals',
      icon: images.Icons.iconAuto,
      features: [
        'Set Custom Schedules',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
    },
    {
      title: 'SaaS Platform',
      description: 'Calculate how much to save for your goals',
      icon: images.Icons.iconCustom,
      features: [
        'Set Custom Schedules',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
    },
    {
      title: 'Gig Economy',
      description: 'Calculate how much to save for your goals',
      icon: images.Icons.iconDown,
      features: [
        'Set Custom Schedules',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-surface-primary container-padding">
      <div className="px-10 lg:px-0 max-w-7xl mx-auto">
        <h2 className="heading-bebas-light text-3xl md:text-4xl lg:text-5xl text-center text-text-main-dark mb-3 md:mb-4 px-4">
          BUILT FOR PLATFORM BUSINESS
        </h2>
        <p className="text-text-secondary text-center text-sm md:text-base lg:text-lg mb-8 md:mb-10 lg:mb-12 px-4">
          Support all major payment methods with optimized conversion rates
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-surface-secondary rounded-lg overflow-hidden fade-in flex flex-col"
            >
              {/* Card Header */}
              <div className="p-5 md:p-6 pb-3 md:pb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4">
                  <img
                    src={platform.icon}
                    alt={platform.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-text-primary font-bold text-lg md:text-xl mb-2">
                  {platform.title}
                </h3>
                <p className="text-text-secondary text-xs md:text-sm">
                  {platform.description}
                </p>
              </div>

              {/* Feature List with Gradient Background */}
              <div
                className="p-5 md:p-6 pt-3 md:pt-4 pb-6 md:pb-8 flex-grow rounded-lg space-y-2 mt-auto"
                style={{
                  background:
                    'linear-gradient(135deg, #00577A 0%, #153794 100%)',
                }}
              >
                <div className="space-y-2 mb-5 md:mb-6">
                  {platform.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center text-text-main-white text-xs md:text-sm"
                    >
                      <span className="mr-2 flex-shrink-0">○</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <Link href="/enterprise">
                  <button className="cursor-pointer w-full border-2 border-white text-white rounded-full px-5 md:px-6 py-2.5 md:py-3 hover:bg-white hover:text-brand-secondary transition-colors font-medium text-sm md:text-base">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformBusinessSection;

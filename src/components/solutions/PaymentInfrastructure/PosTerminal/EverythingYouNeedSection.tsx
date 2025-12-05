import { images, ROUTES } from '@/types';
import React from 'react';
import Link from 'next/link';

const EverythingYouNeedSection: React.FC = () => {
  const features = [
    {
      title: 'Tap to Pay',
      description: 'Calculate how much to save for your goals',
      icon: images.Icons.iconAuto,
      items: [
        'Set Custom Schedules',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
    },
    {
      title: 'Universal Acceptance',
      description: 'Plan for a comfortable retirement',
      icon: images.Icons.iconCustom,
      items: [
        'Set Custom Schedules',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
    },
    {
      title: 'Offline Capability',
      description: 'Forecast investment portfolio growth',
      icon: images.Icons.iconDown,
      items: [
        'Set Custom Schedules',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
    },
    {
      title: 'Enterprise Security',
      description: 'Forecast investment portfolio growth',
      icon: images.Icons.iconArrow,
      items: [
        'Set Custom Schedules',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
    },
  ];

  const businessTypes = [
    {
      title: 'Retail Stores',
      description:
        'Perfect for brick-and-mortar shops, boutiques, and retail chains',
      icon: images.Icons.iconAuto,
      pricing: '2.7% + 5¢',
      pricingLabel: 'PER TRANSACTION',
      features: [
        'Quick checkout',
        'Inventory integration',
        'Customer receipts',
        'Multi-location support',
      ],
    },
    {
      title: 'Restaurants & Cafes',
      description:
        'Streamline payments for dining, takeout, and delivery orders',
      icon: images.Icons.iconCustom,
      pricing: '2.7% + 5¢',
      pricingLabel: 'PER TRANSACTION',
      features: [
        'Table-side payments',
        'Split billing',
        'Tip management',
        'Order integration',
      ],
    },
    {
      title: 'Service Businesses',
      description: 'Ideal for salons, repair shops, and professional services',
      icon: images.Icons.iconDown,
      pricing: '2.7% + 5¢',
      pricingLabel: 'PER TRANSACTION',
      features: [
        'Appointment booking',
        'Service tracking',
        'Customer management',
        'Payment scheduling',
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white container-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Everything You Need Section */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <h2 className="heading-bebas-light text-3xl md:text-4xl lg:text-5xl text-center text-text-main-dark mb-3 md:mb-4">
            EVERYTHING YOU NEED
          </h2>
          <p className="text-text-secondary text-center text-sm md:text-base lg:text-lg mb-10 md:mb-12 px-4">
            Support all major payment methods with optimized conversion rates
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-surface-secondary rounded-lg overflow-hidden fade-in flex flex-col"
              >
                {/* Card Header */}
                <div className="p-5 md:p-6 pb-3 md:pb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-text-main-dark font-bold text-base md:text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-xs md:text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Feature List with Gradient Background */}
                <div
                  className="p-5 md:p-6 pt-3 md:pt-4 pb-6 md:pb-7 flex-grow rounded-lg space-y-2 mt-auto"
                  style={{
                    background:
                      'linear-gradient(135deg, #00577A 0%, #153794 100%)',
                  }}
                >
                  {feature.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center text-text-main-white text-xs md:text-sm"
                    >
                      <span className="mr-2 flex-shrink-0">○</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perfect for Any Business Section */}
        <div>
          <h2 className="heading-bebas-light text-3xl md:text-4xl lg:text-5xl text-center text-text-main-dark mb-10 md:mb-12 lg:mb-16">
            PERFECT FOR ANY BUSINESS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {businessTypes.map((business, index) => (
              <div
                key={index}
                className="bg-surface-secondary rounded-lg overflow-hidden fade-in flex flex-col"
              >
                {/* Card Header */}
                <div className="p-5 md:p-6 pb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4">
                    <img
                      src={business.icon}
                      alt={business.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-text-main-dark font-bold text-lg md:text-xl mb-2">
                    {business.title}
                  </h3>
                  <p className="text-text-secondary text-xs md:text-sm mb-4">
                    {business.description}
                  </p>

                  {/* Pricing */}
                  <div className="text-center py-3 mb-4">
                    <div className="text-2xl md:text-3xl font-bold text-text-main-dark mb-1">
                      {business.pricing}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {business.pricingLabel}
                    </div>
                  </div>
                </div>

                {/* Feature List with Gradient Background */}
                <div
                  className="p-5 md:p-6 pt-4 pb-6 md:pb-8 flex-grow rounded-lg mt-auto"
                  style={{
                    background:
                      'linear-gradient(135deg, #00577A 0%, #153794 100%)',
                  }}
                >
                  <div className="space-y-2 mb-5 md:mb-6">
                    {business.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center text-text-main-white text-xs md:text-sm"
                      >
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <Link href={ROUTES.ENTERPRISE}>
                    <button className="cursor-pointer w-full border-2 border-white text-white rounded-full px-5 md:px-6 py-2.5 md:py-3 hover:bg-white hover:text-brand-secondary transition-colors font-medium text-sm md:text-base">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EverythingYouNeedSection;

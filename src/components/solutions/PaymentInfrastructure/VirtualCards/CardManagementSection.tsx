import { images } from '@/types';
import React from 'react';

const CardManagementSection: React.FC = () => {
  const cardFeatures = [
    {
      title: 'Instant Virtual Cards',
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
      title: 'Spend Controls',
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
      title: 'Multi-Currency Support',
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

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-surface-primary container-padding">
      <div className="px-4 md:px-8 lg:px-16 xl:px-0 max-w-7xl mx-auto">
        <h2 className="heading-bebas-light text-3xl md:text-4xl lg:text-5xl text-center text-text-main-dark mb-3 md:mb-4">
          POWERFUL CARD MANAGEMENT
        </h2>
        <p className="text-text-secondary text-center text-sm md:text-base lg:text-lg mb-8 md:mb-10 lg:mb-12 px-4">
          Support all major payment methods with optimized conversion rates
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {cardFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-surface-secondary rounded-lg p-5 md:p-6 fade-in flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-text-primary font-bold text-base md:text-lg mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-xs md:text-sm mb-4 md:mb-6">
                {feature.description}
              </p>

              {/* Feature List */}
              <div
                className="rounded-lg p-3 md:p-4 space-y-2 mt-auto"
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
    </section>
  );
};

export default CardManagementSection;

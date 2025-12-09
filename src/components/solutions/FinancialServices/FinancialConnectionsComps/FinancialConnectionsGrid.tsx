import React from 'react';
import { images } from '@/types';

const FinancialConnectionsGrid: React.FC = () => {
  const features = [
    {
      title: 'Bank Account Linking',
      description: 'Reports generated automatically on your schedule',
      icon: images.Icons.iconAuto,
      items: [
        'Set Custom Schedules',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
    },
    {
      title: 'Mobile Money Integration',
      description: 'Calculate how much to save for your goals',
      icon: images.Icons.iconCustom,
      items: [
        'Set Custom Schedules',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
    },
    {
      title: 'Digital Wallet Connections',
      description: 'Plan for a comfortable retirement',
      icon: images.Icons.iconDown,
      items: [
        'Set Custom Schedules',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
    },
    {
      title: 'Cryptocurrency Wallets',
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
    <section className="py-16 bg-surface-primary container-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-text-main-dark mb-12">
          CONNECT ANY FINANCIAL SERVICE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface-secondary rounded-lg p-6 fade-in flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-text-primary font-bold text-lg mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm mb-6">
                {feature.description}
              </p>

              {/* Feature List with Gradient Background */}
              <div
                className="rounded-lg p-4 space-y-2 mt-auto"
                style={{
                  background:
                    'linear-gradient(135deg, #153794 0%, #A50E23 100%)',
                }}
              >
                {feature.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center text-text-main-white text-sm"
                  >
                    <span className="mr-2">○</span>
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

export default FinancialConnectionsGrid;

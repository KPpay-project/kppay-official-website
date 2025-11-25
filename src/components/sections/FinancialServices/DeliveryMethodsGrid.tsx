import React from 'react';
import { images } from '@/types';

const DeliveryMethodsGrid: React.FC = () => {
  const methods = [
    {
      title: 'Email Delivery',
      description: 'High-level overview for leadership and stakeholders',
      icon: images.Icons.iconEmail,
      pricing: 'Included',
      pricingLabel: 'PER MONTH',
      features: [
        'Set Custom Schedules',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
      buttonText: 'Setup Delivery',
    },
    {
      title: 'Secure Portal',
      description: 'Detailed financial performance and accounting data',
      icon: images.Icons.iconUp,
      pricing: 'Included',
      pricingLabel: 'PER MONTH',
      features: [
        'Set Custom Schedules',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
      buttonText: 'Setup Delivery',
    },
    {
      title: 'API Access',
      description: 'Operational metric and performance indicators',
      icon: images.Icons.iconApi,
      pricing: '$50/month',
      pricingLabel: 'PER MONTH',
      features: [
        'Set Custom Schedules',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
      buttonText: 'Setup Delivery',
    },
    {
      title: 'Flexible Delivery Methods',
      description: 'Customer behavior and satisfaction metrics',
      icon: images.Icons.iconCustom,
      pricing: '$25/month',
      pricingLabel: 'PER MONTH',
      features: [
        'Set Custom Schedules',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
      buttonText: 'Setup Delivery',
    },
  ];

  return (
    <section className="py-16 bg-surface-primary container-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-text-main-dark mb-12">
          FLEXIBLE DELIVERY METHODS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <div
              key={index}
              className="bg-surface-secondary rounded-lg p-6 flex flex-col h-full fade-in"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4">
                <img
                  src={method.icon}
                  alt={method.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-text-primary font-bold text-lg mb-2">
                {method.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm mb-6">
                {method.description}
              </p>

              {/* Blue box section - pushed to bottom */}
              <div className="bg-brand-secondary rounded-lg mt-auto">
                {/* Pricing Box */}
                <div className="border-2 border-white/20 rounded-lg p-4 m-4 mb-6">
                  <p className="text-text-main-white text-lg font-bold text-center mb-1">
                    {method.pricing}
                  </p>
                  <p className="text-text-main-white text-xs text-center">
                    {method.pricingLabel}
                  </p>
                </div>

                {/* Feature List */}
                <div className="px-4 pb-4 space-y-2 mb-6">
                  {method.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center text-text-main-white text-sm"
                    >
                      <span className="mr-2">○</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <button className="w-full bg-surface-primary border-2 border-interactive-primary text-interactive-primary font-semibold py-3 rounded-full hover:bg-interactive-primary hover:text-text-main-white transition-colors mt-4">
                {method.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryMethodsGrid;

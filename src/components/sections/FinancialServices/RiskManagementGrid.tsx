import React from 'react';
import { images } from '@/types';

const RiskManagement: React.FC = () => {
  const risks = [
    {
      title: 'Financial Crime Prevention',
      subtitle: '24/7 Monitoring',
      icon: images.Icons.ios,
      features: [
        'Sanction Compliance',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
    },
    {
      title: 'Data Protection',
      subtitle: 'Continuous Monitoring',
      icon: images.Icons.ios,
      features: [
        'Sanction Compliance',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
    },
    {
      title: 'Operational Risk',
      subtitle: 'Real-time Monitoring',
      icon: images.Icons.ios,
      features: [
        'Sanction Compliance',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
    },
    {
      title: 'Cyber Security',
      subtitle: '24/7 Monitoring',
      icon: images.Icons.ios,
      features: [
        'Sanction Compliance',
        'Multiple Formats',
        'Recurring Delivery',
        'No Manual Work',
      ],
    },
  ];

  return (
    <section className="py-16 bg-surface-secondary container-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-bebas text-4xl md:text-5xl text-center text-text-main-dark mb-12">
          COMPREHENSIVE RISK MANAGEMENT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {risks.map((risk, index) => (
            <div
              key={index}
              className="bg-surface-primary rounded-lg p-6 fade-in"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4">
                <img
                  src={risk.icon}
                  alt={risk.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-text-primary font-bold text-lg mb-1">
                {risk.title}
              </h3>

              {/* Subtitle */}
              <p className="text-text-secondary text-sm mb-6">
                {risk.subtitle}
              </p>

              {/* Feature List */}
              <div className="bg-brand-primary rounded-lg p-4 space-y-2">
                {risk.features.map((feature, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskManagement;

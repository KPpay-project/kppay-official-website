import React from 'react';
import { images } from '@/types';

const FinancialPlanningGrid: React.FC = () => {
  const tools = [
    {
      title: 'Reduced Risk',
      description: 'See how your savings will grow over time',
      stat: '90% reduction in compliance issues',
      icon: images.Icons.ios,
    },
    {
      title: 'Automated Process',
      description: 'Calculate how much to save for your goals',
      stat: '70% time savings on compliance tasks',
      icon: images.Icons.ios,
    },
    {
      title: 'Real-time Monitoring',
      description: 'Plan for a comfortable retirement',
      stat: '100% real-time compliance visibility',
      icon: images.Icons.ios,
    },
    {
      title: 'Expert Support',
      description: 'Forecast investment portfolio growth',
      stat: '24/7 expert consultation available',
      icon: images.Icons.ios,
    },
  ];

  return (
    <section className="py-16 bg-surface-primary container-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-bebas text-4xl md:text-5xl text-center text-text-main-dark mb-12">
          FINANCIAL PLANNING TOOLS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-surface-secondary rounded-lg p-6 fade-in"
            >
              {/* Title */}
              <h3 className="text-text-primary font-bold text-lg mb-2">
                {tool.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm mb-6">
                {tool.description}
              </p>

              {/* Stat Box */}
              <div className="bg-brand-primary rounded-lg p-4">
                <p className="text-text-main-white text-sm font-medium">
                  {tool.stat}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialPlanningGrid;

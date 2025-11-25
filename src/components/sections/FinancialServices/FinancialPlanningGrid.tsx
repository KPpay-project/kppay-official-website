import React from 'react';
import { images } from '@/types';

const FinancialPlanningGrid: React.FC = () => {
  const tools = [
    {
      title: 'Reduced Risk',
      description: 'See how your savings will grow over time',
      stat: '90% reduction in compliance issues',
    },
    {
      title: 'Automated Process',
      description: 'Calculate how much to save for your goals',
      stat: '70% time savings on compliance tasks',
    },
    {
      title: 'Real-time Monitoring',
      description: 'Plan for a comfortable retirement',
      stat: '100% real-time compliance visibility',
    },
    {
      title: 'Expert Support',
      description: 'Forecast investment portfolio growth',
      stat: '24/7 expert consultation available',
    },
  ];

  return (
    <section className="py-16 bg-white container-padding">
      <div className="max-w-7xl mx-auto">
        <h2
          className="heading-bebas-light text-4xl md:text-5xl text-center mb-12"
          style={{ color: '#000000' }}
        >
          FINANCIAL PLANNING TOOLS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="rounded-lg p-6 flex flex-col h-full"
              style={{ backgroundColor: '#f4f7fa' }}
            >
              {/* Title */}
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: '#101828' }}
              >
                {tool.title}
              </h3>

              {/* Description */}
              <p className="text-sm mb-6" style={{ color: '#667085' }}>
                {tool.description}
              </p>

              {/* Stat Box */}
              <div
                className="rounded-lg p-4 mt-auto"
                style={{ backgroundColor: '#153794' }}
              >
                <p className="text-sm font-medium" style={{ color: '#ffffff' }}>
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

import React from 'react';
import { Button } from '@/types';

const ComplianceAndSecuritySection: React.FC = () => {
  const providers = [
    {
      initials: 'MP',
      name: 'M-Pesa',
      stats: '51M+ Users',
      region: 'East Africa',
    },
    {
      initials: 'OM',
      name: 'Orange Money',
      stats: '40M+ Users',
      region: 'West Africa',
    },
    {
      initials: 'MM',
      name: 'MTN Mobile Money',
      stats: '55M+ Users',
      region: 'Africa',
    },
    {
      initials: 'PP',
      name: 'PayPal',
      stats: '400M+ Users',
      region: 'Global',
    },
    {
      initials: 'OM',
      name: 'Chase Bank',
      stats: '65M+ Users',
      region: 'US',
    },
    {
      initials: 'SB',
      name: 'Standard Bank',
      stats: '20M+ Users',
      region: 'Africa',
    },
  ];

  return (
    <section className="py-20 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Heading */}
        <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-text-main-dark mb-12">
          COMPLIANCE AND SECURITY
        </h2>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-border-secondary hover:shadow-md transition-shadow duration-300 fade-in"
            >
              <div className="flex items-center gap-4">
                {/* Gradient Circle Avatar */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{
                    background:
                      'linear-gradient(135deg, #153794 0%, #A50E23 100%)',
                  }}
                >
                  {provider.initials}
                </div>

                {/* Provider Info */}
                <div className="flex-1">
                  <h3 className="text-text-primary font-bold text-base mb-0.5">
                    {provider.name}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {provider.stats} || {provider.region}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Providers Text */}
        <p className="text-center text-text-secondary text-sm mb-8">
          and 190+ more providers worldwide
        </p>

        {/* View All Providers Button */}
        <div className="flex justify-center">
          <Button
            variant="outlined"
            size="md"
            className="border-2 border-text-secondary-dark text-text-secondary-dark hover:bg-text-secondary-dark hover:text-white transition-all"
          >
            View All Providers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComplianceAndSecuritySection;

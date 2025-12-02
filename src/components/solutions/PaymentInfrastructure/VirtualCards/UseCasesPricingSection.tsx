import React from 'react';
import Link from 'next/link';

const UseCasesPricingSection: React.FC = () => {
  const useCases = [
    {
      title: 'Corporate Expense Management',
      description: 'Banking and compliance solutions built for scale',
      metrics: [
        { label: '90% faster expense processing' },
        { label: '90% faster expense processing' },
        { label: '90% faster expense processing' },
      ],
    },
    {
      title: 'Digital Marketing Spend',
      description: 'Banking and compliance solutions built for scale',
      metrics: [
        { label: '100% Budget Compliance' },
        { label: '90% faster expense processing' },
        { label: '90% faster expense processing' },
      ],
    },
    {
      title: 'Vendor Payments',
      description: 'Banking and compliance solutions built for scale',
      metrics: [
        { label: '80% faster vendor payments' },
        { label: '90% faster expense processing' },
        { label: '90% faster expense processing' },
      ],
    },
  ];

  const pricingItems = [
    {
      value: '$2',
      label: 'Per virtual card',
    },
    {
      value: '1.5%',
      label: 'Transaction Fee',
    },
    {
      value: 'FREE',
      label: 'API Integration',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white container-padding">
      <div className="px-10 lg:px-0 max-w-7xl mx-auto px-4 md:px-8">
        {/* Common Use Cases Section */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <h2 className="heading-bebas-light text-3xl md:text-4xl lg:text-5xl text-center text-text-main-dark mb-12 md:mb-16">
            COMMON USE CASES
          </h2>

          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8"
              >
                {/* Left Side - Title and Description */}
                <div className="lg:w-1/3 lg:flex-shrink-0">
                  <h3 className="text-text-main-dark font-bold text-xl md:text-2xl mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-text-secondary text-sm md:text-base">
                    {useCase.description}
                  </p>
                </div>

                {/* Right Side - Metrics and Button */}
                <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">
                  {/* Metrics Cards */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 w-full">
                    {useCase.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="border-2 border-border-secondary rounded-lg p-4 md:p-5 text-center hover:shadow-md transition-shadow"
                      >
                        <p className="text-text-primary text-xs md:text-sm font-medium">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <Link href="/enterprise" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-text-main-dark rounded-full px-6 py-3 hover:bg-surface-secondary transition-colors whitespace-nowrap">
                      <span className="text-text-primary font-medium text-sm md:text-base">
                        Learn More
                      </span>
                      <span>→</span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple, Transparent Pricing Section */}
        <div className="bg-surface-secondary p-8 rounded-md">
          <h2 className="heading-bebas-light text-3xl md:text-4xl lg:text-5xl text-center text-text-main-dark mb-12 md:mb-16">
            SIMPLE, TRANSPARENT PRICING
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
            {pricingItems.map((item, index) => (
              <div key={index} className="text-center px-4">
                <div className="heading-bebas-light text-5xl md:text-6xl lg:text-7xl text-text-main-dark mb-3 md:mb-4">
                  {item.value}
                </div>
                <p className="text-text-primary text-sm md:text-base font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesPricingSection;

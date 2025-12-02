import React from 'react';

const SimplePricingGetStartedSection: React.FC = () => {
  const pricingItems = [
    {
      value: '2.9%',
      description: 'Processing $2B+ annually for 500+ enterprise clients',
    },
    {
      value: 'FREE',
      description: 'Operations across 50+ countries with local compliance',
    },
    {
      value: '$0',
      description: 'Dedicated support team with 99.9% uptime guarantee',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Download The App',
      description:
        'Add KP Pay SDK to your iOS or Android project using package managers',
    },
    {
      number: '2',
      title: 'Initialize',
      description:
        'Configure the SDK with your API keys and payment preferences',
    },
    {
      number: '3',
      title: 'Process Payment',
      description: 'Create payment sessions and handle successful transactions',
    },
    {
      number: '4',
      title: 'Handle Response',
      description: "Receive payment confirmations and update your app's state",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white container-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Simple Pricing Section */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <h2 className="heading-bebas-light text-3xl md:text-4xl lg:text-5xl text-center text-text-main-dark mb-12 md:mb-16">
            SIMPLE PRICING
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {pricingItems.map((item, index) => (
              <div
                key={index}
                className="bg-surface-secondary rounded-lg p-6 md:p-8 text-center"
              >
                <div className="heading-bebas-light text-5xl md:text-6xl lg:text-7xl text-text-main-dark mb-4 md:mb-6">
                  {item.value}
                </div>
                <p className="text-text-primary text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Get Started in Minutes Section */}
        <div>
          <h2 className="heading-bebas-light text-3xl md:text-4xl lg:text-5xl text-center text-text-main-dark mb-12 md:mb-16 lg:mb-20">
            GET STARTED IN MINUTES
          </h2>

          {/* Desktop/Tablet View */}
          <div className="hidden md:flex items-start justify-between max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center flex-1 max-w-[200px]">
                  <div className="text-5xl lg:text-6xl font-bold text-text-main-dark mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-text-main-dark text-base lg:text-lg mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-xs lg:text-sm text-center">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex items-center justify-center pt-8 px-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-text-main-dark"></div>
                      <div className="w-12 lg:w-16 h-0.5 bg-text-main-dark"></div>
                      <div className="w-3 h-3 rounded-full bg-text-main-dark"></div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="text-5xl font-bold text-text-main-dark mb-3">
                  {step.number}
                </div>
                <h3 className="font-bold text-text-main-dark text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm max-w-sm">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="flex flex-col items-center my-6">
                    <div className="w-3 h-3 rounded-full bg-text-main-dark mb-2"></div>
                    <div className="w-0.5 h-8 bg-text-main-dark"></div>
                    <div className="w-3 h-3 rounded-full bg-text-main-dark mt-2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplePricingGetStartedSection;

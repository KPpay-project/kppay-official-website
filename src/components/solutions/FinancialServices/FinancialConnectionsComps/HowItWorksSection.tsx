import React from 'react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Document Collection',
      description:
        'Add KP Pay SDK to your iOS or Android project using package managers',
    },
    {
      number: '2',
      title: 'AI Verification',
      description:
        'Configure the SDK with your API keys and payment preferences',
    },
    {
      number: '3',
      title: 'Biometric Check',
      description:
        'Create payment sessions and handle successful transactions',
    },
    {
      number: '4',
      title: 'Risk Assessment',
      description:
        "Receive payment confirmations and update your app's state",
    },
  ];

  return (
    <section className="py-20 bg-surface-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Heading */}
        <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-text-main-dark mb-16">
          HOW IT WORKS
        </h2>

        {/* Steps Container - Desktop */}
        <div className="hidden lg:flex items-start justify-between gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step */}
              <div className="flex-1 flex flex-col items-center fade-in">
                {/* Number */}
                <div className="text-6xl font-bold text-text-main-dark mb-6">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-text-primary font-bold text-lg mb-3 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm text-center leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Dotted Line Connector */}
              {index < steps.length - 1 && (
                <div className="flex-shrink-0 w-24 border-t-2 border-dotted border-text-secondary-dark mt-12"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Steps Container - Mobile/Tablet */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="fade-in">
              {/* Number */}
              <div className="text-5xl font-bold text-text-main-dark mb-4">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-text-primary font-bold text-lg mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

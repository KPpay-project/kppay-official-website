import React from 'react';

const PartnerGetStartedSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Apply',
      description:
        'Add KP Pay SDK to your iOS or Android project using package managers',
    },
    {
      number: 2,
      title: 'Review',
      description:
        'Configure the SDK with your API keys and payment preferences',
    },
    {
      number: 3,
      title: 'Onboard',
      description: 'Create payment sessions and handle successful transactions',
    },
    {
      number: 4,
      title: 'Launch',
      description: "Receive payment confirmations and update your app's state",
    },
  ];

  const resources = [
    {
      title: 'Technical Documentation',
      description:
        'Automated report generation saves hours of manual work each month',
    },
    {
      title: 'Marketing Materials',
      description:
        'Automated compliance reporting keeps you audit-ready at all times',
    },
    {
      title: 'Training Programs',
      description:
        'Regular insights help you identify trends and opportunities faster',
    },
    {
      title: 'Partner Portal',
      description:
        'Regular insights help you identify trends and opportunities faster',
    },
  ];

  return (
    <section className="py-20 bg-surface-primary">
      <div className="container-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Get Started Section */}
        <div className="mb-20">
          <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-[#1a1a2e] mb-16 uppercase">
            Get Started
          </h2>

          {/* Steps Timeline */}
          <div className="max-w-6xl mx-auto">
            {/* Desktop View */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-[30px] left-0 right-0 h-[2px] bg-gray-300" />

                <div className="grid grid-cols-4 gap-8 relative">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      {/* Number with dots */}
                      <div className="relative mb-6">
                        {/* Left dot */}
                        {index > 0 && (
                          <div className="absolute left-[-4.5rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-400" />
                        )}

                        {/* Number */}
                        <div className="relative z-10 bg-surface-primary px-4">
                          <span className="heading-bebas-light text-6xl text-[#1a1a2e]">
                            {step.number}
                          </span>
                        </div>

                        {/* Right dot */}
                        {index < steps.length - 1 && (
                          <div className="absolute right-[-4.5rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-400" />
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="heading-bebas-light text-5xl text-[#1a1a2e]">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Resources Section */}
        <div>
          <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-[#1a1a2e] mb-16 uppercase">
            Partner Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-3">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerGetStartedSection;

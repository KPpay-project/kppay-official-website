import React from 'react';

const BankGradeSecuritySection: React.FC = () => {
  const securityFeatures = [
    {
      title: '24 BIT',
      subtitle: 'ENCRYPTION',
      description: 'End-to-End Data Protection',
    },
    {
      title: 'OAUTH',
      subtitle: '2.0',
      description: 'Secure Authentication',
    },
    {
      title: 'PCI',
      subtitle: 'COMPLIANT',
      description: 'Industry Standards',
    },
    {
      title: 'SOC 2',
      subtitle: 'TYPE II',
      description: 'Customer Satisfaction',
    },
  ];

  return (
    <section className="py-20 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Heading */}
        <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-text-main-dark mb-6">
          BANK-GRADE SECURITY
        </h2>

        {/* Subtitle */}
        <p className="text-center text-text-secondary text-base mb-16 max-w-3xl mx-auto">
          Join thousands building wealth with KP Pay savings and investments
        </p>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center fade-in">
              {/* Title & Subtitle */}
              <div className="mb-4">
                <h3 className="heading-bebas text-3xl md:text-4xl text-text-main-dark leading-tight">
                  {feature.title}
                </h3>
                <h3 className="heading-bebas text-3xl md:text-4xl text-text-main-dark leading-tight">
                  {feature.subtitle}
                </h3>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BankGradeSecuritySection;

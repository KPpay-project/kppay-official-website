import React from 'react';
import { CheckCircle, ShoppingCart } from 'lucide-react';

const ComplianceAndSecurity: React.FC = () => {
  const complianceCertifications = [
    { name: 'KYC AML', description: 'Prorated billing for plan changes' },
    { name: 'DGPR', description: 'Prorated billing for plan changes' },
    { name: 'PCI DSS', description: 'Prorated billing for plan changes' },
    { name: 'SOC 2', description: 'Prorated billing for plan changes' },
    { name: 'ISO 27001', description: 'Prorated billing for plan changes' },
    { name: 'CCPA', description: 'Prorated billing for plan changes' },
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description:
        'Perfect for brick-and-mortar shops, boutiques, and retail chains',
      features: [
        'Quick checkout',
        'Inventory integration',
        'Customer receipts',
        'Multi-location support',
      ],
    },
    {
      title: 'Crypto Currency',
      description:
        'Perfect for brick-and-mortar shops, boutiques, and retail chains',
      features: [
        'Quick checkout',
        'Inventory integration',
        'Customer receipts',
        'Multi-location support',
      ],
    },
    {
      title: 'E-Commerce',
      description:
        'Perfect for brick-and-mortar shops, boutiques, and retail chains',
      features: [
        'Quick checkout',
        'Inventory integration',
        'Customer receipts',
        'Multi-location support',
      ],
    },
  ];

  return (
    <section className="py-16 bg-surface-primary">
      <div className="container-padding">
        <div className="max-w-7xl mx-auto bg-surface-secondary rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16">
          {/* Compliance Section */}
          <div className="mb-20">
            <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-text-main-dark mb-12">
              COMPLIANCE AND SECURITY
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-surface-primary rounded-lg border-2 border-border-secondary p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle
                      className="w-8 h-8 text-brand-accent flex-shrink-0 mt-1"
                      strokeWidth={2}
                    />
                    <div>
                      <h3 className="text-text-primary font-bold text-xl mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Use Cases Section */}
          <div>
            <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-text-main-dark mb-12">
              COMMON USE CASES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-surface-primary rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
                >
                  {/* Top Section - Icon, Title, Description */}
                  <div className="p-8 bg-surface-secondary">
                    <div className="w-16 h-16 mb-6">
                      <ShoppingCart
                        className="w-full h-full text-brand-accent"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="text-text-primary font-bold text-2xl mb-3">
                      {useCase.title}
                    </h3>

                    <p className="text-text-secondary text-base leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>

                  {/* Bottom Section - Feature List */}
                  <div
                    className="p-8 mt-auto rounded-b-lg"
                    style={{
                      background:
                        'linear-gradient(135deg, #153794 0%, #A50E23 100%)',
                    }}
                  >
                    <ul className="space-y-3">
                      {useCase.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-text-main-white text-base"
                        >
                          <span className="mr-3 text-lg">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceAndSecurity;

import React from 'react';

interface FeatureCardProps {
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ description }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const CorporateBankingSuite = () => {
  const financialManagement = [
    'Real-time balance and transaction monitoring',
    'Automated accounting integrations (QuickBooks, Xero)',
    'Cash flow forecasting and analytics',
    'Multi-entity accounting and reporting',
  ];

  const paymentProcessing = [
    'Accept customer payments directly to business account',
    'Batch payment processing for vendors and suppliers',
    'International wire transfers and SWIFT payments',
    'Payment scheduling and recurring transactions',
  ];

  const complianceSecurity = [
    'KYB (Know Your Business) verification',
    'AML compliance monitoring and reporting',
    'Transaction monitoring and fraud detection',
    'Regulatory reporting and tax documentation',
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Complete Business Banking Suite
        </h2>

        {/* Financial Management Section */}
        <div className="mb-16">
          <h2 className="text-gray-900 text-2xl md:text-3xl font-bold mb-6">
            Financial Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialManagement.map((description, index) => (
              <FeatureCard key={index} description={description} />
            ))}
          </div>
        </div>

        {/* Payment Processing Section */}
        <div className="mb-16">
          <h2 className="text-gray-900 text-2xl md:text-3xl font-bold mb-6">
            Payment Processing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentProcessing.map((description, index) => (
              <FeatureCard key={index} description={description} />
            ))}
          </div>
        </div>

        {/* Compliance & Security Section */}
        <div>
          <h2 className="text-gray-900 text-2xl md:text-3xl font-bold mb-6">
            Compliance & Security
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceSecurity.map((description, index) => (
              <FeatureCard key={index} description={description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateBankingSuite;

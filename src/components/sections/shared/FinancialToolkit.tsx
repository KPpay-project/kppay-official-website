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

const FinancialToolkit = () => {
  const moneyManagement = [
    'Real-time spending notifications and balance updates',
    'Automatic savings with smart round-up features',
    'Bill payment scheduling and recurring transfers',
    'Expense categorization and spending analytics',
  ];

  const securityProtection = [
    'Biometric login with Touch ID and Face ID',
    'Real-time fraud monitoring and instant alerts',
    'Card controls with instant freeze and unfreeze',
    'FDIC insurance up to $250,000 per account',
  ];

  const financialGrowth = [
    'High-yield savings accounts with competitive rates',
    'Investment platform with robo-advisor options',
    'Credit score monitoring and improvement tips',
    'Financial planning tools and retirement calculators',
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Complete Financial Toolkit
        </h2>

        {/* Money Management Section */}
        <div className="mb-16">
          <h3 className="text-text-primary text-xl md:text-2xl font-semibold mb-6">
            Money Management
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moneyManagement.map((description, index) => (
              <FeatureCard key={index} description={description} />
            ))}
          </div>
        </div>

        {/* Security & Protection Section */}
        <div className="mb-16">
          <h3 className="text-text-primary text-xl md:text-2xl font-semibold mb-6">
            Security & Protection
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityProtection.map((description, index) => (
              <FeatureCard key={index} description={description} />
            ))}
          </div>
        </div>

        {/* Financial Growth Section */}
        <div>
          <h3 className="text-text-primary text-xl md:text-2xl font-semibold mb-6">
            Financial Growth
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialGrowth.map((description, index) => (
              <FeatureCard key={index} description={description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialToolkit;

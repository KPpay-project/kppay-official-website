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

const SavingsInvestmentTools = () => {
  const smartSavingTools = [
    'Automatic round-up savings from every purchase',
    'Recurring transfers with customizable schedules',
    'Goal-based savings with visual progress tracking',
    'Spending insights to optimize saving opportunities',
  ];

  const investmentManagement = [
    'Robo-advisor with personalized portfolio allocation',
    'Tax-loss harvesting to minimize tax impact',
    'Automatic rebalancing to maintain target allocation',
    'Access to human financial advisors for guidance',
  ];

  const financialPlanning = [
    'Retirement planning calculators and projections',
    'Emergency fund recommendations based on expenses',
    'Education savings plans with tax advantages',
    'Estate planning tools and beneficiary management',
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Smart Savings & Investment Tools
        </h2>

        {/* Smart Saving Tools Section */}
        <div className="mb-16">
          <h3 className="text-text-primary text-xl md:text-2xl font-semibold mb-6">
            Smart Saving Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {smartSavingTools.map((description, index) => (
              <FeatureCard key={index} description={description} />
            ))}
          </div>
        </div>

        {/* Investment Management Section */}
        <div className="mb-16">
          <h3 className="text-text-primary text-xl md:text-2xl font-semibold mb-6">
            Investment Management
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentManagement.map((description, index) => (
              <FeatureCard key={index} description={description} />
            ))}
          </div>
        </div>

        {/* Financial Planning Section */}
        <div>
          <h3 className="text-text-primary text-xl md:text-2xl font-semibold mb-6">
            Financial Planning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialPlanning.map((description, index) => (
              <FeatureCard key={index} description={description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsInvestmentTools;

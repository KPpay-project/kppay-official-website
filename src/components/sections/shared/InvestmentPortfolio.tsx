import React from 'react';

interface PortfolioCardProps {
  title: string;
  description: string;
  expectedReturn: string;
  riskLevel: string;
  allocation: string;
  buttonText: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  expectedReturn,
  riskLevel,
  allocation,
  buttonText,
}) => {
  return (
    <div className="bg-gray-100 rounded-3xl p-6 flex flex-col">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <div className="bg-gray-800 rounded-2xl p-6 flex-grow flex flex-col justify-between">
        <div className="space-y-3">
          <div className="border border-gray-600 rounded-lg p-4 text-center">
            <div className="text-white font-bold mb-1">{expectedReturn}</div>
            <div className="text-xs text-gray-400 uppercase">
              Expected Return
            </div>
          </div>

          <div className="border border-gray-600 rounded-lg p-4 text-center">
            <div className="text-white font-bold mb-1">{riskLevel}</div>
            <div className="text-xs text-gray-400 uppercase">Risk Level</div>
          </div>

          <div className="border border-gray-600 rounded-lg p-4 text-center">
            <div className="text-white font-bold mb-1">{allocation}</div>
            <div className="text-xs text-gray-400 uppercase">
              Asset Allocation
            </div>
          </div>
        </div>

        <button className="w-full bg-white text-gray-900 py-3 px-6 rounded-full font-medium hover:bg-gray-100 transition-colors mt-6">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const InvestmentPortfolio = () => {
  const portfolios = [
    {
      title: 'Conservative',
      description: 'Low-risk portfolio focused on capital preservation',
      expectedReturn: '4-6%',
      riskLevel: 'Low',
      allocation: '80% Bonds, 20% Stocks',
      buttonText: 'Select Portfolio',
    },
    {
      title: 'Balanced',
      description: 'Moderate risk with balanced growth and income',
      expectedReturn: '6-8%',
      riskLevel: 'Medium',
      allocation: '40% Bonds, 60% Stocks',
      buttonText: 'Select Portfolio',
    },
    {
      title: 'Growth',
      description: 'Higher growth potential with equity focus',
      expectedReturn: '8-12%',
      riskLevel: 'High',
      allocation: '20% Bonds, 80% Stocks',
      buttonText: 'Select Portfolio',
    },
    {
      title: 'Aggressive',
      description: 'Maximum growth potential for long-term investors',
      expectedReturn: '10-15%',
      riskLevel: 'Very High',
      allocation: '5% Bonds, 95% Stocks',
      buttonText: 'Select Portfolio',
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Investment Portfolio Options
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolios.map((portfolio, index) => (
            <PortfolioCard key={index} {...portfolio} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPortfolio;

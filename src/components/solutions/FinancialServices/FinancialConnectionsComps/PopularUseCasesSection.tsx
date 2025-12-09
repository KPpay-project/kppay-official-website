import React from 'react';

const PopularUseCasesSection: React.FC = () => {
  const useCases = [
    {
      title: 'Personal Finance Apps',
      description:
        'Help users Manage all their accounts in one place with real-time balances and transactions',
      cases: [
        'Account aggregation',
        'Spending Insights',
        'Budget Tracking',
        'Bill Reminders',
      ],
    },
    {
      title: 'Marketplace Platforms',
      description:
        'Help users Manage all their accounts in one place with real-time balances and transactions',
      cases: [
        'Instant Seller Payouts',
        'Buyer Fund Collection',
        'Split Payments',
        'Escrow Services',
      ],
    },
    {
      title: 'Investment Platforms',
      description:
        'Help users Manage all their accounts in one place with real-time balances and transactions',
      cases: [
        'Easy Funding',
        'Quick Withdrawals',
        'Portfolio Management',
        'Auto-Investing',
      ],
    },
  ];

  return (
    <section className="py-20 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Heading */}
        <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-text-main-dark mb-16">
          POPULAR USE CASES
        </h2>

        {/* Use Cases Container */}
        <div className="space-y-12">
          {useCases.map((useCase, index) => (
            <div key={index}>
              {/* Category Title */}
              <h3 className="text-text-primary font-bold text-2xl mb-2">
                {useCase.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-base mb-6 leading-relaxed">
                {useCase.description}
              </p>

              {/* Use Case Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {useCase.cases.map((caseItem, caseIndex) => (
                  <div
                    key={caseIndex}
                    className="bg-surface-primary border-2 border-border-secondary rounded-lg px-6 py-4 text-center text-text-primary text-base font-medium hover:border-brand-primary hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    {caseItem}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularUseCasesSection;

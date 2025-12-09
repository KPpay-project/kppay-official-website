import React from 'react';

interface Opportunity {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  examples: string[];
}

const PartnershipOpportunitiesSection = () => {
  const opportunities: Opportunity[] = [
    {
      icon: '🔧',
      title: 'Technology Partners',
      description: 'Comprehensive financial statements and accounting reports',
      benefits: [
        'Profit & Loss Statement',
        'Balance Sheet',
        'Cash Flow Statement',
        'Tax Summaries',
      ],
      examples: [
        'E-Commerce Platforms',
        'POS Systems',
        'Accounting Software',
        'CRM Platforms',
      ],
    },
    {
      icon: '🤝',
      title: 'Referral Partners',
      description: 'Comprehensive financial statements and accounting reports',
      benefits: [
        'Profit & Loss Statement',
        'Balance Sheet',
        'Cash Flow Statement',
        'Tax Summaries',
      ],
      examples: [
        'E-Commerce Platforms',
        'POS Systems',
        'Accounting Software',
        'CRM Platforms',
      ],
    },
    {
      icon: '📢',
      title: 'Channel Partners',
      description: 'Comprehensive financial statements and accounting reports',
      benefits: [
        'Profit & Loss Statement',
        'Balance Sheet',
        'Cash Flow Statement',
        'Tax Summaries',
      ],
      examples: [
        'E-Commerce Platforms',
        'POS Systems',
        'Accounting Software',
        'CRM Platforms',
      ],
    },
    {
      icon: '💡',
      title: 'Solution Partners',
      description: 'Comprehensive financial statements and accounting reports',
      benefits: [
        'Profit & Loss Statement',
        'Balance Sheet',
        'Cash Flow Statement',
        'Tax Summaries',
      ],
      examples: [
        'E-Commerce Platforms',
        'POS Systems',
        'Accounting Software',
        'CRM Platforms',
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bebas-light text-[42px] md:text-5xl text-text-main-dark text-center mb-12">
          PARTNERSHIP OPPORTUNITIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-2xl overflow-hidden"
            >
              {/* Top Section - Light Gray Background */}
              <div className="p-6 pb-5">
                {/* Icon */}
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-2xl">{opportunity.icon}</span>
                </div>

                {/* Title and Description */}
                <h3 className="text-[17px] font-bold text-[#1a1a1a] mb-2 leading-tight">
                  {opportunity.title}
                </h3>
                <p className="text-[13px] text-[#666666] leading-relaxed">
                  {opportunity.description}
                </p>
              </div>

              {/* Dark Green Section - Benefits and Examples */}
              <div className="bg-[#2C5F4F] rounded-2xl mx-4 mb-4 p-5">
                {/* Benefits */}
                <div className="mb-5">
                  <h4 className="text-[11px] font-semibold text-white mb-3 uppercase tracking-wider">
                    Benefits
                  </h4>
                  <div className="space-y-2.5">
                    {opportunity.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <svg
                          className="w-[15px] h-[15px] text-white mt-0.5 flex-shrink-0"
                          fill="none"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            fill="none"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                        <span className="text-[13px] text-white leading-snug">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Examples */}
                <div>
                  <h4 className="text-[11px] font-semibold text-white mb-3 uppercase tracking-wider">
                    Examples
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-[#3d7360] text-white px-3 py-1.5 rounded-md font-medium"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipOpportunitiesSection;

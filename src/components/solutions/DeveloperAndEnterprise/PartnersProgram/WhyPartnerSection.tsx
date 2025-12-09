import React from 'react';

interface Benefit {
  title: string;
  description: string;
  features: string[];
}

const WhyPartnerSection = () => {
  const benefits: Benefit[] = [
    {
      title: 'Revenue Growth',
      description: 'Low-risk portfolio focused on capital preservation',
      features: [
        'Up to 25% commission',
        'Lifetime revenue share',
        'Recurring income',
      ],
    },
    {
      title: 'Technical Excellence',
      description: 'Low-risk portfolio focused on capital preservation',
      features: [
        '99.9% API uptime',
        '<100ms response time',
        '24/7 technical support',
      ],
    },
    {
      title: 'Market Expansion',
      description: 'Low-risk portfolio focused on capital preservation',
      features: ['150+ countries', '50+ currencies', 'Local payment methods'],
    },
    {
      title: 'Competitive Advantage',
      description: 'Low-risk portfolio focused on capital preservation',
      features: ['Fraud protection', 'Compliance tools', 'Advanced analytics'],
    },
  ];

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bebas-light text-[42px] md:text-5xl text-text-main-dark text-center mb-12">
          WHY PARTNER WITH KP PAY?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-6">
              {/* Title and Description */}
              <h3 className="text-[19px] font-bold text-[#1a1a1a] mb-2 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-[13px] text-[#666666] mb-6 leading-relaxed">
                {benefit.description}
              </p>

              {/* Features - Dark Green Boxes with Rounded Corners */}
              <div className="bg-[#2C5F4F] rounded-2xl p-4 space-y-3">
                {benefit.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-transparent border-2 border-[#E8E8E8] rounded-xl px-4 py-3.5 text-center"
                  >
                    <span className="text-[13px] font-medium text-white">
                      {feature}
                    </span>
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

export default WhyPartnerSection;

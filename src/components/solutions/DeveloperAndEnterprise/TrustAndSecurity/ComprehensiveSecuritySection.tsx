import React from 'react';

const ComprehensiveSecuritySection: React.FC = () => {
  const securityCategories = [
    {
      title: 'Infrastructure Security',
      measures: [
        'Automated invoicing and payment collection',
        'Prorated billing for plan changes',
        'Failed payment retry logic with smart timing',
        'Automatic subscription lifecycle management',
      ],
    },
    {
      title: 'Application Security',
      measures: [
        'Self-service customer portal for plan management',
        'Transparent billing with detailed invoices',
        'Easy plan upgrades and downgrades',
        'Payment method updates and backup cards',
      ],
    },
    {
      title: 'Data Protection',
      measures: [
        'Real-time revenue recognition and reporting',
        'Customer cohort analysis and churn prediction',
        'Revenue forecasting and growth metrics',
        'Integration with analytics and accounting tools',
      ],
    },
    {
      title: 'Operational Security',
      measures: [
        'Real-time revenue recognition and reporting',
        'Customer cohort analysis and churn prediction',
        'Revenue forecasting and growth metrics',
        'Integration with analytics and accounting tools',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 container-padding">
      <div className="px-16 lg:px-0 max-w-7xl mx-auto">
        <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-black mb-16">
          COMPREHENSIVE SECURITY MEASURES
        </h2>

        <div className="space-y-12">
          {securityCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-black font-bold text-xl mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.measures.map((measure, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-6 border border-gray-300 shadow-sm"
                  >
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {measure}
                    </p>
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

export default ComprehensiveSecuritySection;

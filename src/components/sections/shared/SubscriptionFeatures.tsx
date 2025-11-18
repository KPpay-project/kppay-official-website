import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-surface-primary border-2 border-brand-primary rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const SubscriptionFeatures = () => {
  const billingManagement = [
    {
      title: 'Automated invoicing',
      description: 'Automated invoicing and payment collection',
    },
    {
      title: 'Prorated billing',
      description: 'Prorated billing for plan changes',
    },
    {
      title: 'Failed payment retry',
      description: 'Failed payment retry logic with smart timing',
    },
    {
      title: 'Subscription lifecycle',
      description: 'Automatic subscription lifecycle management',
    },
  ];

  const customerExperience = [
    {
      title: 'Self-service portal',
      description: 'Self-service customer portal for plan management',
    },
    {
      title: 'Transparent billing',
      description: 'Transparent billing with detailed invoices',
    },
    {
      title: 'Easy plan changes',
      description: 'Easy plan upgrades and downgrades',
    },
    {
      title: 'Payment updates',
      description: 'Payment method updates and backup cards',
    },
  ];

  const businessIntelligence = [
    {
      title: 'Revenue recognition',
      description: 'Real-time revenue recognition and reporting',
    },
    {
      title: 'Cohort analysis',
      description: 'Customer cohort analysis and churn prediction',
    },
    {
      title: 'Revenue forecasting',
      description: 'Revenue forecasting and growth metrics',
    },
    {
      title: 'Analytics integration',
      description: 'Integration with analytics and accounting tools',
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-surface-secondary">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Complete Subscription Platform
        </h2>

        {/* Billing Management Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-text-primary text-xl md:text-2xl font-semibold mb-6">
            Billing Management
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {billingManagement.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* Customer Experience Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-text-primary text-xl md:text-2xl font-semibold mb-6">
            Customer Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerExperience.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* Business Intelligence Section */}
        <div>
          <h3 className="text-text-primary text-xl md:text-2xl font-semibold mb-6">
            Business Intelligence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessIntelligence.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionFeatures;

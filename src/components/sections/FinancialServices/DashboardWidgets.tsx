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

const DashboardWidgets = () => {
  const revenueAnalytics = [
    {
      title: 'Total revenue',
      description: 'Total revenue and growth trends over time',
    },
    {
      title: 'Revenue breakdown',
      description: 'Revenue breakdown by product, service, or customer segment',
    },
    {
      title: 'Monthly recurring revenue',
      description:
        'Monthly recurring revenue (MRR) and annual recurring revenue (ARR)',
    },
    {
      title: 'Revenue forecasting',
      description: 'Revenue forecasting based on historical data and trends',
    },
  ];

  const paymentAnalytics = [
    {
      title: 'Payment method',
      description: 'Payment method performance and customer preferences',
    },
    {
      title: 'Transaction success',
      description: 'Transaction success rates and failure analysis',
    },
    {
      title: 'Average transaction',
      description: 'Average transaction values and frequency patterns',
    },
    {
      title: 'Seasonal trends',
      description: 'Seasonal trends and peak transaction periods',
    },
  ];

  const customerInsights = [
    {
      title: 'Customer acquisition',
      description: 'Customer acquisition costs and lifetime value metrics',
    },
    {
      title: 'Customer retention',
      description: 'Customer retention rates and churn analysis',
    },
    {
      title: 'Geographic distribution',
      description: 'Geographic distribution of customers and revenue',
    },
    {
      title: 'Customer behavior',
      description: 'Customer behavior patterns and purchase frequency',
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-surface-secondary">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Comprehensive Dashboard Widgets
        </h2>

        {/* Revenue Analytics Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-text-primary text-xl md:text-2xl font-semibold mb-6">
            Revenue Analytics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueAnalytics.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* Payment Analytics Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-text-primary text-xl md:text-2xl font-semibold mb-6">
            Payment Analytics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentAnalytics.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* Customer Insights Section */}
        <div>
          <h3 className="text-text-primary text-xl md:text-2xl font-semibold mb-6">
            Customer Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerInsights.map((card, index) => (
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

export default DashboardWidgets;

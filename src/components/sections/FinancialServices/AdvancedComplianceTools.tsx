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

const AdvancedComplianceTools = () => {
  const identityVerification = [
    {
      title: 'Date ranges',
      description: 'Select specific date ranges and time periods',
    },
    {
      title: 'Filter segments',
      description: 'Filter by customer segments, products, or regions',
    },
    {
      title: 'Data points',
      description: 'Include or exclude specific data points and metrics',
    },
    {
      title: 'Custom KPIs',
      description: 'Add custom calculations and business KPIs',
    },
  ];

  const transactionMonitoring = [
    {
      title: 'Company branding',
      description: 'Apply company branding and color schemes',
    },
    {
      title: 'Report templates',
      description: 'Choose from professional report templates',
    },
    {
      title: 'Custom headers',
      description: 'Add custom headers, footers, and watermarks',
    },
    {
      title: 'Visual elements',
      description: 'Include charts, graphs, and visual elements',
    },
  ];

  const auditDocumentation = [
    {
      title: 'Group data',
      description: 'Group and sort data by various criteria',
    },
    {
      title: 'Executive overviews',
      description: 'Create summary and executive overviews',
    },
    {
      title: 'Trend analysis',
      description: 'Add trend analysis and comparative data',
    },
    {
      title: 'Forecasting',
      description: 'Include forecasting and predictive insights',
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-surface-secondary">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-text-main-dark mb-12">
          Advanced Compliance Tools
        </h2>

        {/* Identity Verification Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-text-main-dark text-xl md:text-2xl font-semibold mb-6">
            Identity Verification
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {identityVerification.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* Transaction Monitoring Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-text-main-dark text-xl md:text-2xl font-semibold mb-6">
            Transaction Monitoring
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transactionMonitoring.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* Audit & Documentation Section */}
        <div>
          <h3 className="text-text-main-dark text-xl md:text-2xl font-semibold mb-6">
            Audit & Documentation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {auditDocumentation.map((card, index) => (
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

export default AdvancedComplianceTools;

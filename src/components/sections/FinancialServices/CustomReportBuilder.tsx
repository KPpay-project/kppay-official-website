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

const CustomReportBuilder = () => {
  const reportContent = [
    {
      title: 'Date ranges',
      description: 'Select specific date ranges and time periods',
    },
    {
      title: 'Filter data',
      description: 'Filter by customer segments, products, or regions',
    },
    {
      title: 'Include/exclude data',
      description: 'Include or exclude specific data points and metrics',
    },
    {
      title: 'Custom calculations',
      description: 'Add custom calculations and business KPIs',
    },
  ];

  const visualDesign = [
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

  const dataPresentation = [
    {
      title: 'Group and sort',
      description: 'Group and sort data by various criteria',
    },
    {
      title: 'Summary views',
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
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Custom Report Builder
        </h2>

        {/* Report Content Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-text-primary text-xl md:text-2xl font-semibold mb-6">
            Report Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportContent.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* Visual Design Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-text-primary text-xl md:text-2xl font-semibold mb-6">
            Visual Design
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visualDesign.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* Data Presentation Section */}
        <div>
          <h3 className="text-text-primary text-xl md:text-2xl font-semibold mb-6">
            Data Presentation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataPresentation.map((card, index) => (
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

export default CustomReportBuilder;

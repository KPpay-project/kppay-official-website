import React from 'react';

interface WhyChooseKPPaySectionProps {
  className?: string;
}

const WhyChooseKPPaySection: React.FC<WhyChooseKPPaySectionProps> = ({
  className = '',
}) => {
  const stats = [
    {
      value: '$2B+',
      title: 'Proven Scale',
      description: 'Processing $2B+ annually for 500+ enterprise clients',
    },
    {
      value: '50+',
      title: 'Global Reach',
      description: 'Operations across 50+ countries with local compliance',
    },
    {
      value: '99.9%',
      title: 'Enterprise Support',
      description: 'Dedicated support team with 99.9% uptime guarantee',
    },
  ];

  return (
    <section className={`py-20 px-4 bg-surface-secondary mb-20 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="heading-bebas-light text-4xl md:text-5xl text-text-main mb-4 uppercase">
            WHY CHOOSE KP PAY ENTERPRISE
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Stat Value */}
              <div
                className="heading-bebas-light text-5xl md:text-6xl mb-4 bg-gradient-green bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'var(--color-gradient-green)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>

              {/* Stat Title */}
              <h3 className="text-xl font-bold text-text-main mb-3">
                {stat.title}
              </h3>

              {/* Stat Description */}
              <p className="text-sm text-text-main leading-relaxed max-w-xs mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKPPaySection;

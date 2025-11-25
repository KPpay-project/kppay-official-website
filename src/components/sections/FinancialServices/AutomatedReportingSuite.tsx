import React from 'react';
import { images } from '@/types';

const AutomatedReporting: React.FC = () => {
  const reports = [
    {
      title: 'Executive Summary',
      description: 'High-level overview for leadership and stakeholders',
      icon: images.Icons.iconDown,
      frequency: 'Weekly/Monthly',
      frequencyLabel: 'FREQUENCY',
      audience: 'C-suite, Board',
      audienceLabel: 'TARGET AUDIENCE',
      buttonText: 'Setup Report',
    },
    {
      title: 'Financial Reports',
      description: 'Detailed financial performance and accounting data',
      icon: images.Icons.iconUp,
      frequency: 'Monthly/Quarterly',
      frequencyLabel: 'FREQUENCY',
      audience: 'Finance, Accounting',
      audienceLabel: 'TARGET AUDIENCE',
      buttonText: 'Setup Report',
    },
    {
      title: 'Operations Report',
      description: 'Operational metric and performance indicators',
      icon: images.Icons.iconRound,
      frequency: 'Daily/Weekly',
      frequencyLabel: 'FREQUENCY',
      audience: 'Operations, Management',
      audienceLabel: 'TARGET AUDIENCE',
      buttonText: 'Setup Report',
    },
    {
      title: 'Customer Analytics',
      description: 'Customer behavior and satisfaction metrics',
      icon: images.Icons.iconCustom,
      frequency: 'Monthly',
      frequencyLabel: 'FREQUENCY',
      audience: 'Marketing, Sales',
      audienceLabel: 'TARGET AUDIENCE',
      buttonText: 'Setup Report',
    },
  ];

  return (
    <section className="py-16 bg-surface-secondary container-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-text-main-dark mb-12">
          AUTOMATED REPORTING SUITE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reports.map((report, index) => (
            <div
              key={index}
              className="bg-surface-primary rounded-lg p-6 flex flex-col fade-in"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4">
                <img
                  src={report.icon}
                  alt={report.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-text-primary font-bold text-lg mb-2">
                {report.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm mb-6">
                {report.description}
              </p>

              <div className="bg-brand-secondary p-4 rounded-md">
                {/* Info Boxes */}
                <div className="space-y-2 mb-6 flex-grow">
                  <div className="bg-white/10 border-1 border-white rounded-lg p-3">
                    <p className="text-text-main-white text-xs font-semibold mb-1">
                      {report.frequencyLabel}
                    </p>
                    <p className="text-text-main-white text-sm">
                      {report.frequency}
                    </p>
                  </div>

                  <div className="bg-white/10 border-1 border-white rounded-lg p-3">
                    <p className="text-text-main-white text-xs font-semibold mb-1">
                      {report.audienceLabel}
                    </p>
                    <p className="text-text-main-white text-sm">
                      {report.audience}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-surface-primary  text-brand-secondary font-semibold py-3 rounded-full hover:bg-interactive-primary hover:text-text-main-white transition-colors">
                  {report.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomatedReporting;

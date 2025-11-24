import React from 'react';

const ReportBuilderGrid: React.FC = () => {
  const reports = [
    {
      executiveSummary: 'Weekly/Monthly',
      targetAudience: 'C-suite, Board Members',
      contentIncludes: ['Key performance indicators', 'Growth metrics'],
      highlights: ['Revenue highlights', 'Strategic insights'],
    },
    {
      executiveSummary: 'Weekly/Monthly',
      targetAudience: 'C-suite, Board Members',
      contentIncludes: ['Key performance indicators', 'Growth metrics'],
      highlights: ['Revenue highlights', 'Strategic insights'],
    },
    {
      executiveSummary: 'Weekly/Monthly',
      targetAudience: 'C-suite, Board Members',
      contentIncludes: ['Key performance indicators', 'Growth metrics'],
      highlights: ['Revenue highlights', 'Strategic insights'],
    },
    {
      executiveSummary: 'Weekly/Monthly',
      targetAudience: 'C-suite, Board Members',
      contentIncludes: ['Key performance indicators', 'Growth metrics'],
      highlights: ['Revenue highlights', 'Strategic insights'],
    },
  ];

  return (
    <section className="py-16 bg-surface-secondary container-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-bebas text-4xl md:text-5xl text-center text-text-main-dark mb-12">
          CUSTOM REPORT BUILDER
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reports.map((report, index) => (
            <div key={index} className="space-y-4">
              {/* Executive Summary */}
              <div className="bg-surface-primary border-2 border-interactive-primary rounded-lg p-6">
                <h3 className="text-interactive-primary font-semibold text-sm mb-2">
                  Executive Summary
                </h3>
                <p className="text-text-primary text-base">
                  {report.executiveSummary}
                </p>
              </div>

              {/* Target Audience */}
              <div className="bg-surface-primary border-2 border-interactive-primary rounded-lg p-6">
                <h3 className="text-interactive-primary font-semibold text-sm mb-2">
                  Target Audience
                </h3>
                <p className="text-text-primary text-base">
                  {report.targetAudience}
                </p>
              </div>

              {/* Content Includes */}
              <div className="bg-surface-primary border-2 border-interactive-primary rounded-lg p-6">
                <h3 className="text-interactive-primary font-semibold text-sm mb-2">
                  Content Includes
                </h3>
                <ul className="space-y-1">
                  {report.contentIncludes.map((item, i) => (
                    <li
                      key={i}
                      className="text-text-secondary text-sm flex items-start"
                    >
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div className="bg-surface-primary border-2 border-interactive-primary rounded-lg p-6">
                <ul className="space-y-1">
                  {report.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="text-text-secondary text-sm flex items-start"
                    >
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportBuilderGrid;

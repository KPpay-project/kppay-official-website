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
    <div className="min-h-screen bg-surface-secondary p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-text-main-dark mb-12">
          CUSTOM REPORT BUILDER
        </h2>

        <div className="grid grid-cols-4 gap-4">
          {reports.map((report, index) => (
            <React.Fragment key={index}>
              {/* Executive Summary */}
              <div className="bg-white border-2 border-blue-500 rounded-lg p-6">
                <h3 className="text-blue-600 font-semibold text-sm mb-2">
                  Executive Summary
                </h3>
                <p className="text-gray-700">{report.executiveSummary}</p>
              </div>

              {/* Target Audience */}
              <div className="bg-white border-2 border-blue-500 rounded-lg p-6">
                <h3 className="text-blue-600 font-semibold text-sm mb-2">
                  Target Audience
                </h3>
                <p className="text-gray-700">{report.targetAudience}</p>
              </div>

              {/* Content Includes */}
              <div className="bg-white border-2 border-blue-500 rounded-lg p-6">
                <h3 className="text-blue-600 font-semibold text-sm mb-2">
                  Content Includes
                </h3>
                <ul className="text-gray-700 space-y-1">
                  {report.contentIncludes.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div className="bg-white border-2 border-blue-500 rounded-lg p-6">
                <ul className="text-gray-700 space-y-1">
                  {report.highlights.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportBuilderGrid;

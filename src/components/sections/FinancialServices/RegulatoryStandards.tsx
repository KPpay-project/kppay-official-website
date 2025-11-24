import React from 'react';
import { images } from '@/types';

const RegulatoryStandards: React.FC = () => {
  const standards = [
    {
      title: 'PCI DSS',
      level: 'LEVEL 1',
      description: 'Payment card industry data security standard',
      coverageAreas: [
        'AML Compliance Report',
        'PCI DSS Documentation',
        'KYC Status Report',
        'Audit Trail',
      ],
      availableReports: [
        'AML Compliance Report',
        'PCI DSS Documentation',
        'KYC Status Report',
        'Audit Trail',
      ],
    },
    {
      title: 'PCI DSS',
      level: 'LEVEL 1',
      description: 'Payment card industry data security standard',
      coverageAreas: [
        'AML Compliance Report',
        'PCI DSS Documentation',
        'KYC Status Report',
        'Audit Trail',
      ],
      availableReports: [
        'AML Compliance Report',
        'PCI DSS Documentation',
        'KYC Status Report',
        'Audit Trail',
      ],
    },
    {
      title: 'PCI DSS',
      level: 'LEVEL 1',
      description: 'Payment card industry data security standard',
      coverageAreas: [
        'AML Compliance Report',
        'PCI DSS Documentation',
        'KYC Status Report',
        'Audit Trail',
      ],
      availableReports: [
        'AML Compliance Report',
        'PCI DSS Documentation',
        'KYC Status Report',
        'Audit Trail',
      ],
    },
  ];

  return (
    <section className="py-16 bg-surface-primary container-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-bebas text-4xl md:text-5xl text-center text-text-main-dark mb-12">
          REGULATORY STANDARDS AND CERTIFICATIONS
        </h2>

        <div className="space-y-6">
          {standards.map((standard, index) => (
            <div
              key={index}
              className="border-2 border-interactive-primary rounded-lg p-8 fade-in"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Logo and Description */}
                <div className="flex flex-col items-start">
                  <div className="w-16 h-16 mb-4">
                    <img
                      src={images.Icons.ios}
                      alt={standard.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-text-primary font-bold text-2xl mb-1">
                    {standard.title}
                  </h3>
                  <span className="text-interactive-primary text-xs font-semibold mb-3">
                    {standard.level}
                  </span>
                  <p className="text-text-secondary text-sm">
                    {standard.description}
                  </p>
                </div>

                {/* Middle: Coverage Areas */}
                <div>
                  <h4 className="text-text-primary font-semibold text-sm mb-4">
                    Coverage Areas
                  </h4>
                  <ul className="space-y-2">
                    {standard.coverageAreas.map((area, i) => (
                      <li
                        key={i}
                        className="text-text-secondary text-sm flex items-start"
                      >
                        <span className="mr-2">•</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Available Reports */}
                <div>
                  <h4 className="text-text-primary font-semibold text-sm mb-4">
                    Available Reports
                  </h4>
                  <ul className="space-y-2">
                    {standard.availableReports.map((report, i) => (
                      <li
                        key={i}
                        className="text-text-secondary text-sm flex items-center"
                      >
                        <span className="mr-2">○</span>
                        <span>{report}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegulatoryStandards;

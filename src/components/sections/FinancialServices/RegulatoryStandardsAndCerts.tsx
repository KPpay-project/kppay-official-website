import React from 'react';
import { images } from '@/types';

const RegulatoryStandardsAndCerts: React.FC = () => {
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
    <section className="py-16 bg-white container-padding">
      <div className="max-w-7xl mx-auto">
        <h2
          className="heading-bebas-light text-4xl md:text-5xl text-center mb-12"
          style={{ color: '#000000' }}
        >
          REGULATORY STANDARDS AND CERTIFICATIONS
        </h2>

        <div className="space-y-6">
          {standards.map((standard, index) => (
            <div
              key={index}
              className="border-2 rounded-lg p-8 bg-white"
              style={{ borderColor: '#1560fc' }}
            >
              <div className="flex justify-center gap-16 lg:gap-24">
                {/* Left: Logo and Description */}
                <div
                  className="flex flex-col"
                  style={{ minWidth: '200px', maxWidth: '250px' }}
                >
                  <div className="w-20 h-20 mb-4">
                    <img
                      src={images.Icons.iconX}
                      alt={standard.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    className="font-bold text-2xl mb-2"
                    style={{ color: '#000000' }}
                  >
                    {standard.title}
                  </h3>
                  <span
                    className="text-xs font-bold mb-4 px-2 py-1 rounded inline-block self-start"
                    style={{ color: '#1560fc', backgroundColor: '#eef6ff' }}
                  >
                    {standard.level}
                  </span>
                  <p className="text-sm" style={{ color: '#667085' }}>
                    {standard.description}
                  </p>
                </div>

                {/* Middle: Coverage Areas */}
                <div style={{ minWidth: '200px' }}>
                  <h4
                    className="font-bold text-sm mb-4"
                    style={{ color: '#000000' }}
                  >
                    Coverage Areas
                  </h4>
                  <ul className="space-y-2">
                    {standard.coverageAreas.map((area, i) => (
                      <li
                        key={i}
                        className="text-sm flex items-start"
                        style={{ color: '#667085' }}
                      >
                        <span className="mr-2">•</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Available Reports */}
                <div style={{ minWidth: '200px' }}>
                  <h4
                    className="font-bold text-sm mb-4"
                    style={{ color: '#000000' }}
                  >
                    Available Reports
                  </h4>
                  <ul className="space-y-2">
                    {standard.availableReports.map((report, i) => (
                      <li
                        key={i}
                        className="text-sm flex items-center"
                        style={{ color: '#667085' }}
                      >
                        <span className="mr-2" style={{ color: '#1560fc' }}>
                          ✓
                        </span>
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

export default RegulatoryStandardsAndCerts;

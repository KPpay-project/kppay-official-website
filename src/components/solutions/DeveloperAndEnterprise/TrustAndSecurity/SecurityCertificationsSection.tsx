import React from 'react';

const SecurityCertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: 'PCI DSS Level 1',
      description: 'Low-risk portfolio focused on capital preservation',
    },
    {
      title: 'SOC 2 Type II',
      description: 'Low-risk portfolio focused on capital preservation',
    },
    {
      title: 'ISO 27001',
      description: 'Low-risk portfolio focused on capital preservation',
    },
    {
      title: 'GDPR Compliant',
      description: 'Low-risk portfolio focused on capital preservation',
    },
  ];

  return (
    <section className="py-20 bg-surface-primary container-padding">
      <div className="px-16 lg:px-0 max-w-7xl mx-auto">
        <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-text-main-dark mb-12">
          SECURITY CERTIFICATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-surface-secondary rounded-lg p-6 fade-in flex flex-col"
            >
              {/* Title */}
              <h3 className="text-text-primary font-bold text-lg mb-2">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm mb-6">
                {cert.description}
              </p>

              {/* Certification Details Container */}
              <div className="bg-gradient-green rounded-lg p-4 space-y-3 mt-auto">
                {/* Validity Box */}
                <div className="rounded-lg p-3 border-2 border-white/20">
                  <div className="text-white text-xs font-semibold mb-1">
                    Validity
                  </div>
                  <div className="text-white text-xs">EXPECTED RETURN</div>
                </div>

                {/* Scope Box */}
                <div className="rounded-lg p-3 border-2 border-white/20">
                  <div className="text-white text-xs font-semibold mb-1">
                    Scope
                  </div>
                  <div className="text-white text-xs">RISK LEVEL</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityCertificationsSection;

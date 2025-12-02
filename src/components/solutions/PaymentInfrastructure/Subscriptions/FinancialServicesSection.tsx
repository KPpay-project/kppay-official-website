import { images } from '@/types';
import React from 'react';

const FinancialServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Financial Connections',
      description: 'Multi-rail payment processing with local currencies',
    },
    {
      title: 'Treasury And Accounts',
      description: 'Multi-rail payment processing with local currencies',
    },
    {
      title: 'Identity and KYC',
      description: 'Multi-rail payment processing with local currencies',
    },
    {
      title: 'Fraud Shield',
      description: 'Multi-rail payment processing with local currencies',
    },
    {
      title: 'Tax Automation',
      description: 'Multi-rail payment processing with local currencies',
    },
  ];

  const regions = [
    {
      title: 'WEST AFRICA',
      countries: "Senegal, Cote d'Ivoire",
    },
    {
      title: 'EAST AFRICA',
      countries: 'Kenya, Uganda',
    },
    {
      title: 'GLOBAL',
      countries: 'United States, European Union',
    },
  ];

  return (
    <section className="py-16 bg-surface-primary container-padding">
      <div className="px-16 lg:px-0 max-w-7xl mx-auto">
        {/* Financial Services Header */}
        <div className="flex items-start mb-8">
          <div className="w-12 h-12 mr-4 flex-shrink-0">
            <img
              src={images.Icons.iconAuto}
              alt="Financial Services"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-text-primary font-bold text-2xl mb-1">
              Financial Services
            </h2>
            <p className="text-text-secondary text-sm">
              Banking and compliance solutions built for scale
            </p>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-border-secondary rounded-lg p-6 bg-surface-primary hover:shadow-md transition-shadow"
            >
              <h3 className="text-text-primary font-semibold text-base mb-2">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Professional Invoicing Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="heading-bebas-light text-4xl md:text-5xl text-text-main-dark mb-4">
              PROFESSIONAL INVOICING
            </h2>
            <p className="text-text-secondary mb-6">
              Choose the integration that fits your timeline and technical needs
            </p>
            <button className="flex items-center border-2 border-text-main-dark rounded-full px-6 py-3 hover:bg-surface-secondary transition-colors">
              <span className="text-text-primary font-medium mr-2">
                Pay With Mobile Money
              </span>
              <span>→</span>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md w-full max-w-md overflow-hidden">
              {/* Invoice Header */}
              <div className="text-center py-6 px-8 border-b border-border-secondary">
                <h3 className="heading-bebas-light text-2xl text-text-main-dark mb-1">
                  INVOICE
                </h3>
                <p className="text-text-secondary text-xs">
                  Due Date: 16th October, 2025
                </p>
              </div>

              {/* Invoice Table */}
              <div className="px-8 py-6">
                <div className="grid grid-cols-3 gap-4 pb-2 mb-3 border-b border-border-secondary text-xs font-medium text-text-secondary">
                  <div>Description</div>
                  <div className="text-right">Rate (Monthly)</div>
                  <div className="text-right">Subtotal</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-text-primary">Pro Plan (Monthly)</div>
                    <div className="text-right text-text-primary"></div>
                    <div className="text-right text-text-primary">$99.00</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-text-primary">
                      API Usage (1,250 Calls)
                    </div>
                    <div className="text-right text-text-primary"></div>
                    <div className="text-right text-text-primary">$12.50</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-text-primary">Storage (5GB)</div>
                    <div className="text-right text-text-primary"></div>
                    <div className="text-right text-text-primary">$5.00</div>
                  </div>
                </div>
              </div>

              {/* Total Section */}
              <div className="bg-brand-primary px-8 py-6 text-white">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-xs space-y-1">
                    <p className="font-medium mb-2">Additional Information:</p>
                    <p>Account #: 5005-050</p>
                    <p>Txnref #: 00000</p>
                    <p>Institution: 000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs mb-1">Total Due:</p>
                    <p
                      className="heading-bebas-light text-3xl font-bold"
                      style={{ letterSpacing: '2px' }}
                    >
                      $12,345.00
                    </p>
                  </div>
                </div>
                <div className="border-t border-white border-opacity-30 pt-3">
                  <p className="text-xs">Total payment due in 30 days.</p>
                </div>
                <div className="w-3 h-3 bg-text-main-dark rounded-full mt-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Compliance Section */}
        <div className="text-center mb-8">
          <h2 className="heading-bebas-light text-4xl md:text-5xl text-text-main-dark mb-2">
            TAX COMPLIANCE
          </h2>
          <p className="text-text-secondary">Automatic VAT/GST calculation</p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-surface-secondary rounded-lg p-8 text-center"
            >
              <h3 className="heading-bebas-light text-3xl text-text-main-dark mb-3">
                {region.title}
              </h3>
              <p className="text-text-secondary text-sm">{region.countries}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialServicesSection;

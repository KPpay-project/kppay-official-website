import React from 'react';
import { images } from '@/types';

const IntegrationsGrid: React.FC = () => {
  const integrations = [
    {
      title: 'Business Intelligence',
      description:
        'Connect with enterprise BI platforms for advanced analytics',
      icon: images.Icons.iconDown,
      platforms: ['Tableau', 'Power BI', 'Looker', 'Qlik'],
    },
    {
      title: 'Accounting Software',
      description: 'Quickbooks',
      icon: images.Icons.iconUp,
      platforms: ['Quickbooks', 'Xero', 'NetSuite', 'SAP'],
    },
    {
      title: 'CRM Systems',
      description: 'Combine payment data with customer relationship management',
      icon: images.Icons.iconUp,
      platforms: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho'],
    },
    {
      title: 'E-Commerce Platforms',
      description: 'Unified analytics across your e-commerce operations',
      icon: images.Icons.iconCustom,
      platforms: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce'],
    },
  ];

  return (
    <section className="py-16 bg-surface-primary container-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-text-main-dark mb-12">
          SEAMLESS INTEGRATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-surface-secondary rounded-lg p-6 fade-in flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4">
                <img
                  src={integration.icon}
                  alt={integration.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-text-primary font-bold text-lg mb-2">
                {integration.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm mb-6">
                {integration.description}
              </p>

              {/* Platform Pills - pushed to bottom */}
              <div className="bg-brand-secondary rounded-lg p-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {integration.platforms.map((platform, i) => (
                    <span
                      key={i}
                      className="bg-interactive-primary text-text-main-white text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsGrid;

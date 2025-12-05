import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/types';

const PaymentFeaturesSectionConnect: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Create Account',
      description:
        'Add KP Pay SDK to your iOS or Android project using package managers',
    },
    {
      number: '2',
      title: 'KYC Verification',
      description:
        'Configure the SDK with your API keys and payment preferences',
    },
    {
      number: '3',
      title: 'Bank Details',
      description: 'Create payment sessions and handle successful transactions',
    },
    {
      number: '4',
      title: 'Start Selling',
      description: "Receive payment confirmations and update your app's state",
    },
  ];

  const payoutOptions = [
    {
      title: 'Bank Transfer',
      subtitle: '15+ African Countries',
      timeline: '1-2 Business Days',
      timelineColor: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'Mobile Money',
      subtitle: '15+ African Countries',
      timeline: 'Instant',
      timelineColor: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'International Wire',
      subtitle: '15+ African Countries',
      timeline: '3-5 Business Days',
      timelineColor: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'Local Bank',
      subtitle: 'Nigeria, Kenya, Ghana',
      timeline: 'Same Day',
      timelineColor: 'bg-blue-100 text-blue-700',
    },
  ];

  const feeStructure = [
    {
      percentage: '2.9%',
      title: 'Processing Fee',
      description: 'Processing $25+ annually for 100+ enterprise clients',
    },
    {
      percentage: '0.25%',
      title: 'Platform Fee',
      description: 'Operations across 50+ countries with full compliance',
    },
    {
      percentage: 'FREE',
      title: 'Payout Fee',
      description: 'Dedicated support team with 99.9% uptime guarantee',
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-surface-primary container-padding">
      <div className="px-10 lg:px-0 max-w-7xl mx-auto">
        {/* Steps Section */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          {/* Desktop/Tablet View */}
          <div className="hidden md:flex items-center justify-between mb-12">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center flex-1">
                  <div className="text-3xl lg:text-4xl font-bold text-text-main-dark mb-2">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-text-primary text-xs lg:text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-xs text-center max-w-[120px] lg:max-w-[150px]">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-8 lg:w-16 h-0.5 bg-text-secondary mb-12"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-3xl font-bold text-text-main-dark flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-text-primary text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flexible Split Payments Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20 items-center">
          <div>
            <h2 className="heading-bebas-light text-3xl md:text-4xl lg:text-5xl text-text-main-dark mb-3 md:mb-4">
              FLEXIBLE SPLIT PAYMENTS
            </h2>
            <p className="text-text-secondary mb-4 md:mb-6 text-sm md:text-base">
              Choose the integration that fits your timeline and technical needs
            </p>
            <Link href={ROUTES.ENTERPRISE}>
              <button className="flex items-center border-2 border-text-main-dark rounded-full px-5 md:px-6 py-2.5 md:py-3 hover:bg-surface-secondary transition-colors">
                <span className="text-text-primary font-medium mr-2 text-sm md:text-base">
                  Pay With Mobile Money
                </span>
                <span>→</span>
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md w-full max-w-md overflow-hidden">
              <div className="text-center py-4 md:py-6 px-6 md:px-8 border-b border-border-secondary">
                <h3 className="heading-bebas-light text-xl md:text-2xl text-text-main-dark mb-1">
                  INVOICE
                </h3>
                <p className="text-text-secondary text-xs">
                  Due Date: 16th October, 2025
                </p>
              </div>
              <div className="px-6 md:px-8 py-4 md:py-6">
                <div className="grid grid-cols-3 gap-2 md:gap-4 pb-2 mb-3 border-b border-border-secondary text-xs font-medium text-text-secondary">
                  <div>Description</div>
                  <div className="text-right">Rate</div>
                  <div className="text-right">Subtotal</div>
                </div>
                <div className="space-y-3 text-xs md:text-sm">
                  <div className="grid grid-cols-3 gap-2 md:gap-4">
                    <div className="text-text-primary">Pro Plan</div>
                    <div className="text-right text-text-primary"></div>
                    <div className="text-right text-text-primary">$99.00</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 md:gap-4">
                    <div className="text-text-primary">API Usage</div>
                    <div className="text-right text-text-primary"></div>
                    <div className="text-right text-text-primary">$12.50</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 md:gap-4">
                    <div className="text-text-primary">Storage</div>
                    <div className="text-right text-text-primary"></div>
                    <div className="text-right text-text-primary">$5.00</div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-primary px-6 md:px-8 py-4 md:py-6 text-white">
                <div className="flex justify-between items-start mb-3 gap-4">
                  <div className="text-xs space-y-1">
                    <p className="font-medium mb-2">Additional Info:</p>
                    <p>Account #: 5005-050</p>
                    <p>Txnref #: 00000</p>
                    <p>Institution: 000</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs mb-1">Total Due:</p>
                    <p
                      className="heading-bebas-light text-2xl md:text-3xl font-bold"
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

        {/* Flexible Payout Options */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="heading-bebas-light text-3xl md:text-4xl lg:text-5xl text-center text-text-main-dark mb-2">
            FLEXIBLE PAYOUT OPTIONS
          </h2>
          <p className="text-text-secondary text-center mb-8 md:mb-12 text-sm md:text-base px-4">
            Business using KP Pay reporting see significant improvements
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {payoutOptions.map((option, index) => (
              <div
                key={index}
                className="border-2 border-border-secondary rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-text-primary font-bold text-base md:text-lg mb-2">
                  {option.title}
                </h3>
                <p className="text-text-secondary text-xs md:text-sm mb-3 md:mb-4">
                  {option.subtitle}
                </p>
                <span
                  className={`inline-block ${option.timelineColor} px-3 py-1 rounded text-xs md:text-sm font-medium`}
                >
                  {option.timeline}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Fee Structure */}
        <div>
          <h2 className="heading-bebas-light text-3xl md:text-4xl lg:text-5xl text-center text-text-main-dark mb-2">
            TRANSPARENT FEE STRUCTURE
          </h2>
          <p className="text-text-secondary text-center mb-8 md:mb-12 text-sm md:text-base px-4">
            Business using KP Pay reporting see significant improvements
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {feeStructure.map((fee, index) => (
              <div key={index} className="text-center px-4">
                <div className="heading-bebas-light text-4xl md:text-5xl text-text-main-dark mb-2 md:mb-3">
                  {fee.percentage}
                </div>
                <h3 className="text-text-primary font-bold text-base md:text-lg mb-2">
                  {fee.title}
                </h3>
                <p className="text-text-secondary text-xs md:text-sm">
                  {fee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentFeaturesSectionConnect;

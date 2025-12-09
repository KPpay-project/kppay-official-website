import React from 'react';
import { ROUTES } from '@/types';
import { CheckCircle2 } from 'lucide-react';

interface EnterpriseSolutionsSectionProps {
  className?: string;
}

const EnterpriseSolutionsSection: React.FC<
  EnterpriseSolutionsSectionProps
> = ({ className = '' }) => {
  const startupFeatures = [
    'Unlimited Accounts',
    'Dedicated Infrastructure',
    'Priority Support',
    'Custom SLA',
    'Advanced Analytics',
    'White-Label Options',
  ];

  const growthFeatures = [
    'Unlimited Accounts',
    'Dedicated Infrastructure',
    'Priority Support',
    'Custom SLA',
    'Advanced Analytics',
    'White-Label Options',
  ];

  const enterpriseFeatures = [
    'Unlimited Accounts',
    'Dedicated Infrastructure',
    'Priority Support',
    'Custom SLA',
    'Advanced Analytics',
    'White-Label Options',
  ];

  return (
    <section className={`py-20 px-4 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Top Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-8">
          {/* Advanced Security */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4L6 12V22C6 32.5 13.2 42.1 24 44C34.8 42.1 42 32.5 42 22V12L24 4Z"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 24C26.2091 24 28 22.2091 28 20C28 17.7909 26.2091 16 24 16C21.7909 16 20 17.7909 20 20C20 22.2091 21.7909 24 24 24Z"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 34C16 30.6863 19.5817 28 24 28C28.4183 28 32 30.6863 32 34"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-main mb-2">
              Advanced Security
            </h3>
            <p className="text-sm text-text-secondary">
              Scalable, secure, and reliable platform built for enterprise
              demands
            </p>
          </div>

          {/* Global Operations */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 24H44"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 4C29.5228 9.99998 32.5228 17.8 32.5228 24C32.5228 30.2 29.5228 38 24 44C18.4772 38 15.4772 30.2 15.4772 24C15.4772 17.8 18.4772 9.99998 24 4Z"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-main mb-2">
              Global Operations
            </h3>
            <p className="text-sm text-text-secondary">
              Scalable, secure, and reliable platform built for enterprise
              demands
            </p>
          </div>

          {/* Enterprise Infrastructure */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L24 8L42 18V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V18Z"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 24H16.02"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 24H24.02"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 24H32.02"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 32H16.02"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 32H24.02"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 32H32.02"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-main mb-2">
              Enterprise Infrastructure
            </h3>
            <p className="text-sm text-text-secondary">
              Scalable, secure, and reliable platform built for enterprise
              demands
            </p>
          </div>

          {/* Analytics and Reporting */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H38C39.0609 6 40.0783 6.42143 40.8284 7.17157C41.5786 7.92172 42 8.93913 42 10V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42Z"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 28L20 22L26 28L34 20"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 20H34V26"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-main mb-2">
              Analytics and Reporting
            </h3>
            <p className="text-sm text-text-secondary">
              Scalable, secure, and reliable platform built for enterprise
              demands
            </p>
          </div>
        </div>

        {/* Enterprise Solutions Title */}
        <div className="text-center mb-12">
          <h2 className="heading-bebas-light text-4xl md:text-5xl text-text-main mb-4 uppercase">
            ENTERPRISE SOLUTIONS
          </h2>
          <p className="text-lg text-text-secondary">
            Tailored solutions that grow with your business
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Startup Card */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-text-main mb-2">Startup</h3>
            <p className="text-sm text-text-secondary mb-6">
              Perfect for early-stage businesses and entrepreneurs
            </p>

            <h4 className="text-xl font-bold text-text-main mb-4">
              Contact Us
            </h4>

            <div className="space-y-3 mb-8">
              {startupFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-text-secondary flex-shrink-0" />
                  <span className="text-sm text-text-main">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3 px-6 border-2 border-text-main text-text-main rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Schedule Demo
            </button>
          </div>

          {/* Growth Card - Featured */}
          <div className="bg-gradient-green rounded-2xl p-8 shadow-card text-white relative">
            <h3 className="text-2xl font-bold mb-2">Growth</h3>
            <p className="text-sm text-white/80 mb-6">
              Ideal for growing businesses with higher transaction volumes
            </p>

            <h4 className="text-xl font-bold mb-4">Custom Pricing</h4>

            <div className="space-y-3 mb-8">
              {growthFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-sm text-white">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3 px-6 bg-white text-[#013d25] rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Request Quote
            </button>
          </div>

          {/* Enterprise Account Card */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-text-main mb-2">
              Enterprise Account
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Full-featured solution for large businesses and corporations
            </p>

            <h4 className="text-xl font-bold text-text-main mb-4">
              Tailored Solutions
            </h4>

            <div className="space-y-3 mb-8">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-text-secondary flex-shrink-0" />
                  <span className="text-sm text-text-main">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3 px-6 border-2 border-text-main text-text-main rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Industry-Specific Solutions Section */}
        <div className="mt-20 px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="heading-bebas-light text-4xl md:text-5xl text-text-main mb-4 uppercase">
              INDUSTRY-SPECIFIC SOLUTIONS
            </h2>
            <p className="text-lg text-text-secondary">
              Tailored solutions that grow with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* E-commerce and Marketplaces */}
            <div className="bg-white rounded-2xl shadow-card p-6 flex flex-col">
              <h3 className="text-xl font-bold text-text-main mb-auto">
                E-commerce and Marketplaces
              </h3>
              <div className="bg-gradient-green p-6 rounded-xl mt-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Split payments</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Vendor Management</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Automated Reconciliation</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Multi-seller Support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Fintech and SaaS */}
            <div className="bg-white rounded-2xl shadow-card p-6 flex flex-col">
              <h3 className="text-xl font-bold text-text-main mb-auto">
                Fintech and SaaS
              </h3>
              <div className="bg-gradient-green p-6 rounded-xl mt-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Split payments</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Vendor Management</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Automated Reconciliation</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Multi-seller Support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Healthcare and Education */}
            <div className="bg-white rounded-2xl shadow-card p-6 flex flex-col">
              <h3 className="text-xl font-bold text-text-main mb-auto">
                Healthcare and Education
              </h3>
              <div className="bg-gradient-green p-6 rounded-xl mt-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Split payments</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Vendor Management</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Automated Reconciliation</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Multi-seller Support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Manufacturing and Logistics */}
            <div className="bg-white rounded-2xl shadow-card p-6 flex flex-col">
              <h3 className="text-xl font-bold text-text-main mb-auto">
                Manufacturing and Logistics
              </h3>
              <div className="bg-gradient-green p-6 rounded-xl mt-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Split payments</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Vendor Management</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Automated Reconciliation</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Multi-seller Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutionsSection;

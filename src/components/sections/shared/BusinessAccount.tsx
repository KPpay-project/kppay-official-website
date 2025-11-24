import React from 'react';
import { Check } from 'lucide-react';

interface BusinessCardProps {
  tier: string;
  period: string;
  title: string;
  description: string;
  feeOptions: { amount: string; label: string }[];
  features: string[];
  buttonText: string;
  isDark?: boolean;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  tier,
  period,
  title,
  description,
  feeOptions,
  features,
  buttonText,
  isDark = false,
}) => {
  return (
    <div
      className={`rounded-3xl p-8 ${
        isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="mb-6">
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl font-bold">{tier}</span>
          <span className="text-sm text-gray-400 uppercase tracking-wide">
            {period}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {feeOptions.map((option, index) => (
          <div
            key={index}
            className={`border rounded-lg p-3 ${
              isDark ? 'border-gray-600' : 'border-gray-300'
            }`}
          >
            <div className="font-bold text-sm mb-1">{option.amount}</div>
            <div className="text-xs text-gray-400 uppercase">
              {option.label}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-3 px-6 rounded-full font-medium transition-colors ${
          isDark
            ? 'bg-white text-gray-900 hover:bg-gray-100'
            : 'bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-50'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

const BusinessAccount = () => {
  const plans = [
    {
      tier: 'Free',
      period: 'Monthly Fee',
      title: 'Startup Account',
      description: 'Perfect for early-stage businesses and entrepreneurs',
      feeOptions: [
        { amount: '0.5%', label: 'Transaction Fee' },
        { amount: '$50k', label: 'Monthly Volume Limit' },
      ],
      features: [
        '1 Business Account',
        '5 Team Cards',
        'Basic Analytics',
        'Email Support',
      ],
      buttonText: 'Select Plan',
      isDark: false,
    },
    {
      tier: '$29',
      period: 'Monthly Fee',
      title: 'Growth Account',
      description:
        'Ideal for growing businesses with higher transaction volumes',
      feeOptions: [
        { amount: '0.3%', label: 'Transaction Fee' },
        { amount: '$500k', label: 'Monthly Volume Limit' },
      ],
      features: [
        '3 Business Account',
        'Unlimited Team Cards',
        'Advanced Analytics',
        'Priority Support',
      ],
      buttonText: 'Select Plan',
      isDark: true,
    },
    {
      tier: 'Custom',
      period: 'Monthly Fee',
      title: 'Enterprise Account',
      description:
        'Full-featured solution for large businesses and corporations',
      feeOptions: [
        { amount: 'Negotiable', label: 'Transaction Fee' },
        { amount: 'No Monthly Limits', label: 'Monthly Volume Limit' },
      ],
      features: [
        'Unlimited Accounts',
        'Custom Integrations',
        'Dedicated Support',
        'Custom Limits',
      ],
      buttonText: 'Select Plan',
      isDark: false,
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Choose Your Business Account
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <BusinessCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessAccount;

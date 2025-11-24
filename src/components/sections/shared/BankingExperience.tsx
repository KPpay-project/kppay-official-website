import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  tier: string;
  price: string;
  period: string;
  title: string;
  description: string;
  balanceOptions: { amount: string; label: string }[];
  features: string[];
  buttonText: string;
  isDark?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  price,
  period,
  title,
  description,
  balanceOptions,
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
        {balanceOptions.map((option, index) => (
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

const BankingExperience = () => {
  const plans = [
    {
      tier: 'Free',
      price: '$0',
      period: 'Monthly Fee',
      title: 'Essential',
      description: 'Basic personal banking for everyday needs',
      balanceOptions: [
        { amount: '$0', label: 'Minimum Balance' },
        { amount: '$25', label: 'Overdraft Fee' },
      ],
      features: [
        '1 Checking Account',
        '1 Savings Account',
        '5 Free Transfers',
        'Mobile Banking',
      ],
      buttonText: 'Get Started',
      isDark: false,
    },
    {
      tier: '$12',
      price: '$12',
      period: 'Monthly Fee',
      title: 'Premium',
      description: 'Enhanced banking with additional perks and benefits',
      balanceOptions: [
        { amount: '$1k', label: 'Minimum Balance' },
        { amount: 'None', label: 'Overdraft Fee' },
      ],
      features: [
        'Multiple Accounts',
        'Unlimited Transfers',
        'Premium Cards',
        'Investment Access',
      ],
      buttonText: 'Get Started',
      isDark: true,
    },
    {
      tier: '$25',
      price: '$25',
      period: 'Monthly Fee',
      title: 'Wealth',
      description: 'Full-service banking for high-net-worth individuals',
      balanceOptions: [
        { amount: '$25k', label: 'Minimum Balance' },
        { amount: 'None', label: 'Overdraft Fee' },
      ],
      features: [
        'Private Banking',
        'Wealth Management',
        'Concierge Service',
        'Global Access',
      ],
      buttonText: 'Get Started',
      isDark: false,
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Choose Your Banking Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BankingExperience;

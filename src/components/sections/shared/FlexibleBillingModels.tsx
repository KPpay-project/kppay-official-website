import React from 'react';
import { Zap, Smartphone, Landmark, Wallet } from 'lucide-react';

interface BillingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
}

const BillingCard: React.FC<BillingCardProps> = ({
  icon,
  title,
  description,
  badge,
}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="bg-gray-800 text-white px-6 py-3 rounded font-medium text-sm w-full">
        {badge}
      </div>
    </div>
  );
};

const FlexibleBillingModels = () => {
  const models = [
    {
      icon: <Zap className="w-8 h-8 text-gray-900" />,
      title: 'Instant Transfers',
      description: 'Send money to friends and family instantly',
      badge: '24/7',
    },
    {
      icon: <Smartphone className="w-8 h-8 text-gray-900" />,
      title: 'Mobile-Check Deposit',
      description: 'Deposit checks by taking a photo',
      badge: 'Instant Processing',
    },
    {
      icon: <Landmark className="w-8 h-8 text-gray-900" />,
      title: 'ATM Access',
      description: 'Free access to 60,000+ ATMs worldwide',
      badge: 'Global Network',
    },
    {
      icon: <Wallet className="w-8 h-8 text-gray-900" />,
      title: 'Contactless Payments',
      description: 'Pay with your phone using Apple Pay or Google Pay',
      badge: 'Everywhere',
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Flexible Billing Models
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <BillingCard key={index} {...model} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlexibleBillingModels;

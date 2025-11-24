import React from 'react';
import { Zap, CreditCard, FileX, Repeat } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
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
      <div className="bg-gray-800 text-white px-6 py-2 rounded font-medium text-sm w-full">
        {badge}
      </div>
    </div>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-gray-900" />,
      title: 'Instant Pre-Approval',
      description:
        'Get pre-qualified instantly with our automated underwriting',
      badge: '3 Minutes',
    },
    {
      icon: <CreditCard className="w-8 h-8 text-gray-900" />,
      title: 'Same-day Funding',
      description: 'Receive your loan funds the same business day',
      badge: '24 Hours',
    },
    {
      icon: <FileX className="w-8 h-8 text-gray-900" />,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no origination or prepayment fees',
      badge: 'Always',
    },
    {
      icon: <Repeat className="w-8 h-8 text-gray-900" />,
      title: 'Flexible Terms',
      description: 'Choose repayment terms to fit your budget',
      badge: 'Your Choice',
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Why Choose KP Pay Loans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SimpleApplicationProcess = () => {
  const steps = [
    {
      number: '1',
      title: 'Check Rate',
      description: 'See your rate in minutes without affecting your score',
      badge: '3 Minutes',
    },
    {
      number: '2',
      title: 'Submit Application',
      description: 'Complete our simple online application',
      badge: '10 Minutes',
    },
    {
      number: '3',
      title: 'Get Approved',
      description: 'Receive instant decision on your application',
      badge: '1-24 Hours',
    },
    {
      number: '4',
      title: 'Receive Funds',
      description: 'Money deposited directly to your account',
      badge: 'Same Day',
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Simple Application Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="text-4xl font-bold text-gray-900 mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{step.description}</p>
              <div className="bg-gray-800 text-white px-6 py-2 rounded font-medium text-sm w-full">
                {step.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CreditScoreRequirements = () => {
  const requirements = [
    {
      icon: <Zap className="w-6 h-6 text-gray-900" />,
      title: 'Excellent Credit',
      score: '750+',
      features: [
        'Lowest Rates Available',
        'Highest Loan Amount',
        'Best Terms',
        'Premium Perks',
      ],
    },
    {
      icon: <Repeat className="w-6 h-6 text-gray-900" />,
      title: 'Good Credit',
      score: '650-749',
      features: [
        'Competitive Rates',
        'Standard Loan Amount',
        'Flexible Terms',
        'Quick Approval',
      ],
    },
    {
      icon: <CreditCard className="w-6 h-6 text-gray-900" />,
      title: 'Fair Credit',
      score: '550-649',
      features: [
        'Competitive Rates',
        'Standard Loan Amount',
        'Standard Terms',
        'Quick Approval',
      ],
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Credit Score Requirements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {requirements.map((req, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                {req.icon}
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {req.title}
                  </h3>
                  <p className="text-sm text-gray-600">{req.score}</p>
                </div>
              </div>
              <div className="bg-gray-800 text-white rounded p-4 space-y-2">
                {req.features.map((feature, idx) => (
                  <div key={idx} className="text-sm">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PaymentExamples = () => {
  const examples = [
    {
      type: 'Auto Loan',
      rate: '4.9% APR',
      term: '60 months',
      monthly: '$188/month',
      total: '$11,280',
    },
    {
      type: 'Auto Loan',
      rate: '5.9% APR',
      term: '60 months',
      monthly: '$193/month',
      total: '$11,580',
    },
    {
      type: 'Auto Loan',
      rate: '6.9% APR',
      term: '60 months',
      monthly: '$197/month',
      total: '$11,820',
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Payment Examples
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <div key={index} className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {example.type}
              </h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div>Loan Amount</div>
                <div>Loan Rate: {example.rate}</div>
                <div>Loan Term: {example.term}</div>
                <div>Loan Term</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800 text-white px-4 py-2 rounded text-center">
                  <div className="text-xs mb-1">MONTHLY PAYMENT</div>
                  <div className="font-bold">{example.monthly}</div>
                </div>
                <div className="bg-gray-800 text-white px-4 py-2 rounded text-center">
                  <div className="text-xs mb-1">TOTAL AMOUNT</div>
                  <div className="font-bold">{example.total}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const KPPayLoans = () => {
  return (
    <div className="bg-surface-secondary">
      <WhyChooseSection />
      <SimpleApplicationProcess />
      <CreditScoreRequirements />
      <PaymentExamples />
    </div>
  );
};

export default KPPayLoans;

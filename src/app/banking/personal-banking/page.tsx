// app/services/personal-banking/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
  BenefitsGrid,
  TrustStats,
  FinancialToolkit,
  BusinessAccount,
  FlexibleBillingModels,
  CTABox,
} from '@/types';
import { PiggyBank, Smartphone, Globe, CreditCard } from 'lucide-react';

export default function PersonalBankingPage() {
  const features: ServiceFeature[] = [
    {
      icon: <PiggyBank className="w-10 h-10" />,
      title: 'Smart Budgeting',
      description:
        'AI-powered budgeting tools to help you manage your financial life with ease.',
      items: [
        'Automatic Categorization',
        'Spending Insights',
        'Budget Alerts',
        'Goal Tracking',
      ],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Mobile-First Banking',
      description:
        'Complete banking experience at your fingertips with our intuitive mobile app.',
      items: [
        'Instant Transfers',
        'Mobile Check Deposit',
        'Bill Pay',
        'ATM Locator',
      ],
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Global Payments',
      description:
        'Send and receive money internationally with competitive rates and fast processing.',
      items: [
        '100+ Countries',
        'Real-time Transfers',
        'Low Fees',
        'Currency Exchange',
      ],
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: 'Premium Cards',
      description:
        'Virtual and physical cards with rewards program and security controls.',
      items: [
        'Cashback Rewards',
        'No Foreign Fees',
        'Instant Virtual Cards',
        'Spending Controls',
      ],
    },
  ];

  // Define the Feature type inline if not exported from @/types
  interface BenefitFeature {
    icon: string;
    title: string;
    description: string;
  }

  const benefitsFeatures: BenefitFeature[] = [
    {
      icon: images.productIcons.fdic,
      title: 'FDIC Insured',
      description:
        'Deposits protected up to $250,000 per account by FDIC insurance',
    },
    {
      icon: images.productIcons.alerts,
      title: 'Real-time Alerts',
      description:
        'Instant notifications for every transaction and account activity',
    },
    {
      icon: images.productIcons.card,
      title: 'Card Controls',
      description:
        'Instantly freeze cards, set spending limits, and control where cards work',
    },
  ];

  const stats = [
    {
      value: '2M+',
      label: 'Personal Accounts',
    },
    {
      value: '4.8',
      label: 'App Store Rating',
    },
    {
      value: '$20B+',
      label: 'Safely Deposited',
    },
    {
      value: '150+',
      label: 'Countries Served',
    },
  ];

  // Define CTAButton type inline if not exported from @/types
  interface CTAButton {
    text: string;
    href: string;
    variant?:
      | 'primary'
      | 'white'
      | 'outlined'
      | 'outlined-white'
      | 'ghost'
      | 'secondary';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    showArrow?: boolean;
    className?: string;
  }

  const ctaButtons: CTAButton[] = [
    {
      text: 'Open Account Now',
      // href: '/integration', // TODO: Route not created yet - decide to create or redirect to existing page
      variant: 'outlined-white',
      size: 'md',
      showArrow: true,
      className: 'bg-white text-black hover:bg-white/90',
    },
    {
      text: 'Download App',
      // href: '/sales', // TODO: Route not created yet - decide to create or redirect to existing page
      variant: 'outlined-white',
      size: 'md',
      showArrow: true,
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Personal Banking"
        description="Modern personal banking designed for your lifestyle. Smart budgeting, global payments, and mobile-first banking experience."
        imageSrc={images.services.onlinePayment}
        imageAlt="Personal Banking Experience"
        primaryButtonText="Open Personal Account"
        primaryButtonHref="/signup"
        secondaryButtonText="Explore Features"
        secondaryButtonHref="/features"
      />

      <ServiceFeatures
        title="Banking That Works For You"
        features={features}
        variant="gray"
        customColors={{
          sectionTitle: 'text-text-inverse-dark',
          featureTitle: 'text-text-inverse-dark',
          description: 'text-text-main-white',
          checkIcon: 'text-text-inverse-dark',
          listItem: 'text-white',
        }}
        boxOpacity={10}
      />

      {/* Choose your business account */}
      <BusinessAccount />

      {/* Complete financial toolkit */}
      <FinancialToolkit />

      {/* Flexible Billing Models */}
      <FlexibleBillingModels />

      {/* Benefits Grid Section */}
      <BenefitsGrid
        backgroundColor="bg-[#F9FAFB]"
        heading="Your Money, Protected"
        features={benefitsFeatures}
      />

      <TrustStats
        heading="Trusted by millions"
        subheading="Join the growing community of satisfied KP Pay customers"
        stats={stats}
        statValueClassName="heading-bebas-light text-5xl md:text-6xl lg:text-7xl text-[#3d3d3d] mb-2 md:mb-3"
      />

      {/* CTA Box Section */}
      <CTABox
        heading="Ready to Experience Better Banking?"
        description="Join millions who've switched to KP Pay for smarter, simpler personal banking."
        buttons={ctaButtons}
        headingColor="text-text-inverse-dark"
        sectionBackgroundColor="bg-gray/900"
        ctaBackgroundColor="bg-text-secondary-dark"
      />
    </main>
  );
}

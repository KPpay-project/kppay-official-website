// app/services/business-accounts/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
  BenefitsGrid,
  TrustStats,
  CTABox,
  CorporateBankingSuite,
  BankingExperience,
} from '@/types';
import { Globe, Receipt, CreditCard, Link } from 'lucide-react';

export default function BusinessAccountsPage() {
  const features: ServiceFeature[] = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Multi-Currency Support',
      description:
        'Hold and manage multiple currencies with competitive exchange rates.',
      items: [
        '50+ Currencies',
        'Real-time Exchange Rates',
        '24/7 Conversions',
        'Automatic Currency Conversion',
      ],
    },
    {
      icon: <Receipt className="w-10 h-10" />,
      title: 'Expense Management',
      description:
        'Track and categorize business expenses with smart automation.',
      items: [
        'Automated Categorization',
        'Receipt Scanning',
        'Budget Spending',
        'Real-time Reporting',
      ],
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: 'Team Cards',
      description:
        'Issue virtual and physical cards for your team with spending controls.',
      items: [
        'Unlimited Virtual Cards',
        'Custom Spending Limits',
        'Real-time Controls',
        'Team Management',
      ],
    },
    {
      icon: <Link className="w-10 h-10" />,
      title: 'API Integration',
      description: 'Unify your business systems with our comprehensive APIs.',
      items: [
        'RESTful API',
        'Real-time Webhooks',
        'SDK Support',
        'Sandbox Testing',
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
      icon: images.productIcons.global,
      title: 'Global Banking',
      description:
        'Operate globally with multi-currency accounts and international transfers',
    },
    {
      icon: images.productIcons.fdic,
      title: 'Bank-Grade Security',
      description:
        'FDIC insured deposits with enterprise-grade security and compliance',
    },
    {
      icon: images.productIcons.support,
      title: 'Dedicated Support',
      description: 'Personal relationship managers and 24/7 business support',
    },
  ];

  const stats = [
    {
      value: '25K+',
      label: 'Business Accounts',
    },
    {
      value: '$5B+',
      label: 'Total Deposits',
    },
    {
      value: '50+',
      label: 'Supported Currencies',
    },
    {
      value: '99.9%',
      label: 'Uptime Guarantee',
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
      text: 'Start Integration Now',
      href: '/integration',
      variant: 'outlined-white',
      size: 'md',
      showArrow: true,
      className: 'bg-white text-black hover:bg-white/90',
    },
    {
      text: 'Contact Sales',
      href: '/sales',
      variant: 'outlined-white',
      size: 'md',
      showArrow: true,
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Business Accounts"
        description="Full-featured business banking designed for modern companies. Multi-currency support, expense management, and seamless integrations."
        imageSrc={images.services.businessAccounts}
        imageAlt="Business Banking"
        primaryButtonText="Open Business Account"
        primaryButtonHref="/signup"
        secondaryButtonText="Schedule Consultation"
        secondaryButtonHref="/contact"
      />

      <ServiceFeatures
        title="Modern Business Banking Features"
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

      {/* Choose your banking experience */}
      <BankingExperience />

      {/* Complete business banking */}
      <CorporateBankingSuite />

      {/* Benefits Grid Section */}
      <BenefitsGrid
        backgroundColor="bg-[#F9FAFB]"
        heading="Why Choose KP Pay Business Accounts"
        features={benefitsFeatures}
      />

      <TrustStats
        heading="Trusted by Growing Businesses"
        subheading="Join thousands of businesses banking with KP Pay"
        stats={stats}
        statValueClassName="heading-bebas-light text-5xl md:text-6xl lg:text-7xl text-[#3d3d3d] mb-2 md:mb-3"
      />

      {/* CTA Box Section */}
      <CTABox
        heading="Ready to Modernize Your Business Banking?"
        description="Open your KP Pay business account today and experience the future of business banking."
        buttons={ctaButtons}
        headingColor="text-text-inverse-dark"
        sectionBackgroundColor="bg-gray/900"
        ctaBackgroundColor="bg-text-secondary-dark"
      />
    </main>
  );
}

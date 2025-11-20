// app/services/loans/page.tsx
import React from 'react';
import {
  ServiceHero,
  LoanCards,
  images,
  type LoanCardData,
  BenefitsGrid,
  TrustStats,
} from '@/types';

export default function LoansPage() {
  const loans: LoanCardData[] = [
    {
      title: 'Personal Loans',
      description: 'Quick personal financing with competitive rates.',
      rateRange: '5.99% - 24.99%',
      amountRange: '$1,000 - $50,000',
      termRange: '12 - 60 months',
      features: [
        'No Collateral Required',
        'Fast Approval',
        'Quick Approval',
        'Flexible Repayment',
      ],
    },
    {
      title: 'Business Loans',
      description: 'Grow your business with tailored business financing.',
      rateRange: '7.99% - 19.99%',
      amountRange: '$5,000 - $500,000',
      termRange: '6 - 60 months',
      features: [
        'Revenue-based Qualification',
        'Fast Funding',
        'Business-friendly Terms',
        'Dedicated Support',
      ],
    },
    {
      title: 'Auto Loans',
      description: 'Finance your vehicle with low rates and flexible terms.',
      rateRange: '3.99% - 18.99%',
      amountRange: '$5,000 - $100,000',
      termRange: '24 - 72 months',
      features: [
        'New and Used Cars',
        'Refinancing Available',
        'Direct Dealer Financing',
        'Gap Insurance Options',
      ],
    },
    {
      title: 'Home Equity',
      description:
        'Leverage your home equity with low rates and flexible terms.',
      rateRange: '4.5% - 10.99%',
      amountRange: '$10,000 - $500,000',
      termRange: '5+ - 30 years',
      features: [
        'Tax Advantages',
        'Low Interest Rates',
        'Flexible Access',
        'No Application Fees',
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
      icon: images.productIcons.data,
      title: 'Data Protection',
      description:
        'Bank-level encryption and security to protect your personal information',
    },
    {
      icon: images.productIcons.fees,
      title: 'No Hidden Fees',
      description:
        'Transparent pricing with no origination fees or prepayment penalties',
    },
    {
      icon: images.productIcons.lending,
      title: 'Responsible Lending',
      description:
        'Ethical lending practices focused on your financial well-being',
    },
  ];

  const stats = [
    {
      value: '$2B+',
      label: 'Loans Funded',
    },
    {
      value: '100K+',
      label: 'Happy Borrowers',
    },
    {
      value: '4.8',
      label: 'Customer Rating',
    },
    {
      value: '24HR',
      label: 'Average Approval Time',
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Loans and Credit"
        description="Access flexible financing solutions for personal and business needs. Competitive rates, fast approval, and transparent terms with no hidden fees."
        imageSrc={images.services.loans}
        imageAlt="Loans and Credit"
        primaryButtonText="Check Your Rate"
        primaryButtonHref="/signup"
        secondaryButtonText="Loans Calculator"
        secondaryButtonHref="/calculator"
      />

      <LoanCards title="Lending Solutions for Every Need" loans={loans} />

      {/* Benefits Grid Section */}
      <BenefitsGrid
        backgroundColor="bg-[#F9FAFB]"
        heading="Secure & Transparent Lending"
        features={benefitsFeatures}
      />

      <TrustStats
        heading="Trusted Lending Partner"
        subheading="Join thousands who've achieved their goals with KP Pay loans"
        stats={stats}
        statValueClassName="heading-bebas-light text-5xl md:text-6xl lg:text-7xl text-[#3d3d3d] mb-2 md:mb-3"
      />
    </main>
  );
}

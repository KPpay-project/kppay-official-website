// app/services/savings-investment/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
  BenefitsGrid,
  TrustStats,
  SavingsInvestmentTools,
  InvestmentPortfolio,
  FinancialPlanningTools,
  CTABox,
} from '@/types';
import { TrendingUp, Award, Shield, Target } from 'lucide-react';

export default function SavingsInvestmentPage() {
  const features: ServiceFeature[] = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'High-Yield Savings',
      description:
        'Earn more on your deposits with competitive interest rates and no hidden fees.',
      items: [
        'Up to 5% APY',
        'FDIC Insured',
        'Daily Compounding',
        'No Monthly Fees',
      ],
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Certificate of Deposit',
      description:
        'Lock in competitive returns with our flexible CD terms and guaranteed protection.',
      items: [
        'Guaranteed Returns',
        'Fixed Rate Protection',
        'Multiple Terms',
        'Auto-renewal Options',
      ],
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Investment Portfolio',
      description:
        'Diversified portfolios managed by expert advisors with low fees and transparency.',
      items: [
        'Professional Management',
        'Diversified Holdings',
        'Low Fees',
        'Tax Optimization',
      ],
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Goal-Based Savings',
      description:
        'Automated savings plans to help you reach your financial goals faster.',
      items: [
        'Automatic Transfers',
        'Goal Tracking',
        'Round-Up Savings',
        'Progress Insights',
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
      icon: images.productIcons.alerts,
      title: 'Competitive Returns',
      description:
        'High-yield savings and diversified investment options for optimal growth',
    },
    {
      icon: images.productIcons.fdic,
      title: 'FDIC Insured',
      description:
        'Savings accounts insured up to $250,000 for maximum security',
    },
    {
      icon: images.productIcons.card,
      title: 'Goal-based',
      description:
        'Automated tools to help you reach specific financial goals faster',
    },
  ];

  const stats = [
    {
      value: '$8B+',
      label: 'Assets Under Management',
    },
    {
      value: '500K+',
      label: 'Investment Accounts',
    },
    {
      value: '4.8%',
      label: 'Average Portfolio Return',
    },
    {
      value: '150+',
      label: 'Customer Satisfaction',
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
      text: 'Open Savings Account',
      // href: '/integration', // TODO: Route not created yet - decide to create or redirect to existing page
      variant: 'outlined-white',
      size: 'md',
      showArrow: true,
      className: 'bg-white text-black hover:bg-white/90',
    },
    {
      text: 'Start Investing',
      // href: '/sales', // TODO: Route not created yet - decide to create or redirect to existing page
      variant: 'outlined-white',
      size: 'md',
      showArrow: true,
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Savings & Investment"
        description="Grow your wealth with high-yield savings accounts, smart investment portfolios, and automated savings tools designed to help you reach your financial goals."
        imageSrc={images.services.savings}
        imageAlt="Savings and Investment Growth"
        primaryButtonText="Start Saving"
        primaryButtonHref="/signup"
        secondaryButtonText="Savings Calculator"
        secondaryButtonHref="/tools/calculator"
      />

      <ServiceFeatures
        title="Savings & Investment Products"
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

      {/* Investment Portfolio Options */}
      <InvestmentPortfolio />

      {/* Smart savings */}
      <SavingsInvestmentTools />

      {/* Financial Planning Tools */}
      <FinancialPlanningTools />

      {/* Benefits Grid Section */}
      <BenefitsGrid
        backgroundColor="bg-[#F9FAFB]"
        heading="Why Save & Invest with KP Pay"
        features={benefitsFeatures}
      />

      <TrustStats
        heading="Growing Wealth Together"
        subheading="Join thousands building wealth with KP Pay savings and investments"
        stats={stats}
        statValueClassName="heading-bebas-light text-5xl md:text-6xl lg:text-7xl text-[#3d3d3d] mb-2 md:mb-3"
      />

      {/* CTA Box Section */}
      <CTABox
        heading="Ready to Start Growing Your Wealth?"
        description="Open a high-yield savings account or start investing today with KP Pay's smart financial tools. "
        buttons={ctaButtons}
        headingColor="text-text-inverse-dark"
        sectionBackgroundColor="bg-gray/900"
        ctaBackgroundColor="bg-text-secondary-dark"
      />
    </main>
  );
}

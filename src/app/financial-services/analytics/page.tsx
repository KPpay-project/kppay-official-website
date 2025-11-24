// app/services/analytics/page.tsx
'use client';
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
  DashboardWidgets,
  CTABox,
  BenefitsGrid,
  TrustStats,
} from '@/types';
import { BarChart3, TrendingUp, Users, Target } from 'lucide-react';
import AutomatedReporting from '@/components/sections/FinancialServices/AutomatedReportingSuite';

export default function AnalyticsPage() {
  const features: ServiceFeature[] = [
    {
      icon: <BarChart3 className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'Real-time Dashboards',
      description:
        'Monitor your business performance with live data visualization.',
      items: [
        'Live Transaction Monitoring',
        'Custom Dashboard Builder',
        'Mobile-responsive Design',
        'Real-time Alerts',
      ],
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'Financial Insights',
      description:
        'Deep analysis of revenue, expenses, and cash flow patterns.',
      items: [
        'Revenue Forecasting',
        'Expense Categorization',
        'Cash Flow Analysis',
        'Profitability Tracking',
      ],
    },
    {
      icon: <Users className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'Customer Analytics',
      description: "Understand your customers' behaviors and payment patterns.",
      items: [
        'Customer Segmentation',
        'Lifetime Value Analysis',
        'Churn Prediction',
        'Payment Preferences',
      ],
    },
    {
      icon: <Target className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'Performance Metrics',
      description: 'Track KPIs and business metrics that matter most.',
      items: [
        'Custom KPI Tracking',
        'Benchmark Comparisons',
        'Goal Setting',
        'Performance Scoring',
      ],
    },
  ];

  const stats = [
    {
      value: '32%',
      label: 'Revenue Increase',
    },
    {
      value: '45%',
      label: 'Faster Decisions',
    },
    {
      value: '28%',
      label: 'Cost Reduction',
    },
    {
      value: '90%',
      label: 'User Satisfaction',
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
      icon: images.onlinePaymentsIcons.instant,
      title: 'Increase Revenue',
      description:
        'Identify growth opportunities and optimize pricing strategies with data insights',
    },
    {
      icon: images.onlinePaymentsIcons.enterprise,
      title: 'Understand Customers',
      description:
        'Gain deep insights into customer behavior and preferences to improve satisfaction',
    },
    {
      icon: images.onlinePaymentsIcons.global,
      title: 'Reduce Costs',
      description:
        'Optimize operations and reduce expenses through intelligent data analysis',
    },
  ];

  const ctaButtons = [
    {
      text: 'Get Started Today',
      href: '/get-started',
      variant: 'outlined-white' as const,
      size: 'md' as const,
      showArrow: true,
      className: 'bg-white text-brand-secondary hover:bg-white/90',
    },
    {
      text: 'Schedule Consultation',
      href: '/contact-expert',
      variant: 'outlined-white' as const,
      size: 'md' as const,
      showArrow: true,
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Analytics"
        description="Transform your data into actionable insights with comprehensive analytics tools. Real-time dashboards, financial reports, and predictive analytics to drive business growth."
        imageSrc={images.services.analytics}
        imageAlt="Analytics Dashboard"
        primaryButtonText="Start Analytics"
        primaryButtonHref="/signup"
        secondaryButtonText="View Demo"
        secondaryButtonHref="/demo"
      />

      <ServiceFeatures
        title="Powerful Analytics Features"
        features={features}
        variant="blue"
        customColors={{
          sectionTitle: 'text-text-inverse-secondary',
          featureTitle: 'text-text-inverse-secondary',
          description: 'text-text-main-white',
          checkIcon: 'text-text-inverse-secondary',
          listItem: 'text-white',
        }}
        boxOpacity={10}
      />

      {/* Comprehensive Dashboard Widgets */}
      <DashboardWidgets />

      {/* Automated Reporting Suite */}
      <AutomatedReporting />

      {/* Benefits Grid Section */}
      <BenefitsGrid
        backgroundColor="bg-[#F9FAFB]"
        heading="Data-Driven Business Growth"
        features={benefitsFeatures}
      />

      <TrustStats
        heading="Analytics That Drive Results"
        subheading="Businesses using KP Pay Analytics see measurable improvements"
        stats={stats}
        statValueClassName="heading-bebas-light text-5xl md:text-6xl lg:text-7xl text-brand-secondary mb-2 md:mb-3"
      />

      {/* CTA Box */}
      <CTABox
        heading="Ready to Unlock Your Data's Potential?"
        description="Start making data-driven decisions with KP Pay's comprehensive analytics platform."
        buttons={ctaButtons}
        headingColor="text-text-main-white"
        ctaBackgroundColor="bg-brand-secondary"
        sectionBackgroundColor="bg-white"
        paddingY="pt-0 pb-12 md:pb-16 lg:pb-20"
      />
    </main>
  );
}

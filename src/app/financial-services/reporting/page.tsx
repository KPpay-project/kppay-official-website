// app/services/reporting/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
  CustomReportBuilder,
  CTABox,
  BenefitsGrid,
  TrustStats,
} from '@/types';
import { FileText, BarChart, Users, Shield } from 'lucide-react';

export default function ReportingPage() {
  const features: ServiceFeature[] = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Financial Reports',
      description:
        'Comprehensive financial statements and accounting reports with customizable templates.',
      items: [
        'Profit & Loss Statement',
        'Balance Sheet',
        'Cash Flow Statement',
        'Tax Summaries',
      ],
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: 'Transaction Reports',
      description:
        'Detailed transaction data and payment processing analytics for business insights.',
      items: [
        'Transaction Summary',
        'Payment Method Analysis',
        'Flagged Payment Report',
        'Chargeback Report',
      ],
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Customer Reports',
      description:
        'Customer behavior and demographic analysis reports to understand your client base better.',
      items: [
        'Customer Lifetime Value',
        'Acquisition Report',
        'Retention Analysis',
        'Geographic Distribution',
      ],
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Compliance Reports',
      description:
        'Regulatory and compliance documentation for audits with automated generation and delivery.',
      items: [
        'AML Compliance Report',
        'PCI DSS Documentation',
        'KYC Status Report',
        'Audit Trail',
      ],
    },
  ];

  const stats = [
    {
      value: '75%',
      label: 'Time Saved',
    },
    {
      value: '50+',
      label: 'Report Templates',
    },
    {
      value: '99.9%',
      label: 'Delivery Reliability',
    },
    {
      value: '24/7',
      label: 'Report Access',
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
      title: 'Save Time',
      description:
        'Automated report generation saves hours of manual work each month',
    },
    {
      icon: images.onlinePaymentsIcons.enterprise,
      title: 'Stay Compliant',
      description:
        'Automated compliance reporting keeps you audit-ready at all times',
    },
    {
      icon: images.onlinePaymentsIcons.global,
      title: 'Make Better Decisions',
      description:
        'Regular insights help you identify trends and opportunities faster',
    },
  ];

  const ctaButtons = [
    {
      text: 'Start Reporting Today',
      href: '/get-started',
      variant: 'outlined-white' as const,
      size: 'md' as const,
      showArrow: true,
      className: 'bg-white text-brand-secondary hover:bg-white/90',
    },
    {
      text: 'Request Custom Demo',
      href: '/contact-expert',
      variant: 'outlined-white' as const,
      size: 'md' as const,
      showArrow: true,
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Reporting and Documentation"
        description="Generate comprehensive financial reports automatically. Customizable templates, automated delivery, and compliance documentation to keep your business informed and compliant."
        imageSrc={images.services.businessAccounts}
        imageAlt="Reporting and Documentation"
        primaryButtonText="Setup Reporting"
        primaryButtonHref="/signup"
        secondaryButtonText="View Report Samples"
        secondaryButtonHref="/samples"
      />

      <ServiceFeatures
        title="Comprehensive Report Library"
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

      {/* Custom Report Builder */}
      <CustomReportBuilder />

      {/* Benefits Grid Section */}
      <BenefitsGrid
        backgroundColor="bg-[#F9FAFB]"
        heading="streamlined business intelligence"
        features={benefitsFeatures}
      />

      <TrustStats
        heading="Reporting that delivers results"
        subheading="Business using KP Pay reporting see significant improvements"
        stats={stats}
        statValueClassName="heading-bebas-light text-5xl md:text-6xl lg:text-7xl text-brand-secondary mb-2 md:mb-3"
      />

      {/* CTA Box */}
      <CTABox
        heading="Ready to automate your reporting?"
        description="Start generating professional reports automatically with KP Pay’s comprehensive reporting suite."
        buttons={ctaButtons}
        headingColor="text-text-main-white"
        ctaBackgroundColor="bg-brand-secondary"
        sectionBackgroundColor="bg-white"
        paddingY="pt-0 pb-12 md:pb-16 lg:pb-20"
      />
    </main>
  );
}

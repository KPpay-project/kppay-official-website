// app/services/compliance/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
  AdvancedComplianceTools,
  CTABox,
  BenefitsGrid,
  TrustStats,
} from '@/types';
import { Shield, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

export default function CompliancePage() {
  const features: ServiceFeature[] = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'PCI DSS Compliance',
      description:
        'Comprehensive financial statements and accounting reports for regulatory compliance.',
      items: [
        'Profit & Loss Statement',
        'Balance Sheet',
        'Cash Flow Statement',
        'Tax Summaries',
      ],
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'AML/KYC Management',
      description:
        'Detailed transaction data and payment processing analytics for anti-money laundering compliance.',
      items: [
        'Transaction Summary',
        'Payment Method Analysis',
        'Flagged Payment Report',
        'Chargeback Report',
      ],
    },
    {
      icon: <AlertTriangle className="w-10 h-10" />,
      title: 'Fraud Detection',
      description:
        'Customer behavior and demographic analysis reports to identify and prevent fraudulent activities.',
      items: [
        'Customer Lifetime Value',
        'Acquisition Report',
        'Retention Analysis',
        'Geographic Distribution',
      ],
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: 'Regulatory Reporting',
      description:
        'Regulatory and compliance documentation for audits with automated report generation.',
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
      value: '99%',
      label: 'Compliance Uptime',
    },
    {
      value: '150+',
      label: 'Regulatory Standards',
    },
    {
      value: '24/7',
      label: 'Monitoring Coverage',
    },
    {
      value: 'ZERO',
      label: 'Major Compliance Violations',
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
      text: 'Start Compliance Program',
      href: '/get-started',
      variant: 'outlined-white' as const,
      size: 'md' as const,
      showArrow: true,
      className: 'bg-white text-brand-secondary hover:bg-white/90',
    },
    {
      text: 'Compliance Consultation',
      href: '/contact-expert',
      variant: 'outlined-white' as const,
      size: 'md' as const,
      showArrow: true,
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Compliance and Risk Management"
        description="Generate comprehensive financial reports automatically. Customizable templates, automated delivery, and compliance documentation to keep your business informed and compliant."
        imageSrc={images.services.compliance}
        imageAlt="Compliance and Risk Management"
        primaryButtonText="Compliance Assessment"
        primaryButtonHref="/assessment"
        secondaryButtonText="View Compliance Demo"
        secondaryButtonHref="/demo/compliance"
      />

      <ServiceFeatures
        title="Comprehensive Compliance Suite"
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

      {/* Advanced Compliance Tools */}
      <AdvancedComplianceTools />

      {/* Benefits Grid Section */}
      <BenefitsGrid
        backgroundColor="bg-[#F9FAFB]"
        heading="why choose kp pay compliance"
        features={benefitsFeatures}
      />

      <TrustStats
        heading="compliance excellence"
        subheading="Business using KP Pay reporting see significant improvements"
        stats={stats}
        statValueClassName="heading-bebas-light text-5xl md:text-6xl lg:text-7xl text-brand-secondary mb-2 md:mb-3"
      />

      {/* CTA Box */}
      <CTABox
        heading="Ready to ensure complete compliance?"
        description="Protect your business with KP Pay’s comprehensive and risk management solutions"
        buttons={ctaButtons}
        headingColor="text-text-main-white"
        ctaBackgroundColor="bg-brand-secondary"
        sectionBackgroundColor="bg-white"
        paddingY="pt-0 pb-12 md:pb-16 lg:pb-20"
      />
    </main>
  );
}

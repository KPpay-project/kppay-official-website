// app/services/online-payments/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  IntegrationSelector,
  images,
  type ServiceFeature,
  type IntegrationOption,
  OnlinePaymentsBenefits,
} from '@/types';
import {
  CreditCard,
  Smartphone,
  Globe,
  Lock,
  ShoppingCart,
  Code,
} from 'lucide-react';

export default function OnlinePaymentsPage() {
  const features: ServiceFeature[] = [
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: 'Credit and Debit Cards',
      description: 'Accept all major card payments worldwide.',
      items: [
        'Visa, Mastercard Support',
        'Amex Integration',
        '3D Secure Authentication',
        'Dynamic Currency Conversion',
        'Fraud Protection',
      ],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Local Payment Methods',
      description: 'Regional payment options for African markets.',
      items: [
        'Visa, Mastercard, Amex',
        'Mobile Money Integration',
        'Dynamic Currency Conversion',
        'Local Mobile Money',
      ],
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Digital Wallets',
      description: 'Integrate popular digital payment methods.',
      items: [
        'Apple Pay Integration',
        'Google Pay Support',
        '3D Secure Authentication',
        'Dynamic Currency Conversion',
        'One-click Checkout',
      ],
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: 'Security & Compliance', // Changed this title
      description: 'Enterprise-grade security for your payments.', // Changed this description
      items: [
        'Samsung Pay',
        'Alipay & WeChat Pay',
        'Paypal Integration',
        'Fraud Protection',
      ],
    },
  ];

  const integrationOptions: IntegrationOption[] = [
    {
      id: 'hosted-checkout',
      icon: <ShoppingCart size={40} strokeWidth={1.5} />,
      title: 'Hosted Checkout',
      description: 'Pre-built, customizable payment pages',
      timeToIntegrate: '15 minutes',
      complexity: 'Advanced',
      features: [
        'No coding Required',
        'Mobile Optimized',
        'PCI Compliant',
        'Multi-Language Support',
      ],
      ctaText: 'Learn More',
      ctaHref: '/integrations/hosted-checkout',
    },
    {
      id: 'payment-elements',
      icon: <CreditCard size={40} strokeWidth={1.5} />,
      title: 'Payment Elements',
      description: 'Embeddable UI components for custom integration',
      timeToIntegrate: '1-2 hours',
      complexity: 'Intermediate',
      features: [
        'No coding Required',
        'Mobile Optimized',
        'PCI Compliant',
        'Multi-Language Support',
      ],
      ctaText: 'Learn More',
      ctaHref: '/integrations/payment-elements',
    },
    {
      id: 'payment-apis',
      icon: <Code size={40} strokeWidth={1.5} />,
      title: 'Payment APIs',
      description: 'Full control with our REST APIs',
      timeToIntegrate: '1-2 Days',
      complexity: 'Advanced',
      features: [
        'No coding Required',
        'Mobile Optimized',
        'PCI Compliant',
        'Multi-Language Support',
      ],
      ctaText: 'Learn More',
      ctaHref: '/integrations/payment-apis',
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Online Payments"
        description="Accept payments on your website with a simple integration. Support for global payment methods, instant settlement, and enterprise-grade security."
        imageSrc={images.services.onlinePayment}
        imageAlt="Online Payments"
        primaryButtonText="Start in Sales"
        primaryButtonHref="/signup"
        secondaryButtonText="Get started"
        secondaryButtonHref="/demo"
      />

      <ServiceFeatures
        title="Accept Any Payment Method"
        features={features}
        variant="primary"
        customColors={{
          sectionTitle: 'text-text-inverse-primary',
          featureTitle: 'text-text-inverse-primary',
          description: 'text-text-main-white',
          checkIcon: 'text-text-inverse-primary',
          listItem: 'text-white',
        }}
        boxOpacity={10}
      />

      <IntegrationSelector
        heading="Choose Your Integration"
        options={integrationOptions}
      />

      {/* Why Choose KP Pay Online Payments */}
      <OnlinePaymentsBenefits />
    </main>
  );
}

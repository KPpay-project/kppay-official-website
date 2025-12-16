// app/services/online-payments/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  IntegrationSelector,
  BenefitsGrid,
  CTABox,
  images,
  type ServiceFeature,
  type IntegrationOption,
  ROUTES,
} from '@/types';
import {
  CreditCard,
  Smartphone,
  Globe,
  Lock,
  ShoppingCart,
  Code,
} from 'lucide-react';

// Define the Feature type inline if not exported from @/types
interface BenefitFeature {
  icon: string;
  title: string;
  description: string;
}

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

export default function OnlinePaymentsPage() {
  const serviceFeatures: ServiceFeature[] = [
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
      title: 'Security & Compliance',
      description: 'Enterprise-grade security for your payments.',
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
      ctaHref: ROUTES.RESOURCES,
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
      ctaHref: ROUTES.RESOURCES,
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
      ctaHref: ROUTES.RESOURCES,
    },
  ];

  const benefitsFeatures: BenefitFeature[] = [
    {
      icon: images.onlinePaymentsIcons.instant,
      title: 'Instant Settlement',
      description:
        'Get paid instantly with real-time settlement to your account',
    },
    {
      icon: images.onlinePaymentsIcons.enterprise,
      title: 'Enterprise Security',
      description: 'PCI DSS level 1 compliance and advanced fraud protection',
    },
    {
      icon: images.onlinePaymentsIcons.global,
      title: 'Global Reach',
      description: 'Accept payments from customers worldwide in 150+ countries',
    },
  ];

  const ctaButtons: CTAButton[] = [
    {
      text: 'Start Integration Now',
      href: ROUTES.RESOURCES,
      variant: 'outlined-white',
      size: 'md',
      showArrow: true,
      className: 'bg-white text-brand-primary hover:bg-white/90',
    },
    {
      text: 'Contact Sales',
      href: ROUTES.CONTACT,
      variant: 'outlined-white',
      size: 'md',
      showArrow: true,
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
        primaryButtonHref={ROUTES.SIGNUP}
        secondaryButtonText="Get started"
        secondaryButtonHref={ROUTES.CONTACT}
      />

      <ServiceFeatures
        title="Accept Any Payment Method"
        features={serviceFeatures}
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

      {/* Benefits Grid Section */}
      <BenefitsGrid
        backgroundColor="bg-[#F9FAFB]"
        heading="Why Choose KP Pay Online Payments"
        features={benefitsFeatures}
      />

      {/* CTA Box Section */}
      <CTABox
        heading="Ready to start accepting payment?"
        description="Join thousands of businessess processing payment with KPapy. Get started in minutes."
        buttons={ctaButtons}
        sectionBackgroundColor="bg-gray/900"
        ctaBackgroundColor="bg-brand-primary"
      />
    </main>
  );
}

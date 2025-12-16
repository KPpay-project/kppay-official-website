// app/services/mobile-payments/page.tsx
// ============================================
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  MobileAppSelector,
  SDKSelector,
  images,
  type ServiceFeature,
  type MobileAppOption,
  type SDKOption,
  QuickIntegrationSteps,
  TrustStats,
  CTABox,
  ROUTES,
} from '@/types';
import {
  Smartphone,
  QrCode,
  Wallet,
  Code,
  ShoppingCart,
  HandCoins,
  PlayCircle,
  Apple,
  Bot,
} from 'lucide-react';

export default function MobilePaymentsPage() {
  const features: ServiceFeature[] = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Mobile SDKs',
      description: 'Native iOS and Android SDKs for seamless integration.',
      items: [
        'iOS & Android SDKs',
        'Native Performance',
        'Auto-updates',
        'Offline Payments',
      ],
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'In-App Payments',
      description: 'Accept payments directly inside your mobile app.',
      items: [
        'Seamless UX',
        'One-tap Checkout',
        'Biometric Auth',
        'Saved Payment Methods',
      ],
    },
    {
      icon: <Wallet className="w-10 h-10" />,
      title: 'Mobile Wallets',
      description: 'Support for Apple Pay, Google Pay, and more.',
      items: ['Apple Pay', 'Google Pay', 'Samsung Pay', 'Biometric Auth'],
    },
    {
      icon: <QrCode className="w-10 h-10" />,
      title: 'QR Code Payments',
      description: 'Generate dynamic and static QR codes for payments.',
      items: [
        'Dynamic QR Codes',
        'Static QR Codes',
        'Bulk Recognition',
        'Analytics Tracking',
      ],
    },
  ];

  const mobileAppOptions: MobileAppOption[] = [
    {
      id: 'ecommerce-apps',
      icon: <ShoppingCart size={40} strokeWidth={1.5} />,
      title: 'E-commerce Apps',
      description: 'Perfect for retail and marketplace mobile applications',
      useCases: [
        { label: 'Online Stores' },
        { label: 'Marketplaces' },
        { label: 'Fashion Apps' },
        { label: 'Electronics' },
      ],
      features: [
        'Product Catalogs',
        'Shopping Carts',
        'Order Management',
        'Customer Profiles',
      ],
      // ctaText: 'Learn More',
      // ctaHref: '/solutions/ecommerce',
    },
    {
      id: 'on-demand-services',
      icon: <HandCoins size={40} strokeWidth={1.5} />,
      title: 'On-Demand Services',
      description: 'Ideal for service-based and gig economy applications',
      useCases: [
        { label: 'Food Delivery' },
        { label: 'Ride Sharing' },
        { label: 'Home Services' },
        { label: 'Healthcare' },
      ],
      features: [
        'Real-time bookings',
        'Service tracking',
        'Rating systems',
        'Multi-party payments',
      ],
      // ctaText: 'Learn More',
      // ctaHref: '/solutions/on-demand',
    },
    {
      id: 'subscription-apps',
      icon: <PlayCircle size={40} strokeWidth={1.5} />,
      title: 'Subscription Apps',
      description: 'Streamlined billing for subscription and membership apps',
      useCases: [
        { label: 'Media Streaming' },
        { label: 'SaaS Tools' },
        { label: 'Fitness Apps' },
        { label: 'News Platforms' },
      ],
      features: [
        'Recurring billing',
        'Trial periods',
        'Plan management',
        'Usage tracking',
      ],
      // ctaText: 'Learn More',
      // ctaHref: '/solutions/subscriptions',
    },
  ];

  const integrationSteps = [
    {
      number: '1',
      title: 'Install SDK',
      description:
        'Add KP Pay SDK to your iOS or Android project using package managers',
      code: 'npm install kppay-mobile-sdk',
    },
    {
      number: '2',
      title: 'Initialize',
      description:
        'Configure the SDK with your API keys and payment preferences',
      code: 'KPPay.initialize(apiKey, options)',
    },
    {
      number: '3',
      title: 'Process Payment',
      description: 'Create payment sessions and handle successful transactions',
      code: 'KPPay.createPayment(amount, options)',
    },
    {
      number: '4',
      title: 'Handle Response',
      description: "Receive payment confirmations and update your app's state",
      code: 'onPaymentSuccess(paymentResult)',
    },
  ];

  const sdkOptions: SDKOption[] = [
    {
      id: 'ios-sdk',
      icon: <Apple size={40} strokeWidth={1.5} />,
      title: 'iOS SDK',
      description:
        'Native Swift SDK with full iOS integration and Apple Pay support',
      features: [
        'Swift Package Manager',
        'Apple Pay Integration',
        'Touch/Face ID Support',
        'iOS 12+ Compatibility',
      ],
      ctaText: 'Download iOS SDK',
      ctaHref: ROUTES.RESOURCES,
    },
    {
      id: 'android-sdk',
      icon: <Bot size={40} strokeWidth={1.5} />,
      title: 'Android SDK',
      description:
        'Native Kotlin SDK with Google Pay and modern Android features',
      features: [
        'Gradle Dependency',
        'Google Pay Integration',
        'Biometric Authentication',
        'Android 6+ Support',
      ],
      ctaText: 'Download Android SDK',
      ctaHref: ROUTES.RESOURCES,
    },
  ];

  const mobileStats = [
    {
      value: '10K+',
      label: 'Mobile Apps',
    },
    {
      value: '95%',
      label: 'Success Rate',
    },
    {
      value: '<3S',
      label: 'Payment Time',
    },
    {
      value: '150+',
      label: 'Countries',
    },
  ];

  const ctaButtons = [
    {
      text: 'Get Started Now',
      href: ROUTES.SIGNUP,
      variant: 'outlined-white' as const,
      size: 'md' as const,
      showArrow: true,
      className: 'bg-white text-brand-primary hover:bg-white/90',
    },
    {
      text: 'View Documentation',
      href: ROUTES.RESOURCES,
      variant: 'outlined-white' as const,
      size: 'md' as const,
      showArrow: true,
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Mobile Payments"
        description="Accept payments on mobile devices with native SDKs, in-app checkout, and mobile wallet support. Optimized for the best mobile user experience."
        imageSrc={images.services.mobilePayments}
        imageAlt="Mobile Payments"
        primaryButtonText="Download SDK"
        primaryButtonHref={ROUTES.SIGNUP}
        secondaryButtonText="Integration Guide"
        secondaryButtonHref={ROUTES.RESOURCES}
      />

      <ServiceFeatures
        title="Mobile-First Payment Features"
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

      {/* Quick Integration section */}
      <QuickIntegrationSteps
        heading="Quick Integration"
        steps={integrationSteps}
      />

      <MobileAppSelector
        heading="Perfect For Any Mobile App"
        options={mobileAppOptions}
      />

      <SDKSelector heading="Native Mobile SDKs" options={sdkOptions} />

      {/* Mobile Payment Stats */}
      <TrustStats
        heading="Mobile Payment Success"
        subheading="Leading mobile apps trust KP Pay for their payment processing"
        stats={mobileStats}
        backgroundColor="bg-white"
      />

      {/* CTA Box */}
      <CTABox
        heading="Ready to Go Mobile"
        description="Start accepting mobile payments today with our native SDKs and comprehensive mobile solutions."
        buttons={ctaButtons}
        headingColor="text-text-inverse-primary"
        ctaBackgroundColor="bg-brand-primary"
        sectionBackgroundColor="bg-white"
        paddingY="pt-0 pb-12 md:pb-16 lg:pb-20"
      />
    </main>
  );
}

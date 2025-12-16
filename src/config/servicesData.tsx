// config/servicesData.tsx
import { images, type ServicePageData, ROUTES } from '@/types';
import {
  Smartphone,
  CreditCard,
  QrCode,
  Globe,
  RefreshCw,
  Users,
  TrendingUp,
  Wallet,
  DollarSign,
  PiggyBank,
  Target,
  Briefcase,
} from 'lucide-react';

export const servicesData: Record<string, ServicePageData> = {
  // Point of Sale Solutions
  pos: {
    hero: {
      title: 'Point of Sale Solutions',
      description:
        'Transform any device into a powerful payment terminal. Accept in-person payments with tap, chip, and mobile wallets for your business.',
      imageSrc: images.services.pointOfSale,
      imageAlt: 'Point of Sale Terminal',
      primaryButtonText: 'Get POS System',
      primaryButtonHref: ROUTES.SIGNUP,
      secondaryButtonText: 'Request Demo',
      secondaryButtonHref: ROUTES.CONTACT,
    },
    features: {
      title: 'Everything You Need in One System',
      variant: 'blue',
      features: [
        {
          icon: (
            <CreditCard className="w-10 h-10 text-text-inverse-secondary" />
          ),
          title: 'Tap to Pay',
          description:
            'Accept contactless payments using any smartphone or tablet.',
          items: [
            'NFC & Chip Reading',
            'Contactless Payments',
            'Mobile Wallet Support',
            'No Hardware Needed',
          ],
        },
        {
          icon: <Globe className="w-10 h-10 text-text-inverse-secondary" />,
          title: 'Universal Acceptance',
          description: 'Accept all major card brands and 40+ payment methods.',
          items: [
            'Visa, Mastercard, Amex',
            'Apple Pay, Google Pay',
            'Local Mobile Money',
            'QR Code Payments',
          ],
        },
        {
          icon: (
            <Smartphone className="w-10 h-10 text-text-inverse-secondary" />
          ),
          title: 'Offline Capability',
          description: 'Continue processing payments even without internet.',
          items: [
            'Offline Mode',
            'Auto-sync When Online',
            'Reliable Processing',
            'No Missed Sales',
          ],
        },
        {
          icon: <Briefcase className="w-10 h-10 text-text-inverse-secondary" />,
          title: 'Enterprise Security',
          description: 'Bank-grade security with end-to-end encryption.',
          items: [
            'PCI DSS Compliant',
            'End-to-end Encryption',
            'EMV Certification',
            'Fraud Protection',
          ],
        },
      ],
    },
  },

  // Mobile Payments
  mobile: {
    hero: {
      title: 'Mobile Payments',
      description:
        'Accept payments on mobile devices with native SDKs, in-app checkout, and mobile wallet support. Optimized for the best mobile user experience.',
      imageSrc: images.services.mobilePayments,
      imageAlt: 'Mobile Payment Solution',
      primaryButtonText: 'Download SDK',
      primaryButtonHref: ROUTES.SIGNUP,
      secondaryButtonText: 'Integration Guide',
      secondaryButtonHref: ROUTES.RESOURCES,
    },
    features: {
      title: 'Mobile-First Payment Features',
      variant: 'blue',
      features: [
        {
          icon: (
            <Smartphone className="w-10 h-10 text-text-inverse-secondary" />
          ),
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
          icon: <QrCode className="w-10 h-10 text-text-inverse-secondary" />,
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
          icon: <Wallet className="w-10 h-10 text-text-inverse-secondary" />,
          title: 'Mobile Wallets',
          description: 'Support for Apple Pay, Google Pay, and more.',
          items: ['Apple Pay', 'Google Pay', 'Samsung Pay', 'Biometric Auth'],
        },
        {
          icon: <QrCode className="w-10 h-10 text-text-inverse-secondary" />,
          title: 'QR Code Payments',
          description: 'Generate dynamic and static QR codes for payments.',
          items: [
            'Dynamic QR Codes',
            'Static QR Codes',
            'Bulk Recognition',
            'Analytics Tracking',
          ],
        },
      ],
    },
  },

  // Recurring Billing & Subscriptions
  subscriptions: {
    hero: {
      title: 'Recurring Billing & Subscriptions',
      description:
        'Build and scale your subscription business with automatic billing, flexible pricing models, and comprehensive customer management tools.',
      imageSrc: images.services.subscriptions,
      imageAlt: 'Subscription Management',
      primaryButtonText: 'Start Billing',
      primaryButtonHref: ROUTES.SIGNUP,
      secondaryButtonText: 'View Demo',
      secondaryButtonHref: ROUTES.CONTACT,
    },
    features: {
      title: 'Everything for Subscription Success',
      variant: 'blue',
      features: [
        {
          icon: <RefreshCw className="w-10 h-10 text-text-inverse-secondary" />,
          title: 'Automated Billing',
          description: 'Set up recurring billing that works on autopilot.',
          items: [
            'Recurring Billing Cycles',
            'Automatic Retries',
            'Dunning Management',
            'Proration Support',
          ],
        },
        {
          icon: <Target className="w-10 h-10 text-text-inverse-secondary" />,
          title: 'Flexible Plans',
          description: 'Create unlimited pricing plans and tiers.',
          items: [
            'Usage-Based Billing',
            'Tiered Pricing',
            'Add-on Services',
            'Custom Pricing',
          ],
        },
        {
          icon: <Users className="w-10 h-10 text-text-inverse-secondary" />,
          title: 'Customer Management',
          description: 'Comprehensive tools to manage your subscribers.',
          items: [
            'Customer Portal',
            'Self-Service Options',
            'Payment History',
            'Account Updates',
          ],
        },
        {
          icon: (
            <TrendingUp className="w-10 h-10 text-text-inverse-secondary" />
          ),
          title: 'Analytics & Insights',
          description: 'Deep insights into your subscription business.',
          items: [
            'MRR Tracking',
            'Churn Analysis',
            'Cohort Analysis',
            'Customer Lifetime Value',
          ],
        },
      ],
    },
  },

  // Personal Banking
  personal: {
    hero: {
      title: 'Personal Banking',
      description:
        'Modern personal banking designed for your lifestyle. Smart budgeting, global payments, and mobile-first banking experience.',
      imageSrc: images.services.onlinePayment,
      imageAlt: 'Personal Banking',
      primaryButtonText: 'Open Personal Account',
      primaryButtonHref: ROUTES.SIGNUP,
      secondaryButtonText: 'Explore Features',
      secondaryButtonHref: ROUTES.HOME,
    },
    features: {
      title: 'Banking That Works for You',
      variant: 'gray',
      features: [
        {
          icon: <Target className="w-10 h-10 text-[#e5b88f]" />,
          title: 'Smart Budgeting',
          description:
            'AI-powered budgeting tools to help you manage your finances.',
          items: [
            'Automatic Categorization',
            'Spending Insights',
            'Budget Alerts',
            'Goal Tracking',
          ],
        },
        {
          icon: <Smartphone className="w-10 h-10 text-[#e5b88f]" />,
          title: 'Mobile-First Banking',
          description: 'Complete banking experience optimized for mobile.',
          items: [
            'Instant Transfers',
            'Mobile Check Deposit',
            'Bill Pay',
            'ATM Locator',
          ],
        },
        {
          icon: <Globe className="w-10 h-10 text-[#e5b88f]" />,
          title: 'Global Payments',
          description:
            'Send and receive money internationally with competitive rates.',
          items: [
            '100+ Countries',
            'Real-time Transfers',
            'Low Fees',
            'Currency Exchange',
          ],
        },
        {
          icon: <CreditCard className="w-10 h-10 text-[#e5b88f]" />,
          title: 'Premium Cards',
          description: 'Virtual and physical cards with rewards and cashback.',
          items: [
            'Cashback Rewards',
            '2% Foreign Fees',
            'Instant Virtual Cards',
            'Spending Limits',
          ],
        },
      ],
    },
  },

  // Savings & Investment
  savings: {
    hero: {
      title: 'Savings & Investment',
      description:
        'Grow your wealth with high-yield savings accounts, smart investment portfolios, and automated savings tools designed to help you reach your financial goals.',
      imageSrc: images.services.savings,
      imageAlt: 'Savings and Investment',
      primaryButtonText: 'Start Saving',
      primaryButtonHref: ROUTES.SIGNUP,
      secondaryButtonText: 'Savings Calculator',
      secondaryButtonHref: ROUTES.RESOURCES,
    },
    features: {
      title: 'Savings & Investment Products',
      variant: 'gray',
      features: [
        {
          icon: <PiggyBank className="w-10 h-10 text-[#e5b88f]" />,
          title: 'High-Yield Savings',
          description:
            'Earn more on your savings with competitive interest rates.',
          items: [
            'Up to 5% APY',
            'FDIC Insured',
            'Daily Compounding',
            'No Monthly Fees',
          ],
        },
        {
          icon: <Target className="w-10 h-10 text-[#e5b88f]" />,
          title: 'Certificate of Deposit',
          description: 'Lock in high rates with our flexible CD terms.',
          items: [
            'Flexible Terms',
            'Guaranteed Returns',
            'Fixed Rate Protection',
            'Multiple Terms',
            'Auto-renewal Options',
          ],
        },
        {
          icon: <TrendingUp className="w-10 h-10 text-[#e5b88f]" />,
          title: 'Investment Portfolio',
          description: 'Diversified portfolios managed by expert advisors.',
          items: [
            'Professional Management',
            'Diversified Holdings',
            'Low Fees',
            'Tax Optimization',
          ],
        },
        {
          icon: <DollarSign className="w-10 h-10 text-[#e5b88f]" />,
          title: 'Goal-based Savings',
          description: 'Set and track specific savings goals for your future.',
          items: [
            'Multiple Savings Goals',
            'Goal Tracking',
            'Round-up Savings',
            'Progress Insights',
          ],
        },
      ],
    },
  },
};
